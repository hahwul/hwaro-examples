+++
title = "CLI Reference"
weight = 2
template = "doc"
description = "DockHub CLI command reference."
tags = ["cli", "commands"]
[extra]
category = "Reference"
+++

## Global Flags

| Flag | Description |
|------|-------------|
| `--config <path>` | Path to config file |
| `--env <name>` | Target environment (dev, staging, prod) |
| `--verbose` | Enable verbose output |
| `--json` | Output in JSON format |
| `--no-color` | Disable colored output |

## Commands

### dockhub init

Initialize a new DockHub project.

```bash
dockhub init [project-name] [--template <name>]
```

Templates: `node`, `python`, `go`, `rust`, `static`.

### dockhub build

Build container images defined in the project.

```bash
dockhub build [--tag <tag>] [--platform <platform>] [--push]
```

```bash
# Build for multiple platforms
dockhub build --platform linux/amd64,linux/arm64 --push
```

### dockhub deploy

Deploy containers to the target environment.

```bash
dockhub deploy --env production [--dry-run] [--rollback]
```

```bash
# Preview what will change
dockhub deploy --env production --dry-run

# Rollback to previous version
dockhub deploy --env production --rollback
```

### dockhub status

Check deployment status and health.

```bash
dockhub status [--env <name>] [--watch]
```

```
Service     Status    Replicas  CPU    Memory
web         Running   3/3       12%    256MB
db          Running   1/1       5%     128MB
redis       Running   1/1       2%     64MB
```
