(function () {
  "use strict";
  var baseUrl = document.body.getAttribute("data-base-url") || "";
  var modal = document.getElementById("search-modal");
  var trigger = document.getElementById("search-trigger");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  if (!modal || !trigger || !input || !list) return;

  var fuse = null;
  var items = [];
  var selected = -1;
  var lastFocused = null;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function loadIndex() {
    if (fuse) return;
    fetch(baseUrl + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, includeMatches: false });
      })
      .catch(function () { /* index unavailable — palette stays empty */ });
  }

  function render(results) {
    list.innerHTML = "";
    items = results;
    selected = results.length ? 0 : -1;
    empty.hidden = results.length !== 0 || input.value.trim() === "";
    results.forEach(function (r, i) {
      var page = r.item;
      var stub = (page.url || "/").replace(/^\/|\/$/g, "") || "home";
      var li = document.createElement("li");
      li.className = "palette-result";
      li.setAttribute("role", "option");
      li.id = "search-result-" + i;
      li.setAttribute("aria-selected", i === selected ? "true" : "false");
      var a = document.createElement("a");
      a.href = baseUrl + page.url;
      a.innerHTML =
        '<span class="search-result-stub">$ cat ' + escapeHtml(stub) + '</span>' +
        '<span class="search-result-title">' + escapeHtml(page.title) + "</span>";
      li.appendChild(a);
      list.appendChild(li);
    });
    input.setAttribute("aria-expanded", results.length ? "true" : "false");
  }

  function updateSelection() {
    var nodes = list.querySelectorAll(".palette-result");
    nodes.forEach(function (node, i) {
      node.setAttribute("aria-selected", i === selected ? "true" : "false");
      if (i === selected) node.scrollIntoView({ block: "nearest" });
    });
  }

  function open() {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    loadIndex();
    input.value = "";
    render([]);
    empty.hidden = true;
    input.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  trigger.addEventListener("click", open);

  modal.querySelectorAll("[data-search-close]").forEach(function (el) {
    el.addEventListener("click", close);
  });

  document.addEventListener("keydown", function (e) {
    var mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      modal.hidden ? open() : close();
      return;
    }
    if (!modal.hidden && e.key === "Escape") {
      close();
    }
  });

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (!q || !fuse) { render([]); return; }
    render(fuse.search(q, { limit: 8 }));
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length) { selected = (selected + 1) % items.length; updateSelection(); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length) { selected = (selected - 1 + items.length) % items.length; updateSelection(); }
    } else if (e.key === "Enter") {
      if (selected >= 0 && items[selected]) {
        window.location.href = baseUrl + items[selected].item.url;
      }
    }
  });
})();
