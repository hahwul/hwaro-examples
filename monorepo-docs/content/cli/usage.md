+++
title = "CLI Usage"
description = "Common CLI commands."
+++

The primary command for the CLI is `mono`.

```bash
# Create a new package
mono create package-name

# Run tests across all packages
mono test

# Build all packages
mono build
```

The CLI depends on the [Framework](/framework) for its internal plugin system.
