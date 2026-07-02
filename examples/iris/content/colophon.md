+++
title = "Colophon"
description = "How the studies are drawn, measured, and hung — the method behind the wall."
+++

Every study in *iris* is one figure drawn as a single continuous line, and then
stored not as a picture but as a path — a short string of coordinates and curve
commands that a browser retraces at load. There are no image files here. The
seated back, the folded hands, the falling cloth: each is a few hundred bytes of
`d` attribute, redrawn fresh in your device's own pixels.

## the rule

One pose, one unbroken line. The pen — really the cursor — touches down once and
does not lift until the figure closes on itself. Contours a normal drawing would
break into separate strokes are instead woven together, so the line is forced to
travel through the body to reach the next edge. Those enforced detours are what
give the flat outline its weight.

## the measurement

The caption beneath each frame is the one number the drawing cannot fake: the
exact length of its path, in the drawing's own coordinate units. The browser
computes it directly from the geometry.

```js
// the signature: measure the one unbroken path
const path = document.querySelector(".stroke");
const units = Math.round(path.getTotalLength());
caption.textContent = `${units} units · one continuous path`;
```

At build time the same figure is measured by flattening every cubic curve into a
dense run of straight segments and summing their lengths — the two numbers agree
to within a unit. A shorter path is not a simpler drawing; it is a better-planned
route. [*Seated*](@/figures/seated.md) is the shortest study at 655 units and
took the most attempts; the [full wall](@/figures/_index.md) is ordered by the
date each line was finished.

## the wall

The ground is a deep charcoal-violet, chosen so a pale line reads the way
silverpoint reads on toned paper — present but never bright. The chrome is kept
to almost nothing: thin rules, wide margins, lowercase labels, and the site name
set small in the corner like a signature in pencil. Nothing on the wall competes
with the line.

## the type

Set entirely in **Manrope**, at a light weight for the headings so the letters
keep the same even pressure as the drawn line. The frames sit on a fluid grid
that holds from a phone in portrait to a wide screen without reflowing the
studies out of proportion.
