/**
 * INK VEINS — Interactive Literary Body Horror
 * The manuscript responds to touch.
 */
(function () {
  'use strict';

  // =====================================================
  // 1. WRITING SIMULATOR (The Living Manuscript)
  // =====================================================
  function initWritingSimulator() {
    var canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    var lastInput = Date.now();
    var inkIntensity = 0;

    function applyFreshInk(el, isNew) {
      if (!el || !el.textContent) return;

      // Split into spans for per-letter bleeding
      var text = el.textContent;
      if (text.length < 2) return;

      var html = '';
      for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (char === ' ' || char === '\n') {
          html += char;
        } else {
          var delay = Math.random() * 180;
          html += '<span class="ink-letter' + (isNew ? ' fresh' : '') + '" style="transition-delay:' + delay + 'ms">' + char + '</span>';
        }
      }
      el.innerHTML = html;

      // Stagger the bleeding effect
      setTimeout(function () {
        var letters = el.querySelectorAll('.ink-letter.fresh');
        for (var j = 0; j < letters.length; j++) {
          (function (letter, idx) {
            setTimeout(function () {
              if (letter && letter.parentNode) {
                letter.classList.remove('fresh');
                // Add lingering subtle bleed shadow
                letter.style.textShadow = '0 0 1px #6b1a1f, 0 0 3px rgba(107,26,31,0.25)';
              }
            }, idx * 12);
          })(letters[j], j);
        }
      }, 420);
    }

    // Real-time ink bleed on input
    canvas.addEventListener('input', function (e) {
      inkIntensity = Math.min(1, (Date.now() - lastInput) / 1200);
      lastInput = Date.now();

      // Occasionally add a vein under the writing area
      if (Math.random() < 0.08) {
        var v = document.createElement('div');
        v.className = 'vein';
        v.style.position = 'absolute';
        v.style.bottom = (Math.random() * 60 + 20) + 'px';
        v.style.left = '8%';
        v.style.width = '84%';
        v.style.opacity = '0.3';
        canvas.parentNode.appendChild(v);

        setTimeout(function () {
          if (v.parentNode) v.parentNode.removeChild(v);
        }, 4200);
      }

      // Random marginalia intrusion
      if (Math.random() < 0.025) {
        var note = document.createElement('div');
        note.style.position = 'absolute';
        note.style.right = '-18px';
        note.style.top = (30 + Math.random() * 110) + 'px';
        note.style.fontSize = '0.68rem';
        note.style.fontStyle = 'italic';
        note.style.color = '#5c3a6b';
        note.style.opacity = '0.55';
        note.style.transform = 'rotate(180deg)';
        note.style.writingMode = 'vertical-rl';
        note.style.pointerEvents = 'none';
        note.textContent = ['It watches.', 'Keep going.', 'Deeper.', 'The reader knows.', 'Your hand is shaking.'][Math.floor(Math.random()*5)];
        canvas.parentNode.appendChild(note);

        setTimeout(function () {
          if (note.parentNode) note.parentNode.removeChild(note);
        }, 5200);
      }
    });

    // On blur, treat the whole block as freshly inked
    canvas.addEventListener('blur', function () {
      if (canvas.innerHTML.trim().length > 1) {
        applyFreshInk(canvas, true);
      }
    });

    // Bonus: clicking the canvas "presses harder" — stronger bleed
    canvas.addEventListener('mousedown', function () {
      canvas.style.textShadow = '0 0 2px #9c2a2f, 0 0 9px rgba(196,69,74,0.35)';
      setTimeout(function () {
        if (canvas) canvas.style.textShadow = '';
      }, 650);
    });

    // Initial hint
    setTimeout(function () {
      if (canvas && canvas.textContent && canvas.textContent.length < 12) {
        canvas.style.transition = 'opacity 1.1s';
      }
    }, 1800);
  }

  // =====================================================
  // 2. ENHANCED BLEEDING ON EXISTING TEXT
  // =====================================================
  function enhanceBleedingText() {
    var bleedables = document.querySelectorAll('.bleed, .bleeding-text, .post-content p');
    for (var i = 0; i < bleedables.length; i++) {
      (function (el) {
        el.addEventListener('mouseenter', function () {
          el.style.transitionDuration = '260ms';
          el.style.color = '#9c2a2f';
          el.style.textShadow = '0 0 1px #6b1a1f, 0 0 6px rgba(196,69,74,0.35)';
        });
        el.addEventListener('mouseleave', function () {
          el.style.color = '';
          el.style.textShadow = '';
        });
      })(bleedables[i]);
    }
  }

  // =====================================================
  // 3. VEIN INTERACTION — Click to open a wound
  // =====================================================
  function enhanceVeins() {
    var veins = document.querySelectorAll('.vein, .veins');
    for (var i = 0; i < veins.length; i++) {
      (function (v) {
        v.style.cursor = 'crosshair';
        v.addEventListener('click', function (e) {
          e.preventDefault();
          v.style.transitionDuration = '80ms';
          v.style.opacity = '0.95';
          v.style.background = 'linear-gradient(to right, transparent, #c4454a, transparent)';

          // Create temporary blood droplet
          var drop = document.createElement('span');
          drop.style.position = 'absolute';
          drop.style.left = (e.offsetX || 40) + 'px';
          drop.style.top = '-2px';
          drop.style.width = '3px';
          drop.style.height = '3px';
          drop.style.background = '#6b1a1f';
          drop.style.borderRadius = '50%';
          drop.style.opacity = '0.7';
          drop.style.pointerEvents = 'none';
          v.appendChild(drop);

          setTimeout(function () {
            if (drop.parentNode) drop.parentNode.removeChild(drop);
            v.style.opacity = '';
            v.style.background = '';
          }, 1350);
        });
      })(veins[i]);
    }
  }

  // =====================================================
  // 4. MARGINALIA SCRATCH / REVEAL
  // =====================================================
  function enhanceMarginalia() {
    var notes = document.querySelectorAll('.marginalia');
    for (var i = 0; i < notes.length; i++) {
      (function (note) {
        note.style.cursor = 'help';
        note.title = 'Scratch to reveal hidden text';

        note.addEventListener('click', function (e) {
          e.stopImmediatePropagation();
          var original = note.textContent;
          note.style.transition = 'all 0.2s';
          note.style.color = '#c4454a';
          note.style.opacity = '1';
          note.style.transform = note.style.transform + ' scale(1.06)';

          // Reveal a deeper, more disturbing line
          var revelations = [
            "They have already read the ending.",
            "Your fingerprints are now part of the text.",
            "The next reader will taste this page.",
            "It was never your story to begin with.",
            "The thread is pulling tighter."
          ];
          note.textContent = revelations[Math.floor(Math.random() * revelations.length)];

          setTimeout(function () {
            if (note.parentNode) {
              note.style.opacity = '0.3';
              note.textContent = original;
              note.style.color = '';
              note.style.transform = note.style.transform.replace(' scale(1.06)', '');
            }
          }, 2650);
        });
      })(notes[i]);
    }
  }

  // =====================================================
  // 5. WOUND / CHAPTER MARKER INTERACTION
  // =====================================================
  function enhanceWounds() {
    var wounds = document.querySelectorAll('.wound');
    for (var i = 0; i < wounds.length; i++) {
      (function (w) {
        w.style.cursor = 'pointer';
        w.addEventListener('click', function () {
          w.style.transitionDuration = '90ms';
          w.style.background = 'rgba(196,69,74,0.22)';
          w.style.borderColor = '#c4454a';

          setTimeout(function () {
            if (w) {
              w.style.background = '';
              w.style.borderColor = '';
            }
          }, 920);
        });
      })(wounds[i]);
    }
  }

  // =====================================================
  // 6. SUBTLE GLOBAL EFFECTS — "The book is breathing"
  // =====================================================
  function initAmbientEffects() {
    // Random faint vein pulses across the page surface
    var pages = document.querySelectorAll('.page-surface');
    for (var i = 0; i < pages.length; i++) {
      (function (page) {
        setInterval(function () {
          if (!page || document.hidden) return;
          page.style.boxShadow = '0 1px 0 #e8d9c0, 0 10px 30px -8px rgba(10,8,6,0.65), inset 0 0 80px rgba(10,8,6,0.06), 0 0 14px rgba(107,26,31,0.06)';
          setTimeout(function () {
            if (page) page.style.boxShadow = '';
          }, 680);
        }, 14500 + Math.random() * 9000);
      })(pages[i]);
    }

    // Keyboard "press harder" on posts (hold shift while reading)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Shift') {
        document.body.style.filter = 'contrast(1.04) saturate(1.08)';
      }
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Shift') {
        document.body.style.filter = '';
      }
    });

    // Disturbing console message for the curious
    if (Math.random() < 0.6) {
      setTimeout(function () {
        console.log('%c[INK VEINS] The manuscript is aware you are inspecting it.', 'color:#5c5248;font-size:9px;font-style:italic');
      }, 4200);
    }
  }

  // =====================================================
  // 7. POST-LOAD INITIALIZATION
  // =====================================================
  function initialize() {
    initWritingSimulator();
    enhanceBleedingText();
    enhanceVeins();
    enhanceMarginalia();
    enhanceWounds();
    initAmbientEffects();

    // Gentle welcome for the simulator if present on home
    var sim = document.getElementById('writing-canvas');
    if (sim) {
      sim.setAttribute('aria-label', 'Living manuscript writing surface. Your words will bleed.');
    }

    // Mark that the horror JS has loaded (for future extensions)
    document.documentElement.setAttribute('data-ink-veins', 'alive');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();