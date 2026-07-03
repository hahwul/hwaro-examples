(function () {
  var toggle = document.getElementById('nav-toggle');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  function closeDrawer() {
    document.body.classList.remove('drawer-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer() {
    document.body.classList.add('drawer-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (document.body.classList.contains('drawer-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  document.addEventListener('click', function (event) {
    if (!document.body.classList.contains('drawer-open')) return;
    if (sidebar.contains(event.target) || toggle.contains(event.target)) return;
    closeDrawer();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.body.classList.contains('drawer-open')) {
      closeDrawer();
      toggle.focus();
    }
  });

  sidebar.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (link) closeDrawer();
  });
})();
