+++
title = "Black Soybean Red Miso"
date = "2025-08-14"
description = "A darker, higher-koji miso from black soybeans, aimed at a rich twelve-month akamiso."
tags = ["miso", "koji", "soybean"]
categories = ["miso"]
+++

After the barley miso went to sleep I wanted something I could taste inside a
year — a proper red miso (*akamiso*) with the deep, savory pull that makes a
weeknight broth taste like it took all day. Black soybeans were an experiment;
they cook up glossy and dark and carry a faint sweetness through the long ferment.

<!-- more -->

The difference between a miso that finishes in a year and one that takes three
is mostly koji and warmth. More koji means more enzymes chewing through the
protein, so this batch runs koji-heavy and sits in the warmer front of the
larder where it drifts up toward twenty degrees on a good afternoon.

## The build

I hold the salt at eleven percent — low enough to move quickly, high enough to
keep the crock honest through a whole summer.

```python
soybeans_cooked = 1600   # grams black soybeans, drained
koji = 1900              # grams rice koji, generous
salt_pct = 0.11

paste = soybeans_cooked + koji
salt = round(paste * salt_pct / (1 - salt_pct))
print(f"paste {paste} g  ·  salt {salt} g")
# paste 3500 g  ·  salt 433 g
```

Same method as any miso: warm beans mashed coarse, koji and salt folded through,
packed hard into the crock with no air, capped with salt and parchment and a
stone. The one extra step I take with a red miso is to smear a little finished
miso from an older batch across the surface before I cap it — a rough
inoculation that seems to steer the early weeks in the right direction.

## Where it is now

The tamari came up fast and dark, a good sign. At the last turn it had lost most
of its raw edge and picked up a proper meaty depth, though it is still a shade
sharp. I am aiming to first use it in soup around the one-year mark and let the
rest ride into a second winter.
