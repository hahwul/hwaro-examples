+++
title = "Configuration"
description = "Configure your Dynamo project and functions"
tags = ["configuration", "dynamo"]
+++

# Configuration

Dynamo uses YAML configuration files at two levels: project-wide settings in `dynamo.yaml` and per-function settings in each function's `config.yaml`.

## Project Configuration

The root `dynamo.yaml` file defines global settings that apply to all functions in the project:

```yaml
project:
  name: my-project
  region: us-east-1
  account: "123456789012"

defaults:
  runtime: nodejs20
  memory: 256
  timeout: 30
  log_level: info

environment:
  global:
    APP_ENV: production
    LOG_FORMAT: json

networking:
  vpc:
    enabled: false
  egress:
    allow_all: true

deploy:
  strategy: canary
  canary_percentage: 10
  canary_duration: 300
```

## Project Configuration Reference

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `project.name` | string | required | Unique project identifier |
| `project.region` | string | `us-east-1` | Deployment region |
| `defaults.runtime` | string | `nodejs20` | Default runtime for new functions |
| `defaults.memory` | integer | `256` | Default memory allocation in MB |
| `defaults.timeout` | integer | `30` | Default execution timeout in seconds |
| `defaults.log_level` | string | `info` | Log verbosity: debug, info, warn, error |
| `deploy.strategy` | string | `rolling` | Deployment strategy: rolling, canary, blue-green |

## Function Configuration

Each function has its own `config.yaml` inside its directory:

```yaml
function:
  name: process-order
  runtime: python311
  handler: handler.main
  memory: 512
  timeout: 60

trigger:
  type: queue
  source: orders-queue
  batch_size: 10
  batch_window: 5

environment:
  DB_HOST: db.internal.example.com
  DB_NAME: orders

permissions:
  - resource: "storage:order-attachments/*"
    actions: ["read", "write"]
  - resource: "queue:notifications"
    actions: ["publish"]

layers:
  - shared-utils:v3
  - db-drivers:v1
```

## Function Configuration Reference

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `function.name` | string | directory name | Function identifier |
| `function.runtime` | string | project default | Runtime identifier |
| `function.handler` | string | `handler.main` | Entry point in format `file.function` |
| `function.memory` | integer | project default | Memory allocation in MB (128-3072) |
| `function.timeout` | integer | project default | Max execution time in seconds (1-900) |
| `trigger.type` | string | required | Trigger type: http, queue, timer, storage, stream |
| `trigger.source` | string | varies | Event source identifier |
| `layers` | list | `[]` | Shared dependency layers to attach |

## Environment Variables

Environment variables are resolved in the following order of precedence:

1. Function-level `environment` block (highest priority)
2. Project-level `environment.global` block
3. Runtime-injected variables (e.g., `DYNAMO_FUNCTION_NAME`, `DYNAMO_REGION`)

List all effective environment variables for a function:

```bash
dynamo config env process-order
```

## Validate Configuration

Check configuration files for errors before deploying:

```bash
dynamo config validate
```

```
Validating dynamo.yaml ... OK
Validating functions/process-order/config.yaml ... OK
Validating functions/send-email/config.yaml ... OK

3 configurations validated, 0 errors
```

> Configuration changes do not take effect until the next deployment. Use `dynamo deploy` to apply changes to the remote environment.
