+++
title = "Installation"
description = "Install Sentinel on your system"
tags = ["installation", "setup", "getting-started"]
+++

# Installation

Sentinel ships as a single statically-linked binary. No runtime dependencies are required.

## Download

Download the latest release for your platform from the releases page:

```bash
# Linux (amd64)
curl -LO https://releases.sentinel.dev/v2.4.1/sentinel-linux-amd64.tar.gz
tar xzf sentinel-linux-amd64.tar.gz
sudo mv sentinel /usr/local/bin/

# macOS (arm64)
curl -LO https://releases.sentinel.dev/v2.4.1/sentinel-darwin-arm64.tar.gz
tar xzf sentinel-darwin-arm64.tar.gz
sudo mv sentinel /usr/local/bin/
```

## Docker

An official Docker image is available:

```bash
docker pull ghcr.io/sentinel-monitoring/sentinel:2.4.1

docker run -d \
  --name sentinel \
  -p 9090:9090 \
  -v /etc/sentinel:/etc/sentinel \
  ghcr.io/sentinel-monitoring/sentinel:2.4.1
```

## Package Managers

Sentinel is available through several package managers:

| Platform | Command |
|----------|---------|
| Homebrew | `brew install sentinel-monitoring/tap/sentinel` |
| APT | `apt install sentinel` |
| DNF | `dnf install sentinel` |
| Arch (AUR) | `yay -S sentinel-bin` |

## Verify Installation

After installation, verify that the binary runs correctly:

```bash
sentinel version
```

Expected output:

```
sentinel v2.4.1 (build 8a3f2c1, 2026-03-15)
```

## Start the Server

Run Sentinel with the default configuration:

```bash
sentinel server --config /etc/sentinel/sentinel.yaml
```

The web interface will be available at `http://localhost:9090`. The metrics ingestion endpoint listens on the same port at `/api/v1/write`.

## Systemd Service

For production deployments on Linux, install the systemd unit file:

```ini
[Unit]
Description=Sentinel Monitoring Server
After=network.target

[Service]
Type=simple
User=sentinel
ExecStart=/usr/local/bin/sentinel server --config /etc/sentinel/sentinel.yaml
Restart=on-failure
RestartSec=5s
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl enable sentinel
sudo systemctl start sentinel
sudo systemctl status sentinel
```
