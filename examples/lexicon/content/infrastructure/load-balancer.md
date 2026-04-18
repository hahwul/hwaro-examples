+++
title = "Load Balancer"
template = "doc"
description = "A device or service that distributes incoming traffic across multiple servers."
tags = ["networking", "scalability"]
[extra]
full_name = "Load Balancer"
category = "Networking"
+++

## Definition

A load balancer distributes incoming network traffic across multiple servers to ensure no single server bears too much demand. It improves application availability, reliability, and performance.

## Types

### Layer 4 (Transport)

Operates at the TCP/UDP level. Routes traffic based on IP address and port number. Fast but lacks application-level awareness.

### Layer 7 (Application)

Operates at the HTTP level. Can make routing decisions based on URL path, headers, cookies, or request content. More flexible but slightly higher latency.

## Common Algorithms

| Algorithm | Description |
|-----------|-------------|
| Round Robin | Distributes requests sequentially across servers |
| Least Connections | Sends traffic to the server with fewest active connections |
| IP Hash | Routes based on client IP for session persistence |
| Weighted Round Robin | Assigns more traffic to servers with higher capacity |

## Health Checks

Load balancers periodically check server health:

```
GET /health HTTP/1.1
Host: backend-server-01
```

Unhealthy servers are removed from the pool automatically.

## Related Terms

- Reverse Proxy
- Auto Scaling
- Health Check
- DNS Round Robin
