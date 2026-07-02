+++
title = "Content-addressed caching"
description = "How maru builds a cache key from content, dependencies, and toolchain — and how to share it across a team."
date = "2025-05-27"
weight = 3
toc = true

[extra]
node = "cache:resolve"
+++

The heart of maru is a simple rule: a task that has run before with the same
inputs never needs to run again. The trick is defining "the same" precisely
enough to be safe and loosely enough to be useful.

<!-- more -->

## What goes into a key

For each task, maru computes a cache key by hashing, in order:

1. The exact bytes of every file matched by `inputs`.
2. The literal `cmd` string, after variable expansion.
3. The cache keys of every task this one depends on.
4. The pinned toolchain digest and the declared environment allowlist.

The hash is BLAKE3, chosen because it is fast enough to key large trees without
becoming the bottleneck. The result is a content
address: two builds with the same key are, by construction, the same build.

```sh
maru explain test
# key   blake3:7c0e…a91d
# ├─ inputs      build/app  (blake3:22ab…)  tests/*.txt (3 files)
# ├─ depends-on  compile    (blake3:9f31…)
# └─ toolchain   cc 14.2    (blake3:0b7d…)
```

## Why timestamps are ignored

Timestamp-based tools rebuild when a file's modification time is newer than its
output, which is wrong in both directions: touching a file with no real change
forces a rebuild, and restoring an old file from version control can *skip* a
needed one. Content addressing has neither failure mode. Checking out a branch,
generating a file that happens to be byte-identical, or moving the tree to a new
machine all leave the keys unchanged.

## Sharing the cache

Because a key depends only on content, the entry your teammate produced is the
entry you would have produced. Point maru at a shared cache and it will pull
results instead of recomputing them:

```toml
[cache]
dir    = ".maru/cache"
remote = "https://cache.maru.build/team-atlas"
push   = "ci-only"   # local builds read the remote; only CI writes to it
```

A cold checkout on a new laptop then "builds" in seconds — every task is a cache
hit downloaded from the remote. Run `maru cache stats` to see your hit rate and
`maru cache gc --keep 20d` to prune entries older than twenty days. Nothing about
correctness depends on the cache being warm; it is pure acceleration on top of a
graph that would produce the same result either way.
