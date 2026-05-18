+++
title = "Primitives"
description = "The values, types, and effects from which everything else is constructed."
date = "2026-05-06"
weight = 2
tags = ["spec", "intro"]
+++

## Values

A *value* is an immutable sequence of bytes with a known length. The
runtime makes no assumption about its interpretation; serialisation is
the caller's responsibility.

| Value kind     | Width        | Notes                                   |
|----------------|--------------|-----------------------------------------|
| Inline         | ≤ 248 bytes  | Stored alongside its key.               |
| Page-backed    | ≤ 64 KiB     | Stored in a private page.               |
| Extent-backed  | up to 1 GiB  | Stored in a multi-page extent.          |

Values larger than 1 GiB are not addressable. The runtime will reject
mutations that produce one, rather than silently truncate.

## Types

Types are advisory. They are recorded in the catalogue and used by the
query planner, but they do not change how values are stored. A schema
is the union of the type assignments for every key that has ever
existed in a stage.

## Effects

An *effect* is anything that escapes the runtime. Three categories are
recognised.

1. **Journal effects** — append to the persistent log.
2. **Network effects** — send or receive a frame on a peer connection.
3. **Time effects** — read the host clock.

Code that performs no effect is *pure*, and may be evaluated by the
planner at compile time.
