+++
title = "The Authorization Code Flow"
description = "The one interactive grant Corundum offers: authorization code with PKCE, set out step by numbered step."
date = "2025-03-18"
weight = 2
toc = true
[extra]
roman = "II"
status = "Normative"
+++

Under OAuth&nbsp;2.1 there is exactly one interactive grant worth teaching: the
authorization code flow with PKCE. The implicit grant is gone, the resource
owner password grant is gone, and Corundum implements neither. PKCE — Proof Key
for Code Exchange — is mandatory for every client, public and confidential
alike. This guide walks the full round trip.

<!-- more -->

## Register a client

A client is registered once and identified by a `client_id`. Public clients
(single-page apps, mobile apps) hold no secret; confidential clients (servers)
do. Redirect URIs are matched exactly — no wildcards, no prefix matching.

```bash
corundum client create \
  --name "Ledger Web" \
  --type public \
  --redirect-uri https://app.example.com/callback
```

## The flow, step by step

The client never sees a password. It bounces the user to Corundum, receives a
short-lived code, and exchanges that code for tokens over a back channel.

1. The client generates a random `code_verifier` — 43 to 128 characters of
   unreserved ASCII — and derives its `code_challenge` as the base64url-encoded
   SHA-256 of the verifier.
2. The client redirects the browser to the authorization endpoint, passing the
   challenge, a unique `state`, and the scopes it needs.
3. Corundum authenticates the user, shows a consent screen for any scope not
   already granted, and records the decision.
4. Corundum redirects back to the registered `redirect_uri` with a single-use
   `code` and the original `state`, which the client verifies to defeat CSRF.
5. The client POSTs the `code` and the original `code_verifier` to the token
   endpoint. Corundum recomputes the challenge and rejects any mismatch.
6. Corundum returns an access token, an ID token, and — if `offline_access` was
   requested — a refresh token.

## The authorization request

```http
GET /authorize?response_type=code
  &client_id=ledger-web
  &redirect_uri=https://app.example.com/callback
  &scope=openid%20profile%20offline_access
  &state=af0ifjsldkj
  &code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM
  &code_challenge_method=S256 HTTP/1.1
Host: id.example.com
```

## The token exchange

The verifier is sent only on this back-channel request, never through the
browser, which is what makes an intercepted code useless to an attacker.

```http
POST /token HTTP/1.1
Host: id.example.com
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=SplxlOBeZQQYbYS6WxSbIA
&redirect_uri=https://app.example.com/callback
&client_id=ledger-web
&code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

A successful exchange returns the token set described in the
[tokens guide](../tokens/). Codes are single-use and expire in sixty
seconds; presenting a code twice revokes every token issued from it, on the
assumption that a replay means the code was stolen.
