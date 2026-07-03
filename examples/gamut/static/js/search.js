(function () {
  "use strict";
  var base = window.BASE_URL || "";
  var overlay = document.getElementById("search-overlay");
  var openBtn = document.getElementById("search-open");
  var closeBtn = document.getElementById("search-close");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  if (!overlay || !openBtn || !input || !list) return;

  var fuse = null;
  var results = [];
  var active = -1;
  var lastFocus = null;

  fetch(base + "/search.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ["title", "content"],
        threshold: 0.34,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
    })
    .catch(function () {});

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function openOverlay() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("search-open");
    input.value = "";
    render([]);
    window.setTimeout(function () { input.focus(); }, 20);
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.body.classList.remove("search-open");
    active = -1;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function render(items) {
    results = items;
    active = -1;
    list.innerHTML = "";
    if (!items.length) {
      empty.hidden = input.value.trim().length < 2;
      return;
    }
    empty.hidden = true;
    items.forEach(function (it, i) {
      var li = document.createElement("li");
      li.className = "search-result";
      li.setAttribute("role", "option");
      li.id = "search-result-" + i;
      var a = document.createElement("a");
      a.href = base + it.url;
      a.innerHTML =
        '<span class="search-result__title">' + escapeHtml(it.title) + "</span>" +
        '<span class="search-result__excerpt">' + escapeHtml((it.content || "").slice(0, 96)) + "&hellip;</span>";
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function setActive(i) {
    var opts = list.querySelectorAll(".search-result");
    if (!opts.length) return;
    if (i < 0) i = opts.length - 1;
    if (i >= opts.length) i = 0;
    active = i;
    opts.forEach(function (el, idx) {
      el.setAttribute("aria-selected", idx === i ? "true" : "false");
    });
    opts[i].scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (!fuse || q.length < 2) { render([]); return; }
    render(fuse.search(q, { limit: 8 }).map(function (r) { return r.item; }));
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter" && active > -1 && results[active]) {
      e.preventDefault();
      window.location.href = base + results[active].url;
    }
  });

  openBtn.addEventListener("click", openOverlay);
  if (closeBtn) closeBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("mousedown", function (e) {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) { closeOverlay(); return; }
    if (e.key === "/" && overlay.hidden) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      openOverlay();
    }
  });
})();
