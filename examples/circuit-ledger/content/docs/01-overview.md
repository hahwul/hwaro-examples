+++
title = "Overview"
description = "What the runtime is, what it isn't, and the contract it makes with hosts."
date = "2026-05-01"
weight = 1
tags = ["spec", "vm"]
+++

## What it is

Circuit Ledger is two artifacts shipped together:

1. A deterministic stack-based virtual machine (the **VM**), with 128 opcodes
   defined and 128 reserved for future revisions.
2. An append-only, merkle-sealed record format (the **journal**), into which
   every state mutation produced by the VM is written.

The two are tied together by one rule, repeated frequently in this document:

> Given identical inputs, every host running the same runtime version must
> produce a byte-identical journal. There are no exceptions to this rule.

## What it isn't

Circuit Ledger is **not** a blockchain, **not** a database, **not** a consensus
layer, and **not** an orchestration runtime. It does not gossip, it does not
elect leaders, and it has no opinion on how transactions reach it. If you need
those, wrap the runtime in something that provides them.

## The host contract

A host application gives the runtime three things:

| Resource          | Provided by host          | Mutable by VM |
| ----------------- | ------------------------- | ------------- |
| Bytecode buffer   | `cl_bytes`                | no            |
| Input record      | `cl_bytes`                | no            |
| Scratch memory    | `cl_arena` (≤ 4 MiB)      | yes           |
| Account store     | `cl_store` (callback set) | yes (via VM)  |

The VM never allocates from the global heap, never reads a clock, never opens
a file descriptor. Everything it needs must arrive through the host contract.

## Execution shape

A program runs to completion or it traps. There is no preemption, no thread
of execution beyond the single VM frame, no async. Termination is one of:

```text
+---------------------+-----------------------------------------+
| outcome             | meaning                                 |
+---------------------+-----------------------------------------+
| HALT (ok)           | program reached an explicit HALT opcode |
| HALT (revert)       | program reverted; journal is rolled     |
|                     | back, gas already burned is kept        |
| TRAP (oog)          | gas counter reached zero                |
| TRAP (badop)        | undefined or reserved opcode            |
| TRAP (stack)        | underflow or overflow on the stack      |
+---------------------+-----------------------------------------+
```

## Gas model

Every opcode declares a static gas cost. There are no dynamic costs that depend
on values popped at runtime — only on bytecode shape. This makes the worst-case
cost of any program calculable at load time.

```rust
// Reference cost lookup, taken from `src/vm/cost.rs`.
pub const fn gas(op: Op) -> u64 {
    match op {
        Op::Nop      => 1,
        Op::Push(_)  => 2,
        Op::Add      => 3,
        Op::Hash     => 32,
        Op::Journal  => 64,
        // ...
        _            => panic!("undefined opcode"),
    }
}
```

The number 64 for `Journal` is not arbitrary: every journal write costs more
than every non-journal opcode combined in a 64-instruction window. This biases
programs toward computing first and writing last.

## Determinism, restated

The runtime forbids: floating point arithmetic, syscalls, threads,
non-deterministic iteration order, system clocks, and any host callback that
is not part of the documented store interface. Hosts that violate this lose
the determinism guarantee and the journal becomes unverifiable.
