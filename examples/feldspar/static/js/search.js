/* Feldspar — inline sidebar search.
   A persistent input in the sidebar. Typing swaps the handbook nav tree for a
   live results list in place; clearing the field restores the tree. Fuse.js
   loads from the CDN in footer.html. Every result string is written with
   textContent — never innerHTML — so indexed content can never inject markup. */
(function () {
  'use strict';

  var input = document.getElementById('find-input');
  var results = document.getElementById('find-results');
  var status = document.getElementById('find-status');
  var sidenav = document.getElementById('sidenav');
  if (!input || !results || !sidenav) return;

  var base = (document.body.getAttribute('data-base') || '').replace(/\/$/, '');
  var fuse = null;
  var loading = false;

  function loadIndex() {
    if (fuse || loading || typeof Fuse === 'undefined') return;
    loading = true;
    fetch(base + '/search.json')
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
      .catch(function () {
        if (status) { status.hidden = false; status.textContent = 'The search index could not be loaded.'; }
      });
  }

  function excerpt(text, q) {
    var body = String(text || '').replace(/\s+/g, ' ').trim();
    var i = body.toLowerCase().indexOf(q.toLowerCase());
    var start = i > 36 ? i - 36 : 0;
    var slice = body.slice(start, start + 116).trim();
    return (start > 0 ? '…' : '') + slice + (body.length > start + 116 ? '…' : '');
  }

  function restore() {
    results.hidden = true;
    results.textContent = '';
    sidenav.hidden = false;
    if (status) { status.hidden = true; status.textContent = ''; }
  }

  function run() {
    var q = input.value.trim();
    if (!q) { restore(); return; }
    sidenav.hidden = true;
    results.hidden = false;
    results.textContent = '';
    if (!fuse) {
      if (status) { status.hidden = false; status.textContent = 'Loading the index…'; }
      return;
    }

    var hits = fuse.search(q).slice(0, 10);
    hits.forEach(function (hit) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'find-hit';
      a.href = base + hit.item.url;
      var title = document.createElement('span');
      title.className = 'find-hit-title';
      title.textContent = hit.item.title || 'Untitled';
      var text = document.createElement('span');
      text.className = 'find-hit-text';
      text.textContent = excerpt(hit.item.content, q);
      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      results.appendChild(li);
    });

    if (status) {
      status.hidden = false;
      status.textContent = hits.length
        ? hits.length + (hits.length === 1 ? ' match' : ' matches')
        : 'No matches for “' + q + '”';
    }
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () { loadIndex(); run(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; restore(); input.blur(); }
  });
})();
