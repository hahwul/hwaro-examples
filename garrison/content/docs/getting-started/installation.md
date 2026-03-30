+++
title = "Installation"
description = "Install the Garrison firewall management platform"
tags = ["installation", "getting-started"]
+++

# Installation

Garrison is distributed as a single binary for Linux, macOS, and FreeBSD. The binary includes the policy server, rule compiler, and CLI management tool.

## Download

Download the latest release for your platform:

```bash
# Linux (amd64)
curl -L https://releases.garrison-fw.io/latest/garrison-linux-amd64.tar.gz | tar xz

# macOS (arm64)
curl -L https://releases.garrison-fw.io/latest/garrison-darwin-arm64.tar.gz | tar xz

# FreeBSD (amd64)
curl -L https://releases.garrison-fw.io/latest/garrison-freebsd-amd64.tar.gz | tar xz
```

## Verify the Binary

All releases are signed with the project GPG key. Verify the signature before deploying:

```bash
gpg --verify garrison-linux-amd64.tar.gz.sig garrison-linux-amd64.tar.gz
```

## Install the Binary

Move the binary to a location in your system PATH:

```bash
sudo mv garrison /usr/local/bin/
sudo chmod 755 /usr/local/bin/garrison
```

## Verify the Installation

```bash
garrison version
```

Expected output:

```
garrison v2.4.1 (build a3f8c21, 2026-03-15)
```

## Install the Agent

Firewall agents run on each enforcement point and receive compiled policies from the central server. Install the agent on each perimeter device:

```bash
curl -L https://releases.garrison-fw.io/latest/garrison-agent-linux-amd64.tar.gz | tar xz
sudo mv garrison-agent /usr/local/bin/
sudo chmod 755 /usr/local/bin/garrison-agent
```

## System Service

Create a systemd service file for the Garrison server:

```ini
[Unit]
Description=Garrison Policy Server
After=network.target

[Service]
Type=simple
User=garrison
Group=garrison
ExecStart=/usr/local/bin/garrison serve --config /etc/garrison/config.toml
Restart=on-failure
RestartSec=5
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl enable garrison
sudo systemctl start garrison
sudo systemctl status garrison
```

## Directory Structure

After installation, Garrison expects the following directory layout:

| Path | Purpose |
|------|---------|
| `/etc/garrison/config.toml` | Server configuration |
| `/etc/garrison/policies/` | Policy definition files |
| `/etc/garrison/certs/` | TLS certificates |
| `/var/lib/garrison/` | State and audit data |
| `/var/log/garrison/` | Server and agent logs |
