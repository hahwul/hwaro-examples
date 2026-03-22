+++
title = "Authentication Service Redesign"
date = "2024-02-10"
tags = ["security", "architecture", "api"]
categories = ["backend"]
authors = ["engineering"]
description = "Technical specification for migrating the authentication service to token-based authentication with support for OAuth 2.0 and OIDC."
status = "approved"
spec_id = "SPEC-001"
revision = "2.1"
spec_author = "Platform Team"
+++

## Abstract

This document specifies the redesign of the authentication subsystem, replacing session-based authentication with a stateless, token-based architecture built on JWT and OAuth 2.0.

## Motivation

The current session-based system has reached its scaling limits. Session store lookups add 8-12ms of latency per request, and horizontal scaling requires sticky sessions or a distributed cache layer.

## Technical Requirements

| Requirement | Priority | Status |
|-------------|----------|--------|
| JWT access tokens with RS256 signing | P0 | Complete |
| OAuth 2.0 authorization code flow | P0 | Complete |
| OIDC-compliant identity provider | P0 | Complete |
| Refresh token rotation | P1 | Complete |
| Token revocation endpoint | P1 | In Progress |
| Device fingerprinting | P2 | Planned |

## Architecture

### Token Flow

1. Client sends credentials to `/auth/token`
2. Server validates credentials against the user store
3. Server issues a signed JWT access token (15min TTL) and an opaque refresh token (7d TTL)
4. Client includes the access token in the `Authorization: Bearer` header
5. API gateway validates the token signature without contacting the auth service

### Key Design Decisions

- **RS256 over HS256**: Asymmetric signing allows any service to verify tokens without sharing a secret key
- **Short-lived access tokens**: Minimizes the window of compromise if a token is leaked
- **Opaque refresh tokens**: Stored server-side, enabling revocation without token introspection

## API Specification

### POST /auth/token

Request:

```json
{
  "grant_type": "authorization_code",
  "code": "abc123",
  "redirect_uri": "https://app.example.com/callback",
  "client_id": "web-app"
}
```

Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 900,
  "refresh_token": "dGhpcyBpcyBhIHJlZnJl..."
}
```

## Migration Plan

The migration follows a three-phase rollout:

1. **Phase 1**: Deploy the new auth service alongside the existing one. Both issue tokens.
2. **Phase 2**: Route 10% of traffic to the new service. Monitor error rates and latency.
3. **Phase 3**: Full cutover. Decommission the legacy session store after a 30-day grace period.

## References

- RFC 6749 - The OAuth 2.0 Authorization Framework
- RFC 7519 - JSON Web Token (JWT)
- OpenID Connect Core 1.0
