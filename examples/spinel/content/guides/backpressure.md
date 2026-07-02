+++
title = "Backpressure Per Connection"
description = "Every connection gets its own bounded send queue so one slow reader never stalls the rest of the room."
date = "2025-04-02"
weight = 40
toc = true

[extra]
topic = "guides/backpressure"
+++

Broadcasting to a room means writing to every member's socket, and sockets do not all drain at the same speed — a phone on a weak connection can fall behind a desktop on fiber by a wide margin. Without a queue limit, that one slow connection would back up the server's write buffer for everyone else in the room. Spinel gives each connection its own bounded outbound queue instead, so a slow reader only ever hurts itself.

<!-- more -->

## The default queue

The default high-water mark is 64 frames. Once a connection's queue hits that mark, Spinel stops enqueuing new frames for it and emits a `backpressure` event locally; the room keeps broadcasting to everyone else without waiting.

```go
// server: backpressure.go
room := srv.Room("ticker", spinel.RoomOptions{
	QueueSize: 128,
	OnDrop:    spinel.DropOldest,
})
```

```js
// client: backpressure.js
room.on("backpressure", ({ queued, limit }) => {
  console.warn(`falling behind: ${queued}/${limit} queued`);
});
```

## Choosing a drop policy

`DropOldest` is one of two drop policies. It discards the stalest frame in the queue to make room for new ones, which suits high-frequency data like a price ticker where the latest value matters more than every intermediate one. `DropNewest` does the opposite, and a third option, `Disconnect`, closes the connection outright once its queue is full — the right choice for a protocol where every frame must arrive, such as an ordered chat log, because a partial history is worse than a fresh reconnect.

```go
// server: strict-room.go
room := srv.Room("audit-log", spinel.RoomOptions{
	QueueSize: 256,
	OnDrop:    spinel.Disconnect,
})
```

```js
// client: strict-client.js
conn.on("close", (reason) => {
  if (reason === "queue_overflow") promptUserToReconnect();
});
```

Queue depth is available per connection through `conn.QueueDepth()` on the server, which is useful as a metric to alert on before connections start hitting their limit at all.
