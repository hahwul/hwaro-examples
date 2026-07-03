(function () {
  "use strict";

  var trigger = document.getElementById("search-trigger");
  var overlay = document.getElementById("search-overlay");
  if (!trigger || !overlay) return;

  var input = document.getElementById("search-input");
  var status = document.getElementById("search-status");
  var results = document.getElementById("search-results");
  var baseUrl = input.getAttribute("data-base") || "";
  var indexUrl = input.getAttribute("data-index");

  var fuse = null;
  var loaded = false;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function loadIndex() {
    if (loaded) return;
    loaded = true;
    status.textContent = "loading index...";
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, includeScore: true });
        status.textContent = "type to search commands and pages";
      })
      .catch(function () {
        status.textContent = "search index failed to load";
      });
  }

  function renderResults(items) {
    results.innerHTML = "";
    items.slice(0, 8).forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = baseUrl + item.url;
      var title = document.createElement("span");
      title.className = "sr-title";
      title.innerHTML = escapeHtml(item.title || "untitled");
      var snippet = document.createElement("span");
      snippet.className = "sr-snippet";
      var text = (item.content || "").replace(/\s+/g, " ").trim();
      snippet.innerHTML = escapeHtml(text.slice(0, 110)) + (text.length > 110 ? "…" : "");
      a.appendChild(title);
      a.appendChild(snippet);
      li.appendChild(a);
      results.appendChild(li);
    });
  }

  function onInput() {
    var q = input.value.trim();
    if (!q) { results.innerHTML = ""; status.textContent = "type to search commands and pages"; return; }
    if (!fuse) { status.textContent = "loading index..."; return; }
    var hits = fuse.search(q).map(function (r) { return r.item; });
    status.textContent = hits.length ? hits.length + " result" + (hits.length === 1 ? "" : "s") : "no matches";
    renderResults(hits);
  }

  function openOverlay() {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    loadIndex();
    input.value = "";
    results.innerHTML = "";
    status.textContent = "type to search commands and pages";
    window.setTimeout(function () { input.focus(); }, 0);
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    trigger.focus();
  }

  trigger.addEventListener("click", openOverlay);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && overlay.hidden && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      openOverlay();
    } else if (e.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });

  input.addEventListener("input", onInput);
})();
