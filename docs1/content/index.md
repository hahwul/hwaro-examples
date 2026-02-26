+++
title = "Pulse API Documentation"
description = "Build powerful integrations with the Pulse project management platform"
+++

<div class="max-w-4xl mx-auto py-10">

# Pulse API

Welcome to the Pulse API documentation. Pulse is a project management platform for modern teams, and our API lets you build powerful integrations and automations.

## Quick Start

### 1. Get your API key

Sign in to your Pulse dashboard and navigate to **Settings > API Keys** to generate a new key.

### 2. Make your first request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.pulse.dev/v1/users/me
```

### 3. Explore the API

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
  <a href="/guides/" class="doc-card">
    <h3>Guides</h3>
    <p>Learn authentication, rate limiting, and error handling</p>
  </a>
  <a href="/reference/" class="doc-card">
    <h3>API Reference</h3>
    <p>Explore all endpoints with request and response examples</p>
  </a>
</div>

## Base URL

All API requests should be made to:

```
https://api.pulse.dev/v1
```

## Authentication

Include your API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

## Response Format

All responses are returned as JSON with consistent structure:

```json
{
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2026-01-15T10:30:00Z"
  }
}
```

</div>
