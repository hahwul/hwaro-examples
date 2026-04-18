+++
title = "REST"
template = "doc"
description = "Representational State Transfer - an architectural style for web services."
tags = ["architecture", "web"]
[extra]
full_name = "Representational State Transfer"
category = "Architecture"
+++

## Definition

REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless, client-server communication using standard HTTP methods.

## Key Principles

- **Stateless** -- Each request contains all information needed to process it
- **Client-Server** -- Separation of concerns between frontend and backend
- **Cacheable** -- Responses must define themselves as cacheable or non-cacheable
- **Uniform Interface** -- Consistent resource identification through URIs
- **Layered System** -- Architecture can include intermediary servers

## HTTP Methods in REST

| Method | Purpose | Idempotent |
|--------|---------|------------|
| GET | Retrieve a resource | Yes |
| POST | Create a new resource | No |
| PUT | Replace a resource entirely | Yes |
| PATCH | Partially update a resource | No |
| DELETE | Remove a resource | Yes |

## Example

```
GET /api/v1/users/42 HTTP/1.1
Host: api.example.com
Accept: application/json
```

## Related Terms

- API Gateway
- HTTP
- CRUD
- Idempotency
