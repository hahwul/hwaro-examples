+++
title = "Quick Start"
weight = 2
date = 2025-06-02
+++

# Quick Start

Get a project building with Mortar in under five minutes.

## Initialize a Project

Create a new project with the default template:

```bash
mkdir my-project && cd my-project
mortar init
```

This generates a `mortar.toml` configuration file and a basic project structure:

```
my-project/
  mortar.toml
  src/
    main.c
  tests/
    test_main.c
```

## Your First Build

Run the default build target:

```bash
mortar build
```

Expected output:

```
[mortar] Resolving dependencies...
[mortar] Compiling src/main.c
[mortar] Linking build/my-project
[mortar] Build completed in 0.34s (2 targets, 0 cached)
```

## Running Targets

Mortar organizes work into named targets. Run a specific target:

```bash
# Run the test target
mortar run test

# Run with verbose output
mortar run build --verbose

# List all available targets
mortar targets
```

## Build Output

By default, build artifacts are placed in the `build/` directory:

```bash
ls build/
# my-project  my-project.debug  build.log
```

> You can change the output directory by setting `output_dir` in your `mortar.toml` configuration file. See the Configuration section for details.

## Next Steps

- Read the [Configuration](/getting-started/configuration/) reference to customize your build
- Learn about [Build Targets](/build-config/targets/) to define complex build pipelines
- Set up [Caching](/advanced/caching/) for faster incremental builds
