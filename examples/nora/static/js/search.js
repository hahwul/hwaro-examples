(function () {
  var input = document.getElementById('search-input');
  var list = document.querySelector('.timeline-list');
  if (!input || !list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.episode-item'));
  var noResults = document.createElement('div');
  noResults.className = 'no-results';
  noResults.textContent = 'No episodes match your search.';
  noResults.style.display = 'none';
  list.parentNode.insertBefore(noResults, list.nextSibling);

  var fuse = null;
  var indexUrl = input.getAttribute('data-index');

  fetch(indexUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      // Filter out pages that are not under episodes/
      var episodeData = data.filter(function (item) {
        return item.url.indexOf('/episodes/') !== -1;
      });
      fuse = new Fuse(episodeData, {
        keys: ['title', 'content', 'description'],
        threshold: 0.3
      });
    });

  input.addEventListener('input', function () {
    var query = input.value.trim();
    if (!query) {
      items.forEach(function (item) {
        item.style.display = '';
      });
      noResults.style.display = 'none';
      list.style.display = '';
      return;
    }

    if (!fuse) return;

    var hits = fuse.search(query);
    var hitUrls = hits.map(function (h) {
      var u = h.item.url;
      // Normalize trailing slash
      if (u.slice(-1) === '/') u = u.slice(0, -1);
      return u;
    });

    var visibleCount = 0;
    items.forEach(function (item) {
      var link = item.querySelector('.card-title a');
      if (!link) return;
      var itemUrl = link.getAttribute('href');
      var u = itemUrl;
      // Remove base_url prefix if present in the absolute href
      if (u.indexOf('//') !== -1) {
        var parts = u.split('//')[1].split('/');
        parts.shift(); // remove host
        u = '/' + parts.join('/');
      }
      if (u.slice(-1) === '/') u = u.slice(0, -1);

      var isHit = hitUrls.indexOf(u) !== -1;
      if (isHit) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (visibleCount === 0) {
      noResults.style.display = 'block';
      list.style.display = 'none';
    } else {
      noResults.style.display = 'none';
      list.style.display = '';
    }
  });
})();
