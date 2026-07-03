+++
title = "Observability"
description = "Golden metrics and distributed traces, exported by every sidecar without an SDK in your application."
date = "2025-11-24"
weight = 60
toc = true
[extra]
section_id = "MESH.6"
status = "beta"
+++

Because every request already passes through a sidecar, the mesh can record latency, error rate, and request volume for every service without a client library. Metrics are the stable part of this chapter; distributed tracing export is newer and marked `beta` — the trace format may still change before 2.0.

<!-- more -->

## Golden metrics, no instrumentation

Every sidecar emits four series per route it handles, labeled by source and destination identity:

```text
mesh_request_duration_seconds{source="gateway", destination="checkout-api"}
mesh_request_total{source="gateway", destination="checkout-api", code="200"}
mesh_request_bytes{source="gateway", destination="checkout-api", direction="inbound"}
mesh_tcp_connections_open{source="gateway", destination="checkout-api"}
```

Point Prometheus at the control plane's `/mesh-metrics` endpoint, or enable the built-in scrape config:

```yaml
apiVersion: mesh.kyanite.io/v1
kind: MeshConfig
metadata:
  name: default
spec:
  telemetry:
    exportInterval: 15s
    prometheus:
      enabled: true
      port: 9102
```

## Enabling trace export

Tracing rides on the same sidecars but is opt-in per namespace, since it adds a small amount of per-request overhead:

```yaml
apiVersion: mesh.kyanite.io/v1
kind: Telemetry
metadata:
  name: default
  namespace: checkout
spec:
  tracing:
    enabled: true
    sampleRate: 0.1
    exporter: otlp
    endpoint: otel-collector.observability:4317
```

`sampleRate` is a fraction of requests, not a fixed count — `0.1` traces roughly one request in ten. Set it to `1.0` temporarily while debugging a specific path, then turn it back down.

## Reading a trace across sidecars

1. The edge sidecar that first accepts a sampled request generates a trace ID and injects it as a header on the outbound call.
2. Every sidecar the request passes through adds a span covering the time it held the request, tagged with its workload's mesh identity.
3. Spans are batched and shipped to the OTLP endpoint on the configured interval — not synchronously, so tracing failures never add request latency.
4. A trace assembled from these spans shows exactly which hop absorbed the latency: the network between sidecars, or time inside an application container.

## Checking what a namespace exports

```text
$ kyanitectl telemetry status -n checkout
METRICS     enabled   interval=15s
TRACING     enabled   sampleRate=0.10  exporter=otlp
```

If tracing shows `disabled` here but you expected spans, the most common cause is a `Telemetry` resource applied to the wrong namespace — the resource is namespace-scoped, not mesh-wide.
