+++
title = "Integrations"
description = "Connect a billing provider in minutes; route recovery signals to the tools your team already watches"
[extra]
eyebrow = "Integrations"
cta_text = "Don't see your billing provider listed?"
cta_url = "/contact/"
cta_label = "Ask us"
+++

Flywheel reads billing events directly from your processor's webhooks, so there's nothing to batch-export and nothing to keep in sync by hand. Most teams are looking at their first cohort chart within ten minutes of connecting a provider.

## Billing providers

- **Stripe** — full webhook coverage, including `invoice.payment_failed` and `customer.subscription.updated`, with automatic mapping of prices to plan tiers.
- **Chargebee** — subscription and invoice events, plus native support for Chargebee's own dunning schedule if you'd rather keep retries there.
- **Paddle** — webhook ingestion for subscription lifecycle and payment events, including Paddle's tax-inclusive pricing fields.
- **Recurly** — full event stream via Recurly's push notifications, with cohort backfill from historical invoice exports on connect.

## What a webhook payload looks like once it lands

Every event is normalized into the same shape before it reaches the cohort model, regardless of which provider sent it:

```json
{
  "event": "payment_failed",
  "account_id": "acct_9f21c",
  "cohort_month": "2025-11",
  "amount_cents": 4900,
  "attempt": 2,
  "provider": "stripe"
}
```

## Workflow destinations

- **Slack** — post a message to a channel of your choice whenever an account crosses your churn-risk threshold, with a link straight to that account's timeline.
- **HubSpot** — sync churn scores onto the contact record so sales and success see the same risk signal you do.
- **Segment** — forward every recovery event as a track call, so it lands in whatever warehouse your data team already owns.
- **Zapier** — for everything else. Trigger a Zap on any workflow step, from a new watchlist entry to a completed win-back.

Every destination above is available starting on the [Growth plan](/pricing/); Starter ships with cohort dashboards and scoring only.
