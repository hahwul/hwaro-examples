/* Pointer parallax for the hero skyline. Layers move at different rates via
   the --plx-x / --plx-y custom properties (consumed in style.css). Runs only
   on hover-capable pointers with reduced motion off, and only while the hero
   is on screen. Eased in a self-stopping rAF loop; no scroll listeners. */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  var hero = document.querySelector(".hero");
  if (!hero || !hero.querySelector(".skyline")) return;

  var targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  var raf = null;
  var active = true;

  function tick() {
    currentX += (targetX - currentX) * 0.07;
    currentY += (targetY - currentY) * 0.07;
    hero.style.setProperty("--plx-x", currentX.toFixed(4));
    hero.style.setProperty("--plx-y", currentY.toFixed(4));
    if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = null;
    }
  }

  window.addEventListener("pointermove", function (event) {
    if (!active) return;
    targetX = (event.clientX / window.innerWidth) * 2 - 1;
    targetY = (event.clientY / window.innerHeight) * 2 - 1;
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      active = entries[0].isIntersecting;
      if (!active && raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    }).observe(hero);
  }
})();
