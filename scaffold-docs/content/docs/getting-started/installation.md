+++
title = "Installation"
weight = 1
tags = ["setup", "install"]
+++

# Installation

Scaffold is distributed as a single binary with no runtime dependencies.

## Using Homebrew

```bash
brew install scaffoldcli/tap/scaffold
```

## Using npm

```bash
npm install -g @scaffoldcli/scaffold
```

## From Source

Clone the repository and build from source:

```bash
git clone https://github.com/scaffoldcli/scaffold.git
cd scaffold
make build
```

The binary will be available at `bin/scaffold`.

## Verify Installation

Run the version command to confirm the installation:

```bash
scaffold --version
```

Expected output:

```
scaffold 2.4.1 (darwin/arm64)
```

{{ hint(type="info", message="Scaffold requires version 2.0 or later for template pack support.") }}

## System Requirements

| Requirement | Minimum |
|---|---|
| OS | macOS, Linux, Windows |
| Disk | 15 MB |
| RAM | 32 MB |
| Shell | bash, zsh, fish, PowerShell |

Once installed, proceed to the [Quickstart](/docs/getting-started/quickstart/) guide.
