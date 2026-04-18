+++
title = "Installation"
weight = 1
+++

# Installation

Pipeline can be installed through several methods depending on your operating system and preferences.

## Prerequisites

- Docker 20.10 or later (required for container-based stages)
- Git 2.30 or later
- 512 MB available RAM minimum

## Package Managers

### macOS (Homebrew)

```bash
brew tap pipeline-ci/tap
brew install pipeline
```

### Linux (APT)

```bash
curl -fsSL https://pkg.pipeline.dev/gpg | sudo gpg --dearmor -o /usr/share/keyrings/pipeline-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/pipeline-archive-keyring.gpg] https://pkg.pipeline.dev/apt stable main" | sudo tee /etc/apt/sources.list.d/pipeline.list
sudo apt update
sudo apt install pipeline
```

### Linux (RPM)

```bash
sudo rpm --import https://pkg.pipeline.dev/gpg
sudo dnf config-manager --add-repo https://pkg.pipeline.dev/rpm/pipeline.repo
sudo dnf install pipeline
```

## Docker

Run Pipeline directly from a Docker image without installing anything locally:

```bash
docker run --rm -v $(pwd):/workspace -v /var/run/docker.sock:/var/run/docker.sock \
  ghcr.io/pipeline-ci/pipeline:latest run
```

> Note: Mounting the Docker socket is required for Pipeline to create sibling containers for each stage.

## Build from Source

```bash
git clone https://github.com/pipeline-ci/pipeline.git
cd pipeline
go build -o pipeline ./cmd/pipeline
sudo mv pipeline /usr/local/bin/
```

### Build Requirements

| Requirement | Version |
|---|---|
| Go | 1.22 or later |
| Make | 3.81 or later |
| Docker | 20.10 or later |

## Verify Installation

```bash
pipeline version
```

Expected output:

```
Pipeline v1.4.2 (build 2025-03-15, go1.22.1)
```

## Next Steps

Once installed, proceed to the [Quick Start]({{ base_url }}/docs/getting-started/quickstart/) guide to create and run your first pipeline.
