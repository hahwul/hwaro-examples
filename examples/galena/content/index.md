+++
title = "Galena"
description = "Reference docs for a distributed job scheduler with jitter, backfills, and dead-letter queues"
template = "home"
+++

Galena runs scheduled work across a cluster without turning a cron table into a single point of failure. One node holds a lease and fires jobs; the rest stand by, ready to take over the moment a heartbeat lapses. Every schedule is an ordinary five-field cron expression, so the mental model you already have carries over unchanged.

What Galena adds is the operational machinery cron never had. Fire times are spread with **jitter** so a thousand jobs on `*/5 * * * *` do not stampede the same instant. Windows missed during a deploy or a network partition are replayed as bounded **backfills** instead of vanishing. And a job that keeps failing is moved to a **dead-letter queue** where you can inspect the payload, read the last error, and replay it by hand once the cause is fixed.

The handbook works through each of these in order. If you have never run Galena before, start with the quickstart and come back.
