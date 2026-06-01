/* ==========================================================================
   ASHEN CONSOLE — Interactions (pure visual, 1986 bunker terminal)
   ========================================================================== */

(function () {
  const body = document.body;
  let alarmMode = false;
  let currentFallout = 47;

  // Fake military time
  function updateClock() {
    const timeEl = document.getElementById('bunker-time');
    if (!timeEl) return;

    setInterval(() => {
      const now = new Date();
      // Freeze to 1986 vibe but advance minutes
      const h = String((now.getHours() + 7) % 24).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      timeEl.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }

  // Main analog gauge needle control
  function setGauge(level) {
    const needle = document.getElementById('gauge-needle');
    const readout = document.getElementById('fallout-readout');
    if (!needle) return;

    // Map 0-100 to roughly -52deg (low) to +52deg (extreme)
    const minAngle = -52;
    const maxAngle = 52;
    const angle = minAngle + ((level / 100) * (maxAngle - minAngle));

    // Store current angle for alarm twitch animation
    needle.style.setProperty('--angle', angle + 'deg');
    needle.style.transform = `rotate(${angle}deg)`;

    if (readout) {
      readout.textContent = String(Math.floor(level)).padStart(2, '0');
    }

    // Color shift on high levels
    const header = document.querySelector('.fallout-header .level');
    if (header) {
      if (level > 72) {
        header.style.color = '#ff6b5a';
        header.style.textShadow = '0 0 12px #ff6b5a, 0 0 2px #000';
      } else {
        header.style.color = '';
        header.style.textShadow = '';
      }
    }

    currentFallout = level;
  }

  function randomizeGauge() {
    const newLevel = Math.floor(12 + Math.random() * 82);
    const needle = document.getElementById('gauge-needle');
    if (needle) {
      needle.style.transition = 'transform 620ms cubic-bezier(0.22, 0.98, 0.25, 0.99)';
    }
    setGauge(newLevel);

    // Revert transition after animation
    setTimeout(() => {
      if (needle) needle.style.transition = 'transform 420ms cubic-bezier(0.23, 1, 0.32, 1)';
    }, 650);

    // Occasionally bump one subsystem on high
    if (newLevel > 68 && Math.random() > 0.6) {
      const randomSub = document.querySelector('.subsystem:not(.fault)');
      if (randomSub) {
        const lever = randomSub.querySelector('.toggle-lever');
        if (lever && lever.classList.contains('on')) {
          flipToggle(lever, true); // force off
        }
      }
    }
  }

  // Toggle lever handler
  function flipToggle(lever, forceOff = false) {
    const subsystem = lever.closest('.subsystem');
    const isOn = lever.classList.contains('on');
    const newState = forceOff ? false : !isOn;

    if (newState) {
      lever.classList.add('on');
    } else {
      lever.classList.remove('on');
    }

    // Update visuals inside this subsystem module
    const dot = subsystem.querySelector('.led-dot');
    const status = subsystem.querySelector('.subsystem-status');

    if (subsystem.classList.contains('fault')) {
      // Faulted subsystems stay broken looking
      if (dot) dot.className = 'led-dot fault';
      if (status) status.textContent = 'CRITICAL — MANUAL OVERRIDE ONLY';
      return;
    }

    if (newState) {
      if (dot) dot.className = 'led-dot on';
      if (status) status.textContent = 'OPERATIONAL';
      subsystem.style.background = '';
    } else {
      if (dot) dot.className = 'led-dot off';
      if (status) status.textContent = 'STANDBY — OFFLINE';
      subsystem.style.background = 'linear-gradient(#17130f, #13100d)';
    }

    // Influence global fallout reading slightly when toggling major systems
    const label = subsystem.querySelector('.subsystem-label');
    if (label && !forceOff) {
      const name = label.textContent.trim().toUpperCase();
      let delta = 0;
      if (name.includes('AIR') || name.includes('CORE')) delta = newState ? -4 : 7;
      else if (name.includes('POWER') || name.includes('COOLING')) delta = newState ? -3 : 5;
      else delta = newState ? -1 : 3;

      const next = Math.max(8, Math.min(94, currentFallout + delta));
      setGauge(next);
    }
  }

  function initToggles() {
    document.querySelectorAll('.toggle-lever').forEach(lever => {
      // Click anywhere on lever housing flips
      lever.addEventListener('click', (e) => {
        // Prevent bubbling weirdness
        flipToggle(lever);
      });

      // Keyboard accessibility (space/enter)
      lever.setAttribute('tabindex', '0');
      lever.setAttribute('role', 'switch');
      lever.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          flipToggle(lever);
        }
      });

      // Initial state sync for faulted ones
      const sub = lever.closest('.subsystem');
      if (sub && sub.classList.contains('fault')) {
        const dot = sub.querySelector('.led-dot');
        const status = sub.querySelector('.subsystem-status');
        if (dot) dot.className = 'led-dot fault';
        if (status) status.textContent = 'CRITICAL — MANUAL OVERRIDE ONLY';
      }
    });
  }

  // ALARM MODE (press R)
  function toggleAlarm(force) {
    alarmMode = (typeof force === 'boolean') ? force : !alarmMode;
    body.classList.toggle('alarm', alarmMode);

    const hint = document.querySelector('.alarm-hint');
    if (hint) {
      hint.textContent = alarmMode ? 'SILENCE ALARM [R]' : 'PRESS R FOR RADIATION ALARM';
      hint.style.borderColor = alarmMode ? '#ff6b5a' : '';
      hint.style.color = alarmMode ? '#ff6b5a' : '';
    }

    // On alarm, push fallout higher temporarily
    if (alarmMode) {
      const elevated = Math.min(93, currentFallout + 19);
      setGauge(elevated);

      // Force a couple more systems into bad state visually
      const onLevers = Array.from(document.querySelectorAll('.toggle-lever.on'));
      onLevers.slice(0, 2).forEach(l => {
        setTimeout(() => flipToggle(l, true), 90);
      });
    } else {
      // Calm down — restore a reasonable level
      const calm = Math.max(31, currentFallout - 22);
      setGauge(calm);
    }
  }

  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'r' && !e.metaKey && !e.ctrlKey) {
        // Ignore if typing in an input (none here)
        toggleAlarm();
      }
      if (e.key === '?') {
        // Easter egg: full random chaos
        randomizeGauge();
        document.querySelectorAll('.toggle-lever').forEach((l, i) => {
          setTimeout(() => flipToggle(l, Math.random() > 0.55), i * 60);
        });
      }
    });

    // Clickable hint also triggers
    const hint = document.querySelector('.alarm-hint');
    if (hint) {
      hint.addEventListener('click', () => toggleAlarm());
    }
  }

  function initControls() {
    // RECALIBRATE button (main gauge)
    const recal = document.getElementById('btn-recalibrate');
    if (recal) {
      recal.addEventListener('click', () => {
        recal.style.transition = 'none';
        recal.style.transform = 'translateY(1px)';
        setTimeout(() => {
          recal.style.transition = '';
          recal.style.transform = '';
        }, 80);
        randomizeGauge();
      });
    }

    // RESET PROTOCOL
    const reset = document.getElementById('btn-reset');
    if (reset) {
      reset.addEventListener('click', () => {
        // Reset gauge
        setGauge(47);

        // Reset all toggles to mostly operational
        document.querySelectorAll('.subsystem').forEach((sub, idx) => {
          const lever = sub.querySelector('.toggle-lever');
          const dot = sub.querySelector('.led-dot');
          const status = sub.querySelector('.subsystem-status');

          if (!lever) return;

          const shouldBeOn = !sub.classList.contains('fault') && idx % 3 !== 0;

          if (shouldBeOn) {
            lever.classList.add('on');
            if (dot) dot.className = 'led-dot on';
            if (status) status.textContent = 'OPERATIONAL';
            sub.style.background = '';
          } else {
            lever.classList.remove('on');
            if (dot) dot.className = 'led-dot off';
            if (status) status.textContent = 'STANDBY — OFFLINE';
            sub.style.background = 'linear-gradient(#17130f, #13100d)';
          }
        });

        // Exit alarm if active
        if (alarmMode) toggleAlarm(false);
      });
    }

    // ENGAGE ASHEN PROTOCOL (fun chaos button)
    const engage = document.getElementById('btn-engage');
    if (engage) {
      engage.addEventListener('click', () => {
        setGauge(81 + Math.random() * 12);

        document.querySelectorAll('.toggle-lever').forEach((lever, i) => {
          const sub = lever.closest('.subsystem');
          if (sub && sub.classList.contains('fault')) return;

          // 55% chance of shutting down
          const turnOff = Math.random() < 0.55;
          if (turnOff && lever.classList.contains('on')) {
            setTimeout(() => flipToggle(lever, true), i * 55);
          }
        });

        // Enter alarm automatically
        setTimeout(() => {
          if (!alarmMode) toggleAlarm(true);
        }, 420);
      });
    }
  }

  // Small random LED flicker on certain displays (burnt look)
  function initLEDFlicker() {
    const displays = document.querySelectorAll('.led-display.burnt');
    setInterval(() => {
      displays.forEach(d => {
        if (Math.random() < 0.12) {
          d.style.opacity = '0.82';
          setTimeout(() => { d.style.opacity = '1'; }, 110);
        }
      });
    }, 1600);
  }

  // Initial state bootstrap
  function bootstrapInitialState() {
    // Gauge starts at 47
    const needle = document.getElementById('gauge-needle');
    if (needle) {
      needle.style.transition = 'none';
      setGauge(47);
      // force reflow then enable transition
      requestAnimationFrame(() => {
        if (needle) needle.style.transition = 'transform 420ms cubic-bezier(0.23, 1, 0.32, 1)';
      });
    }

    // Make sure initial toggles match their HTML state
    document.querySelectorAll('.toggle-lever').forEach(lever => {
      const sub = lever.closest('.subsystem');
      const dot = sub && sub.querySelector('.led-dot');
      const status = sub && sub.querySelector('.subsystem-status');

      if (sub && sub.classList.contains('fault')) {
        lever.classList.remove('on'); // stays visually broken
        if (dot) dot.className = 'led-dot fault';
        if (status) status.textContent = 'CRITICAL — MANUAL OVERRIDE ONLY';
      } else if (lever.classList.contains('on')) {
        if (dot) dot.className = 'led-dot on';
        if (status) status.textContent = 'OPERATIONAL';
      } else {
        if (dot) dot.className = 'led-dot off';
        if (status) status.textContent = 'STANDBY — OFFLINE';
      }
    });

    // Initial deposition bars widths from data attrs or static
    document.querySelectorAll('.deposition-bar .fill').forEach(bar => {
      const w = bar.getAttribute('data-width');
      if (w) bar.style.width = w + '%';
    });
  }

  // Boot everything
  function init() {
    updateClock();
    initToggles();
    initKeyboard();
    initControls();
    initLEDFlicker();
    bootstrapInitialState();

    // Gentle idle flicker of fallout every 38s
    setInterval(() => {
      if (!alarmMode && Math.random() < 0.38) {
        const drift = currentFallout + (Math.random() * 5 - 2.5);
        setGauge(Math.max(18, Math.min(79, Math.floor(drift))));
      }
    }, 38000);

    // Easter egg hint in console
    console.log('%c[ASHEN CONSOLE] Press R for radiation alarm. ? for chaos mode.', 'color:#665f50');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();