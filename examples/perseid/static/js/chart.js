// Draws the faint constellation lines that connect each session's star dot
// in order. Positions are measured from the rendered layout, so the chart
// stays correct regardless of how tall any given session card is.
(function () {
  var wrap = document.querySelector(".chart-wrap");
  if (!wrap) return;

  var svg = wrap.querySelector(".constellation-svg");
  var dots = wrap.querySelectorAll(".star-dot");
  if (!svg || dots.length < 2) return;

  function draw() {
    var wrapRect = wrap.getBoundingClientRect();
    var w = Math.round(wrap.clientWidth);
    var h = Math.round(wrap.clientHeight);
    if (!w || !h) return;
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);

    var points = [];
    for (var i = 0; i < dots.length; i++) {
      var r = dots[i].getBoundingClientRect();
      var x = r.left - wrapRect.left + r.width / 2;
      var y = r.top - wrapRect.top + r.height / 2;
      points.push(x.toFixed(1) + "," + y.toFixed(1));
    }

    svg.innerHTML =
      '<polyline points="' + points.join(" ") +
      '" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />';
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  draw();
  window.addEventListener("resize", debounce(draw, 150));
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(draw);
  }
})();
