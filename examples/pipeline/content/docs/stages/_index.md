+++
title = "Pipeline Stages"
weight = 2
sort_by = "weight"
+++

# Pipeline Stages

A pipeline consists of one or more stages that execute sequentially or in parallel. Each stage runs in an isolated container and performs a specific function in the delivery process.

## Stage Flow

<div class="pipeline-diagram">
  <div class="pipeline-stage build">
    <span class="stage-label">Build</span>
    <span class="stage-desc">Compile and package</span>
  </div>
  <span class="pipeline-arrow">--></span>
  <div class="pipeline-stage test">
    <span class="stage-label">Test</span>
    <span class="stage-desc">Validate correctness</span>
  </div>
  <span class="pipeline-arrow">--></span>
  <div class="pipeline-stage deploy">
    <span class="stage-label">Deploy</span>
    <span class="stage-desc">Ship to production</span>
  </div>
</div>

## Stage Lifecycle

Every stage goes through the following lifecycle:

1. **Pull** -- The container image is pulled or loaded from cache
2. **Setup** -- Environment variables and secrets are injected, volumes are mounted
3. **Execute** -- Commands run sequentially inside the container
4. **Artifacts** -- Output files are collected and stored for downstream stages
5. **Cleanup** -- The container is removed and temporary resources are freed

## Stage Configuration

Each stage supports the following common fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | Unique identifier for the stage |
| `image` | string | yes | Docker image to use for execution |
| `commands` | list | yes | Shell commands to run in order |
| `depends_on` | list | no | Stages that must complete before this one starts |
| `when` | object | no | Conditional execution rules |
| `cache` | object | no | Dependency caching configuration |
| `artifacts` | list | no | File paths to preserve for downstream stages |
| `secrets` | list | no | Secret names to inject as environment variables |
| `environment` | string | no | Target environment name |
| `timeout` | string | no | Maximum execution time (e.g., "30m") |
| `retry` | object | no | Retry policy for failed commands |

## Parallel Execution

Stages without dependencies on each other run in parallel by default. Use `depends_on` to define explicit ordering:

```yaml
stages:
  - name: lint
    depends_on: [install]
    commands:
      - npm run lint

  - name: test
    depends_on: [install]
    commands:
      - npm run test

  - name: build
    depends_on: [lint, test]
    commands:
      - npm run build
```

In this example, `lint` and `test` run in parallel after `install` completes. The `build` stage waits for both to finish.
