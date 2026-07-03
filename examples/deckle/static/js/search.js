/* Deckle — folio search (page variant).
   Loads the Fuse.js index hwaro builds at /search.json and renders
   matches as contents rows. All result text is set with textContent,
   never innerHTML, so nothing in the index can inject markup. */
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
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The index could not be opened. Try the folio instead.';
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
      status.textContent = 'Nothing in the folio matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' piece found.' : ' pieces found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement('li');
      li.className = 'contents-row';

      var link = document.createElement('a');
      link.className = 'row-link';
      link.href = hrefFor(item);

      var line = document.createElement('span');
      line.className = 'row-line';

      var title = document.createElement('span');
      title.className = 'row-title';
      title.textContent = item.title || 'Untitled piece';

      line.appendChild(title);
      link.appendChild(line);
      li.appendChild(link);

      if (item.content) {
        var dek = document.createElement('p');
        dek.className = 'row-dek';
        dek.textContent = snippet(item.content);
        li.appendChild(dek);
      }

      list.appendChild(li);
    });
  }

  function run(value) {
    if (!fuse) return;
    render(fuse.search(value.trim()), value);
  }

  var timer = null;
  input.addEventListener('input', function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { run(input.value); }, 120);
  });
})();
