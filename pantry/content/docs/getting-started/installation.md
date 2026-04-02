+++
title = "Installation"
weight = 1
template = "doc"
description = "Install the Pantry CLI on macOS, Linux, and Windows."
tags = ["setup", "cli"]
[extra]
category = "Setup"
+++

## System Requirements

- macOS 12+, Linux (glibc 2.17+), or Windows 10+
- 50 MB of disk space
- Network access to `registry.pantry.dev` (or your private registry)

## Install via Script

The recommended method for most users. The install script detects your platform and downloads the correct binary.

### macOS and Linux

```bash
curl -fsSL https://get.pantry.dev | sh
```

This installs the `pantry` binary to `/usr/local/bin`. To install to a custom location:

```bash
curl -fsSL https://get.pantry.dev | INSTALL_DIR=~/.local/bin sh
```

### Windows

Open PowerShell as Administrator:

```powershell
irm https://get.pantry.dev/install.ps1 | iex
```

## Install via Package Managers

### Homebrew (macOS)

```bash
brew install pantry-dev/tap/pantry
```

### APT (Debian / Ubuntu)

```bash
curl -fsSL https://repo.pantry.dev/gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/pantry.gpg
echo "deb [signed-by=/usr/share/keyrings/pantry.gpg] https://repo.pantry.dev/apt stable main" | sudo tee /etc/apt/sources.list.d/pantry.list
sudo apt update && sudo apt install pantry
```

### Scoop (Windows)

```powershell
scoop bucket add pantry https://github.com/pantry-dev/scoop-bucket
scoop install pantry
```

## Install from Source

Requires Rust 1.75 or later:

```bash
git clone https://github.com/pantry-dev/pantry.git
cd pantry
cargo build --release
cp target/release/pantry /usr/local/bin/
```

## Verify Installation

```bash
pantry --version
```

Expected output:

```
pantry 3.2.1 (2025-11-08)
```

## Shell Completions

Generate completions for your shell:

```bash
# Bash
pantry completions bash > /etc/bash_completion.d/pantry

# Zsh
pantry completions zsh > "${fpath[1]}/_pantry"

# Fish
pantry completions fish > ~/.config/fish/completions/pantry.fish

# PowerShell
pantry completions powershell > $PROFILE.CurrentUserAllHosts
```

## Uninstall

To remove Pantry and its data:

```bash
pantry self uninstall
```

This removes the binary and clears the global cache at `~/.pantry/cache`.
