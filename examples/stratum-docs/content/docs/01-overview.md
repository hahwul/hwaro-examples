+++
title = "Overview"
description = "How the system is shaped, and what it is not."
date = "2026-05-04"
weight = 1
tags = ["intro"]
+++

## In one paragraph

Stratum is a layered runtime. The lowest layer is a small kernel of
primitives — values, types, and effects. Each successive layer is built
exclusively from the layers below it, never from the layers above. The
result is a system in which any layer can be understood in isolation,
without reaching for context that does not yet exist.

## What you get

- A predictable execution model with no implicit globals.
- A single binary, statically linked, that runs on every host the team
  has paid for.
- Documentation that maps one-to-one with the source.

## What it is not

Stratum is **not** a framework, in the sense that it does not call your
code. You call it, in the order you choose, and you decide what happens
on either side of each call.

It is also not a replacement for a database. It will hold a working set
in memory and journal mutations to disk, but it expects a system of
record to live elsewhere.

## A small example

```rust
let stage = stratum::stage::open("./data")?;
let txn   = stage.begin()?;
txn.put(b"hello", b"world")?;
txn.commit()?;
```

That is the smallest useful program. Every other example in the reference
is an elaboration on this shape.
