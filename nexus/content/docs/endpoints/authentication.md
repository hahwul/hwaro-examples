+++
title = "Authentication"
weight = 1
description = "OAuth 2.0 token endpoints and API key management"
+++

## Overview

The Nexus authentication service handles identity verification, token issuance, and API key lifecycle management. All endpoints are served through the API gateway at the `/api/v2/auth` prefix.

## Base URL

```
https://api.nexus.io/api/v2/auth
```

## Endpoint Reference

| Method | Path | Description | Auth Required |
|--------|------|-------------|---------------|
| POST | /token | Issue access token | No |
| POST | /token/refresh | Refresh expired token | No |
| POST | /token/revoke | Revoke a token | Yes |
| GET | /keys | List API keys | Yes |
| POST | /keys | Create API key | Yes |
| DELETE | /keys/:id | Delete API key | Yes |
| GET | /well-known/jwks | Public key set | No |

## Status

- <span class="text-emerald-400 font-semibold">OPERATIONAL</span> -- All authentication endpoints are healthy
- Uptime (30d): 99.98%
- Avg latency: 12ms (p50), 45ms (p99)

---

## POST /token

Issue a new access token using client credentials or authorization code.

### Request

```bash
curl -X POST https://api.nexus.io/api/v2/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "client_credentials",
    "client_id": "app_3x7k9m2p",
    "client_secret": "sk_live_a1b2c3d4e5f6g7h8i9j0",
    "scope": "read:users write:orders"
  }'
```

### Response -- 200 OK

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhcHBfM3g3azltMnAiLCJpc3MiOiJodHRwczovL2F1dGgubmV4dXMuaW8iLCJhdWQiOiJuZXh1cy1hcGkiLCJleHAiOjE3MTE2NDA0MDAsInNjb3BlIjoicmVhZDp1c2VycyB3cml0ZTpvcmRlcnMifQ.signature",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "read:users write:orders"
}
```

### Response -- 401 Unauthorized

```json
{
  "error": "invalid_client",
  "error_description": "Client authentication failed. Verify your client_id and client_secret.",
  "request_id": "req_8f7e6d5c4b3a"
}
```

---

## POST /token/refresh

Exchange a refresh token for a new access token.

### Request

```bash
curl -X POST https://api.nexus.io/api/v2/auth/token/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "rt_k8m9n0p1q2r3s4t5u6v7",
    "client_id": "app_3x7k9m2p"
  }'
```

### Response -- 200 OK

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.new-token-payload.signature",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "rt_w8x9y0z1a2b3c4d5e6f7"
}
```

> The previous refresh token is invalidated upon use. Each refresh token can only be used once.

---

## POST /token/revoke

Revoke an active token. Requires authentication.

### Request

```bash
curl -X POST https://api.nexus.io/api/v2/auth/token/revoke \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..." \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJSUzI1NiI...",
    "token_type_hint": "access_token"
  }'
```

### Response -- 204 No Content

No response body. The token is immediately invalidated across all gateway nodes.

---

## POST /keys

Create a new API key for programmatic access.

### Request

```bash
curl -X POST https://api.nexus.io/api/v2/auth/keys \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiI..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "CI/CD Pipeline",
    "scopes": ["read:services", "write:deployments"],
    "expiresIn": "90d",
    "rateLimit": {
      "requests": 5000,
      "window": "60s"
    }
  }'
```

### Response -- 201 Created

```json
{
  "id": "key_9a8b7c6d5e4f",
  "name": "CI/CD Pipeline",
  "key": "nxk_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  "scopes": ["read:services", "write:deployments"],
  "createdAt": "2026-03-28T14:30:00Z",
  "expiresAt": "2026-06-26T14:30:00Z",
  "rateLimit": {
    "requests": 5000,
    "window": "60s"
  }
}
```

> The `key` field is only returned once at creation time. Store it securely -- it cannot be retrieved again.

---

## GET /well-known/jwks

Retrieve the JSON Web Key Set used to verify access tokens. This endpoint is public and does not require authentication.

### Request

```bash
curl https://api.nexus.io/api/v2/auth/well-known/jwks
```

### Response -- 200 OK

```json
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "nexus-prod-2026-03",
      "alg": "RS256",
      "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM...",
      "e": "AQAB"
    }
  ]
}
```

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| invalid_client | 401 | Client credentials are incorrect |
| invalid_grant | 400 | Grant type is unsupported or token is expired |
| invalid_scope | 400 | Requested scope exceeds allowed permissions |
| rate_limited | 429 | Too many authentication requests |
| server_error | 500 | Internal authentication service failure |
