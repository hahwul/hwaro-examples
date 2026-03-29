+++
title = "Auth Service"
description = "Authentication and authorization service handling JWT issuance and validation"
weight = 2
tags = ["service", "security", "critical"]

[extra]
status = "healthy"
region = "Global"
provider = "Internal"
+++

## Service Overview

The Auth Service manages user authentication, JWT token issuance, and authorization policy evaluation. It integrates with external identity providers via OIDC.

## Specifications

| Property | Value |
|----------|-------|
| Language | Rust |
| Repository | platform/auth-service |
| Port | 8081 (gRPC), 8082 (metrics) |
| Protocol | gRPC with mTLS |
| SLA Target | 99.99% |
| Owner | Security Team |

## Authentication Flows

### Token Issuance

```
Login Request (credentials)
  ├── Validate credentials against user-service
  ├── Check MFA requirement
  │   ├── TOTP verification
  │   └── WebAuthn challenge
  ├── Generate JWT (RS256, 15min expiry)
  ├── Issue refresh token (opaque, 7d expiry)
  └── Return token pair
```

### Token Validation

| Check | Description | Failure Action |
|-------|-------------|----------------|
| Signature | RS256 verification | 401 Unauthorized |
| Expiration | Token not expired | 401 Unauthorized |
| Issuer | Matches expected issuer | 401 Unauthorized |
| Audience | Matches service audience | 403 Forbidden |
| Revocation | Not in revocation list | 401 Unauthorized |

## Dependencies

| Service | Type | Criticality | Fallback |
|---------|------|-------------|----------|
| user-service | Sync (gRPC) | Critical | None (hard dependency) |
| Redis | Sync | Critical | Local LRU cache (readonly) |
| PostgreSQL | Sync | Critical | Read replica |
| OIDC providers | Async | Medium | Cached JWKS (24h) |

## Key Rotation

Keys are rotated on a 90-day cycle. The JWKS endpoint always exposes the current and previous key to allow for graceful rotation.

| Parameter | Value |
|-----------|-------|
| Algorithm | RS256 |
| Key size | 4096 bit |
| Rotation period | 90 days |
| Overlap period | 7 days |
| JWKS endpoint | /.well-known/jwks.json |
