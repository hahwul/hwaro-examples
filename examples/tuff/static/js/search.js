/* Tuff — command palette search (Cmd+K / Ctrl+K).
   Fuse.js loads from the CDN in footer.html; the index is the fuse_json
   file hwaro builds. All result text is inserted via textContent. */
(function () {
  var base = document.body.getAttribute("data-base") || "";
  var backdrop = document.getElementById("palette");
  var input = document.getElementById("palette-input");
  var list = document.getElementById("palette-results");
  var status = document.getElementById("palette-status");
  var trigger = document.getElementById("search-button");
  if (!backdrop || !input || !list) return;

  var fuse = null;
  var loading = false;
  var items = [];
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
        if (status) status.textContent = "The search index would not load — the sidebar tree still works.";
      });
  }

  function open() {
    lastFocus = document.activeElement;
    backdrop.hidden = false;
    document.documentElement.setAttribute("data-modal", "open");
    input.value = "";
    render([]);
    if (status) status.textContent = "Type to search every tutorial and page.";
    load();
    input.focus();
  }

  function close() {
    backdrop.hidden = true;
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
    items = results;
    active = results.length ? 0 : -1;
    results.forEach(function (r, i) {
      var li = document.createElement("li");
      li.id = "palette-item-" + i;
      li.className = "palette-item";
      li.setAttribute("role", "option");
      var a = document.createElement("a");
      a.href = base + r.item.url;
      a.tabIndex = -1;
      var title = document.createElement("span");
      title.className = "palette-item-title";
      title.textContent = r.item.title;
      var path = document.createElement("span");
      path.className = "palette-item-path";
      path.textContent = r.item.url;
      a.appendChild(title);
      a.appendChild(path);
      li.appendChild(a);
      li.addEventListener("mouseenter", function () {
        active = i;
        mark();
      });
      list.appendChild(li);
    });
    mark();
  }

  function run(q) {
    if (!fuse) return;
    var query = q.trim();
    var results = query ? fuse.search(query).slice(0, 8) : [];
    render(results);
    if (!status) return;
    if (!query) status.textContent = "Type to search every tutorial and page.";
    else if (!results.length) status.textContent = "Nothing on the bench matches “" + query + "”.";
    else status.textContent = results.length + (results.length === 1 ? " result." : " results.");
  }

  input.addEventListener("input", function () { run(input.value); });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length) { active = (active + 1) % items.length; mark(); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length) { active = (active - 1 + items.length) % items.length; mark(); }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0 && items[active]) window.location.href = base + items[active].item.url;
    }
  });

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      if (backdrop.hidden) open();
      else close();
    } else if (e.key === "Escape" && !backdrop.hidden) {
      close();
    }
  });

  backdrop.addEventListener("mousedown", function (e) {
    if (e.target === backdrop) close();
  });

  if (trigger) trigger.addEventListener("click", open);
})();
