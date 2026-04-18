+++
title = "Home"
description = "Sequential trigger event where each session unlocks the next"
+++

<div class="hero">
  <div class="site-wrapper">
    <div class="hero-label">Sequential Trigger Event</div>
    <h1>CHAIN REACTION</h1>
    <p class="hero-subtitle">Each stage triggers the next. No skipping ahead. Complete the trigger condition and the next domino falls. Four stages of cascading consequence.</p>
    <p class="hero-date">2027.08.18 // KINETIC HALL, BERLIN</p>

    <!-- SVG domino chain falling sequence diagram -->
    <svg width="320" height="160" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto 0; display: block;">
      <!-- Domino 1 - standing -->
      <rect x="30" y="60" width="18" height="50" rx="2" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.35"/>
      <circle cx="39" cy="72" r="2.5" fill="#e67e22" opacity="0.25"/>
      <circle cx="39" cy="82" r="2.5" fill="#e67e22" opacity="0.25"/>
      <circle cx="39" cy="92" r="2.5" fill="#e67e22" opacity="0.25"/>
      <text x="39" y="125" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="7" opacity="0.3">1</text>
      <!-- Trigger arrow 1->2 -->
      <line x1="52" y1="85" x2="75" y2="75" stroke="#e67e22" stroke-width="1" opacity="0.2" stroke-dasharray="4 3"/>
      <polygon points="75,72 75,78 80,75" fill="#e67e22" opacity="0.2"/>
      <!-- Domino 2 - tilting -->
      <rect x="85" y="50" width="18" height="50" rx="2" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.3" transform="rotate(10 94 75)"/>
      <circle cx="94" cy="62" r="2.5" fill="#e67e22" opacity="0.2"/>
      <circle cx="94" cy="72" r="2.5" fill="#e67e22" opacity="0.2"/>
      <text x="98" y="125" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="7" opacity="0.25">2</text>
      <!-- Trigger arrow 2->3 -->
      <line x1="112" y1="70" x2="138" y2="60" stroke="#e67e22" stroke-width="1" opacity="0.2" stroke-dasharray="4 3"/>
      <polygon points="138,57 138,63 143,60" fill="#e67e22" opacity="0.2"/>
      <!-- Domino 3 - more tilted -->
      <rect x="148" y="40" width="18" height="50" rx="2" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.25" transform="rotate(25 157 65)"/>
      <circle cx="157" cy="52" r="2.5" fill="#e67e22" opacity="0.18"/>
      <text x="162" y="125" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="7" opacity="0.22">3</text>
      <!-- Trigger arrow 3->4 -->
      <line x1="175" y1="55" x2="205" y2="48" stroke="#e67e22" stroke-width="1" opacity="0.2" stroke-dasharray="4 3"/>
      <polygon points="205,45 205,51 210,48" fill="#e67e22" opacity="0.2"/>
      <!-- Domino 4 - fallen -->
      <rect x="215" y="35" width="18" height="50" rx="2" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.2" transform="rotate(50 224 60)"/>
      <text x="232" y="125" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="7" opacity="0.2">4</text>
      <!-- Chain label -->
      <text x="160" y="150" text-anchor="middle" fill="#7a4010" font-family="Inter, sans-serif" font-weight="700" font-size="7" letter-spacing="4">SEQUENTIAL CASCADE</text>
    </svg>
  </div>
</div>

<div class="site-wrapper">

