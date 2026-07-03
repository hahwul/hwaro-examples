/* gesso — deterministic card sketches.
   Every [data-seed] SVG on the page is filled in once, at load time, by a
   pure function of its seed string: hash the seed to a 32-bit integer, feed
   that integer to a mulberry32 PRNG, pick one of five plotter studies with
   it, then draw. Same seed in, same lines out, on this browser or any other,
   today or in ten years — the same rule every published piece follows. */
(function () {
  'use strict';

  function hashSeed(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var NS = 'http://www.w3.org/2000/svg';
  var W = 240, H = 160;

  function el(name, attrs) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, k)) n.setAttribute(k, attrs[k]);
    }
    return n;
  }

  function contourRings(svg, rand) {
    var cx = W * (0.35 + rand() * 0.3), cy = H * (0.4 + rand() * 0.2);
    var rings = 6 + Math.floor(rand() * 5);
    for (var r = 0; r < rings; r++) {
      var base = 8 + r * (9 + rand() * 3);
      if (base > 105) break;
      var pts = [];
      var steps = 28;
      for (var i = 0; i <= steps; i++) {
        var a = (i / steps) * Math.PI * 2;
        var rr = base + (rand() - 0.5) * 6;
        pts.push((cx + Math.cos(a) * rr).toFixed(1) + ',' + (cy + Math.sin(a) * rr * 0.72).toFixed(1));
      }
      svg.appendChild(el('polyline', { points: pts.join(' ') }));
    }
  }

  function hatchField(svg, rand) {
    var count = 14 + Math.floor(rand() * 10);
    var shear = rand() * 80 - 40;
    var span = W + Math.abs(shear) + 40;
    for (var i = 0; i < count; i++) {
      var x0 = -20 + (i / (count - 1)) * span + (rand() - 0.5) * 6;
      svg.appendChild(el('line', {
        x1: x0.toFixed(1), y1: '-10', x2: (x0 + shear).toFixed(1), y2: (H + 10).toFixed(1)
      }));
    }
  }

  function radialBurst(svg, rand) {
    var cx = W * (0.3 + rand() * 0.4), cy = H * (0.3 + rand() * 0.4);
    var rays = 20 + Math.floor(rand() * 16);
    for (var i = 0; i < rays; i++) {
      var a = rand() * Math.PI * 2;
      var len = 40 + rand() * 90;
      svg.appendChild(el('line', {
        x1: cx.toFixed(1), y1: cy.toFixed(1),
        x2: (cx + Math.cos(a) * len).toFixed(1), y2: (cy + Math.sin(a) * len).toFixed(1)
      }));
    }
  }

  function tickScatter(svg, rand) {
    var cols = 10, rows = 7;
    for (var gy = 0; gy < rows; gy++) {
      for (var gx = 0; gx < cols; gx++) {
        if (rand() > 0.6) continue;
        var cx = (gx + 0.5) * (W / cols) + (rand() - 0.5) * 8;
        var cy = (gy + 0.5) * (H / rows) + (rand() - 0.5) * 8;
        var a = rand() * Math.PI;
        var len = 5 + rand() * 7;
        svg.appendChild(el('line', {
          x1: (cx - Math.cos(a) * len).toFixed(1), y1: (cy - Math.sin(a) * len).toFixed(1),
          x2: (cx + Math.cos(a) * len).toFixed(1), y2: (cy + Math.sin(a) * len).toFixed(1)
        }));
      }
    }
  }

  function spiralChoke(svg, rand) {
    var cx = W / 2 + (rand() - 0.5) * 20;
    var cy = H / 2 + (rand() - 0.5) * 16;
    var turns = 5 + rand() * 3;
    var steps = 160;
    var maxR = 78;
    var chokeAt = 0.55 + rand() * 0.2;
    var pts = [];
    for (var i = 0; i <= steps; i++) {
      var t = i / steps;
      var a = t * turns * Math.PI * 2;
      var growth = t < chokeAt ? t / chokeAt : 1 - ((t - chokeAt) / (1 - chokeAt)) * 0.7;
      var r = maxR * growth;
      pts.push((cx + Math.cos(a) * r).toFixed(1) + ',' + (cy + Math.sin(a) * r * 0.75).toFixed(1));
    }
    svg.appendChild(el('polyline', { points: pts.join(' ') }));
  }

  var PATTERNS = [contourRings, hatchField, radialBurst, tickScatter, spiralChoke];

  function draw(svg) {
    var seed = svg.getAttribute('data-seed') || 'gesso';
    var seedNum = hashSeed(seed);
    var rand = mulberry32(seedNum);
    // A different slice of the same hash picks which study to draw, so
    // pattern choice and line placement never compete for the same bits.
    var pattern = PATTERNS[(seedNum >>> 17) % PATTERNS.length];
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    pattern(svg, rand);
  }

  function init() {
    var svgs = document.querySelectorAll('[data-seed]');
    for (var i = 0; i < svgs.length; i++) draw(svgs[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
