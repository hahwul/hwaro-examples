/* Graupel — search overlay. Opens from the header button or the "/" key,
   closes on Esc or backdrop click, returns focus to the trigger, and locks
   background scroll. Fuse.js loads from the CDN in footer.html; all result
   text is inserted via textContent, never innerHTML. */
(function () {
  var base = document.body.getAttribute("data-base") || "";
  var overlay = document.getElementById("search-overlay");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  var trigger = document.getElementById("search-button");
  if (!overlay || !input || !list) return;

  var fuse = null;
  var loading = false;
  var active = -1;
  var lastFocus = null;
  var HINT = "Type to search every session and page.";

  function load() {
    if (fuse || loading) return;
    loading = true;
    fetch(base + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ["title", "content"],
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        if (input.value.trim()) run(input.value);
      })
      .catch(function () {
        if (status) status.textContent = "The search index would not load — the ledger and tag pages still work.";
      });
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.documentElement.setAttribute("data-modal", "open");
    input.value = "";
    render([]);
    if (status) status.textContent = HINT;
    load();
    input.focus();
  }

  function close() {
    overlay.hidden = true;
    document.documentElement.removeAttribute("data-modal");
    if (lastFocus && lastFocus !== document.body && lastFocus.focus) {
      lastFocus.focus();
    } else if (trigger) {
      trigger.focus();
    } else {
      input.blur();
    }
  }

  function mark() {
    for (var i = 0; i < list.children.length; i++) {
      var on = i === active;
      list.children[i].setAttribute("aria-selected", on ? "true" : "false");
      list.children[i].classList.toggle("is-active", on);
    }
    if (active >= 0 && list.children[active]) {
      input.setAttribute("aria-activedescendant", list.children[active].id);
      list.children[active].scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }

  function render(results) {
    list.textContent = "";
    active = results.length ? 0 : -1;
    results.forEach(function (r, i) {
      var li = document.createElement("li");
      li.id = "search-item-" + i;
      li.className = "search-item";
      li.setAttribute("role", "option");
      var a = document.createElement("a");
      a.href = base + r.item.url;
      a.tabIndex = -1;
      var title = document.createElement("span");
      title.className = "search-item-title";
      title.textContent = r.item.title || r.item.url;
      var snippet = document.createElement("span");
      snippet.className = "search-item-snippet";
      var text = (r.item.content || "").replace(/\s+/g, " ").trim();
      snippet.textContent = text.length > 110 ? text.slice(0, 110) + "…" : text;
      a.appendChild(title);
      a.appendChild(snippet);
      li.appendChild(a);
      list.appendChild(li);
    });
    mark();
  }

  function run(q) {
    q = q.trim();
    if (!q) {
      render([]);
      if (status) status.textContent = HINT;
      return;
    }
    if (!fuse) return;
    var results = fuse.search(q).slice(0, 8);
    render(results);
    if (status) {
      status.textContent = results.length
        ? results.length + (results.length === 1 ? " result" : " results")
        : "Nothing in the ledger matches “" + q + "”.";
    }
  }

  input.addEventListener("input", function () { run(input.value); });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (list.children.length) { active = (active + 1) % list.children.length; mark(); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (list.children.length) { active = (active - 1 + list.children.length) % list.children.length; mark(); }
    } else if (e.key === "Enter") {
      if (active >= 0 && list.children[active]) {
        var link = list.children[active].querySelector("a");
        if (link) { e.preventDefault(); window.location.href = link.href; }
      }
    }
  });

  if (trigger) trigger.addEventListener("click", open);

  overlay.addEventListener("mousedown", function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) { close(); return; }
    if (e.key === "/" && overlay.hidden) {
      var t = e.target;
      var tag = t && t.tagName ? t.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || tag === "select" || (t && t.isContentEditable)) return;
      e.preventDefault();
      open();
    }
  });
})();
