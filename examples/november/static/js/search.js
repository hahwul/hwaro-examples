(function () {
  var overlay = document.getElementById('search-overlay');
  var openBtn = document.getElementById('search-open-btn');
  var closeBtn = document.getElementById('search-close-btn');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!overlay || !input || !list) return;

  var fuse = null;

  function openSearch() {
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    input.focus();
    if (!fuse) {
      var dataIndex = overlay.getAttribute('data-index');
      fetch(dataIndex)
        .then(function (r) { return r.json(); })
        .then(function (data) {
          fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3 });
        });
    }
  }

  function closeSearch() {
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    if (openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
      closeSearch();
    }
  });

  input.addEventListener('input', function () {
    if (!fuse) return;
    list.textContent = '';
    var q = input.value.trim();
    if (!q) {
      status.textContent = '';
      return;
    }
    var hits = fuse.search(q).slice(0, 10);
    status.textContent = hits.length + ' result(s) found';
    hits.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = h.item.url;
      a.textContent = h.item.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  });
})();
