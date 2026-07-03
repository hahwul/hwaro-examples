+++
title = "maru"
description = "Documentation for maru, an incremental build system with content-addressed caching and hermetic task graphs."
template = "home"

[extra]
pitch = "Build only what changed. Cache by content, not by clock."
install = "curl -fsSL https://get.maru.build | sh"
+++

### Incremental by digest

maru never trusts timestamps. Every task has a cache key derived from the exact
bytes of its inputs, the command it runs, the outputs of the tasks it depends
on, and the pinned toolchain. Change a comment in a file that nothing reads and
maru does nothing. Change one byte that a hundred tasks depend on and maru
rebuilds exactly those hundred tasks, in dependency order, and not one more.

### Hermetic by default

A task sees only what it declares. maru runs each command in a sandbox where the
working tree is a read-only tree of the declared inputs, the environment is
scrubbed to a known allowlist, and the network is off unless you opt in. A build
that passes on your laptop passes in CI because there is nothing left to differ.

### One graph, many machines

The build is a single directed acyclic graph of tasks. Because cache keys are
content addresses, the entry a colleague produced this morning is the entry your
machine would have produced — so maru can pull it from a shared cache instead of
rebuilding. The graph is the contract; the cache is just memoized truth.
