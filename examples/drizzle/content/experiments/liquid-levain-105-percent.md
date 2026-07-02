+++
title = "The 105% levain that wouldn't set"
date = "2026-05-18"
description = "Pushing hydration past the point of structure to see where a lean wheat dough stops behaving like a dough at all."
tags = ["hydration", "levain", "failures"]
toc = true
[extra]
hydration = 105
flour = "Bread flour 90%, whole rye 10%"
starter = "Liquid levain, 100% hydration, 20% of flour weight"
temp = "26 C final dough"
result = "Flat, gummy crumb — abandoned after three bakes"
+++

I wanted to find the wall. Every hydration experiment before this one had
produced *something* bakeable, so I pushed a lean wheat dough to 105% water
and watched it stop being a dough.

<!-- more -->

## The formula

Total flour was 500 g, so 105% hydration meant 525 g of water before the
levain even joined. Here is the build, computed the way I compute every bake —
water and levain expressed against total flour weight:

```python
flour = 500          # grams, 90% bread + 10% whole rye
hydration = 1.05     # target, water as fraction of flour
levain_pct = 0.20    # liquid levain at 100% hydration

water = flour * hydration            # 525 g
levain = flour * levain_pct          # 100 g (50 g flour + 50 g water)
salt = flour * 0.021                 # 10.5 g

# The levain already carries water, so subtract it from the mix water
mix_water = water - (levain / 2)     # 475 g
print(round(mix_water), "g water into the mix")
```

At 525 g of total water against 500 g of flour, the dough was, by weight,
mostly water. I knew that going in. I did not expect quite how completely the
gluten would give up.

## What happened at the bench

There was no bench, really. A 105% dough does not sit on a counter; it
spreads to the edge of the bowl and lies there. Coil folds did nothing —
the dough simply poured back flat within thirty seconds. Over four hours at
26 C it roughly doubled in volume but never developed the domed, jiggly set
that tells you the structure is holding gas.

- **0:00** — mixed, temperature 26 C, batter-like
- **1:00** — first coil fold, no tension held
- **2:30** — visible bubbles, still pourable
- **4:00** — doubled, but flat and slack; shaped anyway, hopelessly

## The bakes

Three attempts, all baked at 250 C in a covered pot for 22 minutes, then
230 C uncovered for 18.

| Bake | Change | Crumb | Verdict |
|------|--------|-------|---------|
| 1 | as written | wet, gummy, no rise | failure |
| 2 | +2% salt, colder proof | slightly less gummy | failure |
| 3 | 15% rye for grip | denser, still flat | failure |

Every loaf came out as a pale, dense disc with a gumline a centimetre thick.
The crust blistered nicely — small consolation.

## What I learned

Past roughly 90% on a lean wheat dough, the flour I use cannot build enough
gluten to trap the gas it produces. The water has to go somewhere, and it
goes into a gummy, undercooked crumb. High-hydration doughs that *do* work
lean on very strong flour, tangzhong, or a
[long cold retard](@/experiments/cold-retard-48-vs-72.md) to buy structure.
I gave this one none of those, on purpose, to find the ceiling. The ceiling
is real and it is lower than the internet suggests.

Next time I chase wet dough, I will start at 88% and add strong flour before
I add water.
