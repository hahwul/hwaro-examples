(function () {
  var overlay = document.getElementById('search-palette');
  var trigger = document.getElementById('search-trigger');
  var input = document.getElementById('search-input');
  var closeBtn = document.getElementById('search-palette-close');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');

  if (!overlay || !input) return;

  var fuse = null;
  var selectedIndex = -1;

  // Fetch search index
  fetch(overlay.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3
      });
    });

  function openPalette() {
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
    setTimeout(function () { input.focus(); }, 50);
  }

  function closePalette() {
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock background scroll
    if (trigger) trigger.focus();
    selectedIndex = -1;
  }

  if (trigger) {
    trigger.addEventListener('click', openPalette);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closePalette);
  }
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closePalette();
    }
  });

  // Hotkeys: Cmd+K, Ctrl+K, Escape, /
  window.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openPalette();
    } else if (e.key === 'Escape' && overlay.style.display === 'flex') {
      e.preventDefault();
      closePalette();
    } else if (e.key === '/' && document.activeElement !== input && overlay.style.display !== 'flex') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openPalette();
      }
    }
  });

  // Handle Search Input & Navigation
  input.addEventListener('input', function () {
    list.textContent = '';
    selectedIndex = -1;
    if (!fuse || !input.value) {
      status.textContent = 'Search UAP files';
      return;
    }
    var hits = fuse.search(input.value).slice(0, 8);
    status.textContent = hits.length + ' case file(s) found';

    hits.forEach(function (h, idx) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = h.item.url;
      a.setAttribute('role', 'option');
      a.setAttribute('id', 'search-item-' + idx);
      a.textContent = h.item.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  });

  // Key navigation inside search dialog
  input.addEventListener('keydown', function (e) {
    var items = list.querySelectorAll('a');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < items.length) {
        e.preventDefault();
        items[selectedIndex].click();
      }
    }
  });

  function updateSelection(items) {
    items.forEach(function (el, idx) {
      if (idx === selectedIndex) {
        el.classList.add('selected');
        el.setAttribute('aria-selected', 'true');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
        el.setAttribute('aria-selected', 'false');
      }
    });
  }
})();
