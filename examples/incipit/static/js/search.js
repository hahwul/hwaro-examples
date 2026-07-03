/* Incipit — essay search (page variant).
   Loads the Fuse.js index hwaro builds at /search.json and renders results
   as contents-style rows. All result text is set via textContent, never
   innerHTML, so nothing from the index can inject markup. */
(function () {
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!input || !status || !list) return;

  var scripts = document.getElementsByTagName('script');
  var base = '';
  for (var i = 0; i < scripts.length; i++) {
    var m = scripts[i].src.match(/^(.*)\/js\/search\.js$/);
    if (m) { base = m[1]; break; }
  }

  var fuse = null;

  fetch(base + '/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.32, ignoreLocation: true, minMatchCharLength: 2 });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The search index could not be loaded.';
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    return /^https?:\/\//.test(url) ? url : base + url;
  }

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    return words.length > 22 ? words.slice(0, 22).join(' ') + '…' : words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) { status.textContent = ''; return; }
    if (results.length === 0) {
      status.textContent = 'Nothing in the collection matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' essay found.' : ' essays found.');
    results.slice(0, 10).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'contents-item';

      var a = document.createElement('a');
      a.className = 'contents-link';
      a.href = hrefFor(r.item);

      var mark = document.createElement('span');
      mark.className = 'contents-numeral';
      mark.setAttribute('aria-hidden', 'true');
      mark.textContent = '→';

      var body = document.createElement('span');
      body.className = 'contents-body';

      var title = document.createElement('span');
      title.className = 'contents-title';
      title.textContent = r.item.title || 'Untitled essay';

      var teaser = document.createElement('span');
      teaser.className = 'contents-teaser';
      teaser.textContent = snippet(r.item.content);

      body.appendChild(title);
      body.appendChild(teaser);
      a.appendChild(mark);
      a.appendChild(body);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  var pending = null;
  input.addEventListener('input', function () {
    if (pending) window.clearTimeout(pending);
    pending = window.setTimeout(function () { if (fuse) render(fuse.search(input.value), input.value); }, 120);
  });
})();
