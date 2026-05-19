+++
title = "Three weeks under our error-rate floor"
date = "2026-05-04"
description = "Hard errors per thousand events have stayed below 0.4 for three consecutive weeks. We have a new floor to chase."
tags = ["errors", "reliability"]
surfaces = ["api", "mobile"]
+++

Hard errors per thousand events stayed below 0.4 for the third week running. The previous floor was 0.6 and held for most of the winter. We are crediting two changes — the new circuit breaker on the events ingest, and the retry budget that the mobile clients picked up in the February release.

We have moved the floor down on the board. The new threshold for promotion of a release to all-accounts is 0.4 hard errors per thousand. Anything above that becomes a staged rollout with a 24-hour bake.

We considered moving the floor to the new observed value but a one-week noise margin is more honest than the headline number. Aim for the number you can hit on a Sunday night release, not the one you hit on a Wednesday afternoon.
