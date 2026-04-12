+++
title = "Terrain"
description = "Understanding the avalanche terrain and momentum dynamics"
+++

<div class="section-block">
  <div class="section-label">Terrain Analysis</div>
  <h2>The Snowfield</h2>
  <p style="color: var(--text-secondary); line-height: 1.8; max-width: 720px;">Avalanches require specific conditions: a steep slope, a weak layer in the snowpack, and a trigger. Our event replicates this dynamic. The slope is the progression curve. The weak layer is complacency. The trigger is the first session. Once it releases, momentum is physics -- mass times velocity, growing with every meter of descent.</p>

  <!-- SVG snowfield crack propagation diagram -->
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto; display: block;">
    <!-- Snowfield layers -->
    <rect x="20" y="30" width="160" height="20" fill="#8fb8d0" opacity="0.06"/>
    <rect x="20" y="50" width="160" height="15" fill="#8fb8d0" opacity="0.08"/>
    <rect x="20" y="65" width="160" height="20" fill="#8fb8d0" opacity="0.1"/>
    <rect x="20" y="85" width="160" height="15" fill="#8fb8d0" opacity="0.12"/>
    <!-- Layer labels -->
    <text x="190" y="44" fill="#4a6878" font-family="Inter, sans-serif" font-size="5" letter-spacing="1">SURFACE</text>
    <text x="190" y="61" fill="#4a6878" font-family="Inter, sans-serif" font-size="5" letter-spacing="1">WEAK</text>
    <text x="190" y="79" fill="#4a6878" font-family="Inter, sans-serif" font-size="5" letter-spacing="1">SLAB</text>
    <text x="190" y="96" fill="#4a6878" font-family="Inter, sans-serif" font-size="5" letter-spacing="1">BASE</text>
    <!-- Fracture line through weak layer -->
    <path d="M25,57 L50,55 L80,59 L110,54 L140,58 L170,56" stroke="#8fb8d0" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="5 3"/>
    <!-- Trigger point -->
    <circle cx="110" cy="54" r="4" stroke="#8fb8d0" stroke-width="1.5" fill="none" opacity="0.3"/>
    <!-- Movement arrows below -->
    <path d="M60,100 L60,140 L80,160" stroke="#8fb8d0" stroke-width="1" fill="none" opacity="0.15"/>
    <path d="M100,100 L100,150 L110,170" stroke="#8fb8d0" stroke-width="1" fill="none" opacity="0.18"/>
    <path d="M140,100 L140,145 L130,165" stroke="#8fb8d0" stroke-width="1" fill="none" opacity="0.15"/>
    <!-- Debris at bottom -->
    <circle cx="80" cy="170" r="4" fill="#8fb8d0" opacity="0.1"/>
    <circle cx="110" cy="175" r="5" fill="#8fb8d0" opacity="0.12"/>
    <circle cx="135" cy="172" r="4" fill="#8fb8d0" opacity="0.1"/>
  </svg>
</div>
