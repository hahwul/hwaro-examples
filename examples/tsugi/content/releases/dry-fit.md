+++
title = "1.2.0 — Dry Fit"
date = "2025-12-09"
description = "A dry run lays every piece out and shows the joins it would make, without writing a byte."
template = "release"

[extra]
version = "1.2.0"
name = "Dry Fit"
seam_note = "A rim shard, lifted out and seated again."
seam = "M526 114.4 L527.2 119.4 530.5 125.7 536.7 133.1 544 137.8 551.5 134 557.9 126 561.8 115.3 564 106"
fork = ""
rim_x = 545
rim_y = 111
added = [
  "`--dry-run` analyses the archive, prints the seam report it would produce, and writes nothing.",
  "`tsugi plan` saves that analysis to a file, and `mend --from-plan` uses it to skip the second scan.",
  "The size of the mended output is estimated and checked against free space before the first byte is written.",
]
mended = [
  "The member table is streamed to disk during a scan. A 2 TiB archive now needs under 200 MiB of memory.",
  "An interrupted mend leaves nothing behind. Output is written to a temporary file and renamed once it is whole.",
]
changed = [
  "Defaults can be set in `tsugi.toml`, in the working directory or in `~/.config/tsugi/`.",
  "The default output name places `.mended` before the extension, where 1.1 appended it.",
]
+++

Before lacquer is mixed, the pieces of a broken bowl are fitted together dry, to learn whether they still make a bowl.

<!-- more -->

tsugi had no equivalent, and the lack of one showed up on a volume with 40 GiB free and a damaged 2 TiB archive on it. Mending always writes a new file, so there was no room to mend. What the operator needed was an answer to a narrower question: is enough of this archive recoverable to be worth freeing two terabytes somewhere else?

`--dry-run` answers that. It performs the whole analysis, including every checksum, and prints the seam report exactly as a real run would, with the exit code a real run would return. It opens the archive read-only and creates no files, not even temporary ones.

Because the analysis is the slow part, it can now be kept. `tsugi plan` writes it to a small file, and a later `mend --from-plan` goes straight to writing. A plan records the size and modification time of the archive it describes, and it is refused if either has changed.

The same release adds a configuration file, mostly so that these choices stop being flags.

```toml
# tsugi.toml
[mend]
output     = "{stem}.mended{ext}"
on_partial = "keep"            # keep | drop

[report]
format = ["table", "json"]

[limits]
resync_scan = "64MiB"          # how far to look for the next valid header
```

The scan itself was rewritten to stream, which is why the archive that prompted all this can now be planned on a laptop.
