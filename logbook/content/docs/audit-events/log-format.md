+++
title = "Log Format"
description = "Audit log JSON format specification"
tags = ["log-format", "json", "schema", "audit-events"]
+++

# Log Format

All Logbook audit events are stored as structured JSON documents. This page describes the canonical log format, field definitions, and validation rules.

## Event Schema

Every audit event contains the following fields:

```json
{
  "id": "evt_2026033015301234abcd",
  "version": "1.0",
  "timestamp": "2026-03-30T15:30:12.456Z",
  "type": "auth.login",
  "severity": "info",
  "actor": {
    "id": "usr_a1b2c3d4",
    "type": "user",
    "name": "jane.smith",
    "ip": "192.168.1.42",
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
  },
  "resource": {
    "type": "application",
    "id": "app_web_portal",
    "name": "Web Portal"
  },
  "outcome": "success",
  "detail": {
    "method": "password",
    "mfa_used": true,
    "session_id": "sess_x9y8z7"
  },
  "context": {
    "tenant_id": "tenant_acme",
    "environment": "production",
    "region": "us-east-1",
    "correlation_id": "req_m4n5o6p7"
  },
  "chain": {
    "sequence": 1048576,
    "previous_hash": "sha256:a1b2c3d4e5f6...",
    "hash": "sha256:f6e5d4c3b2a1..."
  }
}
```

## Field Reference

### Top-Level Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique event identifier, prefixed with `evt_` |
| `version` | string | Yes | Schema version, currently `1.0` |
| `timestamp` | string | Yes | ISO 8601 timestamp in UTC with millisecond precision |
| `type` | string | Yes | Event type from the taxonomy (e.g., `auth.login`) |
| `severity` | string | Yes | Event severity: `info`, `warning`, `critical` |
| `outcome` | string | Yes | Event outcome: `success`, `failure`, `unknown` |

### Actor Object

The actor identifies who or what performed the action.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `actor.id` | string | Yes | Unique actor identifier |
| `actor.type` | string | Yes | Actor type: `user`, `service`, `system`, `api_key` |
| `actor.name` | string | No | Human-readable actor name |
| `actor.ip` | string | No | Source IP address |
| `actor.user_agent` | string | No | Client user agent string |

### Resource Object

The resource identifies what was acted upon.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource.type` | string | Yes | Resource type: `application`, `database`, `file`, `api`, `config` |
| `resource.id` | string | Yes | Unique resource identifier |
| `resource.name` | string | No | Human-readable resource name |

### Detail Object

The detail object contains event-specific metadata. Its structure varies by event type and is not enforced by the core schema.

### Context Object

The context object provides environmental metadata for cross-referencing events.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `context.tenant_id` | string | No | Multi-tenant isolation identifier |
| `context.environment` | string | No | Deployment environment: `production`, `staging`, `development` |
| `context.region` | string | No | Geographic region of the originating service |
| `context.correlation_id` | string | No | Request correlation identifier for tracing |

### Chain Object

The chain object contains cryptographic hash chain data for tamper evidence.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `chain.sequence` | integer | Yes | Monotonically increasing sequence number |
| `chain.previous_hash` | string | Yes | Hash of the previous event in the chain |
| `chain.hash` | string | Yes | Hash of the current event (excluding this field) |

## Validation Rules

Logbook validates every incoming event against these rules before accepting it:

1. All required fields must be present and non-empty
2. The `timestamp` must be a valid ISO 8601 string in UTC
3. The `type` must match a registered event type (built-in or custom)
4. The `severity` must be one of: `info`, `warning`, `critical`
5. The `outcome` must be one of: `success`, `failure`, `unknown`
6. The `actor.type` must be one of: `user`, `service`, `system`, `api_key`
7. The total event payload must not exceed the configured `max_event_size` (default 64 KB)

Events that fail validation are rejected with a `422 Unprocessable Entity` response and a structured error body describing the validation failures.

## SDK Integration

Logbook provides SDKs for common languages that handle serialization, validation, and transport:

```python
# Python SDK example
from logbook import Client, AuditEvent

client = Client(
    endpoint="https://logbook.internal:8443",
    api_key="lbk_live_abc123"
)

event = AuditEvent(
    event_type="data.read",
    actor_id="usr_a1b2c3d4",
    actor_type="user",
    resource_type="database",
    resource_id="db_customers",
    outcome="success",
    detail={"table": "users", "query": "SELECT", "row_count": 150}
)

client.emit(event)
```

```go
// Go SDK example
client := logbook.NewClient(
    logbook.WithEndpoint("https://logbook.internal:8443"),
    logbook.WithAPIKey("lbk_live_abc123"),
)

err := client.Emit(ctx, &logbook.AuditEvent{
    Type:         "auth.login",
    ActorID:      "usr_a1b2c3d4",
    ActorType:    "user",
    ResourceType: "application",
    ResourceID:   "app_web_portal",
    Outcome:      "success",
    Detail: map[string]any{
        "method":     "password",
        "mfa_used":   true,
        "session_id": "sess_x9y8z7",
    },
})
```
