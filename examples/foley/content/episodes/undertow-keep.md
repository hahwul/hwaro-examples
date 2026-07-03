+++
title = "Undertow Keep: the season finale roundtable on the day the servers held"
date = "2025-07-29"
description = "The full five-person Brackish Collective team on Undertow Keep's netcode rewrite, and using their Discord as an unofficial QA team for eight months."
tags = ["co-op", "netcode", "community", "tower-defense"]
[extra]
episode_no = "007"
duration = "71 min"
game = "Undertow Keep"
studio = "Brackish Collective"
guest = "The full Brackish Collective team"
+++

The season one finale is the only roundtable episode: all five members of Brackish Collective, the team behind four-player co-op tower defense game Undertow Keep, talking through the eight-month netcode rewrite that started as a two-week fix and the launch night everyone was braced to watch fail.

<!-- more -->

## The pitch

Undertow Keep pitched itself simply: four players defend a sinking keep against a rising tide of hostile fauna, and every player controls one quadrant of the map's economy independently, forcing coordination under pressure. The four-person-co-op requirement made networking central to the game's identity from day one, not an afterthought bolted on before launch.

## The number

Peak concurrent players on launch night: 3,400, well past the team's internal planning ceiling of 1,200 concurrent, which they'd set based on wishlist counts and a conservative conversion estimate. The question the whole roundtable keeps returning to is simple — would the netcode rewrite, finished six weeks before launch, have survived a night nearly three times larger than anyone had planned for.

## What broke

The original networking model used client-authoritative state for each player's quadrant, synced via periodic snapshots — simple to build, and it worked fine in every internal playtest with four known, cooperative players on a shared office connection. It fell apart under real internet conditions: any packet loss above roughly 2 percent caused visible desync between quadrants, and worse, it opened an exploit where a modified client could report false resource counts to teammates. A closed beta with 200 outside players surfaced both problems within the first weekend, four months before the original launch date.

```yaml
# Rewritten netcode config, post-beta
authority: server
tick_rate_hz: 20
snapshot_interval_ms: 100
reconciliation: client_prediction
max_rollback_ticks: 12
anti_cheat: server_validates_resource_deltas
```

The rewrite moved to full server authority with client-side prediction and rollback reconciliation, a much larger undertaking that pushed the launch date back four months — the single most contentious decision of the whole project, made worse by an already-announced date the team had to walk back publicly.

## What they'd keep

Running the entire rewrite's stress testing through their public Discord rather than a closed QA cycle. Brackish Collective opened dedicated "stress test Saturday" voice channels every week for five months, filled entirely with community volunteers deliberately trying to break quadrant sync under bad network conditions, and paid them in early beta keys and credited names in the finale credits roll. It's how they found, three weeks before launch, that the anti-cheat validation step added roughly 40 milliseconds of input latency under packet loss — small enough that internal testers with good connections never noticed, large enough that competitive-minded community testers flagged it immediately. On launch night, with nearly three times the planned concurrent load, the servers held, and the team is unanimous that the community testing program, not the rewrite alone, is why.
