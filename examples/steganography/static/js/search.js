(function () {
  'use strict';

  var input = document.getElementById('search-input');
  if (!input || typeof Fuse === 'undefined') { return; }

  var dirListing = document.getElementById('dir-listing');
  var searchSection = document.getElementById('search-section');
  var resultsList = document.getElementById('search-results');
  var searchCount = document.getElementById('search-count');
  var searchStatus = document.getElementById('search-status');
  var base = input.getAttribute('data-base') || '';
  var fuse = null;
  var loading = false;

  function loadIndex() {
    if (fuse || loading) { return; }
    loading = true;
    fetch(input.getAttribute('data-index'))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.32,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        run();
      })
      .catch(function () {
        if (searchStatus) { searchStatus.textContent = 'Could not load search index.'; }
      });
  }

  function restore() {
    if (searchSection) { searchSection.hidden = true; }
    if (resultsList) { resultsList.textContent = ''; }
    if (dirListing) { dirListing.hidden = false; }
    if (searchStatus) { searchStatus.textContent = ''; }
  }

  function run() {
    var q = input.value.trim();
    if (!q) { restore(); return; }
    if (!fuse) {
      if (searchStatus) { searchStatus.textContent = 'Loading index...'; }
      return;
    }

    var hits = fuse.search(q).slice(0, 10);
    resultsList.textContent = '';

    hits.forEach(function (hit) {
      var item = hit.item;
      var li = document.createElement('li');
      li.className = 'file-item';

      var perms = document.createElement('span');
      perms.className = 'file-perms';
      perms.textContent = '-rw-r--r--';

      var meta = document.createElement('span');
      meta.className = 'file-meta';
      meta.textContent = '1 steg master ' + (item.word_count || 120) + 'B';

      var a = document.createElement('a');
      a.className = 'file-link';
      a.href = base + item.url;
      a.textContent = item.title;

      li.appendChild(perms);
      li.appendChild(meta);
      li.appendChild(a);
      resultsList.appendChild(li);
    });

    if (dirListing) { dirListing.hidden = true; }
    if (searchSection) { searchSection.hidden = false; }
    if (searchCount) { searchCount.textContent = hits.length; }
    if (searchStatus) {
      searchStatus.textContent = hits.length + (hits.length === 1 ? ' result' : ' results') + ' found.';
    }
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () { loadIndex(); run(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.value = '';
      restore();
      input.blur();
    }
  });
})();
