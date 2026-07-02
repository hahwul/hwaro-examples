+++
title = "Tokens and Their Verification"
description = "What Corundum issues — access tokens, ID tokens, refresh tokens — and how a resource server verifies each one."
date = "2025-04-29"
weight = 3
toc = true
[extra]
roman = "III"
status = "Normative"
+++

A successful token exchange returns up to three tokens, each with a distinct
purpose and a distinct verification path. Confusing them is the most common
source of insecure integrations, so this guide is precise about which token
goes where and how each is checked.

<!-- more -->

## The three tokens

- **Access token** — a signed JWT the client presents to resource servers. It
  asserts *authorization*: which scopes were granted. Short-lived, typically
  ten minutes.
- **ID token** — a signed JWT the client itself consumes. It asserts
  *authentication*: who the user is. Never send it to a resource server.
- **Refresh token** — an opaque, high-entropy string, issued only when
  `offline_access` was granted. It buys new access tokens without a new
  browser round trip.

## Anatomy of an access token

Access tokens are JWTs signed with the server's current key. The header names
the algorithm and the key id; the client picks the matching public key out of
the JWKS by that `kid`.

```json
{
  "iss": "https://id.example.com",
  "sub": "8f14e45fceea167a5a36dedd4bea2543",
  "aud": "https://api.example.com",
  "exp": 1714412400,
  "iat": 1714411800,
  "scope": "profile ledger.read",
  "cnf": { "jkt": "0ZcOCORZNYy-DWpqq30jZyJGHTN0d2HglBV3uiguA4I" }
}
```

The `cnf` claim binds the token to a client-held key when sender-constrained
tokens are enabled, so a stolen bearer token cannot be replayed from another
machine.

## Verifying a token

A resource server must run every one of these checks. Skipping any of them
turns a signed assertion back into an unauthenticated string.

1. Fetch the JWKS from the discovery document and cache it, keyed by `kid`.
2. Verify the signature against the key whose `kid` matches the token header.
3. Confirm `iss` equals the exact issuer you trust — string equality, no
   normalization.
4. Confirm `aud` contains your resource server's identifier.
5. Confirm the current time is before `exp` and after `iat`, allowing a small
   clock skew of no more than sixty seconds.
6. Confirm the granted `scope` covers the operation being requested.

## The JWKS endpoint

Public keys are published as a JSON Web Key Set. During a rotation both the
outgoing and incoming keys appear here, so a verifier that caches the set keeps
working across the changeover.

```http
GET /.well-known/jwks.json HTTP/1.1
Host: id.example.com
```

## Refresh token rotation

Refresh tokens rotate on every use: each refresh returns a new refresh token
and invalidates the old one. If an already-used refresh token is presented
again, Corundum treats it as theft and revokes the entire token family. Store
refresh tokens in confidential storage and expect exactly one in flight at a
time.

```http
POST /token HTTP/1.1
Host: id.example.com
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&refresh_token=v1.MjAyNS0wNC0yOVQxMjowMDowMFo
&client_id=ledger-web
```
