+++
title = "Cairn"
description = "Firmware release notes for an open split-keyboard with layer scripting"
template = "home"
+++

Cairn is open firmware for split ergonomic keyboards. It ships as a single
static binary you flash over USB or the bootloader of your choice, and it treats
your keymap as a program rather than a spreadsheet. Layers, tap-holds, combos,
and macros are all written in a small, readable scripting language that compiles
to a compact bytecode the board runs at scan time.

The project began as a weekend fork that replaced a rigid keymap array with a
handful of `.layer` scripts. It grew into a full runtime: a deterministic matrix
scanner, a debouncer you can tune per switch, an event pipeline you can hook,
and a scripting layer expressive enough to describe home-row mods, leader
sequences, and one-shot layers without touching C.

Everything here is fictional but plausible — a changelog written the way good
firmware projects write them: specific, dated, and honest about what broke.
Every release below is a stone in the cairn; the wider the slab, the more it
carried.
