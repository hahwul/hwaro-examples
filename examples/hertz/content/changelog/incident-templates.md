+++
title = "Incident templates and a faster first update"
date = "2025-11-04"
description = "Save reusable incident openers so your first update goes out in seconds, not sentences."
[extra]
tag = "incidents"
+++

The hardest part of an incident is the first thirty seconds, when you know
something is wrong but do not yet know what. Staring at an empty update box in
that moment is how status pages end up silent during the exact window customers
are refreshing them.

<!-- more -->

Incident templates fix that. Write your common openers once — degraded latency,
elevated error rates, a third-party outage — and pick one when you open an
incident. The template fills the impact level and a first-update draft you can
post as-is or edit.

A degraded-latency template might read:

> We are investigating elevated response times on the API. Requests are
> succeeding but slower than usual. We will post an update within 15 minutes.

That is enough. It tells customers you see it, it sets a next-update
expectation, and it went out before you finished reading the logs.

Templates live in your settings and support two variables, `{{service}}` and
`{{region}}`, so a single template covers every service you watch. They are
also available from the CLI:

```
$ hertz incident open --template degraded --service webhooks
opened INC-2025-114 · webhooks · investigating
subscribers notified: 1,204
```

Fast, honest, and consistent — the three things a first update needs to be.
