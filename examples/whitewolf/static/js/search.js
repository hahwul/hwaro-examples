(function () {
  var input = document.getElementById('inline-search');
  var list = document.getElementById('wolf-list');
  if (!input || !list) return;
  
  var items = list.querySelectorAll('.wolf-item');
  var fuse = null;
  
  // Fetch search.json built by Hwaro using the base_url derived prefix or absolute path.
  // The script is loaded via base_url, let's fetch base_url/search.json relative to location.
  // Wait, let's find the base path. Since index.html has search.json at base_url/search.json,
  // we can get the base path from the brand link href or canonical link.
  var brand = document.querySelector('.brand');
  var base = brand ? brand.getAttribute('href') : '';
  if (base.endsWith('/')) {
    base = base.slice(0, -1);
  }
  
  fetch(base + '/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3
      });
    })
    .catch(function (err) {
      console.warn('Telemetry search index could not be loaded:', err);
    });

  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase();
    
    if (!query) {
      // Restore all items
      items.forEach(function (el) {
        el.style.display = '';
      });
      return;
    }
    
    if (!fuse) {
      // Fallback simple title matching if Fuse.js isn't ready
      items.forEach(function (el) {
        var name = el.querySelector('.wolf-name');
        if (name && name.textContent.toLowerCase().indexOf(query) !== -1) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
      return;
    }
    
    var results = fuse.search(query);
    var matchingUrls = results.map(function (res) {
      return res.item.url;
    });
    
    items.forEach(function (el) {
      var url = el.getAttribute('data-url');
      if (url) {
        // Strip trailing slash/base prefix for robust match if needed,
        // but simple substring or matching suffix works.
        var matched = false;
        for (var i = 0; i < matchingUrls.length; i++) {
          if (url.indexOf(matchingUrls[i]) !== -1 || matchingUrls[i].indexOf(url) !== -1) {
            matched = true;
            break;
          }
        }
        if (matched) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      } else {
        el.style.display = 'none';
      }
    });
  });
})();
