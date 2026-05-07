+++
title = "Rate Limits and Quotas"
+++

The Gateway enforces request quotas at the edge to protect upstream services from saturation and to allocate capacity fairly across tenants. Limits are evaluated on every inbound request and decisions are returned in standard response headers.

## Limit tiers

Three tiers are configured by default. Each tenant is assigned a tier at provisioning; the tier may be raised by an operator with the `gateway:quota:write` scope.

<table>
  <thead>
    <tr>
      <th>TIER</th>
      <th>RPS</th>
      <th>BURST</th>
      <th>DAILY_CAP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>standard</code></td>
      <td>50</td>
      <td>100</td>
      <td>250,000</td>
    </tr>
    <tr>
      <td><code>elevated</code></td>
      <td>250</td>
      <td>500</td>
      <td>2,500,000</td>
    </tr>
    <tr>
      <td><code>service</code></td>
      <td>1,000</td>
      <td>2,000</td>
      <td>unlimited</td>
    </tr>
  </tbody>
</table>

## Response headers

Every response carries the current quota state. Clients should read these headers and back off before the limit is breached.

- `X-RateLimit-Limit` &mdash; the per-second limit assigned to the calling key.
- `X-RateLimit-Remaining` &mdash; the number of requests still permitted in the current window.
- `X-RateLimit-Reset` &mdash; the epoch seconds at which the window resets.
- `Retry-After` &mdash; emitted with `429 Too Many Requests`; indicates the seconds to wait before retry.

## Algorithm

The Gateway uses a token bucket per API key with a fill rate equal to the tier RPS and a bucket size equal to the tier burst. A leaky-bucket counter is layered on top to enforce the daily cap; the counter resets at 00:00 UTC.

## Bypassing limits

Limits may be bypassed by setting the `X-Gateway-Bypass` header with a token signed by an operator key. Bypass is intended for incident response and is logged to the audit stream with the operator identity attached.
