/* ============================================
   TOMBSTONE / HUD — Interactive JS
   Bounty hunts, BOLO alerts, live sheriff log
   ============================================ */

(function () {
  'use strict';

  // Service data — the wanted posters
  let services = [
    {
      id: 'marshal',
      name: 'THE MARSHAL',
      subtitle: 'Hwaro Core',
      bounty: 99.97,
      status: 'OPERATIONAL',
      icon: 'marshal'
    },
    {
      id: 'blacksmith',
      name: 'THE BLACKSMITH',
      subtitle: 'Content Processor',
      bounty: 100.00,
      status: 'OPERATIONAL',
      icon: 'blacksmith'
    },
    {
      id: 'barkeep',
      name: 'THE BARKEEP',
      subtitle: 'Template Engine',
      bounty: 98.42,
      status: 'OUTLAWED',
      icon: 'barkeep'
    },
    {
      id: 'scout',
      name: 'THE SCOUT',
      subtitle: 'Asset CDN & Delivery',
      bounty: 99.89,
      status: 'OPERATIONAL',
      icon: 'scout'
    },
    {
      id: 'judge',
      name: 'THE JUDGE',
      subtitle: 'Deployment Pipeline',
      bounty: 94.76,
      status: 'OUTLAWED',
      icon: 'judge'
    },
    {
      id: 'ghost',
      name: 'THE GHOST',
      subtitle: 'Search & Indexer',
      bounty: 87.31,
      status: 'DECEASED',
      icon: 'ghost'
    }
  ];

  // 90-day log data (true = up, false = incident)
  let log90 = Array.from({ length: 90 }, (_, i) => {
    // Seed some dramatic incidents
    if (i === 71 || i === 72 || i === 73) return false; // cluster
    if (i === 44) return false;
    if (i === 18) return false;
    if (i === 84) return false;
    return true;
  });

  // Dramatic incident log
  let incidents = [
    "14:17 — THE GHOST drew first. Indexer crashed hard. Posse recovered 3 shards.",
    "11:03 — THE JUDGE refused to sign off. Pipeline hung at 4:17pm. Bounty reduced.",
    "09:41 — THE BARKEEP served rotgut templates. 7 pages rendered as blank warrants.",
    "02:11 — THE GHOST went missing in action. 14 queries presumed lost in the badlands."
  ];

  const INCIDENT_TEMPLATES = [
    "THE {name} fired on the main rail. Response time 480ms. Suspect cornered.",
    "{name} went dark for 41s. High noon shootout averted by emergency deputies.",
    "Rogue memory leak reported in {name}. Posse deployed with silver bullets.",
    "{name} printed 200 blank pages. Reward poster reprinted in blood red ink.",
    "THE {name} tried to escape to the hills. Uptime bounty temporarily lowered."
  ];

  function getIconSVG(type) {
    const common = `fill="#1f1a17" stroke="#3c2f2f" stroke-width="1.6"`;
    if (type === 'marshal') {
      // Sheriff star / badge
      return `<svg viewBox="0 0 100 100" class="poster-icon"><path d="M50 8 L61 35 L90 38 L68 58 L75 86 L50 72 L25 86 L32 58 L10 38 L39 35 Z" fill="#3c2f2f"/><circle cx="50" cy="50" r="18" fill="#e8d9b8"/><circle cx="50" cy="50" r="9" fill="#3c2f2f"/><text x="50" y="54" font-size="11" text-anchor="middle" fill="#e8d9b8" font-family="Impact">★</text></svg>`;
    }
    if (type === 'blacksmith') {
      // Anvil / hammer
      return `<svg viewBox="0 0 100 100" class="poster-icon"><rect x="18" y="38" width="64" height="22" rx="2" fill="#3c2f2f"/><rect x="44" y="18" width="12" height="28" fill="#3c2f2f"/><rect x="29" y="60" width="42" height="8" fill="#3c2f2f"/><path d="M20 68 L80 68" stroke="#3c2f2f" stroke-width="7"/></svg>`;
    }
    if (type === 'barkeep') {
      // Bottle + glass
      return `<svg viewBox="0 0 100 100" class="poster-icon"><rect x="38" y="12" width="24" height="16" rx="2" fill="#3c2f2f"/><rect x="42" y="26" width="16" height="46" fill="#3c2f2f"/><rect x="35" y="68" width="30" height="9" fill="#3c2f2f"/><circle cx="70" cy="54" r="11" fill="#e8d9b8" stroke="#3c2f2f" stroke-width="4"/></svg>`;
    }
    if (type === 'scout') {
      // Binoculars / horse
      return `<svg viewBox="0 0 100 100" class="poster-icon"><circle cx="30" cy="44" r="16" fill="#e8d9b8" stroke="#3c2f2f" stroke-width="5"/><circle cx="70" cy="44" r="16" fill="#e8d9b8" stroke="#3c2f2f" stroke-width="5"/><rect x="46" y="36" width="8" height="16" fill="#3c2f2f"/><path d="M22 58 Q50 82 78 58" fill="none" stroke="#3c2f2f" stroke-width="7"/></svg>`;
    }
    if (type === 'judge') {
      // Gavel
      return `<svg viewBox="0 0 100 100" class="poster-icon"><rect x="14" y="44" width="58" height="14" rx="2" fill="#3c2f2f" transform="rotate(-33 42 51)"/><rect x="62" y="54" width="24" height="8" fill="#3c2f2f"/><circle cx="23" cy="72" r="11" fill="#e8d9b8" stroke="#3c2f2f" stroke-width="5"/></svg>`;
    }
    // Ghost
    return `<svg viewBox="0 0 100 100" class="poster-icon"><path d="M25 28 Q25 12 50 12 Q75 12 75 28 L75 68 Q75 82 63 86 Q50 78 37 86 Q25 82 25 68 Z" fill="#e8d9b8" stroke="#3c2f2f" stroke-width="5"/><circle cx="37" cy="42" r="5" fill="#3c2f2f"/><circle cx="63" cy="42" r="5" fill="#3c2f2f"/><path d="M32 58 Q50 66 68 58" fill="none" stroke="#3c2f2f" stroke-width="4"/></svg>`;
  }

  function getStatusClass(status) {
    if (status === 'OPERATIONAL') return 'status-operational';
    if (status === 'OUTLAWED') return 'status-outlawed';
    return 'status-deceased';
  }

  // Render all wanted posters
  function renderPosters() {
    const container = document.getElementById('posters-grid');
    if (!container) return;

    container.innerHTML = '';

    services.forEach(svc => {
      const poster = document.createElement('div');
      poster.className = 'wanted-poster';
      poster.dataset.id = svc.id;

      poster.innerHTML = `
        <div class="poster-header">WANTED</div>
        <div class="poster-name">${svc.name}</div>
        <div class="poster-subtitle">${svc.subtitle}</div>
        <div class="poster-icon-wrap">${getIconSVG(svc.icon)}</div>
        <div class="poster-bounty">
          <span class="label">BOUNTY</span>
          <div class="value">${svc.bounty.toFixed(2)}%</div>
        </div>
        <div class="poster-status">
          <span class="status-stamp ${getStatusClass(svc.status)}">${svc.status}</span>
        </div>
      `;

      // Click = Bounty Hunt
      poster.addEventListener('click', () => triggerBountyHunt(svc.id, poster));

      container.appendChild(poster);
    });
  }

  // Dramatic bounty hunt action
  function triggerBountyHunt(id, posterEl) {
    const svcIndex = services.findIndex(s => s.id === id);
    if (svcIndex === -1) return;

    const svc = services[svcIndex];

    // Visual flash
    posterEl.classList.add('hunted');
    setTimeout(() => posterEl.classList.remove('hunted'), 900);

    // Temporary dramatic change
    const originalStatus = svc.status;
    const originalBounty = svc.bounty;

    // "Hunt" effect: slight improvement or chaos
    if (svc.status === 'DECEASED') {
      svc.status = 'OUTLAWED';
      svc.bounty = Math.min(94.5, svc.bounty + 6.8);
    } else if (svc.status === 'OUTLAWED') {
      svc.status = 'OPERATIONAL';
      svc.bounty = Math.min(99.4, svc.bounty + 1.9);
    } else {
      // Already operational: "bonus round"
      svc.bounty = Math.min(99.99, svc.bounty + 0.3);
    }

    // Re-render just this poster quickly
    const newPoster = posterEl.cloneNode(false);
    newPoster.className = 'wanted-poster hunted';
    newPoster.dataset.id = svc.id;
    newPoster.innerHTML = `
      <div class="poster-header">WANTED</div>
      <div class="poster-name">${svc.name}</div>
      <div class="poster-subtitle">${svc.subtitle}</div>
      <div class="poster-icon-wrap">${getIconSVG(svc.icon)}</div>
      <div class="poster-bounty">
        <span class="label">BOUNTY</span>
        <div class="value">${svc.bounty.toFixed(2)}%</div>
      </div>
      <div class="poster-status">
        <span class="status-stamp ${getStatusClass(svc.status)}">${svc.status}</span>
      </div>
    `;

    posterEl.parentNode.replaceChild(newPoster, posterEl);

    // Toast message
    showHuntToast(svc);

    // Re-attach click handler to new element
    newPoster.addEventListener('click', () => triggerBountyHunt(svc.id, newPoster));

    // After 4.2s revert to "real" state (mostly)
    setTimeout(() => {
      // Restore with minor permanent "improvement" to keep it fun
      svc.bounty = Math.min(99.99, originalBounty + (Math.random() * 0.6));
      svc.status = originalStatus;

      // Re-render full grid to clean state
      renderPosters();
      updateOverallStatus();
    }, 4200);
  }

  function showHuntToast(svc) {
    const toast = document.getElementById('hunt-toast');
    if (!toast) return;

    const lines = [
      `POSSE DISPATCHED ON ${svc.name.toUpperCase()}`,
      `BOUNTY ADJUSTED — ${svc.bounty.toFixed(2)}%`,
      `SUBJECT APPREHENDED. TEMPORARY AMNESTY GRANTED.`
    ];

    toast.innerHTML = lines.map(l => `<div>${l}</div>`).join('');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2650);
  }

  // Render sheriff 90-day log bars
  function renderSheriffLog() {
    const container = document.getElementById('log-bars');
    if (!container) return;

    container.innerHTML = '';

    log90.forEach((up, index) => {
      const bar = document.createElement('div');
      bar.className = 'log-bar' + (up ? '' : ' broken');
      bar.title = `Day ${index + 1} — ${up ? 'ALL CLEAR' : 'HIGH NOON INCIDENT'}`;

      // Click a bar = investigate that day
      bar.addEventListener('click', () => {
        investigateDay(index + 1, !up);
      });

      container.appendChild(bar);
    });
  }

  function investigateDay(day, wasBroken) {
    const msg = wasBroken
      ? `DAY ${day} — RECORDS SHOW A HIGH NOON SHOOTOUT. THE POSSE PREVAILED.`
      : `DAY ${day} — QUIET IN THE TERRITORY. ALL DEPUTIES ACCOUNTED FOR.`;

    const toast = document.getElementById('hunt-toast');
    if (toast) {
      toast.innerHTML = `<div>${msg}</div>`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }
  }

  // Render incidents
  function renderIncidents() {
    const list = document.getElementById('incident-list');
    if (!list) return;

    list.innerHTML = incidents.map(inc => {
      const sev = inc.includes('GHOST') || inc.includes('crashed') ? 'sev-high' : 'sev-med';
      return `<div class="incident"><span class="time">[${new Date().getFullYear()}]</span> <span class="${sev}">${inc}</span></div>`;
    }).join('');
  }

  function addNewIncident() {
    const list = document.getElementById('incident-list');
    if (!list) return;

    const rand = Math.floor(Math.random() * services.length);
    const svcName = services[rand].name;

    const template = INCIDENT_TEMPLATES[Math.floor(Math.random() * INCIDENT_TEMPLATES.length)];
    const newIncident = template.replace('{name}', svcName);

    incidents.unshift(newIncident);
    if (incidents.length > 7) incidents.pop();

    // Visual refresh
    renderIncidents();

    // Also slightly damage the 90-day log (last few days)
    const lastIdx = log90.length - 1 - Math.floor(Math.random() * 4);
    if (log90[lastIdx]) {
      log90[lastIdx] = false;
      renderSheriffLog();
    }

    // Toast
    const toast = document.getElementById('hunt-toast');
    if (toast) {
      toast.innerHTML = `<div>NEW POSSE REPORT FILED</div>`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1400);
    }
  }

  // Overall status
  function updateOverallStatus() {
    const el = document.getElementById('overall-status-value');
    if (!el) return;

    const operational = services.filter(s => s.status === 'OPERATIONAL').length;
    const total = services.length;

    let label = 'ALIVE';
    let color = 'var(--phosphor)';

    if (operational === total) {
      label = 'ALIVE';
    } else if (operational >= total - 1) {
      label = 'WOUNDED';
      color = 'var(--amber)';
    } else {
      label = 'WANTED';
      color = 'var(--blood)';
    }

    el.textContent = label;
    el.style.color = color;
    el.style.textShadow = (label === 'ALIVE') ? '0 0 8px var(--phosphor)' : 'none';
  }

  // BOLO overlay
  function setupBOLO() {
    const overlay = document.getElementById('bolo-overlay');
    if (!overlay) return;

    const closeOverlay = () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Close handlers
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeOverlay();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'escape' && overlay.classList.contains('active')) {
        closeOverlay();
      }
    });

    // Buttons inside
    const btns = overlay.querySelectorAll('.bolo-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.action === 'ack') {
          closeOverlay();
          // Little reward: nudge one outlawed back to operational
          const outlaw = services.find(s => s.status === 'OUTLAWED');
          if (outlaw) {
            outlaw.status = 'OPERATIONAL';
            outlaw.bounty = Math.min(99.6, outlaw.bounty + 2.4);
            renderPosters();
            updateOverallStatus();
          }
        } else if (btn.dataset.action === 'posse') {
          closeOverlay();
          // Deploy posse = add incident + flash log
          addNewIncident();
          const log = document.querySelector('.sheriff-log');
          if (log) {
            log.style.transition = 'none';
            log.style.boxShadow = '0 0 0 14px rgba(255,184,0,0.6)';
            setTimeout(() => {
              log.style.transition = 'box-shadow 420ms ease';
              log.style.boxShadow = '0 8px 0 #1f1a17';
            }, 40);
          }
        } else {
          closeOverlay();
        }
      });
    });

    // Global key listener for "B"
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'b' && !overlay.classList.contains('active')) {
        e.preventDefault();
        showBOLO();
      }
    });

    // Make sure initial state hidden
    overlay.style.display = 'flex';
    overlay.classList.remove('active');
  }

  function showBOLO() {
    const overlay = document.getElementById('bolo-overlay');
    if (!overlay) return;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Randomize a bit of drama in message each time
    const msgEl = overlay.querySelector('.bolo-message');
    if (msgEl) {
      const randSvc = services[Math.floor(Math.random() * services.length)].name;
      msgEl.innerHTML = `ALL DEPUTIES — BE ON THE LOOKOUT\n\nROGUE PROCESS "${randSvc.toUpperCase()}-RENDER-187" LAST SEEN IN SECTOR 4.\n\nAPPROACH WITH EXTREME CAUTION.\nSYSTEM INTEGRITY COMPROMISED.`;
    }
  }

  // Live clock in dispatch bar
  function startRollCallClock() {
    const el = document.getElementById('rollcall-time');
    if (!el) return;

    function tick() {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      el.textContent = `${h}:${m}:${s}`;
    }
    tick();
    setInterval(tick, 1000);
  }

  // Boot everything
  function init() {
    // Only run full HUD on pages that have the elements (home)
    const hasPosters = document.getElementById('posters-grid');
    if (!hasPosters) {
      // Still run clock + BOLO on every page
      startRollCallClock();
      setupBOLO();
      return;
    }

    // Full experience
    renderPosters();
    renderSheriffLog();
    renderIncidents();
    updateOverallStatus();
    startRollCallClock();
    setupBOLO();

    // Wire posse report button
    const posseBtn = document.getElementById('btn-file-report');
    if (posseBtn) {
      posseBtn.addEventListener('click', addNewIncident);
    }

    // Random subtle "telegraph" flicker on one of the operational posters every 25s
    setInterval(() => {
      const ops = Array.from(document.querySelectorAll('.wanted-poster')).filter(p => {
        const stamp = p.querySelector('.status-stamp');
        return stamp && stamp.classList.contains('status-operational');
      });
      if (ops.length) {
        const target = ops[Math.floor(Math.random() * ops.length)];
        target.style.transitionDuration = '60ms';
        target.style.filter = 'brightness(1.6)';
        setTimeout(() => {
          target.style.filter = '';
          target.style.transitionDuration = '';
        }, 140);
      }
    }, 25000);

    // Easter egg: click the hero "WANTED" text area triggers global BOLO once
    const hero = document.querySelector('.hero-wanted');
    if (hero) {
      let used = false;
      hero.addEventListener('click', (e) => {
        // Only if clicking near the very top giant text area
        if (!used && e.clientY - hero.getBoundingClientRect().top < 110) {
          used = true;
          const overlay = document.getElementById('bolo-overlay');
          if (overlay) {
            showBOLO();
          }
        }
      }, { once: false });
    }

    // Accessibility note in console (for devs)
    console.log('%c[TOMBSTONE/HUD] Ready. Press B for BOLO. Click any poster to hunt.', 'color:#664d00;font-family:monospace');
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
