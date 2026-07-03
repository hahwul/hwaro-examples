+++
title = "Features"
description = "Quick capture, the momentum feed, automatic connections, and a focus mode that gets out of the way."
[extra]
eyebrow = "What's inside"
next_url = "/sync/"
next_title = "Sync"
+++

Momentum keeps its feature list short on purpose. Every one of these exists to remove a decision, not to add a screen.

## Quick capture

A single global shortcut opens a capture bar over whatever you're doing. Type, press return, and the note is written to disk — no title required, no notebook to pick, no confirmation dialog. The bar closes itself and gives you back your cursor. Most captures take under two seconds from shortcut to saved.

## The momentum feed

This is the home screen, and it is the only screen that matters day to day. Notes are ordered by the last time you meaningfully touched them, newest at the top. There's no separate "recent" view and no inbox to triage — the feed already is one, continuously.

## Connections, found automatically

Momentum reads plain-text links and shared vocabulary between notes and quietly draws a thread between them, visible as a thin rail in the margin. Open a note about a client call and the feed surfaces the three other notes that mention the same name, without you ever having built a tag for it.

## Focus mode

Pressing `Cmd+.` (or `Ctrl+.` on Windows and Linux) collapses the feed and the margin rail, leaving one note full width on a plain page. It's the same editor, just with the furniture removed — for the fifteen minutes where you actually need to write instead of browse.

## Plain files, always yours

Every note is a small file on disk, not a row in a database you can't open. A captured note looks like this:

```
---
id: 8f2c1a
touched: 2026-06-14T09:12:00Z
links: [dana-tuesday, q3-planning]
---
Talk outline: capture without friction

Open the app, start typing. The folder question
never comes up. Compare against the old app's
"choose a notebook" step during the demo.
```

The `touched` field is the only thing the feed actually sorts on — everything else, including the links, is metadata Momentum keeps for you but never requires you to fill in. That same field is what travels between devices; see [how sync merges it](@/sync.md) without ever asking you to resolve a conflict.
