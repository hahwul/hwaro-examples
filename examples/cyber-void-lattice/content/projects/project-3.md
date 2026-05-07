+++
title = "Node Gamma"
date = "2024-05-04"
+++

Node Gamma is the lattice's quorum coordinator. It maintains the consensus state that allows Alpha and Beta to agree on session ordering when traffic crosses node boundaries. The role is light on compute but strict on availability. A short outage at Gamma stalls cross-node sessions until a backup coordinator takes over, and the failover has historically taken longer than the outage itself.

The current build replaces the previous coordinator implementation with a leaner state machine. The machine tracks three values per session: a monotonic sequence number, the originating node identifier, and a deadline timestamp. Anything else the session might have carried is delegated to the originating node and reconstructed on demand. The change reduces Gamma's working set by roughly forty percent and brings its memory footprint within the bounds of the smaller hardware tier reserved for coordinators.

Failover is now driven by a heartbeat protocol that runs every two hundred milliseconds. The backup coordinator promotes itself when three consecutive heartbeats are missed, which sets the worst-case detection time at six hundred milliseconds. The promotion itself completes in under fifty milliseconds because the backup has been replaying the state machine in shadow mode for the entire uptime of the primary.

Gamma's interfaces are deliberately narrow. It accepts session announcements, deadline extensions, and termination notices, and it returns ordering decisions. It does not participate in payload routing, encryption negotiation, or telemetry aggregation. Keeping the surface area small reduces the cost of audits and shortens the failover paths that operators have to reason about during incidents.

Documentation for Gamma's protocol is maintained alongside the source. The spec is short enough to read in one sitting and is updated whenever the wire format changes.
