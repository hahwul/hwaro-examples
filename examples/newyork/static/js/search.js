(function () {
  var input = document.getElementById('search-input');
  var list = document.getElementById('issues-list');
  if (!input || !list) return;

  var originalHtml = list.innerHTML;
  var fuse = null;
  var indexUrl = input.getAttribute('data-index');

  fetch(indexUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3
      });
    });

  input.addEventListener('input', function () {
    if (!fuse) return;
    var val = input.value.trim();
    if (!val) {
      list.innerHTML = originalHtml;
      return;
    }

    var hits = fuse.search(val).slice(0, 10);
    list.innerHTML = '';

    if (hits.length === 0) {
      var li = document.createElement('li');
      li.className = 'no-results';
      li.textContent = 'No matching issues';
      list.appendChild(li);
      return;
    }

    hits.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = h.item.url;
      a.textContent = h.item.title;
      li.appendChild(a);

      if (h.item.date) {
        var time = document.createElement('time');
        time.className = 'issue-date';
        time.textContent = h.item.date;
        li.appendChild(time);
      }

      list.appendChild(li);
    });
  });
})();
