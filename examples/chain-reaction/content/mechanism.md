+++
title = "Mechanism"
description = "How the chain reaction trigger system works"
+++

<div class="section-block">
  <div class="section-label">Mechanism</div>
  <h2>How Triggers Work</h2>
  <p style="color: var(--text-secondary); line-height: 1.8; max-width: 720px;">Each stage has a trigger condition -- a specific outcome that must be achieved before the next stage unlocks. Dependency arrows show which stages must complete first. Some stages branch into parallel tracks that reconverge later. The sequence is strict. No stage can be skipped.</p>

  <!-- SVG domino chain with connection lines -->
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto; display: block;">
    <!-- Vertical chain -->
    <rect x="88" y="20" width="24" height="32" rx="3" stroke="#e67e22" stroke-width="1.5" fill="none" opacity="0.3"/>
    <text x="100" y="40" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="10" opacity="0.3">1</text>
    <line x1="100" y1="52" x2="100" y2="65" stroke="#e67e22" stroke-width="1" opacity="0.2"/>
    <polygon points="95,62 105,62 100,68" fill="#e67e22" opacity="0.2"/>
    <rect x="88" y="70" width="24" height="32" rx="3" stroke="#e67e22" stroke-width="1.5" fill="none" opacity="0.25"/>
    <text x="100" y="90" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="10" opacity="0.25">2</text>
    <line x1="100" y1="102" x2="100" y2="115" stroke="#e67e22" stroke-width="1" opacity="0.18"/>
    <polygon points="95,112 105,112 100,118" fill="#e67e22" opacity="0.18"/>
    <rect x="88" y="120" width="24" height="32" rx="3" stroke="#e67e22" stroke-width="1.5" fill="none" opacity="0.22"/>
    <text x="100" y="140" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="10" opacity="0.22">3</text>
    <line x1="100" y1="152" x2="100" y2="165" stroke="#e67e22" stroke-width="1" opacity="0.15"/>
    <polygon points="95,162 105,162 100,168" fill="#e67e22" opacity="0.15"/>
    <rect x="88" y="170" width="24" height="24" rx="3" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.3"/>
    <text x="100" y="186" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="10" opacity="0.3">4</text>
  </svg>
</div>
