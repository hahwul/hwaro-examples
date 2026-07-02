/* Inline REPL-style search. The persistent header input filters the whole
   book: typing swaps the page's koan list for results in place (and shows a
   results panel on pages without a list); clearing or pressing Escape
   restores. Every result string is written as a text node, never as HTML. */
(function () {
  'use strict';

  var input = document.getElementById('koan-search');
  if (!input || typeof Fuse === 'undefined') return;

  var panel = document.getElementById('koan-results');
  var list = document.getElementById('results-list');
  var status = document.getElementById('results-status');
  var pageList = document.getElementById('koan-list');
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
        panel.hidden = false;
        status.textContent = '# search index unavailable';
      });
  }

  function excerpt(text, query) {
    var i = text.toLowerCase().indexOf(query.toLowerCase());
    var start = i > 32 ? i - 32 : 0;
    var slice = text.slice(start, start + 128).replace(/\s+/g, ' ').trim();
    return (start > 0 ? '…' : '') + slice + '…';
  }

  function restore() {
    panel.hidden = true;
    list.textContent = '';
    status.textContent = '';
    if (pageList) pageList.hidden = false;
  }

  function run() {
    var q = input.value.trim();
    if (!q) { restore(); return; }
    panel.hidden = false;
    if (pageList) pageList.hidden = true;
    if (!fuse) { status.textContent = '# loading index…'; return; }

    var hits = fuse.search(q).slice(0, 12);
    list.textContent = '';

    hits.forEach(function (hit) {
      var item = hit.item;
      var li = document.createElement('li');
      li.className = 'result-row';
      var a = document.createElement('a');
      a.className = 'result-link';
      a.href = base + item.url;

      var title = document.createElement('span');
      title.className = 'result-title';
      title.textContent = item.title;

      var text = document.createElement('span');
      text.className = 'result-text';
      text.textContent = excerpt(item.content || '', q);

      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      list.appendChild(li);
    });

    status.textContent = '# ' + hits.length + (hits.length === 1 ? ' match' : ' matches') + ' for "' + q + '"';
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () { loadIndex(); run(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
  });
})();
