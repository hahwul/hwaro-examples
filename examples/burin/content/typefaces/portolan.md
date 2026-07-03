+++
title = "Portolan"
date = "2025-02-10"
description = "Roman capitals redrawn from the lettering on a 1749 chart of the Sound, cut for cartouche titles and running heads that need to hold a hairline rule."
tags = ["capitals", "display", "map-lettering"]
slug = "portolan"
template = "typeface"
[extra]
catalog_no = "01"
source_type = "Map lettering"
source_detail = "Chart of the Sound and the Belts, engraved by Adriaen Cuypers, Rotterdam, 1749"
year_source = "1749"
classification = "Display capitals, one weight"
styles = "Regular"
license = "Desktop and web, studio license, up to 4 seats"
specimen_word = "PORTOLAN"
+++

The plate I worked from lives in a maritime archive box labeled only "Sound and Belts, misc., 18th c." — a chart of the strait between Denmark and Sweden, engraved by Adriaen Cuypers in Rotterdam in 1749, its title cartouche lettered directly into the copper before the coastline was even scored in. Cuypers cut his capitals with a steady, almost mechanical taper: thick where the burin entered the plate at speed, thin at the exit stroke, with no attempt to disguise the tool's own rhythm.

<!-- more -->

Portolan keeps that taper as a design feature rather than a flaw to be corrected, which is why the strokes read as slightly restless at small sizes and settle into something closer to inscriptional calm once you set them above 60 points — the size a cartouche title was actually cut to be read at.

## Source

The chart surfaced in a dealer's lot of hydrographic prints sold as "various, water-damaged." Most of the sheet had foxed past legibility, but the cartouche survived clean enough to photograph at high resolution under raking light, the only way to see the plate-mark ridges that steel-facing later smoothed flat on the printed run. I traced sixteen capitals and the ampersand from that single title before the rest of the alphabet had to be extrapolated from Cuypers's other surviving plates held in the same archive.

## Redrawing the taper

Every stroke in Portolan carries a measured taper from a documented thick-to-thin ratio of roughly five to two, checked against four other cartouches from the same decade to confirm the ratio wasn't particular to one worn burin. The counters are cut open rather than closed tight, the way a hand tool naturally leaves them when an engraver is working fast across a title line rather than lingering over a single letterform.

## Where it wants to be used

Portolan is a display face for short spans — cartouche titles, section dividers, running heads that need to hold their own next to a hairline rule. It is not meant to carry a paragraph; set past a sentence, the taper starts to compete with itself and the page gets noisy.

```css
.chart-title {
  font-family: "Portolan", ui-monospace, monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```
