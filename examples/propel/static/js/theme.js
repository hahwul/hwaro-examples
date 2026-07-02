/* Propel — day/night reading-mode toggle.
   Defaults to the system preference; a click pins light or dark to
   localStorage. The pre-paint snippet in header.html reads the same key
   so the page never flashes the wrong theme. */
(function () {
  var KEY = 'propel-theme';
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function effective() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function label() {
    var mode = effective() === 'dark' ? 'day' : 'night';
    btn.setAttribute('aria-label', 'Switch to ' + mode + ' reading mode');
  }

  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* private mode */ }
    label();
  });

  label();
})();
