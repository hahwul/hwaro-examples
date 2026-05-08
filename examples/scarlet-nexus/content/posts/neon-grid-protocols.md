+++
title = "Neon Grid Protocols and Signal Routing"
date = 2024-05-02
description = "How runners exploit the layered handshake systems that knit the Nexus together."

[taxonomies]
tags = ["cyberpunk", "networking", "hwaro"]
+++

The Nexus is not a single network. It is a stacked lattice of mesh fabrics, each layer controlled by a separate corporate consortium and bound to the others by negotiated handshake protocols. Couriers and infiltrators rely on this layering. A signal that fails one validation step can usually be coerced through an adjacent layer, where the rules are slacker and the audit logs less aggressive.

Most public traffic moves over the Tertiary Bands, which carry advertising payloads, civic broadcasts, and consumer messaging. The bands are saturated, so packet loss is constant and the protocol tolerates retries with a generous window. That tolerance is also the weakness. A patient runner can fold encrypted fragments into the retry stream and reassemble them at the far end without ever appearing as a single coherent transmission.

The Secondary Bands enforce stricter validation. Each frame carries a rolling signature derived from the sender's hardware fingerprint and the current grid time. Spoofing the fingerprint is feasible. Spoofing the rolling time window is harder, because the grid clock advances by atomic reference and any drift greater than two milliseconds triggers a quarantine sweep.

Above both sit the Primary Bands, reserved for arbiter traffic and core service synchronisation. Direct injection is essentially impossible. The standard runner approach is to compromise a Secondary node that already holds Primary trust, then ride that trust upward in short bursts. The bursts must end before the arbiter rotates its session keys, which happens on a schedule no outsider has yet mapped fully.

The practical lesson is that the Nexus rewards patience. Brute force draws sweepers. Incremental access, mapped against the rhythms of legitimate traffic, draws nothing at all. The grid is loud enough to hide in, provided you match its cadence.
