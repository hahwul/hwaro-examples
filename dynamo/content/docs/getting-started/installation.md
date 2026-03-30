+++
title = "Installation"
description = "Install the Dynamo CLI and local development environment"
tags = ["installation", "cli", "dynamo"]
+++

# Installation

Dynamo provides a single CLI binary that handles project scaffolding, local emulation, and deployment to remote environments.

## System Prerequisites

Before installing, ensure the following dependencies are available:

| Dependency | Version | Purpose |
|-----------|---------|---------|
| Docker | 20.10+ | Container runtime for function isolation |
| Git | 2.30+ | Version control for project management |
| Node.js | 18+ | Required only for JavaScript/TypeScript runtimes |
| Python | 3.10+ | Required only for Python runtime |
| Go | 1.21+ | Required only for Go runtime |

## Install via Package Manager

**macOS (Homebrew):**

```bash
brew tap dynamo-faas/tap
brew install dynamo
```

**Linux (apt):**

```bash
curl -fsSL https://pkg.dynamo.dev/gpg | sudo gpg --dearmor -o /usr/share/keyrings/dynamo.gpg
echo "deb [signed-by=/usr/share/keyrings/dynamo.gpg] https://pkg.dynamo.dev/apt stable main" | sudo tee /etc/apt/sources.list.d/dynamo.list
sudo apt update && sudo apt install dynamo
```

**Linux (yum):**

```bash
sudo rpm --import https://pkg.dynamo.dev/gpg
sudo yum-config-manager --add-repo https://pkg.dynamo.dev/yum/dynamo.repo
sudo yum install dynamo
```

## Install from Binary

Download the latest release directly:

```bash
curl -Lo dynamo https://releases.dynamo.dev/latest/dynamo-$(uname -s)-$(uname -m)
chmod +x dynamo
sudo mv dynamo /usr/local/bin/
```

## Verify Installation

Confirm the CLI is installed and accessible:

```bash
dynamo version
```

Expected output:

```
dynamo v1.4.2 (build a3f8c01)
runtime: docker 24.0.7
platform: linux/amd64
```

## Initialize a New Project

Create a new Dynamo project with the default template:

```bash
dynamo init my-project
cd my-project
```

This generates the following project structure:

```
my-project/
  dynamo.yaml        # Project configuration
  functions/
    hello/
      handler.js     # Default function handler
      config.yaml    # Function-level configuration
  .dynamo/
    local.yaml       # Local emulator settings
```

## Start the Local Emulator

Run the development server to test functions locally:

```bash
dynamo dev
```

The emulator starts on `http://localhost:8080` by default. Invoke the sample function:

```bash
curl http://localhost:8080/hello
```

> The local emulator replicates the production dispatch pipeline, including cold start behavior. Use the `--warm` flag to keep instances alive between invocations during development.
