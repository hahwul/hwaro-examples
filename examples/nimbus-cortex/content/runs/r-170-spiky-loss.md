+++
title = "R-170 · loss spike at step 12k traced to one bad batch"
date = "2026-04-22"
description = "A 4.8σ loss spike at step 12k was traced to a single batch containing a long run of low-entropy tokens. We left it in."
tags = ["loss-spike", "data", "investigation"]
models = ["nm-1b4"]
+++

R-170 had a loss spike at step 12,041 — four-point-eight standard deviations above the trailing mean. The spike was a single step; loss recovered to trend within thirty steps. The on-call researcher paused submission of follow-up runs while we investigated.

The spike was traced to a single batch that contained an unusually long run of low-entropy tokens — a repeated whitespace sequence from a particular document in the mix. The batch was technically in-distribution; the run of low-entropy tokens within a single batch was the unusual feature.

We decided to leave the data in. The justification: removing the batch would have made the loss curve cleaner and the model worse on the underlying distribution. A model that cannot handle an in-distribution batch is not a model we want; an investigation triggered by a 4.8σ spike on an in-distribution batch is an investigation we should be willing to do.

The runbook for loss spikes has been updated. The new rule of thumb: a 3σ spike calls a researcher; a 5σ spike pauses the queue. R-170 sat at 4.8σ — closer to the second than the first — and we will not refine the threshold until we have seen more events.
