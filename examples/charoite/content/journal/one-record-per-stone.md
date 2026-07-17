+++
title = "One record per stone"
date = "2026-06-30"
description = "The catalog's record format: one plain-text file per specimen, small enough to outlive its software"
tags = ["catalog"]
+++

The catalog is six text files. Not a database, not a spreadsheet, not an app: one small TOML record per stone, written by hand, versioned alongside the drawings. This entry documents the format so that the format cannot drift.

<!-- more -->

A record holds only what the drawer cannot: provenance, measurements, and the cutting history. Everything visual belongs to the plate, and the two are linked by nothing more clever than a shared catalog number.

```toml
[specimen]
number   = "CH-014"
name     = "The Kaskad Slab"
locality = "Sirenevyi Kamen, Murun massif"
acquired = 2025-08-14

[cut]
form     = "slab"
faces    = 1
size_cm  = 18
mass_g   = 412

[notes]
fiber      = "broad diagonal current"
inclusions = ["aegirine"]
plate      = "kaskad"
```

{% alert() %}Records are plain text on purpose. Every catalog that died in this keeper's lifetime died of its software, not of its stones.{% end %}

The fields are deliberately few. A record with forty fields gets filled in once and updated never; a record with a dozen gets kept honest. When a stone is re-cut or re-drawn, the old values are not overwritten but moved to a dated line at the bottom of the file, so the record accumulates history the same way the breccia does: visibly, in the seams.
