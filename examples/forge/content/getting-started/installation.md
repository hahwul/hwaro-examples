+++
title = "Installation"
weight = 1
template = "doc"
description = "Install Forge on your system and verify the setup."
tags = ["setup"]
[extra]
category = "Setup"
version = "v2.0"
+++

## Requirements

- Go 1.21 or later
- Git 2.30 or later

## Install from Binary

### macOS / Linux

```bash
curl -sSfL https://get.forge-oss.dev | sh
```

### Windows

```powershell
iwr -useb https://get.forge-oss.dev/install.ps1 | iex
```

### From Source

```bash
git clone https://github.com/forge-oss/forge.git
cd forge
go build -o forge ./cmd/forge
```

## Verify Installation

```bash
forge version
```

```
Forge v2.0.3
Go: go1.22.1
OS/Arch: darwin/arm64
```

## Shell Completion

```bash
# Bash
forge completion bash > /etc/bash_completion.d/forge

# Zsh
forge completion zsh > "${fpath[1]}/_forge"

# Fish
forge completion fish > ~/.config/fish/completions/forge.fish
```
