/* Petrichor — inline diary search.
   Typing in the "Search the diary" field swaps the entry list for a list of
   matches in place; clearing the field (or pressing Esc) puts the diary back. */
(function () {
  'use strict';

  var input = document.getElementById('diary-search');
  var panel = document.getElementById('search-panel');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var list = document.getElementById('page-list');
  if (!input || !panel || !results || !list || typeof Fuse === 'undefined') return;

  var base = window.PETRICHOR_BASE || '';
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
          threshold: 0.35,
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
    return String(text || '').split(/\s+/).slice(0, 26).join(' ');
  }

  function restore() {
    panel.hidden = true;
    results.innerHTML = '';
    list.hidden = false;
    if (status) status.textContent = '';
  }

  function render(query) {
    if (!query) { restore(); return; }
    if (!fuse) { load(); return; }
    var hits = fuse.search(query).slice(0, 8);
    list.hidden = true;
    panel.hidden = false;
    if (status) {
      status.textContent = hits.length === 0
        ? 'Nothing in the notebook for “' + query + '”.'
        : hits.length + (hits.length === 1 ? ' entry' : ' entries') +
          ' mention “' + query + '”.';
    }
    if (hits.length === 0) {
      results.innerHTML =
        '<li class="search-empty">No entry by that name — try &ldquo;clay&rdquo;, &ldquo;drainage&rdquo;, or a plant.</li>';
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
    if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
  });
  if (input.form) {
    input.form.addEventListener('submit', function (e) { e.preventDefault(); });
  }
})();
