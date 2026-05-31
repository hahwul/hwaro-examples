+++
title = "Structural Plan"
description = "An engineering drafting blueprint dashboard tracking load-bearing modules, tolerances, revisions, and assembly status across the system."
tags = ["blueprint", "structural", "assemblies"]
+++

<div class="dashboard-grid">
<div class="metric-card">
<div class="metric-label">Load-Bearing Modules</div>
<div class="metric-value">24<span>UNITS</span></div>
<div class="metric-trend up">+2 since rev. B</div>
</div>
<div class="metric-card">
<div class="metric-label">Mean Tolerance</div>
<div class="metric-value">0.04<span>MM</span></div>
<div class="metric-trend up">Within spec band</div>
</div>
<div class="metric-card">
<div class="metric-label">Open Revisions</div>
<div class="metric-value">03<span>RFI</span></div>
<div class="metric-trend down">1 awaiting sign-off</div>
</div>
<div class="metric-card">
<div class="metric-label">Sheets Compiled</div>
<div class="metric-value">04<span>OF 04</span></div>
<div class="metric-trend"><span class="status-lamp" aria-hidden="true"></span>Set complete</div>
</div>
</div>

<div class="bp-figure">
<p class="fig-caption">FIG. 01 &mdash; <b>Span loading</b> by assembly, kilonewtons (kN). Dimension line annotates the rated span of the primary truss.</p>
<svg class="bp-svg" viewBox="0 0 760 240" role="img" aria-label="Bar chart of structural load by assembly with a dimension line annotating the primary truss span">
  <!-- baseline -->
  <line x1="60" y1="190" x2="720" y2="190" stroke="#cfe8f5" stroke-width="1"/>
  <!-- y ticks -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#8fb6cc">
    <line x1="56" y1="190" x2="60" y2="190" stroke="#5ec6e6" stroke-width="1"/>
    <text x="50" y="194" text-anchor="end">0</text>
    <line x1="56" y1="145" x2="60" y2="145" stroke="#5ec6e6" stroke-width="1"/>
    <text x="50" y="149" text-anchor="end">25</text>
    <line x1="56" y1="100" x2="60" y2="100" stroke="#5ec6e6" stroke-width="1"/>
    <text x="50" y="104" text-anchor="end">50</text>
    <line x1="56" y1="55" x2="60" y2="55" stroke="#5ec6e6" stroke-width="1"/>
    <text x="50" y="59" text-anchor="end">75</text>
  </g>
  <!-- bars (solid strokes / fills only) -->
  <g fill="none" stroke="#5ec6e6" stroke-width="1.5">
    <rect x="95" y="78" width="70" height="112"/>
    <rect x="215" y="120" width="70" height="70"/>
    <rect x="335" y="62" width="70" height="128"/>
    <rect x="455" y="138" width="70" height="52"/>
    <rect x="575" y="104" width="70" height="86"/>
  </g>
  <!-- value caps -->
  <g fill="#ffffff" font-family="'Space Mono', monospace" font-size="12">
    <text x="130" y="70" text-anchor="middle">62</text>
    <text x="250" y="112" text-anchor="middle">39</text>
    <text x="370" y="54" text-anchor="middle">71</text>
    <text x="490" y="130" text-anchor="middle">29</text>
    <text x="610" y="96" text-anchor="middle">48</text>
  </g>
  <!-- x labels -->
  <g fill="#8fb6cc" font-family="'Space Mono', monospace" font-size="10" letter-spacing="1">
    <text x="130" y="208" text-anchor="middle">A-TRUSS</text>
    <text x="250" y="208" text-anchor="middle">B-DECK</text>
    <text x="370" y="208" text-anchor="middle">C-CORE</text>
    <text x="490" y="208" text-anchor="middle">D-RAIL</text>
    <text x="610" y="208" text-anchor="middle">E-WALL</text>
  </g>
  <!-- dimension line annotating the primary truss span -->
  <g stroke="#e8746a" stroke-width="1" fill="#e8746a" font-family="'Space Mono', monospace" font-size="11">
    <line x1="95" y1="226" x2="405" y2="226"/>
    <line x1="95" y1="218" x2="95" y2="234"/>
    <line x1="405" y1="218" x2="405" y2="234"/>
    <polygon points="95,226 104,222 104,230" stroke="none"/>
    <polygon points="405,226 396,222 396,230" stroke="none"/>
    <rect x="208" y="218" width="84" height="16" fill="#0a1f38" stroke="none"/>
    <text x="250" y="230" text-anchor="middle" stroke="none">SPAN 12.4 m</text>
  </g>
