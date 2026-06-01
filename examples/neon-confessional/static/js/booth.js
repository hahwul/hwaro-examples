// NEON CONFESSIONAL — Booth interaction layer
// Typing effect, rain, sin transmission, flickering signals

(function() {
  'use strict';

  // === RAIN SYSTEM ===
  function initRain() {
    const overlay = document.getElementById('rain-overlay');
    if (!overlay) return;

    // Clear previous drops if re-init
    overlay.innerHTML = '';

    const dropCount = window.innerWidth < 640 ? 42 : 78;

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';

      const left = Math.random() * 100;
      const duration = 340 + Math.random() * 520; // ms
      const delay = -Math.random() * 1400;
      const height = 9 + Math.random() * 19;
      const opacity = 0.35 + Math.random() * 0.5;

      drop.style.left = left + '%';
      drop.style.height = height + 'px';
      drop.style.animationDuration = duration + 'ms';
      drop.style.animationDelay = delay + 'ms';
      drop.style.opacity = opacity;

      // Slight horizontal drift for wind feel
      if (Math.random() > 0.6) {
        drop.style.transform = 'translateX(' + (Math.random() * 9 - 4) + 'px)';
      }

      overlay.appendChild(drop);
    }
  }

  // === TYPING EFFECT ===
  function typeText(element, text, speed = 28, callback) {
    if (!element) return;
    element.textContent = '';
    element.classList.add('typed-text');

    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    element.appendChild(cursor);

    const interval = setInterval(function() {
      if (i < text.length) {
        // insert before cursor
        const charNode = document.createTextNode(text.charAt(i));
        element.insertBefore(charNode, cursor);
        i++;
      } else {
        clearInterval(interval);
        // keep cursor blinking a while then remove for final state
        setTimeout(function() {
          if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor);
          if (callback) callback();
        }, 820);
      }
    }, speed);
  }

  // === SIN INPUT TERMINAL ===
  function initSinInputs() {
    const terminals = document.querySelectorAll('[data-sin-input]');
    if (!terminals.length) return;

    terminals.forEach(function(terminal) {
      const textarea = terminal.querySelector('textarea');
      const transmitBtn = terminal.querySelector('[data-action="transmit"]');
      const clearBtn = terminal.querySelector('[data-action="clear"]');
      const absolutionBox = terminal.querySelector('[data-absolution]');

      if (!textarea || !transmitBtn || !absolutionBox) return;

      transmitBtn.addEventListener('click', function() {
        const sin = (textarea.value || '').trim();
        if (!sin) {
          textarea.placeholder = "The machine can hear your silence. Type something, sinner.";
          return;
        }

        // Processing state
        transmitBtn.disabled = true;
        transmitBtn.textContent = 'UPLOADING...';
        absolutionBox.style.display = 'none';
        absolutionBox.innerHTML = '';

        // Simulate network / processing latency (intimate delay)
        setTimeout(function() {
          const now = new Date();
          const timestamp = now.toLocaleTimeString('en-US', { hour12: false }) + ' // ' + now.toISOString().slice(0,10);
          const logId = 'SIN-' + Math.floor(Math.random() * 89999 + 10000);

          const receiptHTML = 
            '<div class="receipt-header">' +
              '<span class="log-id">' + logId + '</span>' +
              '<span>' + timestamp + '</span>' +
            '</div>' +
            '<div class="absolution-title">ABSOLUTION RECEIPT — STATUS: PROCESSED</div>' +
            '<p style="margin:8px 0 4px;color:#a8b8a0">You said:</p>' +
            '<div class="typed-sin" style="color:#c8d0d8;margin-bottom:10px;white-space:pre-wrap"></div>' +
            '<div style="margin-top:10px;padding-top:10px;border-top:1px dashed #1f2533;color:#5a8a5a">' +
              'THE ALGORITHM HAS RECEIVED YOUR DATA.<br>' +
              'FORGIVENESS IS A 204 NO CONTENT.<br>' +
              'YOU MAY CONFESS AGAIN WHEN THE RAIN RETURNS.' +
            '</div>';

          absolutionBox.innerHTML = receiptHTML;
          absolutionBox.style.display = 'block';

          // Type the sin back to them — deeply personal
          const typedContainer = absolutionBox.querySelector('.typed-sin');
          typeText(typedContainer, sin, 19, function() {
            transmitBtn.disabled = false;
            transmitBtn.textContent = 'TRANSMIT ANOTHER';
          });

          // Very occasionally the machine responds with something colder
          if (Math.random() < 0.11) {
            setTimeout(function() {
              const extra = document.createElement('div');
              extra.style.marginTop = '10px';
              extra.style.fontSize = '0.78rem';
              extra.style.color = '#ff00aa';
              extra.style.opacity = '0.7';
              extra.textContent = 'NOTE: YOUR PREVIOUS CONFESSIONS ARE STILL IN THE BUFFER.';
              absolutionBox.appendChild(extra);
            }, 1400);
          }
        }, 680);
      });

      clearBtn.addEventListener('click', function() {
        textarea.value = '';
        absolutionBox.style.display = 'none';
        transmitBtn.disabled = false;
        transmitBtn.textContent = 'TRANSMIT SIN';
      });

      // Allow enter+shift? but keep simple — transmit on ctrl/cmd+enter
      textarea.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          transmitBtn.click();
        }
      });
    });
  }

  // === POST PAGE — AUTO TYPE THE CONFESSION BODY ===
  function initPostTyping() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    // Only do the effect on actual confession logs (heuristic: contains LOG- in title or long text)
    const title = document.querySelector('.booth-inner h1, .post-header h1');
    if (!title || !title.textContent.includes('LOG-')) return;

    // Grab the main paragraphs / content blocks
    const blocks = postContent.querySelectorAll('p, blockquote, pre');
    if (!blocks.length) return;

    // Add subtle class
    postContent.classList.add('typed-confession');

    let delay = 120;
    blocks.forEach(function(block, idx) {
      // Skip very short blocks or already processed
      const text = block.textContent.trim();
      if (!text || text.length < 12 || block.dataset.typed) return;

      // Store original
      const originalHTML = block.innerHTML;
      block.innerHTML = '';
      block.dataset.typed = 'true';

      setTimeout(function() {
        // Simple typing for the block
        let i = 0;
        const speed = idx === 0 ? 22 : 13;
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        block.appendChild(cursor);

        const iv = setInterval(function() {
          if (i < originalHTML.length) {
            // We insert raw to preserve minimal formatting — not perfect but atmospheric
            const char = originalHTML.charAt(i);
            const node = document.createTextNode(char);
            block.insertBefore(node, cursor);
            i++;
          } else {
            clearInterval(iv);
            // finalize
            setTimeout(function() {
              if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
              // restore any links etc by re-setting? but for poetry we leave the typed version
            }, 700);
          }
        }, speed);
      }, delay);

      delay += Math.min(620, text.length * 7);
    });
  }

  // === BOOTH NAV ACTIVE STATE (simple) ===
  function initBoothNav() {
    const nav = document.querySelector('.booth-nav');
    if (!nav) return;

    const links = nav.querySelectorAll('a');
    const path = window.location.pathname;

    links.forEach(function(link) {
      const href = link.getAttribute('href') || '';
      if (href === path || (path === '/' && href === '/')) {
        link.classList.add('active');
      }
      if (path.startsWith('/posts') && href.includes('/posts')) {
        link.classList.add('active');
      }
    });
  }

  // === GLOBAL KEYBOARD EASTER EGG: press "c" to focus sin input if present ===
  function initKeyboard() {
    document.addEventListener('keydown', function(e) {
      if (e.key.toLowerCase() === 'c' && document.activeElement.tagName === 'BODY') {
        const sin = document.querySelector('.sin-terminal textarea');
        if (sin) {
          e.preventDefault();
          sin.focus();
          sin.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      if (e.key === '?' && document.activeElement.tagName === 'BODY') {
        e.preventDefault();
        const searchBtn = document.querySelector('.search-trigger');
        if (searchBtn) searchBtn.click();
      }
    });

    // subtle hint in console for the curious
    if (window.console) {
      console.log('%c[NEON CONFESSIONAL] Press C to confess. ? to search the archive.', 'color:#3a4a5a;font-family:monospace');
    }
  }

  // === INIT EVERYTHING ===
  function boot() {
    // Rain is always present once the shortcode renders the container
    initRain();

    // Re-init rain on resize (density)
    let resizeT;
    window.addEventListener('resize', function() {
      clearTimeout(resizeT);
      resizeT = setTimeout(initRain, 420);
    });

    initSinInputs();
    initPostTyping();
    initBoothNav();
    initKeyboard();

    // Gentle periodic flicker on the whole booth for "unstable holy signal"
    const booth = document.querySelector('.booth');
    if (booth) {
      setInterval(function() {
        if (Math.random() < 0.14) {
          booth.style.transitionDuration = '60ms';
          booth.style.opacity = '0.96';
          setTimeout(function() {
            booth.style.opacity = '1';
            booth.style.transitionDuration = '';
          }, 70);
        }
      }, 5200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose tiny API for advanced users / future shortcodes
  window.NEON_CONFESSIONAL = {
    initRain: initRain,
    typeText: typeText
  };
})();