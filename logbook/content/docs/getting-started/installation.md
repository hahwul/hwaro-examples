+++
title = "Installation"
description = "Install Logbook on your system"
tags = ["installation", "setup", "getting-started"]
+++

# Installation

Logbook ships as a single statically-linked binary. No runtime dependencies are required.

## Download

Download the latest release for your platform from the releases page:

```bash
# Linux (amd64)
curl -LO https://releases.logbook.dev/v1.8.0/logbook-linux-amd64.tar.gz
tar xzf logbook-linux-amd64.tar.gz
sudo mv logbook /usr/local/bin/

# macOS (arm64)
curl -LO https://releases.logbook.dev/v1.8.0/logbook-darwin-arm64.tar.gz
tar xzf logbook-darwin-arm64.tar.gz
sudo mv logbook /usr/local/bin/
```

## Docker

An official Docker image is available:

```bash
docker pull ghcr.io/logbook-audit/logbook:1.8.0

docker run -d \
  --name logbook \
  -p 8443:8443 \
  -v /etc/logbook:/etc/logbook \
  -v /var/lib/logbook:/var/lib/logbook \
  ghcr.io/logbook-audit/logbook:1.8.0
```

## Package Managers

Logbook is available through several package managers:

| Platform | Command |
|----------|---------|
| Homebrew | `brew install logbook-audit/tap/logbook` |
| APT | `apt install logbook` |
| DNF | `dnf install logbook` |
| Arch (AUR) | `yay -S logbook-bin` |

## Verify Installation

After installation, verify that the binary runs correctly:

```bash
logbook version
```

Expected output:

```
logbook v1.8.0 (build 4c7e1a9, 2026-03-20)
```

## Start the Server

Run Logbook with the default configuration:

```bash
logbook server --config /etc/logbook/logbook.yaml
```

The API endpoint listens on `https://localhost:8443` by default. Logbook requires TLS for all audit event ingestion to ensure transport-level security.

## Systemd Service

For production deployments on Linux, install the systemd unit file:

```ini
[Unit]
Description=Logbook Audit Logging Server
After=network.target

[Service]
Type=simple
User=logbook
ExecStart=/usr/local/bin/logbook server --config /etc/logbook/logbook.yaml
Restart=on-failure
RestartSec=5s
LimitNOFILE=65535
ProtectSystem=strict
ReadWritePaths=/var/lib/logbook

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl enable logbook
sudo systemctl start logbook
sudo systemctl status logbook
```

## Emit a Test Event

Once the server is running, emit a test audit event using the CLI:

```bash
logbook emit \
  --type "system.health_check" \
  --actor "installer" \
  --resource "logbook-server" \
  --outcome "success" \
  --detail '{"message": "Installation verification"}'
```

Verify the event was recorded:

```bash
logbook query --last 1
```
