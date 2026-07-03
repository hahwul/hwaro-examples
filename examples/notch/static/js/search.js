/* Inline release filter for Notch. Each `.finder` widget swaps its paired
   list for Fuse.js results in place; clearing the field restores the list. */
(function () {
  var cache = null, pending = null;

  function loadIndex(url) {
    if (cache) return Promise.resolve(cache);
    if (pending) return pending;
    pending = fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) { cache = data; return data; });
    return pending;
  }

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  function hex(n) {
    return ('0' + n.toString(16).toUpperCase()).slice(-2);
  }

  function initFinder(root) {
    var input = root.querySelector('[data-finder-input]');
    if (!input) return;
    var list = document.querySelector(root.getAttribute('data-finder-list'));
    var results = document.querySelector(root.getAttribute('data-finder-results'));
    var status = root.querySelector('[data-finder-status]');
    var url = input.getAttribute('data-index');
    var base = input.getAttribute('data-base') || '';
    var fuse = null;

    function ensure() {
      return loadIndex(url).then(function (data) {
        if (!fuse) {
          fuse = new Fuse(data, {
            keys: ['title', 'content'],
            threshold: 0.35,
            ignoreLocation: true,
            minMatchCharLength: 2
          });
        }
        return fuse;
      });
    }

    function restore() {
      results.hidden = true;
      results.innerHTML = '';
      if (status) status.textContent = '';
      if (list) list.hidden = false;
    }

    function render(q) {
      ensure().then(function (f) {
        var hits = f.search(q).slice(0, 12);
        results.innerHTML = '';
        if (!hits.length) {
          if (status) status.textContent = 'no rows match "' + q + '"';
          results.hidden = false;
          if (list) list.hidden = true;
          var empty = document.createElement('li');
          empty.className = 'find-empty';
          empty.textContent = 'nothing in the log matches that.';
          results.appendChild(empty);
          return;
        }
        if (status) status.textContent = hits.length + (hits.length === 1 ? ' row' : ' rows') + ' matched';
        hits.forEach(function (r, i) {
          var it = r.item;
          var snip = (it.content || '').replace(/\s+/g, ' ').slice(0, 120);
          var li = document.createElement('li');
          li.className = 'find-row';
          li.innerHTML =
            '<a class="find-link" href="' + base + esc(it.url) + '">' +
            '<span class="find-num">' + hex(i) + '</span>' +
            '<span class="find-title">' + esc(it.title) + '</span>' +
            '<span class="find-snip">' + esc(snip) + '</span></a>';
          results.appendChild(li);
        });
        results.hidden = false;
        if (list) list.hidden = true;
      });
    }

    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (q.length < 2) { restore(); return; }
      render(q);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var finders = document.querySelectorAll('.finder');
    for (var i = 0; i < finders.length; i++) initFinder(finders[i]);
  });
})();
