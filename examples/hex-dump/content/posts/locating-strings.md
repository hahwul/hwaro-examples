+++
title = "Locating Strings in a Stripped Binary"
date = "2026-04-22"
tags = ["binary", "strings"]
categories = ["analysis"]
description = "Printable runs reveal more than symbol tables when symbols are gone."
+++

A stripped binary has no symbol table, but it still contains every error message, format string, and embedded constant the compiler placed in the read-only data segment. Locating these runs is the fastest way to orient yourself in an unfamiliar executable.

## Definition

A string in this context is any sequence of four or more consecutive printable bytes terminated by a null. The lower bound of four filters out incidental ASCII appearing inside packed data; longer thresholds miss short identifiers like file extensions and protocol verbs. A run of seven or more captures most useful strings without producing excessive noise.

## Layout

In a typical ELF or Mach-O binary, strings live in a section named `.rodata` or `__cstring`. The section is page-aligned, marked read-only, and occupies a contiguous range. Once you locate the section header you can extract its offset and length and walk the bytes directly without scanning the rest of the file.

## Encoding

Plain ASCII is the common case, but modern binaries also embed UTF-8 and UTF-16 strings. UTF-8 looks identical to ASCII for the printable subset and requires no special handling. UTF-16 reads as alternating bytes with a zero in every other position; a scanner that ignores zeros will recover the visible characters.

## Cross-References

A string by itself is a clue, not an answer. The address of each string is referenced from somewhere in the code segment, usually as an immediate value loaded into a register. Recording the file offset of every string and then searching the code segment for matching addresses produces a map of which functions emit which messages. This map is often enough to identify the high-level structure of the program without ever disassembling a full function.
