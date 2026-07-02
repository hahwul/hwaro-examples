+++
title = "Screens"
description = "A typeface set for a printed page and a typeface set for a phone in direct sun are solving different problems."
date = "2025-08-27"
weight = 60
toc = true
+++

Every rule in this book was true for print first. Screens inherited them, but
screens also introduced problems paper never had: variable ambient light,
variable viewport width, variable pixel density, and a reader who might be
holding your page a foot from their face or across a kitchen counter.
Typography for the web-reading age has to answer to all of that at once,
which is a harder brief than "look good on the specimen sheet."

<!-- more -->

## Fluid type with clamp()

The most direct fix is fluid type: sizing that scales continuously with the
viewport instead of jumping between a fixed handful of breakpoints. CSS's
`clamp()` takes a minimum, a preferred value tied to viewport width, and a
maximum, and lets the browser pick the right number for the screen it's
actually rendering on:

```css
h1 {
  font-size: clamp(2.5rem, 1.8rem + 3.5vw, 5rem);
}
```

Below 2.5rem the headline stops shrinking, so it never goes illegible on a
small phone. Above 5rem it stops growing, so it doesn't turn into a poster on
an ultrawide monitor. Everything in between scales smoothly, which matters
more than either endpoint — a page that resizes in visible steps feels
unfinished in a way a page that resizes continuously never does.

{{ specimen(sample="On a phone in sun glare, a headline earns its size.", family="display", weight="600", style="normal", size=28, leading=32, picas=23, label="Spectral 600 — near the clamp() minimum, 2.5rem") }}

{{ specimen(sample="Say it like you mean it.", family="display", weight="600", style="normal", size=48, leading=52, picas=23, label="Spectral 600 — near the clamp() maximum, 5rem") }}

## What print never had to do

Screen reading also means giving up control print never had to give up:
a reader's own font-size preference, their browser's minimum, their dark
mode or reduced-motion setting. The scale, the leading, and the spacing tokens
from the chapters before this one all use relative units for exactly that
reason — not because rem and vw are fashionable, but because a page that
respects the reader's settings is the only kind of page that stays readable
somewhere you'll never get to test it. That's also the whole book, worked
backward: [restraint](/chapters/restraint/) in the palette, [weight](/chapters/weight/)
instead of color for emphasis, a [measure](/chapters/measure/) and a
[rhythm](/chapters/rhythm/) that hold on any screen willing to run the math.
