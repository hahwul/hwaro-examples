/* Virga — page search (fuse_json index built by hwaro).
   Results render as entries in the same ruled column as the essays desk. */
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
      status.textContent = 'The archive index could not be loaded. Try the essays desk instead.';
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
      status.textContent = 'Nothing in the archive matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' piece found.' : ' pieces found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement('li');
      li.className = 'entry entry-result';

      var kicker = document.createElement('p');
      kicker.className = 'entry-kicker';
      var label = document.createElement('span');
      label.className = 'kicker-label';
      label.textContent = 'From the archive';
      kicker.appendChild(label);

      var h = document.createElement('h2');
      h.className = 'entry-title';
      var a = document.createElement('a');
      a.href = hrefFor(item);
      a.textContent = item.title || 'Untitled';
      h.appendChild(a);

      var p = document.createElement('p');
      p.className = 'entry-summary';
      p.textContent = snippet(item.content);

      var more = document.createElement('a');
      more.className = 'read-on';
      more.href = hrefFor(item);
      more.textContent = 'Read the essay →';

      li.appendChild(kicker);
      li.appendChild(h);
      li.appendChild(p);
      li.appendChild(more);
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
