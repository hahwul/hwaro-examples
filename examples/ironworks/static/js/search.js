/* Ironworks - Search */
(function () {
  var overlay = document.getElementById('searchOverlay');
  var input = document.getElementById('searchInput');
  var resultsContainer = document.getElementById('searchResults');
  var searchData = null;
  var activeIndex = -1;

  window.openSearch = function () {
    overlay.classList.add('active');
    input.value = '';
    resultsContainer.innerHTML = '';
    activeIndex = -1;
    setTimeout(function () { input.focus(); }, 50);
    loadSearchData();
  };

  window.closeSearch = function () {
    overlay.classList.remove('active');
    input.value = '';
    resultsContainer.innerHTML = '';
    activeIndex = -1;
  };

  function loadSearchData() {
    if (searchData) return;
    fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { searchData = data; })
      .catch(function () { searchData = []; });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(' + escaped + ')', 'gi');
    return escapeHtml(text).replace(re, '<mark>$1</mark>');
  }

  function truncate(text, len) {
    if (!text) return '';
    if (text.length <= len) return text;
    return text.substring(0, len) + '...';
  }

  function doSearch(query) {
    if (!searchData || !query) {
      resultsContainer.innerHTML = '';
      activeIndex = -1;
      return;
    }

    var q = query.toLowerCase();
    var results = searchData.filter(function (item) {
      var title = (item.title || '').toLowerCase();
      var content = (item.content || '').toLowerCase();
      return title.indexOf(q) !== -1 || content.indexOf(q) !== -1;
    }).slice(0, 10);

    activeIndex = -1;

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-empty">No results found.</div>';
      return;
    }

    var html = '';
    results.forEach(function (item, i) {
      var snippet = truncate(item.content || '', 120);
      html += '<a class="search-item" href="' + escapeHtml(item.url || item.permalink || '#') + '" data-index="' + i + '">';
      html += '<div class="search-title">' + highlightMatch(item.title || 'Untitled', query) + '</div>';
      html += '<div class="search-snippet">' + highlightMatch(snippet, query) + '</div>';
      html += '</a>';
    });

    resultsContainer.innerHTML = html;
  }

  function updateActive() {
    var items = resultsContainer.querySelectorAll('.search-item');
    items.forEach(function (el, i) {
      if (i === activeIndex) {
        el.classList.add('active');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    });
  }

  if (input) {
    input.addEventListener('input', function () {
      doSearch(this.value.trim());
    });
  }

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
      return;
    }

    if (!overlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
      return;
    }

    var items = resultsContainer.querySelectorAll('.search-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = activeIndex <= 0 ? items.length - 1 : activeIndex - 1;
      updateActive();
    } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < items.length) {
      e.preventDefault();
      items[activeIndex].click();
    }
  });
})();
