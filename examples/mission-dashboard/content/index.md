+++
title = "Flight Console"
description = "Live mission-control telemetry: orbital trajectory, subsystem go/no-go status, gauge readouts, and channel logs for vehicle MCC-7."
tags = ["mission", "telemetry", "orbital"]
+++

<div class="dashboard-grid">
<div class="metric-card">
<div class="metric-label">Apogee</div>
<div class="metric-value">412<span>KM</span></div>
<div class="metric-trend"><strong>NOMINAL</strong> &middot; +0.4 km/orbit</div>
</div>
<div class="metric-card">
<div class="metric-label">Velocity</div>
<div class="metric-value">7.66<span>KM/S</span></div>
<div class="metric-trend"><strong>NOMINAL</strong> &middot; orbital insertion</div>
</div>
<div class="metric-card">
<div class="metric-label">Propellant</div>
<div class="metric-value is-green">87<span>%</span></div>
<div class="metric-trend"><strong>RESERVE OK</strong> &middot; margin +12%</div>
</div>
<div class="metric-card">
<div class="metric-label">Signal Lock</div>
<div class="metric-value is-red">02<span>DROPS</span></div>
<div class="metric-trend"><span class="down">CAUTION</span> &middot; COMM intermittent</div>
</div>
</div>

<div class="dashboard-panels">
<div class="panel-left-block">
<div class="panel-header">
<h2 class="panel-title">Trajectory <span>[ORBIT 14]</span></h2>
<span class="indicator-badge indicator-cyan">PLOT_LIVE</span>
</div>

<div class="plot-wrap">
<svg viewBox="0 0 520 300" role="img" aria-label="Orbital trajectory plot of vehicle MCC-7 around the planetary body">
<defs>
<pattern id="plotgrid" width="26" height="26" patternUnits="userSpaceOnUse">
<path d="M26 0H0V26" fill="none" stroke="#2bb6c8" stroke-width="0.5" stroke-opacity="0.22"/>
</pattern>
</defs>
<rect x="0" y="0" width="520" height="300" fill="#0d1116"/>
<rect x="0" y="0" width="520" height="300" fill="url(#plotgrid)"/>
<line x1="260" y1="0" x2="260" y2="300" stroke="#2bb6c8" stroke-width="0.8" stroke-opacity="0.4"/>
<line x1="0" y1="150" x2="520" y2="150" stroke="#2bb6c8" stroke-width="0.8" stroke-opacity="0.4"/>
<ellipse cx="260" cy="150" rx="200" ry="96" fill="none" stroke="#ffb02e" stroke-width="2" stroke-dasharray="2 0"/>
<circle cx="260" cy="150" r="34" fill="#12171d" stroke="#36d399" stroke-width="2"/>
<circle cx="260" cy="150" r="34" fill="none" stroke="#36d399" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="3 5"/>
<circle cx="460" cy="150" r="5" fill="#f2545b"/>
<text x="468" y="146" font-family="'Share Tech Mono', monospace" font-size="11" fill="#f2545b">PERIGEE</text>
<circle cx="386" cy="68" r="6" fill="#ffb02e"/>
<text x="396" y="64" font-family="'Share Tech Mono', monospace" font-size="11" fill="#ffb02e">MCC-7</text>
<text x="244" y="142" font-family="'Share Tech Mono', monospace" font-size="10" fill="#36d399">BODY</text>
</svg>
</div>

<p style="font-family:var(--mono); font-size:0.8rem; color:var(--text-dim); margin-top:1rem;">Inclination 51.6&deg; &middot; eccentricity 0.0011 &middot; period 92.4 min. Marker shows current vehicle position; full channel breakdown in the <a href="posts/">telemetry log</a>.</p>
</div>

<div class="panel">
<div class="panel-header">
<h2 class="panel-title">Gauges</h2>
<span class="indicator-badge indicator-amber">ANALOG</span>
</div>

