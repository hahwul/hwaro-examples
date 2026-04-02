+++
title = "Installation"
weight = 1
date = 2025-06-01
+++

# Installation

Mortar can be installed through several methods depending on your platform and preferences.

## Homebrew (macOS / Linux)

The recommended way to install Mortar on macOS or Linux:

```bash
brew tap mortar-build/tap
brew install mortar
```

## Cargo (Rust)

If you have a Rust toolchain installed, you can build from source:

```bash
cargo install mortar-build
```

This compiles the latest release from crates.io. Building from source requires Rust 1.70 or later.

## Pre-built Binaries

Download a pre-built binary from the releases page:

```bash
# Linux (x86_64)
curl -L https://github.com/mortar-build/mortar/releases/latest/download/mortar-linux-amd64.tar.gz | tar xz
sudo mv mortar /usr/local/bin/

# macOS (Apple Silicon)
curl -L https://github.com/mortar-build/mortar/releases/latest/download/mortar-darwin-arm64.tar.gz | tar xz
sudo mv mortar /usr/local/bin/
```

## Verify Installation

After installing, verify Mortar is available:

```bash
mortar --version
# mortar 0.9.3 (2025-05-20)
```

> Make sure your `PATH` includes the directory where Mortar was installed. For Cargo installs, this is typically `~/.cargo/bin`.

## System Requirements

| Platform | Minimum Version | Architecture |
|----------|----------------|--------------|
| macOS    | 12.0 (Monterey) | x86_64, arm64 |
| Linux    | glibc 2.17+    | x86_64, arm64 |
| Windows  | 10 (1809+)     | x86_64       |

Mortar has no runtime dependencies beyond a C compiler for projects that require compilation.
