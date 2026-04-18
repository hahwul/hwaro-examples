+++
title = "Admin API"
description = "Admin API reference for platform management operations"
tags = ["api", "admin", "management"]
+++

# Admin API

The Admin API runs on port 3001 and provides endpoints for managing tenants, tiers, and platform configuration. All Admin API requests require a valid admin bearer token.

## Base URL

```
http://localhost:3001/api/v1
```

## Tenant Management

### List Tenants

```
GET /api/v1/tenants
```

Query parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `status` | string | all | Filter by lifecycle state |
| `tier` | string | all | Filter by subscription tier |
| `search` | string | -- | Search by slug or name |
| `page` | integer | 1 | Page number |
| `per_page` | integer | 25 | Results per page (max 100) |
| `sort` | string | `created_at` | Sort field |
| `order` | string | `desc` | Sort direction: `asc` or `desc` |

Example request:

```bash
curl -s http://localhost:3001/api/v1/tenants?status=active&tier=professional \
  -H "Authorization: Bearer ${ADMIN_TOKEN}" | jq .
```

Response:

```json
{
  "data": [
    {
      "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "slug": "acme-corp",
      "name": "Acme Corporation",
      "tier": "professional",
      "status": "active",
      "isolation": "schema_per_tenant",
      "owner": {
        "email": "admin@acme.com",
        "name": "Jane Doe"
      },
      "created_at": "2026-03-20T14:30:00Z",
      "updated_at": "2026-03-20T14:30:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 1,
    "total_pages": 1
  }
}
```

### Create Tenant

```
POST /api/v1/tenants
```

Request body:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | Unique identifier (lowercase, hyphens) |
| `name` | string | Yes | Display name |
| `tier` | string | Yes | Subscription tier name |
| `owner.email` | string | Yes | Tenant owner email |
| `owner.name` | string | No | Tenant owner display name |
| `metadata` | object | No | Arbitrary key-value metadata |

### Get Tenant

```
GET /api/v1/tenants/:slug
```

### Update Tenant

```
PATCH /api/v1/tenants/:slug
```

Updatable fields: `name`, `metadata`, `owner`.

### Delete Tenant

```
DELETE /api/v1/tenants/:slug
```

Query parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `grace_period` | string | tier default | Override the grace period (e.g., `30d`) |
| `force` | boolean | false | Skip grace period and delete immediately |

## Tier Management

### List Tiers

```
GET /api/v1/tiers
```

Response:

```json
{
  "data": [
    {
      "name": "starter",
      "display_name": "Starter",
      "isolation": "shared_schema",
      "limits": {
        "max_users": 10,
        "storage_gb": 5,
        "api_rate_limit": 100
      },
      "features": {
        "custom_domain": false,
        "sso": false,
        "audit_log": false
      },
      "tenant_count": 142
    }
  ]
}
```

### Update Tier

```
PATCH /api/v1/tiers/:name
```

> Changing a tier's isolation model does not automatically migrate existing tenants. Use `POST /api/v1/tenants/:slug/migrate` to migrate individual tenants.

## Usage Metrics

### Tenant Usage

```
GET /api/v1/tenants/:slug/usage
```

Response:

```json
{
  "tenant": "acme-corp",
  "period": "2026-03",
  "usage": {
    "users": 47,
    "storage_gb": 12.4,
    "api_requests": 284520,
    "bandwidth_gb": 8.2
  },
  "limits": {
    "max_users": 100,
    "storage_gb": 50,
    "api_rate_limit": 1000
  },
  "utilization": {
    "users_pct": 47.0,
    "storage_pct": 24.8
  }
}
```

### Platform Overview

```
GET /api/v1/metrics/overview
```

Returns aggregate platform metrics:

```json
{
  "tenants": {
    "total": 358,
    "active": 341,
    "suspended": 12,
    "pending_delete": 5
  },
  "tiers": {
    "starter": 198,
    "professional": 127,
    "enterprise": 33
  },
  "usage": {
    "total_users": 8420,
    "total_storage_gb": 1240,
    "api_requests_today": 2840520
  }
}
```

## Audit Log

### List Audit Entries

```
GET /api/v1/audit
```

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `tenant` | string | Filter by tenant slug |
| `action` | string | Filter by action type |
| `actor` | string | Filter by actor email |
| `from` | datetime | Start of time range |
| `to` | datetime | End of time range |

## Error Responses

All error responses follow a consistent format:

```json
{
  "error": {
    "code": "tenant_not_found",
    "message": "No tenant with slug 'nonexistent' exists",
    "request_id": "req_8f3a2b1c"
  }
}
```

Common error codes:

| Code | HTTP Status | Description |
|------|------------|-------------|
| `tenant_not_found` | 404 | Tenant does not exist |
| `tenant_already_exists` | 409 | Slug is already in use |
| `tier_not_found` | 404 | Tier name is invalid |
| `quota_exceeded` | 429 | Tenant has exceeded a resource limit |
| `invalid_state_transition` | 422 | Requested state change is not allowed |
| `unauthorized` | 401 | Missing or invalid admin token |
