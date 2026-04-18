+++
title = "Configure"
weight = 2
template = "doc"
description = "Create and configure your first project."
tags = ["setup", "config"]
[extra]
step = 2
total_steps = 3
estimated_time = "2 min"
+++

## Create a New Project

```bash
compass init my-project
cd my-project
```

This creates a project directory with the default configuration file.

## Edit Configuration

Open `compass.toml` and set your project name:

```toml
[project]
name = "my-project"
version = "0.1.0"

[build]
output = "dist"
target = "production"
```

## Validate Configuration

```bash
compass check
```

Expected output:

```
Configuration valid. 0 warnings.
```

## Next Step

Proceed to [Deploy](../deploy/) to publish your first build.
