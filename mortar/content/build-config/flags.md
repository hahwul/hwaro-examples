+++
title = "Build Flags"
weight = 2
date = 2025-06-06
+++

# Build Flags

Mortar provides a structured way to manage compiler flags, optimization levels, and warning settings.

## Global Flags

Set flags that apply to all targets in the `[build]` section:

```toml
[build]
flags = ["-Wall", "-Wextra"]
includes = ["include/"]
defines = { DEBUG = "1" }
```

## Optimization Levels

Mortar supports named optimization profiles that map to compiler flags:

| Profile    | Flags             | Description                          |
|-----------|-------------------|--------------------------------------|
| debug     | `-O0 -g`          | No optimization, full debug symbols  |
| release   | `-O2 -DNDEBUG`    | Standard optimization, no debug      |
| fast      | `-O3 -flto`       | Aggressive optimization with LTO     |
| size      | `-Os -DNDEBUG`    | Optimize for binary size             |
| custom    | User-defined       | Specify flags manually               |

Use profiles in your config:

```toml
[build]
profile = "release"
```

Or from the command line:

```bash
mortar build --profile fast
```

## Warning Flags

Control compiler warnings globally or per-target:

```toml
[build.warnings]
level = "strict"      # minimal, standard, strict, everything
treat_as_errors = true
suppress = ["unused-variable", "unused-parameter"]
```

| Level      | GCC/Clang Equivalent             |
|-----------|----------------------------------|
| minimal   | `-Wall`                          |
| standard  | `-Wall -Wextra`                  |
| strict    | `-Wall -Wextra -Wpedantic`       |
| everything| `-Wall -Wextra -Wpedantic -Werror`|

## Debug Symbols

Configure debug information generation:

```toml
[build.debug]
enabled = true
format = "dwarf4"     # dwarf4, dwarf5, stabs
split = true          # Separate .debug files
strip_release = true  # Strip symbols in release builds
```

## Linker Flags

Specify linker settings:

```toml
[build.link]
flags = ["-lm", "-lpthread"]
search_paths = ["lib/", "/usr/local/lib"]
static_prefer = false
```

> When `static_prefer` is true, Mortar will prefer static linking over dynamic linking when both options are available for a dependency.

## Flag Precedence

Flags are applied in this order (later values override earlier ones):

1. Built-in defaults for the selected profile
2. `[build]` section global flags
3. Target-level flags
4. Command-line `--flag` overrides
5. Environment variable `MORTAR_FLAGS`
