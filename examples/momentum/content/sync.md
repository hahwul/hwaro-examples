+++
title = "Sync"
description = "Local-first storage with encrypted, peer-to-peer sync — your notes never have to leave your devices to travel between them."
[extra]
eyebrow = "How it travels"
next_url = "/pricing/"
next_title = "Pricing"
+++

Momentum is local-first, which is a design decision before it's a marketing term: the app on your laptop is a complete, working copy of your notes, full stop. Sync is something we layer on top of that copy, never a requirement for it to function.

## The pile merges itself

Each note carries a small log of edits rather than a single overwritten value, using a conflict-free replicated data type (CRDT). When two devices have both changed the same note offline — you edited a line on your phone on the train, then again on your laptop before the phone reconnected — Momentum merges both logs on next contact and produces one note with both edits, no dialog box asking you to pick a winner. The `touched` timestamp that drives the momentum feed is merged the same way, so the note resurfaces on every device at once.

## Encrypted before it leaves the device

Notes are encrypted locally with a key derived from your device passphrase before any sync traffic is sent. The relay server that shuttles encrypted blocks between your devices cannot read them — it sees ciphertext and routing metadata, nothing else. If you sync only over a local network, traffic never touches the relay at all.

{{ alert(type="note", body="The relay currently runs as a single hosted region. A self-hosted relay binary, for teams who want sync to never leave their own network, ships alongside the 2.0 release.") }}

## What a sync session looks like

Nothing here requires reading logs, but if you ever open the diagnostics panel, a session looks like this:

```
14:02:11  peer laptop-3f9a discovered (lan)
14:02:11  handshake ok · protocol v3 · e2e verified
14:02:12  sending 4 changed notes (encrypted, 6.2kb)
14:02:12  receiving 1 changed note (encrypted, 1.1kb)
14:02:12  merge complete · 0 conflicts · feed reordered
```

## Offline is not a fallback mode

Because the local copy is the real copy, losing a connection never blocks writing, searching, or reading. Momentum simply queues the encrypted change log and sends it the next time a peer or the relay is reachable — on a plane, in a basement, or with sync turned off entirely because you only ever use one device. Sync across devices is a paid feature; the single-device tier stays free — see [pricing](../pricing/) for the full breakdown.
