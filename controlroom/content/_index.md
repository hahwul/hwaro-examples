+++
title = "Main Dashboard"
template = "section"
+++

<div class="dashboard-grid">
    <div class="panel">
        <div class="panel-header">System Uptime</div>
        <div class="metric-value" style="color: var(--status-ok);">99.98%</div>
        <div class="metric-label">Last 30 days</div>
    </div>
    <div class="panel">
        <div class="panel-header">Active Alerts</div>
        <div class="metric-value" style="color: var(--status-warn);">3</div>
        <div class="metric-label">Requiring attention</div>
    </div>
    <div class="panel">
        <div class="panel-header">Network Traffic</div>
        <div class="metric-value" style="color: var(--accent);">4.2 <span style="font-size: 1.2rem; color: var(--text-muted);">TB/s</span></div>
        <div class="metric-label">Current throughput</div>
    </div>
    <div class="panel">
        <div class="panel-header">Global Nodes</div>
        <div class="metric-value">124</div>
        <div class="metric-label"><span class="status-dot ok"></span>120 Online <span class="status-dot err" style="margin-left: 10px;"></span>4 Offline</div>
    </div>
</div>

<div class="panel" style="margin-bottom: 30px;">
    <div class="panel-header">Server Status</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>Hostname</th>
                <th>Region</th>
                <th>Status</th>
                <th>CPU</th>
                <th>RAM</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>us-east-web-01</td>
                <td>N. Virginia</td>
                <td><span class="status-dot ok"></span>Online</td>
                <td>42%</td>
                <td>16GB / 32GB</td>
            </tr>
            <tr>
                <td>us-east-web-02</td>
                <td>N. Virginia</td>
                <td><span class="status-dot ok"></span>Online</td>
                <td>38%</td>
                <td>14GB / 32GB</td>
            </tr>
            <tr>
                <td>eu-west-db-01</td>
                <td>Ireland</td>
                <td><span class="status-dot warn"></span>Degraded</td>
                <td>89%</td>
                <td>60GB / 64GB</td>
            </tr>
            <tr>
                <td>ap-south-cache-01</td>
                <td>Mumbai</td>
                <td><span class="status-dot err"></span>Offline</td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>global-lb-01</td>
                <td>Anycast</td>
                <td><span class="status-dot ok"></span>Online</td>
                <td>12%</td>
                <td>4GB / 16GB</td>
            </tr>
        </tbody>
    </table>
</div>
