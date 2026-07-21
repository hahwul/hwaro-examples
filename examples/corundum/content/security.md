+++
title = "Security Model"
description = "The threat model Corundum assumes, how it protects signing keys and tokens, and a hardening checklist for production."
date = "2025-09-15"
toc = true
[extra]
status = "Reference"
+++

An identity server is the root of trust for everything downstream of it. If it
is compromised, every application that relies on it is compromised at the same
instant. This page states the threats Corundum is designed to resist, the
mechanisms that resist them, and the operator actions the design assumes you
will take.

## What we assume, and what we don't

Corundum assumes the host it runs on is trusted and that you, the operator,
hold the signing keys. It assumes the network is hostile: any request may be
forged, replayed, or observed. It does **not** assume clients are honest —
public clients hold no secret and are treated as if their source is readable by
an attacker, which is why PKCE is mandatory rather than optional.

## Protecting the signing keys

The private signing key is the single most valuable secret in the system.

- Keys live on disk with `0600` permissions, owned by the service account, and
  never leave the host.
- Rotation runs on the schedule set by `keys.rotation_days`. Both keys are
  published in the JWKS during the overlap so verifiers never see a gap.
- A compromised key is contained by revoking it from the JWKS and forcing an
  immediate rotation; tokens signed by the retired key stop verifying at once.

## Protecting tokens

Signed tokens are tamper-evident but not secret, so the design limits the blast
radius of a stolen one.

- Access tokens are short-lived — ten minutes by default — so a captured bearer
  token expires before it is useful for long.
- Refresh tokens rotate on every use; replaying a spent one revokes the whole
  family. See the [tokens guide](../guides/tokens/) for the mechanics.
- Sender-constrained tokens bind an access token to a client-held key through
  the `cnf` claim, so a token lifted from one machine cannot be used from
  another.

## Rate limiting and lockout

Interactive endpoints are rate limited per client and per source address. After
repeated failed authentications an account enters a backoff that grows
geometrically, and a hardware-key challenge cannot be brute-forced because the
private key never touches the wire.

## Hardening checklist

Run through this before a deployment faces real traffic.

1. Terminate TLS at the proxy and set `trust_forwarded = true` only when the
   proxy strips inbound `Forwarded` headers.
2. Set the `issuer` to the exact external URL and confirm it never redirects.
3. Restrict the database role to the `corundum` database and nothing else.
4. Require a hardware key for every administrative client.
5. Ship the audit log to storage the identity host cannot itself rewrite.

> **Informative.** This page describes the intended posture of a default
> deployment. Your environment may demand stricter controls; nothing here
> forbids them.
