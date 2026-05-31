/**
 * FUNERAL RAVE — Interactive Dance Floor
 * Subtle strobe, glitter explosions, bodies counter, lights-out moments,
 * low heartbeat sub-bass (Web Audio), tragic beauty.
 */
(function () {
  const CONFIG = {
    maxParticles: 68,
    lightsOutDuration: 1650,
    strobeFlashes: 3,
    bodyCountStart: 1247,
    bodyDecayChance: 0.014,
    heartbeatFreq: 46, // very low sub
  };

  let bodyCount = CONFIG.bodyCountStart;
  let audioCtx = null;
  let heartbeatOsc = null;
  let heartbeatGain = null;
  let heartbeatInterval = null;
  let isHeartbeatPlaying = false;

  // Utility: spawn a single glitter particle
  function spawnGlitter(x, y, container, count = 1) {
    if (!container) return;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'glitter';
      const size = Math.random() * 3.8 + 1.6;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = (x + (Math.random() - 0.5) * 38) + 'px';
      el.style.top = (y + (Math.random() - 0.5) * 26) + 'px';
      el.style.opacity = (0.55 + Math.random() * 0.45).toString();
      el.style.animationDuration = (1.45 + Math.random() * 2.8) + 's';
      el.style.setProperty('--delay', '-' + (Math.random() * 1.8).toFixed(2) + 's');

      container.appendChild(el);

      // Clean up
      setTimeout(() => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }, 5200);
    }
  }

  // Dying petal
  function spawnPetal(x, y, container) {
    if (!container) return;
    const petal = document.createElement('span');
    petal.className = 'petal';
    const w = 8 + Math.random() * 6;
    petal.style.width = w + 'px';
    petal.style.height = (w * 1.3) + 'px';
    petal.style.left = x + 'px';
    petal.style.top = y + 'px';
    petal.style.background = Math.random() > 0.6 ? '#46324f' : (Math.random() > 0.5 ? '#5c2a32' : '#3c2f35');
    petal.style.animationDuration = (4.1 + Math.random() * 3.9) + 's';
    petal.style.transform = `rotate(${Math.random() * 38 - 19}deg)`;

    container.appendChild(petal);
    setTimeout(() => petal.parentNode && petal.parentNode.removeChild(petal), 9200);
  }

  // Global strobe flash on the entire venue
  function triggerStrobe(flashes = CONFIG.strobeFlashes) {
    const body = document.body;
    let count = 0;

    const doFlash = () => {
      if (count >= flashes) {
        body.classList.remove('strobe');
        return;
      }
      body.classList.add('strobe');
      setTimeout(() => {
        body.classList.remove('strobe');
        count++;
        if (count < flashes) {
          setTimeout(doFlash, 68 + Math.random() * 55);
        }
      }, 78);
    };
    doFlash();
  }

  // The devastating "lights are about to go out" moment
  function lightsOutEvent(duration = CONFIG.lightsOutDuration) {
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:#000;opacity:0.92;z-index:9998;
      pointer-events:none;transition:opacity 220ms linear;
    `;
    document.body.appendChild(overlay);

    body.classList.add('lights-out');

    // Random additional strobe inside the darkness
    setTimeout(() => triggerStrobe(2), 210);

    setTimeout(() => {
      body.classList.remove('lights-out');
      overlay.style.opacity = '0';
      setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 260);
    }, duration);
  }

  // Update all visible body counters
  function updateBodyCounters() {
    document.querySelectorAll('.body-count, [data-body-count]').forEach(el => {
      const current = parseInt(el.textContent.replace(/[^0-9]/g, ''), 10) || bodyCount;
      if (current !== bodyCount) {
        el.textContent = bodyCount.toLocaleString();
      }
    });
  }

  function adjustBodyCount(delta) {
    bodyCount = Math.max(180, Math.min(2870, bodyCount + delta));
    updateBodyCounters();

    // Occasionally spawn petals when people "leave" the floor
    if (delta < 0 && Math.random() > 0.4) {
      const floor = document.getElementById('dancefloor-interactive');
      if (floor) {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            spawnPetal(
              60 + Math.random() * (floor.clientWidth - 120),
              30 + Math.random() * 90,
              floor
            );
          }, i * 80);
        }
      }
    }
  }

  // Create the interactive dance floor zone (if container exists)
  function initDancefloor() {
    const container = document.getElementById('dancefloor-interactive');
    if (!container) return;

    // Add instruction overlay
    const instr = document.createElement('div');
    instr.className = 'instruction';
    instr.innerHTML = 'MOVE • CLICK • PRESS <span class="kbd">D</span> <span class="kbd">L</span> <span class="kbd">M</span>';
    container.appendChild(instr);

    // Particle layer
    const particleLayer = document.createElement('div');
    particleLayer.className = 'glitter-container';
    particleLayer.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:4;overflow:hidden;';
    container.appendChild(particleLayer);

    // Mirrorball inside dancefloor (small decorative)
    const mb = document.createElement('div');
    mb.className = 'mirrorball';
    mb.style.cssText = 'position:absolute;top:22px;right:28px;width:64px;height:64px;transform:scale(0.64);opacity:0.75;pointer-events:none;';
    const ghost = document.createElement('div');
    ghost.className = 'ghost';
    mb.appendChild(ghost);
    container.appendChild(mb);

    // Mouse move → gentle glitter
    let lastMove = 0;
    container.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastMove < 38) return;
      lastMove = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.65) {
        spawnGlitter(x, y, particleLayer, 1);
      }
      if (Math.random() < 0.07) {
        spawnPetal(x + (Math.random()-0.5)*30, y - 10, particleLayer);
      }

      // subtle mirrorball follow
      const tiltX = ((e.clientX - rect.left) / rect.width - 0.5) * 9;
      mb.style.transform = `scale(0.64) rotate(${tiltX * 0.6}deg)`;
    });

    // Click = dramatic glitter + petal burst + soft strobe
    container.addEventListener('click', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spawnGlitter(x, y, particleLayer, 11);
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          spawnPetal(x + (Math.random()-0.5)*55, y + (Math.random()-0.5)*30, particleLayer);
        }, i * 35);
      }
      triggerStrobe(1);

      // Chance to lose another soul to the beat
      if (Math.random() < 0.22) {
        adjustBodyCount(-1);
      }
    });

    // Random "someone just collapsed into the music" every ~38 seconds
    setInterval(() => {
      if (document.hidden || !container.offsetParent) return;
      if (Math.random() < 0.38) {
        const rx = 40 + Math.random() * (container.clientWidth - 90);
        const ry = 50 + Math.random() * (container.clientHeight - 110);
        spawnPetal(rx, ry, particleLayer);
        spawnGlitter(rx, ry - 15, particleLayer, 2);
        adjustBodyCount(-1);
      }
    }, 38000);

    // Random very subtle strobe (tasteful, emotional)
    setInterval(() => {
      if (!document.hidden && Math.random() < 0.07) {
        triggerStrobe(1);
      }
    }, 26000);
  }

  // Global keyboard tragedy controls
  function initKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'd') {
        // Dance — massive glitter + casket pulse + bodies shift
        document.querySelectorAll('.casket').forEach((c, i) => {
          c.style.transitionDuration = '180ms';
          c.style.transform = `translateY(-${4 + Math.random() * 3}px) rotate(${(i % 2 ? 1.1 : -0.9)}deg)`;
          setTimeout(() => {
            c.style.transitionDuration = '';
            c.style.transform = '';
          }, 620);
        });
        const floor = document.getElementById('dancefloor-interactive');
        if (floor) {
          const rect = floor.getBoundingClientRect();
          for (let i = 0; i < 19; i++) {
            setTimeout(() => {
              spawnGlitter(
                30 + Math.random() * (rect.width - 60),
                40 + Math.random() * (rect.height - 80),
                floor.querySelector('.glitter-container'),
                1
              );
            }, i * 3);
          }
        }
        triggerStrobe(2);
        if (Math.random() < 0.5) adjustBodyCount(1);
      }

      if (e.key.toLowerCase() === 'l') {
        // Lights about to go out — the devastating moment
        lightsOutEvent();
        setTimeout(() => {
          const floor = document.getElementById('dancefloor-interactive');
          if (floor) {
            const layer = floor.querySelector('.glitter-container');
            for (let i = 0; i < 7; i++) spawnGlitter(90 + i * 38, 70 + (i % 3) * 30, layer, 2);
          }
        }, 720);
      }

      if (e.key.toLowerCase() === 'm') {
        toggleHeartbeat();
      }

      if (e.key === ' ' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const floor = document.getElementById('dancefloor-interactive');
        if (floor) {
          const layer = floor.querySelector('.glitter-container');
          const rect = floor.getBoundingClientRect();
          for (let i = 0; i < 26; i++) {
            spawnGlitter(
              Math.random() * rect.width,
              Math.random() * (rect.height * 0.7),
              layer,
              1
            );
          }
        }
        triggerStrobe(1);
      }

      if (e.key.toLowerCase() === '?') {
        // Easter egg: full last-call dramatic reveal
        const calls = document.querySelectorAll('.last-call');
        calls.forEach(c => {
          c.style.transition = 'all 280ms';
          c.style.boxShadow = '0 0 0 1px #d4af7a, 0 0 60px rgba(212,175,122,0.3)';
          setTimeout(() => {
            c.style.boxShadow = '';
          }, 1400);
        });
      }
    });

    // Hint in console for the dedicated
    console.log('%c[FUNERAL RAVE] Press D (dance), L (lights out), M (heartbeat), SPACE (glitter burst)', 'color:#66553e;font-size:9px');
  }

  // Web Audio — the last heartbeat of the world (very low sine)
  function toggleHeartbeat() {
    if (!audioCtx) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) { return; }
    }

    if (isHeartbeatPlaying) {
      // Stop
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      if (heartbeatGain) {
        heartbeatGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.9);
      }
      setTimeout(() => {
        if (heartbeatOsc) { heartbeatOsc.stop(); heartbeatOsc = null; }
        heartbeatGain = null;
        isHeartbeatPlaying = false;
      }, 980);
      return;
    }

    // Start deep sub bass heartbeat
    heartbeatOsc = audioCtx.createOscillator();
    heartbeatOsc.type = 'sine';
    heartbeatOsc.frequency.value = CONFIG.heartbeatFreq;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 92;

    heartbeatGain = audioCtx.createGain();
    heartbeatGain.gain.value = 0.0001;

    const compressor = audioCtx.createDynamicsCompressor();

    heartbeatOsc.connect(filter);
    filter.connect(heartbeatGain);
    heartbeatGain.connect(compressor);
    compressor.connect(audioCtx.destination);

    heartbeatOsc.start();

    isHeartbeatPlaying = true;

    let phase = 0;
    heartbeatInterval = setInterval(() => {
      if (!heartbeatGain || !audioCtx) return;
      const now = audioCtx.currentTime;
      const target = phase % 2 === 0 ? 0.065 : 0.014;
      heartbeatGain.gain.cancelScheduledValues(now);
      heartbeatGain.gain.linearRampToValueAtTime(target, now + 0.04);
      heartbeatGain.gain.linearRampToValueAtTime(0.0008, now + 0.82);
      phase++;
    }, 980);
  }

  // Initialize all the tragic little systems
  function init() {
    // Seed initial body count displays
    document.querySelectorAll('.body-count').forEach(el => {
      el.textContent = bodyCount.toLocaleString();
    });

    // Random slow body attrition (people who danced too hard)
    setInterval(() => {
      if (Math.random() < CONFIG.bodyDecayChance) {
        adjustBodyCount(-1);
      }
    }, 41000);

    // Very rare full lights-out moment (emotional punctuation)
    setTimeout(() => {
      if (!document.hidden && Math.random() < 0.21) {
        lightsOutEvent(980);
      }
    }, 54000);

    initDancefloor();
    initKeyboardControls();

    // Gentle initial glitter on hero mirrorballs
    setTimeout(() => {
      document.querySelectorAll('.mirrorball').forEach(mb => {
        const layer = mb.parentElement;
        if (layer) {
          const rect = mb.getBoundingClientRect();
          const parentRect = layer.getBoundingClientRect();
          spawnGlitter(
            rect.left - parentRect.left + 30,
            rect.top - parentRect.top + 40,
            layer.querySelector('.glitter-container') || layer,
            4
          );
        }
      });
    }, 1200);

    // Allow clicking any casket to trigger a personal strobe + loss
    document.querySelectorAll('.casket').forEach(casket => {
      casket.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'A') return; // don't steal links
        triggerStrobe(2);
        adjustBodyCount(-1);
        const layer = casket.querySelector('.glitter-container') || casket;
        const r = casket.getBoundingClientRect();
        spawnGlitter(28, 22, layer, 6);
        spawnPetal(70, 18, layer);
      });
    });

    // Expose a tiny API for the curious (open console)
    window.FUNERAL_RAVE = {
      strobe: triggerStrobe,
      lightsOut: lightsOutEvent,
      dance: () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'd' })),
      toggleHeartbeat,
      loseSoul: () => adjustBodyCount(-1),
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();