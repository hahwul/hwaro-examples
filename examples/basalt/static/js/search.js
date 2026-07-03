(function () {
  "use strict";
  var baseUrl = document.documentElement.getAttribute("data-base-url") || "";
  var modal = document.getElementById("search-modal");
  var trigger = document.getElementById("search-trigger");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  if (!modal || !trigger || !input || !list) return;

  var fuse = null;
  var items = [];
  var selected = -1;

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
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, includeMatches: true });
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
      var li = document.createElement("li");
      li.className = "search-result";
      li.setAttribute("role", "option");
      li.id = "search-result-" + i;
      li.setAttribute("aria-selected", i === selected ? "true" : "false");
      var topic = page.url.replace(/^\/|\/$/g, "") || "cluster/overview";
      var a = document.createElement("a");
      a.href = baseUrl + page.url;
      a.innerHTML =
        '<span class="search-result-topic">' + escapeHtml(topic) + '</span>' +
        '<span class="search-result-title">' + escapeHtml(page.title) + "</span>";
      li.appendChild(a);
      list.appendChild(li);
    });
    input.setAttribute("aria-expanded", results.length ? "true" : "false");
  }

  function updateSelection() {
    var nodes = list.querySelectorAll(".search-result");
    nodes.forEach(function (node, i) {
      node.setAttribute("aria-selected", i === selected ? "true" : "false");
      if (i === selected) node.scrollIntoView({ block: "nearest" });
    });
    input.setAttribute("aria-activedescendant", selected >= 0 ? "search-result-" + selected : "");
  }

  function open() {
    loadIndex();
    modal.hidden = false;
    input.value = "";
    render([]);
    input.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    trigger.focus();
  }

  trigger.addEventListener("click", open);
  modal.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-search-close")) close();
  });

  input.addEventListener("input", function () {
    if (!fuse || input.value.trim() === "") { render([]); return; }
    render(fuse.search(input.value).slice(0, 8));
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (items.length) { selected = (selected + 1) % items.length; updateSelection(); }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (items.length) { selected = (selected - 1 + items.length) % items.length; updateSelection(); }
    } else if (event.key === "Enter") {
      if (selected >= 0 && items[selected]) window.location.href = baseUrl + items[selected].item.url;
    } else if (event.key === "Escape") {
      close();
    }
  });

  document.addEventListener("keydown", function (event) {
    var meta = event.metaKey || event.ctrlKey;
    if (meta && event.key.toLowerCase() === "k") {
      event.preventDefault();
      modal.hidden ? open() : close();
    } else if (event.key === "Escape" && !modal.hidden) {
      close();
    }
  });
})();
