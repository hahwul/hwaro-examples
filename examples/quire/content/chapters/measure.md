+++
title = "Measure"
description = "How wide a line of text should run, and why both narrow and wide columns fight the reader."
date = "2025-01-14"
weight = 10
toc = true
+++

Measure is the oldest rule in the trade and the one screens break most
casually: the width of a line of text, usually counted in characters rather
than inches, because characters are what the eye actually has to cross.

<!-- more -->

A line that's too narrow forces the eye back to the left margin every four or
five words. That return trip isn't free — each one is a small chance to lose
the thread, and a narrow column multiplies them by every line on the page.
A line that's too wide does the opposite kind of damage: by the time the eye
reaches the right edge, it has to hunt for the start of the next line, because
nothing about the layout tells it where "down and left" actually is. Both
failures feel like "hard reading," and neither is really about the words.

## The working range

The working range is 45 to 90 characters per line, with 60 to 75 as the
comfortable middle — wide enough to carry a real sentence, narrow enough that
the return trip stays cheap. On the web this usually means capping prose
containers in `ch` units, which are defined relative to the current font's
"0" glyph and so scale sensibly with font-size changes:

```css
.prose {
  max-width: 65ch;
}
```

Below, the same paragraph is set twice at the same size and leading — once at
a measure most readers will find cramped, once at a measure built for the
range above. Nothing changed but the width of the box.

{{ specimen(sample="The eye tires fast when a line ends before an argument does; it has to leap back too soon, too often, to keep the thread.", family="text", weight="400", style="normal", size=17, leading=28, picas=13, label="IBM Plex Sans 400 — roughly 30 characters a line") }}

{{ specimen(sample="The eye tires fast when a line ends before an argument does; it has to leap back too soon, too often, to keep the thread.", family="text", weight="400", style="normal", size=17, leading=28, picas=23, label="IBM Plex Sans 400 — roughly 65 characters a line") }}

## It moves with the type

Measure isn't a fixed number of pixels, either — it has to move with type
size. A pull-quote set at 32px and a caption set at 13px need different pixel
widths to land in the same character-count range, which is the whole reason
`ch` exists as a unit in the first place. Set your measure in characters, let
the browser do the pixel math, and the rule holds no matter what the reader's
font-size preference does to your layout.

Once the width is settled, the next question is what happens between the
lines inside it — the subject of [Rhythm](/chapters/rhythm/).
