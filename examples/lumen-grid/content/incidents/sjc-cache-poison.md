+++
title = "SJC cache invalidation race condition"
date = "2026-05-04"
description = "A race condition in the purge pipeline let a stale object survive an invalidation for 41 minutes in San Jose."
tags = ["cache", "sjc", "race-condition"]
regions = ["americas"]
+++

A purge pipeline race condition let a stale object survive an invalidation in San Jose. The object — a customer's homepage asset — kept being served for forty-one minutes after the purge had been acknowledged.

The race was between the purge fan-out and the asset re-warming worker. The re-warming worker ran from the canonical origin, but it ran *before* the fan-out had propagated, so it caught the same stale object and re-cached it. From there it was sticky until TTL expired.

We fixed it by adding a generation counter to every purge event. The re-warming worker now refuses to operate on an object whose generation it cannot read from the central log. The race is closed and the fix shipped to the four other regions that share the pipeline.

Five customer requests were served the stale object during the window. We have reached out to all five.
