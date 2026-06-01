/**
 * ROOT CHAPEL — Subtle Branching Invasion Canvas
 * Slow, organic root growth across the chapel walls and floor.
 * Non-interactive, atmospheric, slightly unsettling.
 */
(function () {
  const canvas = document.getElementById('root-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0;
  let height = 0;
  let roots = [];
  let time = 0;
  let lastGrowth = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  // Organic root segment
  function createRoot(x, y, angle, depth, maxDepth, hueShift) {
    return {
      x: x,
      y: y,
      angle: angle + (Math.random() - 0.5) * 0.6,
      length: 0,
      maxLength: 38 + Math.random() * 52,
      depth: depth,
      maxDepth: maxDepth || 5,
      thickness: Math.max(0.6, 2.8 - depth * 0.45),
      branches: [],
      grown: false,
      hueShift: hueShift || 0,
      speed: 0.28 + Math.random() * 0.45,
      curve: (Math.random() - 0.5) * 0.028,
      life: 0
    };
  }

  function drawRootSegment(root) {
    if (root.length < 0.5) return;

    const alpha = Math.min(0.6, 0.18 + root.depth * 0.035) * (0.65 + Math.sin(time * 0.8 + root.depth) * 0.12);
    const color = root.depth > 3
      ? `rgba(62, 78, 55, ${alpha})`   // mossier
      : `rgba(78, 58, 46, ${alpha})`;  // root brown

    ctx.strokeStyle = color;
    ctx.lineWidth = root.thickness * (0.6 + Math.min(1, root.length / root.maxLength) * 0.6);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(root.x, root.y);

    // Slightly organic curve using the root's curve value
    const endX = root.x + Math.cos(root.angle) * root.length;
    const endY = root.y + Math.sin(root.angle) * root.length;
    const midX = root.x + Math.cos(root.angle) * root.length * 0.5 + Math.sin(root.angle) * root.curve * 18;
    const midY = root.y + Math.sin(root.angle) * root.length * 0.5 - Math.cos(root.angle) * root.curve * 18;

    ctx.quadraticCurveTo(midX, midY, endX, endY);
    ctx.stroke();

    // Occasional vein highlights (very subtle)
    if (root.depth < 3 && root.length > root.maxLength * 0.6) {
      ctx.strokeStyle = `rgba(145, 130, 95, ${alpha * 0.22})`;
      ctx.lineWidth = Math.max(0.5, root.thickness * 0.35);
      ctx.beginPath();
      ctx.moveTo(root.x, root.y);
      ctx.quadraticCurveTo(midX * 0.96, midY * 0.96, endX, endY);
      ctx.stroke();
    }
  }

  function growRoot(root) {
    if (root.grown) return;

    root.length += root.speed;
    root.life += 0.018;

    // Slight wandering
    root.angle += Math.sin(root.life * 1.6 + root.depth) * root.curve * 0.6;

    if (root.length >= root.maxLength) {
      root.grown = true;

      // Branch if depth allows
      if (root.depth < root.maxDepth) {
        const branchCount = root.depth < 2 ? 2 : (Math.random() > 0.35 ? 1 : 0);

        for (let i = 0; i < branchCount; i++) {
          const branchAngle = root.angle + (i - 0.5) * (1.15 + Math.random() * 0.7);
          const newRoot = createRoot(
            root.x + Math.cos(root.angle) * root.length * 0.92,
            root.y + Math.sin(root.angle) * root.length * 0.92,
            branchAngle,
            root.depth + 1,
            root.maxDepth,
            root.hueShift
          );
          newRoot.speed *= 0.82;
          roots.push(newRoot);
        }
      }
    }
  }

  function seedInitialRoots() {
    roots = [];

    // Seed roots from edges and corners — the invasion points
    const seeds = [
      { x: width * 0.08, y: height * 0.22, angle: 0.9, depth: 0 },
      { x: width * 0.12, y: height * 0.78, angle: 1.35, depth: 0 },
      { x: width * 0.91, y: height * 0.18, angle: -0.85, depth: 0 },
      { x: width * 0.86, y: height * 0.71, angle: -1.4, depth: 0 },
      { x: width * 0.5, y: height * 0.96, angle: -1.58, depth: 1 }, // floor
      { x: width * 0.5, y: height * 0.04, angle: 1.58, depth: 1 }   // ceiling
    ];

    seeds.forEach((seed, i) => {
      const r = createRoot(seed.x, seed.y, seed.angle, seed.depth, 5 + (i % 2));
      r.length = 6 + Math.random() * 12; // start partially grown
      roots.push(r);
    });

    // Extra hidden seeds for richness
    for (let i = 0; i < 5; i++) {
      const x = 60 + Math.random() * (width - 120);
      const y = 80 + Math.random() * (height - 160);
      const angle = (Math.random() - 0.5) * 2.8;
      const r = createRoot(x, y, angle, 2, 4);
      r.length = 2;
      r.speed *= 0.7;
      roots.push(r);
    }
  }

  function maybeAddNewGrowth() {
    const now = Date.now();
    if (now - lastGrowth < 2400) return;
    lastGrowth = now;

    // Occasionally sprout a new root from a random wall position
    if (roots.length > 38) return;

    const side = Math.floor(Math.random() * 4);
    let x, y, angle;

    if (side === 0) { x = 12; y = 40 + Math.random() * (height - 80); angle = 0.4 + Math.random() * 1.1; }
    else if (side === 1) { x = width - 12; y = 40 + Math.random() * (height - 80); angle = -0.4 - Math.random() * 1.1; }
    else if (side === 2) { x = 40 + Math.random() * (width - 80); y = 12; angle = 1.1 + Math.random() * 0.9; }
    else { x = 40 + Math.random() * (width - 80); y = height - 12; angle = -1.1 - Math.random() * 0.9; }

    const newRoot = createRoot(x, y, angle, 1, 4);
    newRoot.length = 1.5;
    roots.push(newRoot);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Very faint overall veil
    ctx.fillStyle = 'rgba(12, 18, 15, 0.018)';
    ctx.fillRect(0, 0, width, height);

    time += 0.014;

    for (let i = roots.length - 1; i >= 0; i--) {
      const r = roots[i];
      growRoot(r);
      drawRootSegment(r);

      // Cull very old tiny roots
      if (r.grown && r.length > r.maxLength && r.depth > 4) {
        roots.splice(i, 1);
      }
    }

    maybeAddNewGrowth();

    // Gentle pulsing "heartbeat" of the chapel on the oldest roots
    if (roots.length > 0 && Math.random() < 0.04) {
      const pulseRoot = roots[Math.floor(Math.random() * Math.min(roots.length, 6))];
      if (pulseRoot) {
        ctx.strokeStyle = 'rgba(115, 145, 95, 0.09)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        const px = pulseRoot.x + Math.cos(pulseRoot.angle) * pulseRoot.length * 0.6;
        const py = pulseRoot.y + Math.sin(pulseRoot.angle) * pulseRoot.length * 0.6;
        ctx.arc(px, py, 2.5 + Math.sin(time * 3) * 0.8, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    requestAnimationFrame(draw);
  }

  // Boot the quiet invasion
  function start() {
    seedInitialRoots();

    // Give it a moment then begin slow continuous growth
    setTimeout(() => {
      // Add a few more seeds after first paint
      for (let i = 0; i < 3; i++) {
        const x = width * (0.2 + Math.random() * 0.6);
        const y = height * (0.15 + Math.random() * 0.7);
        roots.push(createRoot(x, y, (Math.random() - 0.5) * 2.6, 2, 4));
      }
    }, 1800);

    draw();
  }

  // Respect reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Draw once statically, very faint
    seedInitialRoots();
    roots.forEach(r => { r.length = r.maxLength * 0.6; r.grown = true; });
    draw = function () {
      ctx.clearRect(0, 0, width, height);
      roots.forEach(drawRootSegment);
    };
    draw();
    return;
  }

  start();
})();