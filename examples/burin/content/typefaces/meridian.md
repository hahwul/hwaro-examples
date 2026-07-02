+++
title = "Meridian"
date = "2026-03-01"
description = "A wide display capital set redrawn from the title cartouche of an 1822 coastal survey map, cut large enough to be legible pinned to a wall from across a room."
tags = ["capitals", "display", "map-lettering"]
slug = "meridian"
template = "typeface"
[extra]
catalog_no = "05"
source_type = "Map lettering"
source_detail = "Coastal survey map title cartouche, engraved by the Ordnance drafting office, 1822"
year_source = "1822"
classification = "Display capitals, extended width"
styles = "Regular"
license = "Desktop and web, studio license, up to 4 seats"
specimen_word = "MERIDIAN"
+++

The fifth cut in the catalogue is the widest letterform I've revived so far, taken from the title cartouche of an 1822 coastal survey map that was meant to be read pinned to a wall from several paces away rather than held in the hand. Survey office engravers of the period cut their titling wide and open on purpose, because a chart destined for a captain's cabin or a harbor office had to announce itself at a glance, not reward close reading.

<!-- more -->

Meridian keeps that extended proportion and the generous, almost architectural spacing between letters that made the original cartouche legible from across a room, which makes it the least text-friendly and most purely decorative typeface Burin has released.

## Source

The map itself is a coastal survey sheet produced by an Ordnance drafting office in 1822, credited to the office rather than to a named individual engraver, which was standard practice for government survey work of the period. The title cartouche runs the full width of the sheet's top margin, cut in a single consistent hand that suggests one engraver completed the whole title in a single sitting rather than several drafters dividing the letters between them.

## Why the width is the whole point

Most historical titling faces get compressed when they're digitized, because compressed capitals fit more comfortably into a modern web layout. I kept Meridian at its original extended width instead, since compressing it would have erased the exact quality that made the source legible at distance in the first place — the wide counters and generous side-bearings are functional, not decorative, even though they read as ornamental now that the practical need for wall-distance legibility is gone.

## Where it wants to be used

Meridian is built for a single line at a large size: a masthead, a section-opening title, the top of a specimen sheet like this one. It was never meant to set more than a handful of words at once, and pushed into a paragraph its wide counters start to feel like gaps rather than letters.

```css
.masthead-title {
  font-family: "Meridian", ui-monospace, monospace;
  letter-spacing: 0.08em;
  font-size: clamp(2rem, 6vw, 4.5rem);
}
```
