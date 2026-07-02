/* Linden — theme toggle.
   Defaults to the system preference; a click pins light or dark to
   localStorage. The pre-paint snippet in header.html reads the same key
   so there is no flash on load. */
(function () {
  var KEY = 'linden-theme';
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function effective() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* private mode */ }
  });
})();
