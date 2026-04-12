+++
title = "Final Countdown"
description = "T-010:00 - Terminal count sequence and autonomous flight computer control"
date = "2026-04-12"
weight = 3
tags = ["countdown", "terminal-count", "autonomous"]
+++

## T-010:00 -- Final Countdown

Terminal count sequence engaged. The autonomous flight computer has assumed primary control of all vehicle systems.

### Terminal Count Sequence

The final ten minutes before launch represent the most critical phase of the countdown. The vehicle transitions from ground-controlled to autonomous operations. Every system must be in a go state, and every station must confirm readiness.

**Go/No-Go Poll**

The launch director conducts a final polling of all console positions:

- Flight dynamics -- GO
- Propulsion -- GO
- Guidance and navigation -- GO
- Range safety -- GO
- Weather -- GO
- Ground systems -- GO
- Launch director -- GO FOR LAUNCH

### Engine Chill Sequence

Beginning at T-007:00, cryogenic propellant is circulated through the engine turbopump bearings and combustion chamber jacket. This thermal conditioning prevents thermal shock at ignition and ensures the turbopumps spin up smoothly when the start command is issued.

### Automated Sequence Events

| Time Mark | Event |
|-----------|-------|
| T-010:00 | Terminal count begins |
| T-007:00 | Engine chill sequence start |
| T-005:00 | Flight computer final self-test |
| T-004:00 | Arm flight termination system |
| T-003:00 | Transfer to internal power |
| T-002:00 | Retract crew access arm |
| T-001:00 | Flight computer assumes control |
| T-000:31 | Auto-sequence start |
| T-000:10 | Ignition hydrogen burnoff igniters |
| T-000:03 | Main engine start command |

### Vehicle Configuration at T-001:00

At one minute to launch, the vehicle stands on internal power and internal pneumatics. All umbilical connections except the tail service mast have been retracted. The flight computer is running its final pre-ignition checks at 100 cycles per second.

The sound suppression system activates at T-000:06, flooding the flame trench with hundreds of thousands of gallons of water to attenuate acoustic energy during engine ignition.

### Hold Criteria

An automatic hold will be triggered by:

- Any engine parameter outside nominal range during chill
- Loss of redundant telemetry link
- Range safety track loss
- Weather violation (lightning, upper winds)
- Flight termination system anomaly

The countdown clock will recycle to T-010:00 for any hold, with a minimum 10-minute recycle time to re-establish cryogenic conditioning.
