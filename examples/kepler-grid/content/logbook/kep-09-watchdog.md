+++
title = "KEP-09 watchdog walk-out"
date = "2026-05-12"
description = "How a single missed scheduler tick walked KEP-09 into a safe-mode rehearsal — and the small instrumentation fix that closes the gap."
tags = ["anomaly", "scheduler", "safe-mode"]
systems = ["bus", "scheduler"]
+++

KEP-09 entered safe-mode rehearsal at 03:41:09 UTC after the on-board scheduler missed three consecutive ticks on the bus housekeeping board. The watchdog did what it was supposed to do; the recovery sequence cleared in 9 minutes; nothing was at risk.

The interesting bit is *why* it took us almost a full pass to notice that the rehearsal had run. The downlink event was emitted, but the ground decoder was tagging it as a level-3 ("informational") log rather than a level-1 ("alarm") because the OBC schema bumped the field in firmware revision r3.41 and the decoder still maps it to the r3.40 enum.

## Fix landed

- `groundsw/decoder/obc_events.toml`: add r3.41 enum, retire r3.40 once the fleet is flashed.
- Decoder version is now reported in the heartbeat. Mismatch raises a yellow on the **Event Log** panel.

> The bird did the right thing. The console did the wrong thing in a quiet way. Quiet wrong is what we are most afraid of.
