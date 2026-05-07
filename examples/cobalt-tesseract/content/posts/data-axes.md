+++
title = "Data Axes and Tabular Discipline"
date = 2024-05-29
description = "Encoding numeric streams into the Tesseract grid without typographic drift."
[taxonomies]
tags = ["data", "tables", "monospace"]
+++

## Tabular Discipline

The Tesseract grid treats tabular data as a first-order construct, not as a styled paragraph. Numeric columns must align on the decimal axis. Header rows must share the cap height of the body. These constraints are enforced at the component level and verified by snapshot tests.

## Column Alignment

Right-aligned numeric columns are the default. The font feature `tnum` is enabled globally on `td` and `th` elements that carry the `data-numeric` attribute, which guarantees fixed advance width across all glyphs from `0` to `9`.

```css
td[data-numeric],
th[data-numeric] {
    font-variant-numeric: tabular-nums;
    text-align: right;
    font-feature-settings: "tnum" 1;
}
```

## Row Banding

Banding uses a single hairline between rows rather than alternating fills. This keeps the surface flat and prevents the eye from drifting across alternating bands when scanning long lists.

1.  `border-bottom: 1px solid var(--c-border)` on every row.
2.  No background variation between odd and even rows.
3.  The final row drops the border to avoid a doubled edge against the container.

## Sort Indicators

Sort direction is rendered as a single ASCII glyph in the header cell. `^` denotes ascending, `v` denotes descending, and the absence of a glyph denotes unsorted. This avoids loading an icon font for what is fundamentally a state marker.

## Verification Protocol

Each table component is tested against a fixture of three column shapes: short integer, signed decimal, and ISO timestamp. The fixture is rendered at four viewport widths. Drift is reported in pixels and must be zero.

All tabular subsystems aligned.
