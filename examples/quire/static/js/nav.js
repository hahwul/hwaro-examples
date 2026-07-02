/* Quire — mobile chapter drawer.
   Below the sidebar-docs breakpoint the chapter list is hidden off-canvas.
   The Contents button opens it; Esc, a tap on the scrim, or choosing a
   chapter link closes it again. */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) { return; }

  function isOpen() {
    return document.body.classList.contains('drawer-open');
  }

  function setOpen(next) {
    document.body.classList.toggle('drawer-open', next);
    toggle.setAttribute('aria-expanded', String(next));
    if (next) { sidebar.querySelector('a').focus(); }
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  document.addEventListener('click', function (event) {
    if (!isOpen()) { return; }
    if (sidebar.contains(event.target) || toggle.contains(event.target)) { return; }
    setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  sidebar.addEventListener('click', function (event) {
    if (event.target.closest('a')) { setOpen(false); }
  });
})();
