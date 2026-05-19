+++
title = "Yard reconciliation drifted by sixty-four boxes"
date = "2026-04-30"
description = "The reconciliation tick fell behind by sixty-four boxes during a peak hour. We held the count in black on cream and called it."
tags = ["reconciliation", "yard", "drift"]
berths = []
+++

The yard reconciliation tick drifted by sixty-four boxes during the 14:00 peak hour. The board correctly went black on cream — and the clock in the corner reached twenty-three minutes before the yard team caught up.

Root cause was a saturated message queue between the gate camera farm and the reconciliation worker. The queue is sized for our annual peak; the 14:00 hour today was an annual-peak hour. We have raised the alarm threshold on the queue depth so that the next time we approach the cap, the duty supervisor sees it before the count goes stale.

> The board did the right thing. We saw stale data labeled as stale data, and we did not act on it. The fix is upstream, not on the board.

The reconciliation queue cap will be doubled in next week's maintenance window. The reconciliation worker will also run with two replicas instead of one. Both are reversible if the doubled cap turns out to mask the underlying problem.
