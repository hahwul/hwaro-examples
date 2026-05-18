+++
title = "billing-api warm pool starves at 09:00"
date = "2026-05-13"
description = "A predictable spike was being treated as a surprise by the autoscaler. The warm pool was three nodes short of the steady-state."
tags = ["p3", "billing", "autoscaler"]
owners = ["payments"]
+++

The morning spike for `billing-api` has been arriving at the same minute for nine months. The warm pool has been sized for the spike for eight months, but the autoscaler policy was rewritten in February to use the new platform CRD. The new policy sized the warm pool against the *median* of the previous hour rather than the *p95*. At 08:55 the median is low.

## What broke

Between 09:00:00 and 09:02:11 the warm pool was three nodes short of the steady-state for the morning spike. New connections to `billing-api` were placed onto cold nodes; cold nodes took about 11 seconds to enter the rotation. During those two minutes the p99 latency on the billing path climbed from 180ms to 1.2s, and 0.8% of requests retried.

## The fix

- `platform/autoscaling/policies/billing.yaml`: switch back to p95 over the previous 30 minutes.
- Added a regression test in `chaos/morning-spike/` that replays the 09:00 traffic shape against a candidate policy.
- Cleared the burn rate ratchet by 0.4× over the rolling 24 hours.

The new policy CRD is fine. We sized the warm pool against the wrong statistic; that's all.
