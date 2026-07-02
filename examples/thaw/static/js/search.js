/* Thaw — search (page variant).
   Loads the Fuse.js index built by hwaro and renders results as simple
   cards inside the search page's results grid. */
(function () {
  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var grid = document.getElementById('search-results');
  if (!form || !input || !status || !grid) return;

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
      status.textContent = 'The index could not be loaded. Try the field notes instead.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    if (/^https?:\/\//.test(url)) return url;
    return base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    if (words.length > 26) return words.slice(0, 26).join(' ') + '…';
    return words.join(' ');
  }

  function render(results, query) {
    grid.textContent = '';
    if (!query.trim()) {
      status.textContent = '';
      return;
    }
    if (results.length === 0) {
      status.textContent = 'Nothing in the log matches "' + query + '".';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' note found.' : ' notes found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var article = document.createElement('article');
      article.className = 'note-card';

      var a = document.createElement('a');
      a.className = 'note-card-link';
      a.href = hrefFor(item);

      var head = document.createElement('header');
      head.className = 'note-card-head';

      var title = document.createElement('p');
      title.className = 'note-common';
      title.textContent = item.title || 'Untitled';
      head.appendChild(title);

      var excerpt = document.createElement('p');
      excerpt.className = 'note-excerpt';
      excerpt.textContent = snippet(item.content);

      a.appendChild(head);
      a.appendChild(excerpt);
      article.appendChild(a);
      grid.appendChild(article);
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
