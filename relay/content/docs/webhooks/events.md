+++
title = "Events"
description = "Event types and categories in Relay"
tags = ["events", "webhooks"]
+++

# Events

Events are the fundamental unit of communication in Relay. Each event represents a discrete occurrence in your system that triggers webhook deliveries to registered endpoints.

## Event Structure

Every event follows a consistent structure:

```json
{
  "id": "evt_01H8MZXK9P4B7GQWRT5N6VJ3",
  "type": "repository.push",
  "source": "api.example.com",
  "timestamp": "2025-03-15T10:30:00Z",
  "data": {
    "repository": "acme/web-app",
    "branch": "main",
    "commits": 3,
    "author": "jdoe"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique event identifier (prefixed with `evt_`) |
| `type` | string | Event type in `resource.action` format |
| `source` | string | Origin system that generated the event |
| `timestamp` | string | ISO 8601 timestamp of when the event occurred |
| `data` | object | Event-specific payload data |

## Event Categories

Events are organized into categories based on the resource they relate to:

### Repository Events

| Event Type | Trigger |
|------------|---------|
| `repository.push` | Code pushed to a branch |
| `repository.created` | New repository created |
| `repository.deleted` | Repository removed |
| `repository.archived` | Repository archived |

### Issue Events

| Event Type | Trigger |
|------------|---------|
| `issue.created` | New issue opened |
| `issue.updated` | Issue fields modified |
| `issue.closed` | Issue closed |
| `issue.reopened` | Closed issue reopened |
| `issue.assigned` | Issue assigned to a user |

### Deployment Events

| Event Type | Trigger |
|------------|---------|
| `deployment.started` | Deployment process initiated |
| `deployment.completed` | Deployment finished successfully |
| `deployment.failed` | Deployment encountered an error |
| `deployment.rolled_back` | Deployment reverted to previous version |

### Alert Events

| Event Type | Trigger |
|------------|---------|
| `alert.fired` | Monitoring alert triggered |
| `alert.resolved` | Alert condition cleared |
| `alert.acknowledged` | Alert acknowledged by operator |

### User Events

| Event Type | Trigger |
|------------|---------|
| `user.signup` | New user registration |
| `user.login` | User authenticated |
| `user.deactivated` | User account deactivated |

## Creating Events

Send events to Relay using the REST API:

```bash
curl -X POST http://localhost:8080/api/v1/events \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "type": "deployment.completed",
    "source": "ci.example.com",
    "data": {
      "environment": "production",
      "service": "api-gateway",
      "version": "2.1.0",
      "duration_seconds": 142,
      "status": "success"
    }
  }'
```

Response:

```json
{
  "id": "evt_01H8N2KR7W3FXQM6YP9B4TJH",
  "type": "deployment.completed",
  "source": "ci.example.com",
  "timestamp": "2025-03-15T10:45:00Z",
  "deliveries": 3,
  "status": "dispatched"
}
```

## Event Filtering

Register endpoints to receive specific event types using filter expressions:

```json
{
  "url": "https://hooks.example.com/deployments",
  "events": ["deployment.completed", "deployment.failed"],
  "filter": "data.environment == 'production'"
}
```

Filters support basic comparison operators (`==`, `!=`, `>`, `<`) and logical operators (`&&`, `||`). Nested fields are accessed with dot notation.
