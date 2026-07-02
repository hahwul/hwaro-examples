/* Jasper — mobile docs drawer.
   On narrow viewports the sidebar (the concepts nav tree) is off-canvas. The
   Docs button toggles it; Esc and a tap on the backdrop close it. */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  function open() {
    document.body.classList.add('drawer-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    document.body.classList.remove('drawer-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    if (document.body.classList.contains('drawer-open')) { close(); } else { open(); }
  });

  document.addEventListener('click', function (e) {
    if (!document.body.classList.contains('drawer-open')) return;
    if (sidebar.contains(e.target) || toggle.contains(e.target)) return;
    close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  sidebar.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });
})();
