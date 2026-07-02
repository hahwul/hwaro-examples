(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  if (!input || !results || !status) return;

  var base = window.MONSOON_BASE || "";
  var fuse = null;
  var ready = false;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function snippet(text, query) {
    var clean = String(text).replace(/\s+/g, " ").trim();
    var i = clean.toLowerCase().indexOf(query.toLowerCase());
    if (i < 0) return clean.slice(0, 150);
    var start = Math.max(0, i - 50);
    var end = Math.min(clean.length, i + 110);
    return (start > 0 ? "… " : "") + clean.slice(start, end) + (end < clean.length ? " …" : "");
  }

  function render(matches, query) {
    results.innerHTML = "";
    if (!matches.length) {
      status.textContent = "No jars match “" + query + "”.";
      return;
    }
    status.textContent = matches.length + (matches.length === 1 ? " match" : " matches") + " for “" + query + "”.";
    matches.slice(0, 20).forEach(function (m) {
      var item = m.item;
      var li = document.createElement("li");
      li.className = "search__result";
      li.innerHTML =
        '<a class="search__hit" href="' + escapeHtml(base + item.url) + '">' +
        '<span class="search__hit-title">' + escapeHtml(item.title) + "</span>" +
        '<span class="search__hit-snip">' + escapeHtml(snippet(item.content, query)) + "</span>" +
        "</a>";
      results.appendChild(li);
    });
  }

  function run() {
    var query = input.value.trim();
    results.innerHTML = "";
    if (!query) {
      status.textContent = ready ? "Type to search the log." : "";
      return;
    }
    if (!ready) {
      status.textContent = "Loading the index…";
      return;
    }
    render(fuse.search(query), query);
  }

  status.textContent = "Loading the index…";
  fetch(window.MONSOON_SEARCH_JSON)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.34, ignoreLocation: true, minMatchCharLength: 2 });
      ready = true;
      run();
    })
    .catch(function () { status.textContent = "The search index could not be loaded."; });

  input.addEventListener("input", run);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { input.value = ""; run(); }
  });
})();
