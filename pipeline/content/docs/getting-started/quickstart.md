+++
title = "Quick Start"
weight = 2
+++

# Quick Start

This guide walks you through creating and running your first pipeline in under five minutes.

## Step 1: Initialize a Project

Navigate to your project directory and initialize Pipeline:

```bash
cd my-project
pipeline init
```

This creates a `.pipeline.yml` file in your project root with a minimal configuration:

```yaml
pipeline:
  name: my-project
  version: "1.0"

stages:
  - name: build
    image: alpine:latest
    commands:
      - echo "Building project..."

  - name: test
    image: alpine:latest
    commands:
      - echo "Running tests..."

  - name: deploy
    image: alpine:latest
    commands:
      - echo "Deploying..."
    when:
      branch: main
```

## Step 2: Customize the Configuration

Replace the placeholder commands with your actual build, test, and deploy steps. Here is a realistic example for a Node.js application:

```yaml
pipeline:
  name: my-node-app
  version: "1.0"

variables:
  NODE_ENV: production
  REGISTRY: ghcr.io/myorg

stages:
  - name: install
    image: node:20-alpine
    commands:
      - npm ci --prefer-offline
    cache:
      key: node-modules-{{ checksum "package-lock.json" }}
      paths:
        - node_modules/

  - name: lint
    image: node:20-alpine
    depends_on: [install]
    commands:
      - npm run lint

  - name: test
    image: node:20-alpine
    depends_on: [install]
    commands:
      - npm run test -- --coverage
    artifacts:
      - coverage/

  - name: build
    image: node:20-alpine
    depends_on: [lint, test]
    commands:
      - npm run build
    artifacts:
      - dist/

  - name: deploy
    image: alpine/kubectl:latest
    depends_on: [build]
    environment: production
    secrets:
      - KUBE_TOKEN
      - KUBE_SERVER
    commands:
      - kubectl set image deployment/app app=$REGISTRY/app:$CI_COMMIT_SHA
      - kubectl rollout status deployment/app --timeout=300s
    when:
      branch: main
```

## Step 3: Run the Pipeline

Execute the pipeline locally:

```bash
pipeline run
```

You will see output similar to:

```
[pipeline] Starting pipeline "my-node-app" v1.0
[install]  Pulling image node:20-alpine...
[install]  Running: npm ci --prefer-offline
[install]  added 847 packages in 12.4s
[install]  Stage completed (14.2s)
[lint]     Running: npm run lint
[test]     Running: npm run test -- --coverage
[lint]     Stage completed (3.1s)
[test]     Tests: 142 passed, 0 failed
[test]     Coverage: 87.3% statements
[test]     Stage completed (8.7s)
[build]    Running: npm run build
[build]    Stage completed (6.3s)
[deploy]   Skipped (branch condition not met)
[pipeline] Pipeline completed successfully (32.3s)
```

## Step 4: Run a Specific Stage

To run only a single stage and its dependencies:

```bash
pipeline run --stage test
```

This will execute `install` (dependency) and then `test`, skipping unrelated stages.

## Step 5: Validate Configuration

Check your configuration file for errors without running anything:

```bash
pipeline validate
```

```
.pipeline.yml: valid (5 stages, 0 errors, 0 warnings)
```

## Next Steps

- Learn about each stage in detail: [Pipeline Stages]({{ base_url }}/docs/stages/)
- Explore all configuration options: [Configuration Reference]({{ base_url }}/docs/reference/configuration/)
- Set up environment variables and secrets: [Environment Variables]({{ base_url }}/docs/reference/environment-variables/)
