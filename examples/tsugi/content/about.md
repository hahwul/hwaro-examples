+++
title = "About"
description = "What tsugi is, what it refuses to do, and why its changelog is drawn on a bowl."
+++

tsugi is a command-line tool for archives that no longer open. It reads a damaged tar, zip or gzip file, keeps everything that can be shown to be intact, joins the pieces back into an archive that ordinary tools accept, and writes a report of every place it made a join.

It is deliberately narrow. It does not extract, compress, encrypt or sync. It mends, and it tells you where.

## The join

The name is the second half of *kintsugi* (金継ぎ, "gold joinery"), the craft of mending broken ceramics with lacquer and then dusting the lacquer with gold. The seam is not disguised. It is made the most deliberate line on the object, so that anyone who picks the bowl up knows where it broke and that it was mended on purpose.

That is the standard tsugi holds itself to. A mended archive that cannot be told apart from an undamaged one is a liability, because nobody downstream knows which files to check. So every run ends with a seam report, and the report accounts for every byte: copied through, rewritten, skipped, or lost.

## Reading this log

The bowl on the front page carries one seam for each release, and the release's own page shows that seam alone. Small repairs are short seams. The line down the side of the log is the same crack, continued.

Each entry sorts its changes three ways:

- **Added** is a new piece, set in where there was none.
- **Mended** is a break closed: something that was wrong and is now right.
- **Changed** is a piece re-cut: behaviour that worked before and works differently now.

Gold appears on this site only where something was repaired.

## Installing

```sh
curl -fsSL https://get.tsugi.example/install.sh | sh
tsugi --version
```

tsugi is a single static binary for Linux, macOS and FreeBSD. It reads archives in place and never modifies its input.

## What it will not do

It will not guess. Where bytes are gone and nothing survives to rebuild them from, tsugi leaves a named gap and says how large it is. The notes for [2.0.0](../releases/what-stays-broken/) explain why that became the default.

tsugi is maintained by Wren Halloran and Tomasz Abe, with thanks to everyone who has sent in a file that would not open.
