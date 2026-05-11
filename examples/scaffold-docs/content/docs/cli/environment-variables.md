+++
title = "Environment Variables"
weight = 30
description = "Configuring the CLI behavior using environment variables."
template = "page"
+++

In addition to command-line flags, the Scaffold CLI can be configured using environment variables. This is particularly useful in CI/CD pipelines or when standardizing settings across a team.

## Supported Variables

* `SCAFFOLD_CONFIG`: Specifies a custom path to the configuration file (default is `scaffold.toml` in the current directory).
* `SCAFFOLD_LOG_LEVEL`: Adjusts the verbosity of the output. Valid options are `debug`, `info`, `warn`, and `error`.
* `SCAFFOLD_THEME`: Overrides the default theme specified in the configuration file.

Environment variables are evaluated after the default configuration but can be overridden by explicit CLI flags.
