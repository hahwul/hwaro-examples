(function () {
  "use strict";

  var overlay = document.getElementById("search-overlay");
  var openBtn = document.getElementById("search-open");
  var closeBtn = document.getElementById("search-close");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  if (!overlay || !openBtn || !input || !results) return;

  var fuse = null;
  var loaded = false;
  var items = [];
  var active = -1;
  var lastFocus = null;

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
    fetch(BASE_URL + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ["title", "content"],
          threshold: 0.3,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
      })
      .catch(function () { loaded = false; });
  }

  function openOverlay() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.documentElement.classList.add("search-open");
    loadIndex();
    window.setTimeout(function () { input.focus(); }, 20);
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.documentElement.classList.remove("search-open");
    input.value = "";
    results.innerHTML = "";
    empty.hidden = true;
    active = -1;
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function snippet(text) {
    var clean = String(text || "").replace(/\s+/g, " ").trim();
    return clean.length > 150 ? clean.slice(0, 150) + "…" : clean;
  }

  function render(matches) {
    results.innerHTML = "";
    items = [];
    active = -1;
    if (!matches.length) { empty.hidden = false; return; }
    empty.hidden = true;
    matches.slice(0, 8).forEach(function (m, i) {
      var it = m.item;
      var li = document.createElement("li");
      li.className = "search-result";
      li.setAttribute("role", "option");
      li.id = "search-result-" + i;
      var a = document.createElement("a");
      a.href = BASE_URL + it.url;
      a.innerHTML =
        '<span class="search-result__title">' + escapeHtml(it.title) + "</span>" +
        '<span class="search-result__excerpt">' + escapeHtml(snippet(it.content)) + "</span>";
      li.appendChild(a);
      results.appendChild(li);
      items.push(li);
    });
  }

  function setActive(next) {
    if (!items.length) return;
    if (active >= 0) items[active].classList.remove("is-active");
    active = (next + items.length) % items.length;
    var el = items[active];
    el.classList.add("is-active");
    input.setAttribute("aria-activedescendant", el.id);
    el.scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (!q || !fuse) { results.innerHTML = ""; empty.hidden = true; return; }
    render(fuse.search(q));
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter" && active >= 0) {
      var link = items[active].querySelector("a");
      if (link) window.location.href = link.href;
    }
  });

  openBtn.addEventListener("click", openOverlay);
  if (closeBtn) closeBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("mousedown", function (e) {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && overlay.hidden) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      openOverlay();
    } else if (e.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });
})();
