+++
title = "Scaling Rooms Across Nodes"
description = "Shard rooms across a cluster and let Spinel's rendezvous hashing keep every member's frames on the right node."
date = "2025-06-20"
weight = 60
toc = true
+++

A single Spinel process can hold tens of thousands of open connections, but eventually a room's traffic — or the number of rooms — outgrows one machine. Point every server at the same cluster backend and Spinel shards rooms across nodes by rendezvous hashing: each room name maps deterministically to one owning node, and every server in the cluster knows how to forward a frame to it.

<!-- more -->

## Joining the cluster

Joining the cluster is a server-side change only. A node registers itself, and from then on any room lookup — local or not — resolves to the correct owner automatically.

```go
// server: cluster.go
srv := spinel.New(spinel.Options{
	Cluster: spinel.ClusterConfig{
		Backend: "redis://cluster.internal:6379",
		NodeID:  os.Getenv("NODE_ID"),
	},
})
```

```js
// client: connect-any-node.js
// No change from a single-node setup — the client connects to
// whichever node the load balancer hands it.
const conn = await connect("wss://ws.example.com/spinel");
const room = await conn.join("thread-8842");
```

## What the client sees

That last point is the one worth underlining: clients never learn about node topology. A client can connect to any node behind the load balancer, ask to join a room owned by a different node, and Spinel relays the join and every subsequent frame across the cluster backend transparently.

```go
// server: rebalance.go
srv.OnNodeLeave(func(nodeID string) {
	log.Printf("node %s left; rooms rehash to remaining nodes", nodeID)
})
```

```js
// client: reconnect-during-rebalance.js
conn.on("close", (reason) => {
  if (reason === "node_rebalance") conn.reconnect(); // resume token carries over
});
```

Rendezvous hashing means a node leaving the cluster only rehashes the rooms it owned, not the whole cluster's room table — existing connections to unaffected rooms are never disturbed, and affected clients simply resume with the token they already hold.
