/* Courier — search (page variant).
   Loads the Fuse.js index hwaro builds at /search.json and renders
   results as manuscript-style rows. Escapes everything before it
   touches innerHTML. */
(function () {
  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!form || !input || !status || !list) return;

  var base = form.getAttribute('data-base') || '';
  var fuse = null;

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

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
      status.textContent = 'The search index could not be loaded.';
    });

  function render(results, query) {
    list.innerHTML = '';
    if (!query.trim()) {
      status.textContent = '';
      return;
    }
    if (results.length === 0) {
      status.textContent = 'No issues match “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' result found.' : ' results found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;
      var li = document.createElement('li');
      li.className = 'search-result';
      li.innerHTML =
        '<a class="search-result-link" href="' + hrefFor(item) + '">' +
          '<span class="search-result-title">' + escapeHtml(item.title || 'Untitled') + '</span>' +
          '<span class="search-result-snippet">' + escapeHtml(snippet(item.content)) + '</span>' +
        '</a>';
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
