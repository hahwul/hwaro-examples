+++
title = "Pricing"
description = "Mach bills in build-seconds: no seats, no included-minutes cliff, no per-runner license"
[extra]
elapsed = "0.63s"
+++

Most CI vendors sell you a seat, then sell you minutes, then sell you a second tier when the free minutes run out mid-sprint. Mach sells you exactly one thing: the wall-clock time your builds actually spend running, metered to the second, on hardware you control.

{{ sh(text="Rate card", time="0.09s") }}

| Plan | Rate | Included | Best for |
|---|---|---|---|
| Solo | $0.00090 / build-second | First 5,000 build-seconds free every month | Side projects, single-maintainer libraries |
| Team | $0.00060 / build-second | Volume discount past 200,000 build-seconds/mo | Small to mid-size engineering teams |
| Air-gapped | Flat annual license | Unlimited build-seconds, offline license file | Regulated environments, on-prem-only shops |

A "build-second" is one second of wall-clock time a job spends between `mach run` starting and the job's final step exiting, summed across every parallel job in a pipeline. A four-way test shard that finishes in twenty seconds bills as eighty build-seconds, not twenty — parallelism saves your engineers time, not your invoice money, which is the honest way to price a machine that is doing four times the work.

{{ sh(text="What actually gets billed", time="0.05s") }}

Queue time does not count. If your runner is busy and a job waits ninety seconds for a free slot, those ninety seconds are free — you are billed for execution, never for contention, which means adding more runner capacity never raises your bill on its own. Cache restores and artifact uploads count, because they run on the clock, but they are typically the cheapest seconds in the pipeline: a warm cache restore averages under a second per job.

```text
job: test-shard-3
  queued        00:14   (not billed)
  restore cache 00.9s   billed
  run tests     18.4s   billed
  upload result 00.6s   billed
  ------------------------------
  billed: 19.9s -> rounded to 20 build-seconds
```

{{ sh(text="No license per runner", time="0.04s") }}

Air-gapped customers sometimes ask how many runner licenses they need. There is no per-runner fee under any plan — Mach's binary is free to install on as many machines as you like, because the binary itself does not talk to a metering server. Solo and Team plans phone home an aggregate second-count once a day; Air-gapped plans generate a signed usage report you review yourself and never transmit anywhere.

Ready to see your own numbers before committing to a plan? Point a read-only mirror of your busiest repository at a Solo account — the first 5,000 build-seconds are free, which covers roughly two hundred typical test-and-build runs for most teams.
