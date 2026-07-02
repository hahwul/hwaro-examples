/* Orbit — mobile nav toggle. Small enough to keep separate from search.js. */
(function () {
  'use strict';
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
