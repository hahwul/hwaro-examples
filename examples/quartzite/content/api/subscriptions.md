+++
title = "Subscriptions"
description = "Put a customer on recurring billing, with trials, proration, and cancellation handled without custom scheduling code."
weight = 4
date = "2025-05-09"
toc = true
[extra]
route = "POST /v1/subscriptions"
method = "POST"
status = "stable"
+++

A subscription binds a customer to a plan and a billing interval. Once created, Quartzite generates and finalizes an invoice automatically at the start of every period — you do not write a cron job, and you do not compute the next billing date yourself.

<!-- more -->

## Creating a subscription

```bash
curl https://api.quartzite.dev/v1/subscriptions \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -d customer="cus_1JbQx9K" \
  -d plan="plan_growth_monthly" \
  -d trial_days=14
```

```json
{
  "id": "sub_7GmXp1",
  "customer": "cus_1JbQx9K",
  "plan": "plan_growth_monthly",
  "status": "trialing",
  "trial_end": "2025-05-23T00:00:00Z",
  "current_period_end": "2025-06-09T00:00:00Z",
  "cancel_at_period_end": false
}
```

If `trial_days` is omitted, billing starts immediately and the first invoice is finalized at creation time. During a trial, `status` is `trialing`; no invoice is generated until the trial ends, at which point Quartzite attempts the customer's default payment method automatically.

## Changing plans

`POST /v1/subscriptions/{id}` with a new `plan` prorates the difference by default: the customer is credited for unused time on the old plan and charged for remaining time on the new one, both reflected as line items on the next invoice rather than as an immediate separate charge. Set `proration_behavior="none"` to switch plans at the next period boundary instead, with no mid-cycle adjustment.

## Cancellation

Two cancellation paths exist, and they answer different questions:

- `DELETE /v1/subscriptions/{id}` ends the subscription immediately.
- `POST /v1/subscriptions/{id}` with `cancel_at_period_end=true` lets the customer keep access through the period they already paid for, then stops renewal — the far more common choice for a self-serve cancel button, since it avoids an awkward partial refund conversation.

## Payment failure

If a period's invoice payment fails, the subscription enters `past_due` and Quartzite retries the charge on a schedule (day 1, day 4, day 7) before marking it `unpaid`. Listen for the `invoice.payment_failed` webhook to prompt the customer for an updated card during that window rather than waiting for the final failure.
