+++
title = "/etc/about"
description = "What null.protocol is, who it is for, and what it refuses to ship without."
+++

## What it is

`null.protocol` is a zero-trust deployment runtime. It is the layer that sits between your release pipeline and your production hosts and refuses to forward anything that is not pinned, signed, and policy-approved.

It does not replace your CI. It does not replace your secret manager. It replaces the unverified `kubectl apply` that everyone is pretending is safe.

## Who it is for

- Platform teams who own production and have been paged at 3 a.m. once too often.
- Security engineers who want a single audit log they can hand to a regulator.
- Founders who want to keep moving fast without inheriting an incident.

## What it refuses to ship

```
[ DENY ] unsigned artifact
[ DENY ] signer not in enrollment ledger
[ DENY ] egress to unpinned host
[ HOLD ] policy diff awaiting review
[ ALLOW ] matched artifact + matched signer + matched policy
```

## How to reach us

> Open a ticket, send a key, or join the room. We answer in mono.

Email `op@null.protocol`. PGP key on the keyserver. Office hours every Thursday at 17:00 KST.
