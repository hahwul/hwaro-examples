+++
title = "Mission Control"
description = "Multi-phase launch event with rocket ignition sequence precision"
+++

<div class="hero">
  <svg class="svg-decoration" width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Rocket body -->
    <rect x="85" y="20" width="30" height="90" fill="#ff6a00" stroke="#e8e8f0" stroke-width="2"/>
    <!-- Nose cone -->
    <polygon points="100,2 115,20 85,20" fill="#ff6a00" stroke="#e8e8f0" stroke-width="2"/>
    <!-- Fins -->
    <polygon points="85,90 65,120 85,110" fill="#ff2020" stroke="#e8e8f0" stroke-width="1.5"/>
    <polygon points="115,90 135,120 115,110" fill="#ff2020" stroke="#e8e8f0" stroke-width="1.5"/>
    <!-- Engine nozzle -->
    <rect x="90" y="110" width="20" height="12" fill="#2a2a3a" stroke="#e8e8f0" stroke-width="1.5"/>
    <!-- Exhaust flames -->
    <polygon points="92,122 100,165 108,122" fill="#ffcc00"/>
    <polygon points="95,122 100,150 105,122" fill="#ff6a00"/>
    <!-- Window -->
    <circle cx="100" cy="50" r="8" fill="#0a0a0f" stroke="#e8e8f0" stroke-width="2"/>
    <circle cx="100" cy="50" r="4" fill="#0088ff"/>
  </svg>
  <div class="hero-phase-label">// Phase 04 Active</div>
  <h1>Ignition Sequence</h1>
  <p class="hero-subtitle">A multi-phase launch event engineered with rocket ignition sequence precision. Four phases. One mission. Zero margin for error.</p>
  <div class="hero-date">2026.08.15 // T-MINUS COUNTING</div>
</div>

<div class="phase-bar">
  <div class="phase-step complete">
    <span class="phase-number">Phase 01</span>
    PRIME
  </div>
  <div class="phase-step complete">
    <span class="phase-number">Phase 02</span>
    IGNITE
  </div>
  <div class="phase-step active">
    <span class="phase-number">Phase 03</span>
    THROTTLE UP
  </div>
  <div class="phase-step">
    <span class="phase-number">Phase 04</span>
    LIFTOFF
  </div>
</div>

<div class="status-row">
  <div class="status-item">
    <div class="status-light nominal"></div>
    <span class="status-label nominal">PROPULSION: NOMINAL</span>
  </div>
  <div class="status-item">
    <div class="status-light go"></div>
    <span class="status-label go">GUIDANCE: GO</span>
  </div>
  <div class="status-item">
    <div class="status-light go"></div>
    <span class="status-label go">TELEMETRY: GO</span>
  </div>
  <div class="status-item">
    <div class="status-light standby"></div>
    <span class="status-label standby">PAYLOAD: STANDBY</span>
  </div>
</div>

