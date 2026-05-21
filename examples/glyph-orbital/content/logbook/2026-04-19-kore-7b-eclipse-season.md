+++
title = "KORE-7B entering eclipse season, battery profile review"
date = "2026-04-19"
description = "KORE-7B begins its annual eclipse season on 24 April. We reviewed the battery profile against the on-orbit aging model and trimmed two science modes."
tags = ["planning", "power", "eclipse"]
spacecraft = ["KORE-7B"]
+++

`KORE-7B` enters its annual eclipse season on 24 April. The vehicle is in a slightly precessed sun-synchronous orbit and sees roughly thirty-five minutes of eclipse per ninety-five minute orbit for the next eleven weeks, peaking at thirty-seven and a half minutes on 7 June.

The battery on `KORE-7B` has accumulated approximately four thousand two hundred charge-discharge cycles since launch and shows the capacity fade we modelled — approximately eleven percent below beginning-of-life capacity, consistent with the analytical model to within one percentage point.

## What we adjusted

We disable two of the higher-power science modes during eclipse this year, where in the previous two eclipse seasons we ran them at reduced duty cycle. Specifically:

- `IMG-WIDE` (the wide-field imager) goes from twenty-five-percent duty during eclipse to fully off
- `XL-2` (cross-link payload to GLYPH-1A and GLYPH-1B) drops from continuous to opportunity-only during eclipse passes
- `IMG-NARROW` and the housekeeping radio remain on continuously

The expected depth-of-discharge floor under the new profile is sixty-eight percent, which keeps us a comfortable nine percentage points above the operations limit of seventy-seven percent.

## Why this matters for the next two birds

The next two `KORE`-class vehicles use the same battery line. The on-orbit aging data from `KORE-7B` is the primary input to the operations limit we will set for `KORE-8A` and `KORE-8B` at launch, currently scheduled for late August. The current data suggests we can raise the beginning-of-life depth-of-discharge limit from the conservative fifty-five percent we used at `KORE-7B` launch to sixty-two percent, which buys approximately fourteen percent additional payload-on time per orbit.
