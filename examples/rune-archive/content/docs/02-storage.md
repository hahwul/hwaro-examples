+++
title = "Storage Layer"
description = "On-disk layout, journal semantics, and the compaction loop."
date = "2026-03-08"
weight = 2
tags = ["spec", "storage"]
+++

## On-disk layout

The data directory contains three kinds of file. Names are conventional; the
runtime resolves files by their extension and ignores the basename.

```
data/
├── 00000001.log    # journal segments, append-only
├── 00000002.log
├── 00000001.idx    # offset → record indices
├── 00000002.idx
└── snapshot.bin    # most recent compacted state
```

Segments are immutable once sealed. The runtime guarantees that a segment
written by version N can be read by version N+1; the inverse is not
guaranteed.

## Journal semantics

Writes are applied in two phases: first to the active log segment, then to
the in-memory state. A crash between the two phases is recoverable by
replaying the unrecovered tail of the segment at startup.

```c
int journal_append(journal_t *j, record_t *r) {
    if (segment_full(j->head)) {
        if (segment_seal(j->head) < 0) return -1;
        if (segment_rotate(j) < 0)     return -1;
    }
    return segment_write(j->head, r);
}
```

The default segment ceiling is 64 MiB. Operators may tune this with
`storage.segment_size_max`, but should not lower it below 1 MiB; the index
overhead grows quadratically as segments shrink.

## Compaction

A background loop coalesces sealed segments older than the configured
retention window into a single snapshot. Compaction is opportunistic — it
yields the CPU readily and never blocks foreground writes.
