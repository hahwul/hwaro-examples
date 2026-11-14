+++
title = "1.1.0 — Central Directory"
date = "2025-09-02"
description = "Zip files that lost their central directory are rebuilt from the local headers still standing in the stream."
template = "release"

[extra]
version = "1.1.0"
name = "Central Directory"
seam_note = "The long arc across the belly, from the first break to the far rim."
seam = "M261.8 238.1 L268.4 240.3 278.1 243 289.3 244.9 300.1 246.4 308.7 247.2 318 247.1 327.4 245.5 336.8 243.7 346 242.3 355.2 243.2 364.4 244.6 373.7 245.8 383 245.5 391.9 244.2 400.9 243.2 410.3 242.6 419.5 240.7 428.3 238.1 436.1 234.1 445 228.7 453.3 222.4 461 215.2 466.4 206.2 470.4 196.6 473.9 186.6 477.8 176.4 481.2 165.8 484.1 156.3 486 145.5 487.8 134.9 489.3 125.7 490 119.2"
fork = "M436.1 234.1 L441.8 241.4 448.1 249.9 450.5 256.5 452.1 262 455 266.6 457 270"
rim_x = 490
rim_y = 119
added = [
  "Zip support. A missing or damaged central directory is rebuilt from the local file headers.",
  "Entries written with data descriptors are sized by inflating them to the end of their stream.",
  "Zip64 records are written when the rebuilt archive needs them.",
]
mended = [
  "A `PK\\x03\\x04` signature that happens to occur inside a stored entry no longer starts a phantom member. A candidate header must lead to data that matches its CRC-32.",
  "Sparse GNU tar members are no longer reported as partial.",
]
changed = [
  "The archive type is read from its contents, not from its file extension.",
  "The seam report lists every permission and timestamp tsugi had to assume.",
]
+++

A zip file keeps its index at the very end, which means an interrupted upload loses exactly the part every reader asks for first.

<!-- more -->

The reports that led to this release were all the same shape. A 3 GiB export stops at 2.7 GiB, the central directory was in the missing 300 MiB, and the archive utility shows an empty window. The entries themselves are fine. Each one is preceded by a local header with its name, its sizes and its CRC-32, and those headers are still standing in the stream like fence posts after the fence has gone.

tsugi now walks the stream, finds each local header, inflates the entry behind it, and checks the result against the stored CRC. Entries that verify are listed in a fresh central directory, which is written with a new end record. Streaming zips, where the sizes follow the data instead of preceding it, take longer because the only way to find the end of an entry is to decompress it.

One thing does not come back. Unix permissions, entry comments and some timestamps live only in the central directory, so when it is gone they are gone. tsugi writes `0644` and the local header's DOS time, and says so in the report.

```text
$ tsugi mend export-2025-08.zip
reading  export-2025-08.zip   2.7 GiB, no end record
found    1,286 local headers
kept     1,285 entries, CRC-32 verified
partial  media/site-walk-04.mov   stream ends mid-block
joined   central directory rebuilt, 1,285 records
assumed  mode 0644 on 1,285 entries
wrote    export-2025-08.mended.zip   exit 3
```
