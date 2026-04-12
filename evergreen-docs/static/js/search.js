(function () {
  var searchData = null;
  var activeIndex = -1;
  var overlay = document.getElementById('searchOverlay');
  var input = document.getElementById('searchInput');
  var resultsEl = document.getElementById('searchResults');

  function loadSearchData(cb) {
    if (searchData) return cb(searchData);
    // Determine search.json URL relative to the current path or base_url
    var searchUrl = window.location.origin + '/search.json';

    // Attempt to find base_url from links if we are in a subdirectory
    var navLinks = document.querySelectorAll('nav a');
    if (navLinks.length > 0) {
      var href = navLinks[0].getAttribute('href');
      if (href && href.startsWith('http')) {
        var url = new URL(href);
        searchUrl = url.origin + '/search.json';
      }
    }

    fetch(searchUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) { searchData = data; cb(data); })
      .catch(function (err) {
        console.error('Failed to load search index:', err);
        searchData = []; cb([]);
      });
  }

  window.openSearch = function () {
    if (!overlay) return;
    overlay.classList.add('active');
    input.value = '';
    resultsEl.innerHTML = '';
    activeIndex = -1;
    input.focus();
    loadSearchData(function () {});
  };

  window.closeSearch = function () {
    if (!overlay) return;
    overlay.classList.remove('active');
    activeIndex = -1;
  };

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay && overlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
      closeSearch();
    }
  });

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(' + escaped + ')', 'gi');
    return escapeHtml(text).replace(re, '<mark>$1</mark>');
  }

  function getSnippet(content, query) {
    var lower = content.toLowerCase();
    var idx = lower.indexOf(query.toLowerCase());
    if (idx === -1) return content.substring(0, 140) + '...';
    var start = Math.max(0, idx - 60);
    var end = Math.min(content.length, idx + query.length + 100);
    var snippet = content.substring(start, end).replace(/\s+/g, ' ').trim();
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    return snippet;
  }

  function search(query) {
    if (!searchData || !query.trim()) {
      resultsEl.innerHTML = '';
      activeIndex = -1;
      return;
    }
    var q = query.trim().toLowerCase();
    var results = [];
    for (var i = 0; i < searchData.length; i++) {
      var item = searchData[i];
      var titleIdx = item.title.toLowerCase().indexOf(q);
      var contentIdx = item.content.toLowerCase().indexOf(q);
      if (titleIdx !== -1 || contentIdx !== -1) {
        var score = titleIdx !== -1 ? 100 - titleIdx : contentIdx;
        results.push({ item: item, score: score });
      }
    }
    results.sort(function (a, b) { return b.score - a.score; });
    results = results.slice(0, 8);

    if (results.length === 0) {
      resultsEl.innerHTML = '<div class="p-8 text-center text-slate-500">No results found for "' + escapeHtml(query) + '"</div>';
      activeIndex = -1;
      return;
    }

    var html = '';
    for (var j = 0; j < results.length; j++) {
      var r = results[j].item;
      var snippet = getSnippet(r.content, query.trim());
      html += '<a class="search-result-item block p-4 rounded-lg border border-transparent transition-all mb-1" href="' + r.url + '" data-index="' + j + '">'
        + '<div class="search-result-title font-semibold text-slate-900 mb-1">' + highlightMatch(r.title, query.trim()) + '</div>'
        + '<div class="search-result-snippet text-sm text-slate-500 line-clamp-2">' + highlightMatch(snippet, query.trim()) + '</div>'
        + '</a>';
    }
    html += '<div class="mt-4 p-3 border-t border-slate-100 flex gap-4 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">'
      + '<span><kbd class="bg-slate-50 border border-slate-200 px-1 rounded mr-1">↑↓</kbd> Navigate</span>'
      + '<span><kbd class="bg-slate-50 border border-slate-200 px-1 rounded mr-1">Enter</kbd> Open</span>'
      + '</div>';
    resultsEl.innerHTML = html;
    activeIndex = -1;
  }

  function updateActive() {
    var items = resultsEl.querySelectorAll('.search-result-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('active', i === activeIndex);
    }
    if (activeIndex >= 0 && items[activeIndex]) {
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  if (input) {
    input.addEventListener('input', function () {
      loadSearchData(function () { search(input.value); });
    });

    input.addEventListener('keydown', function (e) {
      var items = resultsEl.querySelectorAll('.search-result-item');
      var count = items.length;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % count;
        updateActive();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + count) % count;
        updateActive();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) {
          window.location.href = items[activeIndex].href;
        } else if (items.length > 0) {
          window.location.href = items[0].href;
        }
      }
    });
  }
})();
