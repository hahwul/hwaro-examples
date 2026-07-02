/* Stratus — inline diary search.
   Typing in the hero's search field swaps the "recent recordings" list for
   a result list in place; clearing the field (or Esc) restores it. */
(function () {
  'use strict';

  var input = document.getElementById('site-search');
  var list = document.getElementById('recording-list');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!input || !list || !results || typeof Fuse === 'undefined') return;

  var base = window.STRATUS_BASE || '';
  var fuse = null;
  var loading = false;

  function load() {
    if (fuse || loading) return;
    loading = true;
    fetch(base + '/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.32,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        loading = false;
        if (input.value.trim()) render(input.value.trim());
      })
      .catch(function () { loading = false; });
  }

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
    return String(text || '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 26).join(' ');
  }

  function restore() {
    results.hidden = true;
    results.innerHTML = '';
    list.hidden = false;
    if (status) status.textContent = '';
  }

  function render(query) {
    if (!query) { restore(); return; }
    if (!fuse) { if (status) status.textContent = 'Loading the index…'; load(); return; }
    var hits = fuse.search(query).slice(0, 8);
    list.hidden = true;
    results.hidden = false;
    if (status) {
      status.textContent = hits.length === 0
        ? 'Nothing recorded under “' + query + '”.'
        : hits.length + (hits.length === 1 ? ' entry answers ' : ' entries answer ') + '“' + query + '”.';
    }
    if (hits.length === 0) {
      results.innerHTML = '<li class="search-empty">Try a location, a piece of gear, or a tag like hum or reverb.</li>';
      return;
    }
    results.innerHTML = hits
      .map(function (h) {
        var item = h.item;
        return (
          '<li class="recording-item search-hit"><a href="' + escapeHtml(base + item.url) + '">' +
          '<span class="hit-title">' + escapeHtml(item.title) + '</span>' +
          '<span class="hit-excerpt">' + escapeHtml(excerpt(item.content)) + '…</span>' +
          '</a></li>'
        );
      })
      .join('');
  }

  input.addEventListener('focus', load, { once: true });
  input.addEventListener('input', function () { render(input.value.trim()); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.value = '';
      restore();
      input.blur();
    }
  });
  if (input.form) {
    input.form.addEventListener('submit', function (e) { e.preventDefault(); });
  }
})();
