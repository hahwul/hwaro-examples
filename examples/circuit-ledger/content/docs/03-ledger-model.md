+++
title = "Ledger Model"
description = "Accounts, balances, journals, and how state is sealed at epoch boundaries."
date = "2026-05-08"
weight = 3
tags = ["spec", "ledger", "state"]
+++

## State, in one diagram

```text
   ┌──────────────────────────────────────────────────────────┐
   │                       LEDGER STATE                       │
   │                                                          │
   │   ┌──────────────┐     ┌──────────────┐                  │
   │   │   accounts   │ ──▶ │   balances   │  (flat keyspace) │
   │   └──────────────┘     └──────────────┘                  │
   │           │                                              │
   │           ▼                                              │
   │   ┌──────────────┐     ┌──────────────┐     ┌─────────┐  │
   │   │   journal    │ ──▶ │  epoch seal  │ ──▶ │  root   │  │
   │   │ (append-only)│     │ (merkle, n)  │     │ (32 B)  │  │
   │   └──────────────┘     └──────────────┘     └─────────┘  │
   │                                                          │
   └──────────────────────────────────────────────────────────┘
```

The three primitives are **accounts**, the **journal**, and **epoch seals**.
Everything else in the runtime is bookkeeping on top of these.

## Accounts

An account is identified by a 32-byte id. The id is opaque to the runtime —
how it is derived (public key hash, content hash, host-assigned) is a host
decision. The runtime only requires that ids are stable and unique within
a ledger.

| Field         | Type    | Notes                                    |
| ------------- | ------- | ---------------------------------------- |
| `id`          | `[u8;32]` | host-assigned, opaque to VM            |
| `balance`     | `i128`  | signed; negative balances are permitted  |
| `nonce`       | `u64`   | host-managed counter, not used by VM     |
| `extra`       | `[u8;32]` | host scratch; included in seal hash    |

Balances are `i128` because the runtime takes no position on whether liabilities
are first-class. A bookkeeping ledger uses negative balances heavily; a token
runtime usually doesn't. Both are supported by the same primitive.

## The journal

The journal is an ordered sequence of records. Each record has the shape:

```text
+--------+--------+----------+--------+
| tag    | epoch  | payload  | digest |
| 32 B   | 8 B    | n bytes  | 32 B   |
+--------+--------+----------+--------+
```

- `tag` is the journal namespace, written by the program via the `JOURNAL` opcode.
- `epoch` is the epoch into which the record was written. It is filled by the
  runtime, not by the program.
- `payload` is the raw bytes the program asked to be journalled.
- `digest` is `blake3(prev_digest || tag || epoch || payload)`. The first record
  uses an all-zero `prev_digest`.

Because each digest covers the previous digest, the journal is a tamper-evident
hash chain. The final digest at the end of an epoch is the **epoch root**.

## Epoch seals

An epoch is a host-chosen interval. The runtime does not impose a duration; it
only requires that the host calls `cl_seal_epoch()` at the boundary. The seal
operation:

1. Reads the last journal digest.
2. Hashes it together with the current account merkle root.
3. Writes the resulting `seal_root` into the journal under a reserved tag.

```rust
struct EpochSeal {
    epoch: u64,
    journal_tip: [u8; 32],
    account_root: [u8; 32],
    seal_root: [u8; 32],   // blake3(journal_tip || account_root)
}
```

Two hosts that ran the same inputs against the same runtime version produce
identical `seal_root` values. This is the verification primitive: ship the
seal, replay the inputs, compare.

## Replay

Replaying a ledger from genesis is a single function in the reference
implementation:

```rust
fn replay(genesis: State, inputs: &[Input]) -> EpochSeal {
    let mut s = genesis;
    for input in inputs {
        s = vm::run(s, input).expect("transaction must not trap host");
    }
    s.seal_epoch()
}
```

If your replay produces a different `seal_root` than the one the original host
published, you have a determinism bug — either in the runtime, your bindings,
or the bytecode you fed it. The runtime authors will be very interested in
the first case.

## What the model deliberately omits

- **No tokens.** Balances are bare integers; semantics are a host concern.
- **No transfers.** "Transfer" is just two `ADJACC` calls with opposite signs.
- **No fees.** Gas is metered, but how it is charged or to whom is not in scope.
- **No history queries.** The journal is append-only; reading historical state
  means replaying from a checkpoint. This is intentional.