<div class="site-wrapper">
  <div class="section-block">
    <div class="section-label">// Mission Telemetry</div>
    <h2>Throttle Gauges</h2>
    <div class="gauge-container">
      <div class="gauge">
        <div class="gauge-label">Main Engine</div>
        <div class="gauge-value">87%</div>
        <div class="gauge-bar"><div class="gauge-fill" style="width: 87%;"></div></div>
        <div class="gauge-unit">Thrust Output</div>
      </div>
      <div class="gauge">
        <div class="gauge-label">Fuel Pressure</div>
        <div class="gauge-value">3.2</div>
        <div class="gauge-bar"><div class="gauge-fill" style="width: 72%;"></div></div>
        <div class="gauge-unit">MPa</div>
      </div>
      <div class="gauge">
        <div class="gauge-label">Burn Duration</div>
        <div class="gauge-value">T+42</div>
        <div class="gauge-bar"><div class="gauge-fill" style="width: 55%;"></div></div>
        <div class="gauge-unit">Seconds</div>
      </div>
    </div>
  </div>

  <div class="section-block">
    <div class="section-label">// Engine Status Array</div>
    <h2>Engine Cluster</h2>
    <div class="engine-grid">
      <div class="engine-card nominal">
        <div class="engine-id">ENG-001</div>
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="2" width="30" height="30" fill="none" stroke="#00ff66" stroke-width="2"/>
          <circle cx="30" cy="17" r="8" fill="none" stroke="#00ff66" stroke-width="2"/>
          <line x1="30" y1="32" x2="22" y2="48" stroke="#ffcc00" stroke-width="2"/>
          <line x1="30" y1="32" x2="38" y2="48" stroke="#ffcc00" stroke-width="2"/>
          <line x1="30" y1="32" x2="30" y2="48" stroke="#ff6a00" stroke-width="2"/>
        </svg>
        <div class="engine-name">Merlin Alpha</div>
        <div class="engine-status nominal">STATUS: NOMINAL</div>
      </div>
      <div class="engine-card nominal">
        <div class="engine-id">ENG-002</div>
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="2" width="30" height="30" fill="none" stroke="#00ff66" stroke-width="2"/>
          <circle cx="30" cy="17" r="8" fill="none" stroke="#00ff66" stroke-width="2"/>
          <line x1="30" y1="32" x2="22" y2="48" stroke="#ffcc00" stroke-width="2"/>
          <line x1="30" y1="32" x2="38" y2="48" stroke="#ffcc00" stroke-width="2"/>
          <line x1="30" y1="32" x2="30" y2="48" stroke="#ff6a00" stroke-width="2"/>
        </svg>
        <div class="engine-name">Merlin Beta</div>
        <div class="engine-status nominal">STATUS: NOMINAL</div>
      </div>
      <div class="engine-card nominal">
        <div class="engine-id">ENG-003</div>
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="2" width="30" height="30" fill="none" stroke="#00ff66" stroke-width="2"/>
          <circle cx="30" cy="17" r="8" fill="none" stroke="#00ff66" stroke-width="2"/>
          <line x1="30" y1="32" x2="22" y2="48" stroke="#ffcc00" stroke-width="2"/>
          <line x1="30" y1="32" x2="38" y2="48" stroke="#ffcc00" stroke-width="2"/>
          <line x1="30" y1="32" x2="30" y2="48" stroke="#ff6a00" stroke-width="2"/>
        </svg>
        <div class="engine-name">Merlin Gamma</div>
        <div class="engine-status nominal">STATUS: NOMINAL</div>
      </div>
      <div class="engine-card standby">
        <div class="engine-id">ENG-004</div>
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="2" width="30" height="30" fill="none" stroke="#ffcc00" stroke-width="2"/>
          <circle cx="30" cy="17" r="8" fill="none" stroke="#ffcc00" stroke-width="2"/>
          <line x1="26" y1="44" x2="34" y2="44" stroke="#ffcc00" stroke-width="2"/>
        </svg>
        <div class="engine-name">Merlin Delta</div>
        <div class="engine-status standby">STATUS: STANDBY</div>
      </div>
    </div>
  </div>

  <div class="section-block">
    <div class="section-label">// Mission Timeline</div>
    <h2>Launch Sequence</h2>
    <div class="timeline">
      <div class="timeline-item complete">
        <div class="timeline-time">T-120:00 // Phase 01</div>
        <div class="timeline-title">PRIME</div>
        <div class="timeline-desc">Systems check and propellant loading. All flight computers initialized. Ground crew stations manned and verified.</div>
      </div>
      <div class="timeline-item complete">
        <div class="timeline-time">T-60:00 // Phase 02</div>
        <div class="timeline-title">IGNITE</div>
        <div class="timeline-desc">Engine ignition sequence initiated. Turbopump spin-up confirmed. Main chamber pressure nominal at 3.2 MPa.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-time">T-10:00 // Phase 03</div>
        <div class="timeline-title">THROTTLE UP</div>
        <div class="timeline-desc">Full thrust commit. All engines at 100% rated power. Final GO/NO-GO poll from all stations. Launch director authorization required.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-time">T-00:00 // Phase 04</div>
        <div class="timeline-title">LIFTOFF</div>
        <div class="timeline-desc">Hold-down clamps released. Vehicle ascending. Tower clearance confirmed. All parameters within flight envelope.</div>
      </div>
    </div>
  </div>

  <div class="section-block">
    <div class="section-label">// Keynote Sessions</div>
    <h2>Mission Briefings</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Propulsion Systems Architecture</h3>
        <p>Deep dive into modern engine cluster design, turbopump engineering, and thrust vectoring control systems.</p>
        <span class="card-tag">Phase: Prime</span>
      </div>
      <div class="card">
        <h3>Guidance, Navigation and Control</h3>
        <p>Autonomous flight termination systems, inertial measurement units, and real-time trajectory optimization.</p>
        <span class="card-tag">Phase: Ignite</span>
      </div>
      <div class="card">
        <h3>Mission Assurance and Reliability</h3>
        <p>Failure mode analysis, redundancy design patterns, and lessons from anomaly investigations.</p>
        <span class="card-tag">Phase: Throttle Up</span>
      </div>
      <div class="card">
        <h3>Launch Operations and Range Safety</h3>
        <p>Countdown procedures, weather constraints, range safety protocols, and autonomous flight safety systems.</p>
        <span class="card-tag">Phase: Liftoff</span>
      </div>
    </div>
  </div>
</div>
