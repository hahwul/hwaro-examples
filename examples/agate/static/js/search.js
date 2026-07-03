/* Agate — overlay search. The header button or the "/" key opens a modal
   dialog; typing searches the reference via Fuse.js. Arrow keys move the
   selection, Enter opens it, Esc closes and returns focus to the trigger. */
(function () {
  'use strict';

  var baseUrl = (document.currentScript && document.currentScript.dataset.baseUrl) || '';
  var overlay = document.getElementById('search-overlay');
  var openBtn = document.getElementById('search-open');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!overlay || !input || !list || !status) return;

  var fuse = null;
  var loading = false;
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
          threshold: 0.32,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        if (input.value) render(input.value);
      })
      .catch(function () { status.textContent = 'The index failed to load.'; });
  }

  function open() {
    if (!overlay.hidden) return;
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('search-open');
    input.focus();
    input.select();
    loadIndex();
  }

  function close() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.classList.remove('search-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function snippet(text) {
    var clean = String(text).replace(/\s+/g, ' ').trim();
    return clean.length > 140 ? clean.slice(0, 140) + '…' : clean;
  }

  function render(query) {
    var q = query.trim();
    selected = -1;
    if (!q) {
      list.innerHTML = '';
      status.textContent = 'Type to search all seven chapters.';
      return;
    }
    if (!fuse) { status.textContent = 'Loading the index…'; return; }
    var results = fuse.search(q).slice(0, 8);
    if (results.length === 0) {
      list.innerHTML = '';
      status.textContent = 'No matches for “' + q + '”.';
      return;
    }
    var html = '';
    for (var i = 0; i < results.length; i++) {
      var item = results[i].item;
      var url = item.url || '';
      var href = /^https?:\/\//.test(url) ? url : baseUrl + url;
      html += '<li role="option" aria-selected="false"><a href="' + escapeHtml(href) + '">' +
        '<span class="res-title">' + escapeHtml(item.title || 'Untitled') + '</span>' +
        '<span class="res-snippet">' + escapeHtml(snippet(item.content || '')) + '</span>' +
        '</a></li>';
    }
    list.innerHTML = html;
    status.textContent = results.length + (results.length === 1 ? ' match' : ' matches') + ' — ↑↓ to move, ↵ to open';
  }

  function moveSelection(delta) {
    var items = list.children;
    if (items.length === 0) return;
    if (selected >= 0) items[selected].setAttribute('aria-selected', 'false');
    selected = (selected + delta + items.length) % items.length;
    items[selected].setAttribute('aria-selected', 'true');
    items[selected].scrollIntoView({ block: 'nearest' });
  }

  function isTypingTarget(el) {
    if (!el) return false;
    var tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
  }

  if (openBtn) openBtn.addEventListener('click', open);
  input.addEventListener('input', function () { render(input.value); });

  document.addEventListener('keydown', function (e) {
    if (overlay.hidden) {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey && !isTypingTarget(e.target)) {
        e.preventDefault();
        open();
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
