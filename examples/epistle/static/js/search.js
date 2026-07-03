(function () {
  var base = window.__BASE_URL__ || "";
  var trigger = document.getElementById("search-trigger");
  var overlay = document.getElementById("search-overlay");
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var empty = document.getElementById("search-empty");
  if (!overlay || !input || !list) return;

  var fuse = null;
  var lastFocus = null;

  fetch(base + "/search.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32 });
    })
    .catch(function () { /* search index unavailable */ });

  function render(items) {
    list.innerHTML = "";
    var query = input.value.trim();
    empty.hidden = items.length > 0 || query === "";
    items.slice(0, 8).forEach(function (r) {
      var page = r.item;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = base + page.url;
      var title = document.createElement("span");
      title.className = "search-result-title";
      title.textContent = page.title || "Untitled";
      var snippet = document.createElement("span");
      snippet.className = "search-result-snippet";
      snippet.textContent = (page.content || "").slice(0, 110).trim() + "…";
      a.appendChild(title);
      a.appendChild(snippet);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function openOverlay() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    list.innerHTML = "";
    empty.hidden = true;
    input.focus();
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  trigger.addEventListener("click", openOverlay);

  overlay.querySelectorAll("[data-search-close]").forEach(function (el) {
    el.addEventListener("click", closeOverlay);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && overlay.hidden) {
      var tag = (document.activeElement || {}).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      openOverlay();
    } else if (e.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });

  input.addEventListener("input", function () {
    var query = input.value.trim();
    if (!query || !fuse) { render([]); return; }
    render(fuse.search(query));
  });
})();
