+++
title = "Build Stage"
weight = 1
+++

# Build Stage

The build stage compiles source code, packages artifacts, and optionally builds container images. It is typically the first stage in a pipeline after dependency installation.

## Basic Configuration

```yaml
stages:
  - name: build
    image: node:20-alpine
    commands:
      - npm ci
      - npm run build
    artifacts:
      - dist/
      - package.json
```

## Dockerfile Builds

Pipeline can build Docker images as part of the build stage. Use the `docker` directive to specify build parameters:

```yaml
stages:
  - name: build-image
    image: docker:24-dind
    docker:
      dockerfile: Dockerfile
      context: .
      tags:
        - ghcr.io/myorg/myapp:$CI_COMMIT_SHA
        - ghcr.io/myorg/myapp:latest
      build_args:
        NODE_ENV: production
        VERSION: $CI_COMMIT_SHA
      push: true
```

### Multi-stage Dockerfile Example

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Build Arguments

Pass build-time arguments to Docker or to your build commands:

```yaml
stages:
  - name: build
    image: golang:1.22-alpine
    variables:
      CGO_ENABLED: "0"
      GOOS: linux
      GOARCH: amd64
    commands:
      - go build -ldflags "-s -w -X main.version=$CI_COMMIT_SHA" -o app ./cmd/server
    artifacts:
      - app
```

## Caching Strategies

Caching reduces build times by preserving dependencies between pipeline runs.

### Dependency Cache

```yaml
stages:
  - name: build
    image: node:20-alpine
    cache:
      key: deps-{{ checksum "package-lock.json" }}
      paths:
        - node_modules/
    commands:
      - npm ci --prefer-offline
      - npm run build
```

### Layer Cache for Docker Builds

```yaml
stages:
  - name: build-image
    image: docker:24-dind
    docker:
      dockerfile: Dockerfile
      cache_from:
        - ghcr.io/myorg/myapp:cache
      cache_to:
        type: registry
        ref: ghcr.io/myorg/myapp:cache
```

### Cache Key Templates

| Template | Description |
|---|---|
| `{{ checksum "file" }}` | SHA-256 hash of the specified file |
| `{{ branch }}` | Current Git branch name |
| `{{ arch }}` | CPU architecture (amd64, arm64) |
| `{{ os }}` | Operating system (linux, darwin) |

## Matrix Builds

Build for multiple platforms or configurations simultaneously:

```yaml
stages:
  - name: build
    image: golang:1.22-alpine
    matrix:
      GOOS: [linux, darwin, windows]
      GOARCH: [amd64, arm64]
    exclude:
      - GOOS: windows
        GOARCH: arm64
    commands:
      - go build -o app-$GOOS-$GOARCH ./cmd/server
    artifacts:
      - app-*
```

## Troubleshooting

### Build fails with "out of memory"

Increase the memory limit for the stage container:

```yaml
stages:
  - name: build
    image: node:20-alpine
    resources:
      memory: 4096m
      cpu: 2
    commands:
      - npm run build
```

### Docker build context is too large

Add a `.dockerignore` file to exclude unnecessary files:

```
node_modules
.git
*.md
.pipeline.yml
coverage
```

### Cache is not being restored

Verify the cache key matches between runs. Use `pipeline cache list` to inspect available cache entries:

```bash
pipeline cache list --stage build
```
