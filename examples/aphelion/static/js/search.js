(function () {
  var input = document.getElementById('lineup-search');
  var list = document.getElementById('lineup-list');
  var results = document.getElementById('lineup-results');
  var status = document.getElementById('lineup-status');
  if (!input || !list || !results) return;

  var BASE = window.APHELION_BASE_URL || '';
  var fuse = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function snippet(text) {
    var t = (text || '').replace(/\s+/g, ' ').trim();
    return t.length > 110 ? t.slice(0, 110) + '…' : t;
  }

  fetch(BASE + '/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.32, ignoreLocation: true, minMatchCharLength: 2 });
    })
    .catch(function () {
      if (status) { status.hidden = false; status.textContent = 'Search is unavailable right now.'; }
    });

  function render(query) {
    var q = query.trim();
    if (!q || !fuse) {
      list.hidden = false;
      results.hidden = true;
      results.innerHTML = '';
      if (status) status.hidden = true;
      return;
    }
    var matches = fuse.search(q).slice(0, 10);
    list.hidden = true;
    results.hidden = false;
    if (status) {
      status.hidden = false;
      status.textContent = matches.length + (matches.length === 1 ? ' result' : ' results') + ' for “' + q + '”';
    }
    if (!matches.length) {
      results.innerHTML = '<li class="lineup__empty">No films match that search.</li>';
      return;
    }
    results.innerHTML = matches.map(function (m) {
      var it = m.item;
      return '<li class="lineup__row lineup__row--result"><a href="' + escapeHtml(BASE + it.url) + '">' +
        '<span class="lineup__title">' + escapeHtml(it.title) + '</span>' +
        '<span class="lineup__snippet">' + escapeHtml(snippet(it.content)) + '</span>' +
        '</a></li>';
    }).join('');
  }

  input.addEventListener('input', function () { render(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; render(''); input.blur(); }
  });
})();
