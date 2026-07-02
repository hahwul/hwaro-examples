/* Aurora — search overlay. Opens from the header button or the "/" key,
   closes on Esc, returns focus to the trigger, and locks background scroll.
   Fuse.js loads from the CDN in footer.html; all result text is inserted
   with textContent, never innerHTML. */
(function () {
  var base = document.body.getAttribute("data-base") || "";
  var overlay = document.getElementById("search-overlay");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  var openBtn = document.getElementById("search-open");
  var closeBtn = document.getElementById("search-close");
  if (!overlay || !input || !list) return;

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
        if (status) status.textContent = "The search index would not load. The navigation above still works.";
      });
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.documentElement.setAttribute("data-modal", "open");
    input.value = "";
    render([]);
    if (status) status.textContent = "Type to search every plate and page in the catalog.";
    load();
    input.focus();
  }

  function close() {
    overlay.hidden = true;
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
      snippet.textContent = body.length > 130 ? body.slice(0, 130) + "…" : body;
      a.appendChild(title);
      a.appendChild(snippet);
      li.appendChild(a);
      li.addEventListener("mousemove", function () { active = i; mark(); });
      list.appendChild(li);
    });
    mark();
  }

  function run(q) {
    var query = q.trim();
    if (!query) {
      render([]);
      if (status) status.textContent = "Type to search every plate and page in the catalog.";
      return;
    }
    if (!fuse) return;
    var results = fuse.search(query).slice(0, 8);
    render(results);
    if (status) {
      status.textContent = results.length
        ? results.length + (results.length === 1 ? " plate answers." : " entries answer.")
        : "Nothing in the register matches “" + query + "”.";
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
      var row = list.children[active];
      if (row) {
        var link = row.querySelector("a");
        if (link) window.location.href = link.href;
      }
    }
  });

  if (openBtn) openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);

  overlay.addEventListener("mousedown", function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) {
      close();
      return;
    }
    if (e.key === "/" && overlay.hidden) {
      var t = e.target;
      var tag = t && t.tagName ? t.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || tag === "select" || (t && t.isContentEditable)) return;
      e.preventDefault();
      open();
    }
  });
})();
