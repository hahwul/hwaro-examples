(function () {
  "use strict";

  var baseUrl = document.currentScript.getAttribute("data-base-url") || "";
  var overlay = document.getElementById("search-overlay");
  var openBtn = document.getElementById("search-open");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  if (!overlay || !openBtn || !input || !results || !status) return;

  var fuse = null;
  var lastFocused = null;

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function loadIndex() {
    if (fuse) return;
    fetch(baseUrl + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, includeScore: true });
      })
      .catch(function () {
        status.textContent = "Search index could not be loaded.";
      });
  }

  function openOverlay() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    loadIndex();
    input.value = "";
    results.innerHTML = "";
    status.textContent = "Type to search every study and annotation.";
    input.focus();
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function render(query) {
    if (!query) {
      results.innerHTML = "";
      status.textContent = "Type to search every study and annotation.";
      return;
    }
    if (!fuse) {
      status.textContent = "Loading the index…";
      return;
    }
    var hits = fuse.search(query).slice(0, 8);
    if (hits.length === 0) {
      results.innerHTML = "";
      status.textContent = 'No studies match "' + query + '".';
      return;
    }
    status.textContent = hits.length + " result" + (hits.length === 1 ? "" : "s");
    results.innerHTML = hits.map(function (hit) {
      var item = hit.item;
      var url = baseUrl + item.url;
      var title = escapeHtml(item.title || "Untitled");
      var snippet = escapeHtml((item.content || "").slice(0, 120)).trim();
      return '<li role="option"><a href="' + url + '"><span class="search-result-title">' + title +
        '</span><span class="search-result-snippet">' + snippet + '…</span></a></li>';
    }).join("");
  }

  openBtn.addEventListener("click", openOverlay);
  input.addEventListener("input", function () { render(input.value.trim()); });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && overlay.hidden) {
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      openOverlay();
    } else if (e.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });
})();
