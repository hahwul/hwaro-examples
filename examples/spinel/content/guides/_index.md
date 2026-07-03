+++
title = "Guides"
description = "Rooms, presence, backpressure, reconnection, and running Spinel across more than one node."
sort_by = "weight"
template = "section"
+++

Each guide below covers one part of the connection lifecycle, in the order most services hit it: connect, join a room, track who else is there, keep a slow reader from blocking everyone else, survive a network blip, then grow past a single server. Every guide pairs a short explanation with the server and client code for that behavior, so you can see both sides of the frame at once.

You do not need to read them in order. If you already have a room broadcasting messages and just need to stop one slow phone from backing up the whole event loop, start with backpressure — the rest will still be there when you need it.

Every code sample in this section shows a server snippet in Go next to the client snippet in JavaScript that talks to it, so you can trace one behavior across both sides of the connection without flipping between separate pages. If you have not connected a client yet, the [Quickstart](/quickstart/) is a faster on-ramp than any single guide here.
