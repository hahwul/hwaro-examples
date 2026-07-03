/* maru — mobile contents drawer.
   On narrow viewports the dependency-tree sidebar is off-canvas. The Contents
   button toggles it; Esc, a tap outside, or following a link closes it. */
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
