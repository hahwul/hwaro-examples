(function () {
  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var trigger = document.getElementById('search-trigger');
  var closeBtn = document.getElementById('search-close');

  if (!overlay || !input) return;

  var fuse = null;
  var dataIndexUrl = overlay.getAttribute('data-index') || (window.BASE_URL ? window.BASE_URL + '/search.json' : '/search.json');

  function loadIndex() {
    if (fuse) return;
    fetch(dataIndexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3 });
      })
      .catch(function () {});
  }

  function openSearch() {
    overlay.classList.add('is-active');
    loadIndex();
    setTimeout(function () { input.focus(); }, 50);
  }

  function closeSearch() {
    overlay.classList.remove('is-active');
    input.value = '';
    list.textContent = '';
    if (status) status.textContent = "Press '/' anywhere to search";
  }

  if (trigger) {
    trigger.addEventListener('click', openSearch);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearch);
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeSearch();
  });

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
    var query = input.value.trim();
    if (!query) {
      if (status) status.textContent = "Press '/' anywhere to search";
      return;
    }
    var hits = fuse.search(query).slice(0, 8);
    if (status) status.textContent = hits.length + ' result(s) for "' + query + '"';
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
