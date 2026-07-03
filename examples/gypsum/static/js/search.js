/* Gypsum syntax-reference search (page variant).
   Loads the Fuse.js index that hwaro builds at /search.json and renders
   matches as a plain ruled list. Every result string is written with
   textContent, never innerHTML. */
(function () {
  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!form || !input || !status || !list) return;

  var base = form.getAttribute('data-base') || '';
  var fuse = null;
  var pending = null;

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
      status.textContent = 'The search index could not be loaded. Try the syntax reference instead.';
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
      status.textContent = 'No pages match “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' page found.' : ' pages found.');
    results.slice(0, 12).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'search-result';

      var h = document.createElement('h2');
      h.className = 'search-result-title';
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.textContent = r.item.title || 'Untitled';
      h.appendChild(a);

      var p = document.createElement('p');
      p.className = 'search-result-snippet';
      p.textContent = snippet(r.item.content);

      li.appendChild(h);
      li.appendChild(p);
      list.appendChild(li);
    });
  }

  function run(q) {
    if (!fuse) return;
    render(fuse.search(q), q);
  }

  input.addEventListener('input', function () {
    if (pending) window.clearTimeout(pending);
    pending = window.setTimeout(function () { run(input.value); }, 120);
  });
})();
