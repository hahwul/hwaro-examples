+++
title = "OpenID Connect Discovery"
description = "The well-known discovery document, the scopes and claims Corundum understands, and the UserInfo endpoint."
date = "2025-06-10"
weight = 4
toc = true
[extra]
roman = "IV"
status = "Normative"
+++

OpenID Connect layers identity on top of OAuth. Rather than hard-coding
endpoint URLs, a client reads them once from a discovery document and adapts to
whatever the server publishes. This guide covers that document, the vocabulary
of scopes and claims, and the UserInfo endpoint that returns them.

<!-- more -->

## The discovery document

Every OIDC provider serves a JSON document at a fixed well-known path. A client
fetches it at configuration time and caches it. The `issuer` inside it must
match the URL you fetched it from, byte for byte.

```http
GET /.well-known/openid-configuration HTTP/1.1
Host: id.example.com
```

```json
{
  "issuer": "https://id.example.com",
  "authorization_endpoint": "https://id.example.com/authorize",
  "token_endpoint": "https://id.example.com/token",
  "userinfo_endpoint": "https://id.example.com/userinfo",
  "jwks_uri": "https://id.example.com/.well-known/jwks.json",
  "response_types_supported": ["code"],
  "grant_types_supported": ["authorization_code", "refresh_token"],
  "code_challenge_methods_supported": ["S256"],
  "scopes_supported": ["openid", "profile", "email", "offline_access"],
  "subject_types_supported": ["public"]
}
```

Notice what is absent. No `token` response type, no implicit or password grant,
no `plain` PKCE method. A client that reads the document cannot even attempt a
flow Corundum refuses.

## Scopes and the claims they release

Scopes are coarse consent buckets; claims are the individual fields they
release. Requesting a scope is how a client asks the user's permission for the
claims underneath it.

| Scope | Claims released |
|---|---|
| `openid` | `sub` |
| `profile` | `name`, `preferred_username`, `updated_at` |
| `email` | `email`, `email_verified` |
| `offline_access` | *(no claims — grants a refresh token)* |

The `openid` scope is required for any OIDC request; without it Corundum treats
the request as plain OAuth and issues no ID token.

## The UserInfo endpoint

Claims can arrive two ways: inside the ID token, or from the UserInfo endpoint.
Fetching them keeps the ID token small and lets a client re-read fresh profile
data without a new sign-in. Present the access token as a bearer credential.

```http
GET /userinfo HTTP/1.1
Host: id.example.com
Authorization: Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6IjJm...
```

```json
{
  "sub": "8f14e45fceea167a5a36dedd4bea2543",
  "name": "Ada Whitfield",
  "preferred_username": "ada",
  "email": "ada@example.com",
  "email_verified": true
}
```

The `sub` returned here must equal the `sub` in the ID token from the same
session. A mismatch means the tokens came from different subjects and the
response must be discarded. With discovery in place, the last guide turns on
[hardware-key authentication](/guides/hardware-keys/).
