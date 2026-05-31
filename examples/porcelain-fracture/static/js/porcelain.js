/**
 * Porcelain Fracture — Interactive Delicate Horrors
 * Subtle doll-eye parallax following, crack spreading helpers, soft blinks
 */
(function() {
  'use strict';

  // --- Watching Doll Eyes (header + any .doll-face instances) ---
  function initWatchingEyes() {
    const eyes = document.querySelectorAll('.doll-eye');

    if (!eyes.length) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 3;

    function updateEyes(x, y) {
      eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        if (!pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Vector from eye center to mouse (constrained)
        let dx = (x - eyeCenterX) / (window.innerWidth * 0.6);
        let dy = (y - eyeCenterY) / (window.innerHeight * 0.65);

        // Clamp movement so pupils stay inside porcelain
        const maxOffset = eye.classList.contains('larger') ? 5.5 : 4.2;
        dx = Math.max(Math.min(dx, 1), -1) * maxOffset;
        dy = Math.max(Math.min(dy, 1), -1) * (maxOffset * 0.9);

        pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      });
    }

    // Mouse movement
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateEyes(mouseX, mouseY);
    }, { passive: true });

    // Initial position (slightly looking toward top-left, curious and uneasy)
    setTimeout(() => {
      updateEyes(mouseX, mouseY - 60);
    }, 420);

    // Occasional soft blink on random eyes (uncanny valley)
    setInterval(() => {
      if (Math.random() < 0.38) {
        const randomEye = eyes[Math.floor(Math.random() * eyes.length)];
        randomEye.classList.add('blinking');
        setTimeout(() => randomEye.classList.remove('blinking'), 280);
      }
    }, 6200);

    // Touch devices: eyes drift slowly toward center then away (unsettling)
    if ('ontouchstart' in window) {
      setInterval(() => {
        updateEyes(window.innerWidth * 0.42, window.innerHeight * 0.29);
        setTimeout(() => updateEyes(window.innerWidth * 0.61, window.innerHeight * 0.41), 1400);
      }, 13500);
    }
  }

  // --- Subtle crack propagation on long hover (extra micro lines) ---
  function initCrackPropagation() {
    const shards = document.querySelectorAll('.shard, .post-shard, .porcelain');
    
    shards.forEach((el, index) => {
      let crackTimer = null;

      el.addEventListener('mouseenter', () => {
        clearTimeout(crackTimer);
        el.style.setProperty('--i', index % 5);
        
        // Dynamically inject one extra fleeting crack line on some shards
        if (!el.querySelector('.crack-line.dynamic') && Math.random() > 0.4) {
          const line = document.createElement('div');
          line.className = 'crack-line pink dynamic';
          line.style.cssText = `top: ${22 + Math.random()*48}%; left: ${10 + Math.random()*35}%; width: ${38 + Math.random()*44}%; height: 1.5px; transform: rotate(${ -27 + Math.random()*61 }deg); opacity: 0.7;`;
          el.appendChild(line);

          setTimeout(() => {
            if (line && line.parentNode) line.parentNode.removeChild(line);
          }, 1650);
        }
      });

      el.addEventListener('mouseleave', () => {
        crackTimer = setTimeout(() => {
          const dyn = el.querySelector('.crack-line.dynamic');
          if (dyn) dyn.remove();
        }, 260);
      });
    });
  }

  // --- Gentle periodic "impact" shadow pulse on a few elements ---
  function initPorcelainPulse() {
    const targets = document.querySelectorAll('.cabinet-hero .doll-face, .post-shard');
    if (!targets.length) return;

    targets.forEach((t, i) => {
      setInterval(() => {
        if (document.hidden) return;
        t.style.transitionDuration = '420ms';
        t.style.boxShadow = '0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 28px rgba(44,38,54,0.65), 0 2px 4px rgba(0,0,0,0.3), 0 0 0 1px rgba(217,138,143,0.15)';
        
        setTimeout(() => {
          if (t) t.style.boxShadow = '';
        }, 820);
      }, 24000 + (i * 3400));
    });
  }

  // Boot everything once DOM is ready
  function boot() {
    initWatchingEyes();
    initCrackPropagation();
    initPorcelainPulse();

    // Easter egg: clicking the header eye makes it blink twice rapidly
    const headerEye = document.getElementById('headerEye');
    if (headerEye) {
      headerEye.addEventListener('click', () => {
        headerEye.classList.add('blinking');
        setTimeout(() => headerEye.classList.remove('blinking'), 210);
        setTimeout(() => {
          if (headerEye) headerEye.classList.add('blinking');
          setTimeout(() => headerEye && headerEye.classList.remove('blinking'), 190);
        }, 310);
      });
    }

    // Keyboard hint for the curious
    document.addEventListener('keydown', function once(e) {
      if (e.key.toLowerCase() === '?' && document.activeElement.tagName === 'BODY') {
        const eyes = document.querySelectorAll('.doll-eye');
        eyes.forEach((eye, i) => {
          setTimeout(() => {
            eye.classList.add('blinking');
            setTimeout(() => eye.classList.remove('blinking'), 210);
          }, i * 70);
        });
        document.removeEventListener('keydown', once);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
