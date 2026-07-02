+++
title = "Authentication"
description = "Authenticate requests with a bearer key scoped to test or live mode, and confirm it with a lightweight account check."
weight = 1
date = "2025-02-10"
toc = true
[extra]
route = "GET /v1/account"
method = "GET"
status = "stable"
+++

Every request to Quartzite authenticates with a single secret key, sent as a bearer token. There is no request signing, no OAuth handshake, and no separate public key — the secret key is the whole credential, so treat it like one.

<!-- more -->

## Key types

Each account holds four keys: a live and a test secret key, each issued in a primary and secondary pair for rotation.

| Prefix | Mode | Touches real funds |
|---|---|---|
| `sk_live_` | Live | Yes |
| `sk_test_` | Test | No — simulated only |

Test-mode keys share the same routes, fields, and error shapes as live mode. An integration that passes fully against test keys will behave identically once you swap in a live key — nothing about the API surface changes between modes.

## Sending the key

```bash
curl https://api.quartzite.dev/v1/account \
  -H "Authorization: Bearer sk_test_51N0KpQ"
```

```json
{
  "id": "acct_8mQzR1",
  "mode": "test",
  "default_currency": "usd",
  "webhook_signing_secret": "whsec_2f...c91a",
  "created": "2024-11-02T09:14:00Z"
}
```

A `200` with an `account` object confirms the key is valid and tells you which mode you are in — check `mode` in code rather than inspecting the key prefix yourself, since a misplaced key is a common source of silent test-mode leaks into what looks like a live integration.

## Rotating a key

Generate the secondary key, deploy it everywhere the primary is used, confirm request volume has shifted with a query against your own logs, then revoke the old primary. Because both keys in a pair are valid simultaneously, rotation never requires a maintenance window.

## Failure responses

An invalid, expired, or revoked key returns `401` with `{"error": {"type": "authentication_error"}}`. A key that is valid but lacks permission for the requested route — for example, a restricted key missing the `charges:write` scope — returns `403` with `{"error": {"type": "permission_error"}}`. Both are safe to retry only after you have corrected the credential; retrying an authentication failure unmodified will never succeed.
