+++
title = "Telemetry Dashboard"
description = "System telemetry console presenting network parameters, latency spike monitors, and server resource metrics."
tags = ["telemetry", "monitors", "networks"]
+++

<div class="dashboard-grid">
<div class="metric-card">
<div class="metric-label">System Uptime</div>
<div class="metric-value">99.98%</div>
<div class="metric-status-bar">
<div class="metric-status-fill" style="width: 99%;"></div>
</div>
</div>
<div class="metric-card">
<div class="metric-label">Network Latency</div>
<div class="metric-value">14.2ms</div>
<div class="metric-status-bar">
<div class="metric-status-fill" style="width: 14%;"></div>
</div>
</div>
<div class="metric-card alert-state">
<div class="metric-label">CPU LOAD (CORE_0)</div>
<div class="metric-value">87.4%</div>
<div class="metric-status-bar">
<div class="metric-status-fill" style="width: 87%;"></div>
</div>
</div>
</div>

<div class="dashboard-panels">
<div class="panel">
<div class="panel-header">
<h2 class="panel-title">Active Server Telemetry</h2>
<span class="status-badge status-ok">LIVE_METRICS</span>
</div>

<table class="telemetry-table">
<thead>
<tr>
<th>Service Name</th>
<th>Port</th>
<th>Memory Use</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>hwaro-builder-daemon</td>
<td>:3000</td>
<td>42.5 MB</td>
<td><span class="status-badge status-ok">ACTIVE</span></td>
</tr>
<tr>
<td>crystal-compiler-cache</td>
<td>:9000</td>
<td>128.0 MB</td>
<td><span class="status-badge status-ok">ACTIVE</span></td>
</tr>
<tr>
<td>latency-telemetry-db</td>
<td>:5432</td>
<td>312.4 MB</td>
<td><span class="status-badge status-warning">HIGH_LOAD</span></td>
</tr>
</tbody>
</table>

For full detail regarding ongoing latency logs, access our [Latest Status Logs](posts/).
</div>

<div class="panel">
<div class="panel-header">
<h2 class="panel-title">Hardware Specs</h2>
<span class="status-badge status-ok">HARDWARE_INFO</span>
</div>

- **CPU Architecture**: ARM64v8 (10 Cores)
- **Physical RAM**: 32.0 GB LPDDR5
- **SSD Cache**: 1.0 TB NVMe PCIe Gen4
- **Primary Gateway**: static.hwaro.internal
</div>
</div>