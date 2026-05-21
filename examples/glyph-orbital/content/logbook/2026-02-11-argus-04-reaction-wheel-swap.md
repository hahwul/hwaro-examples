+++
title = "ARGUS-04 reaction wheel swap from RWA-2 to RWA-4"
date = "2026-02-11"
description = "Wheel speed bias on RWA-2 crossed the operations threshold during the Tuesday morning pass. We swapped to the spare and re-tuned the attitude controller in the same orbit."
tags = ["anomaly", "hardware", "attitude"]
spacecraft = ["ARGUS-04"]
+++

The wheel-speed bias on `ARGUS-04 / RWA-2` had been trending upward at roughly twenty revolutions per minute per week since late January. On 11 February at 06:42 UTC, during the third orbit of the morning support window, the bias crossed the five-hundred-rpm threshold we have written into the attitude-control configuration, and the on-board controller raised the soft fault we expected it to raise.

The swap itself was uneventful. We commanded the spacecraft into safe-pointing mode at 06:51, brought `RWA-4` (the cold spare on the +Y face) out of its parked state, and re-loaded the wheel allocation matrix at 07:08. The vehicle reacquired its science attitude at 07:14, twenty-three minutes earlier than the worst-case timeline in the procedure.

What was less uneventful was the re-tuning. `RWA-4` had been on orbit for fourteen months without being commanded above six hundred rpm, and its friction torque at low speed was higher than the value in the look-up table from acceptance test. We saw the first reaction-control thruster fire two passes later, which is what tipped us off. The fix was to re-fit the friction curve from on-orbit telemetry; the new coefficients are in `cfg/attitude/argus04-rev07.yaml` and the change is propagated to the rest of the bus-type-B fleet as a pending review item.

## Root cause on RWA-2

Vibration spectrum from the last six weeks of telemetry shows the characteristic broadening of a degrading bearing. RWA-2 will not be commanded again. It remains powered down and the attitude controller is configured to treat it as absent. The vehicle now flies on RWA-1, RWA-3, and RWA-4, which is a fully redundant three-axis configuration.

## Follow-ups

- Update the wheel-bias trending alert to fire at three hundred rpm, not five hundred, on bus-type-B vehicles
- Add the friction-curve re-fit to the spare-activation procedure as a mandatory step
- Schedule a hardware-in-the-loop run on the engineering model with the new friction model
