// Flywheel signature: the hero revenue counter ticks upward while every
// other tile on the page stays perfectly still. Respects reduced motion by
// leaving the static server-rendered figure in place.
(function () {
  var el = document.querySelector('[data-ticker]');
  if (!el) return;

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var value = parseInt(el.getAttribute('data-start'), 10) || 0;
  var min = parseInt(el.getAttribute('data-min'), 10) || 20;
  var max = parseInt(el.getAttribute('data-max'), 10) || 180;
  var interval = parseInt(el.getAttribute('data-interval'), 10) || 2600;

  function format(n) {
    return '$' + n.toLocaleString('en-US');
  }

  window.setInterval(function () {
    value += Math.floor(Math.random() * (max - min + 1)) + min;
    el.textContent = format(value);
  }, interval);
})();
