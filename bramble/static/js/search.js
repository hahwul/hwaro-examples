(function () {
  "use strict";

  var overlay = document.getElementById("searchOverlay");
  var input = document.getElementById("searchInput");
  var resultsList = document.getElementById("searchResults");
  var searchData = null;
  var activeIndex = -1;

  function openSearch() {
    overlay.classList.add("active");
    input.value = "";
    resultsList.innerHTML = "";
    activeIndex = -1;
    setTimeout(function () {
      input.focus();
    }, 50);
  }

  function closeSearch() {
    overlay.classList.remove("active");
    input.value = "";
    resultsList.innerHTML = "";
    activeIndex = -1;
  }

  // Expose globally for the button onclick
  window.openSearch = openSearch;
  window.closeSearch = closeSearch;

  // Fetch search index
  function loadSearchData() {
    if (searchData) return Promise.resolve(searchData);
    var base = document.querySelector("link[rel='stylesheet']");
    var baseUrl = "";
    if (base) {
      var href = base.getAttribute("href");
      var idx = href.indexOf("/css/style.css");
      if (idx > -1) baseUrl = href.substring(0, idx);
    }
    return fetch(baseUrl + "/search.json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        searchData = data;
        return data;
      })
      .catch(function () {
        searchData = [];
        return [];
      });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var re = new RegExp("(" + escaped + ")", "gi");
    return escapeHtml(text).replace(re, "<mark>$1</mark>");
  }

  function truncateContent(content, query, maxLen) {
    maxLen = maxLen || 120;
    if (!query) return content.substring(0, maxLen);
    var lower = content.toLowerCase();
    var pos = lower.indexOf(query.toLowerCase());
    if (pos === -1) return content.substring(0, maxLen);
    var start = Math.max(0, pos - 40);
    var snippet = content.substring(start, start + maxLen);
    if (start > 0) snippet = "..." + snippet;
    if (start + maxLen < content.length) snippet = snippet + "...";
    return snippet;
  }

  function performSearch(query) {
    if (!query || query.length < 2) {
      resultsList.innerHTML = "";
      activeIndex = -1;
      return;
    }

    loadSearchData().then(function (data) {
      var q = query.toLowerCase();
      var results = data.filter(function (item) {
        var title = (item.title || "").toLowerCase();
        var content = (item.content || item.body || "").toLowerCase();
        return title.indexOf(q) > -1 || content.indexOf(q) > -1;
      }).slice(0, 10);

      activeIndex = -1;
      if (results.length === 0) {
        resultsList.innerHTML = '<li style="padding: 1rem; color: #7a6e6c; text-align: center;">No results found.</li>';
        return;
      }

      resultsList.innerHTML = results.map(function (item) {
        var title = highlightMatch(item.title || "Untitled", query);
        var content = item.content || item.body || "";
        var snippet = highlightMatch(truncateContent(content, query), query);
        var url = item.url || item.permalink || "#";
        return '<li><a href="' + escapeHtml(url) + '">' +
          '<span class="result-title">' + title + '</span>' +
          '<span class="result-snippet">' + snippet + '</span>' +
          '</a></li>';
      }).join("");
    });
  }

  function updateActive() {
    var items = resultsList.querySelectorAll("li");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle("active", i === activeIndex);
    }
    if (activeIndex >= 0 && items[activeIndex]) {
      items[activeIndex].scrollIntoView({ block: "nearest" });
    }
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    // Cmd+K or Ctrl+K to open
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (overlay.classList.contains("active")) {
        closeSearch();
      } else {
        openSearch();
      }
      return;
    }

    if (!overlay.classList.contains("active")) return;

    // ESC to close
    if (e.key === "Escape") {
      e.preventDefault();
      closeSearch();
      return;
    }

    var items = resultsList.querySelectorAll("li");
    var count = items.length;

    // Arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % Math.max(count, 1);
      updateActive();
      return;
    }

    // Arrow up
    if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = activeIndex <= 0 ? count - 1 : activeIndex - 1;
      updateActive();
      return;
    }

    // Enter to navigate
    if (e.key === "Enter" && activeIndex >= 0 && items[activeIndex]) {
      e.preventDefault();
      var link = items[activeIndex].querySelector("a");
      if (link) window.location.href = link.href;
    }
  });

  // Input handler
  if (input) {
    input.addEventListener("input", function () {
      performSearch(input.value.trim());
    });
  }

  // Close on overlay background click
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        closeSearch();
      }
    });
  }
})();
