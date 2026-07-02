+++
title = "The Tabletop Revival"
date = "2026-03-05"
description = "Small presses, photopolymer plates, and a taste for deep impression bring hand letterpress back as a chosen craft."
weight = 6
toc = true
[extra]
numeral = "VI"
folio = "89"
+++

Every account of letterpress that ended in 1985 was wrong. The craft came back — not as commercial infrastructure, which is gone for good, but as a chosen practice: wedding stationery, art editions, business cards you can feel with your eyes shut. The revival runs on the same presses and the same physics as the trade it descends from, joined to exactly one new technology that changed who could take part.

<!-- more -->

The machines that carried the revival were the small ones the scrap dealers had not bothered with. **Tabletop platen presses** — the hand-lever Adana in Britain, the cast-iron Kelsey in America, and the treadle-driven Chandler & Price for anyone with room and nerve — turned up in barns and estate sales for the price of moving them. They are simple, robust, and forgiving: a flat bed, a hinged platen, two ink rollers, and a lever. A beginner can print a clean card on one in an afternoon and spend a decade getting the impression exactly right.

## The one new thing: photopolymer

The change that opened the craft to newcomers was the **photopolymer plate**. Instead of setting metal type — which requires a case, a font, and years at the case — a printer now designs on a computer, prints a negative on film, and exposes a light-sensitive polymer plate through it under ultraviolet light. The exposed areas harden; the rest washes away in water, leaving a relief image mounted **type-high** and locked into the press exactly like a metal forme. Any typeface, any illustration, any hand-drawn mark can become a printing surface in an hour.

A typical studio prep looks less like a foundry and more like a darkroom checklist:

```bash
# Prepare a photopolymer plate from vector artwork
# Target: type-high 0.918", steel-backed plate, 152 lpi film

platemake prep card-front.svg \
  --resolution 2540dpi \
  --emulsion down \
  --negative \
  --output card-front.neg.tif

# Expose, wash out, post-cure
platemake expose card-front.neg.tif \
  --main 90s \
  --washout 55s --water 20C \
  --postcure 10min --dry 10min

# Mount to base and confirm final relief height
platemake mount card-front.plate \
  --base steel --check-height 0.918in
```

Nothing about the press itself changed. The plate still has to be inked evenly, the paper still has to register, the make-ready still has to even out the pressure across the sheet. What changed is that the barrier moved from *access to type* to *skill at the press* — and skill at the press is exactly what the revival prizes.

{{ br() }}

## A taste for the dent

The revival also reversed a value, as promised at the end of [Chapter IV](@/chapters/ink-impression-kiss.md). The old book trade prized the invisible **kiss**; the modern studio prints a deep, sculpted **bite** into thick cotton paper, a debossed impression you can read with a fingertip. Purists point out, correctly, that this batters plates and would have horrified a Victorian pressman. It does not matter. When printing is a choice rather than a necessity, the felt evidence of the process — the dent, the slight unevenness, the ink sitting in a valley pressed into soft stock — is not a defect. It is the reason to do it at all.

So the history does not end at the endleaf. It turns the page. The trade that was made obsolete by speed survives precisely because it is slow, physical, and impossible to fake — a five-hundred-year-old technology kept alive, one deliberate impression at a time, by people who could print any other way and choose not to.
