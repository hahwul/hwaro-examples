+++
title = "Installation"
weight = 1
tags = ["setup", "installation"]
+++

# Installation

Conduit is distributed as a single binary with no external dependencies. Download it from the releases page or install via package managers.

## Using Homebrew

```bash
brew install conduit-io/tap/conduit
```

## Using apt (Debian/Ubuntu)

```bash
curl -fsSL https://packages.conduit.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/conduit.gpg
echo "deb [signed-by=/usr/share/keyrings/conduit.gpg] https://packages.conduit.io/apt stable main" | sudo tee /etc/apt/sources.list.d/conduit.list
sudo apt update && sudo apt install conduit
```

## From Source

If you have Rust installed, you can build from source:

```bash
git clone https://github.com/conduit-io/conduit.git
cd conduit
cargo build --release
```

The binary will be available at `target/release/conduit`.

## Using Docker

```bash
docker pull conduit-io/conduit:latest
docker run --rm conduit-io/conduit:latest --version
```

## Verify Installation

```bash
conduit --version
```

Expected output:

```
conduit 2.4.0 (build abc1234)
```

{{ hint(type="info", message="Make sure you have version 2.0.0 or later for full transform support.") }}

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 4+ cores |
| Memory | 512 MB | 2+ GB |
| Disk | 100 MB | Depends on data volume |
| OS | Linux, macOS, Windows | Linux (for production) |

Once installed, proceed to [Configuration](../configuration/) to set up your first pipeline.
