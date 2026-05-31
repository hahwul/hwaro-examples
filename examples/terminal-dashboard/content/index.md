+++
title = "Live Console"
description = "Real-time phosphor console monitoring the build-node fleet — uptime, load average, packet flow, and the job queue rendered as a glowing terminal TUI."
tags = ["terminal", "monitoring", "build-fleet"]
+++

<div class="dashboard-grid">
<div class="metric-card">
<div class="metric-label">Fleet Uptime</div>
<div class="metric-value">417<span>DAYS</span></div>
<div class="metric-trend">last reboot 2025-04-09 03:11 UTC</div>
</div>
<div class="metric-card">
<div class="metric-label">Load Average</div>
<div class="metric-value">1.42<span>1m</span></div>
<div class="metric-trend">nominal across 12 cores</div>
</div>
<div class="metric-card">
<div class="metric-label">Jobs In Queue</div>
<div class="metric-value">08<span>PENDING</span></div>
<div class="metric-trend warn">2 awaiting cache warm-up</div>
</div>
<div class="metric-card">
<div class="metric-label">Packet Flow</div>
<div class="metric-value">94.3<span>MB/s</span></div>
<div class="metric-trend">egress steady, 0 dropped</div>
</div>
</div>

<div class="dashboard-panels">
<div class="panel-left-block">
<div class="panel-header">
<span class="bracket">NODE STATUS</span>
<a href="posts/" class="panel-action">tail -f /var/log/jobs</a>
</div>

<table class="term-table">
<thead>
<tr>
<th>Node</th>
<th>Load</th>
<th>Mem</th>
<th>Last Build</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>node-alpha</strong></td>
<td>1.12</td>
<td>42%</td>
<td>00:00:31</td>
<td><span class="tag tag-ok"> OK </span></td>
</tr>
<tr>
<td><strong>node-beta</strong></td>
<td>2.87</td>
<td>71%</td>
<td>00:01:54</td>
<td><span class="tag tag-warn">WARN</span></td>
</tr>
<tr>
<td><strong>node-gamma</strong></td>
<td>0.64</td>
<td>29%</td>
<td>00:00:08</td>
<td><span class="tag tag-ok"> OK </span></td>
</tr>
<tr>
<td><strong>node-delta</strong></td>
<td>5.91</td>
<td>96%</td>
<td>00:14:22</td>
<td><span class="tag tag-fail">FAIL</span></td>
</tr>
<tr>
<td><strong>node-epsilon</strong></td>
<td>1.03</td>
<td>38%</td>
<td>00:00:47</td>
<td><span class="tag tag-ok"> OK </span></td>
</tr>
</tbody>
</table>
</div>

<div>
<div class="panel-header">
<span class="bracket">SYSTEM SPECS</span>
<span class="lamp" aria-hidden="true"></span>
</div>

<ul class="spec-list">
<li><span class="k">kernel</span><span class="v">5.15.0-rt</span></li>
<li><span class="k">cores</span><span class="v">12 x 3.4GHz</span></li>
<li><span class="k">memory</span><span class="v">64 GiB ECC</span></li>
<li><span class="k">scheduler</span><span class="v">fair-share</span></li>
<li><span class="k">tty</span><span class="v">/dev/pts/0</span></li>
<li><span class="k">shell</span><span class="v">monitor 2.4.1</span></li>
</ul>
</div>
</div>

<div class="panel">
<div class="panel-header">
<span class="bracket">SYSTEM LOAD</span>
<span class="tag tag-ok"> OK </span>
</div>

<div class="meter-row">
<span class="meter-name">CPU</span>
<span class="meter-bar"><span class="fill">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span><span class="empty">&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;</span></span>
<span class="meter-val">61%</span>
</div>
<div class="meter-row">
<span class="meter-name">Memory</span>
<span class="meter-bar"><span class="fill warn">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span><span class="empty">&#9617;&#9617;&#9617;&#9617;</span></span>
<span class="meter-val warn">79%</span>
</div>
<div class="meter-row">
<span class="meter-name">Disk I/O</span>
<span class="meter-bar"><span class="fill">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span><span class="empty">&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;&#9617;</span></span>
<span class="meter-val">28%</span>
</div>
<div class="meter-row">
<span class="meter-name">Swap</span>
<span class="meter-bar"><span class="fill fail">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span><span class="empty">&#9617;</span></span>
<span class="meter-val fail">97%</span>
</div>
</div>

<div class="dashboard-panels">
<div class="panel-left-block">
<div class="panel-header">
<span class="bracket">LOAD GRAPH &mdash; 24H</span>
<span class="tag tag-ok"> OK </span>
</div>

<div class="graph-wrap">
<svg viewBox="0 0 480 120" role="img" aria-label="24-hour load average sparkline, peaking mid-cycle then settling to nominal">
  <line x1="0" y1="30" x2="480" y2="30" stroke="#0f2a10" stroke-width="1"/>
  <line x1="0" y1="60" x2="480" y2="60" stroke="#0f2a10" stroke-width="1"/>
  <line x1="0" y1="90" x2="480" y2="90" stroke="#0f2a10" stroke-width="1"/>
  <polyline fill="none" stroke="#4af626" stroke-width="2" stroke-linejoin="round"
    points="0,92 40,80 80,86 120,58 160,64 200,38 240,46 280,22 320,40 360,55 400,48 440,70 480,66"/>
  <polyline fill="none" stroke="#1f7a18" stroke-width="1.5" stroke-dasharray="3 4"
    points="0,100 40,96 80,98 120,84 160,88 200,72 240,78 280,64 320,76 360,86 400,82 440,94 480,90"/>
  <circle cx="280" cy="22" r="3" fill="#ffb000"/>
</svg>
<p class="graph-caption">&gt; solid = 1m load avg &middot; dashed = 15m &middot; peak 14:00 (amber marker)</p>
</div>
</div>

<div>
<div class="panel-header">
<span class="bracket">LOG STREAM</span>
<span class="lamp lamp-warn" aria-hidden="true"></span>
</div>

<div class="log-stream">
<div class="log-line"><span class="log-ts">[2026-05-31 14:02:11]</span><span class="log-msg"><span class="tag tag-ok"> OK </span> node-gamma build #4821 passed</span></div>
<div class="log-line"><span class="log-ts">[2026-05-31 14:01:48]</span><span class="log-msg"><span class="tag tag-ok"> OK </span> cache primed: 312 MB</span></div>
<div class="log-line"><span class="log-ts">[2026-05-31 14:00:09]</span><span class="log-msg"><span class="tag tag-warn">WARN</span> node-beta mem at 71%</span></div>
<div class="log-line"><span class="log-ts">[2026-05-31 13:58:33]</span><span class="log-msg"><span class="tag tag-fail">FAIL</span> node-delta job #9 OOM-killed</span></div>
<div class="log-line"><span class="log-ts">[2026-05-31 13:57:02]</span><span class="log-msg"><span class="tag tag-ok"> OK </span> scheduler rebalanced 3 jobs</span></div>
<div class="log-line"><span class="log-ts">[2026-05-31 13:55:40]</span><span class="log-msg"><span class="tag tag-ok"> OK </span> node-alpha heartbeat ack</span></div>
</div>
</div>
</div>

The console refreshes against a static snapshot compiled by Hwaro. Pipe deeper into the [process directory](posts/) for build logs, post-mortems, and scheduler notes, or read the [manpage](about/) for what this monitor actually watches.
