+++
title = "Planetary Engineering Command Interface"
description = "Real-time terraforming operations dashboard for active planetary transformation projects"
template = "page"
+++

<div class="tf-hud-bar">
  <div class="tf-hud-item">
    <span class="tf-hud-label">SYSTEM STATUS</span>
    <span class="tf-hud-value tf-green">NOMINAL</span>
  </div>
  <div class="tf-hud-item">
    <span class="tf-hud-label">ACTIVE WORLDS</span>
    <span class="tf-hud-value">3</span>
  </div>
  <div class="tf-hud-item">
    <span class="tf-hud-label">FLEET POSITION</span>
    <span class="tf-hud-value tf-blue">INNER BELT</span>
  </div>
  <div class="tf-hud-item">
    <span class="tf-hud-label">MISSION ELAPSED</span>
    <span class="tf-hud-value tf-mono">47Y 203D 14H</span>
  </div>
  <div class="tf-hud-item">
    <span class="tf-hud-label">PRIORITY ALERT</span>
    <span class="tf-hud-value tf-red">KEPLER-442b THERMAL SPIKE</span>
  </div>
</div>

<div class="tf-section-label">ACTIVE PLANET TARGETS</div>

<div class="tf-planet-grid">

  <div class="tf-planet-card">
    <div class="tf-planet-view">
      <div class="tf-planet-body tf-planet-mars">
        <div class="tf-planet-surface-line"></div>
        <div class="tf-planet-surface-line" style="top: 38%;"></div>
        <div class="tf-planet-surface-line" style="top: 62%;"></div>
      </div>
      <div class="tf-planet-orbit-ring"></div>
      <div class="tf-planet-orbit-dot"></div>
    </div>
    <div class="tf-planet-info">
      <div class="tf-planet-name">MARS IV-B</div>
      <div class="tf-planet-coords">SOL SYSTEM / 227.9M KM</div>
      <div class="tf-progress-block">
        <div class="tf-progress-row">
          <span class="tf-progress-label">ATMOSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-blue" style="width: 34%;"></div>
          </div>
          <span class="tf-progress-pct">34%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">TEMPERATURE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-green" style="width: 28%;"></div>
          </div>
          <span class="tf-progress-pct">28%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">HYDROSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-blue" style="width: 12%;"></div>
          </div>
          <span class="tf-progress-pct">12%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">BIOSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-green" style="width: 4%;"></div>
          </div>
          <span class="tf-progress-pct">4%</span>
        </div>
      </div>
      <div class="tf-planet-status tf-status-active">PHASE 2 - ACTIVE</div>
    </div>
  </div>

  <div class="tf-planet-card">
    <div class="tf-planet-view">
      <div class="tf-planet-body tf-planet-kepler">
        <div class="tf-planet-surface-line" style="top: 30%;"></div>
        <div class="tf-planet-surface-line" style="top: 55%;"></div>
        <div class="tf-planet-surface-line" style="top: 72%;"></div>
      </div>
      <div class="tf-planet-orbit-ring" style="width: 140px; height: 140px;"></div>
      <div class="tf-planet-orbit-dot" style="animation-duration: 6s;"></div>
    </div>
    <div class="tf-planet-info">
      <div class="tf-planet-name">KEPLER-442b</div>
      <div class="tf-planet-coords">CYGNUS ARM / 1,200 LY</div>
      <div class="tf-progress-block">
        <div class="tf-progress-row">
          <span class="tf-progress-label">ATMOSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-blue" style="width: 71%;"></div>
          </div>
          <span class="tf-progress-pct">71%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">TEMPERATURE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-red" style="width: 89%;"></div>
          </div>
          <span class="tf-progress-pct tf-red">89%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">HYDROSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-blue" style="width: 53%;"></div>
          </div>
          <span class="tf-progress-pct">53%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">BIOSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-green" style="width: 37%;"></div>
          </div>
          <span class="tf-progress-pct">37%</span>
        </div>
      </div>
      <div class="tf-planet-status tf-status-warn">PHASE 4 - THERMAL ALERT</div>
    </div>
  </div>

  <div class="tf-planet-card">
    <div class="tf-planet-view">
      <div class="tf-planet-body tf-planet-proxima">
        <div class="tf-planet-surface-line" style="top: 42%;"></div>
        <div class="tf-planet-surface-line" style="top: 58%;"></div>
      </div>
      <div class="tf-planet-orbit-ring" style="width: 120px; height: 120px;"></div>
      <div class="tf-planet-orbit-dot" style="animation-duration: 9s;"></div>
    </div>
    <div class="tf-planet-info">
      <div class="tf-planet-name">PROXIMA Cb</div>
      <div class="tf-planet-coords">ALPHA CENTAURI / 4.2 LY</div>
      <div class="tf-progress-block">
        <div class="tf-progress-row">
          <span class="tf-progress-label">ATMOSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-blue" style="width: 9%;"></div>
          </div>
          <span class="tf-progress-pct">9%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">TEMPERATURE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-green" style="width: 6%;"></div>
          </div>
          <span class="tf-progress-pct">6%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">HYDROSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-blue" style="width: 2%;"></div>
          </div>
          <span class="tf-progress-pct">2%</span>
        </div>
        <div class="tf-progress-row">
          <span class="tf-progress-label">BIOSPHERE</span>
          <div class="tf-progress-bar-track">
            <div class="tf-progress-bar-fill tf-fill-green" style="width: 0%;"></div>
          </div>
          <span class="tf-progress-pct">0%</span>
        </div>
      </div>
      <div class="tf-planet-status tf-status-init">PHASE 1 - SURVEY</div>
    </div>
  </div>

