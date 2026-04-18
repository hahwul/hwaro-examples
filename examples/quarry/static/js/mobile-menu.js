document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }

  var searchInput = document.getElementById('searchInput');
  if (searchInput) {
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        searchInput.blur();
      }
    });
  }
});
