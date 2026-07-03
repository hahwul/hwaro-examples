+++
title = "Rhythm"
description = "Line-height and a spacing scale carry the eye down the page the way a metronome carries a hand."
date = "2025-02-11"
weight = 20
toc = true
+++

Rhythm is what measure becomes once you stack lines on top of each other.
A single line can be the right width and still read badly if the lines below
it are crowded so tight the descenders of one row touch the ascenders of the
next — the page starts to hum instead of speak.

<!-- more -->

## Leading

The fix is leading generous enough that each line reads as its own unit
without floating loose from its neighbors: 1.5 to 1.8 times the font size for
body text is the working range, tightening slightly as text gets larger,
because bigger letterforms need proportionally less air between them to stay
legible. Headings can run tighter still — 1.1 to 1.25 — since a heading is
usually short enough that the eye takes it in as a single shape rather than
scanning line by line.

## A fixed scale

Rhythm isn't only about leading. It's also about the vertical spacing between
elements — headings, paragraphs, lists, specimen boxes like this one — and
that spacing should come from a fixed scale, not from whatever margin felt
right in the moment:

```css
:root {
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2.5rem;
}
```

Pick a scale once, early, and spend the rest of the project choosing from it
rather than inventing new values. A page built entirely from five numbers
reads as considered even when the reader couldn't tell you why; a page built
from forty slightly different margins reads as improvised, for the same
reason.

Compare the same paragraph set at two leadings below — same font, same size,
same measure, only the space between the lines has changed.

{{ specimen(sample="Rhythm is what measure becomes once lines start stacking on top of each other, row after row down the page.", family="text", weight="400", style="normal", size=17, leading=20, picas=23, label="IBM Plex Sans 400 — 17/20, lines crowd their neighbors") }}

{{ specimen(sample="Rhythm is what measure becomes once lines start stacking on top of each other, row after row down the page.", family="text", weight="400", style="normal", size=17, leading=29, picas=23, label="IBM Plex Sans 400 — 17/29, each line reads as its own unit") }}

The second box isn't just "more spread out" — it's set at a leading that
matches the working range above, on the same [measure](/chapters/measure/)
this book uses for its own body text. That's not a coincidence; it's the
rule from the previous chapter and this one, applied at once. With the
column and its rhythm settled, the next job is telling the reader which
lines in it matter more — see [Hierarchy](/chapters/hierarchy/).
