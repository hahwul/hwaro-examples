+++
title = "Build Targets"
weight = 1
date = 2025-06-05
+++

# Build Targets

Targets are the fundamental unit of work in Mortar. Each target defines a set of sources, compiler options, and an output artifact.

## Defining Targets

Targets are defined as arrays in `mortar.toml`:

```toml
[[targets]]
name = "app"
type = "executable"
sources = ["src/**/*.c"]
output = "my-app"
```

## Target Types

Mortar supports several target types:

| Type         | Description                    | Output           |
|-------------|-------------------------------|------------------|
| executable  | Linked binary                  | ELF / Mach-O     |
| static_lib  | Static archive                 | `.a` / `.lib`    |
| shared_lib  | Shared/dynamic library         | `.so` / `.dylib` |
| object      | Compiled object files only     | `.o` files       |
| custom      | User-defined command           | Varies           |

## Running Targets

```bash
# Run the default target
mortar build

# Run a specific target
mortar run app

# Run multiple targets
mortar run app tests docs
```

## Target Dependencies

Targets can depend on other targets. Mortar resolves the dependency graph and builds in the correct order:

```toml
[[targets]]
name = "libcore"
type = "static_lib"
sources = ["lib/core/**/*.c"]
output = "libcore.a"

[[targets]]
name = "app"
type = "executable"
sources = ["src/**/*.c"]
output = "my-app"
depends_on = ["libcore"]
link = ["libcore.a"]
```

When you run `mortar run app`, Mortar automatically builds `libcore` first.

## Conditional Targets

Targets can be gated by platform or environment:

```toml
[[targets]]
name = "platform-utils"
type = "static_lib"
sources = ["src/platform/linux/**/*.c"]
output = "libplatform.a"
condition = { os = "linux" }
```

## Target-level Compiler Settings

Each target can override global compiler flags:

```toml
[[targets]]
name = "release-app"
type = "executable"
sources = ["src/**/*.c"]
output = "my-app"
flags = ["-O3", "-DNDEBUG", "-flto"]
includes = ["include/", "vendor/include/"]
defines = { VERSION = "1.2.0", RELEASE = "1" }
```

> Targets inherit global flags from the `[build]` section. Target-level flags are appended after global flags, so they can override earlier settings.
