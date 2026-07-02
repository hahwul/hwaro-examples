+++
title = "Traffic Splitting"
description = "Route a percentage of live traffic to a new revision and shift the weight without a redeploy."
date = "2025-06-11"
weight = 40
toc = true
[extra]
section_id = "MESH.4"
status = "stable"
+++

A `TrafficSplit` divides requests for one logical service across two or more backends by weight. The split is enforced at the calling sidecar, per request — there is no session affinity unless you ask for it, and no redeploy required to change the ratio.

<!-- more -->

## Defining a split

Backends reference Kubernetes services, typically distinguished by a `version` label on the underlying pods:

```yaml
apiVersion: mesh.kyanite.io/v1
kind: TrafficSplit
metadata:
  name: checkout-api
  namespace: checkout
spec:
  service: checkout-api
  backends:
    - name: checkout-api-stable
      weight: 90
    - name: checkout-api-canary
      weight: 10
```

Weights are relative integers, not required to sum to 100 — a `9`/`1` split behaves identically to `90`/`10`.

## Rolling out a canary

1. Deploy the new revision as `checkout-api-canary`, alongside the existing `checkout-api-stable`. Both are ordinary Kubernetes services; the mesh does not require anything special of them.
2. Apply a `TrafficSplit` with a small canary weight — `10` is a reasonable start for a service with meaningful traffic volume.
3. Watch the canary's golden metrics (`kyanitectl metrics -n checkout checkout-api-canary`) against the stable backend's baseline for at least one full traffic cycle.
4. Raise the canary weight in stages — `10 → 50 → 100` — pausing at each stage. There is no minimum dwell time enforced by the mesh; that judgment is yours.
5. Once the canary is at `100`, redirect `checkout-api-stable`'s deployment to the new image and delete the `TrafficSplit` — the split has served its purpose.

## Rolling back

Because the split lives in the mesh's routing table and not in a deployment, rollback is one field:

```yaml
spec:
  backends:
    - name: checkout-api-stable
      weight: 100
    - name: checkout-api-canary
      weight: 0
```

The change propagates to every sidecar within one control-plane push cycle, typically under two seconds — no pod restarts, no traffic drop.

## Splitting on more than version

`TrafficSplit` also accepts a `match` block to scope the split to a subset of requests — useful for testing a canary against internal traffic only before it sees anything external:

```yaml
spec:
  service: checkout-api
  match:
    headers:
      x-internal-test: "true"
  backends:
    - name: checkout-api-canary
      weight: 100
```

Requests that do not match fall through to the default split, or to the single backend if no default is configured.
