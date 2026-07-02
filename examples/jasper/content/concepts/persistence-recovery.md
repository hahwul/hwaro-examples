+++
title = "Persistence and Recovery"
description = "The write-ahead log, checkpoints, and what happens the moment Jasper reopens after a crash."
weight = 6
date = "2025-11-05"
toc = true
[extra]
tier = "storage"
+++

## Recovery without a supervisor

Because Jasper runs embedded in your process, there is no supervisor restarting a crashed server for you — recovery has to be something `Index::open` does on its own, every time, without an operator watching. It leans on the same write-ahead log described in the index anatomy chapter to make that possible.

Every insert and delete is appended to the WAL before it touches the graph or vector store, and each entry carries a monotonically increasing sequence number. A checkpoint records the sequence number as of the last successful compaction. On a clean shutdown, `close()` flushes the WAL and the process exits with nothing left to replay. On a crash, the next `Index::open` reads the checkpoint, then replays every WAL entry after it back into the graph, so the index ends up exactly where it was at the last `flush()` call — no further back, and never corrupted partway through a write.

<!-- more -->

## Opening a crashed index

```rust
use jasper::{Index, IndexOptions, DistanceMetric};

let opts = IndexOptions::new(768, DistanceMetric::Cosine);

// Safe to call after an unclean shutdown — Jasper replays the WAL
// from the last checkpoint before this returns.
let index = Index::open("catalog.jasper", opts)?;

let report = index.recovery_report();
if report.replayed_entries > 0 {
    println!("replayed {} WAL entries since checkpoint {}",
        report.replayed_entries, report.checkpoint_seq);
}
```

```python
import jasper

# Same recovery path from the Python bindings — open() blocks
# until any pending WAL entries have been replayed.
index = jasper.Index.open("catalog.jasper", dim=768, metric="cosine")

report = index.recovery_report()
if report.replayed_entries > 0:
    print(f"replayed {report.replayed_entries} WAL entries "
          f"since checkpoint {report.checkpoint_seq}")
```

Because replay time scales with how much of the WAL has accumulated since the last checkpoint, applications that call `flush()` frequently recover almost instantly, while ones that batch thousands of inserts between flushes trade faster steady-state writes for a slower reopen after a crash. Snapshotting the whole index directory to object storage on a schedule is the usual complement to this: recovery from a snapshot plus a short WAL replay is faster than reprocessing a source dataset from scratch.
