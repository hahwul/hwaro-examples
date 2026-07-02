/* Byeol — inline atlas search.
   Typing swaps the plate wall for a result list in place; clearing restores it. */
(function () {
  'use strict';

  var input = document.getElementById('atlas-search');
  var wall = document.getElementById('plate-wall');
  var results = document.getElementById('search-results');
  if (!input || !wall || !results || typeof Fuse === 'undefined') return;

  var status = document.getElementById('search-status');
  var heading = document.getElementById('plates-heading');
  var defaultHeading = heading ? heading.textContent : '';
  var base = window.BYEOL_BASE || '';
  var fuse = null;

  fetch(base + '/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) render(input.value.trim());
    })
    .catch(function () { fuse = null; });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      switch (c) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        default: return '&#39;';
      }
    });
  }

  function excerpt(text) {
    return String(text || '').split(/\s+/).slice(0, 26).join(' ');
  }

  function restore() {
    results.hidden = true;
    results.innerHTML = '';
    wall.hidden = false;
    if (heading) heading.textContent = defaultHeading;
    if (status) status.textContent = '';
  }

  function render(query) {
    if (!fuse || !query) { restore(); return; }
    var hits = fuse.search(query).slice(0, 8);
    wall.hidden = true;
    results.hidden = false;
    if (heading) heading.textContent = 'Charting “' + query + '”';
    if (status) {
      status.textContent = hits.length + (hits.length === 1 ? ' plate found' : ' plates found');
    }
    if (hits.length === 0) {
      results.innerHTML =
        '<li class="search-empty">Nothing in the folio matches “' +
        escapeHtml(query) + '”. Thirty-four plates were lost to the fire.</li>';
      return;
    }
    results.innerHTML = hits
      .map(function (h) {
        var item = h.item;
        return (
          '<li class="search-hit"><a href="' + escapeHtml(base + item.url) + '">' +
          '<span class="hit-title">' + escapeHtml(item.title) + '</span>' +
          '<span class="hit-excerpt">' + escapeHtml(excerpt(item.content)) + '…</span>' +
          '</a></li>'
        );
      })
      .join('');
  }

  input.addEventListener('input', function () { render(input.value.trim()); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.value = '';
      restore();
    }
  });
})();
