/* Tabloid -- search (page variant).
   Loads the Fuse.js index hwaro builds at /search.json and renders results
   as pour cards underneath the search field. */
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
      status.textContent = 'The index would not pour. Browse the archive instead.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    if (/^https?:\/\//.test(url)) return url;
    return base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    if (words.length > 28) return words.slice(0, 28).join(' ') + '…';
    return words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) {
      status.textContent = '';
      return;
    }
    if (results.length === 0) {
      status.textContent = 'Nothing on tap for “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' pour found.' : ' pours found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement('li');
      li.className = 'pour-card search-hit';

      var article = document.createElement('article');

      var kicker = document.createElement('p');
      kicker.className = 'pour-card__kicker';
      kicker.textContent = 'Result';

      var h3 = document.createElement('h3');
      h3.className = 'pour-card__title';
      var a = document.createElement('a');
      a.href = hrefFor(item);
      a.textContent = item.title || 'Untitled';
      h3.appendChild(a);

      var dek = document.createElement('p');
      dek.className = 'pour-card__dek';
      dek.textContent = snippet(item.content);

      article.appendChild(kicker);
      article.appendChild(h3);
      article.appendChild(dek);
      li.appendChild(article);
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
