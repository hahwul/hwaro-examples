/* Halite — sidebar drawer toggle for narrow viewports.
   The sidebar is always present in the DOM; on small screens it collapses
   behind the "Menu" button. This wires the button, Esc to close, and closes
   the drawer after a navigation choice. No dependencies. */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  function isOpen() {
    return document.body.classList.contains('nav-open');
  }

  function open() {
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) { close(); } else { open(); }
  });

  sidebar.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a');
    if (link) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      close();
      toggle.focus();
    }
  });
})();
