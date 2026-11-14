+++
title = "1.0.0 — The Seam Report"
date = "2025-05-20"
description = "Every mend now ships with a report listing each byte range tsugi rewrote, skipped, or left incomplete."
template = "release"

[extra]
version = "1.0.0"
name = "The Seam Report"
seam_note = "From the rim into the first break, with one spur that stops short."
seam = "M326 127 L321.1 135.7 313.8 147.9 307.1 156.2 299 164.8 291.1 173.2 284.4 181.8 277.8 190.1 270.5 196.7 259 204.5 250.4 209.7"
fork = "M299 164.8 L307.9 170.1 317.9 178.1 324.7 187.2 329.7 196.1 332.1 204.2 333 210"
rim_x = 326
rim_y = 127
added = [
  "The seam report: a table on stdout and a `.seams.json` file beside the output, one row per byte range tsugi touched.",
  "`tsugi seams <file>` prints the report for an archive mended earlier.",
  "Stable exit codes: `0` when there was nothing to mend, `3` when the archive was mended.",
]
mended = [
  "A pax extended header that straddles the cut is no longer thrown away whole; the records that arrived complete are applied.",
  "GNU long names are reattached to the member they describe instead of surfacing as stray files named `././@LongLink`.",
]
changed = [
  "`mend` refuses to overwrite an existing output file.",
  "Progress goes to stderr. stdout carries the report and nothing else, so it can be piped.",
]
+++

Three weeks after 0.9.0, someone restored a mail spool from a mended archive and then could not say which of its files tsugi had touched.

<!-- more -->

The repair had worked. That was the problem: it had worked so quietly that the mended archive was indistinguishable from one that had never been damaged, and so nobody could decide which files deserved a second look. A repair you cannot see is a repair you cannot trust.

So 1.0.0 is less about mending than about saying what was mended. Every run now ends with a seam report. Each row is one contiguous byte range in the output, the kind of join made there, and the evidence that justified it. A range tsugi skipped because a header failed its checksum is a seam. The trailer it wrote is a seam. A member that stops early is a seam. Everything not listed was copied through byte for byte, and the last line counts those members too, so the report accounts for the whole file.

The same data is written as JSON beside the output. The format is versioned, and we intend to keep it readable for as long as tsugi exists.

```text
SEAM REPORT  nightly-0211.mended.tar

  #  range                          join       evidence
  1  0x0A07D2400 – 0x0A4C1EDFF      partial    var/db/ledger.sqlite, 1.1 of 1.6 GiB
  2  0x0A4C1EE00 – 0x0A4C1EFFF      skipped    header checksum failed, no later header
  3  0x0A4C1F000 – 0x0A4C1F3FF      rewritten  end-of-archive trailer, 2 zero blocks

  3 seams   18,402 members untouched   1 member incomplete
```

With the report in place the command line is frozen. This is 1.0.
