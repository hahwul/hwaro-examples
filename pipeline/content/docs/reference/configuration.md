+++
title = "Configuration"
weight = 1
+++

# Configuration Reference

Pipeline uses a single YAML configuration file (`.pipeline.yml`) at the project root. This page documents every available option.

## Top-Level Fields

```yaml
pipeline:
  name: my-app
  version: "1.0"
  description: "Main application pipeline"
```

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | string | yes | -- | Pipeline identifier, used in logs and UI |
| `version` | string | no | `"1.0"` | Configuration version for compatibility |
| `description` | string | no | -- | Human-readable description |

## Variables

Define variables available to all stages:

```yaml
variables:
  NODE_ENV: production
  REGISTRY: ghcr.io/myorg
  APP_NAME: my-app
```

| Field | Type | Required | Description |
|---|---|---|---|
| `variables` | map | no | Key-value pairs available as environment variables in all stages |

Variables can reference other variables and built-in values:

```yaml
variables:
  IMAGE: $REGISTRY/$APP_NAME:$CI_COMMIT_SHA
```

## Stages

```yaml
stages:
  - name: build
    image: node:20-alpine
    commands:
      - npm ci
      - npm run build
```

### Stage Fields

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | string | yes | -- | Unique stage identifier |
| `image` | string | yes | -- | Docker image for execution |
| `commands` | list | yes | -- | Shell commands to execute in order |
| `depends_on` | list | no | `[]` | Stage names that must complete first |
| `when` | object | no | -- | Conditional execution rules |
| `variables` | map | no | `{}` | Stage-scoped environment variables |
| `secrets` | list | no | `[]` | Secret names to inject |
| `cache` | object | no | -- | Dependency cache configuration |
| `artifacts` | list | no | `[]` | File paths to preserve |
| `services` | list | no | `[]` | Sidecar containers to start |
| `timeout` | string | no | `"60m"` | Maximum stage duration |
| `retry` | object | no | -- | Retry policy on failure |
| `resources` | object | no | -- | CPU and memory limits |
| `environment` | string | no | -- | Target deployment environment |
| `parallel` | int/object | no | -- | Parallel execution configuration |
| `matrix` | object | no | -- | Matrix build configuration |
| `docker` | object | no | -- | Docker image build settings |
| `deploy` | object | no | -- | Deployment strategy settings |
| `reports` | object | no | -- | Test report file paths |
| `coverage` | object | no | -- | Coverage reporting settings |

### Conditional Execution (`when`)

```yaml
when:
  branch: main
  tag: "v*"
  manual: true
  variable:
    name: DEPLOY_ENV
    value: production
  schedule: "0 2 * * *"
  changes:
    - src/**
    - package.json
```

| Field | Type | Description |
|---|---|---|
| `branch` | string | Branch name or glob pattern |
| `tag` | string | Tag name or glob pattern |
| `manual` | bool | Require manual approval |
| `variable` | object | Match against a variable value |
| `schedule` | string | Cron expression for scheduled runs |
| `changes` | list | Run only when specified paths have changes |

### Cache Configuration

```yaml
cache:
  key: deps-{{ checksum "package-lock.json" }}
  paths:
    - node_modules/
  policy: pull-push
  ttl: 7d
```

| Field | Type | Default | Description |
|---|---|---|---|
| `key` | string | -- | Cache key with optional template expressions |
| `paths` | list | -- | Directories or files to cache |
| `policy` | string | `"pull-push"` | `pull`, `push`, or `pull-push` |
| `ttl` | string | `"7d"` | Time to live for cache entries |

### Service Configuration

```yaml
services:
  - name: postgres
    image: postgres:16-alpine
    env:
      POSTGRES_DB: testdb
      POSTGRES_USER: test
      POSTGRES_PASSWORD: test
    ports:
      - 5432:5432
    health_check:
      command: pg_isready -U test
      interval: 5s
      timeout: 3s
      retries: 10
```

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | Service hostname (used for networking) |
| `image` | string | yes | Docker image |
| `env` | map | no | Environment variables |
| `ports` | list | no | Port mappings |
| `health_check` | object | no | Readiness check before stage starts |

