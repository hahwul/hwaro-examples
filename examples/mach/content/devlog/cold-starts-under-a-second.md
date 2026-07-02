+++
title = "Cold starts under a second on bare metal"
date = "2025-06-24"
description = "Getting linux/amd64 cold start from 3.8 seconds down to under one second, and why we shipped the slower number anyway"
[extra]
elapsed = "1.42s"
+++

We spent three weeks this spring getting a `linux/amd64` cold start — from `mach run` to the first pipeline step executing — down from 3.8 seconds to 0.6 seconds on our reference hardware. Then we shipped 3.8 seconds as the documented number, on purpose, and this post is about why.

<!-- more -->

The 0.6-second figure was real, but it depended on three things that are true of our test rig and not necessarily true of yours: a pre-warmed page cache from a previous run in the last few minutes, an NVMe drive with headroom, and cgroup limits already established by an earlier job on the same runner. Strip any one of those away — a runner that just rebooted, a spinning disk, a fresh cgroup hierarchy — and the number climbs back toward four seconds.

```text
condition                          cold start
warm page cache + NVMe + warm cgroup   0.6s
cold page cache, NVMe, warm cgroup     1.9s
cold page cache, NVMe, fresh cgroup    3.1s
fresh boot, spinning disk, fresh cgroup 3.8s
```

Publishing the best case would have been technically true and practically misleading — the first build after any runner restart, which is exactly when engineers are watching the clock most closely, would blow past the advertised number. We document 3.8 seconds because it is the number you will actually see the first time a runner starts cold, and every run after that is a pleasant surprise instead of a broken promise. The optimizations from those three weeks still shipped; they just show up as the warm-cache figure of 0.41 seconds instead of being smuggled into the headline cold-start claim.
