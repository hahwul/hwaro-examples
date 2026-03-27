+++
title = "Install"
weight = 1
template = "doc"
description = "Install the CLI tool and verify your setup."
tags = ["setup"]
[extra]
step = 1
total_steps = 3
estimated_time = "2 min"
+++

## Install the CLI

### macOS

```bash
brew install compass-tool
```

### Linux

```bash
curl -sSL https://get.compass-tool.dev | sh
```

### Windows

```powershell
winget install compass-tool
```

## Verify Installation

```bash
compass --version
```

You should see output like:

```
compass v2.4.1 (build 2024-09-01)
```

## Next Step

Once installed, proceed to [Configure](/quickstart/configure/) to set up your project.
