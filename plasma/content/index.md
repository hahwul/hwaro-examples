+++
title = "Plasma Science Dashboard"
description = "Fourth state of matter - real-time plasma physics observation and data visualization platform"
+++

<section class="hero-reactor">
  <div class="reactor-window">
    <div class="plasma-core">
      <svg class="field-lines" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#ff006e" stroke-width="1" opacity="0.5" class="field-line field-line-1"/>
        <ellipse cx="200" cy="200" rx="160" ry="80" fill="none" stroke="#00b4d8" stroke-width="1" opacity="0.4" class="field-line field-line-2"/>
        <ellipse cx="200" cy="200" rx="140" ry="100" fill="none" stroke="#ff006e" stroke-width="0.8" opacity="0.3" class="field-line field-line-3"/>
        <ellipse cx="200" cy="200" rx="120" ry="50" fill="none" stroke="#00b4d8" stroke-width="1.2" opacity="0.6" class="field-line field-line-4"/>
        <circle cx="200" cy="200" r="30" fill="#ff006e" opacity="0.15" class="core-glow"/>
        <circle cx="200" cy="200" r="8" fill="#e0fbfc" opacity="0.9" class="core-center"/>
      </svg>
    </div>
    <div class="reactor-label">
      <h1 class="hero-title">Plasma</h1>
      <p class="hero-subtitle">Fourth State of Matter -- Science Visualization Platform</p>
    </div>
  </div>
</section>

<section class="metrics-grid">
  <div class="data-card glow-magenta">
    <div class="card-header">
      <span class="card-indicator pulse-magenta"></span>
      <h3>Core Temperature</h3>
    </div>
    <div class="card-value">150,000,000 K</div>
    <p class="card-detail">Fifteen times hotter than the center of the Sun. At these temperatures, hydrogen nuclei possess enough kinetic energy to overcome Coulomb repulsion and undergo thermonuclear fusion.</p>
  </div>

  <div class="data-card glow-blue">
    <div class="card-header">
      <span class="card-indicator pulse-blue"></span>
      <h3>Magnetic Field</h3>
    </div>
    <div class="card-value">5.3 Tesla</div>
    <p class="card-detail">Toroidal magnetic confinement field strength. Superconducting magnets generate the field topology required to confine the plasma within the vacuum vessel.</p>
  </div>

  <div class="data-card glow-white">
    <div class="card-header">
      <span class="card-indicator pulse-white"></span>
      <h3>Plasma Density</h3>
    </div>
    <div class="card-value">1.0 x 10^20 m^-3</div>
    <p class="card-detail">Particle density within the confinement region. Despite extreme temperatures, the plasma is actually less dense than air at sea level.</p>
  </div>

  <div class="data-card glow-magenta">
    <div class="card-header">
      <span class="card-indicator pulse-magenta"></span>
      <h3>Confinement Time</h3>
    </div>
    <div class="card-value">400 seconds</div>
    <p class="card-detail">Duration of sustained plasma confinement in the current experimental run. The Lawson criterion demands sufficient confinement time for net energy gain.</p>
  </div>

  <div class="data-card glow-blue">
    <div class="card-header">
      <span class="card-indicator pulse-blue"></span>
      <h3>Fusion Power</h3>
    </div>
    <div class="card-value">500 MW</div>
    <p class="card-detail">Projected thermal output from deuterium-tritium fusion reactions. The energy amplification factor Q exceeds 10, marking a milestone in fusion energy research.</p>
  </div>

  <div class="data-card glow-white">
    <div class="card-header">
      <span class="card-indicator pulse-white"></span>
      <h3>Plasma Current</h3>
    </div>
    <div class="card-value">15 MA</div>
    <p class="card-detail">Toroidal plasma current providing poloidal magnetic field component. This current is essential for MHD equilibrium and plasma stability.</p>
  </div>
</section>

<section class="status-panel">
  <h2 class="panel-title">Reactor Systems Status</h2>
  <div class="status-grid">
    <div class="status-row">
      <span class="status-label">Vacuum Vessel Integrity</span>
      <span class="status-badge badge-active">Nominal</span>
    </div>
    <div class="status-row">
      <span class="status-label">Cryogenic Cooling System</span>
      <span class="status-badge badge-active">Operational</span>
    </div>
    <div class="status-row">
      <span class="status-label">Neutral Beam Injection</span>
      <span class="status-badge badge-active">Active</span>
    </div>
    <div class="status-row">
      <span class="status-label">Divertor Heat Load</span>
      <span class="status-badge badge-warning">Elevated</span>
    </div>
    <div class="status-row">
      <span class="status-label">Tritium Processing</span>
      <span class="status-badge badge-active">Cycling</span>
    </div>
    <div class="status-row">
      <span class="status-label">Plasma Diagnostics Array</span>
      <span class="status-badge badge-active">Recording</span>
    </div>
  </div>
</section>

<section class="observation-log">
  <h2 class="panel-title">Recent Observations</h2>
  <p>The plasma state represents matter in its most energetic form. When sufficient energy is applied to a gas, electrons are stripped from atomic nuclei, creating a soup of charged particles that responds to electric and magnetic fields. This fourth state of matter comprises over 99% of the visible universe -- every star, every nebula, every aurora is plasma in action.</p>
  <p>Our platform tracks experimental data from magnetic confinement fusion research, providing real-time visualization of plasma behavior, instability modes, and energy balance metrics. Browse our <a href="{{ base_url }}/posts/">research posts</a> for detailed analyses of recent experimental campaigns.</p>
</section>
