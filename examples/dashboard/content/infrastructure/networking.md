+++
title = "Networking"
weight = 3
description = "Edge load balancers, DNS, and inter-service traffic policies"
tags = ["infrastructure", "network"]
+++

## Networking Layer

Public traffic terminates at a regional Layer 7 load balancer in `us-east-1`, fronted by an anycast DNS pool with three NS records. Internal east-west traffic uses a service mesh with mTLS enforced at every hop.

### Load Balancer Pools

| Pool | Listener | Backends | Health | Connections |
|------|----------|----------|--------|-------------|
| edge-public | 443/TCP | 6 | 6/6 | 2,840 active |
| api-internal | 8443/TCP | 4 | 4/4 | 1,210 active |
| admin-private | 9443/TCP | 2 | 2/2 | 18 active |

### DNS Records

Authoritative records are managed through Terraform. TTL is set to 60 seconds for service hostnames and 3600 seconds for static records.

- `api.example.com` -> edge-public load balancer
- `cdn.example.com` -> CloudFront distribution E2N4K9
- `status.example.com` -> static origin in `us-west-2`

### Service Mesh Policy

The mesh enforces three classes of authorization. All cross-namespace traffic must declare an explicit allow rule; default deny is applied at admission.

- **public-ingress**: only the edge gateway may originate
- **internal-rpc**: signed JWT required, audience scoped to caller
- **data-plane**: peer identity must be on the database access list

### Egress

Outbound traffic to third-party APIs routes through a NAT gateway with a stable public IP address. Allowlisted destinations include the payment processor, the email provider, and the object storage endpoints.