<div class="gauge-row">
<div class="gauge">
<svg viewBox="0 0 120 120" role="img" aria-label="Reaction control thrust at 74 percent">
<circle cx="60" cy="60" r="48" fill="none" stroke="#1e2730" stroke-width="10"/>
<circle cx="60" cy="60" r="48" fill="none" stroke="#ffb02e" stroke-width="10" stroke-linecap="round" stroke-dasharray="223 302" stroke-dashoffset="0" transform="rotate(135 60 60)"/>
<text x="60" y="66" text-anchor="middle" class="gauge-value">74%</text>
</svg>
<div class="gauge-caption">THR &middot; RCS</div>
</div>
<div class="gauge">
<svg viewBox="0 0 120 120" role="img" aria-label="Battery charge at 91 percent">
<circle cx="60" cy="60" r="48" fill="none" stroke="#1e2730" stroke-width="10"/>
<circle cx="60" cy="60" r="48" fill="none" stroke="#36d399" stroke-width="10" stroke-linecap="round" stroke-dasharray="274 302" transform="rotate(135 60 60)"/>
<text x="60" y="66" text-anchor="middle" class="gauge-value" style="fill:#36d399;">91%</text>
</svg>
<div class="gauge-caption">PWR &middot; BATT</div>
</div>
</div>
</div>
</div>

<div class="panel">
<div class="panel-header">
<h2 class="panel-title">Telemetry <span>[CHANNELS]</span></h2>
<span class="indicator-badge">STREAMING</span>
</div>

<table class="telemetry-table">
<thead>
<tr>
<th>Channel</th>
<th>Value</th>
<th>Unit</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ECS.CABIN_PRESS</strong></td>
<td class="chan-val">101.2</td>
<td>kPa</td>
<td><span class="indicator-badge">NOMINAL</span></td>
</tr>
<tr>
<td><strong>GNC.ATTITUDE_ERR</strong></td>
<td class="chan-val">0.04</td>
<td>deg</td>
<td><span class="indicator-badge">NOMINAL</span></td>
</tr>
<tr>
<td><strong>COMM.S_BAND_RSSI</strong></td>
<td class="chan-val">-118</td>
<td>dBm</td>
<td><span class="indicator-badge indicator-amber">CAUTION</span></td>
</tr>
<tr>
<td><strong>EPS.BUS_VOLTAGE</strong></td>
<td class="chan-val">28.1</td>
<td>V</td>
<td><span class="indicator-badge">NOMINAL</span></td>
</tr>
<tr>
<td><strong>THERM.RADIATOR_OUT</strong></td>
<td class="chan-val">4.3</td>
<td>degC</td>
<td><span class="indicator-badge">NOMINAL</span></td>
</tr>
</tbody>
</table>

Channel sampling at 4 Hz over the S-band downlink. Archived passes and anomaly reports are filed in the [telemetry log](posts/).
</div>

<div class="dashboard-panels">
<div class="panel-left-block">
<div class="panel-header">
<h2 class="panel-title">Go / No-Go Poll</h2>
<span class="indicator-badge indicator-cyan">FLIGHT_DIR</span>
</div>

<table class="telemetry-table">
<thead>
<tr><th>Console</th><th>Call</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td><strong>FIDO</strong></td><td>Flight Dynamics</td><td><span class="indicator-badge">GO</span></td></tr>
<tr><td><strong>GUIDANCE</strong></td><td>GNC</td><td><span class="indicator-badge">GO</span></td></tr>
<tr><td><strong>EECOM</strong></td><td>Environ / Power</td><td><span class="indicator-badge">GO</span></td></tr>
<tr><td><strong>INCO</strong></td><td>Comms</td><td><span class="indicator-badge indicator-amber">HOLD</span></td></tr>
</tbody>
</table>
</div>

<div>
<div class="panel-header">
<h2 class="panel-title">Vehicle Specs</h2>
<span class="indicator-badge indicator-cyan">MCC-7</span>
</div>

<ul class="spec-list">
<li><span class="spec-key">VEHICLE</span><span class="spec-val">MCC-7 ORBITER</span></li>
<li><span class="spec-key">DRY MASS</span><span class="spec-val">4,280 KG</span></li>
<li><span class="spec-key">CREW</span><span class="spec-val">03</span></li>
<li><span class="spec-key">ORBIT</span><span class="spec-val">LEO 402 x 412</span></li>
<li><span class="spec-key">DOWNLINK</span><span class="spec-val">S-BAND 2.2 GHZ</span></li>
</ul>
</div>
</div>
