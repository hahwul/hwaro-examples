+++
title = "Management Console"
+++

Welcome to the Gateway Management Console. This interface allows administrators to manage security credentials, monitoring, and configurations.

## System Dashboard

The Management Console provides a real-time overview of the Gateway's performance and security status.

<table>
  <thead>
    <tr>
      <th>SERVICE</th>
      <th>STATUS</th>
      <th>UPTIME</th>
      <th>LAST_CHECK</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Auth Server</td>
      <td><span class="auth-status">ONLINE</span></td>
      <td>342d 12h</td>
      <td>0.03s ago</td>
    </tr>
    <tr>
      <td>Token Validator</td>
      <td><span class="auth-status">ONLINE</span></td>
      <td>128d 04h</td>
      <td>1.2s ago</td>
    </tr>
    <tr>
      <td>Key Vault</td>
      <td><span class="auth-status">ONLINE</span></td>
      <td>342d 12h</td>
      <td>0.01s ago</td>
    </tr>
  </tbody>
</table>

## Navigation

- **[Key Management](/management/keys/)** - Issue, revoke, and manage API keys and OAuth secrets.
- **[System Configuration](/api-reference/endpoints/)** - Manage Gateway endpoints and routing policies.

<div class="info-box">
  <div class="info-box-title">System Update</div>
  A mandatory security patch is scheduled for next Tuesday at 02:00 UTC. The console will be inaccessible for approximately 5 minutes.
</div>
