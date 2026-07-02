(function () {
  var modal = document.querySelector('[data-search-modal]');
  var input = document.querySelector('[data-search-input]');
  var results = document.querySelector('[data-search-results]');
  var empty = document.querySelector('[data-search-empty]');
  var trigger = document.querySelector('[data-search-open]');
  if (!modal || !input || !results) return;

  var fuse = null;
  var items = [];
  var active = -1;
  var lastFocus = null;

  fetch(BASE + '/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3, ignoreLocation: true });
    })
    .catch(function () {});

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function open() {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('is-locked');
    input.value = '';
    render([]);
    input.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function render(matches) {
    results.innerHTML = '';
    items = [];
    active = -1;
    matches.slice(0, 8).forEach(function (m, i) {
      var it = m.item;
      var li = document.createElement('li');
      li.className = 'cmdk-item';
      li.setAttribute('role', 'option');
      li.id = 'cmdk-opt-' + i;
      var a = document.createElement('a');
      a.href = BASE + it.url;
      a.innerHTML = '<span class="cmdk-item-title">' + esc(it.title) +
        '</span><span class="cmdk-item-url mono">' + esc(it.url) + '</span>';
      li.appendChild(a);
      results.appendChild(li);
      items.push(li);
    });
    if (empty) empty.hidden = matches.length > 0 || input.value.length === 0;
  }

  function highlight() {
    items.forEach(function (li, i) {
      li.setAttribute('aria-selected', i === active ? 'true' : 'false');
    });
    if (active >= 0 && items[active]) {
      input.setAttribute('aria-activedescendant', items[active].id);
      items[active].scrollIntoView({ block: 'nearest' });
    }
  }

  function go() {
    var target = active >= 0 ? items[active] : items[0];
    if (target) { var a = target.querySelector('a'); if (a) window.location.href = a.href; }
  }

  input.addEventListener('input', function () {
    if (!fuse || !input.value.trim()) { render([]); return; }
    render(fuse.search(input.value.trim()));
  });

  document.addEventListener('keydown', function (e) {
    var key = e.key.toLowerCase();
    if ((e.metaKey || e.ctrlKey) && key === 'k') { e.preventDefault(); modal.hidden ? open() : close(); return; }
    if (modal.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, items.length - 1); highlight(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); highlight(); }
    else if (e.key === 'Enter') { e.preventDefault(); go(); }
  });

  if (trigger) trigger.addEventListener('click', open);
  document.querySelectorAll('[data-search-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
})();
