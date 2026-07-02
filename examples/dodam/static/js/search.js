/* Dodam — search (page variant).
   Loads the Fuse.js index built by hwaro and renders results as the same
   issue cards used across the letter archive. */
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
      status.textContent = 'The index could not be loaded. Try the issue archive instead.';
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
    if (!query.trim()) {
      status.textContent = '';
      return;
    }
    if (results.length === 0) {
      status.textContent = 'Nothing in the archive matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' letter found.' : ' letters found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement('li');
      li.className = 'issue-card';

      var h = document.createElement('h2');
      h.className = 'issue-card-title';
      var a = document.createElement('a');
      a.href = hrefFor(item);
      a.textContent = item.title || 'Untitled';
      h.appendChild(a);

      var p = document.createElement('p');
      p.className = 'issue-card-summary';
      p.textContent = snippet(item.content);

      li.appendChild(h);
      li.appendChild(p);
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
