/* Syzygy — inline schedule search.
   The input above the program swaps the day-by-day listing for matching
   results in place; clearing the field (or Escape) restores it. Results
   are built with textContent, never innerHTML, so nothing from the index
   is interpreted as markup. */
(function () {
  'use strict';

  var input = document.getElementById('schedule-search-input');
  if (!input || typeof Fuse === 'undefined') { return; }

  var list = document.getElementById('schedule-list');
  var results = document.getElementById('schedule-results');
  var status = document.getElementById('schedule-search-status');
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
          threshold: 0.32,
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
    var start = i > 40 ? i - 40 : 0;
    var slice = text.slice(start, start + 140).replace(/\s+/g, ' ').trim();
    return (start > 0 ? '…' : '') + slice + '…';
  }

  function restore() {
    if (results) { results.hidden = true; results.textContent = ''; }
    if (list) { list.hidden = false; }
    if (status) { status.textContent = ''; }
  }

  function run() {
    var q = input.value.trim();
    if (!q) { restore(); return; }
    if (!fuse) { if (status) { status.textContent = 'Loading index…'; } return; }

    var hits = fuse.search(q).slice(0, 8);
    results.textContent = '';

    hits.forEach(function (hit) {
      var item = hit.item;
      var li = document.createElement('li');

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

    list.hidden = true;
    results.hidden = false;
    status.textContent = hits.length + (hits.length === 1 ? ' match' : ' matches') + ' in the program.';
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () { loadIndex(); run(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
  });
})();
