+++
title = "Log 002: Protocol Drift Detected"
date = "2024-05-08"
template = "page"
+++

Routine telemetry from the perimeter relays shows a slow drift in the handshake protocol timestamps. The deviation is small enough to escape automated alerts but consistent enough to warrant a manual review of the synchronization stack.

The drift originated from a single subnet that was migrated last quarter to the new clock authority. The migration scripts assumed a uniform offset, but the upstream NTP pool returned values from two distinct strata. As a result, half the relays in that subnet reported time approximately forty milliseconds ahead of the canonical grid clock.

Forty milliseconds is below the threshold most session protocols treat as significant. Replay protection windows still pass, certificate validity checks still resolve, and TLS resumption tickets remain accepted. The problem appears only at the edges, where time-bounded tokens issued by one node are validated by another within the same subnet. Roughly one in eight tokens fails the validation pass on the first attempt and is reissued silently.

The fix is straightforward. Pin the affected relays to the same stratum-2 source the rest of the grid uses, then run a forced clock step rather than a slewed correction. A slewed correction at this magnitude takes about six hours to converge, during which token reissue traffic remains elevated. The step is jarring but completes within seconds.

Recovery is verified by sampling the token reissue rate at five-minute intervals for one hour after the change. A baseline reissue rate sits near 0.4 percent. The current spike puts the affected subnet at 12 percent. Anything below 1 percent after the step is considered nominal.

Documentation has been updated. The migration script will receive a guard clause to reject mixed-stratum responses on its next deployment cycle.
