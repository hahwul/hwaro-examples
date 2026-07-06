(function () {
  'use strict';
  var form = document.querySelector('form[data-index]');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!form || !input || !list || !status) return;

  var base = form.getAttribute('data-base') || '';
  var fuse = null;

  function snippet(text) {
    var clean = String(text).replace(/\s+/g, ' ').trim();
    return clean.length > 140 ? clean.slice(0, 140) + '…' : clean;
  }

  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
    });

  input.addEventListener('input', function () {
    if (!fuse) return;
    list.textContent = '';
    var q = input.value.trim();
    if (!q) {
      status.textContent = '';
      return;
    }
    var hits = fuse.search(q).slice(0, 10);
    status.textContent = hits.length + (hits.length === 1 ? ' result' : ' results') + ' found.';
    hits.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = base + h.item.url;
      
      var titleSpan = document.createElement('span');
      titleSpan.className = 'res-title';
      titleSpan.textContent = h.item.title || 'Untitled';
      
      var snippetSpan = document.createElement('span');
      snippetSpan.className = 'res-snippet';
      snippetSpan.textContent = snippet(h.item.content || '');
      
      a.appendChild(titleSpan);
      a.appendChild(snippetSpan);
      li.appendChild(a);
      list.appendChild(li);
    });
  });
})();
