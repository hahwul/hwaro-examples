+++
title = "About"
description = "What Annal is, what Commonplace is, and the ledger rules this chronicle keeps."
tags = ["about"]
+++

## What this is

Annal is the release ledger for Commonplace, a local-first, markdown-native
note-taking app built around backlink graphs. Every note in Commonplace is a
plain text file on your own disk; every link between notes is indexed and
shown both ways, so the connections you make while writing stay visible
instead of disappearing into folders you'll forget the names of.

This site is not the app's marketing page or its documentation — it is the
chronicle. Six folios in, the format has held: a dated entry per release,
a short editorial note on what the folio is *for*, and an Added / Changed /
Fixed accounting of what actually moved. Nothing is quietly edited after
publication; if a folio needs a correction, the correction is its own later
entry.

## Why a ledger, and not a blog

A changelog that reads like a blog tends to drift — announcement posts get
longer, technical detail gets thinner, and eventually you can't tell what
shipped from what's aspirational. A ledger format resists that by
construction: every entry opens the same way, closes the same way, and its
place in the sequence is the version number itself, hanging in the margin
like a folio number in an accounting book. There is nowhere for a vague
entry to hide.

## Reading the ledger

Each release's semantic version sits in the left margin, set in oldstyle
figures, above a hairline red rule. That rule is the only decoration this
site allows itself — it marks where one folio ends and the next opens,
the same way a ledger book rules off one day's entries from the next.
Tags along the bottom of each folio group releases by what they touched:
`sync`, `graph`, `security`, and so on. The [tag index](../tags/) collects
every folio by theme if you're chasing one thread — say, everything that
touched sync — across the whole run.

## Commonplace, briefly

For context on the app itself: Commonplace stores a vault as a folder of
`.md` files, resolves `[[wikilinks]]` between them, and renders both the
outbound links and a live backlinks panel showing what points back. Graph
View draws the whole vault as a force-directed map. Sync (0.4.0) moves
changes between your own devices over the local network or an
end-to-end-encrypted relay — never through a Commonplace-run account. None
of that changes retroactively either; it's exactly what the folios below
say it is, as of the date each one was posted.
