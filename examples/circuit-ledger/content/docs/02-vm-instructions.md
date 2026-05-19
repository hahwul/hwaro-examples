+++
title = "VM Instructions"
description = "The full opcode table, gas costs, stack effects, and trap conditions."
date = "2026-05-04"
weight = 2
tags = ["spec", "vm", "opcodes"]
+++

## Instruction format

Every instruction is a single byte opcode optionally followed by an immediate.
The longest instruction in the set is `PUSH32`, which carries a 32-byte immediate
for a total of 33 bytes on the wire.

```text
+--------+-------------------------+
| opcode | immediate (0..32 bytes) |
+--------+-------------------------+
   1 byte
```

## Stack notation

The tables below use the convention `a b c -- x y` where the items to the left
of `--` are popped (rightmost is on top) and items to the right are pushed
(rightmost ends up on top after execution).

## Arithmetic and logic

| Op   | Hex  | Gas | Stack            | Notes                              |
| ---- | ---- | --- | ---------------- | ---------------------------------- |
| NOP  | 0x00 | 1   | --               | no effect                          |
| ADD  | 0x10 | 3   | `a b -- a+b`     | wrapping `u256`                    |
| SUB  | 0x11 | 3   | `a b -- a-b`     | wrapping `u256`                    |
| MUL  | 0x12 | 5   | `a b -- a*b`     | wrapping `u256`                    |
| DIV  | 0x13 | 5   | `a b -- a/b`     | `b == 0` pushes `0`, does not trap |
| MOD  | 0x14 | 5   | `a b -- a%b`     | `b == 0` pushes `0`, does not trap |
| AND  | 0x20 | 3   | `a b -- a&b`     | bitwise                            |
| OR   | 0x21 | 3   | `a b -- a\|b`    | bitwise                            |
| XOR  | 0x22 | 3   | `a b -- a^b`     | bitwise                            |
| NOT  | 0x23 | 3   | `a -- ~a`        | bitwise                            |

## Stack and memory

| Op     | Hex  | Gas | Stack             | Notes                          |
| ------ | ---- | --- | ----------------- | ------------------------------ |
| PUSH1  | 0x30 | 2   | `-- imm`          | 1-byte immediate, zero-extended |
| PUSH32 | 0x3F | 2   | `-- imm`          | 32-byte immediate              |
| POP    | 0x40 | 2   | `a --`            | discard top                    |
| DUP    | 0x41 | 2   | `a -- a a`        | duplicate top                  |
| SWAP   | 0x42 | 2   | `a b -- b a`      | swap top two                   |
| MLOAD  | 0x50 | 3   | `off -- v`        | read 32 bytes from arena       |
| MSTORE | 0x51 | 3   | `off v --`        | write 32 bytes to arena        |

## Crypto

| Op    | Hex  | Gas | Stack            | Notes                                |
| ----- | ---- | --- | ---------------- | ------------------------------------ |
| HASH  | 0x60 | 32  | `off len -- h`   | blake3 hash over arena range         |
| VERIF | 0x61 | 96  | `m sig pk -- 0/1` | ed25519 verify, pushes `1` on success |
| RND   | 0x62 | --  | reserved          | reserved; traps if executed          |

The `RND` opcode is reserved precisely so it cannot exist. A program that
attempts non-determinism by reaching for it gets a `badop` trap and the
journal is rolled back.

## Ledger primitives

| Op       | Hex  | Gas | Stack                   | Effect                            |
| -------- | ---- | --- | ----------------------- | --------------------------------- |
| READACC  | 0x80 | 8   | `id -- bal`             | look up account balance           |
| ADJACC   | 0x81 | 16  | `id delta --`           | adjust balance, signed `i128`     |
| JOURNAL  | 0x90 | 64  | `tag off len --`        | append journal record from arena  |
| EPOCH    | 0x91 | 32  | `-- n`                  | current epoch number              |
| SEAL     | 0xF0 | 128 | `--`                    | seal current epoch, derive merkle |
| HALT     | 0xFE | 0   | `--`                    | terminate normally                |
| REVERT   | 0xFF | 0   | `off len --`            | terminate with reason             |

## Example: deposit

A minimal deposit transaction that credits 100 units to an account, writes a
journal record, and halts.

```text
PUSH32 <account_id>     ; -- id
PUSH1  100              ; -- id 100
ADJACC                  ; --        (balance += 100)
PUSH32 <log_tag>        ; -- tag
PUSH1  0                ; -- tag 0
PUSH1  64               ; -- tag 0 64
JOURNAL                 ; --        (append 64 bytes from arena[0..64])
HALT
```

Worst-case static gas for the snippet above is `2 + 2 + 16 + 2 + 2 + 2 + 64 + 0 = 90`.

## Trap conditions

Any of the following raises a trap, rolls back the journal for the current
transaction, and returns control to the host:

- Undefined or reserved opcode (`badop`).
- Pop from an empty stack (`stack`).
- Push onto a full 1024-entry stack (`stack`).
- Arena access outside `[0, 4 MiB)` (`mem`).
- Gas counter would go negative (`oog`).

There is no recoverable trap. A trapped frame is dead; the host must start
a fresh frame to do anything further.
