+++
title = "Why Old Charts Lie Beautifully"
date = "2024-05-02"
description = "Every flat map distorts the round Earth — there is no way around it. A look at projection, the cartographer's deliberate choices, and why the most useful chart is an honest lie."
tags = ["maps", "design", "history"]
authors = ["the-cartographer"]
+++

Here is a fact that should trouble you more than it does: **no flat map of the Earth is true.** Not one. The planet is very nearly a sphere, and a sphere cannot be unrolled onto a flat sheet without tearing, stretching, or shearing it. This is not a failure of skill or instrument. It is a theorem — Gauss proved it — and no future technology will repeal it.

So every chart you have ever read is a lie. The interesting question is not *whether* it lies, but *which* lie its maker chose to tell, and why.

---

## You Cannot Flatten an Orange

Try the experiment with an orange peel. Press it flat and it splits; force the splits closed and the peel buckles. The skin of a sphere simply has more *there* near the equator than a flat plane can hold without distortion creeping in somewhere.

A map **projection** is a rule for committing that unavoidable distortion deliberately, in a controlled way, so that *something* useful is preserved. The cartographer's first decision is the most consequential one on the whole sheet: **what to keep true, and therefore what to sacrifice.**

- **Conformal** projections preserve *angles and shapes* locally — at the cost of area. Mercator is the famous example.
- **Equal-area** projections preserve *area* — at the cost of shape. Continents keep their true size but lean and squash.
- **Equidistant** projections keep *distance* true, but only along certain chosen lines.

You can have any one of these faithfully. You can never have all three at once. The map is a budget, and every projection spends its error differently.

---

## Mercator's Bargain

The chart projection most sailors meet is **Mercator's**, and it is a magnificent piece of deliberate dishonesty. It is conformal: a small shape stays the right shape, and — crucially — a constant compass course draws as a **straight line**. For a navigator ruling a bearing across a chart, that property is worth almost any price.

And the price is steep. To keep angles true, Mercator stretches the map north-south more and more as you leave the equator, by a factor that runs away toward the poles:

```
y = R * ln( tan( π/4 + φ/2 ) )
```

As latitude `φ` climbs, `y` races upward. Greenland swells to the apparent size of Africa, though Africa is some fourteen times larger. Antarctica becomes an endless white wall. The projection cannot even *show* the poles; they sit at infinity, off the top and bottom of every sheet.

> "Mercator did not get the world wrong. He chose, very precisely, which truth to keep — and a navigator with a ruler has thanked him ever since."

---

## The Choices Beneath the Ink

Projection is only the first lie. A working cartographer makes a hundred more, each one a small mercy:

1. **Generalisation.** A real coastline is fractal — infinitely crinkled. The chart smooths it, dropping detail too fine to matter at the chart's scale. The line is *wrong* on purpose, so it can be *legible*.
2. **Selection.** Show every rock, sounding, and eddy and you produce noise, not a chart. The cartographer leaves things out so the things that remain can be seen.
3. **Symbolisation.** A lighthouse is not a yellow star; a wreck is not a tiny dotted hull. These are agreed fictions, defined in the chart's legend, standing in for things no symbol could literally resemble.
4. **Exaggeration.** A narrow but vital channel may be drawn slightly wider than scale allows, simply so it does not vanish — because a buoy you cannot see is a buoy that cannot save you.

Every one of these is a departure from literal truth made in service of a *higher* truth: that the chart be safe, clear, and usable at a glance by someone tired and afraid.

---

## The Honest Lie

This is why old charts are beautiful rather than merely accurate. Their beauty *is* their honesty about their own distortion. The frank stretch of the latitude scale, the italic soundings admitting exactly where the lead touched and nowhere else, the smoothed coast that never pretends to count every pebble — all of it confesses, openly, *this is a model, not the thing itself.*

A good chart never claims to be the sea. It claims only to be the most useful possible lie about the sea — and it tells that lie so well, and so beautifully, that generations of sailors have bet their lives on it and come safely home.

That is the cartographer's quiet art: to distort the world *on purpose*, *with care*, and *in the open* — until the distortion becomes a kind of truth.
