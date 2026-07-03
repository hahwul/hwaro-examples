(function () {
  var base = window.__BASE_URL__ || "";
  var openBtn = document.getElementById("search-open");
  var dialog = document.getElementById("search-dialog");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  if (!dialog || !input || !list) return;

  var fuse = null;
  var active = -1;
  var lastFocus = null;

  fetch(base + "/search.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, includeScore: true });
    })
    .catch(function () { /* search index unavailable */ });

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function render(items) {
    list.innerHTML = "";
    active = -1;
    empty.hidden = items.length > 0 || input.value.trim() === "";
    items.slice(0, 8).forEach(function (r, i) {
      var page = r.item;
      var li = document.createElement("li");
      li.className = "search-result";
      li.id = "search-result-" + i;
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      var href = base + page.url;
      li.innerHTML =
        '<a href="' + href + '" tabindex="-1">' +
        '<span class="search-result-title">' + escapeHtml(page.title) + "</span>" +
        '<span class="search-result-url">' + escapeHtml(page.url) + "</span>" +
        "</a>";
      list.appendChild(li);
    });
  }

  function setActive(index) {
    var items = list.querySelectorAll(".search-result");
    if (!items.length) return;
    active = (index + items.length) % items.length;
    items.forEach(function (li, i) {
      li.setAttribute("aria-selected", i === active ? "true" : "false");
    });
    items[active].scrollIntoView({ block: "nearest" });
  }

  function openDialog() {
    lastFocus = document.activeElement;
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    list.innerHTML = "";
    empty.hidden = true;
    input.focus();
  }

  function closeDialog() {
    dialog.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  if (openBtn) openBtn.addEventListener("click", openDialog);

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) closeDialog();
  });

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (!fuse || q === "") { render([]); return; }
    render(fuse.search(q));
  });

  input.addEventListener("keydown", function (e) {
    var items = list.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter" && active > -1 && items[active]) {
      e.preventDefault();
      var link = items[active].querySelector("a");
      if (link) window.location.href = link.getAttribute("href");
    } else if (e.key === "Escape") {
      closeDialog();
    }
  });

  document.addEventListener("keydown", function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    var typing = tag === "INPUT" || tag === "TEXTAREA" || document.activeElement.isContentEditable;
    if (e.key === "/" && !typing && dialog.hidden) {
      e.preventDefault();
      openDialog();
    } else if (e.key === "Escape" && !dialog.hidden) {
      closeDialog();
    }
  });
})();
