/* Pointer parallax for the hero construction. The three ink layers (guides,
   lines, points) read --plx-x / --plx-y off .hero and translate at different
   rates. Runs only with a fine hover pointer and reduced motion off, and only
   while the hero is on screen. Eased in a self-stopping rAF loop; no scroll
   listeners. */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  var hero = document.querySelector(".hero");
  if (!hero || !hero.querySelector(".construction")) return;

  var targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  var raf = null, active = true;

  function tick() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
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
