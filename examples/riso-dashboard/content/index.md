+++
title = "Press Floor"
description = "A two-ink risograph print-run dashboard tracking impressions, editions, ink levels, and drum health across the studio."
tags = ["riso", "duotone", "print"]
+++

<div class="page-intro">
<p class="kicker">Studio &middot; Two-Ink Press Floor</p>
<h1><span class="misregister">Overprint</span> Run Monitor</h1>
<p>Everything on this floor is printed in exactly two spot inks &mdash; fluorescent pink laid down first, federal blue pulled over it. Where the inks cross, they multiply into a darker third color. These are this week's impressions, editions, and drum readings.</p>
</div>

<div class="dashboard-grid">
<div class="metric-card">
<span class="badge-print" aria-hidden="true"></span>
<div class="metric-label">Impressions / Week</div>
<div class="metric-value">14.8<span>K</span></div>
<div class="metric-trend up">Up 6.2% over last run</div>
</div>
<div class="metric-card">
<span class="badge-print" aria-hidden="true"></span>
<div class="metric-label">Active Editions</div>
<div class="metric-value">07<span>RUNS</span></div>
<div class="metric-trend">Two awaiting second-ink pass</div>
</div>
<div class="metric-card">
<span class="badge-print" aria-hidden="true"></span>
<div class="metric-label">Registration Drift</div>
<div class="metric-value">0.4<span>MM</span></div>
<div class="metric-trend down">Within tolerance, slight pink offset</div>
</div>
<div class="metric-card">
<span class="badge-print" aria-hidden="true"></span>
<div class="metric-label">Drum Temperature</div>
<div class="metric-value">31<span>&deg;C</span></div>
<div class="metric-trend up">Steady, master cylinder warm</div>
</div>
</div>

<div class="chart-wrap">
<div class="panel-header">
<h2 class="panel-title">Impressions by <span>Ink Pass</span></h2>
<span class="indicator-badge"><span class="press-lamp" aria-hidden="true"></span>RUNNING</span>
</div>
<svg viewBox="0 0 600 220" role="img" aria-label="Bar chart of weekly impressions split by pink and blue ink passes, with overprinted overlap.">
<!-- baseline -->
<line x1="40" y1="190" x2="580" y2="190" stroke="#1c1b2b" stroke-width="3"/>
<!-- Each week: a pink bar and a blue bar that overlap; the overlap multiplies darker -->
<g>
<rect x="60"  y="70"  width="48" height="120" fill="#ff4d6d"/>
<rect x="84"  y="96"  width="48" height="94"  fill="#2b50e0" style="mix-blend-mode:multiply"/>
</g>
<g>
<rect x="160" y="54"  width="48" height="136" fill="#ff4d6d"/>
<rect x="184" y="84"  width="48" height="106" fill="#2b50e0" style="mix-blend-mode:multiply"/>
</g>
<g>
<rect x="260" y="98"  width="48" height="92"  fill="#ff4d6d"/>
<rect x="284" y="70"  width="48" height="120" fill="#2b50e0" style="mix-blend-mode:multiply"/>
</g>
<g>
<rect x="360" y="40"  width="48" height="150" fill="#ff4d6d"/>
<rect x="384" y="66"  width="48" height="124" fill="#2b50e0" style="mix-blend-mode:multiply"/>
</g>
<g>
<rect x="460" y="60"  width="48" height="130" fill="#ff4d6d"/>
<rect x="484" y="40"  width="48" height="150" fill="#2b50e0" style="mix-blend-mode:multiply"/>
</g>
<!-- week labels -->
<g fill="#1c1b2b" font-family="'Spline Sans Mono', monospace" font-size="13" font-weight="700">
<text x="78"  y="210">W1</text>
<text x="178" y="210">W2</text>
<text x="278" y="210">W3</text>
<text x="378" y="210">W4</text>
<text x="478" y="210">W5</text>
</g>
</svg>
<div class="chart-legend">
<span><i class="pink" aria-hidden="true"></i> Pink pass</span>
<span><i class="blue" aria-hidden="true"></i> Blue pass</span>
<span><i class="duo" aria-hidden="true"></i> Overprint</span>
</div>
</div>

<div class="dashboard-panels">
<div class="panel-left-block">
<div class="panel-header">
<h2 class="panel-title">Current <span>Print Run</span></h2>
<a href="posts/" class="panel-action">Press Notes</a>
</div>

<table class="riso-table">
<thead>
<tr>
<th>Edition</th>
<th>Ink</th>
<th>Impressions</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Field Notes No. 4</strong></td>
<td><span class="ink-tag pink">Pink</span></td>
<td>1,200</td>
<td><span class="indicator-badge">DRYING</span></td>
</tr>
<tr>
<td><strong>Atlas of Overlaps</strong></td>
<td><span class="ink-tag duo">Duotone</span></td>
<td>800</td>
<td><span class="indicator-badge indicator-pink">ON PRESS</span></td>
</tr>
<tr>
<td><strong>Blue Hour Zine</strong></td>
<td><span class="ink-tag blue">Blue</span></td>
<td>2,500</td>
<td><span class="indicator-badge">SHIPPED</span></td>
</tr>
<tr>
<td><strong>Registration Studies</strong></td>
<td><span class="ink-tag duo">Duotone</span></td>
<td>460</td>
<td><span class="indicator-badge indicator-pink">PROOFING</span></td>
</tr>
<tr>
<td><strong>Halftone Calendar</strong></td>
<td><span class="ink-tag pink">Pink</span></td>
<td>980</td>
<td><span class="indicator-badge">QUEUED</span></td>
</tr>
</tbody>
</table>

Full press notes and edition write-ups are filed in the [Editions log](posts/).
</div>

<div class="panel-block">
<div class="panel-header">
<h2 class="panel-title">Ink <span>Levels</span></h2>
<span class="indicator-badge indicator-paper" style="cursor: default;">DRUMS</span>
</div>

<div class="meter-list">
<div class="meter-row">
<div class="meter-head"><span>Fluorescent Pink</span><span class="pct">72%</span></div>
<div class="meter-track"><div class="meter-fill pink" style="width: 72%;"></div></div>
</div>
<div class="meter-row">
<div class="meter-head"><span>Federal Blue</span><span class="pct">54%</span></div>
<div class="meter-track"><div class="meter-fill" style="width: 54%;"></div></div>
</div>
<div class="meter-row">
<div class="meter-head"><span>Master Drum Life</span><span class="pct">88%</span></div>
<div class="meter-track"><div class="meter-fill" style="width: 88%;"></div></div>
</div>
<div class="meter-row">
<div class="meter-head"><span>Paper Stock</span><span class="pct">41%</span></div>
<div class="meter-track"><div class="meter-fill pink" style="width: 41%;"></div></div>
</div>
</div>

<ul class="spec-list" style="margin-top: 1.6rem;">
<li><span class="k">Paper</span><span class="v">Uncoated #f3ede1</span></li>
<li><span class="k">Ink A</span><span class="v">Riso Pink #ff4d6d</span></li>
<li><span class="k">Ink B</span><span class="v">Riso Blue #2b50e0</span></li>
<li><span class="k">Screen</span><span class="v">Halftone 8px dot</span></li>
</ul>
</div>
</div>
