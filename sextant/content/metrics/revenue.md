+++
title = "Revenue Metrics"
description = "Financial KPIs for tracking business growth and monetization."
weight = 1
+++

## Monthly Recurring Revenue (MRR)

<div class="metric-card">
<h4>MRR</h4>
<dl>
<dt>Formula</dt>
<dd><code>SUM(subscription_amount) WHERE status = 'active'</code></dd>
<dt>Data Source</dt>
<dd><code>billing.subscriptions</code></dd>
<dt>Owner</dt>
<dd>Finance Team</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

MRR represents the normalized monthly revenue from all active subscriptions. It excludes one-time charges, usage overages, and credits. MRR is calculated on the first calendar day of each month using end-of-previous-month snapshots.

### Variants

| Variant | Definition |
|---------|-----------|
| New MRR | Revenue from customers who subscribed in the current period |
| Expansion MRR | Additional revenue from existing customers who upgraded |
| Contraction MRR | Lost revenue from existing customers who downgraded |
| Churned MRR | Revenue lost from customers who cancelled entirely |
| Net New MRR | New + Expansion - Contraction - Churned |

---

## Average Revenue Per Account (ARPA)

<div class="metric-card">
<h4>ARPA</h4>
<dl>
<dt>Formula</dt>
<dd><code>MRR / COUNT(DISTINCT account_id) WHERE status = 'active'</code></dd>
<dt>Data Source</dt>
<dd><code>billing.subscriptions</code>, <code>core.accounts</code></dd>
<dt>Owner</dt>
<dd>Finance Team</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

ARPA measures the average monthly revenue generated per paying account. Use this to track pricing efficiency and segment health over time.

---

## Customer Lifetime Value (LTV)

<div class="metric-card">
<h4>LTV</h4>
<dl>
<dt>Formula</dt>
<dd><code>ARPA / monthly_churn_rate</code></dd>
<dt>Data Source</dt>
<dd>Derived from ARPA and Churn Rate metrics</dd>
<dt>Owner</dt>
<dd>Growth Analytics</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

LTV estimates the total revenue a customer will generate over their relationship with the company. The simplified formula above assumes constant churn; the data team also maintains a cohort-based LTV model for quarterly board reporting.

---

## Annual Contract Value (ACV)

<div class="metric-card">
<h4>ACV</h4>
<dl>
<dt>Formula</dt>
<dd><code>SUM(contract_value) / contract_term_years</code></dd>
<dt>Data Source</dt>
<dd><code>sales.contracts</code></dd>
<dt>Owner</dt>
<dd>Revenue Operations</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--draft">Draft</span></dd>
</dl>
</div>

ACV normalizes multi-year contracts to an annual figure. This metric is currently in draft while the team finalizes how to handle mid-term amendments and early terminations.