### Resource Limits

```yaml
resources:
  memory: 2048m
  cpu: 2
  disk: 10g
```

| Field | Type | Default | Description |
|---|---|---|---|
| `memory` | string | `"512m"` | Memory limit |
| `cpu` | int | `1` | CPU core count |
| `disk` | string | `"5g"` | Disk space limit |

### Retry Configuration

```yaml
retry:
  max_attempts: 3
  delay: 10s
  backoff: exponential
  on:
    - exit_code: 1
    - exit_code: 137
```

| Field | Type | Default | Description |
|---|---|---|---|
| `max_attempts` | int | `1` | Maximum number of attempts |
| `delay` | string | `"0s"` | Delay between retries |
| `backoff` | string | `"linear"` | `linear` or `exponential` |
| `on` | list | -- | Conditions that trigger a retry |

## Environments

```yaml
environments:
  staging:
    url: https://staging.example.com
    variables:
      API_URL: https://api-staging.example.com

  production:
    url: https://example.com
    approvers:
      - team-leads
    required_approvals: 2
    variables:
      API_URL: https://api.example.com
```

| Field | Type | Description |
|---|---|---|
| `url` | string | Environment URL for display purposes |
| `variables` | map | Environment-specific variables |
| `approvers` | list | Groups or users who can approve deployments |
| `required_approvals` | int | Number of approvals required |
| `deploy_window` | object | Allowed deployment time window |
| `freeze_periods` | list | Date ranges where deployments are blocked |

## Notifications

```yaml
notifications:
  - type: slack
    channel: "#deployments"
    events: [success, failure]
    webhook_url: $SLACK_WEBHOOK

  - type: email
    recipients:
      - team@example.com
    events: [failure]
```

| Field | Type | Description |
|---|---|---|
| `type` | string | Notification channel: `slack`, `email`, `webhook` |
| `events` | list | Trigger events: `success`, `failure`, `start`, `manual` |

## Full Example

```yaml
pipeline:
  name: web-platform
  version: "1.0"

variables:
  REGISTRY: ghcr.io/myorg
  APP_NAME: web-platform

stages:
  - name: install
    image: node:20-alpine
    cache:
      key: deps-{{ checksum "package-lock.json" }}
      paths:
        - node_modules/
    commands:
      - npm ci --prefer-offline

  - name: lint
    image: node:20-alpine
    depends_on: [install]
    commands:
      - npm run lint
      - npm run typecheck

  - name: test
    image: node:20-alpine
    depends_on: [install]
    parallel: 4
    services:
      - name: postgres
        image: postgres:16-alpine
        env:
          POSTGRES_DB: test
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
    commands:
      - npm run test -- --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL --coverage
    coverage:
      format: lcov
      file: coverage/lcov.info
      thresholds:
        lines: 80

  - name: build
    image: node:20-alpine
    depends_on: [lint, test]
    commands:
      - npm run build
    artifacts:
      - dist/

  - name: build-image
    image: docker:24-dind
    depends_on: [build]
    docker:
      dockerfile: Dockerfile
      tags:
        - $REGISTRY/$APP_NAME:$CI_COMMIT_SHA
        - $REGISTRY/$APP_NAME:latest
      push: true

  - name: deploy-staging
    image: alpine/kubectl:latest
    depends_on: [build-image]
    environment: staging
    commands:
      - kubectl set image deployment/app app=$REGISTRY/$APP_NAME:$CI_COMMIT_SHA -n staging
      - kubectl rollout status deployment/app -n staging --timeout=300s
    when:
      branch: develop

  - name: deploy-production
    image: alpine/kubectl:latest
    depends_on: [build-image]
    environment: production
    deploy:
      strategy: canary
      steps:
        - weight: 10
          pause: 5m
        - weight: 50
          pause: 10m
        - weight: 100
      rollback:
        enabled: true
        on_failure: true
    when:
      branch: main
      manual: true

notifications:
  - type: slack
    channel: "#releases"
    events: [success, failure]
    webhook_url: $SLACK_WEBHOOK
```
