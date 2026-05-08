+++
title = "Reverse Proxy"
template = "doc"
description = "A server that sits in front of backend services and forwards client requests on their behalf."
tags = ["networking", "infrastructure"]
[extra]
full_name = "Reverse Proxy"
category = "Networking"
+++

## Definition

A reverse proxy is a server that accepts requests from clients and forwards them to one or more backend servers. The client communicates only with the proxy and is unaware of the topology behind it. This pattern centralizes concerns such as TLS termination, authentication, request routing, and observability.

## Common Responsibilities

- TLS termination and certificate management
- Path-based and host-based routing to upstream services
- Request and response header manipulation
- Compression, caching, and content rewriting
- Rate limiting and access control

## Reverse Proxy vs Forward Proxy

A forward proxy acts on behalf of a client and is positioned between the client and the public internet. A reverse proxy acts on behalf of a server and is positioned between the public internet and the backend. The same software product can often play either role depending on configuration.

## Configuration Example

```
server {
    listen 443 ssl;
    server_name api.example.com;

    location /v1/ {
        proxy_pass http://backend-v1;
        proxy_set_header Host $host;
    }

    location /v2/ {
        proxy_pass http://backend-v2;
    }
}
```

## Operational Concerns

Health checking, connection pooling, and graceful upstream replacement are standard requirements. Logs from the proxy form the canonical record of incoming traffic and should be retained for the period required by the operating policy.

## Related Terms

- Load Balancer
- API Gateway
- Edge Proxy
- TLS Termination
