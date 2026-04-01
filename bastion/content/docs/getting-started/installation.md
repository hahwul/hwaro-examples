+++
title = "Installation"
description = "Install the Bastion gateway and CLI tools"
weight = 1
+++

# Installation

Bastion can be installed via system package managers, pre-built binaries, or container images. Choose the method that fits your deployment environment.

## System Requirements

| Requirement | Minimum |
|-------------|---------|
| CPU | 2 cores |
| Memory | 512 MB |
| Disk | 100 MB |
| OS | Linux (amd64, arm64), macOS, Windows |
| Network | Outbound HTTPS for identity provider communication |

## Package Managers

### Debian / Ubuntu

```bash
curl -fsSL https://pkg.bastion.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/bastion.gpg
echo "deb [signed-by=/usr/share/keyrings/bastion.gpg] https://pkg.bastion.io/apt stable main" \
  | sudo tee /etc/apt/sources.list.d/bastion.list
sudo apt update && sudo apt install bastion
```

### RHEL / Fedora

```bash
sudo rpm --import https://pkg.bastion.io/gpg
sudo dnf config-manager --add-repo https://pkg.bastion.io/rpm/bastion.repo
sudo dnf install bastion
```

### macOS (Homebrew)

```bash
brew tap bastion-io/tap
brew install bastion
```

## Docker

Pull the official container image:

```bash
docker pull ghcr.io/bastion-io/bastion:latest
```

Run the gateway:

```bash
docker run -d \
  --name bastion-gateway \
  -p 8443:8443 \
  -v /etc/bastion:/etc/bastion:ro \
  ghcr.io/bastion-io/bastion:latest \
  gateway --config /etc/bastion/config.yaml
```

## Binary Download

Download pre-built binaries from the releases page:

```bash
# Linux amd64
curl -fsSL https://releases.bastion.io/latest/bastion-linux-amd64.tar.gz | tar xz
sudo mv bastion /usr/local/bin/

# Verify installation
bastion version
```

## Verify Installation

After installation, verify the binary:

```bash
$ bastion version
bastion v2.4.1 (build a3f8c21)
```

Check that the configuration directory exists:

```bash
$ ls /etc/bastion/
config.yaml  policies/  certs/
```

Proceed to the [Quick Start]({{ base_url }}/docs/getting-started/quickstart/) guide to configure your first policy.