</svg>
</div>

<div class="dashboard-panels">
<div class="panel-left-block">
<div class="panel-header">
<h2 class="panel-title">Assembly Schedule <span>[STRUCTURAL]</span></h2>
<a href="posts/" class="panel-action">Open Drawing Set</a>
</div>

<table class="spec-table">
<thead>
<tr>
<th>Assembly</th>
<th>Member</th>
<th>Tolerance</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>A-TRUSS</strong></td>
<td class="dim">W310 &times; 52</td>
<td class="dim">&plusmn;0.03 mm</td>
<td><span class="indicator-badge">APPROVED</span></td>
</tr>
<tr>
<td><strong>B-DECK</strong></td>
<td class="dim">PL 12</td>
<td class="dim">&plusmn;0.05 mm</td>
<td><span class="indicator-badge">APPROVED</span></td>
</tr>
<tr>
<td><strong>C-CORE</strong></td>
<td class="dim">HSS 200</td>
<td class="dim">&plusmn;0.02 mm</td>
<td><span class="indicator-badge indicator-red">RFI OPEN</span></td>
</tr>
<tr>
<td><strong>D-RAIL</strong></td>
<td class="dim">L 75 &times; 6</td>
<td class="dim">&plusmn;0.08 mm</td>
<td><span class="indicator-badge">APPROVED</span></td>
</tr>
<tr>
<td><strong>E-WALL</strong></td>
<td class="dim">PC 150</td>
<td class="dim">&plusmn;0.04 mm</td>
<td><span class="indicator-badge indicator-red">CHECK</span></td>
</tr>
</tbody>
</table>

Detailed member checks, deflection logs, and revision call-outs are filed in the [Drawing Set](posts/).
</div>

<div>
<div class="panel-header">
<h2 class="panel-title">Sheet Specs</h2>
<span class="indicator-badge" style="cursor: default;"><span class="status-lamp" aria-hidden="true"></span>LIVE</span>
</div>

<ul class="spec-list">
<li><span class="k">Projection</span><span class="v">First angle</span></li>
<li><span class="k">Datum</span><span class="v">FFL +0.000</span></li>
<li><span class="k">Drawing scale</span><span class="v">1 : 1</span></li>
<li><span class="k">Line weight</span><span class="v">0.18 mm</span></li>
<li><span class="k">Ink</span><span class="v">Cyan / white</span></li>
<li><span class="k">Checked by</span><span class="v">J. Brunel</span></li>
</ul>
</div>
</div>

<div class="bp-figure">
<table class="revision-table">
<caption>Revision history &mdash; sheet BP-A01</caption>
<thead>
<tr>
<th>Rev</th>
<th>Date</th>
<th>Description</th>
<th>By</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="rev">A</span></td>
<td>2024-11-08</td>
<td>Initial issue for tender. Base grid and datum set.</td>
<td>JB</td>
</tr>
<tr>
<td><span class="rev">B</span></td>
<td>2025-07-19</td>
<td>Added assemblies D-RAIL and E-WALL; revised C-CORE tolerance band.</td>
<td>MK</td>
</tr>
<tr>
<td><span class="rev">C</span></td>
<td>2026-05-31</td>
<td>Span re-rated to 12.4 m. RFI raised against C-CORE node connection.</td>
<td>JB</td>
</tr>
</tbody>
</table>
</div>
