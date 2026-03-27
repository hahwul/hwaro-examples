/* Saffron - Search */
(function () {
  var overlay = document.getElementById("searchOverlay");
  var input = document.getElementById("searchInput");
  var resultsContainer = document.getElementById("searchResults");
  var data = null;
  var activeIndex = -1;

  function loadData() {
    if (data) return Promise.resolve(data);
    var base = document.querySelector("link[rel='stylesheet']").href.replace("/css/style.css", "");
    return fetch(base + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (json) { data = json; return data; });
  }

  window.openSearch = function () {
    overlay.classList.add("active");
    input.value = "";
    resultsContainer.innerHTML = "";
    activeIndex = -1;
    loadData();
    setTimeout(function () { input.focus(); }, 50);
  };

  window.closeSearch = function () {
    overlay.classList.remove("active");
    input.value = "";
    resultsContainer.innerHTML = "";
    activeIndex = -1;
  };

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (overlay.classList.contains("active")) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeSearch();
    }
    if (!overlay.classList.contains("active")) return;
    var items = resultsContainer.querySelectorAll(".search-result-item");
    if (items.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActive(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      updateActive(items);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      items[activeIndex].click();
    }
  });

  function updateActive(items) {
    items.forEach(function (el, i) {
      el.classList.toggle("active", i === activeIndex);
    });
    if (items[activeIndex]) {
      items[activeIndex].scrollIntoView({ block: "nearest" });
    }
  }

  function highlight(text, query) {
    if (!query) return text;
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp("(" + escaped + ")", "gi"), "<mark>$1</mark>");
  }

  function search(query) {
    if (!data || !query) {
      resultsContainer.innerHTML = "";
      activeIndex = -1;
      return;
    }
    var q = query.toLowerCase();
    var results = data.filter(function (item) {
      return (item.title && item.title.toLowerCase().indexOf(q) !== -1) ||
             (item.content && item.content.toLowerCase().indexOf(q) !== -1);
    }).slice(0, 20);

    activeIndex = -1;
    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-no-results">No recipes found.</div>';
      return;
    }

    resultsContainer.innerHTML = results.map(function (item) {
      var snippet = "";
      if (item.content) {
        var idx = item.content.toLowerCase().indexOf(q);
        var start = Math.max(0, idx - 40);
        var end = Math.min(item.content.length, idx + query.length + 80);
        snippet = (start > 0 ? "..." : "") + item.content.substring(start, end) + (end < item.content.length ? "..." : "");
      }
      return '<a class="search-result-item" href="' + item.url + '">' +
        '<div class="title">' + highlight(item.title || "", query) + '</div>' +
        '<div class="snippet">' + highlight(snippet, query) + '</div>' +
        '</a>';
    }).join("");
  }

  input.addEventListener("input", function () {
    loadData().then(function () {
      search(input.value.trim());
    });
  });
})();
