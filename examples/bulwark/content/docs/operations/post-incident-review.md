+++
title = "Post-Incident Review"
weight = 3
tags = ["postmortem", "review", "learning"]
+++

# Post-Incident Review

Every incident severity-2 or higher results in a written post-incident review (PIR) within ten business days. The PIR is a learning artifact, not a performance evaluation.

## Required Sections

1. **Summary** -- Three to five sentences describing what happened
2. **Impact** -- Affected systems, customer-visible effects, duration
3. **Timeline** -- Detection, escalation, mitigation, resolution
4. **Root Cause** -- Technical and contributing factors
5. **What went well** -- Practices that limited impact
6. **What went poorly** -- Gaps in tooling, runbooks, or coordination
7. **Action items** -- Owner, target date, tracking ticket

## Blameless Practice

Reviews focus on systems, signals, and incentives -- not individuals. When tempted to write "the operator did X," rephrase as "the runbook permitted X" or "the tooling allowed X without confirmation." The goal is to make the same outcome impossible the next time, regardless of who is on call.

## Action-Item Hygiene

- Each item has a single owner
- Each item has a target completion date within 60 days
- Items are tracked in the standard ticketing system, not on the PIR document itself
- A weekly report surfaces overdue items to the operations lead

## Distribution

PIRs are circulated to all engineering staff, executive sponsors, and customer-facing teams. Sensitive technical details are redacted only when required by legal or contractual obligations.

---

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2025-08-12 | Initial publication |
