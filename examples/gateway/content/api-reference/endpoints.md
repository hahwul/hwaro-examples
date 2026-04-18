+++
title = "API Endpoints"
+++

This section lists the available endpoints for the Security Gateway API.

## Public Endpoints

Public endpoints can be accessed without a user context, but require a valid API key.

<table>
  <thead>
    <tr>
      <th>METHOD</th>
      <th>PATH</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/health</code></td>
      <td>Retrieve system health status</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/version</code></td>
      <td>Retrieve Gateway version info</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/auth/token</code></td>
      <td>Exchange credentials for an access token</td>
    </tr>
  </tbody>
</table>

## Administrative Endpoints

Administrative endpoints require a Bearer token with high-level permissions.

<table>
  <thead>
    <tr>
      <th>METHOD</th>
      <th>PATH</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/admin/keys</code></td>
      <td>List all active API keys</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/admin/keys/rotate</code></td>
      <td>Rotate an existing API key</td>
    </tr>
    <tr>
      <td><code>DELETE</code></td>
      <td><code>/admin/keys/{id}</code></td>
      <td>Revoke a specific API key</td>
    </tr>
  </tbody>
</table>

## Error Codes

The API uses standard HTTP status codes:

- `200 OK`: Success
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Authenticated but lack required permissions
- `429 Too Many Requests`: Rate limit exceeded

<div class="info-box">
  <div class="info-box-title">Rate Limiting</div>
  All endpoints are rate-limited to 1,000 requests per minute per IP address.
</div>
