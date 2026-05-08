+++
title = "CLI Configuration"
description = "Configure the mono CLI for your workspace."
+++

The CLI reads its workspace settings from a `mono.config.json` file at the repository root. This file declares the package directories, default scripts, and shared environment variables.

```json
{
  "packages": ["packages/*", "apps/*"],
  "scripts": {
    "build": "mono run build --parallel",
    "test": "mono run test --since=main"
  },
  "env": {
    "NODE_OPTIONS": "--max-old-space-size=4096"
  }
}
```

The `packages` field accepts glob patterns. Patterns are evaluated relative to the config file location and resolved at startup, so adding a new package directory does not require editing the config unless it sits outside an existing glob.

The `scripts` field defines named entry points that compose other CLI commands. Scripts can call into other scripts using the `mono run` prefix, allowing higher-level workflows to be built from smaller pieces. Scripts run in the configured shell with the merged environment, and any extra arguments passed on the command line are forwarded to the underlying command.

Per-package overrides live in each package's `package.json` under the `mono` key. Overrides shadow the root configuration only for that package, which is useful when a single package needs a different test runner or build target. Overrides do not bleed into dependent packages, even when commands are run with `--with-deps`.

Configuration is validated on startup. If a required field is missing or contains an unexpected type, the CLI prints the offending path and exits with a non-zero status before any task is scheduled.
