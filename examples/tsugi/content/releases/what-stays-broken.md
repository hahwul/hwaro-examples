+++
title = "2.0.0 — What Stays Broken"
date = "2026-06-02"
description = "Bytes that cannot be recovered are now left as named gaps, never filled with zeros that look like data."
template = "release"

[extra]
version = "2.0.0"
name = "What Stays Broken"
seam_note = "Rim to the long arc, forking to close the last loose piece."
seam = "M416 124.8 L414.7 135.1 411 149.8 408 157.9 405 167.4 401.3 176.9 397.4 185.7 391.8 196 386.2 205.9 382 216 379 227.2 376.1 238.2 373.7 245.8"
fork = "M405 167.4 L413.4 174.5 423.8 184.2 429.7 191.1 435.5 198.5 440.5 205.6 447.9 215.4 453.3 222.4"
rim_x = 416
rim_y = 125
added = [
  "A `gap` join for ranges that could not be recovered, with a `.gaps` file beside the output mapping each one.",
  "`--fill none|zero` decides what occupies a gap. The default is `none`.",
  "The report's last line states the total bytes lost, in plain words, every time.",
]
mended = [
  "A `.tar.gz` damaged mid-stream is recovered up to the break, then picked up again at the next gzip member or flush point if one exists.",
  "An encrypted zip entry with damaged ciphertext is no longer described as mended.",
]
changed = [
  "Exit codes: `0` the archive was whole, `3` mended with nothing lost, `4` mended with gaps.",
  "`.seams.json` moves to schema 2. `tsugi seams --schema 1` still writes the old shape.",
  "`--force`, deprecated since 1.2, is removed.",
]
+++

Through every 1.x release, when tsugi could not recover a range inside a member that had to keep its length, it wrote zeros there. That was a mistake.

<!-- more -->

Zeros look like data. A database page that is all zeros reads as an empty page, not a missing one, and in March a user's restored ledger opened cleanly, passed its own consistency check, and was short by four hundred rows. The seam report had listed the range. Nothing downstream ever read the report.

2.0.0 stops filling. A range that cannot be recovered is now a gap: it is left out of the member, the member is written with a `.partial` suffix, and a `.gaps` file records where each hole falls in the original. Tools that open the result see a short file and fail loudly, which is the correct behaviour for a file that is not whole. If you need length-preserving output, for a disk image say, `--fill zero` brings the old behaviour back, and the report says that you asked for it.

It is worth being plain about what tsugi cannot do. It cannot recover encrypted data whose ciphertext is damaged. It cannot continue a solid compressed stream past the point where it breaks, unless the compressor left a boundary to restart from. It cannot rebuild anything for which no second copy, no checksum and no structure survives. No tool can, and one that appears to is inventing bytes.

```text
$ tsugi mend vm-images.tar.gz
verify   gzip stream breaks at 0x1C2A4F310
kept     212 members intact
gap      images/build-07.qcow2   0x1C2A4F310 – 0x1D0000000   218.7 MiB, no restart point
resumed  at gzip member boundary 0x1D0000000
kept     58 members intact
wrote    vm-images.mended.tar   images/build-07.qcow2.partial   vm-images.gaps

2 seams   270 members untouched   218.7 MiB lost and not recoverable   exit 4
```

A gap with a name is worth more than a file that lies about being whole.
