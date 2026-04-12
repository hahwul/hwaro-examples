+++
title = "Home"
description = "Airport departure board conference with split-flap display aesthetics"
+++

<div class="hero">
  <div class="site-wrapper">
    <div class="hero-label">Conference Departures</div>
    <h1>TICKER BOARD</h1>
    <p class="hero-subtitle">Sessions depart on schedule. Check your gate. Find your track. The board updates in real time. Do not miss your departure.</p>
    <p class="hero-date">TERMINAL C // 2027.09.22 // CONFERENCE CENTER, ZURICH</p>

    <!-- SVG split-flap letter display panel -->
    <svg width="320" height="60" viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto 0; display: block;">
      <!-- Split-flap character boxes -->
      <rect x="10" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="10" y1="30" x2="40" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="25" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">D</text>

      <rect x="48" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="48" y1="30" x2="78" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="63" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">E</text>

      <rect x="86" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="86" y1="30" x2="116" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="101" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">P</text>

      <rect x="124" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="124" y1="30" x2="154" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="139" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">A</text>

      <rect x="162" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="162" y1="30" x2="192" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="177" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">R</text>

      <rect x="200" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="200" y1="30" x2="230" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="215" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">T</text>

      <rect x="246" y="8" width="30" height="44" fill="#1a1500" stroke="#d4a020" stroke-width="1" opacity="0.3"/>
      <line x1="246" y1="30" x2="276" y2="30" stroke="#0a0a00" stroke-width="1.5" opacity="0.4"/>
      <text x="261" y="26" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="16" font-weight="700" opacity="0.5">S</text>
    </svg>
  </div>
</div>

<div class="site-wrapper">

<div class="section-block">
  <div class="section-label">Departures</div>
  <h2>Session Board</h2>

  <!-- SVG departure board frame with row dividers -->
  <svg width="100%" height="24" viewBox="0 0 600 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 16px auto 8px; display: block; max-width: 600px;">
    <rect x="0" y="0" width="600" height="24" fill="#1a1500" opacity="0.3"/>
    <text x="20" y="16" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="9" font-weight="700" letter-spacing="2" opacity="0.5">TIME</text>
    <text x="140" y="16" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="9" font-weight="700" letter-spacing="2" opacity="0.5">SESSION</text>
    <text x="360" y="16" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="9" font-weight="700" letter-spacing="2" opacity="0.5">ROOM</text>
    <text x="470" y="16" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="9" font-weight="700" letter-spacing="2" opacity="0.5">STATUS</text>
  </svg>

  <div class="departure-row">
    <div class="departure-time">09:00</div>
    <div class="departure-session">Keynote: Platform Architecture</div>
    <div class="departure-room">GATE A1</div>
    <div class="departure-status status-ontime">ON TIME</div>
  </div>

  <div class="departure-row">
    <div class="departure-time">10:30</div>
    <div class="departure-session">Workshop: API Design Patterns</div>
    <div class="departure-room">GATE B3</div>
    <div class="departure-status status-ontime">ON TIME</div>
  </div>

  <div class="departure-row">
    <div class="departure-time">13:00</div>
    <div class="departure-session">Panel: Infrastructure at Scale</div>
    <div class="departure-room">GATE C2</div>
    <div class="departure-status status-delayed">DELAYED</div>
  </div>

  <div class="departure-row">
    <div class="departure-time">15:30</div>
    <div class="departure-session">Closing: Future of Distributed Systems</div>
    <div class="departure-room">GATE A1</div>
    <div class="departure-status status-boarding">BOARDING</div>
  </div>
</div>

