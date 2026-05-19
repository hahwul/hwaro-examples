+++
title = "R-182 · killed at step 4,128 (data corruption)"
date = "2026-05-10"
description = "A duplicated shard introduced a 0.3% poisoning that surfaced as a slow loss creep. We caught it on the eval, not the loss."
tags = ["data", "killed", "poisoning"]
models = ["nm-1b4"]
+++

R-182 was killed at step 4,128 after a small but persistent eval regression on the math subset. Training loss looked nominal; eval loss had crept by 0.04 over the previous thousand steps. Investigation found a duplicated data shard that had been written into the run's mix at 0.3% — a small enough fraction to be invisible in the loss curve, large enough to bias the math eval consistently.

The duplicated shard came from a botched dedupe pass earlier in the month. The dedupe pipeline has been pinned to a known-good revision and the affected mix removed from the catalog. We have also added a per-step hash assertion at the loader; a duplicated shard will now refuse to load rather than land silently.

> Two lessons. The loss curve will not save you — the eval will. And the dedupe pass is exactly the kind of thing that should be reproducible from a hash, not a date.

The replacement run, R-183, was submitted the same evening and is on the board now.
