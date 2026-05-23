+++
title = "Security Operations Overview"
description = "Frosted glass-panel security operations dashboard tracking firewall metrics, active port parameters, and threat feeds."
tags = ["security", "ops", "firewalls"]
+++

<div class="dashboard-grid">
<div class="metric-card">
<div class="metric-label">System Integrity</div>
<div class="metric-value">99.94%<span>INT</span></div>
<div class="metric-trend">&gt; ALL_SECTORS_STABLE</div>
</div>
<div class="metric-card alert-state">
<div class="metric-label">Firewall Blocks (1H)</div>
<div class="metric-value">1,482<span>REJ</span></div>
<div class="metric-trend">&gt; THREAT_ATTACKS_STAGED</div>
</div>
<div class="metric-card">
<div class="metric-label">Packet Analysis Rate</div>
<div class="metric-value">4.2K<span>PPS</span></div>
<div class="metric-trend">&gt; BUFFER_CLEARANCE_STABLE</div>
</div>
</div>

<div class="dashboard-panels">
<div class="panel">
<div class="panel-header">
<h2 class="panel-title">Active Gateway Stream <span>[SEC_PORT]</span></h2>
<a href="posts/" class="panel-action">Initialize Logs</a>
</div>

<table class="cyber-table">
<thead>
<tr>
<th>Port Address</th>
<th>Protocol</th>
<th>Bandwidth Utilization</th>
<th>Telemetry Integrity</th>
</tr>
</thead>
<tbody>
<tr>
<td>:443 (Secure TLS Gateway)</td>
<td>TCP/IP (TLSv1.3)</td>
<td>35.4 Mbps</td>
<td><span class="status-indicator indicator-ok">OK_STABLE</span></td>
</tr>
<tr>
<td>:22 (Secure Shell Tunnel)</td>
<td>SSHv2</td>
<td>1.2 Mbps</td>
<td><span class="status-indicator indicator-ok">OK_STABLE</span></td>
</tr>
<tr>
<td>:80 (Unsecure HTTP)</td>
<td>TCP/IP</td>
<td>0.0 Mbps</td>
<td><span class="status-indicator indicator-alert">BLOCKED</span></td>
</tr>
</tbody>
</table>

Detailed diagnostic threat logs and packet capture analyses are actively recorded under the [Intrusion Logs Section](posts/).
</div>

<div class="panel">
<div class="panel-header">
<h2 class="panel-title">Operations Specs</h2>
<span class="status-indicator indicator-ok">OPS_INFO</span>
</div>

- **Operations Node**: Cyber Dashboard
- **Physical Location**: static.hwaro.internal
- **Telemetry Host**: SECURE_OPS_PORT_3
- **Compile Loop Time**: Weekly Static Rebuild
</div>
</div>