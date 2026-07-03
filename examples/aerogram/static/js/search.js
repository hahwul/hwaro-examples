/* Aerogram — archive search (page variant).
   Loads the Fuse.js index that hwaro builds and renders results as a
   plain result list. All result text is set via textContent, never
   innerHTML, so nothing in the index can inject markup. */
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
      status.textContent = 'The search index could not be loaded. Try the archive instead.';
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
      status.textContent = 'No dispatch matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' dispatch found.' : ' dispatches found.');
    results.slice(0, 12).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'result-row';

      var h = document.createElement('h2');
      h.className = 'result-title';
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.textContent = r.item.title || 'Untitled dispatch';
      h.appendChild(a);

      var p = document.createElement('p');
      p.className = 'result-excerpt';
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
