+++
title = "Installation"
weight = 1
description = "Install the Acme CLI and dependencies"
+++

## System Requirements

- macOS 12+, Ubuntu 20.04+, or Windows 10+
- 512 MB RAM minimum
- 100 MB disk space

## Install via Package Manager

### macOS (Homebrew)

```bash
brew install acme-platform
```

### Linux (apt)

```bash
curl -fsSL https://get.acme.dev | bash
sudo apt install acme-cli
```

### Windows (Scoop)

```powershell
scoop bucket add acme https://github.com/acme/scoop-bucket
scoop install acme-cli
```

## Verify Installation

```bash
acme --version
# acme 2.1.0
```

If the command is not found, ensure the install directory is in your `PATH`.