<div class="section-block">
  <div class="section-label">Trigger Sequence</div>
  <h2>Stage Progression</h2>

  <div class="trigger-block">
    <div class="trigger-number">STAGE 1</div>
    <div class="trigger-info">
      <div class="trigger-title">Ignition -- Initial Spark</div>
      <div class="trigger-meta">Trigger condition: attendance confirmed. Unlocks Stage 2.</div>
    </div>
    <div class="trigger-badge-slot"><span class="chain-badge">ACTIVE</span></div>
  </div>

  <!-- SVG dependency arrow -->
  <div class="trigger-arrow">
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
      <line x1="20" y1="0" x2="20" y2="22" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
      <polygon points="14,20 26,20 20,28" fill="#e67e22" opacity="0.2"/>
    </svg>
  </div>

  <div class="trigger-block">
    <div class="trigger-number">STAGE 2</div>
    <div class="trigger-info">
      <div class="trigger-title">Propagation -- Spreading Wave</div>
      <div class="trigger-meta">Trigger condition: Stage 1 complete. Unlocks Stage 3.</div>
    </div>
    <div class="trigger-badge-slot"><span class="chain-badge-outline">LOCKED</span></div>
  </div>

  <div class="trigger-arrow">
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
      <line x1="20" y1="0" x2="20" y2="22" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
      <polygon points="14,20 26,20 20,28" fill="#e67e22" opacity="0.2"/>
    </svg>
  </div>

  <div class="trigger-block">
    <div class="trigger-number">STAGE 3</div>
    <div class="trigger-info">
      <div class="trigger-title">Amplification -- Critical Mass</div>
      <div class="trigger-meta">Trigger condition: Stages 1+2 complete. Unlocks Stage 4.</div>
    </div>
    <div class="trigger-badge-slot"><span class="chain-badge-outline">LOCKED</span></div>
  </div>

  <div class="trigger-arrow">
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
      <line x1="20" y1="0" x2="20" y2="22" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
      <polygon points="14,20 26,20 20,28" fill="#e67e22" opacity="0.2"/>
    </svg>
  </div>

  <div class="trigger-block">
    <div class="trigger-number">STAGE 4</div>
    <div class="trigger-info">
      <div class="trigger-title">Detonation -- Full Cascade</div>
      <div class="trigger-meta">Trigger condition: all stages complete. Final resolution.</div>
    </div>
    <div class="trigger-badge-slot"><span class="chain-badge-outline">FINAL</span></div>
  </div>
</div>

<div class="section-block">
  <div class="section-label">Dependencies</div>
  <h2>Reaction Branching</h2>

  <!-- SVG chain reaction branching pattern -->
  <svg width="100%" height="160" viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 24px auto; display: block; max-width: 600px;">
    <!-- Root node -->
    <circle cx="80" cy="80" r="12" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.3"/>
    <text x="80" y="84" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="8" opacity="0.3">1</text>
    <!-- Branch to 2 -->
    <line x1="92" y1="80" x2="188" y2="50" stroke="#e67e22" stroke-width="1" opacity="0.2"/>
    <circle cx="200" cy="45" r="12" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.25"/>
    <text x="200" y="49" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="8" opacity="0.25">2a</text>
    <!-- Branch to 2b -->
    <line x1="92" y1="80" x2="188" y2="115" stroke="#e67e22" stroke-width="1" opacity="0.2"/>
    <circle cx="200" cy="120" r="12" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.25"/>
    <text x="200" y="124" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="8" opacity="0.25">2b</text>
    <!-- Converge to 3 -->
    <line x1="212" y1="45" x2="348" y2="80" stroke="#e67e22" stroke-width="1" opacity="0.18"/>
    <line x1="212" y1="120" x2="348" y2="80" stroke="#e67e22" stroke-width="1" opacity="0.18"/>
    <circle cx="360" cy="80" r="12" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.22"/>
    <text x="360" y="84" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="8" opacity="0.22">3</text>
    <!-- Final to 4 -->
    <line x1="372" y1="80" x2="498" y2="80" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
    <circle cx="510" cy="80" r="14" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.3"/>
    <text x="510" y="84" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="8" opacity="0.3">4</text>
    <!-- Connection labels -->
    <text x="140" y="58" text-anchor="middle" fill="#7a4010" font-family="Inter, sans-serif" font-size="6" letter-spacing="1">TRIGGER</text>
    <text x="140" y="115" text-anchor="middle" fill="#7a4010" font-family="Inter, sans-serif" font-size="6" letter-spacing="1">TRIGGER</text>
    <text x="280" y="55" text-anchor="middle" fill="#7a4010" font-family="Inter, sans-serif" font-size="6" letter-spacing="1">MERGE</text>
    <text x="435" y="73" text-anchor="middle" fill="#7a4010" font-family="Inter, sans-serif" font-size="6" letter-spacing="1">CASCADE</text>
  </svg>
