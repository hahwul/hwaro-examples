+++
title = "03.02 — HTTP API"
description = "Endpoints exposed by the control plane gateway."
weight = 2

[extra]
section_label = "03 · Reference"
section_number = "03.02"
+++

The control plane exposes a JSON HTTP gateway alongside the native gRPC API.
The gateway is a thin translation layer; every endpoint maps to a single RPC.
All endpoints accept a bearer token in the `Authorization` header.

## Endpoints

| Method | Path                          | Description                                       |
|--------|-------------------------------|---------------------------------------------------|
| GET    | `/v1/health`                  | Liveness probe. Always 200 if the process is up.  |
| GET    | `/v1/ready`                   | Readiness probe. 200 once Raft is in sync.        |
| GET    | `/v1/nodes`                   | List all registered nodes.                        |
| GET    | `/v1/nodes/{id}`              | Get a single node by ID.                          |
| DELETE | `/v1/nodes/{id}`              | Fence and remove a node.                          |
| GET    | `/v1/tasks`                   | List tasks. Supports `?state=` filter.            |
| POST   | `/v1/tasks`                   | Submit a task. Returns the task ID.               |
| GET    | `/v1/tasks/{id}`              | Get task status and metadata.                     |
| DELETE | `/v1/tasks/{id}`              | Cancel a task. Idempotent.                        |
| GET    | `/v1/events`                  | Stream the event log as newline-delimited JSON.   |
| GET    | `/v1/metrics`                 | Prometheus exposition format.                     |

## Example request

Submit a task that runs a single container image with a one-hour deadline:

```json
{
  "name": "build-2026-05-17",
  "image": "registry.internal/builder:v3",
  "command": ["./build.sh", "--release"],
  "resources": {
    "cpu": 8,
    "memory_gb": 16,
    "gpu": 0
  },
  "deadline": "1h",
  "priority": 100
}
```

The response includes the task ID and the placement decision, if one was made
synchronously:

```json
{
  "id": "tsk_01jc8w7nvz",
  "state": "scheduled",
  "node": "a02",
  "scheduled_at": "2026-05-17T09:14:22Z"
}
```
