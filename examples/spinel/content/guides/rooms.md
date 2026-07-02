+++
title = "Rooms and Membership"
description = "Create rooms, join and leave them, and broadcast events to every member without touching raw sockets."
date = "2025-02-24"
weight = 20
toc = true

[extra]
topic = "guides/rooms"
+++

A room is Spinel's unit of broadcast. Connections join a room by name, and anything sent to that room reaches every current member — the server tracks membership so your handlers never have to iterate a connection list by hand. Rooms can be declared up front, like `lobby` in the quickstart, or created on demand the first time a client asks to join one.

<!-- more -->

## Joining a room

```go
// server: rooms.go
srv.OnJoinRequest(func(name string, c *spinel.Conn) (*spinel.Room, error) {
	if !isValidRoomName(name) {
		return nil, spinel.Reject(400, "bad room name")
	}
	return srv.RoomOrCreate(name), nil
})
```

```js
// client: join.js
const room = await conn.join("thread-8842");
room.on("comment.posted", (comment) => renderComment(comment));
```

`RoomOrCreate` is idempotent — the first client to name a room creates it, and every client after that joins the existing one. Rooms with no members are garbage collected after a short grace period, so you do not need a separate cleanup job for rooms that correspond to, say, a support ticket that eventually closes.

## Broadcasting

Broadcasting is the other half of the contract. Any connection in a room — or the server itself, from a background job — can publish an event that fans out to the whole room in one call.

```go
// server: broadcast.go
room := srv.Room("thread-8842")
room.Broadcast(spinel.Event("comment.posted", comment))
```

```js
// client: send.js
room.send("comment.posted", {
  text: "Looks good to me.",
  authorId: currentUser.id,
});
```

A client-originated `send` is broadcast to the room by default, including back to the sender — most UIs render optimistically anyway, but if you would rather the sender not receive its own echo, pass `{ excludeSelf: true }` as a third argument on the server's `Broadcast` call.
