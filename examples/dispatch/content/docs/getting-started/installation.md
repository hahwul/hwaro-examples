+++
title = "Installation"
weight = 1
tags = ["getting-started", "installation"]
+++

# Installation

Dispatch ships as a single binary with no external dependencies. Download the appropriate package for your platform and add it to your PATH.

## System Requirements

| Requirement | Minimum        |
|-------------|----------------|
| OS          | Linux, macOS   |
| CPU         | 2 cores        |
| Memory      | 512 MB         |
| Disk        | 1 GB free      |
| Go (SDK)    | 1.21+          |
| Python (SDK)| 3.10+          |

## Binary Installation

Download the latest release from the releases page and extract it.

```bash
curl -sL https://releases.dispatch.dev/latest/dispatch-linux-amd64.tar.gz | tar xz
sudo mv dispatch /usr/local/bin/
dispatch version
```

For macOS, use the darwin archive instead.

```bash
curl -sL https://releases.dispatch.dev/latest/dispatch-darwin-arm64.tar.gz | tar xz
sudo mv dispatch /usr/local/bin/
```

## Package Managers

Install via Homebrew on macOS or Linux.

```bash
brew install dispatch-mq/tap/dispatch
```

Or using Go install for the latest development build.

```bash
go install github.com/dispatch-mq/dispatch/cmd/dispatch@latest
```

## Python SDK

Install the Python client library from PyPI.

```bash
pip install dispatch-mq
```

## Verify Installation

Confirm the server binary is available.

```bash
dispatch version
# dispatch v0.9.2 (build 2026-03-15)
```

Next, proceed to [Quickstart](../quickstart/) to launch the server and send your first event.
