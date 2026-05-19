+++
title = "R-184 · µTransfer hyperparams held across a 4× scale"
date = "2026-05-15"
description = "Hyperparameter transfer from the 1.4B model held cleanly to the 6B. Loss curve and gradient norms tracked within 2% of the prediction."
tags = ["mu-transfer", "scaling", "shipped"]
models = ["nm-6b"]
+++

R-184 finished overnight at 88% of the planned compute budget. The µTransfer hyperparameter prediction from the 1.4B grid landed within two percent of the observed loss at the same token count, and the gradient norms tracked the prediction even more closely. We expected to need to retune for the 6B run; we did not.

What this means for the project: the 1.4B sweep is now load-bearing. Every hyperparameter decision we make for runs at this scale and the next will come from the 1.4B grid until we see evidence that it does not hold. We will publish the grid weights internally on Friday.

- **Cluster:** 144 H100, ZeRO-3, BF16
- **Tokens:** 412B
- **Steps:** 38,400
- **Wall clock:** 31h 12m
- **Final loss:** 1.842 (predicted 1.851)

The next run is R-185, a continued pretrain on a 70B-token math corpus. It is queued for tonight; the platform engineer has the duty page.
