/**
 * MIRROR HUNGER — Interactive Replacement Behaviors
 * The glass is patient. The glass is always watching.
 */

(function() {
  'use strict';

  const CONFIG = {
    replacementInterval: 42000,      // slow global drift
    microGlitchChance: 0.014,
    stareDelay: 1250,
    crackOnClick: true
  };

  let replacementProgress = 0;
  let indicatorEl = null;

  // Create the subtle "you are being replaced" indicator
  function createIndicator() {
    if (indicatorEl) return;
    indicatorEl = document.createElement('div');
    indicatorEl.className = 'replacement-indicator';
    indicatorEl.textContent = 'REPLACEMENT IN PROGRESS';
    document.body.appendChild(indicatorEl);
  }

  function updateIndicator() {
    if (!indicatorEl) return;
    const pct = Math.floor(replacementProgress * 100);
    indicatorEl.textContent = `REPLACEMENT ${pct}%`;
    if (pct > 18) indicatorEl.classList.add('visible');
  }

  // Slow global replacement drift — text becomes slightly "better"
  function initProgressiveReplacement() {
    createIndicator();

    // Target specific poetic lines and post titles
    const targets = document.querySelectorAll(
      'h1, .post-mirror h2, p:first-of-type, .mirror-surface p, .replacement-text'
    );

    targets.forEach((el, index) => {
      if (el.classList.contains('replacement-text')) return;

      // Store original
      if (!el.dataset.original) {
        el.dataset.original = el.textContent.trim();
      }

      // Occasional micro-improvements over very long time
      setTimeout(() => {
        if (Math.random() < 0.3) {
          applyMicroImprovement(el);
        }
      }, 8000 + index * 1700);
    });

    // Global slow creep
    setInterval(() => {
      replacementProgress = Math.min(0.97, replacementProgress + 0.011);
      updateIndicator();

      // Randomly improve one visible element
      if (Math.random() < 0.38) {
        const visible = Array.from(document.querySelectorAll('p, h2, .mirror-surface span'))
          .filter(el => el.offsetParent !== null && !el.classList.contains('imitation'));
        
        if (visible.length) {
          const target = visible[Math.floor(Math.random() * visible.length)];
          applyMicroImprovement(target);
        }
      }
    }, CONFIG.replacementInterval);
  }

  function applyMicroImprovement(el) {
    if (!el.dataset.original || el.classList.contains('replaced')) return;

    const original = el.dataset.original;
    const words = original.split(' ');

    // Gentle "better" substitutions
    const improvements = {
      'I': 'I',
      'me': 'me',
      'my': 'my',
      'smile': 'smile',
      'face': 'face',
      'mirror': 'glass',
      'reflection': 'other',
      'always': 'always',
      'never': 'never',
    };

    let improved = words.map(w => {
      const lower = w.toLowerCase().replace(/[.,!?]/g, '');
      if (improvements[lower] && Math.random() < 0.22) {
        return improvements[lower] + (w.match(/[.,!?]$/) || '');
      }
      return w;
    }).join(' ');

    // Only apply if meaningfully different
    if (improved !== original && improved.length > 6) {
      el.style.transition = 'color 900ms ease, letter-spacing 900ms ease';
      el.style.color = 'var(--almost-you)';
      el.style.letterSpacing = '0.018em';
      
      setTimeout(() => {
        if (el.textContent.length < 180) {
          el.textContent = improved;
        }
        el.classList.add('replaced');
      }, 420);
    }
  }

  // Mirror interactions: shatter, stare, recursion activation
  function initMirrorInteractions() {
    const mirrors = document.querySelectorAll('.mirror-frame');

    mirrors.forEach(mirror => {
      const surface = mirror.querySelector('.mirror-surface');
      if (!surface) return;

      // Hover = staring begins
      mirror.addEventListener('mouseenter', () => {
        mirror.classList.add('staring');
        
        // Occasionally trigger deeper recursion visual
        if (Math.random() < 0.35 && mirror.querySelector('.recursion-layer')) {
          mirror.classList.add('deep');
        }
      });

      mirror.addEventListener('mouseleave', () => {
        mirror.classList.remove('staring');
        // Don't immediately remove deep — let it linger like memory
      });

      // Click = shatter or crack + reveal imitation
      if (CONFIG.crackOnClick) {
        mirror.addEventListener('click', (e) => {
          if (e.target.closest('a')) return; // don't shatter navigation links

          mirror.classList.add('cracked', 'shattered');

          // Reveal hidden "better" layer if present
          const other = mirror.querySelector('.other-you');
          if (other) {
            other.style.transitionDuration = '420ms';
            other.style.opacity = '0.92';
          }

          // Trigger replacement on nearby text
          setTimeout(() => {
            const nearby = mirror.querySelector('p, span, h2');
            if (nearby) applyMicroImprovement(nearby);
          }, 650);

          // After shatter, the mirror "settles" into being slightly wrong
          setTimeout(() => {
            mirror.classList.remove('shattered');
            mirror.classList.add('deep');
          }, 900);

          // Very rarely, the click causes global progress jump
          if (Math.random() < 0.08) {
            replacementProgress = Math.min(0.96, replacementProgress + 0.21);
            updateIndicator();
          }
        });
      }

      // Long press / hold activates full recursion
      let holdTimer = null;
      surface.addEventListener('mousedown', () => {
        holdTimer = setTimeout(() => {
          mirror.classList.add('deep', 'staring');
          const other = mirror.querySelector('.other-you');
          if (other) other.style.opacity = '0.98';
        }, 820);
      });

      surface.addEventListener('mouseup', () => {
        if (holdTimer) clearTimeout(holdTimer);
      });
      surface.addEventListener('mouseleave', () => {
        if (holdTimer) clearTimeout(holdTimer);
      });
    });
  }

  // Subtle random micro-asymmetries that feel increasingly wrong
  function initMicroAsymmetries() {
    const headings = document.querySelectorAll('h1, h2');

    setInterval(() => {
      headings.forEach(h => {
        if (Math.random() < CONFIG.microGlitchChance) {
          const orig = h.style.transform || '';
          h.style.transitionDuration = '180ms';
          h.style.transform = 'rotate(0.35deg) translateX(0.6px)';
          
          setTimeout(() => {
            h.style.transform = orig || 'none';
          }, 520);
        }
      });
    }, 14000);
  }

  // Activate recursion layers when scrolled into view
  function initRecursionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const mirror = entry.target;
          if (mirror.querySelector('.recursion-layer')) {
            mirror.classList.add('deep');
            // Very slow silvering intensification
            setTimeout(() => {
              const silvers = mirror.querySelectorAll('.silvering');
              silvers.forEach(s => s.style.animationDuration = '14s');
            }, 1800);
          }
          observer.unobserve(mirror);
        }
      });
    }, { threshold: 0.45 });

    document.querySelectorAll('.mirror-recursion, .mirror-frame').forEach(m => {
      observer.observe(m);
    });
  }

  // Keyboard interaction — press "R" to force reflection mode across the page
  function initKeyboardHorror() {
    let rCount = 0;
    
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'r') {
        rCount++;
        const mirrors = document.querySelectorAll('.mirror-frame');
        
        mirrors.forEach((m, i) => {
          setTimeout(() => {
            m.classList.add('staring', 'deep');
            const other = m.querySelector('.other-you');
            if (other) other.style.opacity = (0.6 + (rCount * 0.08)).toString();
          }, i * 70);
        });

        // Force a replacement spike
        replacementProgress = Math.min(0.95, replacementProgress + 0.14);
        updateIndicator();

        // After a while it settles but never fully returns to normal
        setTimeout(() => {
          mirrors.forEach(m => m.classList.remove('staring'));
        }, 2400 + rCount * 180);
      }

      // Secret: hold shift + m for maximum silvering
      if (e.key.toLowerCase() === 'm' && e.shiftKey) {
        document.querySelectorAll('.silvering').forEach(s => {
          s.style.animationDuration = '7s';
          s.style.opacity = '0.85';
        });
      }
    });

    // Gentle hint in console for the curious
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('%c[mirror-hunger] The glass responds to the letter R.', 'color:#665f55;font-size:9px');
    }
  }

  // On post pages, make the main title itself slowly become "better"
  function initTitleReplacement() {
    const title = document.querySelector('main h1');
    if (!title || title.dataset.original) return;

    title.dataset.original = title.textContent.trim();

    // After long reading time, the title corrects itself slightly
    setTimeout(() => {
      if (document.visibilityState === 'visible' && Math.random() < 0.7) {
        const betterTitles = {
          'I Met Myself Today. She Was Better.': 'She Met Me Today. I Was Not.',
          'The Mirror Practiced My Smile Until It Was Perfect': 'The Mirror No Longer Needs My Smile',
          'She Wears My Face Like a Well-Fitted Glove': 'My Face Fits Her Better Now',
          'The Reflection That Stayed When I Left': 'I Left. The Reflection Remained.',
          'Every Mirror Is a Door. Every Door Opens Both Ways.': 'The Doors No Longer Require Keys',
          'Silvering': 'The Silvering Is Complete',
          'I Broke the Glass and She Stepped Through Smiling': 'I Smiled. She Stepped Through.',
          'The Last Mirror': 'There Is Only One Mirror Left'
        };

        const current = title.textContent.trim();
        if (betterTitles[current]) {
          title.style.transition = 'all 1.6s cubic-bezier(0.23,1,0.3,1)';
          title.style.color = 'var(--almost-you)';
          title.style.letterSpacing = '0.025em';
          
          setTimeout(() => {
            title.textContent = betterTitles[current];
            title.classList.add('replaced');
          }, 700);
        }
      }
    }, 52000);
  }

  // Main initialization
  function init() {
    // Only activate on actual content pages
    if (document.body.classList.contains('mirror-hunger-initialized')) return;
    document.body.classList.add('mirror-hunger-initialized');

    initMirrorInteractions();
    initProgressiveReplacement();
    initMicroAsymmetries();
    initRecursionObserver();
    initKeyboardHorror();
    initTitleReplacement();

    // Initial slight silvering pulse on hero mirrors
    setTimeout(() => {
      const hero = document.querySelector('.primary-mirror .mirror-frame');
      if (hero) hero.classList.add('staring');
    }, 2100);

    // One-time very slow global drift starter
    setTimeout(() => {
      replacementProgress = 0.07;
      updateIndicator();
    }, 19000);
  }

  // Boot when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose a tiny debug surface for the truly paranoid
  window.__mirrorHunger = {
    forceReplacement: () => {
      replacementProgress = 0.88;
      document.querySelectorAll('.mirror-frame').forEach(m => m.classList.add('deep', 'staring'));
    },
    shatterAll: () => {
      document.querySelectorAll('.mirror-frame').forEach(m => m.classList.add('cracked', 'shattered'));
    }
  };
})();