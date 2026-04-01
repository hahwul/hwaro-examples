+++
title = "Welcome"
+++

# Pipeline

A comprehensive CI/CD pipeline framework for automating build, test, and deployment workflows. Pipeline provides declarative YAML-based configuration, parallel execution, and robust failure handling for teams of any size.

## Pipeline Stages

<div class="pipeline-diagram">
  <div class="pipeline-stage build">
    <span class="stage-label">Build</span>
    <span class="stage-desc">Compile, package, containerize</span>
  </div>
  <span class="pipeline-arrow">--></span>
  <div class="pipeline-stage test">
    <span class="stage-label">Test</span>
    <span class="stage-desc">Unit, integration, e2e</span>
  </div>
  <span class="pipeline-arrow">--></span>
  <div class="pipeline-stage deploy">
    <span class="stage-label">Deploy</span>
    <span class="stage-desc">Staging, production, rollback</span>
  </div>
</div>

## Features

- **Declarative Configuration** -- Define your entire pipeline in a single YAML file with clear stage definitions
- **Parallel Execution** -- Run independent jobs concurrently to reduce total pipeline duration
- **Environment Management** -- Manage secrets, variables, and environment-specific settings securely
- **Caching and Artifacts** -- Cache dependencies between runs and pass artifacts between stages
- **Rollback Support** -- Automatic and manual rollback strategies for failed deployments
- **Extensible Plugins** -- Integrate with Docker registries, cloud providers, notification services, and more

## Quick Example

```yaml
pipeline:
  name: web-app
  version: "1.0"

stages:
  - name: build
    image: node:20-alpine
    commands:
      - npm ci
      - npm run build
    artifacts:
      - dist/

  - name: test
    image: node:20-alpine
    commands:
      - npm ci
      - npm run test:ci
    parallel:
      - unit
      - integration

  - name: deploy
    image: alpine/kubectl:latest
    environment: production
    commands:
      - kubectl apply -f k8s/
      - kubectl rollout status deployment/web-app
    when:
      branch: main
```

## Get Started

Explore the sidebar sections to learn about installation, pipeline stages, and configuration options. Start with the [Getting Started]({{ base_url }}/docs/getting-started/) guide.
