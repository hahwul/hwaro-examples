+++
title = "About"
+++

# About Pipeline

Pipeline is a CI/CD framework designed for teams that value clarity, reliability, and speed in their software delivery process.

## Design Principles

- **Convention over configuration** -- Sensible defaults reduce boilerplate while remaining fully customizable
- **Fail fast, recover faster** -- Immediate feedback on failures with built-in rollback mechanisms
- **Security first** -- Secrets are never logged, environment variables are scoped, and all communication is encrypted
- **Reproducibility** -- Every build runs in an isolated container with pinned dependencies

## Architecture

Pipeline operates as a stateless orchestrator. It reads your YAML configuration, resolves the dependency graph between stages, and executes each stage in an isolated container. Artifacts are passed between stages through a shared volume or object storage backend.

The execution engine supports both sequential and parallel stage execution. When stages have no dependencies on each other, they run concurrently. When a stage depends on artifacts from a previous stage, Pipeline ensures proper ordering.

## Technology

Pipeline is built with a focus on minimal resource consumption and maximum throughput. The core scheduler is written in Go, with container orchestration handled through the standard Docker and Kubernetes APIs.

## Credits

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast and flexible static site generator.
