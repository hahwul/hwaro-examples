+++
title = "S-Band Dropout Anomaly on Orbit 14"
date = 2025-11-09
tags = ["comm", "anomaly", "caution"]
description = "Two short S-band downlink dropouts over the southern node prompted an INCO review and a high-gain antenna re-point."
+++

{% alert(type="caution") %}Two S-band downlink dropouts were logged on orbit 14. Telemetry buffered onboard and replayed with no data loss. Status remains CAUTION pending the next clean pass.{% end %}

INCO flagged two signal-lock drops as the vehicle crossed the southern node. Each lasted under four seconds, and the onboard recorder buffered all channels through the gap, so no telemetry was lost. The working theory is multipath interference from the low-gain antenna at high look angles.

## what we saw

- **Drop 1**: RSSI fell from -106 dBm to below threshold at 02:41 MET.
- **Drop 2**: identical signature, 92 minutes later -- one full orbit.
- **Recovery**: lock re-acquired automatically within the link budget.

Because both events repeat exactly one period apart, the geometry is almost certainly the cause rather than a hardware fault. The team commanded a high-gain antenna re-point to widen the margin.

## go-forward plan

1. Re-point the high-gain antenna by 4 degrees in azimuth.
2. Re-poll INCO after the next southern pass.
3. Clear the caution lamp to green if two consecutive passes hold lock.

If the next pass holds, COMM returns to nominal and the go/no-go board goes fully green. Until then, the lamp stays amber and Flight keeps the item on the active watch list.
