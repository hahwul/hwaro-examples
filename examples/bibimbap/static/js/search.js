(function () {
  var input = document.getElementById('search-input');
  var main = document.getElementById('main');
  var form = document.querySelector('form[data-index]');
  if (!input || !main || !form) return;

  // Create search results section dynamically if not present
  var resultsSection = document.getElementById('search-results-section');
  if (!resultsSection) {
    resultsSection = document.createElement('section');
    resultsSection.id = 'search-results-section';
    resultsSection.className = 'container search-results-section';
    resultsSection.style.display = 'none';

    var title = document.createElement('h2');
    title.className = 'band-title';
    title.textContent = 'Search Results';
    resultsSection.appendChild(title);

    var status = document.createElement('p');
    status.id = 'search-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.style.color = 'var(--muted)';
    status.style.marginBottom = 'var(--space-3)';
    resultsSection.appendChild(status);

    var list = document.createElement('ul');
    list.id = 'search-results-list';
    list.className = 'section-list';
    resultsSection.appendChild(list);

    main.insertBefore(resultsSection, main.firstChild);
  }

  var listEl = document.getElementById('search-results-list');
  var statusEl = document.getElementById('search-status');

  var fuse = null;
  var searchIndexUrl = form.getAttribute('data-index');

  fetch(searchIndexUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3
      });
    });

  input.addEventListener('input', function () {
    var query = input.value.trim();
    if (!query) {
      // Restore all
      resultsSection.style.display = 'none';
      Array.from(main.children).forEach(function (child) {
        if (child !== resultsSection) {
          child.style.display = '';
        }
      });
      return;
    }

    if (!fuse) return;

    var hits = fuse.search(query).slice(0, 10);
    listEl.textContent = '';
    statusEl.textContent = hits.length + ' result(s) for "' + query + '"';

    if (hits.length === 0) {
      var noResults = document.createElement('li');
      noResults.style.color = 'var(--muted)';
      noResults.style.paddingBlock = 'var(--space-3)';
      noResults.textContent = 'No matching recipes or ingredients found.';
      listEl.appendChild(noResults);
    } else {
      hits.forEach(function (h) {
        var li = document.createElement('li');
        li.className = 'section-item';
        
        var a = document.createElement('a');
        a.href = h.item.url;
        a.textContent = h.item.title;
        a.style.fontSize = 'var(--text-lg)';
        a.style.fontWeight = '600';
        a.style.display = 'block';
        li.appendChild(a);
        
        if (h.item.content) {
          var snippet = document.createElement('p');
          snippet.style.color = 'var(--muted)';
          snippet.style.fontSize = 'var(--text-sm)';
          snippet.style.marginTop = 'var(--space-1)';
          // Clean html tags and truncate
          var cleanContent = h.item.content.replace(/<[^>]*>/g, '');
          snippet.textContent = cleanContent.length > 160 ? cleanContent.slice(0, 160) + '...' : cleanContent;
          li.appendChild(snippet);
        }

        listEl.appendChild(li);
      });
    }

    // Hide other children, show results
    resultsSection.style.display = 'block';
    Array.from(main.children).forEach(function (child) {
      if (child !== resultsSection) {
        child.style.display = 'none';
      }
    });
  });
})();
