+++
title = "mTLS & Identity"
description = "Every sidecar gets a short-lived certificate at boot. Connections are encrypted and mutually authenticated by default."
date = "2025-04-19"
weight = 30
toc = true
[extra]
section_id = "MESH.3"
status = "stable"
+++

Identity in Kyanite is not a shared secret — it is a certificate issued to a workload, not a person. Every sidecar requests one from the mesh's built-in certificate authority the moment it starts, and rotates it automatically before it expires. There is nothing to store, mount, or leak.

<!-- more -->

## Where identity comes from

The certificate's subject is derived from the pod's service account: `service-account.namespace.mesh.internal`. Two workloads with different service accounts get different identities even if they run the same image. The mesh CA signs a fresh certificate on every proxy restart and again every eight hours, whichever comes first.

## Setting the mesh-wide mode

`PeerPolicy` controls whether mTLS is required, permitted, or off, scoped to a namespace or the whole mesh:

```yaml
apiVersion: mesh.kyanite.io/v1
kind: PeerPolicy
metadata:
  name: default
  namespace: checkout
spec:
  mtls:
    mode: STRICT
```

| Mode | Behavior |
| --- | --- |
| `STRICT` | Only mTLS connections are accepted; plaintext is rejected at the sidecar. |
| `PERMISSIVE` | Both mTLS and plaintext are accepted — the state for migrating a namespace onto the mesh. |
| `DISABLE` | Plaintext only; the sidecar issues no certificate for this scope. |

## Migrating an existing namespace onto the mesh

1. Enable sidecar injection on the namespace (see the sidecar injection chapter) but leave `PERMISSIVE` set, or omit `PeerPolicy` entirely — permissive is the default for newly injected namespaces.
2. Redeploy workloads so every pod picks up a sidecar. Traffic keeps flowing in plaintext from any caller that has not yet been injected.
3. Watch `kyanitectl mtls coverage -n checkout` until it reports 100% of observed connections as mTLS.
4. Apply a `PeerPolicy` with `mode: STRICT`. Any remaining plaintext caller now fails closed instead of silently succeeding.

{{ alert(type="tip", body="Coverage below 100% almost always means a caller outside the mesh — a health check from the node's kubelet, or a cron job in an uninjected namespace. Find it with `kyanitectl mtls coverage -n checkout --show-plaintext` before you flip to `STRICT`.") }}

## Authorizing who can call whom

Identity alone does not grant access — a separate `AuthzPolicy` resource allow-lists callers by their mesh identity:

```yaml
apiVersion: mesh.kyanite.io/v1
kind: AuthzPolicy
metadata:
  name: checkout-allow
  namespace: checkout
spec:
  target: checkout-api
  allow:
    - from: gateway.edge
    - from: billing.checkout
```

Requests from any identity not listed return `403` at the sidecar, before the application container is invoked.
