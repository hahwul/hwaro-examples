/* Foundry - Search */
(function () {
  var overlay = document.getElementById('searchOverlay');
  var input = document.getElementById('searchInput');
  var resultsContainer = document.getElementById('searchResults');
  var searchData = null;
  var selectedIndex = -1;

  window.openSearch = function () {
    if (!overlay) return;
    overlay.classList.add('active');
    input.value = '';
    resultsContainer.innerHTML = '';
    selectedIndex = -1;
    setTimeout(function () { input.focus(); }, 50);
    if (!searchData) loadSearchData();
  };

  function closeSearch() {
    if (!overlay) return;
    overlay.classList.remove('active');
    input.value = '';
    resultsContainer.innerHTML = '';
    selectedIndex = -1;
  }

  function loadSearchData() {
    var base = document.querySelector('link[rel="stylesheet"]');
    var baseUrl = '';
    if (base) {
      var href = base.getAttribute('href');
      var idx = href.indexOf('/css/style.css');
      if (idx > -1) baseUrl = href.substring(0, idx);
    }
    fetch(baseUrl + '/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { searchData = data; })
      .catch(function () { searchData = []; });
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(' + escaped + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function performSearch(query) {
    if (!searchData || !query) {
      resultsContainer.innerHTML = '';
      selectedIndex = -1;
      return;
    }
    var lower = query.toLowerCase();
    var results = searchData.filter(function (item) {
      var title = (item.title || '').toLowerCase();
      var content = (item.content || '').toLowerCase();
      return title.indexOf(lower) > -1 || content.indexOf(lower) > -1;
    }).slice(0, 10);

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-empty">No results found.</div>';
      selectedIndex = -1;
      return;
    }

    var html = results.map(function (item, i) {
      var title = highlightMatch(item.title || 'Untitled', query);
      var snippet = '';
      if (item.content) {
        var pos = item.content.toLowerCase().indexOf(lower);
        var start = Math.max(0, pos - 40);
        var end = Math.min(item.content.length, pos + query.length + 80);
        snippet = (start > 0 ? '...' : '') +
          highlightMatch(item.content.substring(start, end), query) +
          (end < item.content.length ? '...' : '');
      }
      return '<a class="search-result-item' + (i === 0 ? ' selected' : '') +
        '" href="' + (item.url || '#') + '">' +
        '<span class="search-result-title">' + title + '</span>' +
        (snippet ? '<span class="search-result-snippet">' + snippet + '</span>' : '') +
        '</a>';
    }).join('');

    resultsContainer.innerHTML = html;
    selectedIndex = 0;
  }

  function updateSelection() {
    var items = resultsContainer.querySelectorAll('.search-result-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('selected', i === selectedIndex);
    }
    if (items[selectedIndex]) {
      items[selectedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  if (input) {
    input.addEventListener('input', function () {
      performSearch(this.value.trim());
    });
  }

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay && overlay.classList.contains('active')) {
        closeSearch();
      } else {
        window.openSearch();
      }
      return;
    }

    if (!overlay || !overlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
      return;
    }

    var items = resultsContainer.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[selectedIndex]) {
        window.location.href = items[selectedIndex].getAttribute('href');
      }
    }
  });

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });
  }
})();
