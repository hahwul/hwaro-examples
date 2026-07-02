(function () {
  "use strict";

  var baseUrl = (document.currentScript && document.currentScript.dataset.baseUrl) || "";
  var input = document.getElementById("search-input");
  var status = document.getElementById("search-status");
  var results = document.getElementById("search-results");
  if (!input || !results) return;

  var fuse = null;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function render(items, query) {
    results.innerHTML = "";
    if (!query) {
      status.textContent = "Type to search every episode and page on Sori.";
      return;
    }
    if (items.length === 0) {
      status.textContent = "No tales match \"" + query + "\".";
      return;
    }
    status.textContent = items.length + " result" + (items.length === 1 ? "" : "s") + " for \"" + query + "\"";
    items.slice(0, 20).forEach(function (r) {
      var item = r.item;
      var li = document.createElement("li");
      var snippet = (item.content || "").replace(/\s+/g, " ").trim().slice(0, 160);
      var href = /^https?:\/\//.test(item.url || "") ? item.url : baseUrl + (item.url || "#");
      li.innerHTML =
        '<a href="' + escapeHtml(href) + '">' + escapeHtml(item.title || "Untitled") + "</a>" +
        (snippet ? "<p>" + escapeHtml(snippet) + "…</p>" : "");
      results.appendChild(li);
    });
  }

  fetch(baseUrl + "/search.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ["title", "content"], threshold: 0.32, ignoreLocation: true });
      var params = new URLSearchParams(window.location.search);
      var q = params.get("q");
      if (q) {
        input.value = q;
        render(fuse.search(q), q);
      }
    })
    .catch(function () {
      status.textContent = "Search index could not be loaded.";
    });

  input.addEventListener("input", function () {
    var query = input.value.trim();
    if (!fuse) return;
    render(query ? fuse.search(query) : [], query);
  });
})();
