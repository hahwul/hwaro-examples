+++
title = "Quickstart"
description = "Install the server package, boot a two-line server, and connect a client in under five minutes."
date = "2025-02-03"
toc = true
+++

Spinel ships as a Go server package and a small JavaScript client. Neither pulls in a framework of its own — the server package sits directly on `net/http`, and the client wraps the browser's native `WebSocket` object with room and presence helpers.

<!-- more -->

## Install

```
go get go.spinel.dev/spinel
npm install @spinel/client
```

## Boot a server and connect a client

A Spinel server needs a listener and at least one room. A client needs a URL and the room it wants to join — everything else is negotiated during the handshake.

```go
// server: main.go
srv := spinel.New()
srv.Room("lobby")
http.ListenAndServe(":4400", srv)
```

```js
// client: app.js
import { connect } from "@spinel/client";

const conn = await connect("ws://localhost:4400/spinel");
const room = await conn.join("lobby");
room.on("chat.message", (msg) => console.log(msg));
```

That is the whole contract for a first connection: the server exposes a room, the client joins it, and both sides now share a live channel that Spinel keeps healthy — heartbeats, backpressure, and reconnection are handled underneath without extra code on either side.

## Verify it worked

Run the server, then open two browser tabs pointed at the same page. Send a message from one client with `room.send("chat.message", { text: "hi" })` and watch it arrive in the other tab's console. If nothing arrives, check the server log for a `handshake refused` line — it almost always means the room name in the client's `join()` call does not match a room registered on the server.

From here, the [Guides](/guides/) walk through rooms, presence, backpressure, resuming dropped connections, and running a room across more than one server.
