+++
title = "US East"
description = "Primary production region with three availability zones"
weight = 1
tags = ["region", "aws", "production"]

[extra]
status = "healthy"
region = "us-east-1"
provider = "AWS"
+++

## Region Overview

US East is the primary production region hosting core platform services. It operates across three availability zones with full redundancy.

## Availability Zones

| Zone | CIDR Block | Instances | Role |
|------|-----------|-----------|------|
| us-east-1a | 10.0.0.0/18 | 156 | Primary |
| us-east-1b | 10.0.64.0/18 | 142 | Secondary |
| us-east-1c | 10.0.128.0/18 | 98 | Disaster Recovery |

## Network Topology

### VPC Configuration

```
VPC: 10.0.0.0/16
├── Public Subnets (10.0.0.0/20 per AZ)
│   ├── Load Balancers
│   ├── NAT Gateways
│   └── Bastion Hosts
├── Private Subnets (10.0.16.0/20 per AZ)
│   ├── Application Servers
│   └── Worker Nodes
└── Data Subnets (10.0.32.0/20 per AZ)
    ├── RDS Instances
    ├── ElastiCache Clusters
    └── OpenSearch Domains
```

### Cross-Region Connectivity

| Destination | Type | Bandwidth | Latency |
|------------|------|-----------|---------|
| EU West | VPC Peering | 10 Gbps | 78ms |
| AP Southeast | Transit Gateway | 5 Gbps | 195ms |
| US West (DR) | VPC Peering | 10 Gbps | 62ms |

## Deployed Services

| Service | Instances | CPU | Memory | Health |
|---------|-----------|-----|--------|--------|
| api-gateway | 6 | 4 vCPU | 16 GB | Healthy |
| auth-service | 4 | 2 vCPU | 8 GB | Healthy |
| user-service | 4 | 2 vCPU | 8 GB | Healthy |
| order-service | 6 | 4 vCPU | 16 GB | Healthy |
| notification-service | 3 | 2 vCPU | 4 GB | Healthy |
| search-service | 3 | 8 vCPU | 32 GB | Healthy |

## Capacity

| Resource | Allocated | Used | Available |
|----------|-----------|------|-----------|
| vCPUs | 512 | 348 | 164 |
| Memory | 2048 GB | 1420 GB | 628 GB |
| Storage (EBS) | 50 TB | 32 TB | 18 TB |
| Elastic IPs | 20 | 14 | 6 |
