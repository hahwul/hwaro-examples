+++
title = "API Surface"
description = "The HTTP and gRPC interfaces, request shapes, and authentication."
date = "2026-02-04"
weight = 2
tags = ["api", "reference"]
+++

## Endpoints, in brief

The node exposes two parallel interfaces. They are functionally equivalent;
the choice is operational.

| Surface | Address               | Use for                                |
|---------|-----------------------|----------------------------------------|
| HTTP    | `:8400/v1/*`          | Browsers, scripts, debugging.          |
| gRPC    | `:8401/prism.v1.*`    | Service-to-service, high throughput.   |

## Authentication

All requests carry a bearer token issued by `prism auth`. Tokens are scoped:
read tokens cannot mutate state, write tokens cannot enrol new peers, and
operator tokens can do anything but cannot be issued by another operator.

```http
GET /v1/keys HTTP/1.1
Host: node-01.prism.local:8400
Authorization: Bearer ps_rw_aF8j2c...
```

## A worked example

```bash
TOKEN=$(prism auth mint --scope write)

curl -sSf -H "Authorization: Bearer $TOKEN" \
  -X PUT "http://localhost:8400/v1/keys/example" \
  -d '{"value":"hello","ttl_seconds":3600}'

curl -sSf -H "Authorization: Bearer $TOKEN" \
  "http://localhost:8400/v1/keys/example"
# => {"value":"hello","expires_at":"2026-02-04T13:00:00Z"}
```

The `TTL` is advisory at the protocol layer; expired keys are reaped during
the next compaction cycle, not at the instant of expiry.
