/* Command palette (Cmd/Ctrl+K). Fuse.js over search.json; arrow keys move an
   aria-selected row, Enter opens it, Esc closes. Results are built as DOM
   nodes with textContent, never innerHTML with index data. */
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

  if (trigger && !/Mac|iPhone|iPad/.test(navigator.platform)) {
    var key = trigger.querySelector("kbd");
    if (key) key.textContent = "Ctrl K";
  }

  function load() {
    if (fuse || !window.Fuse) return;
    fetch(base + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        fuse = new Fuse(d, { keys: ["title", "content"], threshold: 0.34, ignoreLocation: true });
        search();
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
    input.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function render(hits) {
    results.textContent = "";
    items = [];
    selected = -1;
    input.removeAttribute("aria-activedescendant");
    hint.hidden = !!input.value;
    empty.hidden = !input.value || hits.length > 0;
    hits.forEach(function (h, i) {
      var it = h.item;
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      li.id = "search-opt-" + i;
      var a = document.createElement("a");
      a.href = it.url;
      a.tabIndex = -1;
      var t = document.createElement("span");
      t.className = "res-title";
      t.textContent = it.title || it.url;
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
    if (items.length) move(1);
  }

  function search() {
    var q = input.value.trim();
    render(fuse && q ? fuse.search(q).slice(0, 8) : []);
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
    var a = items[selected] && items[selected].querySelector("a");
    if (a) window.location.href = a.href;
  }

  if (trigger) trigger.addEventListener("click", open);
  modal.querySelector("[data-search-close]").addEventListener("click", close);
  input.addEventListener("input", search);
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
    else if (e.key === "Enter") { e.preventDefault(); activate(); }
  });
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      if (isOpen()) close(); else open();
    } else if (e.key === "Escape" && isOpen()) {
      e.preventDefault();
      close();
    }
  });
})();
