+++
title = "Grid Alignment Notes"
description = "How the matrix UI keeps its zircon panels square."
date = "2025-03-09"
+++

The matrix UI is built around a strict twelve-column grid. Every panel, label, and divider lands on a column boundary, and vertical rhythm is fixed at a single eight-pixel unit. This is not a stylistic preference; it is a structural requirement that keeps the underlying lattice predictable when panels are added, removed, or rotated.

Zircon, the source mineral the theme is named after, forms in a tetragonal crystal system. The lattice carries fourfold rotational symmetry along its principal axis, which means that any rotation by ninety degrees maps the structure onto itself. The UI mirrors this property: panels can be rotated in ninety-degree increments without disturbing the layout, because every cell has the same dimensions and every gutter is identical.

```text
gutter      = 16px
column      = 64px
row         = 8px
panel_min   = 4 columns x 8 rows
panel_max   = 12 columns x full height
```

The grid is enforced at three layers. The CSS layout uses a fixed grid template. The component library refuses to render a panel whose dimensions are not multiples of the base unit. The lint pass at build time inspects the generated HTML and reports any element whose computed offset falls between cells.

This redundancy is intentional. A single layer can be bypassed under deadline pressure, and the visual result may look acceptable on a single resolution. The cumulative drift across many panels, however, eventually breaks the rotation invariance, and at that point the grid no longer behaves like a lattice.

The current build passes all three checks. The next pass will introduce a fourth check at the typography layer, where the baseline grid still drifts by one or two pixels under certain font weights.
