+++
title = "Instrument Specifications"
description = "Measurement instrument specifications, calibration details, and operating parameters for the EM31-ICE system."
tags = ["paper", "light", "raw", "data", "tables"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">INSTRUMENT SPECIFICATIONS</p>
  <h1 class="paper-section-title">Measurement System</h1>
</header>

<div class="instrument-spec">
  <p class="spec-label">Primary Instrument</p>
  <p>Geonics EM31-ICE ground-conductivity meter, serial #4821, firmware v3.2.1</p>
</div>

<figure class="figure">
  <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Instrument specification diagram showing EM31-ICE sled-mounted configuration with transmitter and receiver coil separation">
    <rect x="0" y="0" width="720" height="220" fill="#fafaf7"/>
    <text x="360" y="24" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="12" fill="#1a2030">EM31-ICE Sled Configuration (not to scale)</text>
    <!-- Ice surface -->
    <line x1="60" y1="140" x2="660" y2="140" stroke="#2a5a8a" stroke-width="2"/>
    <text x="670" y="144" font-family="JetBrains Mono" font-size="9" fill="#2a5a8a">ice surface</text>
    <!-- Sled -->
    <rect x="160" y="110" width="400" height="26" fill="none" stroke="#1a2030" stroke-width="1.5"/>
    <text x="360" y="128" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#1a2030">SLED PLATFORM</text>
    <!-- Tx coil -->
    <circle cx="220" cy="100" r="14" fill="none" stroke="#2a5a8a" stroke-width="2"/>
    <text x="220" y="104" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="9" fill="#2a5a8a">Tx</text>
    <text x="220" y="82" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#5b6272">9.8 kHz</text>
    <!-- Rx coil -->
    <circle cx="500" cy="100" r="14" fill="none" stroke="#5a3a7a" stroke-width="2"/>
    <text x="500" y="104" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="9" fill="#5a3a7a">Rx</text>
    <!-- Separation arrow -->
    <line x1="236" y1="70" x2="484" y2="70" stroke="#1a2030" stroke-width="1"/>
    <line x1="236" y1="66" x2="236" y2="74" stroke="#1a2030" stroke-width="1"/>
    <line x1="484" y1="66" x2="484" y2="74" stroke="#1a2030" stroke-width="1"/>
    <text x="360" y="64" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#1a2030">3.66 m coil separation</text>
    <!-- Height above ice -->
    <line x1="140" y1="110" x2="140" y2="140" stroke="#7a5a2a" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="132" y="128" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#7a5a2a">0.4 m</text>
    <!-- Ice layers -->
    <rect x="100" y="140" width="520" height="30" fill="#2a5a8a" opacity="0.15"/>
    <text x="360" y="160" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#2a5a8a">SEA ICE (h_ice)</text>
    <rect x="100" y="170" width="520" height="30" fill="#2a5a8a" opacity="0.3"/>
    <text x="360" y="190" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#fafaf7">SEAWATER (conductive)</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 2.</span> Schematic of the EM31-ICE sled-mounted measurement configuration. The transmitter (Tx) coil at 9.8 kHz induces eddy currents in the conductive seawater below the ice; the receiver (Rx) coil measures the secondary field. Ice thickness is derived from the apparent conductivity via a one-dimensional layered earth model.</div>
</figure>

<table class="paper-table">
  <caption><span class="tab-num">Table 8.</span> EM31-ICE instrument specifications.</caption>
  <thead>
    <tr><th>Parameter</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>Operating frequency</td><td>9.8 kHz</td></tr>
    <tr><td>Coil separation</td><td>3.66 m</td></tr>
    <tr><td>Coil orientation</td><td>Horizontal coplanar</td></tr>
    <tr><td>Measurement height</td><td>0.4 m above ice surface (sled-mounted)</td></tr>
    <tr><td>Measurement rate</td><td>1 Hz (averaged to 10 s for each observation)</td></tr>
    <tr><td>Conductivity range</td><td>0-1000 mS/m</td></tr>
    <tr><td>Conductivity accuracy</td><td>+/- 5 pct at 100 mS/m</td></tr>
    <tr><td>Operating temperature</td><td>-40 to +50 C (calibrated: -35 to -15 C)</td></tr>
    <tr><td>Power supply</td><td>12V lithium battery, 8h capacity at -30 C</td></tr>
    <tr><td>Data logger</td><td>Campbell CR1000X, sampling at 1 Hz</td></tr>
    <tr><td>GPS</td><td>Trimble R10 GNSS, horizontal accuracy < 0.02 m</td></tr>
    <tr><td>Snow depth sensor</td><td>Magna-Probe, manual insertion every 400 m</td></tr>
  </tbody>
</table>
