+++
title = "Architecture"
description = "The control plane, the data plane, and the one config resource that ties them together."
date = "2025-01-14"
weight = 10
toc = true
[extra]
section_id = "MESH.1"
status = "stable"
+++

Kyanite is two things running at once: a control plane that watches your cluster's API and a fleet of sidecar proxies, one per workload, that actually move traffic. The control plane never touches a request. It computes configuration and pushes it down; the sidecars enforce it.

<!-- more -->

## The two planes

The control plane (`kyanite-controller`) watches for pods, services, and Kyanite's own custom resources, then compiles that state into a routing table it streams to every sidecar over a long-lived connection. The data plane is the sidecar proxy itself — injected next to your application container, intercepting inbound and outbound traffic via `iptables` rules set at pod startup.

Neither plane is a single point of failure for traffic in flight: if the control plane restarts, sidecars keep serving their last-known-good configuration until a new one arrives.

## How a request crosses the mesh

1. Your application makes an outbound call. The kernel routes it to the local sidecar instead of the network, transparently.
2. The sidecar looks up the destination in its routing table, applies any traffic split or retry policy, and opens a connection to the destination sidecar.
3. The destination sidecar presents its mesh identity certificate; both sides complete a mutual TLS handshake before any application bytes move.
4. The destination sidecar forwards the decrypted request to its local application container on `localhost`.
5. Response metrics (latency, status, bytes) are recorded by both sidecars and exported on the next telemetry interval.

## The one resource you set cluster-wide

Most configuration is per-workload, but mesh-wide defaults live in a single `MeshConfig` resource:

```yaml
apiVersion: mesh.kyanite.io/v1
kind: MeshConfig
metadata:
  name: default
spec:
  mtls:
    mode: STRICT
  telemetry:
    exportInterval: 15s
  proxy:
    image: kyanite/sidecar:1.3.2
    resources:
      cpu: 100m
      memory: 64Mi
```

Everything else — which namespaces get [sidecars](/mesh/sidecar-injection/), how a route [splits](/mesh/traffic-splitting/), what a [retry budget](/mesh/resilience/) looks like — is scoped to a workload and lives next to it, covered in the following chapters.
