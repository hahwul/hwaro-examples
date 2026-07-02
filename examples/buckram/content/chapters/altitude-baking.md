+++
title = "Altitude Baking"
description = "Why bread refuses to rise up high, how to correct a recipe, and a camp bannock that works at 4,000 m."
date = "2025-11-06"
weight = 5
toc = true
[extra]
grams = 66
station = "High camp"
+++

Baking on a mountain feels like a luxury until the third night, when a warm
biscuit does more for morale than any gadget in the pack. But altitude quietly
rewrites every recipe: gasses expand faster, water boils cooler, and doughs
that behaved at home turn to rubble. Here is how to correct for it.

<!-- more -->

## What altitude actually changes

Two things shift as you climb, and they pull in opposite directions.

- **Lower air pressure** lets leavening gasses expand faster, so breads rise
  too quickly, then collapse. Cut the raising agent.
- **Lower boiling point** means less evaporation and weaker starch setting, so
  batters stay wet. Cut a little liquid, add a little flour, bake hotter.

A rough correction table for anything leavened:

| Altitude | Baking powder | Liquid | Oven / lid |
|---|---|---|---|
| 1,000 m | reduce ~10% | as written | as written |
| 2,500 m | reduce ~20% | add 1 tbsp | +10 °C hotter |
| 4,000 m | reduce ~30% | add 2 tbsp | +15 °C, watch closely |

## Boiling point, the honest way

You can estimate the boil from your altitude — water drops roughly
**3&nbsp;°C per 1,000&nbsp;m**.

```python
def boiling_point_c(altitude_m):
    return round(100 - (altitude_m / 1000) * 3.0, 1)

for h in (0, 2000, 4000, 5300):
    print(h, "m ->", boiling_point_c(h), "C")
# 0 m -> 100.0 C
# 2000 m -> 94.0 C
# 4000 m -> 88.0 C
# 5300 m -> 84.1 C
```

At 84&nbsp;°C, a "boiling" pot will never soften tough beans — soak them
overnight or leave them at home. The same cool boil is why melting takes so
long up high; [Water and Melt](/chapters/water-and-melt/) has the drill.

## Camp bannock that survives 4,000 m

A skillet bread with no proofing and few ways to fail.

```text
2 cups flour · 2 tsp baking powder (already reduced) · pinch salt
2 tbsp oil · ~3/4 cup water, added slowly to a shaggy dough

Press into an oiled pan. Cover with a lid or foil dome.
Lowest steady flame, 8 min a side. It is done when a
splinter comes out clean and the crust knocks hollow.
```

Eat it hot with nut butter, or split and toast the leftovers for breakfast.
Nobody on a cold col has ever complained about warm bread.
