(function () {
  var form = document.querySelector('form[data-index]');
  var input = document.getElementById('search-input');
  if (!form || !input) return;
  
  var fuse = null;
  var items = document.querySelectorAll('.timeline-item');
  
  // Fetch search.json and initialize Fuse.js
  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content', 'tags'],
        threshold: 0.3
      });
    });
    
  input.addEventListener('input', function () {
    var query = input.value.trim();
    
    if (!query) {
      // Clear: restore all items
      items.forEach(function (el) {
        el.style.display = '';
      });
      return;
    }
    
    if (!fuse) return;
    
    var hits = fuse.search(query);
    var matches = new Set();
    hits.forEach(function (h) {
      if (h.item && h.item.url) {
        matches.add(h.item.url);
      }
    });
    
    items.forEach(function (el) {
      var itemUrl = el.getAttribute('data-url');
      if (itemUrl && matches.has(itemUrl)) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  });
})();
