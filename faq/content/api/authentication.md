+++
title = "How does API authentication work?"
date = "2026-03-06"
tags = ["api", "authentication"]
weight = 3
+++

All API requests must include your API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

The API uses HTTPS exclusively. Requests over plain HTTP will be rejected. All responses are in JSON format.

For OAuth-based integrations, we support the Authorization Code flow. See the OAuth section in our API documentation for setup instructions and callback URL configuration.
