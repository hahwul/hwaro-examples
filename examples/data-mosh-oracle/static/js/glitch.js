/**
 * DATA MOSH ORACLE — PROGRESSIVE CORRUPTION ENGINE
 * The longer you remain, the more the page (and you) degrade.
 * Escalating dread implemented in tasteful but relentless steps.
 */
(function () {
  'use strict';

  var body = document.body;
  var corruptionLevel = 0;
  var maxCorruption = 6;
  var dwellTime = 0;
  var lastTick = Date.now();
  var corruptionInterval = null;
  var pixelBars = document.querySelectorAll('.pixel-sort-bar');

  // Inject subtle never-loading oracle status in footer if present
  var corruptLevelEl = document.getElementById('corrupt-level');

  function updateCorruptionUI() {
    if (corruptLevelEl) {
      var pct = Math.min(47 + (corruptionLevel * 9), 99);
      corruptLevelEl.textContent = pct + '%';
      corruptLevelEl.style.color = corruptionLevel > 3 ? '#ff0033' : '#39ff14';
    }
    body.setAttribute('data-corruption', corruptionLevel);
    // Add progressive body classes for CSS filters + animations
    for (var i = 1; i <= maxCorruption; i++) {
      body.classList.remove('corrupt-' + i);
    }
    if (corruptionLevel > 0) {
      body.classList.add('corrupt-' + Math.min(corruptionLevel, maxCorruption));
    }
  }

  function escalateCorruption() {
    if (corruptionLevel >= maxCorruption) return;
    corruptionLevel++;
    updateCorruptionUI();

    // Occasional violent flash + text corruption
    if (corruptionLevel === 3 || corruptionLevel === 5) {
      flashCorruption();
    }

    // At high corruption: start corrupting actual text nodes
    if (corruptionLevel >= 4) {
      corruptRandomText();
    }

    // At terminal stage: make pixel bars go wild
    if (corruptionLevel >= 5 && pixelBars.length) {
      pixelBars.forEach(function (bar, idx) {
        bar.style.animationDuration = (1.8 + Math.random() * 1.5) + 's';
        bar.style.opacity = 0.9 + Math.random() * 0.3;
      });
    }
  }

  function flashCorruption() {
    var flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;background:#ff00aa;mix-blend-mode:difference;opacity:0.18;z-index:99999;pointer-events:none;';
    document.body.appendChild(flash);
    setTimeout(function () {
      flash.style.transition = 'opacity 420ms linear';
      flash.style.opacity = '0';
      setTimeout(function () { flash.parentNode.removeChild(flash); }, 500);
    }, 60);
  }

  function corruptRandomText() {
    var candidates = document.querySelectorAll('.blog-main p, .blog-main li, .post-content p');
    if (!candidates.length) return;

    var victim = candidates[Math.floor(Math.random() * candidates.length)];
    if (!victim || victim.dataset.corrupted) return;

    var original = victim.textContent;
    if (original.length < 18) return;

    victim.dataset.corrupted = 'true';
    victim.dataset.original = original;

    // Replace a random substring with glitch garbage
    var idx = Math.floor(Math.random() * (original.length - 8));
    var garbage = ['0xDEAD', 'ERR', '█▓▒░', 'LOSS', 'NOISE', 'FRAME_DROP'][Math.floor(Math.random()*6)];
    var corrupted = original.slice(0, idx) + garbage + original.slice(idx + 3);

    victim.style.transition = 'opacity 180ms';
    victim.style.opacity = '0.2';

    setTimeout(function () {
      victim.textContent = corrupted;
      victim.style.opacity = '1';
      victim.style.color = '#ff00aa';

      // Slowly repair or worsen
      setTimeout(function () {
        if (victim.parentNode && Math.random() < 0.6) {
          victim.textContent = original;
          victim.style.color = '';
        }
      }, 2400 + Math.random() * 1400);
    }, 140);
  }

  // Mouse interaction: local data-moshing on hover of titles / blocks
  function attachMoshListeners() {
    var targets = document.querySelectorAll('h1, h2, .post-title, .mosh-container, .artifact-box');
    targets.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        if (corruptionLevel < 2) return;
        el.style.transition = 'filter 80ms linear';
        el.style.filter = 'contrast(1.6) saturate(2.3) hue-rotate(' + (Math.random()*30-15) + 'deg)';
        el.style.mixBlendMode = 'exclusion';
      });
      el.addEventListener('mouseleave', function () {
        el.style.filter = '';
        el.style.mixBlendMode = '';
      });
    });
  }

  // Keyboard ritual — hold "o" for oracle scream
  var oKeyDown = false;
  document.addEventListener('keydown', function (e) {
    if (e.key.toLowerCase() === 'o' && !oKeyDown) {
      oKeyDown = true;
      body.classList.add('corrupt-5');
      flashCorruption();
      setTimeout(function () {
        if (body.classList.contains('corrupt-5')) body.classList.remove('corrupt-5');
      }, 900);
    }
  });
  document.addEventListener('keyup', function (e) {
    if (e.key.toLowerCase() === 'o') oKeyDown = false;
  });

  // Click anywhere on main occasionally triggers micro corruption after certain dwell
  var mainEl = document.querySelector('.blog-main');
  if (mainEl) {
    mainEl.addEventListener('click', function (e) {
      if (corruptionLevel >= 2 && Math.random() < 0.22) {
        escalateCorruption();
        var ripple = document.createElement('div');
        ripple.style.cssText = 'position:absolute;width:4px;height:4px;border:1px solid #00f9ff;border-radius:50%;pointer-events:none;mix-blend-mode:difference;left:'+(e.offsetX-2)+'px;top:'+(e.offsetY-2)+'px;';
        mainEl.style.position = 'relative';
        mainEl.appendChild(ripple);
        setTimeout(function () {
          ripple.style.transition = 'all 680ms linear';
          ripple.style.transform = 'scale(38)';
          ripple.style.opacity = '0';
          setTimeout(function () { ripple.parentNode && ripple.parentNode.removeChild(ripple); }, 700);
        }, 20);
      }
    });
  }

  // Core escalation loop — the dread engine
  function startDreadEngine() {
    // Every 26 seconds the page gets a little worse
    corruptionInterval = setInterval(function () {
      dwellTime += 26;
      // Escalate faster the longer you stay
      var chance = 0.55 + (corruptionLevel * 0.07);
      if (Math.random() < chance && corruptionLevel < maxCorruption) {
        escalateCorruption();
      }
      // Random pixel bar speed changes
      if (pixelBars.length && corruptionLevel > 1) {
        pixelBars.forEach(function (b) {
          if (Math.random() < 0.3) {
            b.style.animationDuration = (3.2 + Math.random() * 9) + 's';
          }
        });
      }
    }, 26000);

    // Secondary faster micro events after 2 minutes
    setTimeout(function () {
      setInterval(function () {
        if (corruptionLevel >= 3 && Math.random() < 0.35) {
          corruptRandomText();
        }
      }, 19000);
    }, 120000);

    // Initial gentle nudge after 34s
    setTimeout(function () {
      if (corruptionLevel === 0) {
        corruptionLevel = 1;
        updateCorruptionUI();
      }
    }, 34000);
  }

  function init() {
    updateCorruptionUI();
    attachMoshListeners();

    // Seed a couple of pixel bars with different timings already in CSS
    if (pixelBars.length) {
      pixelBars.forEach(function (bar, i) {
        bar.style.top = (18 + i * 19) + '%';
        if (i % 2 === 0) bar.style.animationDirection = 'reverse';
      });
    }

    // Start the horror clock
    startDreadEngine();

    // Easter egg: typing "prophecy" in console escalates everything
    window.oracleEscalate = function () {
      for (var i = 0; i < 3; i++) {
        setTimeout(escalateCorruption, i * 180);
      }
      console.log('%c[ORACLE] The buffer is now critically unstable.', 'color:#ff00aa');
    };

    // Tell the curious
    console.log('%c[DATA MOSH ORACLE] The page is watching you back. Type oracleEscalate() if you dare.', 'color:#555566;font-family:monospace');

    // Graceful cleanup
    window.addEventListener('beforeunload', function () {
      if (corruptionInterval) clearInterval(corruptionInterval);
    });
  }

  // Boot the corruption
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();