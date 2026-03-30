+++
title = "Tenant API"
description = "Tenant-scoped API reference for application operations"
tags = ["api", "tenant", "application"]
+++

# Tenant API

The Tenant API runs on port 3000 and provides endpoints for tenant-scoped application operations. All requests are automatically scoped to the resolved tenant based on the configured tenant resolution strategy.

## Base URL

```
http://localhost:3000/api/v1
```

The tenant is resolved from the request context (subdomain, header, or JWT claim) before any endpoint logic executes.

## Request Flow

```
  Client Request
       |
       v
  +--------------------+
  |  Resolve Tenant     |
  |  (subdomain/header/ |
  |   JWT claim)        |
  +---------+----------+
            |
            v
  +--------------------+
  |  Authenticate       |
  |  (Bearer token)     |
  +---------+----------+
            |
            v
  +--------------------+
  |  Check Rate Limit   |
  |  (per-tier quota)   |
  +---------+----------+
            |
            v
  +--------------------+
  |  Execute Handler    |
  |  (tenant-scoped)    |
  +---------+----------+
            |
            v
  +--------------------+
  |  Response           |
  +--------------------+
```

## User Management

### List Users

```
GET /api/v1/users
```

Returns all users within the current tenant scope.

Query parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `role` | string | all | Filter by role: `admin`, `member`, `viewer` |
| `status` | string | `active` | Filter: `active`, `invited`, `disabled` |
| `search` | string | -- | Search by name or email |
| `page` | integer | 1 | Page number |
| `per_page` | integer | 25 | Results per page |

Example:

```bash
curl -s http://acme-corp.app.example.com/api/v1/users \
  -H "Authorization: Bearer ${USER_TOKEN}" | jq .
```

Response:

```json
{
  "data": [
    {
      "id": "usr_a1b2c3d4",
      "email": "jane@acme.com",
      "name": "Jane Doe",
      "role": "admin",
      "status": "active",
      "last_login": "2026-03-20T09:15:00Z",
      "created_at": "2026-01-15T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 47
  }
}
```

### Invite User

```
POST /api/v1/users/invite
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Email address to invite |
| `role` | string | Yes | Role: `admin`, `member`, `viewer` |
| `name` | string | No | Display name |

> Invitations are subject to the `max_users` limit defined in the tenant's tier. A `quota_exceeded` error is returned if the limit is reached.

### Update User Role

```
PATCH /api/v1/users/:id
```

### Remove User

```
DELETE /api/v1/users/:id
```

## Settings

### Get Settings

```
GET /api/v1/settings
```

Returns all tenant-scoped settings:

```json
{
  "theme": "default",
  "timezone": "America/New_York",
  "language": "en",
  "custom_domain": "app.acme.com",
  "notification_preferences": {
    "email": true,
    "webhook": false
  }
}
```

### Update Settings

```
PATCH /api/v1/settings
```

```bash
curl -X PATCH http://acme-corp.app.example.com/api/v1/settings \
  -H "Authorization: Bearer ${USER_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "timezone": "America/New_York",
    "notification_preferences": {
      "email": true,
      "webhook": true
    }
  }'
```

## Webhooks

### List Webhooks

```
GET /api/v1/webhooks
```

### Create Webhook

```
POST /api/v1/webhooks
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | Yes | Webhook endpoint URL |
| `events` | array | Yes | Events to subscribe to |
| `secret` | string | No | Signing secret for payload verification |
| `active` | boolean | No | Enable or disable (default: true) |

Available events:

| Event | Description |
|-------|-------------|
| `user.created` | A new user was added |
| `user.removed` | A user was removed |
| `settings.updated` | Tenant settings changed |
| `storage.threshold` | Storage usage exceeded 80% |
| `quota.warning` | Approaching a resource limit |

## File Storage

### Upload File

```
POST /api/v1/files
```

Files are stored in tenant-scoped storage buckets. The maximum file size is determined by the tier's storage limit.

### List Files

```
GET /api/v1/files
```

### Download File

```
GET /api/v1/files/:id/download
```

### Delete File

```
DELETE /api/v1/files/:id
```

## Rate Limiting

The Tenant API enforces per-tier rate limits. Rate limit headers are included in every response:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1711929600
```

When the rate limit is exceeded, the API returns `429 Too Many Requests` with a `Retry-After` header.
