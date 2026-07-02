/* Ohm — command palette search (Ctrl/Cmd+K).
   Loads the Fuse.js index hwaro builds and renders matches as a listbox.
   All result text is set via textContent, never innerHTML. */
(function () {
  var modal = document.getElementById('search-modal');
  var trigger = document.getElementById('search-trigger');
  var closeBtn = document.getElementById('search-close');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var empty = document.getElementById('search-empty');
  if (!modal || !trigger || !input || !list) return;

  var base = modal.getAttribute('data-base') || '';
  var indexUrl = modal.getAttribute('data-index') || (base + '/search.json');
  var fuse = null;
  var active = -1;
  var lastFocused = null;

  function hrefFor(item) {
    var url = item.url || item.permalink || '';
    return /^https?:\/\//.test(url) ? url : base + url;
  }

  function ensureIndex() {
    if (fuse) return;
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3 });
      })
      .catch(function () {});
  }

  function setActive(i) {
    var items = list.querySelectorAll('li');
    items.forEach(function (li, idx) { li.setAttribute('aria-selected', idx === i ? 'true' : 'false'); });
    active = i;
    if (items[i]) items[i].scrollIntoView({ block: 'nearest' });
  }

  function render(matches) {
    list.textContent = '';
    active = -1;
    var q = input.value.trim();
    empty.hidden = !(q && matches.length === 0);
    matches.slice(0, 8).forEach(function (r) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      var a = document.createElement('a');
      a.href = hrefFor(r.item);
      a.tabIndex = -1;
      a.textContent = r.item.title || 'Untitled';
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function open() {
    lastFocused = document.activeElement;
    modal.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    ensureIndex();
    input.value = '';
    render([]);
    input.focus();
  }

  function close() {
    modal.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  input.addEventListener('input', function () {
    if (!fuse) { render([]); return; }
    render(input.value.trim() ? fuse.search(input.value) : []);
  });

  input.addEventListener('keydown', function (e) {
    var items = list.querySelectorAll('li');
    if (e.key === 'ArrowDown') { e.preventDefault(); if (items.length) setActive((active + 1) % items.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (items.length) setActive((active - 1 + items.length) % items.length); }
    else if (e.key === 'Enter' && active >= 0 && items[active]) { items[active].querySelector('a').click(); }
  });

  document.addEventListener('keydown', function (e) {
    var meta = e.metaKey || e.ctrlKey;
    if (meta && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.hidden) open(); else close();
    } else if (e.key === 'Escape' && !modal.hidden) {
      close();
    }
  });

  trigger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
})();
