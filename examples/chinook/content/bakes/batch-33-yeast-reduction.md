+++
title = "Batch 33: A formula for cutting the yeast"
date = "2026-01-18"
description = "Instead of guessing how much to reduce the yeast at altitude, I wrote a tiny function to do it — and it took the panic out of proofing."
tags = ["cinnamon-roll", "yeast", "altitude", "technique"]

[extra]
hydration = "70%"
proof = "Bulk 2h10m · final 55m"
flour = "Highland bread flour + 10% whole wheat"
bake = "195°C, lid on 8m, then 12m"
altitude_note = "Yeast cut to 78% of the sea-level amount"
verdict = "Controlled, even rise — no over-proof scare"
+++

Every high-altitude baking guide says the same vague thing: "reduce the yeast."
By how much? For batch 33 I stopped hand-waving and wrote it down as a rule I
could actually reuse. The lower the pressure, the faster gases expand, so above
roughly 900 metres I scale the leavening down on a gentle slope.

<!-- more -->

Here is the whole thing — a few lines of Python I keep in a note and run before
mixing:

```python
def leavening_factor(elevation_m: float) -> float:
    """Fraction of the sea-level yeast to use at a given elevation."""
    if elevation_m < 900:
        return 1.0
    # lose ~3% of the leavening per 300 m above 900 m, floored at 70%
    steps = (elevation_m - 900) / 300
    return max(0.70, 1.0 - 0.03 * steps)


def yeast_grams(sea_level_g: float, elevation_m: float) -> float:
    return round(sea_level_g * leavening_factor(elevation_m), 2)


print(yeast_grams(7.0, 1048))  # -> 5.47
```

At 1,048 metres the factor comes out to about 0.78, so my usual 7&nbsp;grams of
instant yeast becomes a hair under 5.5. That is roughly what a decade of ruined
Sundays had already taught me by feel, but seeing it as a number meant I could
finally stop second-guessing at the bench.

The rise was the calmest I have logged. Bulk took a little over two hours
instead of ninety white-knuckled minutes, the dough never threatened to blow
out, and the final proof stayed inside its window. Less yeast does not mean less
lift — it means the lift arrives on a schedule you can plan a morning around.
The formula is not gospel; it is a starting line I now adjust from instead of
flailing. That alone was worth a batch.
