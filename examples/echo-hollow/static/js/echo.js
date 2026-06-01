/**
 * ECHO HOLLOW — Accumulating Echo Effects
 * The longer you stay, the more the chamber remembers you.
 */
(function () {
  var dwellStart = Date.now();
  var echoCount = 0;
  var maxEchoes = 18;
  var accumulationEl = document.getElementById('echo-accumulation');
  var chamberEls = document.querySelectorAll('.echo-chamber, .post-content, .blog-main');

  function updateAccumulation() {
    if (!accumulationEl) return;
    var minutes = Math.floor((Date.now() - dwellStart) / 60000);
    var display = echoCount > 0 ? 'ECHOES ACCUMULATED: ' + echoCount : '';
    if (minutes > 2) display += (display ? ' · ' : '') + 'THE HOLLOW KNOWS YOU NOW';
    accumulationEl.textContent = display;
    accumulationEl.style.opacity = Math.min(0.35 + (echoCount * 0.015), 0.7);
  }

  function createEchoLayer(target, text, offset, opacity, delay) {
    if (!target || echoCount >= maxEchoes) return;

    var layer = document.createElement('span');
    layer.className = 'echo-layer echo-accumulated';
    layer.textContent = text;
    layer.style.position = 'absolute';
    layer.style.left = offset + 'px';
    layer.style.top = (Math.random() * 1.6 - 0.5) + 'px';
    layer.style.opacity = opacity;
    layer.style.pointerEvents = 'none';
    layer.style.transition = 'opacity 2.8s ease, transform 3.6s ease';
    layer.style.zIndex = '-1';
    layer.style.whiteSpace = 'nowrap';

    // Make target positioned if needed
    var pos = getComputedStyle(target).position;
    if (pos === 'static') target.style.position = 'relative';

    target.appendChild(layer);
    echoCount++;

    // The echo eventually fades further into the walls
    setTimeout(function () {
      if (layer && layer.parentNode) {
        layer.style.opacity = '0';
        layer.style.transform = 'translate(' + (offset * 1.8) + 'px, 3px)';
        setTimeout(function () {
          if (layer && layer.parentNode) layer.parentNode.removeChild(layer);
        }, 900);
      }
    }, delay || 5200);

    updateAccumulation();
  }

  function seedInitialEchoes() {
    chamberEls.forEach(function (el, idx) {
      if (idx > 2 || echoCount > 5) return; // subtle start
      var headings = el.querySelectorAll('h1, h2');
      headings.forEach(function (h, i) {
        if (i > 0) return;
        var txt = h.textContent.trim().slice(0, 48);
        if (txt.length < 6) return;
        setTimeout(function () {
          createEchoLayer(h, txt, 2.5 + i, 0.09 + (i * 0.03), 1400 + idx * 600);
        }, 900 + i * 220);
      });
    });
  }

  function onScrollEchoes() {
    var scrolled = window.scrollY;
    if (scrolled % 140 < 12 && echoCount < maxEchoes - 3) {
      chamberEls.forEach(function (el) {
        if (Math.random() > 0.74) {
          var p = el.querySelector('p');
          if (p) {
            var words = p.textContent.trim().split(/\s+/).slice(0, 5).join(' ');
            createEchoLayer(p, words, 4 + Math.random() * 3, 0.06, 3100);
          }
        }
      });
    }
  }

  function onInteractionEcho(e) {
    if (echoCount >= maxEchoes) return;
    var target = e.target.closest('.post-content, .echo-chamber, h1, h2, blockquote');
    if (!target) return;

    var txt = (target.textContent || '').trim().slice(0, 42);
    if (txt.length < 5) return;

    // Burst of 1-3 layered echoes on click / heavy interaction
    var bursts = 1 + Math.floor(Math.random() * 2.6);
    for (var i = 0; i < bursts; i++) {
      setTimeout(function (j) {
        createEchoLayer(target, txt, 3 + j * 4.5, 0.14 - j * 0.04, 800 + j * 180);
      }, i * 70, i);
    }

    // Mild reverb visual on the element
    target.classList.add('reverb');
    setTimeout(function () {
      target.classList.remove('reverb');
    }, 650);
  }

  function progressiveDwellEchoes() {
    var elapsed = Date.now() - dwellStart;
    var interval = Math.max(14000, 26000 - Math.floor(elapsed / 1800));

    if (echoCount < maxEchoes) {
      chamberEls.forEach(function (el, idx) {
        if (idx % 2 === 0 && Math.random() > 0.6) {
          var candidates = el.querySelectorAll('p, li, blockquote');
          if (candidates.length) {
            var pick = candidates[Math.floor(Math.random() * candidates.length)];
            var slice = pick.textContent.trim().split(/\s+/).slice(0, 4).join(' ');
            if (slice.length > 4) {
              createEchoLayer(pick, slice, 1.5 + Math.random() * 5, 0.075, 4200);
            }
          }
        }
      });
    }

    updateAccumulation();

    // Keep the dread alive
    if (elapsed < 1000 * 60 * 9) {
      setTimeout(progressiveDwellEchoes, interval);
    }
  }

  function attachListeners() {
    // Scroll triggers faint echoes
    var scrollTimer;
    window.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(onScrollEchoes, 140);
    }, { passive: true });

    // Click / tap anywhere in content creates immediate personal echoes
    document.addEventListener('click', onInteractionEcho, { passive: true });

    // Subtle keypress echoes (when typing in search or just present)
    document.addEventListener('keydown', function (e) {
      if (e.key.length === 1 && echoCount < maxEchoes && Math.random() > 0.8) {
        var main = document.querySelector('.blog-main');
        if (main) createEchoLayer(main, e.key.toUpperCase(), 8, 0.05, 1600);
      }
    });

    // On visibility change, accelerate a little (the chamber noticed you returned)
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && echoCount > 0) {
        echoCount = Math.max(0, echoCount - 1); // one echo escapes when you look away
        updateAccumulation();
      }
    });
  }

  function initSoundwaveSupport() {
    // If any {{ soundwave }} shortcode remnants or manual spans exist, animate them
    document.querySelectorAll('.sound-wave').forEach(function (wave) {
      wave.setAttribute('aria-hidden', 'true');
    });
  }

  // Boot the haunting
  function boot() {
    // Give the page a moment to settle so we don't fight initial render
    setTimeout(function () {
      seedInitialEchoes();
      attachListeners();
      initSoundwaveSupport();
      updateAccumulation();

      // Begin the slow, inevitable accumulation
      setTimeout(progressiveDwellEchoes, 13500);

      // Occasional very late "someone else is here" layer on the footer counter
      setTimeout(function () {
        if (accumulationEl && echoCount < 4) {
          accumulationEl.textContent = 'ANOTHER PRESENCE DETECTED';
          setTimeout(updateAccumulation, 2600);
        }
      }, 42000);
    }, 850);

    // Expose a tiny debug hook (not for production use, only for the curious who inspect)
    window.__echoHollow = {
      forceEcho: function () {
        var el = document.querySelector('.post-content') || document.querySelector('.blog-main');
        if (el) createEchoLayer(el, 'you should not have come back', 6, 0.22, 400);
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();