/* Nimbus — inline briefing search.
   Typing in the header field swaps the briefing wall for a result list in
   place; clearing the field (or pressing Esc) restores the page. */
(function () {
  'use strict';

  var input = document.getElementById('find-brief');
  var panel = document.getElementById('search-panel');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var pageContent = document.getElementById('page-content');
  if (!input || !panel || !results || !pageContent || typeof Fuse === 'undefined') return;

  var base = window.NIMBUS_BASE || '';
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
          threshold: 0.34,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
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
    return String(text || '').split(/\s+/).slice(0, 30).join(' ');
  }

  function restore() {
    panel.hidden = true;
    results.innerHTML = '';
    pageContent.hidden = false;
    if (status) status.textContent = '';
  }

  function render(query) {
    if (!query) { restore(); return; }
    if (!fuse) { load(); return; }
    var hits = fuse.search(query).slice(0, 8);
    pageContent.hidden = true;
    panel.hidden = false;
    if (status) {
      status.textContent = hits.length === 0
        ? 'No briefings match "' + query + '".'
        : hits.length + (hits.length === 1 ? ' briefing' : ' briefings') +
          ' for "' + query + '".';
    }
    if (hits.length === 0) {
      results.innerHTML =
        '<li class="search-empty">Nothing on the wall for that. Try "ceiling", "TAF", "wind shear", or a station code.</li>';
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
