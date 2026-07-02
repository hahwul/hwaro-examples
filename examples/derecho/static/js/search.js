/* Derecho — command palette search. Cmd+K / Ctrl+K opens a centered modal;
   arrow keys move the aria-selected row, Enter opens it, Esc closes and
   returns focus to the last trigger. Fuse.js loads from the CDN in
   footer.html; every result string is inserted with textContent, never
   innerHTML. */
(function () {
  var palette = document.getElementById("search-palette");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  if (!palette || !input || !list) return;

  var base = palette.getAttribute("data-base") || "";
  var IDLE = "Type to search every build on the bench — arrows to move, Enter to open.";
  var fuse = null;
  var loading = false;
  var active = -1;
  var lastFocus = null;

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
        if (status) status.textContent = "The search index would not load. The navigation still works.";
      });
  }

  function open() {
    if (!palette.hidden) return;
    lastFocus = document.activeElement;
    palette.hidden = false;
    document.documentElement.setAttribute("data-modal", "open");
    input.value = "";
    render([]);
    if (status) status.textContent = IDLE;
    load();
    input.focus();
  }

  function close() {
    if (palette.hidden) return;
    palette.hidden = true;
    document.documentElement.removeAttribute("data-modal");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
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
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      var a = document.createElement("a");
      a.href = base + r.item.url;
      a.tabIndex = -1;
      var title = document.createElement("span");
      title.className = "result-title";
      title.textContent = r.item.title || "Untitled";
      var snippet = document.createElement("span");
      snippet.className = "result-snippet";
      var body = (r.item.content || "").replace(/\s+/g, " ").trim();
      snippet.textContent = body.length > 120 ? body.slice(0, 120) + "…" : body;
      a.appendChild(title);
      a.appendChild(snippet);
      li.appendChild(a);
      li.addEventListener("mousemove", function () { active = i; mark(); });
      li.addEventListener("click", function () {
        if (a.href) window.location.href = a.href;
      });
      list.appendChild(li);
    });
    mark();
  }

  function run(q) {
    var query = q.trim();
    if (!query) {
      render([]);
      if (status) status.textContent = IDLE;
      return;
    }
    if (!fuse) return;
    var results = fuse.search(query).slice(0, 8);
    render(results);
    if (status) {
      status.textContent = results.length
        ? results.length + (results.length === 1 ? " build matches." : " builds match.")
        : "Nothing on the bench matches “" + query + "”.";
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
      e.preventDefault();
      var row = list.children[active];
      if (row) {
        var link = row.querySelector("a");
        if (link) window.location.href = link.href;
      }
    }
  });

  var triggers = document.querySelectorAll("[data-search-open]");
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", open);
  }

  var closers = document.querySelectorAll("[data-search-close]");
  for (var j = 0; j < closers.length; j++) {
    closers[j].addEventListener("click", close);
  }

  document.addEventListener("keydown", function (e) {
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (palette.hidden) { open(); } else { close(); }
      return;
    }
    if (e.key === "Escape" && !palette.hidden) {
      e.preventDefault();
      close();
    }
  });
})();
