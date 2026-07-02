/* Mistral — archive search (page variant).
   Loads the Fuse.js index that hwaro builds and renders results as the
   same editorial rows the archive uses. All result text is inserted via
   textContent — never innerHTML — so nothing in the index is interpreted
   as markup. */
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
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The search index could not be loaded. Try the ride archive instead.';
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
      status.textContent = 'Nothing in the archive matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' page found.' : ' pages found.');
    results.slice(0, 12).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'ride-row ride-row-result';

      var main = document.createElement('div');
      main.className = 'ride-main';

      var h = document.createElement('h2');
      h.className = 'ride-title';
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.textContent = r.item.title || 'Untitled page';
      h.appendChild(a);

      var p = document.createElement('p');
      p.className = 'ride-standfirst';
      p.textContent = snippet(r.item.content);

      main.appendChild(h);
      main.appendChild(p);
      li.appendChild(main);
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
