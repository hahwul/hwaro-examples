+++
title = "Protocol"
description = "The wire-level mechanics underneath Basalt: framing, replication, and the rebalance protocol consumer groups speak."
sort_by = "weight"
template = "section"

[extra]
topic = "protocol/*"
+++

Everything in the [Guides](/guides/) section describes Basalt from a client's point of view — send this, poll that, commit here. This section describes the same behavior from underneath: the bytes a producer actually writes to a socket, how a leader and its followers agree on what is durable, and the handshake a consumer group runs every time membership changes.

None of this is required reading to operate a cluster. It exists for three audiences: authors writing a new client library against the wire protocol directly, operators debugging a replication or rebalance incident who need to know what "in step" actually means at the byte level, and anyone curious how a broker keeps its promises once the friendly client API gets out of the way.

Read [Wire Format](/protocol/wire-format/) first if you are implementing a client. Read [Replication & ISR](/protocol/replication-isr/) and [Consumer Group Rebalancing](/protocol/rebalancing/) in either order if you are debugging an existing cluster.
