+++
title = "Installation"
description = "Install Relay on your system"
tags = ["installation", "getting-started"]
+++

# Installation

Relay is distributed as a single binary with no external runtime dependencies. It can be installed from pre-built packages or compiled from source.

## Pre-built Binaries

Download the latest release for your platform from the releases page:

```bash
# Linux (amd64)
curl -L https://releases.relay.dev/latest/relay-linux-amd64.tar.gz | tar xz
sudo mv relay /usr/local/bin/

# macOS (Apple Silicon)
curl -L https://releases.relay.dev/latest/relay-darwin-arm64.tar.gz | tar xz
sudo mv relay /usr/local/bin/

# Verify installation
relay --version
```

## Docker

Relay publishes official Docker images for each release:

```bash
docker pull relay/relay:latest

docker run -d \
  --name relay \
  -p 8080:8080 \
  -v $(pwd)/relay.toml:/etc/relay/relay.toml \
  relay/relay:latest
```

## Build from Source

Building from source requires Go 1.21 or later:

```bash
git clone https://github.com/relay-platform/relay.git
cd relay
go build -o relay ./cmd/relay
sudo mv relay /usr/local/bin/
```

## Verify Installation

After installation, verify that Relay is working:

```bash
relay version
```

Expected output:

```
Relay v1.4.0 (build abc1234)
```

Start the server in development mode to confirm everything is configured correctly:

```bash
relay serve --dev
```

The API server will start on `http://localhost:8080`. You can test connectivity with:

```bash
curl http://localhost:8080/health
```

```json
{
  "status": "healthy",
  "version": "1.4.0",
  "uptime": "2s"
}
```

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 1 core | 2 cores |
| Memory | 256 MB | 1 GB |
| Disk | 1 GB | 10 GB |
| Network | 10 Mbps | 100 Mbps |

> Relay stores delivery logs in an embedded SQLite database by default. For production deployments with high event volumes, configure an external PostgreSQL database.
