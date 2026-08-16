(function () {
  var form = document.querySelector('form[data-index]');
  var input = document.getElementById('session-search-input');
  var list = document.getElementById('episode-grid-container');
  var originalHtml = list ? list.innerHTML : '';
  var status = document.getElementById('search-status');
  if (!form || !input || !list) return;

  var fuse = null;
  var indexUrl = form.getAttribute('data-index');

  fetch(indexUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content', 'description', 'tags'],
        threshold: 0.35
      });
    })
    .catch(function () {});

  input.addEventListener('input', function () {
    var query = input.value.trim();
    if (!fuse || query === '') {
      list.innerHTML = originalHtml;
      if (status) status.textContent = '';
      return;
    }

    var hits = fuse.search(query);
    list.textContent = '';

    if (hits.length === 0) {
      var emptyEl = document.createElement('div');
      emptyEl.className = 'search-no-results';
      emptyEl.textContent = 'No archival session matches recorded query: "' + query + '"';
      list.appendChild(emptyEl);
      if (status) status.textContent = '0 sessions found';
      return;
    }

    if (status) {
      status.textContent = hits.length + ' session' + (hits.length === 1 ? '' : 's') + ' located';
    }

    hits.forEach(function (h) {
      var item = h.item;
      var card = document.createElement('article');
      card.className = 'session-card';

      var metaRail = document.createElement('div');
      metaRail.className = 'card-session-meta';

      var catCode = document.createElement('span');
      catCode.className = 'session-code';
      catCode.textContent = item.url.replace(/\/episodes\//g, '').replace(/\//g, '').toUpperCase() || 'SESSION';
      metaRail.appendChild(catCode);

      if (item.date) {
        var timeEl = document.createElement('time');
        timeEl.className = 'session-date';
        timeEl.textContent = item.date;
        metaRail.appendChild(timeEl);
      }
      card.appendChild(metaRail);

      var titleEl = document.createElement('h3');
      titleEl.className = 'session-card-title';
      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      titleEl.appendChild(a);
      card.appendChild(titleEl);

      if (item.description) {
        var descEl = document.createElement('p');
        descEl.className = 'session-card-desc';
        descEl.textContent = item.description;
        card.appendChild(descEl);
      }

      var ctaLink = document.createElement('a');
      ctaLink.className = 'session-card-link';
      ctaLink.href = item.url;
      ctaLink.textContent = 'Read Session Notes →';
      card.appendChild(ctaLink);

      list.appendChild(card);
    });
  });
})();
