+++
title = "Search and Install"
weight = 2
template = "doc"
description = "Find packages on the registry and install them into your project."
tags = ["cli", "packages"]
[extra]
category = "Usage"
+++

## Initializing a Project

Before installing packages, initialize a Pantry project in your directory:

```bash
pantry init
```

This creates a `pantry.toml` file with default settings:

```toml
[package]
name = "my-project"
version = "0.1.0"

[dependencies]
```

You can also initialize with a specific template:

```bash
pantry init --template web-app
```

## Searching for Packages

Search the public registry from the command line:

```bash
pantry search http-client
```

Output:

```
NAME              VERSION   DOWNLOADS   DESCRIPTION
reqwest           0.12.4    14.2M       HTTP client with async support
ureq              2.10.0    3.1M        Minimal blocking HTTP client
hyper-client      1.4.1     8.7M        Low-level HTTP client on hyper
surf              2.3.2     890K        Friendly HTTP client for async
isahc             1.7.2     1.5M        Configurable HTTP client
```

### Filtering Results

Filter by tag, author, or keyword:

```bash
# Search by tag
pantry search --tag async http-client

# Search by author
pantry search --author pantry-team

# Show detailed info for a specific package
pantry info reqwest
```

The `pantry info` command displays full metadata:

```
reqwest 0.12.4
  HTTP client with async support

  Homepage:    https://github.com/pantry-packages/reqwest
  Repository:  https://github.com/pantry-packages/reqwest
  License:     MIT OR Apache-2.0
  Downloads:   14,201,338
  Published:   2025-09-14
  Size:        245 KB

  Dependencies (5):
    http 1.1    serde 1.0    url 2.5    encoding_rs 0.8    tokio 1.38

  Tags: http, client, async, networking, web
```

## Installing Packages

### Add a Dependency

```bash
pantry add reqwest
```

This resolves the latest compatible version, updates `pantry.toml`, and downloads the package:

```
Resolving dependencies...
  + reqwest 0.12.4
  + http 1.1.1
  + serde 1.0.203
  + url 2.5.2
  + encoding_rs 0.8.34
  + tokio 1.38.0

Added 6 packages in 1.2s
```

### Add with Version Constraint

```bash
# Exact version
pantry add reqwest@0.12.4

# Version range
pantry add reqwest@">=0.12.0, <0.13.0"

# Compatible versions (caret)
pantry add reqwest@^0.12

# Patch-level updates only (tilde)
pantry add reqwest@~0.12.4
```

### Add as Dev Dependency

```bash
pantry add --dev jest-runner
```

### Install All Dependencies

After cloning a project or updating `pantry.toml`:

```bash
pantry install
```

This reads the lockfile (`pantry.lock`) if present and installs the exact recorded versions. If no lockfile exists, it performs fresh resolution and creates one.

## Managing Dependencies

### List Installed Packages

```bash
pantry list
```

```
my-project 0.1.0
+-- reqwest 0.12.4
|   +-- http 1.1.1
|   +-- serde 1.0.203
|   +-- url 2.5.2
|   +-- encoding_rs 0.8.34
|   +-- tokio 1.38.0
+-- jest-runner 2.1.0 (dev)
```

### Update Packages

```bash
# Update all packages to latest compatible versions
pantry update

# Update a specific package
pantry update reqwest

# Check for updates without installing
pantry outdated
```

### Remove a Package

```bash
pantry remove reqwest
```

## Lockfile

The `pantry.lock` file records the exact version of every installed package. Always commit this file to version control to ensure reproducible builds across your team and CI.

```bash
# Verify lockfile integrity
pantry check

# Regenerate lockfile from scratch
pantry install --frozen=false
```

## Offline Mode

If you have previously installed a package, Pantry caches it locally. Use offline mode when network access is unavailable:

```bash
pantry install --offline
```

This only works if all required packages exist in the local cache at `~/.pantry/cache`.
