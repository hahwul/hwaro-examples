/* Gil — journal search (page variant).
   Loads the Fuse.js index built by hwaro and renders results
   as nodes hanging off the same dotted trail spine. */
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
      status.textContent = 'The search index could not be loaded. Try the stages listing instead.';
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
      status.textContent = 'Nothing along the ridge matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' entry found.' : ' entries found.');
    results.slice(0, 12).forEach(function (r, i) {
      var li = document.createElement('li');
      li.className = 'trail-entry';

      var marker = document.createElement('div');
      marker.className = 'km-marker km-marker-result';
      marker.setAttribute('aria-hidden', 'true');
      var value = document.createElement('span');
      value.className = 'km-value';
      value.textContent = String(i + 1);
      var unit = document.createElement('span');
      unit.className = 'km-unit';
      unit.textContent = 'of ' + Math.min(results.length, 12);
      marker.appendChild(value);
      marker.appendChild(unit);

      var card = document.createElement('article');
      card.className = 'stage-card';
      var h = document.createElement('h2');
      h.className = 'stage-title';
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.textContent = r.item.title || 'Untitled entry';
      h.appendChild(a);
      var p = document.createElement('p');
      p.className = 'stage-summary';
      p.textContent = snippet(r.item.content);
      card.appendChild(h);
      card.appendChild(p);

      li.appendChild(marker);
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
