/**
 * REQUIEM / GRID — JS
 * Subtle, reverent interactions for the vigil.
 * - Candle state cycling on soul cards (lit → flicker → mourned)
 * - Chorus candles mirror the fallen souls
 * - Global health recalculation
 * - M key triggers the requiem overlay moment
 * - Procedural memorial wall of 90 prayer beads
 */

(() => {
  'use strict';

  const STATE_CYCLE = ['lit', 'flicker', 'mourned'];
  const STATE_LABELS = {
    lit: 'Intact',
    flicker: 'Flickering',
    mourned: 'Fallen Silent'
  };

  let souls = []; // { card, candle, index, state }
  let chorusCandles = [];
  let healthEl = null;
  let overlay = null;
  let requiemActive = false;

  function getStateIndex(state) {
    return STATE_CYCLE.indexOf(state);
  }

  function cycleState(current) {
    const idx = getStateIndex(current);
    return STATE_CYCLE[(idx + 1) % STATE_CYCLE.length];
  }

  function applyCandleState(candleEl, state) {
    if (!candleEl) return;
    candleEl.classList.remove('vigil-lit', 'vigil-flicker', 'vigil-mourned');
    // Map to CSS classes used in stylesheet
    if (state === 'lit') {
      candleEl.classList.add('vigil-lit');
    } else if (state === 'flicker') {
      candleEl.classList.add('vigil-flicker');
    } else {
      candleEl.classList.add('vigil-mourned');
    }
  }

  function updateSoulUI(soul) {
    if (!soul.card) return;
    soul.card.dataset.state = soul.state;

    const statusEl = soul.card.querySelector('.soul-status');
    if (statusEl) {
      statusEl.textContent = STATE_LABELS[soul.state];
    }

    // Sync matching chorus candle if present
    const chorus = chorusCandles.find(c => parseInt(c.dataset.soulIndex, 10) === soul.index);
    if (chorus) {
      applyCandleState(chorus, soul.state);
    }
  }

  function calculateHealth() {
    if (!souls.length) return 100;
    let total = 0;
    souls.forEach(s => {
      if (s.state === 'lit') total += 1;
      else if (s.state === 'flicker') total += 0.5;
      // mourned = 0
    });
    return Math.round((total / souls.length) * 100);
  }

  function updateGlobalHealth() {
    if (!healthEl) return;
    const pct = calculateHealth();
    healthEl.textContent = pct + '%';
    // Subtle color shift on low health
    if (pct < 45) {
      healthEl.style.color = '#8a3f3f';
    } else if (pct < 72) {
      healthEl.style.color = '#a67c3d';
    } else {
      healthEl.style.color = 'var(--accent-gold)';
    }
  }

  function toggleSoulState(soul) {
    soul.state = cycleState(soul.state);
    applyCandleState(soul.candle, soul.state);
    updateSoulUI(soul);
    updateGlobalHealth();
  }

  function attachSoulListeners() {
    souls.forEach(soul => {
      if (!soul.card || !soul.candle) return;

      // Whole card is clickable for the vigil
      soul.card.addEventListener('click', (e) => {
        // Avoid triggering if somehow nested interactive but none here
        e.preventDefault();
        toggleSoulState(soul);
      });

      // Keyboard support on focused card (tab friendly)
      soul.card.setAttribute('tabindex', '0');
      soul.card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSoulState(soul);
        }
      });

      // Subtle lift hint on candle hover inside card
      soul.candle.addEventListener('mouseenter', () => {
        soul.card.style.transform = 'translateY(-1px)';
      });
      soul.candle.addEventListener('mouseleave', () => {
        soul.card.style.transform = '';
      });
    });
  }

  function initSouls() {
    const cards = Array.from(document.querySelectorAll('.soul-card'));
    souls = cards.map((card, index) => {
      const candle = card.querySelector('.vigil-candle');
      // Read initial state from data attribute or default to lit
      let initial = card.dataset.initialState || 'lit';
      if (!STATE_CYCLE.includes(initial)) initial = 'lit';

      const soul = {
        card,
        candle,
        index,
        state: initial
      };

      // Apply initial visual state
      applyCandleState(candle, soul.state);
      updateSoulUI(soul);

      return soul;
    });

    attachSoulListeners();
  }

  function initChorus() {
    chorusCandles = Array.from(document.querySelectorAll('.chorus-vigils .vigil-candle'));
    // Chorus candles are read-only visual mirrors. They get initial state from matching soul later.
    // Initial sync happens after souls init via updateGlobalHealth + updateSoulUI calls
  }

  function generateMemorialWall() {
    const wall = document.getElementById('memorial-wall');
    if (!wall) return;

    wall.innerHTML = '';

    const TOTAL = 90;
    // Poetic distribution: mostly intact, several cracked, a few breaches
    // Pattern chosen for visual rhythm and slight asymmetry (human)
    const breachDays = [14, 41, 67]; // three solemn breaches
    const crackedDays = new Set([
      6, 7, 19, 28, 29, 33, 48, 55, 56, 71, 79, 84
    ]);

    for (let i = 0; i < TOTAL; i++) {
      const bead = document.createElement('div');
      bead.className = 'tally-bead';

      const day = i + 1;

      if (breachDays.includes(day)) {
        bead.classList.add('breach');
        bead.title = `Day ${day} — A breach in the dark`;
      } else if (crackedDays.has(day)) {
        bead.classList.add('cracked');
        bead.title = `Day ${day} — Cracked. Vigil held.`;
      } else {
        bead.title = `Day ${day} — The flame endured`;
      }

      wall.appendChild(bead);
    }
  }

  function initRequiemOverlay() {
    overlay = document.getElementById('requiem-overlay');
    if (!overlay) return;

    // Create the beautiful overlay content once
    if (!overlay.querySelector('.phrase')) {
      overlay.innerHTML = `
        <div class="phrase" aria-live="polite">
          REQUIEM ÆTERNAM DONA EIS, DOMINE
          <span class="sub">ET LUX PERPETUA LUCEAT EIS</span>
        </div>
      `;
    }

    // Global keyboard handler — M for mournful moment
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'm' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        toggleRequiemMoment();
      }
      if (requiemActive && (e.key === 'Escape' || e.key.toLowerCase() === 'm')) {
        e.preventDefault();
        hideRequiemMoment();
      }
    });

    // Click overlay to dismiss (elegant)
    overlay.addEventListener('click', hideRequiemMoment);
  }

  function toggleRequiemMoment() {
    if (requiemActive) {
      hideRequiemMoment();
    } else {
      showRequiemMoment();
    }
  }

  function showRequiemMoment() {
    if (!overlay) return;
    document.body.classList.add('requiem-dimmed');
    overlay.classList.add('visible');
    requiemActive = true;

    // Subtle auto-dismiss after long contemplation (18s)
    clearTimeout(window.__requiemTimer);
    window.__requiemTimer = setTimeout(() => {
      if (requiemActive) hideRequiemMoment();
    }, 18000);
  }

  function hideRequiemMoment() {
    if (!overlay) return;
    overlay.classList.remove('visible');
    // Allow fade out before removing dim
    setTimeout(() => {
      document.body.classList.remove('requiem-dimmed');
      requiemActive = false;
    }, 260);
    clearTimeout(window.__requiemTimer);
  }

  function seedInitialChorusStates() {
    // Sync chorus to whatever souls currently are
    souls.forEach(soul => {
      const chorus = chorusCandles.find(c => parseInt(c.dataset.soulIndex, 10) === soul.index);
      if (chorus) {
        applyCandleState(chorus, soul.state);
      }
    });
    updateGlobalHealth();
  }

  function addHeroInteractions() {
    // Optional dramatic buttons in hero (purely visual + state affecting)
    const lightAll = document.getElementById('light-all-vigils');
    const mournAll = document.getElementById('mourn-all-vigils');

    if (lightAll) {
      lightAll.addEventListener('click', () => {
        souls.forEach(s => {
          s.state = 'lit';
          applyCandleState(s.candle, s.state);
          updateSoulUI(s);
        });
        updateGlobalHealth();
      });
    }

    if (mournAll) {
      mournAll.addEventListener('click', () => {
        souls.forEach(s => {
          s.state = 'mourned';
          applyCandleState(s.candle, s.state);
          updateSoulUI(s);
        });
        updateGlobalHealth();
      });
    }

    // Clicking the chorus area itself cycles a random soul (poetic surprise)
    const chorusWrap = document.querySelector('.chorus-vigils');
    if (chorusWrap) {
      chorusWrap.addEventListener('click', (e) => {
        // Only if not clicking a candle directly (those are mirrors)
        if (e.target.closest('.vigil-candle')) return;
        if (souls.length === 0) return;

        const random = souls[Math.floor(Math.random() * souls.length)];
        toggleSoulState(random);
      });
    }
  }

  function init() {
    // Core inits
    initSouls();
    initChorus();
    generateMemorialWall();
    initRequiemOverlay();
    seedInitialChorusStates();
    addHeroInteractions();

    // Gentle initial health display
    updateGlobalHealth();

    // Easter egg: press "?" shows how many souls are currently mourned in console (for the curious)
    document.addEventListener('keydown', (e) => {
      if (e.key === '?') {
        const mourned = souls.filter(s => s.state === 'mourned').length;
        console.log(`%c[REQUIEM/GRID] ${mourned} souls currently rest in silence.`, 'color:#5c564f;font-family:monospace');
      }
    });

    // Mark ready for any future observers
    document.documentElement.classList.add('requiem-ready');
  }

  // Boot when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
