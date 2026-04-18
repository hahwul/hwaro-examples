+++
title = "Build Caching"
weight = 1
date = 2025-06-10
+++

# Build Caching

Mortar provides both local and remote caching to avoid redundant compilation. Caching can reduce incremental build times by 80-95% on typical projects.

## How Caching Works

Mortar computes a cache key for each compilation unit based on:

- Source file content hash
- Compiler flags and defines
- Included header file hashes
- Compiler version
- Target platform

If a matching cache entry exists, Mortar reuses the cached artifact instead of recompiling.

## Local Cache

Local caching is enabled by default and stores artifacts on disk:

```toml
[build]
cache = true
cache_dir = ".mortar/cache"
cache_max_size = "2GB"
```

Manage the local cache:

```bash
# Show cache statistics
mortar cache stats
# Cache: 847 entries, 234 MB used, 2.0 GB limit

# Clean expired entries
mortar cache clean

# Purge the entire cache
mortar cache purge
```

## Remote Cache

For teams, Mortar supports shared remote caches:

```toml
[cache.remote]
enabled = true
url = "https://cache.example.com/mortar"
auth = "token"
token_env = "MORTAR_CACHE_TOKEN"
push = true       # Upload new artifacts
pull = true       # Download cached artifacts
```

The remote cache is checked after the local cache misses. Build artifacts are uploaded to the remote cache after successful compilation.

## Cache Keys

Mortar generates deterministic cache keys. You can inspect them:

```bash
mortar cache key src/main.c
# src/main.c -> sha256:a1b2c3d4e5f6...

mortar cache key --all
# src/main.c    -> sha256:a1b2c3d4...
# src/utils.c   -> sha256:f6e5d4c3...
# src/parser.c  -> sha256:b2a1c3d4...
```

## Cache Invalidation

Cache entries are invalidated when any input to the cache key changes. Common causes:

| Change                    | Effect                          |
|--------------------------|---------------------------------|
| Source file modified      | Recompile that file             |
| Header file modified      | Recompile all including files   |
| Compiler flags changed    | Recompile all affected targets  |
| Compiler version changed  | Full rebuild                    |
| New dependency version    | Recompile dependent targets     |

Force a full rebuild without cache:

```bash
mortar build --no-cache
```

> For CI pipelines, consider using the remote cache with `push = true` on your main branch builds and `push = false` on pull request builds. This ensures the cache stays clean while PRs still benefit from cached artifacts.
