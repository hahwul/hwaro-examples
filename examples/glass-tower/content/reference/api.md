+++
title = "API Reference"
+++

Reference for the Glass Tower API endpoints and integration patterns.

## Overview

The Glass Tower API allows you to programmatically access your content and metadata. It is built around standard REST principles and returns JSON responses. The endpoints are designed to be fast, reliable, and easy to use.

## Authentication

All API requests require an API key to be passed in the `Authorization` header.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.example.com/v1/content
```

## Endpoints

### Get Content

Retrieve a list of content items from your Glass Tower project.

```http
GET /v1/content
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | integer | Number of items to return (default: 10, max: 100) |
| `offset` | integer | Number of items to skip |
| `type` | string | Filter by content type (e.g., "article", "page") |

**Response:**

```json
{
  "data": [
    {
      "id": "123",
      "title": "Getting Started",
      "slug": "getting-started",
      "type": "article",
      "created_at": "2025-02-15T10:00:00Z"
    }
  ],
  "meta": {
    "total": 42,
    "limit": 10,
    "offset": 0
  }
}
```

### Get Single Content Item

Retrieve detailed information about a specific content item.

```http
GET /v1/content/:id
```

## Error Handling

When an error occurs, the API returns standard HTTP status codes along with a JSON response containing an error message.

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key provided"
  }
}
```
