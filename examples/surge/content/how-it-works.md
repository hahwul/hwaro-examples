+++
title = "How the match works"
description = "Register your brewer, and every bag arrives dialed for the way it extracts."
[extra]
kicker = "The counter test"
+++

Matching a roast to a brewer is not mysticism. It comes down to three physical
variables we can read off your equipment: how fast water passes through the bed,
how hot it runs, and how much agitation the method adds. Get those right and a
cup falls into balance almost on its own.

## Step one: tell us your gear

When you sign up you pick your primary brewer from a list of about forty common
setups &mdash; hand pour-overs, immersion brewers, moka pots, drip machines,
and espresso in its many baskets. If your machine is not listed, describe it and
our roasters slot it into the closest extraction class. You can register more
than one brewer and set which gets each delivery.

## Step two: we choose the roast level

Every brewer has an extraction window. We map yours to a roast band and a rest
range, then pick the current-roster bean that fits it best.

| Brewer | Roast level | Grind | Rest window |
| --- | --- | --- | --- |
| Pour-over (V60, Chemex) | Light | Medium-coarse | 12&ndash;16 days |
| Immersion (AeroPress, French press) | Medium | Medium | 8&ndash;20 days |
| Drip machine | Medium | Medium | 8&ndash;18 days |
| Moka pot | Dark | Fine | 5&ndash;12 days |
| Espresso | Medium-dark | Fine | 10&ndash;24 days |

## Step three: we time the roast to your door

Rest matters as much as roast. Beans off-gas carbon dioxide for days after
roasting; brew too early and the bloom fights your extraction. We back-time each
roast so the bag reaches its rest window on the shelf, not in the trash. A rough
model of what that looks like:

```python
def ship_date(brew_date, roast_class):
    rest = {"light": 14, "medium": 12, "dark": 8, "espresso": 16}
    # roast so the bean peaks mid-window on your counter
    return brew_date - days(rest[roast_class] // 2)
```

Change your brewer and the whole chain re-tunes on the next order &mdash; roast
band, grind, and timing all shift together. That is the entire idea: you buy
coffee once and stop fighting your equipment forever.
