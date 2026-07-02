/* Burin — page search.
   Loads the Fuse.js index hwaro builds at /search.json and renders results
   as a plain list. Result text is set with textContent only, never
   innerHTML, so index content can never inject markup. */
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
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The search index could not be loaded — browse the catalogue instead.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    if (/^https?:\/\//.test(url)) return url;
    return base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    if (words.length > 30) return words.slice(0, 30).join(' ') + '…';
    return words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) {
      status.textContent = '';
      return;
    }
    if (results.length === 0) {
      status.textContent = 'No specimens match “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' result found.' : ' results found.');
    results.slice(0, 12).forEach(function (r) {
      var li = document.createElement('li');

      var h = document.createElement('h2');
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.textContent = r.item.title || 'Untitled specimen';
      h.appendChild(a);

      var p = document.createElement('p');
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
