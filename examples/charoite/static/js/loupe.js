(function () {
  "use strict";
  // Pointer loupe over the hero slab: a circular clipped <use> of the
  // artwork, scaled around the pointer. Fine-pointer devices only.
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var figure = document.getElementById("hero-slab");
  var svg = document.getElementById("slab");
  var use = document.getElementById("loupe-use");
  var win = document.getElementById("loupe-window");
  var ring = document.getElementById("loupe-ring");
  var rim = document.getElementById("loupe-rim");
  if (!figure || !svg || !use || !win || !ring || !rim) return;

  var SCALE = 2.1;
  var pending = null;
  var frame = 0;

  function apply() {
    frame = 0;
    if (!pending) return;
    var ctm = svg.getScreenCTM();
    if (!ctm) return;
    var p = new DOMPoint(pending.x, pending.y).matrixTransform(ctm.inverse());
    var tx = p.x * (1 - SCALE);
    var ty = p.y * (1 - SCALE);
    use.setAttribute("transform", "translate(" + tx + " " + ty + ") scale(" + SCALE + ")");
    win.setAttribute("cx", p.x);
    win.setAttribute("cy", p.y);
    ring.setAttribute("cx", p.x);
    ring.setAttribute("cy", p.y);
    rim.setAttribute("cx", p.x);
    rim.setAttribute("cy", p.y);
  }

  svg.addEventListener("pointermove", function (event) {
    pending = { x: event.clientX, y: event.clientY };
    if (!frame) frame = window.requestAnimationFrame(apply);
  });

  svg.addEventListener("pointerenter", function () {
    figure.classList.add("slab-hover");
  });

  svg.addEventListener("pointerleave", function () {
    figure.classList.remove("slab-hover");
    pending = null;
  });
})();
