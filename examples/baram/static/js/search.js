/* Baram — station log search (page variant).
   Loads the Fuse.js index that hwaro builds and renders results as
   entries hanging off the same timeline spine, with a neutral dial
   node (the index carries no wind bearing). All result text is set
   via textContent, never innerHTML. */
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
      status.textContent = 'The search index could not be loaded. Try the observation log instead.';
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
    status.textContent = results.length + (results.length === 1 ? ' reading found.' : ' readings found.');
    results.slice(0, 12).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'tl-entry tl-entry-result';

      var node = document.createElement('div');
      node.className = 'tl-node';
      node.setAttribute('aria-hidden', 'true');
      var dot = document.createElement('span');
      dot.className = 'wind-dial wind-dial-blank';
      node.appendChild(dot);

      var card = document.createElement('article');
      card.className = 'obs-card';
      var h = document.createElement('h2');
      h.className = 'obs-title';
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.textContent = r.item.title || 'Untitled reading';
      h.appendChild(a);
      var p = document.createElement('p');
      p.className = 'obs-summary';
      p.textContent = snippet(r.item.content);
      card.appendChild(h);
      card.appendChild(p);

      li.appendChild(node);
      li.appendChild(card);
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
