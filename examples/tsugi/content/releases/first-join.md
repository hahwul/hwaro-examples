+++
title = "0.9.0 — First Join"
date = "2025-02-11"
description = "Truncated tar archives are read up to the last whole member, and the cut is written down."
template = "release"

[extra]
version = "0.9.0"
name = "First Join"
seam_note = "The first break: rim to foot, through the point of impact."
seam = "M196 124.6 L198.9 131 204.2 139.8 210.6 149.7 215.9 158 221.3 167.7 227 177.4 232.6 185.6 239.9 193.6 245.9 201.2 250.4 209.7 253.8 219.2 257.5 228.6 261.8 238.1 266.3 248.5 271.2 259 274.9 268.5 279.9 279.5 283 287"
fork = ""
rim_x = 196
rim_y = 125
added = [
  "`tsugi mend` for tar archives in ustar, pax and GNU formats.",
  "A member cut short by the end of the file is kept as far as it goes and written with a `.partial` suffix.",
  "The end-of-archive trailer is rewritten, so ordinary tools open the result without complaint.",
]
mended = [
  "A header is trusted only after its checksum passes. A damaged header is skipped by scanning forward on 512-byte boundaries to the next one that verifies.",
]
changed = [
  "Output is always a new file. tsugi never writes into the archive it is reading.",
]
+++

tsugi began with one tape image: a nightly backup, 41 GiB of tar, cut short at 03:12 when the disk it was being written to filled up.

<!-- more -->

Every extractor we tried said the same thing, `Unexpected EOF in archive`, and then declined to hand over the 18,402 members that were sitting there intact. That refusal is reasonable for a tool whose job is extraction. It is not much use at four in the morning.

A tar archive is a simple thing. Each member is a 512-byte header followed by its data, padded to the next block. The header carries the member's size and a checksum of itself, so it is possible to walk the file header by header, verify each one, and know precisely where the last whole member ends. That walk is all 0.9.0 does. When the final member's declared size runs past the end of the file, tsugi keeps the bytes that exist, marks the member as partial, and closes the archive properly behind it.

It does not pad the missing part, and it does not pretend the member is complete. The cut is printed, with its offset, every time.

```text
$ tsugi mend nightly-0211.tar
reading  nightly-0211.tar   41.2 GiB, ends inside a member
kept     18,402 members intact
partial  var/db/ledger.sqlite   1.1 GiB of 1.6 GiB present
joined   trailer rewritten at 0x0A4C1F000
wrote    nightly-0211.mended.tar
```

This is a pre-release. The command line will change before 1.0, and tar is the only format it understands.