</div>

<div class="section-block">
  <div class="section-label">Mechanism</div>
  <h2>Rube Goldberg Machine</h2>

  <!-- SVG Rube Goldberg machine illustration -->
  <svg width="100%" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 24px auto; display: block; max-width: 600px;">
    <!-- Ball on ramp -->
    <circle cx="40" cy="30" r="8" stroke="#e67e22" stroke-width="1.5" fill="none" opacity="0.25"/>
    <line x1="20" y1="40" x2="100" y2="55" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
    <!-- Lever -->
    <line x1="100" y1="55" x2="100" y2="80" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
    <line x1="80" y1="80" x2="120" y2="80" stroke="#e67e22" stroke-width="2" opacity="0.2"/>
    <!-- Cup and string -->
    <path d="M150,50 L150,75 L175,75 L175,50" stroke="#e67e22" stroke-width="1" fill="none" opacity="0.2"/>
    <line x1="120" y1="60" x2="150" y2="55" stroke="#e67e22" stroke-width="0.8" opacity="0.15" stroke-dasharray="3 2"/>
    <!-- Wheel -->
    <circle cx="240" cy="60" r="20" stroke="#e67e22" stroke-width="1.5" fill="none" opacity="0.2"/>
    <line x1="225" y1="48" x2="255" y2="72" stroke="#e67e22" stroke-width="0.8" opacity="0.15"/>
    <line x1="255" y1="48" x2="225" y2="72" stroke="#e67e22" stroke-width="0.8" opacity="0.15"/>
    <line x1="175" y1="65" x2="220" y2="60" stroke="#e67e22" stroke-width="0.8" opacity="0.15" stroke-dasharray="3 2"/>
    <!-- Pendulum -->
    <line x1="320" y1="20" x2="340" y2="70" stroke="#e67e22" stroke-width="1.5" opacity="0.2"/>
    <circle cx="340" cy="75" r="8" stroke="#e67e22" stroke-width="1.5" fill="none" opacity="0.2"/>
    <line x1="260" y1="55" x2="320" y2="25" stroke="#e67e22" stroke-width="0.8" opacity="0.15" stroke-dasharray="3 2"/>
    <!-- Domino sequence -->
    <rect x="390" y="50" width="8" height="30" rx="1" stroke="#e67e22" stroke-width="1" fill="none" opacity="0.2"/>
    <rect x="410" y="48" width="8" height="30" rx="1" stroke="#e67e22" stroke-width="1" fill="none" opacity="0.18" transform="rotate(5 414 63)"/>
    <rect x="430" y="44" width="8" height="30" rx="1" stroke="#e67e22" stroke-width="1" fill="none" opacity="0.15" transform="rotate(15 434 59)"/>
    <line x1="348" y1="75" x2="390" y2="65" stroke="#e67e22" stroke-width="0.8" opacity="0.15" stroke-dasharray="3 2"/>
    <!-- Final trigger -->
    <circle cx="520" cy="65" r="15" stroke="#e67e22" stroke-width="2" fill="none" opacity="0.25"/>
    <text x="520" y="69" text-anchor="middle" fill="#e67e22" font-family="Montserrat, sans-serif" font-weight="900" font-size="8" opacity="0.2">END</text>
    <line x1="440" y1="55" x2="505" y2="65" stroke="#e67e22" stroke-width="0.8" opacity="0.15" stroke-dasharray="3 2"/>
    <!-- Labels -->
    <text x="300" y="110" text-anchor="middle" fill="#7a4010" font-family="Inter, sans-serif" font-weight="700" font-size="7" letter-spacing="4">CAUSE AND EFFECT</text>
  </svg>

  <p style="text-align: center; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.8rem; color: var(--text-muted); letter-spacing: 0.2em; text-transform: uppercase;">stage 1 > stage 2 > stage 3 > stage 4</p>
</div>

</div>
