+++
title = "AFCI Versus GFCI Protection"
date = "2025-04-08"
description = "Two protective devices, two different fault conditions, and one combined breaker that handles both."
tags = ["breakers", "safety", "afci", "gfci"]
categories = ["log"]
+++

Arc fault circuit interrupters and ground fault circuit interrupters are often confused because both interrupt power under abnormal conditions. They monitor different phenomena and protect against different hazards.

<!-- more -->

### Ground Fault Detection

A GFCI compares the current flowing in the hot conductor with the current returning on the neutral. The two should be equal. When they differ by more than five milliamperes, the device assumes current is leaking through an unintended path, often a person, and opens the circuit within twenty-five milliseconds. GFCIs protect against electrocution. They are required wherever a circuit may energize someone in contact with ground, such as bathrooms, kitchens, garages, and outdoor receptacles.

### Arc Fault Detection

An AFCI watches the waveform of the circuit and looks for the high-frequency signatures associated with arcing. Series arcs occur in damaged conductors. Parallel arcs occur between conductors with degraded insulation. Both produce localized heating that can ignite framing or insulation before any thermal breaker would trip on overcurrent. AFCIs protect against fire, not shock. The current at which they operate may be well within the rating of the conductor.

### Combination Devices

Modern dual-function breakers combine both protective functions in a single device. They occupy one slot in the panel, monitor both differential current and waveform anomalies, and trip on whichever condition is detected first. The combination breaker has become the default in new residential construction because most circuits now require both forms of protection under current code.

### Nuisance Trips

Both technologies have a history of nuisance tripping when paired with motor-driven loads or older wiring with significant capacitive coupling. Manufacturers have improved the discrimination algorithms, but a poorly behaved load can still trip a sensitive breaker. The diagnosis usually involves swapping the device temporarily and confirming whether the fault is real or an artifact.
