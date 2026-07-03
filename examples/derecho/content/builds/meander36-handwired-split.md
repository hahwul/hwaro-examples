+++
title = "Hand-Wiring a Split: the Meander36"
date = "2025-11-30"
description = "No PCB, no plate order — a 36-key split ergo wired by hand on FR4, one diode at a time. The wiring diagram, the matrix config, and what an evening of soldering teaches you."
tags = ["split", "low-profile", "hand-wired"]

[extra]
no = "LOG 05"
board = "Meander36 (split ergo)"
switches = "Kailh Choc Sunset (low-profile)"
plate = "FR4"
+++

I had wanted to hand-wire a board for a year and kept talking myself out of it. The Meander36 is a 36-key column-staggered split with no commercial PCB, which meant the only way to build it was by hand — so the decision got made for me. Two FR4 plates cut to the layout, seventy-two switches, seventy-two diodes, and a lot of small, careful joints. This is the most satisfying board I own.

<!-- more -->

## Why hand-wire at all

A hand-wired board is repairable forever. There is no fine-pitch hotswap socket to lift, no proprietary PCB to source when the group buy ends. If a switch dies I desolder two joints and drop in a new one. For a daily driver I intend to keep for a decade, that permanence is the whole appeal.

## The wiring, in order

The matrix is rows and columns. Each switch sits at the crossing of one row and one column, with a diode to stop ghosting. The routine, per half:

1. Bend a diode leg into a hook and solder the cathode (the striped end) to one leg of each switch, down a column.
2. Join the free ends of the diodes along each row into a single row wire.
3. Run a column wire across the other switch legs.
4. Land each row and column on the controller's pins.

The diode direction is the part beginners get wrong. Stripe toward the controller, consistently, every switch. Get one backwards and that key simply never fires.

## Telling the firmware what you built

Hand-wiring means the matrix is whatever you soldered, so the firmware has to match your pins exactly. In QMK that lives in the keyboard config:

```c
// config.h — Meander36 left half
#define MATRIX_ROWS 8   // 4 per half
#define MATRIX_COLS 5
#define MATRIX_ROW_PINS { D4, C6, D7, E6 }
#define MATRIX_COL_PINS { F4, F5, F6, F7, B1 }
#define DIODE_DIRECTION COL2ROW
#define SPLIT_HAND_PIN B5   // high = left, low = right
```

I flashed both halves the same way, then let `SPLIT_HAND_PIN` sort out which was which:

```bash
qmk compile -kb meander36 -km wren
qmk flash -kb meander36 -km wren   # flash left, then right
```

## The verdict

Choc Sunsets on a hand-wired split is a lovely combination — low, light, and quiet, with the columnar layout doing wonders for my wrists after a week of adjustment. It took a full evening and my back ached from hunching over the diodes, but nothing I have built feels this much like mine.
