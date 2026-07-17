/* Command palette search (Cmd/Ctrl+K, or "/"). Fuse.js over search.json;
   arrow keys move an aria-selected row, Enter opens, Esc closes. Result DOM is
   built with text nodes, never innerHTML with index data. */
(function () {
  "use strict";
  var modal = document.getElementById("search-modal");
  var trigger = document.getElementById("search-trigger");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var hint = document.getElementById("search-hint");
  var empty = document.getElementById("search-empty");
  if (!modal || !input || !results) return;

  var base = document.documentElement.getAttribute("data-base-url") || "";
  var fuse = null, items = [], selected = -1, lastFocus = null;

  function href(u) {
    u = u || "/";
    if (/^https?:/.test(u)) return u;
    if (base && u.lastIndexOf(base, 0) === 0) return u;
    return base + u;
  }

  function load() {
    if (fuse || !window.Fuse) return;
    fetch(base + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        fuse = new Fuse(d, { keys: ["title", "content"], threshold: 0.34, ignoreLocation: true });
      })
      .catch(function () {});
  }

  function isOpen() { return !modal.hidden; }

  function open() {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    load();
    input.value = "";
    render([]);
    trigger && trigger.setAttribute("aria-expanded", "true");
    window.setTimeout(function () { input.focus(); }, 20);
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    selected = -1;
    input.removeAttribute("aria-activedescendant");
    trigger && trigger.setAttribute("aria-expanded", "false");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function render(hits) {
    results.textContent = "";
    items = [];
    selected = -1;
    input.removeAttribute("aria-activedescendant");
    if (!input.value) { hint.hidden = false; empty.hidden = true; return; }
    hint.hidden = true;
    if (!hits.length) { empty.hidden = false; return; }
    empty.hidden = true;
    hits.forEach(function (h, i) {
      var it = h.item || h;
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.id = "search-opt-" + i;
      var a = document.createElement("a");
      a.href = href(it.url);
      var t = document.createElement("span");
      t.className = "res-title";
      t.textContent = it.title || it.url || "Untitled";
      a.appendChild(t);
      if (it.section) {
        var k = document.createElement("span");
        k.className = "res-kind";
        k.textContent = it.section;
        a.appendChild(k);
      }
      li.appendChild(a);
      results.appendChild(li);
      items.push(li);
    });
  }

  function search() {
    var q = input.value.trim();
    if (!fuse || !q) { render([]); return; }
    render(fuse.search(q).slice(0, 8));
  }

  function move(dir) {
    if (!items.length) return;
    if (selected >= 0) items[selected].setAttribute("aria-selected", "false");
    selected = (selected + dir + items.length) % items.length;
    var el = items[selected];
    el.setAttribute("aria-selected", "true");
    input.setAttribute("aria-activedescendant", el.id);
    el.scrollIntoView({ block: "nearest" });
  }

  function activate() {
    var i = selected >= 0 ? selected : 0;
    var a = items[i] && items[i].querySelector("a");
    if (a) window.location.href = a.href;
  }

  trigger && trigger.addEventListener("click", open);
  var closers = modal.querySelectorAll("[data-search-close]");
  for (var c = 0; c < closers.length; c++) closers[c].addEventListener("click", close);

  input.addEventListener("input", search);
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
    else if (e.key === "Enter") { e.preventDefault(); activate(); }
    else if (e.key === "Escape") { e.preventDefault(); close(); }
  });

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      isOpen() ? close() : open();
    } else if (e.key === "Escape" && isOpen()) {
      close();
    } else if (e.key === "/" && !isOpen()) {
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") { e.preventDefault(); open(); }
    }
  });
})();
