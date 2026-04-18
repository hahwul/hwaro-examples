+++
title = "Key Management"
+++

Manage your API keys and client credentials for the Security Gateway.

## API Key Configuration

API keys are used for server-to-server communication where a user context is not required.

<table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>ID</th>
      <th>LAST_USED</th>
      <th>STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dev-Backend-1</td>
      <td><code>AK_7f28...</code></td>
      <td>0.5s ago</td>
      <td><span class="auth-status">ACTIVE</span></td>
    </tr>
    <tr>
      <td>Monitoring-Agent</td>
      <td><code>AK_1e5d...</code></td>
      <td>1.2s ago</td>
      <td><span class="auth-status">ACTIVE</span></td>
    </tr>
    <tr>
      <td>Legacy-Mobile-App</td>
      <td><code>AK_c92b...</code></td>
      <td>2w ago</td>
      <td><span class="auth-status" style="background:#808080;">REVOKED</span></td>
    </tr>
  </tbody>
</table>

## Revocation Policy

When an API key is revoked, it is immediately disabled. All subsequent requests using that key will receive a `401 Unauthorized` response.

## Rotation Schedule

For maximum security, API keys should be rotated every 90 days. The Gateway provides automated rotation endpoints for services that support it.

<div class="info-box warning">
  <div class="info-box-title">Important</div>
  Once a key is revoked, it cannot be re-activated. You must issue a new key if access needs to be restored.
</div>
