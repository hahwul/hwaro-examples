+++
title = "Cluster Status"
weight = 1
description = "Kubernetes cluster health and resource allocation"
tags = ["infrastructure", "kubernetes"]
+++

## Cluster Overview

3-node Kubernetes cluster running on `us-east-1`.

### Node Status

| Node | Role | CPU | Memory | Pods | Status |
|------|------|-----|--------|------|--------|
| node-01 | Control Plane | 34% | 62% | 28/110 | Healthy |
| node-02 | Worker | 71% | 78% | 45/110 | Healthy |
| node-03 | Worker | 58% | 55% | 38/110 | Healthy |

### Resource Utilization Summary

- **Total CPU requested**: 54.3% of cluster capacity
- **Total memory requested**: 65.0% of cluster capacity
- **Total pods running**: 111 / 330 allocatable

### Deployments

| Service | Replicas | Ready | Version |
|---------|----------|-------|---------|
| api-gateway | 3/3 | 3 | v2.4.1 |
| web-frontend | 2/2 | 2 | v3.1.0 |
| worker | 4/4 | 4 | v2.4.1 |
| scheduler | 1/1 | 1 | v2.4.0 |
| cache | 2/2 | 2 | v7.2.4 |
