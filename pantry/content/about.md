+++
title = "About Pantry"
template = "page"
description = "About the Pantry package manager and registry platform."
tags = ["about"]
+++

## What is Pantry?

Pantry is an open-source package manager and registry designed for modern software teams. It provides a unified workflow for discovering, installing, and publishing reusable code packages across your organization and the wider community.

## Design Principles

**Deterministic builds.** Every installation produces the exact same dependency tree regardless of the order packages were added. The lockfile ensures byte-for-byte reproducibility across machines and CI environments.

**Security first.** All packages are signed and verified. The built-in `pantry audit` command checks your dependency tree against known vulnerability databases and reports issues before they reach production.

**Performance.** Dependency resolution uses a SAT solver optimized for package graphs. Cold installs complete in seconds, and cached installs are nearly instant thanks to a content-addressable store.

**Simplicity.** A single configuration file, `pantry.toml`, defines your project metadata, dependencies, scripts, and workspace layout. No hidden configuration or implicit behavior.

## Architecture

Pantry consists of three components:

1. **CLI** -- The command-line tool installed on developer machines and CI runners. Handles dependency resolution, installation, script execution, and publishing.

2. **Registry** -- The central package index that stores metadata, version information, and download URLs. The public registry is hosted at `registry.pantry.dev`. Organizations can run private registries.

3. **Storage** -- Package tarballs are stored in a content-addressable blob store. The public storage layer uses distributed CDN nodes for fast downloads worldwide.

## License

Pantry is released under the Apache License 2.0. Contributions are welcome via the project repository.
