+++
title = "Deploy"
description = "Embedding the runtime in a host application. C, Rust, and Crystal targets."
date = "2026-05-12"
weight = 4
tags = ["spec", "embed", "host"]
+++

## What "deploy" means here

Circuit Ledger is not a service. You do not run it; you link it. "Deploy" in
this chapter means **embedding the runtime as a library** inside an application
that handles transport, persistence, authentication, and everything else that
is not the VM or the journal.

## Linkage

The reference implementation ships three artifacts:

| Artifact            | Target          | Notes                                       |
| ------------------- | --------------- | ------------------------------------------- |
| `libcircuit.a`      | static C lib    | no dynamic deps; `cl_*` C ABI               |
| `circuit_ledger`    | Rust crate      | thin wrapper, re-exports `Vm`, `Store`      |
| `circuit-ledger.cr` | Crystal shard   | wraps `libcircuit.a` via `lib LibCircuit`   |

Everything goes through the same C ABI. The Rust crate and Crystal shard are
convenience layers and add zero overhead beyond a function-pointer indirection.

## The C ABI in eight functions

```c
// circuit_ledger.h — abridged
typedef struct cl_vm cl_vm;
typedef struct cl_store cl_store;

cl_vm*  cl_vm_new(const cl_store* store, uint64_t gas_limit);
void    cl_vm_free(cl_vm* vm);

int     cl_vm_load(cl_vm* vm, const uint8_t* code, size_t code_len);
int     cl_vm_input(cl_vm* vm, const uint8_t* data, size_t data_len);
int     cl_vm_run(cl_vm* vm);                 /* 0 = halt, <0 = trap */

int     cl_seal_epoch(cl_vm* vm, uint8_t out_root[32]);
int     cl_journal_tip(const cl_vm* vm, uint8_t out_digest[32]);
const char* cl_last_error(const cl_vm* vm);   /* never NULL */
```

The error string returned by `cl_last_error` is owned by the VM and stable
until the next call. Copy it if you need it to outlive the next API call.

## Rust embedding

```rust
use circuit_ledger::{Store, Vm};

fn main() -> anyhow::Result<()> {
    let store = Store::in_memory();
    let mut vm = Vm::new(&store, /* gas_limit = */ 10_000);

    vm.load(include_bytes!("../programs/deposit.bin"))?;
    vm.input(&serialize_request())?;

    match vm.run() {
        Ok(()) => {
            let root = vm.seal_epoch()?;
            println!("sealed epoch root: {}", hex::encode(root));
        }
        Err(e) => eprintln!("vm trapped: {e}"),
    }
    Ok(())
}
```

The `Store` trait is the only place the host wires in persistence. The default
`Store::in_memory()` is suitable for tests and replay; production hosts
implement the trait against rocksdb, lmdb, or a custom store.

## Crystal embedding

```crystal
require "circuit_ledger"

store = CircuitLedger::Store.in_memory
vm    = CircuitLedger::Vm.new(store, gas_limit: 10_000)

vm.load(File.read("programs/deposit.bin").to_slice)
vm.input(request_bytes)

case result = vm.run
when CircuitLedger::Halt
  root = vm.seal_epoch
  puts "sealed: #{root.hexstring}"
when CircuitLedger::Trap
  STDERR.puts "trap: #{result.reason}"
end
```

## Sizing

The runtime has a fixed footprint. Numbers below are from the reference
implementation built with `--release` on `x86_64-unknown-linux-gnu`.

| Component        | Size    | Notes                                |
| ---------------- | ------- | ------------------------------------ |
| `libcircuit.a`   | 412 KiB | static, no syscalls                  |
| VM stack         | 32 KiB  | 1024 entries × 32 bytes              |
| Arena (per-frame)| 4 MiB   | cleared at frame start, host-owned   |
| Worst-case heap  | 0 B     | runtime never allocates              |

The "0 B heap" line is not a typo. The reference runtime calls `malloc` zero
times after `cl_vm_new` returns. All scratch memory is bumped in the arena
the host provides.

## What you have to bring yourself

- **Transport.** The runtime takes a byte slice; how it arrived is your problem.
- **Identity.** The runtime verifies signatures via `VERIF`, but does not know
  whose keys those are. Map ids to identities upstream.
- **Persistence.** Implement `cl_store` against whatever store you like.
- **Indexing.** The journal is append-only and unindexed. Build indices in
  your host if you want historical queries.

If you find yourself wanting any of these things to live inside the runtime,
the answer is no, and the chapter you should reread is the [Overview](../01-overview/).
