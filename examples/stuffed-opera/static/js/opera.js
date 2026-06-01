/**
 * STUFFED OPERA — Theatrical Effects
 * Subtle wrongness. The performers almost move.
 * Curtains rise. Spotlights hunt. Nothing ever truly sleeps.
 */
(function() {
  'use strict';

  // === Curtain Opening (the performance begins) ===
  function openCurtains() {
    const body = document.body;
    // Slight delay so user registers the proscenium first
    setTimeout(() => {
      body.classList.add('curtains-open');
    }, 380);
  }

  // === Spotlight that follows the mouse (the dead watch back) ===
  function initSpotlight() {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.35;
    let targetX = mouseX;
    let targetY = mouseY;

    // Smooth follow for uncanny slowness
    function updateSpot() {
      mouseX += (targetX - mouseX) * 0.068;
      mouseY += (targetY - mouseY) * 0.068;

      spotlight.style.transform = `translate(${mouseX - 310}px, ${mouseY - 310}px)`;
      requestAnimationFrame(updateSpot);
    }

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      spotlight.style.opacity = '0.72';
    }, { passive: true });

    // Dim when idle
    let idleTimer;
    document.addEventListener('mousemove', () => {
      clearTimeout(idleTimer);
      spotlight.style.opacity = '0.72';
      idleTimer = setTimeout(() => {
        spotlight.style.opacity = '0.38';
      }, 2400);
    }, { passive: true });

    // Hide on touch devices or when leaving window
    document.addEventListener('mouseleave', () => {
      spotlight.style.opacity = '0.1';
    });

    updateSpot();
  }

  // === Uncanny almost-movement on .performer elements ===
  function initPerformers() {
    const performers = document.querySelectorAll('.performer, .glass-case, .stitched');
    performers.forEach((el, idx) => {
      el.classList.add('performer');

      // Random gentle breathing on some
      if (idx % 3 === 0) {
        el.classList.add('breathing');
      }

      // Extremely subtle random twitch on hover leave (the memory of life)
      el.addEventListener('mouseleave', () => {
        if (Math.random() < 0.42) {
          el.style.transitionDuration = '180ms';
          el.style.transform = `translate(${Math.random()*0.8-0.4}px, ${Math.random()*0.6-0.9}px) rotate(${Math.random()*0.6-0.3}deg)`;
          setTimeout(() => {
            el.style.transitionDuration = '2.8s';
            el.style.transform = '';
          }, 260);
        }
      }, { passive: true });
    });
  }

  // === Theater controls (CURTAIN + LIGHTS) ===
  function initTheaterControls() {
    const curtainBtn = document.getElementById('curtain-toggle');
    const lightsBtn = document.getElementById('lights-toggle');
    const body = document.body;

    if (curtainBtn) {
      curtainBtn.addEventListener('click', () => {
        const isOpen = body.classList.contains('curtains-open');
        if (isOpen) {
          body.classList.remove('curtains-open');
          curtainBtn.textContent = 'RAISE';
        } else {
          body.classList.add('curtains-open');
          curtainBtn.textContent = 'LOWER';
          // Re-trigger the wrong movement
          setTimeout(initPerformers, 650);
        }
      });
    }

    if (lightsBtn) {
      lightsBtn.addEventListener('click', () => {
        body.classList.toggle('lights-dim');
        const isDim = body.classList.contains('lights-dim');
        lightsBtn.textContent = isDim ? 'BRIGHTEN' : 'LIGHTS';
      });
    }

    // Keyboard theater: press "c" for curtain, "l" for lights
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'c' && curtainBtn) curtainBtn.click();
      if (e.key.toLowerCase() === 'l' && lightsBtn) lightsBtn.click();
    });
  }

  // === Floating sawdust motes (preservation dust) on scroll / click ===
  function spawnSawdust(x, y, count = 7) {
    const container = document.body;
    for (let i = 0; i < count; i++) {
      const mote = document.createElement('div');
      mote.style.cssText = `
        position:fixed;
        left:${x + (Math.random()*60-30)}px;
        top:${y + (Math.random()*24-12)}px;
        width:2.5px;height:2.5px;
        background:${Math.random()>0.6 ? '#D9BFA8' : '#C5A26F'};
        border-radius:50%;
        pointer-events:none;
        z-index:99999;
        opacity:${0.35 + Math.random()*0.45};
        transition:transform 1.6s cubic-bezier(0.23,1,0.32,1), opacity 1.65s ease;
      `;
      container.appendChild(mote);

      const tx = (Math.random()*82 - 41);
      const ty = 62 + Math.random()*48;

      requestAnimationFrame(() => {
        mote.style.transform = `translate(${tx}px, ${ty}px)`;
        mote.style.opacity = '0';
      });

      setTimeout(() => mote.remove(), 1900);
    }
  }

  function initSawdust() {
    // Spawn on glass case interactions (the case was recently opened)
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.glass-case, .stitched, .program');
      if (target) {
        spawnSawdust(e.clientX, e.clientY, 5);
      }
    }, { passive: true });

    // Occasional ambient dust when idle near the stage
    let lastDust = Date.now();
    document.addEventListener('mousemove', (e) => {
      if (Date.now() - lastDust > 720 && Math.random() < 0.035) {
        lastDust = Date.now();
        if (e.target.closest('.stage, .glass-case')) {
          spawnSawdust(e.clientX, e.clientY, 2);
        }
      }
    }, { passive: true });
  }

  // === Subtle page title "stuffed" distortion on hover ===
  function initStuffedTitles() {
    const titles = document.querySelectorAll('.post-title, .site-logo');
    titles.forEach(title => {
      title.addEventListener('mouseenter', () => {
        title.style.letterSpacing = '0.095em';
      });
      title.addEventListener('mouseleave', () => {
        title.style.letterSpacing = '';
      });
    });
  }

  // === Boot the entire uncanny performance ===
  function bootOpera() {
    openCurtains();
    initSpotlight();
    initPerformers();
    initTheaterControls();
    initSawdust();
    initStuffedTitles();

    // One-time "the house is watching" message for the curious
    if (window.console && Math.random() < 0.3) {
      setTimeout(() => {
        console.log('%c[STUFFED OPERA] They noticed you moved.', 'color:#8C6F4A; font-family:monospace');
      }, 5200);
    }

    // Mark the body ready for any additional CSS hooks
    document.body.classList.add('opera-loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootOpera);
  } else {
    bootOpera();
  }
})();