<div class="section-block">
  <div class="section-label">Gates</div>
  <h2>Platform Indicators</h2>

  <!-- SVG platform/gate number indicators -->
  <svg width="100%" height="80" viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 24px auto; display: block; max-width: 600px;">
    <rect x="20" y="10" width="80" height="60" fill="#1a1500" stroke="#d4a020" stroke-width="1.5" opacity="0.3"/>
    <text x="60" y="35" text-anchor="middle" fill="#d4a020" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" opacity="0.4">GATE</text>
    <text x="60" y="55" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="18" font-weight="700" opacity="0.5">A1</text>

    <rect x="140" y="10" width="80" height="60" fill="#1a1500" stroke="#d4a020" stroke-width="1.5" opacity="0.3"/>
    <text x="180" y="35" text-anchor="middle" fill="#d4a020" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" opacity="0.4">GATE</text>
    <text x="180" y="55" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="18" font-weight="700" opacity="0.5">B3</text>

    <rect x="260" y="10" width="80" height="60" fill="#1a1500" stroke="#d4a020" stroke-width="1.5" opacity="0.3"/>
    <text x="300" y="35" text-anchor="middle" fill="#d4a020" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" opacity="0.4">GATE</text>
    <text x="300" y="55" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="18" font-weight="700" opacity="0.5">C2</text>

    <rect x="380" y="10" width="80" height="60" fill="#1a1500" stroke="#d4a020" stroke-width="1.5" opacity="0.3"/>
    <text x="420" y="35" text-anchor="middle" fill="#d4a020" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" opacity="0.4">GATE</text>
    <text x="420" y="55" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="18" font-weight="700" opacity="0.5">D4</text>

    <rect x="500" y="10" width="80" height="60" fill="#1a1500" stroke="#d4a020" stroke-width="1.5" opacity="0.3"/>
    <text x="540" y="35" text-anchor="middle" fill="#d4a020" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" opacity="0.4">GATE</text>
    <text x="540" y="55" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="18" font-weight="700" opacity="0.5">E1</text>
  </svg>
</div>

<div class="section-block">
  <div class="section-label">Transit</div>
  <h2>Route Map</h2>

  <!-- SVG transit route map diagram -->
  <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 24px auto; display: block;">
    <!-- Route line -->
    <line x1="30" y1="60" x2="270" y2="60" stroke="#d4a020" stroke-width="2" opacity="0.2"/>
    <!-- Station stops -->
    <circle cx="30" cy="60" r="8" stroke="#d4a020" stroke-width="2" fill="none" opacity="0.3"/>
    <circle cx="30" cy="60" r="3" fill="#d4a020" opacity="0.3"/>
    <circle cx="110" cy="60" r="8" stroke="#d4a020" stroke-width="2" fill="none" opacity="0.3"/>
    <circle cx="110" cy="60" r="3" fill="#d4a020" opacity="0.3"/>
    <circle cx="190" cy="60" r="8" stroke="#d4a020" stroke-width="2" fill="none" opacity="0.3"/>
    <circle cx="190" cy="60" r="3" fill="#d4a020" opacity="0.3"/>
    <circle cx="270" cy="60" r="8" stroke="#d4a020" stroke-width="2" fill="none" opacity="0.3"/>
    <circle cx="270" cy="60" r="3" fill="#d4a020" opacity="0.3"/>
    <!-- Labels -->
    <text x="30" y="90" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.4">09:00</text>
    <text x="30" y="100" text-anchor="middle" fill="#8a7020" font-family="Inter, sans-serif" font-size="6" opacity="0.3">GATE A1</text>
    <text x="110" y="90" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.4">10:30</text>
    <text x="110" y="100" text-anchor="middle" fill="#8a7020" font-family="Inter, sans-serif" font-size="6" opacity="0.3">GATE B3</text>
    <text x="190" y="90" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.4">13:00</text>
    <text x="190" y="100" text-anchor="middle" fill="#8a7020" font-family="Inter, sans-serif" font-size="6" opacity="0.3">GATE C2</text>
    <text x="270" y="90" text-anchor="middle" fill="#d4a020" font-family="Roboto Mono, monospace" font-size="7" font-weight="700" opacity="0.4">15:30</text>
    <text x="270" y="100" text-anchor="middle" fill="#8a7020" font-family="Inter, sans-serif" font-size="6" opacity="0.3">GATE A1</text>
  </svg>

  <p style="text-align: center; font-family: 'Roboto Mono', monospace; font-weight: 700; font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.2em; text-transform: uppercase;">gate a1 > gate b3 > gate c2 > gate a1</p>
</div>

</div>
