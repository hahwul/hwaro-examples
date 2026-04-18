+++
title = "Deploy"
weight = 3
template = "doc"
description = "Build and deploy your project."
tags = ["deploy"]
[extra]
step = 3
total_steps = 3
estimated_time = "1 min"
+++

## Build

```bash
compass build
```

This creates your output in the `dist/` directory.

## Deploy

```bash
compass deploy --env production
```

The CLI will display the deployment URL once complete:

```
Deployed to: https://my-project.compass-tool.dev
Build time: 2.3s
```

## What Next?

You have completed the Quick Start. For deeper configuration, environment management, and team workflows, see the [Full Guide](../../guide/).
