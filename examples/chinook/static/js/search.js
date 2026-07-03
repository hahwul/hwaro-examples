/* Chinook — page search.
   Loads the Fuse.js index hwaro builds and renders matches as
   timeline rows in the same icing-swirl style as the bake log. */
(function () {
  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!form || !input || !status || !list) return;

  var base = form.getAttribute('data-base') || '';
  var fuse = null;

  var SWIRL = 'M16 16 a1.5 1.5 0 0 1 3 0 a3 3 0 0 1 -6 0 a4.5 4.5 0 0 1 9 0 a6 6 0 0 1 -12 0 a7.5 7.5 0 0 1 15 0';
  var SVGNS = 'http://www.w3.org/2000/svg';

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
      status.textContent = 'The index could not be loaded. Try the bake log instead.';
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

  function node() {
    var span = document.createElement('span');
    span.className = 'bake-node';
    span.setAttribute('aria-hidden', 'true');
    var svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('width', '34');
    svg.setAttribute('height', '34');
    var circle = document.createElementNS(SVGNS, 'circle');
    circle.setAttribute('cx', '16'); circle.setAttribute('cy', '16'); circle.setAttribute('r', '15');
    circle.setAttribute('class', 'ic-disc'); circle.setAttribute('stroke-width', '2');
    var path = document.createElementNS(SVGNS, 'path');
    path.setAttribute('class', 'ic-swirl');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('d', SWIRL);
    svg.appendChild(circle); svg.appendChild(path);
    span.appendChild(svg);
    return span;
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) { status.textContent = ''; return; }
    if (results.length === 0) {
      status.textContent = 'No bake in the log matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' bake found.' : ' bakes found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;
      var li = document.createElement('li');
      li.className = 'bake';
      li.appendChild(node());

      var card = document.createElement('article');
      card.className = 'bake-card';

      var h3 = document.createElement('h3');
      h3.className = 'bake-title';
      var a = document.createElement('a');
      a.href = hrefFor(item);
      a.textContent = item.title || 'Untitled bake';
      h3.appendChild(a);

      var p = document.createElement('p');
      p.className = 'bake-summary';
      p.textContent = snippet(item.content);

      card.appendChild(h3);
      card.appendChild(p);
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  function run(query) { if (fuse) render(fuse.search(query), query); }

  var timer = null;
  input.addEventListener('input', function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { run(input.value); }, 120);
  });
})();
