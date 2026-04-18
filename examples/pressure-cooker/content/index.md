+++
title = "Home"
description = "Hackathon and intensive workshop -- pressure builds to max, then we ship"
+++

<div class="hero">
  <div class="site-wrapper">
    <div class="hero-label">48-Hour Hackathon</div>
    <h1>PRESSURE COOKER</h1>
    <div class="hero-deadline">DEADLINE</div>
    <p class="hero-subtitle">The clock is ticking. The pressure is rising. Build something real before the valve blows.</p>
    <p class="hero-date">2026.12.06-08 // FOUNDRY LABS, BERLIN</p>

    <!-- SVG pressure gauge -->
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto 0; display: block;">
      <!-- Gauge body -->
      <circle cx="100" cy="100" r="90" stroke="#2a1e1e" stroke-width="3" fill="#140e0e"/>
      <circle cx="100" cy="100" r="80" stroke="#2a1e1e" stroke-width="1" fill="none"/>
      <!-- Scale marks -->
      <line x1="100" y1="25" x2="100" y2="35" stroke="#6a5050" stroke-width="2"/>
      <line x1="35" y1="130" x2="44" y2="125" stroke="#6a5050" stroke-width="2"/>
      <line x1="165" y1="130" x2="156" y2="125" stroke="#6a5050" stroke-width="2"/>
      <line x1="50" y1="55" x2="58" y2="62" stroke="#6a5050" stroke-width="2"/>
      <line x1="150" y1="55" x2="142" y2="62" stroke="#6a5050" stroke-width="2"/>
      <!-- Labels -->
      <text x="35" y="145" text-anchor="middle" fill="#d69e2e" font-family="Anton, sans-serif" font-size="10">LOW</text>
      <text x="100" y="22" text-anchor="middle" fill="#dd6b20" font-family="Anton, sans-serif" font-size="10">MID</text>
      <text x="165" y="145" text-anchor="middle" fill="#e53e3e" font-family="Anton, sans-serif" font-size="10">MAX</text>
      <!-- Needle pointing to high/max -->
      <line x1="100" y1="100" x2="148" y2="62" stroke="#e53e3e" stroke-width="3" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="6" fill="#e53e3e"/>
      <!-- RED ZONE arc -->
      <path d="M140,40 A80,80 0 0,1 170,120" stroke="#e53e3e" stroke-width="4" fill="none" opacity="0.4"/>
      <!-- PSI reading -->
      <text x="100" y="160" text-anchor="middle" fill="#e53e3e" font-family="Anton, sans-serif" font-size="18">48:00:00</text>
      <text x="100" y="178" text-anchor="middle" fill="#6a5050" font-family="Roboto, sans-serif" font-weight="700" font-size="8" letter-spacing="3">HOURS REMAINING</text>
    </svg>
  </div>
</div>

<div class="site-wrapper">

<div class="section-block">
  <div class="section-label">Pressure Levels</div>
  <h2>Stage Progression</h2>

  <div class="pressure-levels">
    <div class="pressure-row">
      <span class="pressure-stage">STAGE 01</span>
      <span class="pressure-name">Ignition -- Team Formation</span>
      <span class="pressure-indicator pressure-low">LOW</span>
    </div>
    <div class="pressure-row">
      <span class="pressure-stage">STAGE 02</span>
      <span class="pressure-name">Build Phase -- Core Development</span>
      <span class="pressure-indicator pressure-mid">MID</span>
    </div>
    <div class="pressure-row">
      <span class="pressure-stage">STAGE 03</span>
      <span class="pressure-name">Integration -- Systems Connect</span>
      <span class="pressure-indicator pressure-high">HIGH</span>
    </div>
    <div class="pressure-row">
      <span class="pressure-stage">STAGE 04</span>
      <span class="pressure-name">Final Push -- Ship or Bust</span>
      <span class="pressure-indicator pressure-max">MAX</span>
    </div>
  </div>

  <div style="display: flex; gap: 16px; margin-top: 24px; align-items: center; flex-wrap: wrap;">
    <span class="deadline-stamp">DEADLINE</span>
    <span style="font-family: 'Roboto', sans-serif; font-weight: 700; font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.1em;">SUNDAY 18:00 // NO EXTENSIONS</span>
  </div>
</div>

<div class="section-block">
  <div class="section-label">Countdown</div>
  <h2>Time Remaining</h2>

  <div class="countdown-row">
    <div class="countdown-unit">
      <div class="countdown-number">48</div>
      <div class="countdown-label">Hours</div>
    </div>
    <div class="countdown-unit">
      <div class="countdown-number">00</div>
      <div class="countdown-label">Minutes</div>
    </div>
    <div class="countdown-unit">
      <div class="countdown-number">00</div>
      <div class="countdown-label">Seconds</div>
    </div>
  </div>
</div>

