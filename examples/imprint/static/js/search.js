/* Imprint — search (page variant).
   Loads the Fuse.js index hwaro builds at /search.json and renders results
   as a specimen-style list beneath the search field. */
(function () {
  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!form || !input || !status || !list) return;

  var base = form.getAttribute('data-base') || '';
  var fuse = null;

  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The index could not be loaded. Browse the specimens instead.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    if (/^https?:\/\//.test(url)) return url;
    return base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    if (words.length > 32) return words.slice(0, 32).join(' ') + '…';
    return words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) {
      status.textContent = '';
      return;
    }
    if (results.length === 0) {
      status.textContent = 'No essay matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' essay found.' : ' essays found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement('li');
      li.className = 'search-hit';

      var a = document.createElement('a');
      a.className = 'search-hit-link';
      a.href = hrefFor(item);

      var title = document.createElement('span');
      title.className = 'search-hit-title';
      title.textContent = item.title || 'Untitled';

      var text = document.createElement('span');
      text.className = 'search-hit-snippet';
      text.textContent = snippet(item.content);

      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function run(query) {
    if (!fuse) return;
    render(fuse.search(query), query);
  }

  var timer = null;
  input.addEventListener('input', function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { run(input.value); }, 120);
  });
})();
