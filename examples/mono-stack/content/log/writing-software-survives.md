+++
title = "Writing software that survives an on-call"
date = "2026-02-14"
description = "Notes from a workshop I have now taught three times. The thesis is uncontroversial. The application is hard."
tags = ["talks", "ops"]
+++

The thesis is simple: software that gets paged at 3am should be designed by people who have been paged at 3am.

## The workshop in one slide

1. Every error message is a UI for someone who is tired and angry.
2. Every retry loop is an opportunity for cascading failure.
3. Every silent dependency is a future surprise.
4. Every timeout you forgot to set is a future incident.

## The workshop in three days

Day one is reading other people's postmortems and writing your own from a recorded incident. Day two is rewriting a small service to be paged-at-3am-friendly. Day three is a tabletop exercise where everything goes wrong and the room has to decide what matters.

I have run this three times. I plan to run it a fourth in autumn.
