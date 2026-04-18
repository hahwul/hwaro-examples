+++
title = "EU West"
description = "European production region for GDPR-compliant workloads"
weight = 2
tags = ["region", "aws", "production"]

[extra]
status = "healthy"
region = "eu-west-1"
provider = "AWS"
+++

## Region Overview

EU West serves European customers and hosts all GDPR-regulated data processing. Three availability zones provide high availability with data residency compliance.

## Availability Zones

| Zone | CIDR Block | Instances | Role |
|------|-----------|-----------|------|
| eu-west-1a | 10.1.0.0/18 | 112 | Primary |
| eu-west-1b | 10.1.64.0/18 | 98 | Secondary |
| eu-west-1c | 10.1.128.0/18 | 64 | Standby |

## Compliance

| Requirement | Implementation |
|-------------|---------------|
| GDPR Data Residency | All PII stored in eu-west-1 only |
| Encryption at Rest | AES-256 via AWS KMS (eu-west key) |
| Encryption in Transit | TLS 1.3 enforced |
| Audit Logging | CloudTrail with 90-day retention |
| Access Control | IAM with MFA required |

## Deployed Services

| Service | Instances | CPU | Memory | Health |
|---------|-----------|-----|--------|--------|
| api-gateway | 4 | 4 vCPU | 16 GB | Healthy |
| auth-service | 3 | 2 vCPU | 8 GB | Healthy |
| user-service | 3 | 2 vCPU | 8 GB | Healthy |
| gdpr-service | 2 | 2 vCPU | 4 GB | Healthy |
| data-pipeline | 4 | 8 vCPU | 32 GB | Healthy |

## Network Topology

### Peering Connections

| Destination | Type | Bandwidth | Purpose |
|------------|------|-----------|---------|
| US East | VPC Peering | 10 Gbps | API sync, non-PII data |
| EU Central (DR) | Transit Gateway | 5 Gbps | Disaster recovery |
