(function () {
  var input = document.getElementById('search-input');
  var defaultContent = document.getElementById('default-content');
  var searchResultsContainer = document.getElementById('search-results-container');
  var searchResultsList = document.getElementById('search-results');
  var searchCountBadge = document.getElementById('search-count-badge');
  
  if (!input || !defaultContent || !searchResultsContainer || !searchResultsList) return;
  
  var fuse = null;
  var searchIndexUrl = input.getAttribute('data-index');
  
  fetch(searchIndexUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3
      });
    });
    
  input.addEventListener('input', function () {
    if (!fuse) return;
    var query = input.value.trim();
    if (!query) {
      searchResultsContainer.style.display = 'none';
      defaultContent.style.display = 'block';
      searchResultsList.textContent = '';
      if (searchCountBadge) searchCountBadge.textContent = '';
      return;
    }
    
    defaultContent.style.display = 'none';
    searchResultsContainer.style.display = 'block';
    searchResultsList.textContent = '';
    
    var hits = fuse.search(query).slice(0, 10);
    if (searchCountBadge) {
      searchCountBadge.textContent = '(' + hits.length + ')';
    }
    
    if (hits.length === 0) {
      var noResults = document.createElement('li');
      noResults.className = 'no-results';
      noResults.textContent = 'No matching essays found.';
      searchResultsList.appendChild(noResults);
      return;
    }
    
    hits.forEach(function (h) {
      var li = document.createElement('li');
      li.className = 'search-result-item';
      
      var a = document.createElement('a');
      var baseUrl = searchIndexUrl.replace(/\/search\.json$/, ""); a.href = baseUrl + h.item.url;
      a.textContent = h.item.title;
      a.className = 'search-result-title';
      li.appendChild(a);
      
      if (h.item.content) {
        var p = document.createElement('p');
        p.className = 'search-result-snippet';
        var cleanText = h.item.content.replace(/<[^>]*>/g, '');
        if (cleanText.length > 150) {
          cleanText = cleanText.substring(0, 150) + '...';
        }
        p.textContent = cleanText;
        li.appendChild(p);
      }
      
      searchResultsList.appendChild(li);
    });
  });
})();
