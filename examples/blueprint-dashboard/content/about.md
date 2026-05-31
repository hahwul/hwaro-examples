+++
title = "Drawing Notes"
description = "The drafting conventions and colophon behind the Blueprint Studio dashboard."
tags = ["notes", "conventions"]
categories = ["meta"]
+++

Blueprint Studio is a dashboard drawn the way an engineer drafts a sheet: a measured grid, hairline rules, and every value annotated with its tolerance. Instead of charts that float, figures sit inside a drawing frame with a proper title block, registration marks, and a revision history that says who changed what and when.

The domain is structural. Modules are load-bearing, numbers carry units, and a metric is never reported without its tolerance band. A reading "within spec" is the resting state; anything outside it raises an RFI and a revision.

## drafting conventions

1. **Hairlines over fills.** Depth comes from solid 1px cyan and white strokes, never from a colour wash. The background grid is a tiled line pattern, not a blend.
2. **Everything is dimensioned.** Spans, clearances, and loads are called out with dimension lines and arrowheads so a value can be traced back to the geometry it describes.
3. **Revisions are first-class.** Each sheet keeps a rev table. Sign-off is the only path to "approved".

## colophon

- **Engine:** Hwaro, a static site generator compiled in Crystal.
- **Type:** Archivo for the nameplate, Space Mono for dimensions and labels.
- **Palette:** Blueprint navy `#0d2747`, cyan `#5ec6e6`, pale ink `#cfe8f5`, revision red `#e8746a`.
- **Output:** Flat static sheets, no client-side rendering, no gradients.
