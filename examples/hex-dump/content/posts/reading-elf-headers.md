+++
title = "Reading ELF Headers by Hand"
date = "2026-04-15"
tags = ["binary", "elf"]
categories = ["analysis"]
description = "The first sixty-four bytes of an ELF file describe the rest of it."
+++

An ELF binary opens with a fixed-size header that points to every other structure in the file. Once you can read the first sixty-four bytes by sight, the rest of the format becomes navigable without a parser.

## Magic and Class

Bytes zero through three are `7f 45 4c 46`. The `7f` is a non-printable sentinel; the next three are the ASCII letters `ELF`. Byte four is the class: `01` for thirty-two bit, `02` for sixty-four bit. Byte five is the data encoding: `01` for little-endian, `02` for big-endian. Byte six is always `01` and indicates the current ELF version.

Bytes seven through fifteen are reserved padding. Some toolchains write the OS ABI into byte seven, but most leave it at zero. A non-zero value here is a useful fingerprint when distinguishing binaries from different build environments.

## Type and Machine

Byte sixteen holds a two-byte type field. The values `02` and `03` correspond to executable and shared object respectively; on a sixty-four bit little-endian system the bytes appear as `02 00` or `03 00`. Byte eighteen holds the machine field. `3e 00` indicates x86-64; `b7 00` indicates AArch64.

## Offsets

The program header table offset begins at byte thirty-two on a sixty-four bit binary. Read eight bytes, swap for little-endian, and you have the file offset where the program headers start. The section header table offset follows at byte forty. Bytes forty-eight through sixty-three give entry sizes and counts for both tables.

## Verification

Cross-check the offsets by jumping to them. The first program header should begin with a four-byte type field; the most common value is `01 00 00 00`, indicating a loadable segment. If the offset lands on bytes that do not parse as a valid header, the file is either truncated or the header was hand-edited.
