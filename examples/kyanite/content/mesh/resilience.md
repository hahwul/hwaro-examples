+++
title = "Retries & Resilience"
description = "Retry budgets, timeouts, and outlier detection, configured once per route and enforced at every sidecar."
date = "2025-08-07"
weight = 50
toc = true
[extra]
section_id = "MESH.5"
status = "stable"
+++

Resilience settings live on a `MeshRoute` — the same resource that names a service's addressable routes. Retries, timeouts, and outlier detection are enforced by the calling sidecar, so a slow or failing backend cannot take down callers that never see it directly.

<!-- more -->

## Timeouts and retries

```yaml
apiVersion: mesh.kyanite.io/v1
kind: MeshRoute
metadata:
  name: inventory-lookup
  namespace: checkout
spec:
  service: inventory
  timeout: 800ms
  retries:
    attempts: 2
    perTryTimeout: 300ms
    retryOn:
      - 503
      - connect-failure
```

`timeout` bounds the whole call, including retries. `perTryTimeout` bounds each individual attempt — set it low enough that two failed tries plus one success still fit inside the outer timeout.

## Configuring a retry policy

1. Start from the backend's real p99 latency, not a guess — `kyanitectl metrics -n checkout inventory` prints the last hour's percentiles.
2. Set `perTryTimeout` a little above p99, so a normal slow response is not retried needlessly.
3. Set `attempts` to 2 for most internal calls. Higher counts turn a struggling backend's overload into a retry storm; the mesh does not raise this for you.
4. List only the status codes and failure modes that are safe to retry. Retrying a `409` or any mutating call without idempotency is a correctness bug, not a resilience feature.
5. Apply the resource and confirm with `kyanitectl route explain checkout inventory-lookup`, which prints the effective policy after defaults are merged.

{{ alert(type="caution", body="`retryOn` applies to every caller of this route, not just the one you are tuning for. A retry policy that is safe for a read-heavy caller can turn a slow write endpoint into duplicate charges for a different one — scope routes narrowly rather than sharing one `MeshRoute` across unrelated callers.") }}

## Outlier detection

A backend instance that fails repeatedly is ejected from the pool for a cooldown window, independent of retries:

```yaml
spec:
  outlierDetection:
    consecutiveErrors: 5
    interval: 10s
    baseEjectionTime: 30s
    maxEjectionPercent: 50
```

`maxEjectionPercent` caps how much of the pool can be ejected at once — a safety rail against a bad rollout or a shared dependency outage taking every instance out simultaneously.

## Reading a resilience event

Ejections and retry exhaustion are logged by the sidecar and surfaced through `kyanitectl`:

```text
$ kyanitectl events -n checkout --kind=resilience --since=1h
14:02:11  outlier-ejected   inventory-7f8b-2m4x   reason=5xx consecutive=5 cooldown=30s
14:02:41  retry-exhausted   route=inventory-lookup attempts=2 final=connect-failure
```

A spike of `retry-exhausted` events with no matching `outlier-ejected` line usually means the timeout budget is too tight for current latency, not that the backend is actually unhealthy.
