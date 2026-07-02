+++
title = "Features"
description = "What ships in the vector toolchain: the embedded engine, schema migrations, the query REPL, and the sync relay."
+++

Vector is one binary that wraps four things most stacks buy separately: an
embedded storage engine, a schema migration tool, an interactive query REPL,
and a peer-to-peer sync protocol. Everything below ships in the same download
— there is no plugin marketplace and no paid tier gating a core command.

## Storage engine

The engine is a copy-on-write B-tree with a write-ahead log, compiled to a
single static library with no runtime dependencies beyond libc. It opens a
database with one call and hands back a handle that is safe to share across
threads inside the same process.

```c
#include <vector.h>

vc_db *db;
vc_open("./devices.vec", VC_CREATE, &db);
vc_exec(db, "insert into readings (device_id, ts, value) values (?, ?, ?)",
        "42", now(), "21.4");
```

Reads never block writes and writes never block reads: every transaction sees
a consistent snapshot taken at its start, and old snapshots are reclaimed only
once nothing references them.

## Schema migrations

Schema changes live in `.vx` files, plain text, checked into your repository
next to the code that depends on them. `vector schema apply` runs any
migrations that have not yet been applied to the target file and records the
revision in the database itself, so a device that has been offline for six
months still catches up correctly the next time it starts.

```bash
$ vector schema plan ./schema.vx
0007_add_device_index  →  create index on readings(device_id, ts)
1 migration pending. Run `vector schema apply` to apply it.
```

## Query REPL

`vector shell ./devices.vec` opens an interactive prompt against a local
database file, with tab completion over table and column names and a `.explain`
command that prints the query plan instead of running it. Anything you type
there is valid SQL you can paste directly into application code or a `.vx`
migration.

## Sync relay

Two vector databases can reconcile directly over a LAN with `vector sync peer
HOST:PORT`, or through the hosted relay when the devices are not on the same
network. The relay never reads your rows — it forwards signed, encrypted log
segments between peers and stores nothing beyond a cursor position per device.
Conflicts resolve deterministically by a last-writer-wins rule scoped to each
column, so two offline edits to the same row merge instead of clobbering
each other. Relay bandwidth is what the [pricing](/pricing/) plans meter —
the engine above is free at any scale.
