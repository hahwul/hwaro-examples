+++
title = "Cyberdyne Customer Portal"
description = "A self-service portal for B2B accounts, with a hard rule: no support tickets routed back into the legacy CRM."
date = "2024-10-21"
+++

## Brief

Cyberdyne's existing customer portal generated more support tickets than it resolved. Every interaction routed back into a legacy CRM that the support team had stopped trusting two years prior. The new portal had to handle the high-volume tasks — invoice download, license renewal, user management — without ever touching the CRM.

## Design Decisions

- **Account state lives on the portal.** Account fields no longer round-trip through the CRM. The CRM continues to read this state but cannot write to it.
- **The "talk to support" button is the last resort.** Every common task has a self-service path; the human escalation surface is buried two levels deep on purpose.
- **Audit trail is user-visible.** Customers can see every change made to their account, with a timestamp and the actor who made it. This single feature reduced "who changed this?" support tickets by roughly 70%.

## What We Did Not Do

We did not redesign the CRM, replace the legacy auth provider, or migrate the historical ticket archive. The portal is layered on top — a discrete improvement, not a rewrite. The legacy systems are still running, just less in the path of the customer.
