+++
title = "Building a Write-Ahead Log: Durability from First Principles"
date = "2026-03-25"
description = "How databases and distributed systems use write-ahead logging to guarantee durability, with a step-by-step breakdown of the WAL lifecycle."
tags = ["databases", "distributed-systems", "durability"]
categories = ["infrastructure"]
+++

# Building a Write-Ahead Log: Durability from First Principles

Every database makes the same fundamental promise: once a transaction is committed, it will survive a crash. The mechanism behind this guarantee is the write-ahead log (WAL). Understanding how it works illuminates the design of PostgreSQL, SQLite, etcd, Kafka, and nearly every system that persists data reliably.

## The Core Problem

Writing data directly to its final location on disk is dangerous. If the process crashes mid-write, the data structure on disk is left in a corrupted state -- partially updated, internally inconsistent, and potentially unrecoverable.

The write-ahead log solves this with a simple rule: **before modifying any data page, first write a description of the change to a sequential log file and ensure that log record reaches durable storage.**

## Step 1: Understanding the WAL Contract

The WAL provides two guarantees:

1. **Durability.** If the log record is flushed to disk, the change can always be recovered, even after a crash.
2. **Atomicity.** A transaction either has all of its log records on disk (committed) or none of them matter (aborted).

The process looks like this:

```
Transaction: UPDATE account SET balance = 500 WHERE id = 42

1. Write log record: {txn=T1, page=P7, offset=120, old=300, new=500}
2. Flush log to disk (fsync)
3. Return "commit" to client
4. Eventually, apply change to actual data page P7
```

The critical insight: step 4 can happen later, lazily, in the background. The log record is the source of truth until the data page is updated.

## Step 2: Log Record Structure

Each WAL record contains enough information to both redo the change (for recovery after a crash) and undo it (for aborted transactions).

```
+--------------------------------------------------+
| LSN: 0x0000A4F0                                  |
| Transaction ID: T1                               |
| Type: UPDATE                                     |
| Page ID: P7                                      |
| Offset: 120                                      |
| Before Image: [300]                              |
| After Image: [500]                               |
| Previous LSN for T1: 0x0000A3C0                  |
+--------------------------------------------------+
```

**LSN (Log Sequence Number):** A monotonically increasing identifier for each log record. This is the clock of the database.

**Before Image:** Needed for undo operations when a transaction aborts.

**After Image:** Needed for redo operations during crash recovery.

## Step 3: The Checkpoint

Without checkpoints, crash recovery would need to replay the entire log from the beginning of time. A checkpoint writes all dirty (modified but not yet flushed) pages to disk and records the LSN at which this happened.

```
Checkpoint at LSN 0x0000A200:
  - Flush all dirty pages to disk
  - Record: "all changes up to LSN 0x0000A200 are durable in data files"
  - Truncate log records before 0x0000A200 (they are no longer needed)
```

After a crash, recovery starts from the last checkpoint, not from the beginning. This bounds recovery time.

## Step 4: Crash Recovery (ARIES Protocol)

The standard crash recovery algorithm, ARIES, has three phases:

**Phase 1: Analysis.** Scan the log from the last checkpoint forward. Determine which transactions were active at crash time and which pages might be dirty.

**Phase 2: Redo.** Replay all log records from the last checkpoint forward, re-applying changes to pages that might not have been flushed. This restores the database to its exact pre-crash state, including uncommitted transactions.

**Phase 3: Undo.** For any transaction that was active but not committed at crash time, walk its log records backward using the "Previous LSN" chain and apply the before images to reverse the changes.

```
Log Timeline:
  ... [Checkpoint] ... [T1 begin] [T1 update] [T2 begin] [T2 update] [T1 commit] [CRASH]

Recovery:
  Redo:  replay T1 update, T2 update
  Undo:  reverse T2 update (T2 was not committed)
  Result: T1 changes preserved, T2 changes rolled back
```

## Step 5: WAL in Practice

Different systems implement the WAL concept with variations suited to their needs:

**PostgreSQL:** Uses a WAL with full-page writes after each checkpoint to prevent torn page corruption. WAL records are also used for streaming replication to replicas.

**SQLite:** Implements WAL mode as an alternative to its default rollback journal. In WAL mode, readers never block writers because reads use a snapshot of the database at a point-in-time.

**etcd / Raft:** The Raft consensus log is effectively a distributed WAL. Entries are proposed, replicated to a quorum of nodes, then applied to the state machine.

**Apache Kafka:** The commit log is the database. There are no separate "data pages" -- the log itself is the primary storage format, and consumers read directly from it.

## Performance Considerations

The WAL's sequential write pattern is its greatest performance advantage. Disks -- both spinning and solid-state -- handle sequential writes far better than random writes.

Key tuning parameters:

- **fsync frequency.** Fsyncing every commit is safest but slowest. Group commit batches multiple transactions into a single fsync.
- **WAL buffer size.** Larger buffers reduce the frequency of writes to disk but increase the amount of data at risk during a crash.
- **Checkpoint interval.** More frequent checkpoints reduce recovery time but increase I/O load during normal operation.

The write-ahead log is not a modern invention. It has been the standard approach to durability since the 1970s, refined through decades of production experience. Understanding it is not optional for anyone who builds or operates systems that must not lose data.
