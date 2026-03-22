+++
title = "What are the API rate limits?"
date = "2026-03-06"
tags = ["api"]
weight = 2
+++

Rate limits depend on your plan:

- **Pro:** 1,000 requests per minute
- **Enterprise:** 5,000 requests per minute

When you exceed the limit, the API returns a `429 Too Many Requests` response with a `Retry-After` header indicating how many seconds to wait.

Best practices for staying within limits:

- Cache responses when possible
- Use batch endpoints for bulk operations
- Implement exponential backoff for retries
