+++
title = "Connecting and the Handshake"
description = "How a client upgrades to a Spinel connection, negotiates a protocol version, and receives a connection id."
date = "2025-02-10"
weight = 10
toc = true
+++

A Spinel connection begins as a plain HTTP request. The client sends a `GET` with an `Upgrade: websocket` header at whatever path the server mounted its handler on; the server checks the protocol version in the request, and if it can serve that version, responds `101 Switching Protocols`. From that point the socket speaks Spinel's binary frame format instead of HTTP.

<!-- more -->

## Accepting the upgrade

The server does not accept just any upgrade — `srv.Handler` runs before the switch happens, so you can reject connections based on headers, an auth token in the query string, or rate limits, all before a single frame is exchanged.

```go
// server: connect.go
srv := spinel.New(spinel.Options{
	ProtocolMin: 3,
})
srv.OnConnect(func(c *spinel.Conn) error {
	if c.Header("X-Auth") == "" {
		return spinel.Reject(401, "missing token")
	}
	return nil
})
```

```js
// client: connect.js
import { connect } from "@spinel/client";

const conn = await connect("wss://api.example.com/spinel", {
  headers: { "X-Auth": token },
});
console.log(conn.id); // server-assigned connection id
```

## Heartbeats

Once the handshake completes, the server assigns the connection an id and starts a heartbeat. Spinel pings every fifteen seconds by default; a client that misses three consecutive pongs is treated as gone and its room memberships are released, which is what lets presence stay accurate without an explicit disconnect message from a client that simply lost its network.

```go
// server: heartbeat.go
srv.Heartbeat(15*time.Second, 3)
```

```js
// client: heartbeat.js
conn.on("ping", () => conn.pong());
conn.on("timeout", () => console.warn("connection presumed lost"));
```

The client library above handles pong replies automatically — the explicit handler exists mainly so you can log or surface a "reconnecting" indicator in the UI when a timeout fires.
