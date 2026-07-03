/* Strata — release search (page variant).
   Loads the Fuse.js index built by hwaro and renders results as
   report rows. All result text is inserted as text nodes, never HTML. */
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
        threshold: 0.34,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The search index could not be loaded. Try the release ledger instead.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    if (/^https?:\/\//.test(url)) return url;
    return base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    if (words.length > 34) return words.slice(0, 34).join(' ') + '…';
    return words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) { status.textContent = ''; return; }
    if (results.length === 0) {
      status.textContent = 'No matches for “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' match' : ' matches') + ' found.';
    results.slice(0, 14).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'search-hit';

      var a = document.createElement('a');
      a.className = 'search-hit-link';
      a.href = hrefFor(r.item);

      var h = document.createElement('span');
      h.className = 'search-hit-title';
      h.textContent = r.item.title || 'Untitled';

      var p = document.createElement('span');
      p.className = 'search-hit-snip';
      p.textContent = snippet(r.item.content);

      a.appendChild(h);
      a.appendChild(p);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function run(q) { if (fuse) render(fuse.search(q), q); }

  input.addEventListener('input', function () {
    if (pending) window.clearTimeout(pending);
    pending = window.setTimeout(function () { run(input.value); }, 110);
  });
})();
