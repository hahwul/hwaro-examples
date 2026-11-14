/* Inline filter for the release log. Typing swaps the list for the matching
   releases, best match first; clearing puts the full log back. Results are
   the log's own entry nodes re-ordered in place, so nothing from the index
   is ever written as HTML. */
(function () {
  var form = document.querySelector('form[data-index]');
  var input = document.getElementById('log-filter');
  var list = document.getElementById('log');
  var status = document.getElementById('log-status');
  if (!form || !input || !list || !status || typeof Fuse === 'undefined') return;

  var entries = Array.prototype.slice.call(list.children);
  var idle = status.textContent;
  var fuse = null;

  function entryFor(url) {
    for (var i = 0; i < entries.length; i++) {
      var own = entries[i].getAttribute('data-url');
      if (own && url.slice(-own.length) === own) return entries[i];
    }
    return null; // the index also holds pages that are not releases
  }

  function show(nodes) {
    list.textContent = '';
    nodes.forEach(function (n) { list.appendChild(n); });
  }

  function render() {
    var q = input.value.trim();
    if (!q || !fuse) { show(entries); status.textContent = idle; return; }
    var hits = fuse.search(q).map(function (h) { return entryFor(h.item.url); }).filter(Boolean);
    show(hits);
    status.textContent = hits.length
      ? hits.length + ' of ' + entries.length + ' releases'
      : 'No release mentions that';
  }

  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3, ignoreLocation: true });
      render();
    })
    .catch(function () { /* no index: the full log stays as it is */ });

  input.addEventListener('input', render);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; render(); }
  });
})();
