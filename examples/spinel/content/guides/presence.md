+++
title = "Presence Tracking"
description = "Spinel keeps a live roster of who is in a room and pushes diffs, not snapshots, to everyone else."
date = "2025-03-10"
weight = 30
toc = true

[extra]
topic = "guides/presence"
+++

Every room keeps its own roster: connection ids, whatever metadata you attach at join time, and a join or leave timestamp. When membership changes, Spinel sends a small diff — one added or removed entry — to the rest of the room, rather than the full roster. A room with four hundred members generates the same size presence event as a room with four, which matters once you have more than a handful of people in one place at once.

<!-- more -->

## Join and leave metadata

Metadata is attached once, at join time, and stays with the connection until it leaves. It travels with every presence event, so clients never have to make a second request just to know a peer's display name.

```go
// server: presence.go
room.OnJoin(func(c *spinel.Conn, meta spinel.Meta) {
	log.Printf("%s joined %s", meta["name"], room.Name)
})
```

```js
// client: presence.js
const room = await conn.join("lobby", {
  meta: { name: currentUser.name, color: currentUser.color },
});
room.presence.on("join", (peer) => addToRoster(peer));
room.presence.on("leave", (peer) => removeFromRoster(peer));
```

## Reading the current roster

`room.presence.list()` returns the current roster at any time, which is what you want when rendering the initial member list on join — after that, the `join`/`leave` events are enough to keep it current without polling.

```go
// server: roster.go
room.Presence().Snapshot() // []spinel.Peer, current members only
```

```js
// client: roster.js
const peers = room.presence.list();
renderRoster(peers.map((p) => p.meta.name));
```

Presence is scoped to the room, not the connection — a client in three rooms at once appears in three separate rosters, each with whatever metadata it registered when it joined that particular room.
