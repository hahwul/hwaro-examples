/* Inline search for Squall.
   Typing in a `[data-search-input]` swaps its sibling `[data-search-list]`
   ledger for a results list built from search.json; clearing the field
   restores the ledger. Every result string is inserted via textContent,
   never innerHTML, so nothing from the index is ever parsed as markup. */
(function () {
  'use strict';

  var containers = document.querySelectorAll('[data-inline-search]');
  if (!containers.length || typeof Fuse === 'undefined') { return; }

  var base = document.body.getAttribute('data-base') || '';
  var indexPromise = null;

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(base + '/search.json')
        .then(function (r) { return r.json(); })
        .then(function (data) {
          return new Fuse(data, { keys: ['title', 'content'], threshold: 0.32, ignoreLocation: true, minMatchCharLength: 2 });
        });
    }
    return indexPromise;
  }

  function excerpt(text, query) {
    var i = text.toLowerCase().indexOf(query.toLowerCase());
    var start = i > 40 ? i - 40 : 0;
    var slice = text.slice(start, start + 150).replace(/\s+/g, ' ').trim();
    return (start > 0 ? '…' : '') + slice + '…';
  }

  containers.forEach(function (root) {
    var input = root.querySelector('[data-search-input]');
    var list = root.querySelector('[data-search-list]');
    var results = root.querySelector('[data-search-results]');
    var status = root.querySelector('[data-search-status]');
    var scope = root.getAttribute('data-search-scope') || '';
    if (!input || !list || !results) { return; }

    function restore() {
      list.hidden = false;
      results.hidden = true;
      results.textContent = '';
      if (status) { status.textContent = ''; }
    }

    function render(hits, q) {
      results.textContent = '';
      hits.forEach(function (hit) {
        var item = hit.item;
        var li = document.createElement('li');
        li.className = 'search-hit';
        var a = document.createElement('a');
        a.href = base + item.url;
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
      if (status) { status.textContent = hits.length + (hits.length === 1 ? ' passage found' : ' passages found'); }
    }

    function run() {
      var q = input.value.trim();
      if (!q) { restore(); return; }
      if (status) { status.textContent = 'Searching…'; }
      loadIndex().then(function (fuse) {
        if (input.value.trim() !== q) { return; }
        var hits = fuse.search(q);
        if (scope) {
          hits = hits.filter(function (hit) { return hit.item.url && hit.item.url.indexOf(scope) === 0; });
        }
        hits = hits.slice(0, 8);
        if (!hits.length) {
          list.hidden = true;
          results.hidden = true;
          results.textContent = '';
          if (status) { status.textContent = 'No passages match "' + q + '".'; }
          return;
        }
        render(hits, q);
      }).catch(function () {
        if (status) { status.textContent = 'Could not load the search index.'; }
      });
    }

    input.addEventListener('focus', function () { loadIndex(); });
    input.addEventListener('input', run);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
    });
  });
})();
