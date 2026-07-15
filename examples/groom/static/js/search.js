(function () {
  var form = document.querySelector('form[data-index]');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!form || !input) return;
  var fuse = null;
  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) { fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3 }); });
  input.addEventListener('input', function () {
    if (!fuse) return;
    list.textContent = '';
    var hits = fuse.search(input.value).slice(0, 10);
    status.textContent = input.value ? hits.length + ' result(s)' : '';
    hits.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = h.item.url;           // build DOM nodes — never innerHTML with index data
      a.textContent = h.item.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  });
})();
