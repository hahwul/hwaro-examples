+++
title = "Network Policies"
description = "Configure network micro-segmentation, allow/deny rules, and CIDR-based access control"
weight = 2
+++

# Network Policies

Network policies define which network paths are permitted between subjects and resources. Bastion enforces micro-segmentation by default -- no lateral movement is allowed unless explicitly authorized by policy.

## Default Deny

All network connections are denied unless an explicit allow rule exists. This is the foundational principle of Bastion network policy.

```yaml
apiVersion: bastion.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
spec:
  default: deny
  logging: true
```

## Allow Rules

Define granular allow rules based on source, destination, and protocol:

```yaml
apiVersion: bastion.io/v1
kind: NetworkPolicy
metadata:
  name: api-access
  description: Allow frontend services to reach the API tier
spec:
  rules:
    - name: frontend-to-api
      source:
        labels:
          tier: frontend
        cidrs:
          - 10.10.1.0/24
      destination:
        services:
          - api-gateway
        ports:
          - protocol: tcp
            port: 443
          - protocol: tcp
            port: 8443
      effect: allow

    - name: api-to-database
      source:
        labels:
          tier: api
        cidrs:
          - 10.10.2.0/24
      destination:
        services:
          - postgres-primary
          - postgres-replica
        ports:
          - protocol: tcp
            port: 5432
      effect: allow
```

## Access Policy Matrix

The following table shows a typical policy matrix for a three-tier application:

| Source | Destination | Port | Protocol | Effect |
|--------|-------------|------|----------|--------|
| frontend (10.10.1.0/24) | api-gateway | 443 | TCP | Allow |
| api (10.10.2.0/24) | postgres-primary | 5432 | TCP | Allow |
| api (10.10.2.0/24) | postgres-replica | 5432 | TCP | Allow |
| api (10.10.2.0/24) | redis-cache | 6379 | TCP | Allow |
| monitoring (10.10.5.0/24) | all services | 9090 | TCP | Allow |
| any | any | any | any | Deny |

## CIDR-Based Rules

Control access by IP address range:

```yaml
apiVersion: bastion.io/v1
kind: NetworkPolicy
metadata:
  name: office-access
spec:
  rules:
    - name: allow-office-vpn
      source:
        cidrs:
          - 203.0.113.0/24   # Office network
          - 198.51.100.0/24  # VPN egress
      destination:
        services:
          - internal-dashboard
          - staging-api
        ports:
          - protocol: tcp
            port: 443
      effect: allow

    - name: deny-external
      source:
        cidrs:
          - 0.0.0.0/0
      destination:
        labels:
          visibility: internal
      effect: deny
```

## Service Mesh Integration

Bastion integrates with service mesh proxies to enforce network policy at the application layer:

```yaml
mesh:
  enabled: true
  provider: envoy
  sidecar:
    inject: true
    port: 15001
  mutual_tls:
    enabled: true
    mode: strict
  policy_sync:
    interval: 30s
    retry_backoff: 5s
```

When mesh integration is enabled, Bastion policies are translated to Envoy filter configurations and pushed to sidecar proxies via xDS.

## DNS-Based Policies

Control access to external services by DNS name:

```yaml
apiVersion: bastion.io/v1
kind: NetworkPolicy
metadata:
  name: egress-control
spec:
  rules:
    - name: allow-external-apis
      source:
        labels:
          tier: api
      destination:
        dns_names:
          - "api.stripe.com"
          - "api.sendgrid.com"
          - "*.amazonaws.com"
        ports:
          - protocol: tcp
            port: 443
      effect: allow

    - name: deny-all-egress
      source:
        labels:
          tier: api
      destination:
        cidrs:
          - 0.0.0.0/0
      effect: deny
```

## Rate Limiting

Apply rate limits to network connections:

| Parameter | Type | Description |
|-----------|------|-------------|
| `requests_per_second` | integer | Maximum requests per second per source |
| `burst_size` | integer | Maximum burst above the rate limit |
| `window` | duration | Sliding window for rate calculation |
| `action` | string | Action when limit exceeded: `deny`, `throttle`, `log` |

```yaml
rate_limits:
  - name: api-rate-limit
    match:
      destination:
        services: [api-gateway]
    limits:
      requests_per_second: 100
      burst_size: 50
      window: 1m
      action: throttle
```

## Policy Debugging

Test network policy evaluation without enforcing:

```bash
$ bastion policy test \
    --source 10.10.1.50 \
    --destination api-gateway:443 \
    --protocol tcp

Evaluation trace:
  1. default-deny          -> no match (checking rules)
  2. api-access/frontend-to-api -> MATCH
     Source CIDR:  10.10.1.50 in 10.10.1.0/24
     Destination:  api-gateway:443/tcp
     Effect:       allow

Decision: ALLOW
Matched:  api-access/frontend-to-api
Latency:  0.8ms
```
