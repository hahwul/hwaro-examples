/**
 * SUTURE COUTURE — Custom Interactions
 * Measuring tape (drag-to-measure horror), scar zoom modal, stitch micro-animations
 */

(function() {
  // --- Measuring Tape Logic ---
  const tape = document.getElementById('measuring-tape');
  const valueEl = document.getElementById('measure-value');
  if (!tape || !valueEl) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentMeasure = 0;

  function updateMeasure(x, y) {
    const dx = x - startX;
    const dy = y - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    // Convert px to "cm" with dramatic surgical scale
    currentMeasure = (dist / 18).toFixed(1);
    valueEl.textContent = currentMeasure + ' cm';
    
    // Visual feedback: tape "lengthens" via color intensity
    const intensity = Math.min(1, dist / 420);
    tape.style.borderColor = intensity > 0.65 ? '#9F2A2A' : '#C5A26F';
    if (intensity > 0.8) {
      tape.classList.add('active');
    } else {
      tape.classList.remove('active');
    }
  }

  tape.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    tape.style.cursor = 'grabbing';
    valueEl.textContent = '0.0 cm';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateMeasure(e.clientX, e.clientY);
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    tape.style.cursor = 'crosshair';
    document.body.style.userSelect = '';
    
    // Dramatic "recorded" moment
    const recorded = currentMeasure;
    setTimeout(() => {
      if (valueEl.textContent.includes(recorded)) {
        valueEl.style.transition = 'color 180ms';
        valueEl.style.color = '#C73E3E';
        setTimeout(() => {
          valueEl.style.color = '';
          valueEl.style.transition = '';
        }, 650);
      }
    }, 120);
  });

  // Touch support for mobile surgical consultations
  tape.addEventListener('touchstart', (e) => {
    isDragging = true;
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    valueEl.textContent = '0.0 cm';
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const t = e.touches[0];
    updateMeasure(t.clientX, t.clientY);
  }, { passive: true });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Easter egg: double-click tape to "reset the patient"
  tape.addEventListener('dblclick', () => {
    valueEl.textContent = (Math.random() * 4 + 0.8).toFixed(1) + ' cm';
    tape.style.transform = 'scale(0.96)';
    setTimeout(() => {
      tape.style.transform = '';
    }, 120);
  });

  // --- Scar Zoom Modal Logic ---
  window.zoomIntoScar = function() {
    const modal = document.getElementById('scar-zoom');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Subtle random pulse on the main scar when opened
    const scar = document.getElementById('main-scar');
    if (scar) {
      scar.style.transition = 'stroke 200ms';
      scar.setAttribute('stroke', '#C73E3E');
      setTimeout(() => {
        if (scar) scar.setAttribute('stroke', '#9F2A2A');
      }, 480);
    }
  };

  window.closeScarZoom = function() {
    const modal = document.getElementById('scar-zoom');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Close on escape or click outside
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('scar-zoom');
      if (modal && modal.classList.contains('active')) {
        closeScarZoom();
      }
    }
  });

  const modal = document.getElementById('scar-zoom');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeScarZoom();
    });
  }

  // --- Micro stitch tighten on .look-card hover (CSS already handles base, we enhance) ---
  const cards = document.querySelectorAll('.look-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const after = getComputedStyle(card, '::after');
      // Trigger stronger animation via class (CSS handles)
      card.style.setProperty('--stitch-intensity', '0.95');
    });
    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--stitch-intensity');
    });
  });

  // --- Add subtle "extra finger" horror to random look visuals on load ---
  const visuals = document.querySelectorAll('.look-visual');
  if (visuals.length > 2) {
    const unlucky = visuals[Math.floor(Math.random() * visuals.length)];
    unlucky.setAttribute('data-horror', 'extra-finger');
  }

  // --- Zoom triggers on any .zoom-trigger elements (for future content) ---
  document.querySelectorAll('.zoom-trigger').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof window.zoomIntoScar === 'function') window.zoomIntoScar();
    });
  });

  // Console signature for the curious surgeon
  console.log('%c[SUTURE COUTURE] The tape is always watching. Season 13 is not over.', 'color:#5C4478;font-family:monospace');
})();
