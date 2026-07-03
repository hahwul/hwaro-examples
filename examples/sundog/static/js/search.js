/* Sundog — search overlay. Opens from the header button or the "/" key,
   closes on Esc, returns focus to the trigger. Fuse.js loads from the CDN
   in footer.html; the index is hwaro's fuse_json output. All result text
   is inserted with textContent — never innerHTML. */
(function () {
  var veil = document.getElementById("search-veil");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  var trigger = document.getElementById("search-open");
  if (!veil || !input || !list) return;

  var base = veil.getAttribute("data-base") || "";
  var fuse = null;
  var loading = false;
  var items = [];
  var active = -1;
  var idleText = "Type to search every essay on the site.";

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
        if (status) status.textContent = "The index would not load — try the essays page instead.";
      });
  }

  function open() {
    veil.hidden = false;
    document.documentElement.setAttribute("data-modal", "open");
    input.value = "";
    render([]);
    if (status) status.textContent = idleText;
    load();
    input.focus();
  }

  function close() {
    veil.hidden = true;
    document.documentElement.removeAttribute("data-modal");
    if (trigger) trigger.focus();
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

  function snippet(text) {
    if (!text) return "";
    var words = text.split(/\s+/).slice(0, 22).join(" ");
    return words + (words.length < text.length ? "…" : "");
  }

  function render(results) {
    list.textContent = "";
    items = results;
    active = results.length ? 0 : -1;
    results.forEach(function (r, i) {
      var li = document.createElement("li");
      li.id = "search-result-" + i;
      li.className = "search-result";
      li.setAttribute("role", "option");
      var a = document.createElement("a");
      a.href = base + r.item.url;
      a.tabIndex = -1;
      var title = document.createElement("span");
      title.className = "search-result-title";
      title.textContent = r.item.title;
      var snip = document.createElement("span");
      snip.className = "search-result-snip";
      snip.textContent = snippet(r.item.content);
      a.appendChild(title);
      a.appendChild(snip);
      li.appendChild(a);
      li.addEventListener("mouseenter", function () { active = i; mark(); });
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
    if (!query) status.textContent = idleText;
    else if (!results.length) status.textContent = "Nothing here matches “" + query + "”.";
    else status.textContent = results.length + (results.length === 1 ? " essay found." : " essays found.");
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
    var tag = e.target && e.target.tagName;
    var typing = tag === "INPUT" || tag === "TEXTAREA" || (e.target && e.target.isContentEditable);
    if (e.key === "/" && veil.hidden && !typing) {
      e.preventDefault();
      open();
    } else if (e.key === "Escape" && !veil.hidden) {
      close();
    }
  });

  veil.addEventListener("mousedown", function (e) {
    if (e.target === veil) close();
  });

  if (trigger) trigger.addEventListener("click", open);
})();
