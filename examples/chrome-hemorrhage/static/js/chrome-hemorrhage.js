/**
 * CHROME HEMORRHAGE — Interactive Surgical JS
 * Subtle body horror effects: hemorrhage injection, laser scalpel, vitals flicker
 * Fun, not annoying. Pure CSS + minimal DOM.
 */
(function () {
  'use strict';

  // === HEMORRHAGE INJECT BUTTON (used in post.html) ===
  window.triggerHemorrhage = function (btn) {
    if (!btn) return;
    var article = btn.closest('article') || document.querySelector('.post-content') || document.body;

    btn.classList.add('active');
    article.classList.add('hemorrhage-active');

    // Temporary blood drip layer
    var drip = document.createElement('div');
    drip.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:2;background:radial-gradient(circle at 48% 31%, rgba(255,26,60,0.55) 0%, transparent 52%);mix-blend-mode:multiply;animation:blood-pool-expand 900ms ease-out forwards;';
    article.style.position = 'relative';
    article.appendChild(drip);

    // Glitch all text nodes briefly
    var texts = article.querySelectorAll('h1,h2,h3,p,li,blockquote');
    texts.forEach(function (el, i) {
      el.style.transition = 'filter 60ms';
      el.style.filter = 'contrast(1.6) hue-rotate(8deg)';
      setTimeout(function () {
        el.style.filter = '';
      }, 180 + (i % 3) * 70);
    });

    // Add temporary suture flicker
    var suture = document.createElement('div');
    suture.className = 'suture';
    suture.style.cssText = 'position:absolute;bottom:12%;left:8%;right:8%;opacity:0.6;pointer-events:none;';
    article.appendChild(suture);

    setTimeout(function () {
      if (drip && drip.parentNode) drip.parentNode.removeChild(drip);
      if (suture && suture.parentNode) suture.parentNode.removeChild(suture);
      article.classList.remove('hemorrhage-active');
      btn.classList.remove('active');
    }, 1650);
  };

  // === SUBTLE LASER SCALPEL MOUSE FOLLOW (desktop only) ===
  var laser = null;
  var isDesktop = window.matchMedia && window.matchMedia('(min-width: 820px)').matches;

  function createLaser() {
    if (laser || !isDesktop) return;
    laser = document.createElement('div');
    laser.className = 'laser';
    document.body.appendChild(laser);

    var visible = false;

    document.addEventListener('mousemove', function (e) {
      if (!laser) return;
      laser.style.left = (e.clientX - 0.5) + 'px';
      laser.style.top = (e.clientY - 0.5) + 'px';

      if (!visible) {
        visible = true;
        laser.style.width = '2px';
        laser.style.height = '2px';
      }
    }, { passive: true });

    // Occasional "cut" pulse on click
    document.addEventListener('mousedown', function (e) {
      if (!laser || e.button !== 0) return;
      laser.style.width = '14px';
      laser.style.height = '1px';
      laser.style.boxShadow = '0 0 0 1px #00f0ff, 0 0 26px #ff1a3c';

      setTimeout(function () {
        if (laser) {
          laser.style.width = '2px';
          laser.style.height = '2px';
          laser.style.boxShadow = '0 0 0 1px var(--cyan), 0 0 18px var(--cyan)';
        }
      }, 110);
    });

    // Hide when leaving window
    document.addEventListener('mouseleave', function () {
      if (laser) laser.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      if (laser) laser.style.opacity = '1';
    });
  }

  // === VITAL SIGNS FLICKER (header BPM random micro-variation) ===
  function startVitalsFlicker() {
    var bpm = document.querySelector('.vitals-hud .bpm');
    if (!bpm) return;

    setInterval(function () {
      if (!bpm || document.hidden) return;
      var base = 142;
      var jitter = Math.floor(Math.random() * 7) - 3;
      bpm.textContent = (base + jitter);
      bpm.style.color = (jitter > 1) ? '#ff6b7f' : '#ff1a3c';

      setTimeout(function () {
        if (bpm) bpm.style.color = '#ff1a3c';
      }, 280);
    }, 4200);
  }

  // === BLOOD BAR PULSE INTENSIFIER ===
  function enhanceBloodBar() {
    var bar = document.querySelector('.blood-bar');
    if (!bar) return;
    bar.addEventListener('mouseenter', function () {
      bar.style.boxShadow = '0 0 14px #ff1a3c';
    });
    bar.addEventListener('mouseleave', function () {
      bar.style.boxShadow = '';
    });
  }

  // === KEYBOARD EASTER: press "L" for laser pulse (fun) ===
  function initKeyboardEaster() {
    document.addEventListener('keydown', function (e) {
      if (e.key.toLowerCase() === 'l' && !e.metaKey && !e.ctrlKey) {
        var lasers = document.querySelectorAll('.laser');
        lasers.forEach(function (l) {
          l.style.boxShadow = '0 0 0 2px #ff1a3c, 0 0 32px #ffaa00';
          setTimeout(function () {
            if (l) l.style.boxShadow = '0 0 0 1px var(--cyan), 0 0 18px var(--cyan)';
          }, 280);
        });
      }
    });
  }

  // Boot everything
  function boot() {
    createLaser();
    startVitalsFlicker();
    enhanceBloodBar();
    initKeyboardEaster();

    // Mark body ready for any additional CSS hooks
    document.documentElement.classList.add('chrome-hemorrhage-loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();