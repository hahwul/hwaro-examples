/* Gathering — search (page variant).
   Loads the Fuse.js index built by hwaro and renders results as
   quiet log-style rows beneath the search field. */
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
      status.textContent = 'The index could not be loaded. Try the passage log instead.';
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
      status.textContent = 'Nothing in the log matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' entry found.' : ' entries found.');
    results.slice(0, 10).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement('li');
      li.className = 'result-row';

      var a = document.createElement('a');
      a.className = 'result-link';
      a.href = hrefFor(item);

      var title = document.createElement('span');
      title.className = 'result-title';
      title.textContent = item.title || 'Untitled';

      var text = document.createElement('span');
      text.className = 'result-snippet';
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
