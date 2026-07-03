+++
title = "Spinel"
description = "A websocket framework that treats rooms, presence, and slow readers as first-class problems, not afterthoughts."
template = "home"
+++

Spinel is a websocket framework for services that need more than a raw socket. Rooms, live presence, and a backpressure policy are wired in from the first accepted frame — not bolted on later with a second library and a prayer.

A connection starts as an ordinary HTTP upgrade. Everything after that — which room a connection belongs to, who else is in it, how fast frames are allowed to leave the server for that one connection — is state Spinel already tracks, so your handlers stay short.

```go
room := spinel.Room("lobby")
room.Broadcast(spinel.Event("chat.message", payload))
```

Rooms hold presence state, every connection holds its own bounded outbound queue, and the two communicate through frames Spinel already knows how to interpret. Nothing about that contract changes when a room has three members or three thousand spread across a cluster.

| Property | Spinel's answer |
|---|---|
| Delivery | Ordered per connection, dropped past the queue high-water mark, never silently blocked |
| Presence | Diffed join/leave events, not full-roster snapshots, pushed to every room member |
| Reconnection | Resume tokens replay missed frames within a configurable retention window |
| Scaling | Rooms are sharded by rendezvous hashing; clients never see the topology |
