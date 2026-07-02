/* Quire — handbook search (page variant).
   Loads the Fuse.js index hwaro builds at /search.json and renders matches
   as a plain list. Result text is always inserted as text nodes, never HTML. */
(function () {
  'use strict';

  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!form || !input || !status || !list) { return; }

  var base = form.getAttribute('data-base') || '';
  var fuse = null;
  var pending = null;

  fetch(form.getAttribute('data-index'))
    .then(function (response) { return response.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) { run(input.value); }
    })
    .catch(function () {
      status.textContent = 'The search index could not be loaded. Try the chapter list instead.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    return /^https?:\/\//.test(url) ? url : base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    return words.length > 30 ? words.slice(0, 30).join(' ') + '…' : words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) { status.textContent = ''; return; }
    if (results.length === 0) {
      status.textContent = 'No matches for “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' match' : ' matches') + ' found.';
    results.slice(0, 12).forEach(function (result) {
      var li = document.createElement('li');
      li.className = 'search-hit';

      var a = document.createElement('a');
      a.className = 'search-hit-link';
      a.href = hrefFor(result.item);

      var title = document.createElement('span');
      title.className = 'search-hit-title';
      title.textContent = result.item.title || 'Untitled';

      var snip = document.createElement('span');
      snip.className = 'search-hit-snip';
      snip.textContent = snippet(result.item.content);

      a.appendChild(title);
      a.appendChild(snip);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function run(query) {
    if (fuse) { render(fuse.search(query), query); }
  }

  input.addEventListener('input', function () {
    if (pending) { window.clearTimeout(pending); }
    pending = window.setTimeout(function () { run(input.value); }, 120);
  });
})();
