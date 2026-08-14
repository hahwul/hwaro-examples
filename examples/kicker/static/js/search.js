(function () {
  "use strict";
  var searchInput = document.getElementById("search");
  var searchResults = document.getElementById("search-results");
  if (!searchInput || !searchResults) return;

  var fuse = null;
  // A robust way to fetch search.json in Hwaro static js is to rely on base_url.
  // To avoid fetching absolute root which fails for subdirectories, we can just
  // fetch "../search.json" if we are in /search/

  fetch("../search.json")
    .then(r => r.json())
    .then(data => {
      fuse = new Fuse(data, {
        keys: ["title", "content"],
        threshold: 0.3,
        includeMatches: true
      });
    })
    .catch(() => {});

  searchInput.addEventListener("input", function (e) {
    var val = e.target.value.trim();
    if (!fuse || !val) {
      searchResults.innerHTML = "";
      return;
    }
    var results = fuse.search(val).slice(0, 10);
    searchResults.innerHTML = results.map(function(r) {
      // url in search.json is root-relative (e.g., /reports/foo/)
      // to link properly we need to resolve it against base
      // if we are in /search/, relative to root is "../" + url.substring(1)
      var relativeUrl = ".." + r.item.url;
      return '<div><a href="' + relativeUrl + '">' + r.item.title + '</a></div>';
    }).join("");
  });
})();
