+++
title = "Installation"
weight = 1
description = "How to install the platform on your system"
tags = ["setup", "install"]
categories = ["getting-started"]
+++

# Installation

This guide walks you through installing the platform on macOS, Linux, and Windows.

## System Requirements

- Operating system: macOS 12+, Ubuntu 20.04+, or Windows 10+
- Memory: 4 GB RAM minimum, 8 GB recommended
- Disk: 500 MB free space
- Network: Internet connection for initial setup

## macOS

Install using Homebrew:

```bash
brew tap acme/tools
brew install acme-platform
```

Verify the installation:

```bash
acme --version
```

## Linux

Download the latest release from the official repository:

```bash
curl -sSL https://get.acme.dev | sh
```

Or install via apt on Debian-based systems:

```bash
sudo apt-get update
sudo apt-get install acme-platform
```

## Windows

Download the MSI installer from the [releases page](https://github.com/acme/platform/releases) and run it. Alternatively, use winget:

```powershell
winget install Acme.Platform
```

## Docker

For containerized environments:

```bash
docker pull ghcr.io/acme/platform:latest
docker run -it ghcr.io/acme/platform:latest --version
```

## Verifying Installation

After installing, run the diagnostic command to ensure everything is set up correctly:

```bash
acme doctor
```

This checks your system configuration, dependencies, and network connectivity.

## Next Steps

Once installed, proceed to the [Quick Start](../quick-start/) guide to create your first project.
