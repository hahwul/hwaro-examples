+++
title = "Installation"
weight = 1
template = "doc"
description = "Install Docker and DockHub CLI on your system."
tags = ["setup", "docker"]
[extra]
category = "Setup"
+++

## Prerequisites

- Linux, macOS, or Windows 10/11
- 4 GB RAM minimum (8 GB recommended)
- 20 GB free disk space

## Install Docker

### macOS

```bash
brew install --cask docker
```

### Linux (Ubuntu/Debian)

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

Log out and back in for group changes to take effect.

### Verify Installation

```bash
docker --version
docker run hello-world
```

## Install DockHub CLI

```bash
curl -sSL https://install.dockhub.dev | sh
dockhub version
```

Expected output:

```
DockHub CLI v3.2.0
Docker Engine: 24.0.7
```

## Next Steps

Proceed to [Your First Container](/getting-started/first-container/) to build and run your first image.
