+++
title = "Service Mesh"
weight = 1
description = "Service mesh architecture and sidecar proxy topology"
+++

## Overview

Nexus deploys a service mesh layer that manages all inter-service communication. Every microservice instance runs alongside a sidecar proxy that intercepts inbound and outbound traffic, providing transparent mTLS encryption, load balancing, and observability.

## Service Topology

The mesh consists of three planes:

### Data Plane

The data plane is composed of lightweight sidecar proxies deployed alongside each service instance. These proxies handle:

- **Traffic routing** -- forwarding requests to the correct upstream service
- **Load balancing** -- distributing requests across healthy instances using round-robin or least-connections
- **Circuit breaking** -- preventing cascade failures when a downstream service is degraded
- **Retry logic** -- automatic retries with exponential backoff for transient failures

### Control Plane

The control plane manages proxy configuration and service discovery:

```yaml
# nexus-control-plane.yaml
apiVersion: nexus.io/v1
kind: MeshConfig
metadata:
  name: production-mesh
spec:
  mtls:
    mode: STRICT
  discovery:
    type: dns
    refreshInterval: 30s
  loadBalancing:
    algorithm: least-connections
  circuitBreaker:
    consecutiveErrors: 5
    interval: 30s
    baseEjectionTime: 60s
    maxEjectionPercent: 50
```

### Observability Plane

Every proxy emits telemetry data to the observability stack:

| Signal | Backend | Retention |
|--------|---------|-----------|
| Traces | Jaeger / Tempo | 7 days |
| Metrics | Prometheus / Mimir | 30 days |
| Logs | Loki / Elasticsearch | 14 days |
| Service Map | Kiali | Real-time |

## Sidecar Injection

Sidecar proxies are injected automatically via a mutating admission webhook. Label your namespace to enable injection:

```bash
kubectl label namespace production nexus.io/inject=enabled
```

Verify injection status:

```bash
kubectl get pods -n production -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[*].name}{"\n"}{end}'
```

Expected output shows two containers per pod -- the application container and the `nexus-proxy` sidecar.

## Health Checking

The mesh performs active and passive health checks on all registered services:

```json
{
  "healthCheck": {
    "interval": "10s",
    "timeout": "3s",
    "unhealthyThreshold": 3,
    "healthyThreshold": 2,
    "httpPath": "/healthz",
    "expectedStatuses": [200]
  }
}
```

Services that fail health checks are removed from the load balancer pool and re-added once they pass the healthy threshold.

## Service Dependencies

The current production mesh includes the following core services:

| Service | Version | Protocol | Dependencies |
|---------|---------|----------|-------------|
| api-gateway | v2.4.1 | HTTP/2 | auth-service, user-service, order-service |
| auth-service | v1.8.0 | gRPC | token-store, identity-provider |
| user-service | v3.1.2 | HTTP/2 | postgres-primary, cache-cluster |
| order-service | v2.0.5 | gRPC | inventory-service, payment-service |
| notification-service | v1.3.0 | AMQP | email-relay, sms-gateway |

## mTLS Configuration

All service-to-service communication is encrypted with mutual TLS. Certificates are rotated automatically every 24 hours by the built-in certificate authority:

```yaml
apiVersion: nexus.io/v1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT
  certificateRotation:
    interval: 24h
    gracePeriod: 1h
```

Services attempting plaintext communication within the mesh will receive a `503 Service Unavailable` response from the sidecar proxy.
