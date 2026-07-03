+++
title = "Multi-region checks are now the default"
date = "2025-09-12"
description = "Every check now votes across three regions before it trips, killing false alarms from single flaky nodes."
[extra]
tag = "checks"
+++

The single most common support ticket in our first months was some variation of
"my page went red for ninety seconds at 3am and nothing was actually wrong."
Almost always, one probe node had a bad minute — a transient DNS hiccup, a
routing blip — and reported a failure the rest of the world never saw.

<!-- more -->

Starting today, every check runs from three regions (`iad`, `fra`, `sin`) and
only trips when **two of the three agree** within the same window. A lone
dissenting node is logged but never pages you or flips your public board.

You do not need to change anything. Existing checks were migrated in place and
kept their history. If you want to see the per-region breakdown, it is now in
the check detail view:

```
$ hertz checks show api-gateway
api-gateway   https://api.northwind.app/healthz
  iad  ok    241ms
  fra  ok    198ms
  sin  ok    512ms
  verdict: operational (3/3 ok)
```

We also lowered the fastest interval from 60 seconds to 30. Faster detection
plus regional voting means you find real outages sooner and hear about fake
ones never.
