+++
title = "How we compute uptime, now written down"
date = "2026-05-27"
description = "We published the exact formula behind every percentage, and changed one thing about how partial outages count."
[extra]
tag = "transparency"
+++

An uptime number is only trustworthy if you can say precisely what it means. We
had the formula in our heads and in the code, but not on the page, which is
exactly the kind of gap this company exists to close. So we wrote it down, and
while writing it down we found one thing worth changing.

<!-- more -->

The 90-day uptime for a service is the ratio of successful check windows to
total check windows over the trailing 90 days:

```
uptime = successful_windows / total_windows
```

A window is one check interval. A window counts as successful when the
multi-region verdict was `operational` for the whole interval. Nothing is
weighted, smoothed, or rounded up — a 30-second check produces 259,200 windows
over 90 days, and every one of them is a plain yes or no.

The change: a **degraded** state now counts as *partial* credit rather than full
uptime. Previously a service that was slow-but-up scored the same as a healthy
one, which flattered the number in exactly the situations customers care about.
Now a degraded window counts as 0.5, and the page labels any service below
99.9% so nobody has to squint at the decimals.

This lowered some historical figures by a tenth of a percent. We think a
slightly worse honest number beats a slightly better dishonest one, every time.
Your incident history and raw check logs were untouched; only the rollup math
changed, and now it lives on the [features](/features/) page for anyone to check.
