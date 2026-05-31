// OVERLOAD / SANCTUM - Status interactions
// Heavy, deliberate, no cute animations

function stressPillar(el) {
  const service = el.dataset.service;
  const metric = el.querySelector('.pillar-metric');
  const fill = el.querySelector('.load-bar-fill');
  const statusEl = el.querySelector('.pillar-status');

  // "Stress test" - momentary spike
  const orig = fill.style.width;
  const origMetric = metric.innerHTML;
  const origStatus = statusEl.textContent;
  const origClass = statusEl.className;

  fill.style.transition = 'width 120ms linear';
  fill.style.width = '100%';
  metric.style.color = 'var(--danger)';
  
  statusEl.textContent = 'STRESSING';
  statusEl.className = 'pillar-status warn';

  // After stress, settle with slight damage chance
  setTimeout(() => {
    const damage = Math.random() > 0.65;
    
    if (damage) {
      fill.style.width = (parseInt(orig) - 8) + '%';
      fill.classList.remove('low','med');
      fill.classList.add('high');
      metric.innerHTML = (parseFloat(orig) - 6).toFixed(1) + '<span style="font-size:1.1rem; vertical-align:baseline;">%</span>';
      statusEl.textContent = 'DAMAGED';
      statusEl.className = 'pillar-status down';
      
      // leave it damaged visually until reload
      el.style.borderColor = 'var(--danger)';
    } else {
      fill.style.width = orig;
      fill.style.transition = 'width 0.4s cubic-bezier(0.2,0,0,1)';
      metric.innerHTML = origMetric;
      metric.style.color = '';
      statusEl.textContent = origStatus;
      statusEl.className = origClass;
    }
  }, 820);
}

// Random subtle live update on load bars (every 14s)
setInterval(() => {
  const fills = document.querySelectorAll('.load-bar-fill');
  fills.forEach(f => {
    if (Math.random() > 0.8 && !f.closest('.pillar').querySelector('.pillar-status.down')) {
      const w = parseInt(f.style.width) || 70;
      const delta = (Math.random() - 0.5) * 6;
      f.style.width = Math.max(28, Math.min(97, Math.round(w + delta))) + '%';
    }
  });
}, 14000);

// Expose for console fun
window.OVERLOAD = { stressAll: () => document.querySelectorAll('.pillar').forEach(p => stressPillar(p)) };