const canvas = document.getElementById('art-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 500;
  }
  resize();
  window.addEventListener('resize', resize);

  let particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 2 + 1,
      color: `rgba(255, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100 + 155)}, 0.8)`
    });
  }

  function draw() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.2)'; // Trailing effect, solid color no gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.shadowBlur = 15;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.shadowColor = p.color;
      ctx.fillStyle = '#ffffff';

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Connect particles that are close
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 0, 102, ${1 - dist/80})`;
          ctx.shadowBlur = 0;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}