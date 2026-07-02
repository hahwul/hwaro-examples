+++
title = "Resuming a Dropped Connection"
description = "Resume tokens let a client reconnect after a network blip without losing room membership or missed events."
date = "2025-05-12"
weight = 50
toc = true

[extra]
topic = "guides/reconnection"
+++

Mobile networks drop connections constantly, and rejoining every room from scratch after each blip is both slow and lossy — anything broadcast during the gap is simply gone unless the client remembers where it left off. Spinel issues a resume token at handshake time specifically to close that gap. The token identifies the connection's prior session and its last acknowledged sequence number.

<!-- more -->

## Resuming within the window

When a client reconnects with a resume token, Spinel restores its room memberships automatically and replays any frames sent since the last sequence number it acknowledged, as long as the gap falls inside the retention window.

```go
// server: resume.go
srv := spinel.New(spinel.Options{
	ResumeWindow: 2 * time.Minute,
})
```

```js
// client: resume.js
const conn = await connect(url, { resumeToken: sessionStorage.getItem("spinel-resume") });
conn.on("connected", () => {
  sessionStorage.setItem("spinel-resume", conn.resumeToken);
});
```

## When the window closes

A resume outside the retention window fails cleanly rather than silently — the server returns a fresh connection with no restored rooms, and the client is expected to rejoin from application state rather than assume continuity.

```go
// server: resume-expired.go
srv.OnResumeExpired(func(c *spinel.Conn) {
	c.Send(spinel.Event("session.reset", nil))
})
```

```js
// client: resume-expired.js
conn.on("session.reset", () => {
  sessionStorage.removeItem("spinel-resume");
  rejoinRoomsFromAppState();
});
```

Two minutes is a reasonable default for a mobile client moving between cell towers; a server behind a load balancer with aggressive idle timeouts may want a shorter window so a stale token never outlives the infrastructure that would need to honor it.

{{ alert(type="warning", body="Resume tokens grant re-entry to a session without a fresh handshake. Store them the way you would a short-lived credential — sessionStorage or an in-memory variable, never a place that survives a shared or public device.") }}
