/* Inline grep-style search for the releases index.
   A persistent input replaces the release list with results in place;
   clearing the field (or pressing Escape) restores the list. Result
   strings are inserted as text nodes only — never as raw HTML. */
(function () {
  'use strict';

  var input = document.getElementById('release-grep');
  if (!input || typeof Fuse === 'undefined') return;

  var list = document.getElementById('release-list');
  var results = document.getElementById('grep-results');
  var status = document.getElementById('grep-status');
  var base = input.getAttribute('data-base') || '';
  var fuse = null;
  var loading = false;

  function loadIndex() {
    if (fuse || loading) return;
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
        status.textContent = '# grep: could not load search index';
      });
  }

  function excerpt(text, query) {
    var i = text.toLowerCase().indexOf(query.toLowerCase());
    var start = i > 34 ? i - 34 : 0;
    var slice = text.slice(start, start + 130).replace(/\s+/g, ' ').trim();
    return (start > 0 ? '…' : '') + slice + '…';
  }

  function restore() {
    results.hidden = true;
    results.textContent = '';
    if (list) list.hidden = false;
    status.textContent = '';
  }

  function run() {
    var q = input.value.trim();
    if (!q) { restore(); return; }
    if (!fuse) { status.textContent = '# loading index…'; return; }

    var hits = fuse.search(q).slice(0, 12);
    results.textContent = '';

    if (!hits.length) {
      if (list) list.hidden = true;
      results.hidden = true;
      status.textContent = '# 0 matches for "' + q + '"';
      return;
    }

    hits.forEach(function (hit) {
      var item = hit.item;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = base + item.url;

      var path = document.createElement('span');
      path.className = 'result-path';
      path.textContent = 'releases/ ';

      var title = document.createElement('span');
      title.className = 'result-title';
      title.textContent = item.title;

      var text = document.createElement('span');
      text.className = 'result-text';
      text.textContent = excerpt(item.content || '', q);

      a.appendChild(path);
      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      results.appendChild(li);
    });

    if (list) list.hidden = true;
    results.hidden = false;
    status.textContent = '# ' + hits.length + ' match' + (hits.length === 1 ? '' : 'es') + ' for "' + q + '"';
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () {
    if (!fuse) { loadIndex(); return; }
    run();
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
  });
})();
