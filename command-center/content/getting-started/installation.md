+++
title = "Installation Guide"
description = "Step-by-step instructions to get the Command Center CLI running on your machine."
+++

Deploying the Command Center CLI is straightforward across all major platforms. Follow the instructions below for your specific environment.

## macOS & Linux

The recommended way to install on Unix-like systems is via our automated shell script:

```bash
curl -sSL https://command-center.io/install | sh
```

Alternatively, you can use **Homebrew**:

```bash
brew tap command-center/tap
brew install command-center-cli
```

## Windows

For Windows users, we provide a **PowerShell** installation script:

```powershell
powershell -Command "iwr -useb https://command-center.io/install.ps1 | iex"
```

You can also use **Scoop**:

```bash
scoop bucket add command-center https://github.com/command-center/scoop
scoop install cc
```

## Docker

If you prefer to run the CLI in a containerized environment, use our official image:

```bash
docker pull commandcenter/cli:latest
docker run -it commandcenter/cli cc --version
```

## Verification

After installation, verify that the CLI is accessible by checking the version:

```bash
cc --version
```

<div class="info-box note">
  <strong>Note:</strong> You may need to restart your terminal session for the changes to take effect.
</div>

## Post-Installation

Once installed, we recommend running the [Quick Start](/getting-started/quick-start.html) command to configure your environment:

```bash
cc auth login
cc setup
```
