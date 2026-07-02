/* Mica — mobile sidebar toggle.
   On narrow viewports the sidebar collapses; the Docs button opens it and
   toggles aria-expanded. Esc and outside taps close it. */
(function () {
  'use strict';
  var toggle = document.getElementById('nav-toggle');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  function open() {
    sidebar.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function close() {
    sidebar.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    if (sidebar.classList.contains('is-open')) { close(); } else { open(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('is-open')) close();
  });

  document.addEventListener('click', function (e) {
    if (!sidebar.classList.contains('is-open')) return;
    if (sidebar.contains(e.target) || toggle.contains(e.target)) return;
    close();
  });
})();
