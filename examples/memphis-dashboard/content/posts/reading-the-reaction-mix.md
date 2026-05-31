+++
title = "Reading the Reaction Mix"
date = "2026-03-09"
draft = false
description = "Reactions are not all the same. Here is how we weight claps, hearts, and replays."
tags = ["reactions", "metrics", "analysis"]
categories = ["analysis"]
reading_time = 2
+++

Total reactions look great on a card. But a raw count hides the story. A clap is a polite nod. A replay is a confession of love. We weight them differently, and the dashboard reflects that.

## the three signals

We track three reaction types, each with its own meaning for how a track is landing.

- **Claps** are cheap and plentiful. Good for trend, weak for intent.
- **Hearts** cost a tap and a thought. A solid mid-weight signal.
- **Replays** are the real tell. Nobody replays a track they tolerate.

## the weighting

Here is the simple formula we apply before a number ever reaches a metric card:

```text
score = claps * 1 + hearts * 3 + replays * 8
```

That weighting is why Confetti Funk outranks louder channels on the dashboard. It draws fewer claps but a wall of replays.

> Count everything. Trust the replays.

The takeaway for creators is blunt: chase the replay, not the clap. The dashboard already knows the difference, and now so do you.
