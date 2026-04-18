+++
title = "Concourse"
description = "Conference concourse and venue navigation"
+++

<div class="section-block">
  <div class="section-label">Navigation</div>
  <h2>Terminal Map</h2>
  <p style="color: var(--text-secondary); line-height: 1.8; max-width: 720px;">The conference center operates like an airport terminal. Gates are arranged along the main concourse. Follow the amber signage to your departure gate. Refreshments available at the central hub between Gates B and C.</p>

  <!-- SVG terminal layout -->
  <svg width="240" height="140" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto; display: block;">
    <!-- Main concourse -->
    <rect x="20" y="55" width="200" height="30" fill="#1a1500" opacity="0.15"/>
    <rect x="20" y="55" width="200" height="30" stroke="#d4a020" stroke-width="1" fill="none" opacity="0.2"/>
    <!-- Gate branches -->
    <rect x="30" y="15" width="30" height="40" stroke="#d4a020" stroke-width="1" fill="none" opacity="0.15"/>
    <text x="45" y="38" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.3">A1</text>
    <rect x="80" y="15" width="30" height="40" stroke="#d4a020" stroke-width="1" fill="none" opacity="0.15"/>
    <text x="95" y="38" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.3">B3</text>
    <rect x="130" y="85" width="30" height="40" stroke="#d4a020" stroke-width="1" fill="none" opacity="0.15"/>
    <text x="145" y="108" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.3">C2</text>
    <rect x="180" y="85" width="30" height="40" stroke="#d4a020" stroke-width="1" fill="none" opacity="0.15"/>
    <text x="195" y="108" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.3">D4</text>
    <!-- Central hub -->
    <circle cx="120" cy="70" r="8" stroke="#d4a020" stroke-width="1" fill="none" opacity="0.2"/>
    <text x="120" y="73" text-anchor="middle" fill="#8a7020" font-family="Inter, sans-serif" font-size="5" opacity="0.3">HUB</text>
  </svg>
</div>
