(function () {
  var openBtn = document.getElementById('search-open');
  var palette = document.getElementById('search-palette');
  if (!openBtn || !palette) return;

  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var base = palette.getAttribute('data-base') || '';
  var indexUrl = palette.getAttribute('data-index');

  var fuse = null;
  var items = [];
  var selected = -1;
  var lastFocused = null;

  var indexFailed = false;

  function loadIndex() {
    if (fuse || indexFailed) return;
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.32, includeScore: true });
        runSearch();
      })
      .catch(function () {
        indexFailed = true;
        runSearch();
      });
  }

  function snippet(text, query) {
    var plain = (text || '').replace(/\s+/g, ' ').trim();
    var idx = plain.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) return plain.slice(0, 100);
    var start = Math.max(0, idx - 40);
    return (start > 0 ? '…' : '') + plain.slice(start, start + 120) + '…';
  }

  function render(list, query) {
    results.innerHTML = '';
    items = list;
    selected = list.length ? 0 : -1;
    list.forEach(function (entry, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'palette-result';
      a.href = base + entry.item.url;
      a.setAttribute('role', 'option');
      a.id = 'result-' + i;
      a.setAttribute('aria-selected', i === selected ? 'true' : 'false');
      var title = document.createElement('span');
      title.className = 'result-title';
      title.textContent = entry.item.title || 'Untitled';
      var desc = document.createElement('span');
      desc.className = 'result-snippet';
      desc.textContent = snippet(entry.item.content, query);
      a.appendChild(title);
      a.appendChild(desc);
      li.appendChild(a);
      results.appendChild(li);
    });
    status.textContent = list.length
      ? list.length + ' result' + (list.length === 1 ? '' : 's')
      : 'No matches — try another term.';
  }

  function updateSelection() {
    var links = results.querySelectorAll('.palette-result');
    links.forEach(function (link, i) {
      link.setAttribute('aria-selected', i === selected ? 'true' : 'false');
      if (i === selected) link.scrollIntoView({ block: 'nearest' });
    });
    input.setAttribute('aria-activedescendant', selected >= 0 ? 'result-' + selected : '');
  }

  function open() {
    lastFocused = document.activeElement;
    loadIndex();
    palette.hidden = false;
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    input.value = '';
    results.innerHTML = '';
    status.textContent = 'Type to search — arrows to move, Enter to open.';
    window.setTimeout(function () { input.focus(); }, 0);
  }

  function close() {
    palette.hidden = true;
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    if (lastFocused) lastFocused.focus();
  }

  openBtn.addEventListener('click', open);

  palette.querySelectorAll('[data-search-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (event) {
    var meta = event.ctrlKey || event.metaKey;
    if (meta && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      palette.hidden ? open() : close();
      return;
    }
    if (!palette.hidden && event.key === 'Escape') {
      close();
    }
  });

  function runSearch() {
    var query = input.value.trim();
    if (!query) {
      results.innerHTML = '';
      status.textContent = 'Type to search — arrows to move, Enter to open.';
      return;
    }
    if (!fuse) {
      results.innerHTML = '';
      status.textContent = indexFailed ? 'Search index failed to load.' : 'Building index…';
      return;
    }
    render(fuse.search(query).slice(0, 8), query);
  }

  input.addEventListener('input', runSearch);

  input.addEventListener('keydown', function (event) {
    if (!items.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      selected = Math.min(selected + 1, items.length - 1);
      updateSelection();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      selected = Math.max(selected - 1, 0);
      updateSelection();
    } else if (event.key === 'Enter' && selected >= 0) {
      event.preventDefault();
      window.location.href = base + items[selected].item.url;
    }
  });
})();
