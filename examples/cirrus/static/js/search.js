(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var status = document.getElementById("search-status");
  var list = document.getElementById("search-results");
  if (!input || !status || !list) return;

  var fuse = null;
  var baseUrl = (window.CIRRUS_SEARCH_URL || "").replace(/\/search\.json$/, "");

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function snippet(text, query) {
    var plain = String(text || "").replace(/\s+/g, " ").trim();
    var idx = plain.toLowerCase().indexOf(query.toLowerCase());
    var start = idx > 40 ? idx - 40 : 0;
    var slice = plain.slice(start, start + 160).trim();
    return (start > 0 ? "…" : "") + slice + (plain.length > start + 160 ? "…" : "");
  }

  function render(results, query) {
    list.innerHTML = "";
    if (!results.length) {
      status.textContent = "No build logs match “" + query + "” yet.";
      return;
    }
    status.textContent = results.length + (results.length === 1 ? " match" : " matches") + " for “" + query + "”.";
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;
      var li = document.createElement("li");
      li.innerHTML =
        '<a href="' + esc(baseUrl + item.url) + '">' +
        "<h2>" + esc(item.title) + "</h2>" +
        "<p>" + esc(snippet(item.content, query)) + "</p></a>";
      list.appendChild(li);
    });
  }

  function run() {
    var q = input.value.trim();
    if (!q || !fuse) { list.innerHTML = ""; status.textContent = fuse ? "Type to search the bench log." : status.textContent; return; }
    render(fuse.search(q), q);
  }

  fetch(window.CIRRUS_SEARCH_URL)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.35, ignoreLocation: true, minMatchCharLength: 2 });
      status.textContent = "Type to search the bench log.";
      if (input.value.trim()) run();
    })
    .catch(function () { status.textContent = "Search index could not be loaded."; });

  input.addEventListener("input", run);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { input.value = ""; run(); }
  });
})();
