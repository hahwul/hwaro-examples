+++
title = "Home"
description = "Two-event day, split-screen hero -- dual identities, one venue, zero downtime"
+++

<div class="hero-split">
  <div class="hero-side hero-side-a">
    <div class="hero-event-label">Morning Session</div>
    <h1 class="font-a">Design<br>Symposium</h1>
    <div class="hero-time">09:00</div>
    <p class="hero-desc">A curated morning of design thinking, typography deep-dives, and visual storytelling from leading practitioners.</p>
  </div>

  <div class="connector">
    <!-- SVG vertical split divider -->
    <svg width="64" height="200" viewBox="0 0 64 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="32" y1="0" x2="32" y2="68" stroke="#1e1e3a" stroke-width="2"/>
      <rect x="8" y="68" width="48" height="64" fill="#0a0a12" stroke="#f472b6" stroke-width="3"/>
      <text x="32" y="107" text-anchor="middle" fill="#f472b6" font-family="Montserrat, sans-serif" font-weight="900" font-size="16">VS</text>
      <line x1="32" y1="132" x2="32" y2="200" stroke="#1e1e3a" stroke-width="2"/>
    </svg>
  </div>

  <div class="hero-side hero-side-b">
    <div class="hero-event-label">Afternoon Session</div>
    <h1 class="font-b">CODE<br>FORGE</h1>
    <div class="hero-time">14:00</div>
    <p class="hero-desc">An afternoon of live coding, systems architecture, and engineering craft. Build, break, rebuild.</p>
  </div>
</div>

<div class="site-wrapper">

<div class="section-block">
  <div class="section-label">Dual Clock</div>
  <h2>Event Timing</h2>

  <div class="clock-row">
    <div class="clock-block clock-a">
      <div class="clock-label">Event A Begins</div>
      <!-- SVG clock display A -->
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 12px auto; display: block;">
        <circle cx="60" cy="60" r="55" stroke="#c084fc" stroke-width="2" fill="none"/>
        <circle cx="60" cy="60" r="3" fill="#c084fc"/>
        <line x1="60" y1="60" x2="60" y2="25" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
        <line x1="60" y1="60" x2="85" y2="60" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
        <text x="60" y="8" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">12</text>
        <text x="112" y="64" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">3</text>
        <text x="60" y="118" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">6</text>
        <text x="8" y="64" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">9</text>
      </svg>
      <div class="clock-time">09:00</div>
      <div class="clock-period">Morning // Design Symposium</div>
    </div>
    <div class="clock-block clock-b">
      <div class="clock-label">Event B Begins</div>
      <!-- SVG clock display B -->
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 12px auto; display: block;">
        <circle cx="60" cy="60" r="55" stroke="#38bdf8" stroke-width="2" fill="none"/>
        <circle cx="60" cy="60" r="3" fill="#38bdf8"/>
        <line x1="60" y1="60" x2="60" y2="30" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <line x1="60" y1="60" x2="35" y2="60" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
        <text x="60" y="8" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">12</text>
        <text x="112" y="64" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">3</text>
        <text x="60" y="118" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">6</text>
        <text x="8" y="64" text-anchor="middle" fill="#5a5a7a" font-family="Montserrat, sans-serif" font-weight="700" font-size="8">9</text>
      </svg>
      <div class="clock-time">14:00</div>
      <div class="clock-period">Afternoon // Code Forge</div>
    </div>
  </div>
</div>

