/* Foehn — search overlay. Opens from the header button or "/",
   closes on Esc, arrow keys move the selection, Enter opens. */
(function () {
  'use strict';

  var baseUrl = (document.currentScript && document.currentScript.dataset.baseUrl) || '';
  var overlay = document.getElementById('search-overlay');
  var openBtn = document.getElementById('search-open');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!overlay || !openBtn || !input || !list || !status) return;

  var fuse = null;
  var loading = false;
  var results = [];
  var selected = -1;
  var lastFocus = null;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function loadIndex() {
    if (fuse || loading) return;
    loading = true;
    fetch(baseUrl + '/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        if (input.value) render(input.value);
      })
      .catch(function () {
        status.textContent = 'The search index failed to load.';
      });
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('search-locked');
    input.focus();
    input.select();
    loadIndex();
  }

  function close() {
    overlay.hidden = true;
    document.body.classList.remove('search-locked');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function snippet(text) {
    var clean = String(text).replace(/\s+/g, ' ').trim();
    return clean.length > 130 ? clean.slice(0, 130) + '…' : clean;
  }

  function render(query) {
    var q = query.trim();
    selected = -1;
    if (!q) {
      results = [];
      list.innerHTML = '';
      status.textContent = 'Type to search every panel and page.';
      return;
    }
    if (!fuse) {
      status.textContent = 'Warming up the search index…';
      return;
    }
    results = fuse.search(q).slice(0, 8);
    if (results.length === 0) {
      list.innerHTML = '';
      status.textContent = 'No panels match “' + q + '”.';
      return;
    }
    var html = '';
    for (var i = 0; i < results.length; i++) {
      var item = results[i].item;
      var url = item.url || '';
      var href = /^https?:\/\//.test(url) ? url : baseUrl + url;
      html += '<li role="option" aria-selected="false"><a href="' + escapeHtml(href) + '">' +
        '<span class="search-result-title">' + escapeHtml(item.title || 'Untitled') + '</span>' +
        '<span class="search-result-snippet">' + escapeHtml(snippet(item.content || '')) + '</span>' +
        '</a></li>';
    }
    list.innerHTML = html;
    status.textContent = results.length + (results.length === 1 ? ' result' : ' results');
  }

  function moveSelection(delta) {
    var items = list.children;
    if (items.length === 0) return;
    if (selected >= 0) items[selected].setAttribute('aria-selected', 'false');
    selected = (selected + delta + items.length) % items.length;
    items[selected].setAttribute('aria-selected', 'true');
    items[selected].scrollIntoView({ block: 'nearest' });
  }

  openBtn.addEventListener('click', open);

  input.addEventListener('input', function () { render(input.value); });

  document.addEventListener('keydown', function (e) {
    if (overlay.hidden) {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        var t = e.target;
        var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
        if (!typing) { e.preventDefault(); open(); }
      }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); moveSelection(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSelection(-1); }
    else if (e.key === 'Enter' && selected >= 0) {
      var link = list.children[selected].querySelector('a');
      if (link) { e.preventDefault(); window.location.href = link.href; }
    }
  });

  overlay.addEventListener('mousedown', function (e) {
    if (e.target === overlay) close();
  });
})();
