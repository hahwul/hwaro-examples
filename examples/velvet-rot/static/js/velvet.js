/* Velvet Rot — subtle atmospheric enhancements (purely decorative) */
(function() {
  // Very rare, elegant moth that occasionally drifts across the viewport
  function spawnMoth() {
    if (Math.random() > 0.92) return; // extremely rare
    const moth = document.createElement('div');
    moth.className = 'velvet-moth';
    moth.innerHTML = '𖤐';
    moth.style.cssText = 'position:fixed;pointer-events:none;z-index:10;font-size:13px;color:#c5a26f;opacity:0.12;mix-blend-mode:screen;transition:transform 14s linear, opacity 14s ease;';
    document.body.appendChild(moth);

    const startY = Math.random() * window.innerHeight * 0.7 + 40;
    moth.style.left = '-30px';
    moth.style.top = startY + 'px';

    const duration = 16000 + Math.random() * 9000;
    const drift = (Math.random() - 0.5) * 180;

    requestAnimationFrame(() => {
      moth.style.transform = `translate(${window.innerWidth + 80}px, ${drift}px) rotate(${drift * 0.3}deg)`;
      moth.style.opacity = '0.03';
    });

    setTimeout(() => moth.remove(), duration + 400);
  }

  // Occasional gentle moth appearance on long sessions
  setInterval(spawnMoth, 38000);

  // Subtle interactive "peel" on salon cards (opulent touch)
  function initCardPeel() {
    const cards = document.querySelectorAll('.salon-card');
    cards.forEach(card => {
      let peeled = false;
      card.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') return;
        peeled = !peeled;
        if (peeled) {
          card.style.transform = 'translateY(-4px) rotate(1.2deg) scale(0.985)';
          card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(197,162,111,0.1)';
          card.style.borderColor = '#6d5530';
        } else {
          card.style.transform = '';
          card.style.boxShadow = '';
          card.style.borderColor = '';
        }
      });
      // Reset on mouse leave
      card.addEventListener('mouseleave', () => {
        if (peeled) {
          peeled = false;
          card.style.transform = '';
          card.style.boxShadow = '';
          card.style.borderColor = '';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCardPeel);
  } else {
    initCardPeel();
  }
})();