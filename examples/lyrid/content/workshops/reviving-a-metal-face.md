+++
title = "Reviving a Metal Face"
date = "2026-04-26"
description = "Turn smoke proofs of a forgotten foundry face into a clean, spaced digital revival — ethics, drawing, and spacing."
[extra]
instructor = "Ana Lidström"
format = "Bench · half day"
slot = "Sun 13:00–16:30"
level = "Some drawing helps"
+++

A revival is not a trace. In this half-day bench you take a set of high-resolution smoke proofs from a nineteenth-century Antwerp foundry — lent by the city archive for the weekend — and rebuild a working alphabet that honours the metal without embalming its every nick.

<!-- more -->

## Where revivals go wrong

The tempting mistake is fidelity to the *print*, not the *punch*. Ink spread, paper bite, and worn type all thicken a letter; copy them and you inherit two centuries of accident. We learn to read past the impression to the intent — then decide, deliberately, which imperfections carry character and which are just damage.

## What we do

- **Read the proofs.** Measure the x-height, cap height, and stress; identify the punchcutter's hand.
- **Draw the control set.** `n o H O a e s g` — get these right and the family follows.
- **Space by rhythm, not by number.** We space to even colour using the classic `nn` / `oo` / `no` control words, not a spreadsheet.

```python
# A rough sidebearing sanity check while you draw
control = "nhonoonno"
for i, glyph in enumerate(control):
    print(glyph, "advance", advances[glyph], "→ even?", is_even_colour(control))
```

You leave with your drawn control set as a `.ufo`, a spacing string proofed at three sizes, and a one-page statement of the choices you made — the document that separates a revival from a photocopy.
