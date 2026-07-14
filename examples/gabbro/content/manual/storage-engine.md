+++
title = "Storage engine"
description = "The on-disk format: copy-on-write pages, the write-ahead log, checkpoints, and compaction."
date = "2025-06-24"
weight = 4
toc = true
[extra]
section_label = "File Formats Manual"
+++

A gabbro database is a single file. The first two pages are a double-buffered
header holding the current root pointer, the version counter, and a checksum; the
rest of the file is a pool of fixed-size pages that make up the copy-on-write
B+tree and its free list.

<!-- more -->

## page layout

The default page size is 4&nbsp;KB, chosen to match common filesystem blocks. Each
page carries a small header — page type, version stamp, and a CRC32C — followed by
its payload. Interior pages hold sorted key prefixes and child page numbers; leaf
pages hold keys and inline values, spilling oversized values to overflow pages
chained off the leaf.

Because writes copy pages rather than mutating them, the version stamp on a page is
the transaction that created it. This is what lets a snapshot decide, cheaply,
whether a page belongs to its view.

## the write-ahead log

A commit does not immediately rewrite the header. Instead it appends its new and
modified pages to a write-ahead log and writes a commit record naming the new root.
Only at a checkpoint are those pages folded back into the main file and the header
flipped to the newer of its two copies.

```c
/* force pending WAL pages into the main file and truncate the log */
gb_checkpoint(db);

/* tune the automatic checkpoint threshold (in pages) */
gb_config(db, GB_WAL_LIMIT, 2048);
```

If the process crashes, the next `gb_open()` finds the last valid commit record in
the log, verifies its checksums, and replays it. A torn or partial tail is
discarded, so recovery always lands on a committed version — never a half-written
one.

## compaction and the free list

When a snapshot closes, the versions it pinned may become unreachable. Compaction
walks the free list and returns those pages for reuse; if the tail of the file is
entirely free it truncates, shrinking the database on disk. Compaction is
incremental and runs inside ordinary commits, so there is no stop-the-world pause.

```c
/* reclaim space eagerly, e.g. after a large delete sweep */
gb_compact(db, GB_COMPACT_TRUNCATE);
```

The one thing that stalls reclamation is a long-lived reader: a page cannot be
freed while any open snapshot might still read it. See
[snapshots](../../manual/snapshots/) for how to keep reader lifetimes short. The full call
list lives in the [API reference](../../manual/api-reference/).
