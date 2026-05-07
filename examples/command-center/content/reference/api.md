+++
title = "HTTP API Reference"
description = "REST endpoints exposed by the Command Center control plane."
+++

The Command Center control plane exposes a REST API for programmatic access to clusters, deployments, and operational telemetry. All endpoints accept and return JSON unless otherwise noted.

## Base URL

```
https://api.command-center.local/v1
```

## Authentication

Requests must include a bearer token issued by the control plane. Tokens are scoped to a single workspace and expire after 24 hours.

```
Authorization: Bearer <token>
```

Tokens can be rotated through the `cc auth rotate` command. The previous token remains valid for 60 seconds after rotation to allow in-flight requests to complete.

## Common Headers

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Header</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Authorization</code></td>
        <td>Yes</td>
        <td>Bearer token for the calling identity.</td>
      </tr>
      <tr>
        <td><code>X-Request-Id</code></td>
        <td>No</td>
        <td>Client-supplied identifier echoed in responses for tracing.</td>
      </tr>
      <tr>
        <td><code>X-Workspace</code></td>
        <td>No</td>
        <td>Override the default workspace for the request.</td>
      </tr>
    </tbody>
  </table>
</div>

## Endpoints

### `GET /clusters`

Returns the clusters visible to the calling identity. Supports cursor pagination through the `cursor` query parameter.

```bash
curl -H "Authorization: Bearer $TOKEN" \
  https://api.command-center.local/v1/clusters
```

### `POST /deployments`

Create a deployment from a manifest. The request body must include `cluster`, `service`, and `manifest` fields. The response returns a deployment ID that can be polled with `GET /deployments/{id}`.

### `GET /metrics`

Stream operational metrics over server-sent events. Each event carries a timestamp, metric name, and a numeric value. The stream stays open until the client disconnects or the workspace token expires.

## Rate Limits

Requests are limited to 600 per minute per token. When the limit is exceeded the API returns `429 Too Many Requests` with a `Retry-After` header. Burst capacity is 60 requests per second.

## Error Format

Errors follow a uniform shape with a machine-readable code, a human-readable message, and an optional `details` object describing field-level problems.

```json
{
  "code": "deployment.invalid_manifest",
  "message": "Manifest failed schema validation.",
  "details": { "field": "service.replicas" }
}
```