<div class="section-block">
  <div class="section-label">Combined Schedule</div>
  <h2>Parallel Program</h2>

  <div class="split-card">
    <div class="split-card-side">
      <div class="split-card-time">09:00 - 09:45</div>
      <div class="split-card-title">The Grid Manifesto</div>
      <div class="split-card-speaker">Ava Chen -- Design Lead, Lattice</div>
    </div>
    <div class="split-card-connector">PLUS</div>
    <div class="split-card-side">
      <div class="split-card-time">14:00 - 14:45</div>
      <div class="split-card-title">Zero-Alloc Systems</div>
      <div class="split-card-speaker">Kai Ortiz -- Staff Eng, Oxide</div>
    </div>
  </div>

  <div class="split-card">
    <div class="split-card-side">
      <div class="split-card-time">10:00 - 10:45</div>
      <div class="split-card-title">Type as Interface</div>
      <div class="split-card-speaker">Lena Park -- Typography Director</div>
    </div>
    <div class="split-card-connector">VS</div>
    <div class="split-card-side">
      <div class="split-card-time">15:00 - 15:45</div>
      <div class="split-card-title">Compiler Internals</div>
      <div class="split-card-speaker">Rho Vasquez -- Compiler Team, Zig</div>
    </div>
  </div>

  <div class="split-card">
    <div class="split-card-side">
      <div class="split-card-time">11:00 - 12:00</div>
      <div class="split-card-title">Color Systems Workshop</div>
      <div class="split-card-speaker">Mika Tanaka -- Color Scientist</div>
    </div>
    <div class="split-card-connector">PLUS</div>
    <div class="split-card-side">
      <div class="split-card-time">16:00 - 17:00</div>
      <div class="split-card-title">Live Debugging Arena</div>
      <div class="split-card-speaker">Priya Nair -- SRE Lead, Fleet</div>
    </div>
  </div>

  <div style="display: flex; gap: 12px; margin-top: 24px; align-items: center; flex-wrap: wrap;">
    <span class="event-badge event-badge-a">DESIGN SYMPOSIUM</span>
    <span class="event-badge event-badge-vs">VS</span>
    <span class="event-badge event-badge-b">CODE FORGE</span>
  </div>
</div>

<div class="section-block">
  <div class="section-label">Split Divider</div>
  <h2>Two Worlds, One Stage</h2>

  <!-- SVG vertical split divider pattern -->
  <svg width="100%" height="160" viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 24px auto; display: block; max-width: 600px;">
    <!-- Left side - Design / Playfair -->
    <rect x="0" y="0" width="290" height="160" fill="#10101c" stroke="#c084fc" stroke-width="1"/>
    <text x="145" y="45" text-anchor="middle" fill="#c084fc" font-family="Playfair Display, serif" font-weight="900" font-size="14" letter-spacing="4" font-style="italic">DESIGN</text>
    <text x="145" y="70" text-anchor="middle" fill="#c084fc" font-family="Playfair Display, serif" font-weight="900" font-size="36" font-style="italic">AM</text>
    <text x="145" y="100" text-anchor="middle" fill="#5a5a7a" font-family="Inter, sans-serif" font-weight="500" font-size="11">09:00 - 12:30</text>
    <text x="145" y="130" text-anchor="middle" fill="#5a5a7a" font-family="Inter, sans-serif" font-weight="500" font-size="11">4 Sessions // 1 Workshop</text>
    <line x1="60" y1="145" x2="230" y2="145" stroke="#c084fc" stroke-width="1" stroke-dasharray="4,4"/>

    <!-- Divider -->
    <line x1="300" y1="0" x2="300" y2="60" stroke="#1e1e3a" stroke-width="2"/>
    <rect x="280" y="60" width="40" height="40" fill="#0a0a12" stroke="#f472b6" stroke-width="2"/>
    <text x="300" y="85" text-anchor="middle" fill="#f472b6" font-family="Montserrat, sans-serif" font-weight="900" font-size="11">PLUS</text>
    <line x1="300" y1="100" x2="300" y2="160" stroke="#1e1e3a" stroke-width="2"/>

    <!-- Right side - Code / Montserrat -->
    <rect x="310" y="0" width="290" height="160" fill="#0a0a12" stroke="#38bdf8" stroke-width="1"/>
    <text x="455" y="45" text-anchor="middle" fill="#38bdf8" font-family="Montserrat, sans-serif" font-weight="900" font-size="14" letter-spacing="4">CODE</text>
    <text x="455" y="70" text-anchor="middle" fill="#38bdf8" font-family="Montserrat, sans-serif" font-weight="900" font-size="36">PM</text>
    <text x="455" y="100" text-anchor="middle" fill="#5a5a7a" font-family="Inter, sans-serif" font-weight="500" font-size="11">14:00 - 17:30</text>
    <text x="455" y="130" text-anchor="middle" fill="#5a5a7a" font-family="Inter, sans-serif" font-weight="500" font-size="11">4 Sessions // 1 Live Debug</text>
    <line x1="370" y1="145" x2="540" y2="145" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,4"/>
  </svg>

  <p style="text-align: center; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 0.8rem; color: var(--text-muted); letter-spacing: 0.2em; text-transform: uppercase;">2026.10.18 // MERIDIAN HALL, TORONTO</p>
</div>

</div>
