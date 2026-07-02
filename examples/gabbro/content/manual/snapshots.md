+++
title = "Snapshots"
description = "How MVCC snapshots give every reader a stable, point-in-time view of the store."
date = "2025-04-02"
weight = 2
toc = true
[extra]
section_label = "Library Functions Manual"
+++

A snapshot is a frozen view of the whole database as it existed at one instant.
Open one and every read you make through it sees exactly those bytes, no matter how
many writes commit afterward. This is the core of gabbro: readers never take locks,
never block the writer, and never observe a partial commit.

<!-- more -->

## the multi-version model

Internally the store is a copy-on-write B+tree. A write never overwrites a live
page; it copies the pages along the path from leaf to root and publishes a new root
pointer in a single atomic step. Old roots remain valid, so a snapshot is nothing
more than a pinned root plus the version stamp that was current when you opened it.

Because pages are immutable once published, a reader holding an old root walks a
perfectly consistent tree. There is no read lock to contend on, which is why scan
throughput stays flat as writers get busier.

```c
gb_snapshot *snap;
gb_snapshot_open(db, &snap);           /* pins the current version */

gb_val v;
if (gb_snapshot_get(snap, gb_str("balance"), &v) == GB_OK)
    printf("balance at snapshot: %.*s\n", (int)v.len, (char *)v.data);

/* another thread may gb_put() here — this snapshot will not see it */

gb_snapshot_close(snap);               /* releases the pinned version */
```

## iterating a snapshot

Cursors are always bound to a snapshot (or to a transaction, which carries its own
implicit snapshot). Seeking positions the cursor at the first key greater than or
equal to the target; `gb_cursor_next()` advances in sorted order.

```c
gb_cursor *cur;
gb_cursor_open(snap, &cur);
gb_cursor_seek(cur, gb_str("user:"));

gb_val k, v;
while (gb_cursor_next(cur, &k, &v) == GB_OK) {
    if (k.len < 5 || memcmp(k.data, "user:", 5) != 0) break;
    handle_user(&k, &v);
}
gb_cursor_close(cur);
```

## lifetime and compaction

A snapshot pins every version at or after the one it references, which means the
store cannot reclaim those older pages until you close it. Long-lived snapshots are
the usual cause of a file that grows faster than expected. Open them late, close
them promptly, and prefer many short snapshots over one that lives for the whole
process. The [storage engine](/manual/storage-engine/) chapter explains how compaction
frees pages once the last snapshot that needs them is gone.
