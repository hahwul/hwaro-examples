+++
title = "Features"
description = "Cohort modeling, churn signal scoring, and recovery workflows built for subscription revenue teams"
[extra]
eyebrow = "Product"
cta_text = "See these features running on your own billing data."
cta_url = "/pricing/"
cta_label = "Start free trial"
+++

Flywheel is built around one model: every account belongs to a monthly cohort, and every cohort has a revenue-retention curve. Everything else — scoring, workflows, reporting — reads from that same model, so a number on a dashboard and a trigger on a workflow always agree.

## Cohort intelligence

Accounts are grouped by the month they started paying, not the month they signed up. Each cohort's curve tracks revenue retained, not headcount retained, so a downgrade shows up as a dent even if the account technically stays active. You can slice any cohort by plan, acquisition channel, or a custom property synced from your CRM, and the curve recalculates in place.

## Churn signal scoring

Every account carries a single score between 0 and 100, recomputed hourly from four inputs: payment health, product usage trend, support ticket sentiment, and time since last plan change. Scores below your threshold surface on a watchlist automatically — no manual segment building, no scheduled export.

## Recovery workflows

Workflows are the automated response to a score crossing a threshold you set. A typical sequence:

```yaml
trigger: payment_failed
steps:
  - retry: { delay: "4h", attempt: 1 }
  - retry: { delay: "3d", attempt: 2 }
  - email: dunning_reminder
  - retry: { delay: "3d", attempt: 3, if: "still_failing" }
  - notify_owner: { channel: slack, if: "still_failing" }
```

Each step logs its outcome back into the cohort model, so a recovered account rejoins its cohort's curve instead of disappearing from the data entirely.

## Revenue reporting

Finance doesn't need another dashboard full of percentages — they need dollars they can put in a forecast. Flywheel's reporting view totals recovered revenue by workflow, by month, and by the person who owns each recovery playbook, and exports cleanly to a spreadsheet for the board deck you already have to make anyway.

All four pieces ship on every paid tier — see the [pricing page](/pricing/) for what changes between Starter and Scale.
