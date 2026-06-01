/* MOTH MOUTH — Gentle relentless moth swarm
 * Cursor attraction + slow accumulation of dust.
 * Soft, never aggressive. Quiet nightmare.
 */
(function() {
  const SWARM = document.createElement('div');
  SWARM.id = 'moth-swarm';
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(SWARM);
    initMoths();
  });

  let moths = [];
  let lastMouse = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.38 };
  let mouseActive = false;

  function createMoth(x, y, opts = {}) {
    const el = document.createElement('div');
    el.className = 'moth';
    el.style.left = (x || Math.random()*window.innerWidth) + 'px';
    el.style.top = (y || (80 + Math.random()*(window.innerHeight-160))) + 'px';
    el.innerHTML = `
      <span class="l"></span>
      <span class="r"></span>
      <span class="body"></span>
    `;
    const scale = opts.scale || (0.6 + Math.random()*0.85);
    el.style.transform = `scale(${scale})`;
    el.dataset.vx = (Math.random() - 0.5) * (opts.speed || 0.22);
    el.dataset.vy = (Math.random() - 0.5) * (opts.speed || 0.13);
    el.dataset.life = opts.life || (240 + Math.random()*420);
    el.dataset.attraction = opts.attraction || (0.018 + Math.random()*0.011);

    SWARM.appendChild(el);
    moths.push(el);

    // Occasionally drop a scale particle
    if (Math.random() < 0.6) {
      setTimeout(() => dropScale(el), 600 + Math.random()*1400);
    }
    return el;
  }

  function dropScale(parent) {
    if (!parent || !parent.parentNode) return;
    const s = document.createElement('span');
    s.className = 'scale';
    const rect = parent.getBoundingClientRect();
    const swarmRect = SWARM.getBoundingClientRect();
    s.style.left = (rect.left - swarmRect.left + 2 + Math.random()*3) + 'px';
    s.style.top = (rect.top - swarmRect.top + 2 + Math.random()*2) + 'px';
    s.style.opacity = (0.35 + Math.random()*0.45).toString();
    SWARM.appendChild(s);
    setTimeout(() => { if (s.parentNode) s.parentNode.removeChild(s); }, 2100);
  }

  function initMoths() {
    // Initial quiet population — they are already here
    const count = 14 + Math.floor(Math.random()*7);
    for (let i = 0; i < count; i++) {
      const m = createMoth(
        Math.random() * window.innerWidth,
        60 + Math.random() * (window.innerHeight * 0.7)
      );
      // Give them a tiny initial drift bias as if from an open window
      m.dataset.vx = (Math.random() - 0.48) * 0.31;
      m.dataset.vy = (Math.random() - 0.5) * 0.09;
    }

    // Gentle continuous birth — the window is never fully closed
    setInterval(() => {
      if (moths.length < 27 && Math.random() < 0.72) {
        createMoth(
          Math.random() < 0.5 ? 12 : window.innerWidth - 30,
          90 + Math.random() * (window.innerHeight - 200)
        );
      }
    }, 1850);

    // Mouse following — they know where the light (you) is
    let lastMove = Date.now();
    document.addEventListener('mousemove', (e) => {
      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
      mouseActive = true;
      lastMove = Date.now();

      // Very rarely birth a moth right at the cursor — intimate arrival
      if (Math.random() < 0.028 && moths.length < 31) {
        const m = createMoth(e.clientX + (Math.random()-0.5)*18, e.clientY + (Math.random()-0.5)*11, {
          scale: 0.55 + Math.random()*0.4,
          life: 140 + Math.random()*90,
          speed: 0.7
        });
        m.dataset.vx = (Math.random()-0.5) * 0.6;
        m.dataset.vy = (Math.random()-0.5) * 0.4;
      }
    }, { passive: true });

    // Animation loop — soft, relentless
    function step() {
      const now = Date.now();
      const attractX = lastMouse.x;
      const attractY = lastMouse.y;
      const attractStrength = mouseActive && (now - lastMove < 14000) ? 1 : 0.2;

      moths = moths.filter(m => {
        if (!m.parentNode) return false;

        let life = parseFloat(m.dataset.life || 300);
        life -= 1;
        m.dataset.life = life;

        if (life <= 0) {
          // Fade out gracefully instead of abrupt removal
          m.style.transition = 'opacity 420ms linear, transform 620ms ease';
          m.style.opacity = '0';
          setTimeout(() => { if (m.parentNode) m.parentNode.removeChild(m); }, 520);
          return false;
        }

        const rect = m.getBoundingClientRect();
        const cx = rect.left + rect.width/2;
        const cy = rect.top + rect.height/2;

        let vx = parseFloat(m.dataset.vx || 0);
        let vy = parseFloat(m.dataset.vy || 0);

        // Soft attraction to cursor / light in your eyes
        const dx = attractX - cx;
        const dy = attractY - cy;
        const dist = Math.max(38, Math.sqrt(dx*dx + dy*dy));
        const pull = parseFloat(m.dataset.attraction || 0.022) * attractStrength;

        vx += (dx / dist) * pull * (0.6 + Math.random()*0.7);
        vy += (dy / dist) * pull * (0.35 + Math.random()*0.55);

        // Slow ambient drift + tiny random flutter
        vx += (Math.random() - 0.5) * 0.018;
        vy += (Math.random() - 0.5) * 0.012 - 0.004; // slight downward bias like settling

        // Velocity damping — they tire but never stop completely
        vx *= 0.978;
        vy *= 0.976;

        // Clamp speed so the nightmare stays gentle
        const speed = Math.sqrt(vx*vx + vy*vy);
        if (speed > 2.1) {
          vx = (vx / speed) * 2.0;
          vy = (vy / speed) * 1.7;
        }

        const nx = cx + vx;
        const ny = cy + vy;

        // Soft wrap with feather at edges
        let wrapped = false;
        if (nx < -22) { m.style.left = (window.innerWidth + 10) + 'px'; wrapped = true; }
        else if (nx > window.innerWidth + 22) { m.style.left = '-18px'; wrapped = true; }
        else { m.style.left = (nx) + 'px'; }

        if (ny < 18) { m.style.top = (window.innerHeight * 0.88) + 'px'; wrapped = true; }
        else if (ny > window.innerHeight - 14) { m.style.top = '42px'; wrapped = true; }
        else { m.style.top = (ny) + 'px'; }

        if (wrapped) {
          // Reset velocity on wrap — they came from somewhere else
          vx = (Math.random() - 0.5) * 0.45;
          vy = (Math.random() - 0.5) * 0.2;
        }

        m.dataset.vx = vx;
        m.dataset.vy = vy;

        // Very subtle random scale flutter
        if (Math.random() < 0.035) {
          const s = 0.6 + Math.random()*0.9;
          m.style.transform = `scale(${s})`;
        }

        // Rare scale drop while flying near you
        if (Math.random() < 0.0065) dropScale(m);

        return true;
      });

      // Occasionally the moths remember you and one drifts closer
      if (mouseActive && moths.length > 5 && Math.random() < 0.009) {
        const idx = Math.floor(Math.random() * moths.length);
        const m = moths[idx];
        if (m) {
          m.dataset.vx = (parseFloat(m.dataset.vx) || 0) * 0.3 + (attractX - 40 - parseFloat(m.style.left)) * 0.003;
          m.dataset.vy = (parseFloat(m.dataset.vy) || 0) * 0.3 + (attractY - 20 - parseFloat(m.style.top)) * 0.004;
        }
      }

      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);

    // Touch support — they come when you reach for the lamp
    document.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        lastMouse.x = e.touches[0].clientX;
        lastMouse.y = e.touches[0].clientY;
        mouseActive = true;
      }
    }, { passive: true });

    // When you leave the room, they settle but never disappear entirely
    window.addEventListener('blur', () => { mouseActive = false; }, { passive: true });
    window.addEventListener('focus', () => { mouseActive = true; }, { passive: true });
  }

  // Expose tiny debug hook (not used in prod)
  window.__mothMouthDebug = () => ({ count: moths.length, swarm: SWARM });
})();