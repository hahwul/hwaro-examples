+++
title = "Dependencies"
weight = 3
date = 2025-06-07
+++

# Dependencies

Mortar manages external dependencies through a declarative system with automatic version resolution and lock files.

## Declaring Dependencies

Add dependencies in the `[dependencies]` section of `mortar.toml`:

```toml
[dependencies]
zlib = "1.3.1"
openssl = { version = "3.2", optional = true }
sqlite = { version = "3.45", features = ["fts5", "json1"] }
```

## Dependency Sources

Mortar can fetch dependencies from multiple sources:

```toml
[dependencies]
# From the Mortar registry
json-parser = "2.1.0"

# From a Git repository
my-lib = { git = "https://github.com/org/my-lib.git", tag = "v1.0.0" }

# From a local path
utils = { path = "../shared/utils" }

# From a URL
header-lib = { url = "https://example.com/lib-1.0.tar.gz", checksum = "sha256:abc123..." }
```

## Version Resolution

Mortar uses semantic versioning for dependency resolution:

| Syntax       | Matches                    |
|-------------|---------------------------|
| `"1.2.3"`   | Exactly 1.2.3             |
| `"^1.2"`    | >=1.2.0, <2.0.0           |
| `"~1.2"`    | >=1.2.0, <1.3.0           |
| `">=1.0"`   | 1.0.0 and above           |
| `"*"`       | Any version               |

## Lock Files

After resolving dependencies, Mortar writes a `mortar.lock` file:

```bash
# Generate or update the lock file
mortar deps lock

# Install dependencies from lock file
mortar deps install

# Update all dependencies
mortar deps update

# Update a specific dependency
mortar deps update zlib
```

The lock file should be committed to version control to ensure reproducible builds across all environments.

## Dependency Tree

Inspect the resolved dependency graph:

```bash
mortar deps tree
```

Example output:

```
my-app v1.0.0
  zlib v1.3.1
  openssl v3.2.1
    libcrypto v3.2.1
    libssl v3.2.1
  sqlite v3.45.2
```

## Conditional Dependencies

Dependencies can be platform-specific:

```toml
[dependencies.linux]
io-uring = "0.6"

[dependencies.macos]
dispatch = "1.0"

[dependencies.windows]
win32-api = "0.9"
```

> Use `mortar deps check` to verify all dependencies can be resolved without actually downloading them. This is useful in CI pipelines to catch version conflicts early.
