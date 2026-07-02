(function () {
  "use strict";

  var trigger = document.getElementById("search-trigger");
  var overlay = document.getElementById("search-overlay");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  var closeBtn = document.getElementById("search-close");
  if (!trigger || !overlay || !input || !results) return;

  var fuse = null;
  var loaded = false;
  var lastFocus = null;
  var url = trigger.getAttribute("data-search-url");
  var base = url.replace(/\/search\.json.*$/, "");
  var defaultHint = status.textContent;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function loadIndex() {
    if (loaded) return;
    loaded = true;
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, ignoreLocation: true, minMatchCharLength: 2 });
        if (input.value) render(input.value);
      })
      .catch(function () { status.textContent = "The episode index could not be loaded."; });
  }

  function render(query) {
    var q = query.trim();
    results.innerHTML = "";
    if (!q) { status.textContent = defaultHint; status.hidden = false; return; }
    if (!fuse) { status.textContent = "Decoding the index…"; status.hidden = false; return; }
    var hits = fuse.search(q).slice(0, 8);
    if (!hits.length) { status.textContent = "No blocks match “" + q + "”."; status.hidden = false; return; }
    status.hidden = true;
    hits.forEach(function (hit) {
      var item = hit.item;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = base + item.url;
      var body = (item.content || "").replace(/\s+/g, " ").slice(0, 120);
      a.innerHTML =
        '<span class="result-title">' + escapeHtml(item.title || "Untitled") + "</span>" +
        '<span class="result-snippet">' + escapeHtml(body) + "</span>";
      li.appendChild(a);
      results.appendChild(li);
    });
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    loadIndex();
    input.value = "";
    render("");
    window.setTimeout(function () { input.focus(); }, 20);
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  trigger.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) close(); });
  input.addEventListener("input", function () { render(input.value); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) { e.preventDefault(); close(); return; }
    if (overlay.hidden && e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      open();
    }
  });
})();
