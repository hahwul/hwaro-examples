+++
title = "Users"
weight = 2
description = "User management, profiles, and role assignment endpoints"
+++

## Overview

The User Management API provides CRUD operations for user accounts, profile management, and role-based access control. All endpoints require a valid access token with the appropriate scope.

## Base URL

```
https://api.nexus.io/api/v2/users
```

## Endpoint Reference

| Method | Path | Description | Required Scope |
|--------|------|-------------|----------------|
| GET | / | List users | read:users |
| POST | / | Create user | write:users |
| GET | /:id | Get user by ID | read:users |
| PUT | /:id | Update user | write:users |
| DELETE | /:id | Delete user | admin:users |
| GET | /:id/roles | List user roles | read:users |
| PUT | /:id/roles | Assign roles | admin:users |

## Status

- <span class="text-emerald-400 font-semibold">OPERATIONAL</span> -- All user endpoints are healthy
- Uptime (30d): 99.99%
- Avg latency: 8ms (p50), 32ms (p99)

---

## GET /

List all users with pagination and filtering.

### Request

```bash
curl -X GET "https://api.nexus.io/api/v2/users?page=1&limit=20&status=active&sort=-createdAt" \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..."
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Items per page (max 100) |
| status | string | -- | Filter by status: active, suspended, pending |
| sort | string | -createdAt | Sort field with direction prefix (- for desc) |
| search | string | -- | Full-text search on name and email |

### Response -- 200 OK

```json
{
  "data": [
    {
      "id": "usr_7k8m9n0p",
      "email": "alice.chen@example.com",
      "name": "Alice Chen",
      "status": "active",
      "tier": "enterprise",
      "roles": ["admin", "developer"],
      "createdAt": "2025-11-15T09:00:00Z",
      "lastLoginAt": "2026-03-28T08:45:00Z"
    },
    {
      "id": "usr_2a3b4c5d",
      "email": "bob.martinez@example.com",
      "name": "Bob Martinez",
      "status": "active",
      "tier": "professional",
      "roles": ["developer"],
      "createdAt": "2026-01-20T14:30:00Z",
      "lastLoginAt": "2026-03-27T16:20:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1847,
    "pages": 93
  }
}
```

---

## POST /

Create a new user account.

### Request

```bash
curl -X POST https://api.nexus.io/api/v2/users \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..." \
  -H "Content-Type: application/json" \
  -d '{
    "email": "carol.nguyen@example.com",
    "name": "Carol Nguyen",
    "tier": "professional",
    "roles": ["developer"],
    "metadata": {
      "department": "Platform Engineering",
      "region": "us-west-2"
    }
  }'
```

### Response -- 201 Created

```json
{
  "id": "usr_6e7f8g9h",
  "email": "carol.nguyen@example.com",
  "name": "Carol Nguyen",
  "status": "pending",
  "tier": "professional",
  "roles": ["developer"],
  "metadata": {
    "department": "Platform Engineering",
    "region": "us-west-2"
  },
  "createdAt": "2026-03-28T15:00:00Z",
  "activationToken": "act_x1y2z3a4b5c6"
}
```

> New users are created with `pending` status. An activation email is sent automatically. The `activationToken` can be used to activate the account programmatically.

---

## GET /:id

Retrieve a single user by their unique identifier.

### Request

```bash
curl -X GET https://api.nexus.io/api/v2/users/usr_7k8m9n0p \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..."
```

### Response -- 200 OK

```json
{
  "id": "usr_7k8m9n0p",
  "email": "alice.chen@example.com",
  "name": "Alice Chen",
  "status": "active",
  "tier": "enterprise",
  "roles": ["admin", "developer"],
  "metadata": {
    "department": "Security",
    "region": "us-east-1"
  },
  "createdAt": "2025-11-15T09:00:00Z",
  "updatedAt": "2026-03-20T11:30:00Z",
  "lastLoginAt": "2026-03-28T08:45:00Z",
  "loginCount": 342
}
```

### Response -- 404 Not Found

```json
{
  "error": "not_found",
  "message": "User with ID 'usr_invalid' does not exist.",
  "request_id": "req_4d5e6f7g8h9i"
}
```

---

## PUT /:id

Update an existing user account.

### Request

```bash
curl -X PUT https://api.nexus.io/api/v2/users/usr_7k8m9n0p \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Chen-Williams",
    "tier": "enterprise",
    "metadata": {
      "department": "Security",
      "region": "us-east-1",
      "team": "Platform Security"
    }
  }'
```

### Response -- 200 OK

```json
{
  "id": "usr_7k8m9n0p",
  "email": "alice.chen@example.com",
  "name": "Alice Chen-Williams",
  "status": "active",
  "tier": "enterprise",
  "roles": ["admin", "developer"],
  "metadata": {
    "department": "Security",
    "region": "us-east-1",
    "team": "Platform Security"
  },
  "createdAt": "2025-11-15T09:00:00Z",
  "updatedAt": "2026-03-28T15:30:00Z"
}
```

---

## PUT /:id/roles

Assign roles to a user. This replaces all existing role assignments.

### Request

```bash
curl -X PUT https://api.nexus.io/api/v2/users/usr_7k8m9n0p/roles \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..." \
  -H "Content-Type: application/json" \
  -d '{
    "roles": ["admin", "developer", "security-auditor"]
  }'
```

### Response -- 200 OK

```json
{
  "userId": "usr_7k8m9n0p",
  "roles": ["admin", "developer", "security-auditor"],
  "updatedAt": "2026-03-28T15:45:00Z"
}
```

### Available Roles

| Role | Description | Permissions |
|------|-------------|-------------|
| admin | Full system access | All operations |
| developer | Service management | Read/write services, deployments |
| viewer | Read-only access | Read all resources |
| security-auditor | Security monitoring | Read audit logs, security events |
| billing-admin | Billing management | Read/write billing, invoices |

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| not_found | 404 | User does not exist |
| duplicate_email | 409 | Email address already registered |
| invalid_role | 400 | One or more specified roles do not exist |
| forbidden | 403 | Insufficient permissions for this operation |
| validation_error | 422 | Request body failed validation |
