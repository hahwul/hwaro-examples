+++
title = "LHR control plane drift, caught at the diff layer"
date = "2026-04-28"
description = "London edge nodes drifted off the canonical config for sixteen hours. The reconciler caught it, the operator did not."
tags = ["control-plane", "lhr", "drift"]
regions = ["emea"]
+++

Sixteen hours of configuration drift on the London edge nodes. The reconciler caught it on the next pass and re-applied the canonical config; the operator who shipped the drift did not realise it was a drift at all and went home.

This is the failure mode we have been trying to design out for a year: a human change that looks like a regular deploy but is actually a manual edit on a single node. The reconciler eventually wins, but the window between the drift and the reconcile is a window where the canonical config does not describe reality.

- **Drift width:** sixteen hours.
- **Customer impact:** none. The drifted config was a tunable, not a routing rule.
- **Fix:** we now block direct SSH to edge nodes for non-emergency work. The control plane is the only writer.

The escape hatch — emergency SSH — has been kept. Two operators (the on-call SRE and the on-call edge engineer) carry the key on a hardware token. The token is on a thirty-day rotation.
