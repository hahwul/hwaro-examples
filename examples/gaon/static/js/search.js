(function () {
  "use strict";
  var baseUrl = document.documentElement.getAttribute("data-base-url") || "";
  var modal = document.getElementById("search-modal");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  var openers = [document.getElementById("search-trigger-top"), document.getElementById("search-trigger")].filter(Boolean);
  var closers = document.querySelectorAll("[data-search-close]");
  if (!modal || !input || !results || !openers.length) return;

  var fuse = null;
  var items = [];
  var selectedIndex = -1;
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
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32 });
      })
      .catch(function () { /* search index unavailable; palette still opens */ });
  }

  function render(list) {
    results.innerHTML = "";
    items = list;
    selectedIndex = list.length ? 0 : -1;
    empty.hidden = list.length !== 0 || input.value.trim() === "";
    list.forEach(function (r, i) {
      var page = r.item;
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.id = "search-opt-" + i;
      li.setAttribute("aria-selected", i === 0 ? "true" : "false");
      li.className = "palette-result";
      var title = document.createElement("p");
      title.className = "palette-result-title";
      title.innerHTML = escapeHtml(page.title || "Untitled");
      var snippet = document.createElement("p");
      snippet.className = "palette-result-snippet";
      snippet.innerHTML = escapeHtml(String(page.content || "").replace(/\s+/g, " ").trim().slice(0, 110));
      li.appendChild(title);
      li.appendChild(snippet);
      li.addEventListener("mousedown", function (e) { e.preventDefault(); go(page); });
      results.appendChild(li);
    });
    input.setAttribute("aria-expanded", list.length ? "true" : "false");
    input.setAttribute("aria-activedescendant", selectedIndex >= 0 ? "search-opt-" + selectedIndex : "");
  }

  function go(page) {
    if (page && page.url) window.location.href = baseUrl + page.url;
  }

  function updateSelection(next) {
    var rows = results.querySelectorAll(".palette-result");
    if (!rows.length) return;
    selectedIndex = (next + rows.length) % rows.length;
    rows.forEach(function (row, i) { row.setAttribute("aria-selected", i === selectedIndex ? "true" : "false"); });
    rows[selectedIndex].scrollIntoView({ block: "nearest" });
    input.setAttribute("aria-activedescendant", "search-opt-" + selectedIndex);
  }

  function openPalette(trigger) {
    lastFocused = trigger || document.activeElement;
    loadIndex();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    render([]);
    window.setTimeout(function () { input.focus(); }, 0);
  }
  function closePalette() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  openers.forEach(function (btn) { btn.addEventListener("click", function () { openPalette(btn); }); });
  closers.forEach(function (el) { el.addEventListener("click", closePalette); });

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (!fuse || !q) { render([]); return; }
    render(fuse.search(q).slice(0, 8));
  });

  document.addEventListener("keydown", function (e) {
    var mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.hidden) openPalette(); else closePalette();
      return;
    }
    if (modal.hidden) return;
    if (e.key === "Escape") { closePalette(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); updateSelection(selectedIndex + 1); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); updateSelection(selectedIndex - 1); return; }
    if (e.key === "Enter" && selectedIndex >= 0 && items[selectedIndex]) { go(items[selectedIndex].item); }
  });
})();