</div>

<div class="tf-dashboard-lower">

  <div class="tf-atmos-panel">
    <div class="tf-panel-header">
      <span class="tf-panel-tag">HUD</span>
      ATMOSPHERE COMPOSITION OVERLAY — MARS IV-B
    </div>
    <div class="tf-atmos-display">
      <div class="tf-atmos-row">
        <span class="tf-atmos-label">CO2</span>
        <div class="tf-atmos-bar-track">
          <div class="tf-atmos-bar" style="width: 62%; background-color: #dc2626;"></div>
        </div>
        <span class="tf-atmos-val">62.1%</span>
        <span class="tf-atmos-target">[TARGET: 0.04%]</span>
      </div>
      <div class="tf-atmos-row">
        <span class="tf-atmos-label">N2</span>
        <div class="tf-atmos-bar-track">
          <div class="tf-atmos-bar" style="width: 21%; background-color: #3b82f6;"></div>
        </div>
        <span class="tf-atmos-val">21.3%</span>
        <span class="tf-atmos-target">[TARGET: 78%]</span>
      </div>
      <div class="tf-atmos-row">
        <span class="tf-atmos-label">O2</span>
        <div class="tf-atmos-bar-track">
          <div class="tf-atmos-bar" style="width: 8%; background-color: #16a34a;"></div>
        </div>
        <span class="tf-atmos-val">8.4%</span>
        <span class="tf-atmos-target">[TARGET: 21%]</span>
      </div>
      <div class="tf-atmos-row">
        <span class="tf-atmos-label">AR</span>
        <div class="tf-atmos-bar-track">
          <div class="tf-atmos-bar" style="width: 5%; background-color: #6b7280;"></div>
        </div>
        <span class="tf-atmos-val">5.1%</span>
        <span class="tf-atmos-target">[TARGET: 0.9%]</span>
      </div>
      <div class="tf-atmos-row">
        <span class="tf-atmos-label">H2O</span>
        <div class="tf-atmos-bar-track">
          <div class="tf-atmos-bar" style="width: 3%; background-color: #3b82f6;"></div>
        </div>
        <span class="tf-atmos-val">3.1%</span>
        <span class="tf-atmos-target">[TARGET: 1%]</span>
      </div>
    </div>
  </div>

  <div class="tf-metrics-col">
    <div class="tf-metric-card">
      <div class="tf-panel-header">
        <span class="tf-panel-tag">ENV</span>
        PLANETARY PARAMETERS
      </div>
      <table class="tf-data-table">
        <tbody>
          <tr>
            <td class="tf-td-label">Surface Temp</td>
            <td class="tf-td-val tf-red">-31 C</td>
            <td class="tf-td-target">Target: +15 C</td>
          </tr>
          <tr>
            <td class="tf-td-label">Gravity</td>
            <td class="tf-td-val">0.38 g</td>
            <td class="tf-td-target">Unmodifiable</td>
          </tr>
          <tr>
            <td class="tf-td-label">Atmos Pressure</td>
            <td class="tf-td-val tf-blue">0.84 atm</td>
            <td class="tf-td-target">Target: 1.0 atm</td>
          </tr>
          <tr>
            <td class="tf-td-label">Magnetic Field</td>
            <td class="tf-td-val tf-green">NOMINAL</td>
            <td class="tf-td-target">Generator A3 Online</td>
          </tr>
          <tr>
            <td class="tf-td-label">Solar Flux</td>
            <td class="tf-td-val">590 W/m2</td>
            <td class="tf-td-target">Mirror Array: 87%</td>
          </tr>
          <tr>
            <td class="tf-td-label">Ocean Coverage</td>
            <td class="tf-td-val tf-blue">3.2%</td>
            <td class="tf-td-target">Target: 40%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="tf-metric-card" style="margin-top: 1rem;">
      <div class="tf-panel-header">
        <span class="tf-panel-tag">SAT</span>
        ORBITAL ASSETS — MARS IV-B
      </div>
      <table class="tf-data-table">
        <tbody>
          <tr>
            <td class="tf-td-label">MIRROR-SAT-01</td>
            <td class="tf-td-val tf-green">ACTIVE</td>
            <td class="tf-td-target">ALT: 22,340 km</td>
          </tr>
          <tr>
            <td class="tf-td-label">MIRROR-SAT-02</td>
            <td class="tf-td-val tf-green">ACTIVE</td>
            <td class="tf-td-target">ALT: 22,340 km</td>
          </tr>
          <tr>
            <td class="tf-td-label">ATMOS-INJECT-01</td>
            <td class="tf-td-val tf-green">ACTIVE</td>
            <td class="tf-td-target">ALT: 180 km</td>
          </tr>
          <tr>
            <td class="tf-td-label">SURVEY-DRONE-07</td>
            <td class="tf-td-val tf-blue">TRANSIT</td>
            <td class="tf-td-target">ETA: 14H</td>
          </tr>
          <tr>
            <td class="tf-td-label">CRYO-COMET-03</td>
            <td class="tf-td-val tf-red">IMPACT -6D</td>
            <td class="tf-td-target">H2O DELIVERY</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<div class="tf-section-label" style="margin-top: 2rem;">MISSION BRIEFINGS</div>
<div class="tf-mission-links">
  <a href="{{ base_url }}/missions/" class="tf-mission-link-btn">VIEW ALL MISSION BRIEFINGS</a>
</div>
