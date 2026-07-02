(function () {
  "use strict";

  var overlay = document.getElementById("search-overlay");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var hint = document.getElementById("search-hint");
  var openers = document.querySelectorAll("[data-search-open]");
  var closers = overlay ? overlay.querySelectorAll("[data-search-close]") : [];
  var base = window.NABI_BASE_URL || "";
  var fuse = null;
  var selected = -1;
  var lastFocused = null;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function loadIndex() {
    if (fuse) return;
    fetch(base + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.3, includeMatches: false });
      })
      .catch(function () {
        hint.textContent = "Search index could not be loaded.";
      });
  }

  function render(items) {
    results.innerHTML = "";
    selected = -1;
    items.slice(0, 8).forEach(function (result) {
      var item = result.item || result;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = base + item.url;
      var title = document.createElement("span");
      title.className = "search-result-title";
      title.innerHTML = escapeHtml(item.title || "Untitled");
      var snippet = document.createElement("span");
      snippet.className = "search-result-snippet";
      snippet.innerHTML = escapeHtml((item.content || "").slice(0, 110)) + "&hellip;";
      a.appendChild(title);
      a.appendChild(snippet);
      li.appendChild(a);
      results.appendChild(li);
    });
    hint.textContent = items.length ? items.length + " result" + (items.length === 1 ? "" : "s") : "No matches. Try a season, a market, or a writer's name.";
  }

  function openOverlay(trigger) {
    lastFocused = trigger || document.activeElement;
    loadIndex();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    results.innerHTML = "";
    hint.textContent = "Type to search every feature and ferment note. Press Esc to close.";
    window.setTimeout(function () { input.focus(); }, 0);
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  openers.forEach(function (btn) {
    btn.addEventListener("click", function () { openOverlay(btn); });
  });
  closers.forEach(function (el) {
    el.addEventListener("click", closeOverlay);
  });

  document.addEventListener("keydown", function (e) {
    var tag = document.activeElement ? document.activeElement.tagName : "";
    var typing = tag === "INPUT" || tag === "TEXTAREA";
    if (e.key === "/" && !typing) {
      e.preventDefault();
      openOverlay(document.activeElement);
    } else if (e.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    } else if (!overlay.hidden && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      var items = results.querySelectorAll("li");
      if (!items.length) return;
      e.preventDefault();
      items.forEach(function (li) { li.removeAttribute("aria-selected"); });
      selected = e.key === "ArrowDown" ? Math.min(selected + 1, items.length - 1) : Math.max(selected - 1, 0);
      items[selected].setAttribute("aria-selected", "true");
      items[selected].querySelector("a").focus();
    }
  });

  if (input) {
    input.addEventListener("input", function () {
      if (!fuse || !input.value.trim()) { render([]); return; }
      render(fuse.search(input.value.trim()));
    });
  }
})();
