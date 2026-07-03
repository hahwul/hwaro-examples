+++
title = "A Three-Year Barley Miso"
date = "2025-01-18"
description = "The long one: mugi koji, whole soybeans, and a plan to leave it alone until 2028."
tags = ["miso", "koji", "barley", "long-brew"]
categories = ["miso"]
+++

This is the crock I check least and think about most. On the morning it was
packed the larder was cold enough that the soybeans steamed when I mashed them,
and I remember thinking that whatever this becomes, I will be a different cook
by the time I taste it. That is the deal you make with a long miso: you are
seasoning a future kitchen, not this one.

<!-- more -->

The build is deliberately old-fashioned — a **barley miso** (*mugi miso*) built
on twelve percent salt so it can sit for years without a refrigerator anywhere
near it. Barley koji brings a rounder, faster sweetness than rice koji, which is
why country misos meant for long aging so often lean on it.

## The pack

Everything is measured against the drained weight of the cooked soybeans, then
the koji and salt are calculated from there. I keep the math in a little script
so I stop fat-fingering the salt:

```python
soybeans_cooked = 1800   # grams, drained and still warm
koji = 1500              # grams barley (mugi) koji
salt_pct = 0.12          # 12% of the total paste, by weight

paste = soybeans_cooked + koji
salt = round(paste * salt_pct / (1 - salt_pct))
print(f"paste {paste} g  ·  salt {salt} g  ·  reserve 30 g for the cap")
# paste 3300 g  ·  salt 450 g  ·  reserve 30 g for the cap
```

Mash the warm beans to a coarse, tacky paste — leave a few whole for texture —
then fold in the koji and salt until it holds together like wet sand. I pack it
into the crock in fistfuls, knuckling out every air pocket, because air is where
the wrong molds move in.

## The cap and the wait

The surface gets a thin layer of the reserved salt and a sheet of parchment
pressed flat, then a plate and a scrubbed river stone for weight. A cloth over
the top keeps the dust off while still letting it breathe.

> Tamari will rise around the edges within a few months. Do not pour it off —
> stir it back through at the first turn. That dark liquid is the whole point.

The plan is three years, turned once each spring, tasted only when I turn it.
Right now it is still assertively salty and raw at the edges, with the first
hints of the deep, almost chocolatey note that time will pull forward. I will
report back when it has something new to say.
