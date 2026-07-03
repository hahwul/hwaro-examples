(function () {
  var input = document.getElementById('finder-input');
  var results = document.getElementById('finder-results');
  var status = document.getElementById('finder-status');
  var index = document.getElementById('track-index');
  if (!input || !results || !index) return;

  var fuse = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  var SEARCH_URL = (window.EQX_SEARCH || '/search.json');

  fetch(SEARCH_URL)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.34, ignoreLocation: true, minMatchCharLength: 2 });
    })
    .catch(function () {
      if (status) { status.hidden = false; status.textContent = 'Search is unavailable right now.'; }
    });

  function snippet(text) {
    var t = (text || '').replace(/\s+/g, ' ').trim();
    return t.length > 150 ? t.slice(0, 150) + '…' : t;
  }

  function render(query) {
    var q = query.trim();
    if (!q || !fuse) {
      results.hidden = true;
      results.innerHTML = '';
      index.hidden = false;
      if (status) status.hidden = true;
      return;
    }
    var matches = fuse.search(q).slice(0, 12);
    index.hidden = true;
    results.hidden = false;
    if (status) {
      status.hidden = false;
      status.textContent = matches.length + (matches.length === 1 ? ' result' : ' results') + ' for “' + q + '”';
    }
    if (!matches.length) {
      results.innerHTML = '<li class="results__empty">No sessions match that yet. Try a broader term.</li>';
      return;
    }
    results.innerHTML = matches.map(function (m) {
      var it = m.item;
      return '<li class="results__item"><a href="' + escapeHtml(it.url) + '">' +
        '<span class="results__title">' + escapeHtml(it.title) + '</span>' +
        '<span class="results__snippet">' + escapeHtml(snippet(it.content)) + '</span>' +
        '</a></li>';
    }).join('');
  }

  input.addEventListener('input', function () { render(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; render(''); input.blur(); }
  });
})();
