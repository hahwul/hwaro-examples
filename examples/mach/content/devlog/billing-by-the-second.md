+++
title = "Billing by the second, not the minute"
date = "2025-02-11"
description = "Why we rejected minute-granularity billing before Mach ever had a single external user"
[extra]
elapsed = "0.87s"
+++

The first internal prototype of Mach billed in whole minutes, the same as everything else on the market. A nineteen-second test run rounded up to a full minute, same as a fifty-nine-second one. We built it that way because minute billing is simpler to implement and every vendor we had ever paid did it that way, so it felt like the safe default.

<!-- more -->

Then we ran the numbers against our own team's actual pipeline history — six months of build logs from the job we'd been running at a previous company. The median job length was twenty-two seconds. Rounded up to a minute, that is a 63% markup baked into the billing model before a single byte of compute is justified. Across a few thousand jobs a month, that markup was bigger than the infrastructure cost of running the CI hardware in the first place.

So we tore out the minute rounding and replaced it with second-level billing, rounded up to the nearest whole second instead of the nearest whole minute:

```text
job length     minute billing    second billing (this)
19s            60s (+216%)       19s (+0%)
22s            60s (+173%)       22s (+0%)
41s            60s (+46%)        41s (+0%)
71s            120s (+69%)       71s (+0%)
```

Second-level billing is harder to implement correctly — you need a scheduler that timestamps job start and completion with sub-second precision and a metering pipeline that does not lose that precision on the way to an invoice — but it is the only version of the number that actually reflects what happened on the machine. We shipped the rewrite two weeks later and have not rounded to a minute since.