<div class="section-block">
  <div class="section-label">Pressure Vessel</div>
  <h2>System Architecture</h2>

  <!-- SVG pressure vessel cross-section -->
  <svg width="100%" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 24px auto; display: block; max-width: 600px;">
    <!-- Vessel body -->
    <rect x="100" y="30" width="400" height="140" rx="70" fill="#140e0e" stroke="#2a1e1e" stroke-width="3"/>
    <!-- Internal pressure lines -->
    <line x1="160" y1="80" x2="440" y2="80" stroke="#e53e3e" stroke-width="1" opacity="0.2"/>
    <line x1="160" y1="100" x2="440" y2="100" stroke="#e53e3e" stroke-width="1" opacity="0.3"/>
    <line x1="160" y1="120" x2="440" y2="120" stroke="#e53e3e" stroke-width="1" opacity="0.2"/>
    <!-- Steam release valve left -->
    <rect x="130" y="10" width="20" height="25" fill="#140e0e" stroke="#dd6b20" stroke-width="2"/>
    <line x1="134" y1="5" x2="128" y2="0" stroke="#dd6b20" stroke-width="1" opacity="0.5"/>
    <line x1="140" y1="5" x2="140" y2="0" stroke="#dd6b20" stroke-width="1" opacity="0.5"/>
    <line x1="146" y1="5" x2="152" y2="0" stroke="#dd6b20" stroke-width="1" opacity="0.5"/>
    <!-- Steam release valve right -->
    <rect x="450" y="10" width="20" height="25" fill="#140e0e" stroke="#dd6b20" stroke-width="2"/>
    <line x1="454" y1="5" x2="448" y2="0" stroke="#dd6b20" stroke-width="1" opacity="0.5"/>
    <line x1="460" y1="5" x2="460" y2="0" stroke="#dd6b20" stroke-width="1" opacity="0.5"/>
    <line x1="466" y1="5" x2="472" y2="0" stroke="#dd6b20" stroke-width="1" opacity="0.5"/>
    <!-- Stage labels inside -->
    <text x="200" y="105" text-anchor="middle" fill="#d69e2e" font-family="Anton, sans-serif" font-size="11">STAGE 1</text>
    <text x="300" y="105" text-anchor="middle" fill="#dd6b20" font-family="Anton, sans-serif" font-size="11">STAGE 2</text>
    <text x="400" y="105" text-anchor="middle" fill="#e53e3e" font-family="Anton, sans-serif" font-size="11">STAGE 3</text>
    <text x="500" y="105" text-anchor="middle" fill="#e53e3e" font-family="Anton, sans-serif" font-size="13">MAX</text>
    <!-- Dividers -->
    <line x1="250" y1="50" x2="250" y2="150" stroke="#2a1e1e" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="350" y1="50" x2="350" y2="150" stroke="#2a1e1e" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="450" y1="50" x2="450" y2="150" stroke="#2a1e1e" stroke-width="1" stroke-dasharray="4,4"/>
    <!-- Pressure reading -->
    <text x="300" y="185" text-anchor="middle" fill="#e53e3e" font-family="Anton, sans-serif" font-size="14" letter-spacing="3">PRESSURE BUILDING</text>
  </svg>
</div>

<div class="section-block">
  <div class="section-label">Steam Release</div>
  <h2>Mentorship Windows</h2>

  <p style="color: var(--text-secondary); margin-bottom: 20px;">Scheduled breaks where senior engineers review progress and release pressure through guided feedback.</p>

  <!-- SVG steam release valves -->
  <svg width="100%" height="100" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 16px auto; display: block; max-width: 600px;">
    <!-- Valve 1 -->
    <rect x="60" y="40" width="40" height="30" fill="#140e0e" stroke="#dd6b20" stroke-width="2"/>
    <line x1="68" y1="35" x2="60" y2="15" stroke="#dd6b20" stroke-width="1.5" opacity="0.4"/>
    <line x1="80" y1="35" x2="80" y2="10" stroke="#dd6b20" stroke-width="1.5" opacity="0.5"/>
    <line x1="92" y1="35" x2="100" y2="15" stroke="#dd6b20" stroke-width="1.5" opacity="0.4"/>
    <text x="80" y="88" text-anchor="middle" fill="#6a5050" font-family="Roboto, sans-serif" font-weight="700" font-size="8">SAT 12:00</text>

    <!-- Valve 2 -->
    <rect x="220" y="40" width="40" height="30" fill="#140e0e" stroke="#dd6b20" stroke-width="2"/>
    <line x1="228" y1="35" x2="220" y2="15" stroke="#dd6b20" stroke-width="1.5" opacity="0.4"/>
    <line x1="240" y1="35" x2="240" y2="10" stroke="#dd6b20" stroke-width="1.5" opacity="0.5"/>
    <line x1="252" y1="35" x2="260" y2="15" stroke="#dd6b20" stroke-width="1.5" opacity="0.4"/>
    <text x="240" y="88" text-anchor="middle" fill="#6a5050" font-family="Roboto, sans-serif" font-weight="700" font-size="8">SAT 20:00</text>

    <!-- Valve 3 -->
    <rect x="380" y="40" width="40" height="30" fill="#140e0e" stroke="#dd6b20" stroke-width="2"/>
    <line x1="388" y1="35" x2="380" y2="15" stroke="#dd6b20" stroke-width="1.5" opacity="0.4"/>
    <line x1="400" y1="35" x2="400" y2="10" stroke="#dd6b20" stroke-width="1.5" opacity="0.5"/>
    <line x1="412" y1="35" x2="420" y2="15" stroke="#dd6b20" stroke-width="1.5" opacity="0.4"/>
    <text x="400" y="88" text-anchor="middle" fill="#6a5050" font-family="Roboto, sans-serif" font-weight="700" font-size="8">SUN 10:00</text>

    <!-- Connecting pipe -->
    <line x1="100" y1="55" x2="220" y2="55" stroke="#2a1e1e" stroke-width="2"/>
    <line x1="260" y1="55" x2="380" y2="55" stroke="#2a1e1e" stroke-width="2"/>
    <line x1="420" y1="55" x2="540" y2="55" stroke="#2a1e1e" stroke-width="2"/>
  </svg>
</div>

</div>
