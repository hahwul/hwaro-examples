/* Halcyon — trip report search (page variant).
   Loads the Fuse.js index hwaro builds and renders results as plain
   voyage cards. All result text is set via textContent, never innerHTML. */
(function () {
  var form = document.querySelector('.search-form');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!form || !input || !status || !list) return;

  var base = form.getAttribute('data-base') || '';
  var fuse = null;

  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.34,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
      if (input.value.trim()) run(input.value);
    })
    .catch(function () {
      status.textContent = 'The search index could not be loaded. Browse the full log instead.';
    });

  function snippet(text) {
    var words = (text || '').replace(/\s+/g, ' ').trim().split(' ');
    if (words.length > 28) return words.slice(0, 28).join(' ') + '…';
    return words.join(' ');
  }

  function render(results, query) {
    list.textContent = '';
    if (!query.trim()) { status.textContent = ''; return; }
    if (results.length === 0) {
      status.textContent = 'Nothing in the log matches “' + query + '”.';
      return;
    }
    status.textContent = results.length + (results.length === 1 ? ' report found.' : ' reports found.');
    results.slice(0, 12).forEach(function (r) {
      var item = r.item;
      var card = document.createElement('article');
      card.className = 'v-card v-card-plain';

      var body = document.createElement('div');
      body.className = 'v-card-body';

      var h3 = document.createElement('h3');
      h3.className = 'v-card-title';
      var a = document.createElement('a');
      a.href = base + item.url;
      a.textContent = item.title;
      h3.appendChild(a);
      body.appendChild(h3);

      var p = document.createElement('p');
      p.className = 'v-card-summary';
      p.textContent = snippet(item.content);
      body.appendChild(p);

      var foot = document.createElement('p');
      foot.className = 'v-card-foot';
      var read = document.createElement('a');
      read.className = 'v-card-read';
      read.href = base + item.url;
      read.textContent = 'Read the report →';
      foot.appendChild(read);
      body.appendChild(foot);

      card.appendChild(body);
      list.appendChild(card);
    });
  }

  var pending = null;
  input.addEventListener('input', function () {
    var q = input.value;
    if (pending) clearTimeout(pending);
    pending = setTimeout(function () {
      if (!fuse) return;
      render(fuse.search(q), q);
    }, 120);
  });
})();
