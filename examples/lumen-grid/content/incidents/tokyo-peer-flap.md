+++
title = "TYO peering flap took out four upstreams for nine minutes"
date = "2026-05-17"
description = "A misconfigured BFD timer caused four upstreams to drop simultaneously in Tokyo. We held traffic by leaning on Osaka and Singapore."
tags = ["peering", "tyo", "bfd"]
regions = ["apac"]
+++

The Tokyo edge cluster lost four of its seven upstreams at 03:11 UTC. Our latency board lit up before the first page fired, which is exactly how we want it to work — the user-visible latency rose only seven milliseconds because the load steering had already rerouted traffic to Osaka and Singapore.

Root cause was a stale BFD timer that we had inherited from a vendor template. When a peer flapped briefly, the timer interpreted it as a hard down and pulled the whole session. The other three peers happened to share the same router and went with it.

- **Detection:** 41 seconds from peer drop to dashboard lime.
- **Mitigation:** 23 seconds — automated, no human in the loop.
- **Resolution:** 9 minutes 02 seconds to restore all four peers.

We have shipped a fix to the template and audited every site that uses it. Twelve sites had the same configuration. None of them are likely to flap the same way again, but we are also adding a damp on the steering controller so that a multi-peer event has to clear human review before it propagates beyond a region.
