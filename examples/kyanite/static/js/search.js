/* Kyanite — command-palette search.
   Ctrl+K / Cmd+K toggles a centered modal; arrows move the aria-selected row,
   Enter opens it, Esc closes and returns focus to the trigger. Fuse.js loads
   from the CDN in footer.html. Every result string is written with textContent
   — never innerHTML — so indexed content can never inject markup. */
(function () {
  'use strict';

  var palette = document.getElementById('search-palette');
  if (!palette) return;

  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var opener = document.getElementById('search-open');
  var base = palette.getAttribute('data-base') || '';
  var index = palette.getAttribute('data-index') || (base + '/search.json');

  var fuse = null;
  var loading = false;
  var active = -1;
  var lastFocus = null;
  var idle = 'Type to search — arrows to move, Enter to open.';

  function loadIndex() {
    if (fuse || loading || typeof Fuse === 'undefined') return;
    loading = true;
    fetch(index)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.34,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        if (input.value.trim()) run();
      })
      .catch(function () { status.textContent = 'The search index could not be loaded.'; });
  }

  function excerpt(text, q) {
    var body = String(text || '').replace(/\s+/g, ' ').trim();
    var i = body.toLowerCase().indexOf(q.toLowerCase());
    var start = i > 42 ? i - 42 : 0;
    var slice = body.slice(start, start + 128).trim();
    return (start > 0 ? '…' : '') + slice + (body.length > start + 128 ? '…' : '');
  }

  function setActive(n) {
    var rows = list.children;
    if (!rows.length) { active = -1; input.removeAttribute('aria-activedescendant'); return; }
    if (active >= 0 && rows[active]) rows[active].setAttribute('aria-selected', 'false');
    active = (n + rows.length) % rows.length;
    rows[active].setAttribute('aria-selected', 'true');
    input.setAttribute('aria-activedescendant', rows[active].id);
    rows[active].scrollIntoView({ block: 'nearest' });
  }

  function run() {
    var q = input.value.trim();
    list.textContent = '';
    active = -1;
    if (!q) { status.textContent = idle; return; }
    if (!fuse) { status.textContent = 'Loading the index…'; return; }

    var hits = fuse.search(q).slice(0, 8);
    hits.forEach(function (hit, i) {
      var li = document.createElement('li');
      li.id = 'palette-row-' + i;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      var a = document.createElement('a');
      a.href = base + hit.item.url;
      a.tabIndex = -1;
      var title = document.createElement('span');
      title.className = 'result-title';
      title.textContent = hit.item.title || 'Untitled';
      var text = document.createElement('span');
      text.className = 'result-text';
      text.textContent = excerpt(hit.item.content, q);
      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      li.addEventListener('mousemove', function () { setActive(i); });
      list.appendChild(li);
    });
    status.textContent = hits.length
      ? hits.length + (hits.length === 1 ? ' result.' : ' results.')
      : 'Nothing matches “' + q + '”.';
    if (hits.length) setActive(0);
  }

  function open() {
    if (!palette.hidden) return;
    lastFocus = document.activeElement;
    palette.hidden = false;
    document.body.classList.add('palette-open');
    if (opener) opener.setAttribute('aria-expanded', 'true');
    loadIndex();
    input.value = '';
    list.textContent = '';
    status.textContent = idle;
    input.focus();
  }

  function close() {
    if (palette.hidden) return;
    palette.hidden = true;
    document.body.classList.remove('palette-open');
    if (opener) opener.setAttribute('aria-expanded', 'false');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (opener) opener.addEventListener('click', open);

  palette.querySelectorAll('[data-search-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  input.addEventListener('input', function () { loadIndex(); run(); });

  document.addEventListener('keydown', function (e) {
    var key = e.key;
    if ((e.metaKey || e.ctrlKey) && (key === 'k' || key === 'K')) {
      e.preventDefault();
      if (palette.hidden) { open(); } else { close(); }
      return;
    }
    if (palette.hidden) return;
    if (key === 'Escape') { e.preventDefault(); close(); }
    else if (key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (key === 'Enter' && active >= 0) {
      var link = list.children[active] && list.children[active].querySelector('a');
      if (link) { e.preventDefault(); window.location.href = link.href; }
    }
  });
})();
