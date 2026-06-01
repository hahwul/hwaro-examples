/**
 * VHS EXORCISM — Subtle analog horror behaviors
 * Random tracking errors, eject terror, mouse-reactive static, channel weirdness.
 * Pure terror, zero dependencies.
 */

(function () {
  'use strict';

  const BODY = document.body;
  let glitchTimeout = null;
  let ejectActive = false;

  // === 1. RANDOM VHS TRACKING ERRORS (the TV is haunted) ===
  function triggerRandomGlitch() {
    if (ejectActive || document.hidden) return;

    const targets = document.querySelectorAll('.crt-screen, .broadcast-log, .tape-card, .tv-frame, .emergency-hero');
    if (!targets.length) return;

    const victim = targets[Math.floor(Math.random() * targets.length)];
    victim.classList.add('glitching');

    // Occasional horizontal tear
    if (Math.random() < 0.35) {
      createTemporaryTear(victim);
    }

    // Sometimes boost static
    const staticLayer = victim.querySelector('.static-overlay') || document.querySelector('.static-overlay');
    if (staticLayer && Math.random() < 0.5) {
      staticLayer.classList.add('high-static');
    }

    const duration = 90 + Math.random() * 160;
    setTimeout(() => {
      victim.classList.remove('glitching');
      if (staticLayer) staticLayer.classList.remove('high-static');
    }, duration);
  }

  function createTemporaryTear(parent) {
    const tear = document.createElement('div');
    tear.className = 'vhs-tear active';
    tear.style.top = (Math.random() * 70 + 10) + '%';
    parent.appendChild(tear);

    setTimeout(() => {
      if (tear && tear.parentNode) tear.parentNode.removeChild(tear);
    }, 280);
  }

  // Schedule random glitches every 7–22 seconds
  function scheduleGlitches() {
    function loop() {
      const delay = 7200 + Math.random() * 15000;
      setTimeout(() => {
        triggerRandomGlitch();
        if (!ejectActive) loop();
      }, delay);
    }
    loop();

    // Occasional stronger attack on long idle
    setInterval(() => {
      if (!ejectActive && Math.random() < 0.28) {
        triggerRandomGlitch();
        triggerRandomGlitch();
      }
    }, 38000);
  }

  // === 2. THE EJECT BUTTON — Temporary layout possession ===
  function createEjectButton() {
    // Only add on certain pages (home + posts) to avoid clutter
    if (!document.querySelector('.tv-frame, .broadcast-log, .emergency-hero')) return;

    const eject = document.createElement('button');
    eject.className = 'eject-btn';
    eject.setAttribute('aria-label', 'EJECT TAPE');
    eject.innerHTML = `
      <span style="font-family:'Press Start 2P',monospace;font-size:9px;letter-spacing:1px;">EJECT</span>
      <span style="font-size:13px;line-height:1;">⏏︎</span>
    `;
    eject.style.cssText = `
      position:fixed; bottom:18px; right:18px; z-index:999;
      background:#1a1a1a; color:#8b0000; border:2px solid #8b0000;
      padding:6px 13px 5px; font-family:inherit; cursor:pointer;
      display:flex; align-items:center; gap:7px; opacity:0.75;
      transition:opacity .1s, transform .1s;
    `;

    eject.addEventListener('mouseenter', () => eject.style.opacity = '1');
    eject.addEventListener('mouseleave', () => eject.style.opacity = '0.75');

    eject.addEventListener('click', () => {
      if (ejectActive) return;
      ejectActive = true;
      eject.style.pointerEvents = 'none';

      BODY.classList.add('ejecting');

      // Full screen terror
      const fullGlitch = document.createElement('div');
      fullGlitch.style.cssText = `
        position:fixed; inset:0; z-index:9999; pointer-events:none;
        background: repeating-linear-gradient(transparent 0 2px, rgba(255,255,255,0.06) 2px 3px);
        animation: static-flicker 0.04s steps(1) infinite;
        mix-blend-mode: difference;
      `;
      document.body.appendChild(fullGlitch);

      // Random violent tears everywhere
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const t = document.createElement('div');
          t.className = 'vhs-tear active';
          t.style.cssText = `top:${Math.random()*100}%; left:0; right:0; height:${1+Math.random()*3}px; z-index:10000;`;
          document.body.appendChild(t);
          setTimeout(() => t.parentNode && t.parentNode.removeChild(t), 400);
        }, i * 38);
      }

      // Invert + warp the whole world for 1100ms
      BODY.style.transition = 'filter 80ms, transform 90ms';
      BODY.style.filter = 'invert(0.88) hue-rotate(180deg) contrast(1.6)';
      BODY.style.transform = `translate(${Math.random()*6-3}px, ${Math.random()*4-2}px) skew(${Math.random()*1.4-0.7}deg)`;

      // The scream
      const scream = document.createElement('div');
      scream.textContent = 'PLEASE STAND BY';
      scream.style.cssText = `
        position:fixed; top:40%; left:50%; transform:translate(-50%,-50%);
        font-family:'Press Start 2P',monospace; font-size:22px; color:#fff;
        text-shadow:0 0 12px #8b0000, 3px 0 0 #00ff41; z-index:10001;
        pointer-events:none; white-space:nowrap; letter-spacing:4px;
      `;
      document.body.appendChild(scream);

      setTimeout(() => {
        // Return to normal
        BODY.style.filter = '';
        BODY.style.transform = '';
        BODY.classList.remove('ejecting');
        if (fullGlitch.parentNode) fullGlitch.parentNode.removeChild(fullGlitch);
        if (scream.parentNode) scream.parentNode.removeChild(scream);
        ejectActive = false;
        eject.style.pointerEvents = 'auto';

        // One final random glitch after recovery
        setTimeout(triggerRandomGlitch, 280);
      }, 1100);
    });

    document.body.appendChild(eject);
  }

  // === 3. MOUSE-REACTIVE STATIC (the static knows you're there) ===
  function enableMouseStatic() {
    const statics = document.querySelectorAll('.static-overlay');
    if (!statics.length) return;

    let lastMove = 0;

    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastMove < 38) return; // throttle
      lastMove = now;

      statics.forEach((s) => {
        const rect = s.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width;
        const cy = (e.clientY - rect.top) / rect.height;

        // Intensify static near cursor + slight face reveal
        const dist = Math.hypot(cx - 0.5, cy - 0.5);
        const intensity = Math.max(0.12, 0.38 - dist * 0.5);

        s.style.setProperty('--static-intensity', intensity.toFixed(2));

        // The face occasionally peeks when cursor lingers near center of static
        const face = s.querySelector('.static-face');
        if (face && dist < 0.28 && Math.random() < 0.12) {
          face.classList.add('visible');
          setTimeout(() => face && face.classList.remove('visible'), 620);
        }
      });
    });

    // Reset when mouse leaves window
    document.addEventListener('mouseleave', () => {
      statics.forEach((s) => s.style.removeProperty('--static-intensity'));
    });
  }

  // === 4. FAKE LIVE TIMESTAMP + CHANNEL WATERMARK jitter ===
  function addLiveTimestamp() {
    const metaAreas = document.querySelectorAll('.post-meta, .tape-meta, .broadcast-header');
    metaAreas.forEach((area) => {
      if (area.querySelector('.live-timestamp')) return;

      const ts = document.createElement('span');
      ts.className = 'live-timestamp';
      ts.style.cssText = 'font-family:monospace;opacity:0.6;margin-left:auto;';
      area.appendChild(ts);

      function tick() {
        const d = new Date();
        const h = String(d.getHours()).padStart(2, '0');
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        ts.textContent = `${h}:${m}:${s} CH13`;
      }
      tick();
      setInterval(tick, 980);
    });
  }

  // === 5. Channel button "tuning" clicks cause micro glitches ===
  function wireChannelButtons() {
    document.querySelectorAll('.channel-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // Don't interfere with real nav
        if (btn.getAttribute('href')) return;

        btn.style.transform = 'scale(0.92)';
        setTimeout(() => (btn.style.transform = ''), 90);

        // Small glitch on the screen
        const screen = document.querySelector('.crt-screen') || document.querySelector('.tv-frame');
        if (screen) {
          screen.classList.add('glitching');
          setTimeout(() => screen.classList.remove('glitching'), 160);
        }

        // 1 in 3 chance of stronger static burst
        if (Math.random() < 0.33) {
          document.querySelectorAll('.static-overlay').forEach((s) => {
            s.classList.add('high-static');
            setTimeout(() => s.classList.remove('high-static'), 260);
          });
        }
      });
    });
  }

  // === 6. Subtle title "vertical roll" on very long pages ===
  function maybeVerticalRoll() {
    const titles = document.querySelectorAll('h1');
    titles.forEach((t, i) => {
      if (t.textContent.length > 22 && Math.random() < 0.6) {
        t.style.animation = `horizontal-hold ${2.1 + i % 2}s steps(5) ${i * 400 + 900}ms infinite`;
      }
    });
  }

  // === INIT EVERYTHING ===
  function initVHS() {
    // Wait a tick so DOM + CSS are settled
    setTimeout(() => {
      scheduleGlitches();
      createEjectButton();
      enableMouseStatic();
      addLiveTimestamp();
      wireChannelButtons();
      maybeVerticalRoll();

      // One guaranteed opening glitch 1.8s after load (welcome to the broadcast)
      setTimeout(() => {
        if (!ejectActive) triggerRandomGlitch();
      }, 1800);

      // Easter egg: press "13" on keyboard for a strong glitch
      document.addEventListener('keydown', (e) => {
        if (e.key === '1' || e.key === '3') {
          const s = document.querySelector('.static-overlay');
          if (s) s.classList.add('high-static');
          triggerRandomGlitch();
          setTimeout(() => s && s.classList.remove('high-static'), 380);
        }
      });

      // Mark that VHS is active for any future CSS hooks
      BODY.dataset.vhs = 'possessed';
    }, 120);
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVHS);
  } else {
    initVHS();
  }

  // Expose a tiny debug API in console if someone is brave enough
  window.VHS = {
    forceGlitch: () => triggerRandomGlitch(),
    eject: () => {
      const btn = document.querySelector('.eject-btn');
      if (btn) btn.click();
    }
  };
})();