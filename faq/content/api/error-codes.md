+++
title = "What do the API error codes mean?"
date = "2026-03-06"
tags = ["api", "troubleshooting"]
weight = 5
+++

Common API error codes and their meanings:

- **400 Bad Request** -- The request body is malformed or missing required fields
- **401 Unauthorized** -- The API key is missing, invalid, or expired
- **403 Forbidden** -- The API key does not have permission for this operation
- **404 Not Found** -- The requested resource does not exist
- **409 Conflict** -- The operation conflicts with the current state (e.g., duplicate name)
- **422 Unprocessable Entity** -- Validation failed for one or more fields
- **429 Too Many Requests** -- Rate limit exceeded; check the Retry-After header
- **500 Internal Server Error** -- An unexpected error on our side; contact support if it persists

All error responses include a JSON body with `error` and `message` fields for debugging.
