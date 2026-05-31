/**
 * SWARM MOTHER — swarm.js
 * Real swarming behavior. The page slowly becomes infested.
 * Cursor interaction, flocking, progressive horror, DOM mutation.
 */
(function () {
  'use strict';

  const MAX_PARTICLES = 920;
  const BASE_PARTICLES = 310;
  let infestationLevel = 0; // 0 → 1.0 over time
  let mouseX = 0, mouseY = 0;
  let mouseActive = false;
  let lastInfestTick = Date.now();

  // Particle pool for main hive swarm
  let particles = [];
  let canvas, ctx, W, H;

  // DOM infestation state
  let infestedNodes = new WeakSet();

  function createCanvas() {
    canvas = document.createElement('canvas');
    canvas.id = 'hive-swarm';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d', { alpha: true });

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Track mouse with a little lag for organic horror
    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    }, { passive: true });

    window.addEventListener('mouseleave', function () {
      mouseActive = false;
    });

    // On click: the swarm either worships or panics (random)
    canvas.addEventListener('click', function (e) {
      const worship = Math.random() > 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = e.clientX - p.x;
        const dy = e.clientY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = worship ? 3.8 : -5.2;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
        p.alpha = Math.min(1, p.alpha + 0.35);
      }
      // Occasionally birth new mites on click
      if (infestationLevel > 0.3 && particles.length < MAX_PARTICLES - 40) {
        spawnCluster(e.clientX, e.clientY, 11 + Math.floor(infestationLevel * 18));
      }
    });
  }

  function spawnParticle(x, y, extra) {
    const typeRoll = Math.random();
    let type = 'drone';
    if (typeRoll < 0.22) type = 'wing';
    else if (typeRoll < 0.38) type = 'larva';
    else if (typeRoll < 0.55) type = 'mite';

    const p = {
      x: x !== undefined ? x : Math.random() * W,
      y: y !== undefined ? y : Math.random() * H * 0.92,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
      size: type === 'larva' ? 1.9 + Math.random() * 1.1 :
            type === 'mite' ? 0.6 + Math.random() * 0.6 :
            1.05 + Math.random() * 0.85,
      alpha: 0.55 + Math.random() * 0.42,
      type: type,
      wingPhase: Math.random() * Math.PI * 2,
      age: Math.random() * 900,
      hueShift: (Math.random() - 0.5) * 14
    };
    if (extra) Object.assign(p, extra);
    return p;
  }

  function spawnCluster(cx, cy, count) {
    for (let i = 0; i < count; i++) {
      if (particles.length >= MAX_PARTICLES) break;
      const angle = Math.random() * Math.PI * 2;
      const r = 6 + Math.random() * 38;
      const p = spawnParticle(
        cx + Math.cos(angle) * r,
        cy + Math.sin(angle) * r
      );
      p.vx = Math.cos(angle) * (1.8 + Math.random() * 2.6);
      p.vy = Math.sin(angle) * (1.8 + Math.random() * 2.6);
      p.alpha = 0.9;
      particles.push(p);
    }
  }

  function initParticles() {
    particles = [];
    const target = BASE_PARTICLES + Math.floor(infestationLevel * 380);
    for (let i = 0; i < target; i++) {
      particles.push(spawnParticle());
    }
  }

  // Very simple boids-lite + queen attraction + mouse reaction
  function updateParticles() {
    const targetCount = BASE_PARTICLES + Math.floor(infestationLevel * 460);
    // Birth new particles slowly as infestation grows
    while (particles.length < targetCount && particles.length < MAX_PARTICLES) {
      particles.push(spawnParticle());
    }
    // Cull a few when over
    while (particles.length > targetCount + 30) {
      particles.splice(Math.floor(Math.random() * particles.length), 1);
    }

    const queenX = W * 0.5;
    const queenY = H * 0.38 + Math.sin(Date.now() / 9000) * 14;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.age += 1;

      // Base wander (drunken insect flight)
      p.vx += (Math.random() - 0.5) * 0.085;
      p.vy += (Math.random() - 0.5) * 0.085;

      // Cohesion toward the Queen (center of hive)
      const qdx = queenX - p.x;
      const qdy = queenY - p.y;
      const qdist = Math.sqrt(qdx * qdx + qdy * qdy) || 1;
      const qforce = 0.012 + infestationLevel * 0.008;
      p.vx += (qdx / qdist) * qforce;
      p.vy += (qdy / qdist) * qforce;

      // Mouse reaction — terror or worship
      if (mouseActive) {
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy) || 1;
        if (mdist < 210) {
          const repel = infestationLevel > 0.6 ? 0.9 : -1.85; // higher infestation = more drawn to you
          p.vx += (mdx / mdist) * repel;
          p.vy += (mdy / mdist) * repel;
          p.alpha = Math.min(1, p.alpha + 0.08);
        }
      }

      // Slight vertical bias — they tend to drift upward like moths to light or toward ceiling
      p.vy -= 0.0045 + infestationLevel * 0.002;

      // Velocity damping + speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const maxSpeed = p.type === 'wing' ? 3.6 : p.type === 'mite' ? 4.4 : 2.15;
      if (speed > maxSpeed) {
        p.vx = (p.vx / speed) * maxSpeed;
        p.vy = (p.vy / speed) * maxSpeed;
      }
      p.vx *= 0.982;
      p.vy *= 0.982;

      p.x += p.vx;
      p.y += p.vy;

      // Soft wrap at edges (they crawl out of the walls and back in)
      if (p.x < -14) p.x = W + 8;
      if (p.x > W + 14) p.x = -8;
      if (p.y < -18) p.y = H * 0.94;
      if (p.y > H + 26) p.y = 22;

      // Wing phase & alpha breathing
      p.wingPhase += p.type === 'wing' ? 0.21 : 0.063;
      if (p.type === 'larva') p.alpha = 0.38 + Math.sin(p.wingPhase * 0.6) * 0.18;
      else p.alpha = Math.max(0.35, Math.min(0.97, p.alpha * 0.996 + 0.002));
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const a = p.alpha * (0.6 + infestationLevel * 0.35);

      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(p.x, p.y);

      const s = p.size;

      if (p.type === 'wing') {
        // Fast fluttering wings — the most disturbing
        ctx.strokeStyle = '#c5a05a';
        ctx.lineWidth = 0.9;
        const flap = Math.sin(p.wingPhase) * 1.35;
        ctx.beginPath();
        ctx.moveTo(-s * 1.3, -flap * 0.7);
        ctx.lineTo(s * 1.9, flap * 0.4);
        ctx.moveTo(-s * 1.1, flap * 0.6);
        ctx.lineTo(s * 1.6, -flap * 0.35);
        ctx.stroke();

        ctx.fillStyle = '#8c6f2e';
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.55, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'larva') {
        // Fat, pale, wrong
        ctx.fillStyle = '#c9b89a';
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 1.35, s * 0.72, p.wingPhase * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0b0a09';
        ctx.fillRect(-s * 0.4, -s * 0.15, s * 0.8, 0.8);
      } else if (p.type === 'mite') {
        // Tiny skittering specks — thousands of them
        ctx.fillStyle = '#a67c2d';
        ctx.fillRect(-s * 0.6, -s * 0.6, s * 1.3, s * 1.3);
        ctx.fillStyle = '#d4af5a';
        ctx.fillRect(-s * 0.2, -s * 0.2, s * 0.5, s * 0.5);
      } else {
        // Standard drone — body + legs + wings
        ctx.fillStyle = '#6b5533';
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();

        // Legs (horror of too many)
        ctx.strokeStyle = '#3a2118';
        ctx.lineWidth = 0.7;
        const legAngle = Math.sin(p.wingPhase * 0.8) * 0.7;
        for (let k = -1; k <= 1; k += 2) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(k * s * 1.7, s * 0.9 + legAngle);
          ctx.moveTo(0, 0);
          ctx.lineTo(k * s * 1.4, -s * 0.7 - legAngle * 0.5);
          ctx.stroke();
        }

        // Tiny iridescent carapace
        ctx.fillStyle = '#2a4a3a';
        ctx.beginPath();
        ctx.arc(-s * 0.1, -s * 0.1, s * 0.48, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function animate() {
    updateParticles();
    drawParticles();

    // Progressive infestation over time
    const now = Date.now();
    if (now - lastInfestTick > 17500) {
      lastInfestTick = now;
      infestationLevel = Math.min(1.0, infestationLevel + 0.078);
      document.body.classList.add('infested-' + Math.min(3, Math.ceil(infestationLevel * 3)));

      // More aggressive DOM infestation
      infestRandomText(Math.floor(1 + infestationLevel * 2.5));
    }

    // Occasional spontaneous clusters (the hive is restless)
    if (Math.random() < 0.014 + infestationLevel * 0.019) {
      const cx = W * (0.2 + Math.random() * 0.6);
      const cy = H * (0.15 + Math.random() * 0.55);
      spawnCluster(cx, cy, 3 + Math.floor(infestationLevel * 5));
    }

    requestAnimationFrame(animate);
  }

  // Mutate the actual page text — psychological violation
  function infestRandomText(count) {
    const containers = document.querySelectorAll('.post-content, .page-content, .site-main p, h1, h2');
    if (!containers.length) return;

    for (let c = 0; c < count; c++) {
      const el = containers[Math.floor(Math.random() * containers.length)];
      if (!el || infestedNodes.has(el)) continue;

      const textNodes = [];
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          if (node.nodeValue.trim().length < 4) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      let n;
      while ((n = walker.nextNode())) textNodes.push(n);

      if (!textNodes.length) continue;

      const node = textNodes[Math.floor(Math.random() * textNodes.length)];
      const txt = node.nodeValue;
      if (txt.length < 6) continue;

      // Pick a word or a letter cluster and wrap it
      const words = txt.split(/(\s+)/);
      let idx = Math.floor(Math.random() * words.length);
      while (idx < words.length && words[idx].trim().length < 3) idx++;

      if (idx < words.length && words[idx].trim()) {
        const word = words[idx];
        const infestedWord = '<span class="infested" aria-hidden="true">' + word + '</span>';
        words[idx] = infestedWord;

        const wrapper = document.createElement('span');
        wrapper.innerHTML = words.join('');
        node.parentNode.replaceChild(wrapper, node);

        infestedNodes.add(el);

        // After a while some mites "leave"
        setTimeout(() => {
          if (wrapper.parentNode) {
            wrapper.outerHTML = wrapper.textContent;
          }
        }, 4200 + Math.random() * 6800);
      }
    }
  }

  // Initialize small independent swarms inside shortcode containers
  function initShortcodeSwarms() {
    const hosts = document.querySelectorAll('.swarm-host');
    hosts.forEach((host, idx) => {
      const c = document.createElement('canvas');
      c.width = host.offsetWidth || 620;
      c.height = 118;
      host.insertBefore(c, host.firstChild);

      const lctx = c.getContext('2d');
      const localParts = [];
      const count = parseInt(host.dataset.count || '68', 10);

      for (let i = 0; i < Math.min(count, 190); i++) {
        localParts.push({
          x: Math.random() * c.width,
          y: Math.random() * c.height,
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.5) * 1.1,
          size: 0.8 + Math.random() * 1.4,
          alpha: 0.4 + Math.random() * 0.55,
          phase: Math.random() * 9
        });
      }

      function localDraw() {
        lctx.clearRect(0, 0, c.width, c.height);
        for (let i = 0; i < localParts.length; i++) {
          const p = localParts[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vx += (Math.random() - 0.5) * 0.14;
          p.vy += (Math.random() - 0.5) * 0.14;
          p.vx *= 0.978;
          p.vy *= 0.978;

          if (p.x < 0 || p.x > c.width) p.vx *= -1;
          if (p.y < 0 || p.y > c.height) p.vy *= -1;

          p.phase += 0.18;
          lctx.globalAlpha = p.alpha * (0.7 + Math.sin(p.phase) * 0.3);
          lctx.fillStyle = '#b38a3a';
          lctx.fillRect(p.x - p.size * 0.5, p.y - p.size * 0.5, p.size, p.size * 0.9);
        }
        requestAnimationFrame(localDraw);
      }
      localDraw();

      // Click to disturb this local pocket of the hive
      host.addEventListener('click', function (ev) {
        const rect = c.getBoundingClientRect();
        const cx = ev.clientX - rect.left;
        const cy = ev.clientY - rect.top;
        for (let k = 0; k < localParts.length; k++) {
          const p = localParts[k];
          const dx = p.x - cx;
          const dy = p.y - cy;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          p.vx += (dx / d) * -4.5;
          p.vy += (dy / d) * -4.5;
        }
      });
    });
  }

  // Public bootstrap
  function boot() {
    createCanvas();
    initParticles();
    animate();

    // Start light DOM infestation immediately
    setTimeout(() => {
      infestRandomText(2);
    }, 2400);

    // Make some headings feel "alive"
    document.querySelectorAll('h1, h2').forEach(h => {
      if (h.textContent.length > 3 && h.textContent.length < 72) {
        h.classList.add('hive-voice');
        const txt = h.textContent;
        h.innerHTML = '';
        for (let i = 0; i < txt.length; i++) {
          const span = document.createElement('span');
          span.className = 'letter';
          span.textContent = txt[i];
          h.appendChild(span);
        }
      }
    });

    initShortcodeSwarms();

    // Final touch: the longer you stay the more you belong to us
    setTimeout(() => {
      if (infestationLevel < 0.2) infestationLevel = 0.2;
    }, 42000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose tiny debug surface (in case the Mother wants to inspect her children)
  window.__SWARM_MOTHER__ = {
    increaseInfestation: function (amt) {
      infestationLevel = Math.min(1, infestationLevel + (amt || 0.15));
    },
    getLevel: function () { return infestationLevel; }
  };
})();
