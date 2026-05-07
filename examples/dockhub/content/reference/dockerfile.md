+++
title = "Dockerfile Reference"
weight = 3
template = "doc"
description = "Instructions and patterns for writing Dockerfiles."
tags = ["dockerfile", "reference"]
[extra]
category = "Reference"
+++

## Instructions

A Dockerfile is processed top to bottom. Each instruction creates a new image layer that is cached and reused on subsequent builds when its inputs are unchanged.

| Instruction | Purpose |
|-------------|---------|
| `FROM` | Set the base image for the build |
| `WORKDIR` | Set the working directory for following instructions |
| `COPY` | Copy files from the build context into the image |
| `RUN` | Execute a command at build time |
| `ENV` | Set an environment variable for the build and runtime |
| `EXPOSE` | Declare a port the container listens on |
| `CMD` | Default command executed when the container starts |
| `ENTRYPOINT` | Fixed entrypoint that receives `CMD` as arguments |

## Build Context

The build context is the directory passed to `docker build`. Files outside this directory cannot be referenced by `COPY` or `ADD`. Use a `.dockerignore` file to exclude paths that should not be sent to the daemon.

```
node_modules
.git
*.log
.env
```

## Multi-Stage Builds

Multi-stage builds keep build-time dependencies out of the final image. Each `FROM` starts a new stage. Copy artifacts from earlier stages by name.

```dockerfile
FROM golang:1.22-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /out/app ./cmd/app

FROM alpine:3.20
COPY --from=build /out/app /usr/local/bin/app
ENTRYPOINT ["/usr/local/bin/app"]
```

## Layer Caching

Order instructions from least to most frequently changed. Dependency installation should run before application source is copied so source edits do not invalidate the dependency layer.

```dockerfile
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .
```

## Build Arguments

`ARG` declares variables that can be set at build time without changing the file.

```dockerfile
ARG VERSION=dev
ENV APP_VERSION=$VERSION
```

```bash
docker build --build-arg VERSION=1.4.2 -t myapp:1.4.2 .
```

## Health Checks

`HEALTHCHECK` runs a command inside the container to report status to the orchestrator.

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1
```

For commands accepted by the runtime, see the [CLI Reference](../cli/).
