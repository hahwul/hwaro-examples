/* Inline catalog search for Vitrine.
   Typing in the search field swaps the case grid for a results list in
   place; clearing the field (or pressing Escape) restores the grid.
   Every result string is inserted as a text node, never as raw HTML. */
(function () {
  'use strict';

  var input = document.getElementById('vitrine-search');
  if (!input || typeof Fuse === 'undefined') { return; }

  var grid = document.getElementById('case-grid');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var base = input.getAttribute('data-base') || '';
  var fuse = null;
  var loading = false;

  function loadIndex() {
    if (fuse || loading) { return; }
    loading = true;
    fetch(input.getAttribute('data-index'))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        run();
      })
      .catch(function () {
        if (status) { status.textContent = 'Could not load the search index.'; }
      });
  }

  function excerpt(text, query) {
    var i = text.toLowerCase().indexOf(query.toLowerCase());
    var start = i > 34 ? i - 34 : 0;
    var slice = text.slice(start, start + 132).replace(/\s+/g, ' ').trim();
    return (start > 0 ? '…' : '') + slice + '…';
  }

  function restore() {
    if (results) { results.hidden = true; results.textContent = ''; }
    if (grid) { grid.hidden = false; }
    if (status) { status.textContent = ''; }
  }

  function run() {
    var q = input.value.trim();
    if (!q) { restore(); return; }
    if (!fuse) { if (status) { status.textContent = 'Loading index…'; } return; }

    var hits = fuse.search(q).slice(0, 12);
    results.textContent = '';

    hits.forEach(function (hit) {
      var item = hit.item;
      var li = document.createElement('li');
      li.className = 'search-hit';

      var a = document.createElement('a');
      a.href = base + item.url;
      a.className = 'search-hit-link';

      var title = document.createElement('span');
      title.className = 'search-hit-title';
      title.textContent = item.title;

      var text = document.createElement('span');
      text.className = 'search-hit-text';
      text.textContent = excerpt(item.content || '', q);

      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      results.appendChild(li);
    });

    if (grid) { grid.hidden = true; }
    results.hidden = false;
    status.textContent = hits.length + (hits.length === 1 ? ' plate found.' : ' plates found.');
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () { loadIndex(); run(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
  });
})();
