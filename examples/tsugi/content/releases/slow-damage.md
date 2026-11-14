+++
title = "1.3.0 — Slow Damage"
date = "2026-03-17"
description = "Bit rot is found by checksum before anything is trusted, and named in the report even where it cannot be reversed."
template = "release"

[extra]
version = "1.3.0"
name = "Slow Damage"
seam_note = "Down the left flank to the first break; one hairline runs to the edge."
seam = "M108 116.2 L109.9 123.3 112.6 133.7 116.8 144.7 122.2 152.5 129.1 160.4 137.5 167.4 146.3 173.6 154.3 177.3 163.2 180.4 172.7 183.2 182.6 185.2 192.3 186.7 202.5 188.1 213.4 190.3 224.1 192.4 233.4 193.3 239.9 193.6"
fork = "M129.1 160.4 L124.2 169 117.7 179.7 110.3 188.7 101.8 195.8 91.9 200.3 84 203"
rim_x = 108
rim_y = 116
added = [
  "`tsugi verify` checks every checksum the format carries and exits without writing.",
  "`--manifest SHA256SUMS` supplies digests for formats, like tar, that carry none of their own.",
  "`--witness <copy>` rebuilds damaged ranges from a second copy of the archive, block by block, keeping only blocks that verify.",
  "Single flipped bits in entries under 4 MiB are found and reversed by searching against the entry's CRC-32.",
]
mended = [
  "A zip entry whose CRC does not match no longer aborts the run. It is reported and the walk continues.",
  "A damaged gzip header no longer hides the members concatenated after it.",
]
changed = [
  "`mend` verifies first by default. `--no-verify` restores the old behaviour.",
  "The seam report gains a `rot` join for ranges that were present but wrong.",
]
+++

Not every break is a clean cut. Some archives arrive at their full length with eleven wrong bytes in the middle.

<!-- more -->

That was the case that started this release: a cold-storage drive, eight years old, returning a zip that opened, listed correctly, and extracted a spreadsheet nobody could read. Nothing was missing, so nothing 1.2 looked for was there to find. The damage was slow, a bit here and a bit there, and the only witnesses were the checksums written when the archive was made.

1.3.0 reads those witnesses before it believes anything. Zip entries carry a CRC-32 each, gzip members carry one in their trailer, and pax headers can carry digests. For plain tar, which has no content checksums at all, tsugi accepts a manifest in the format `sha256sum` writes.

Finding rot is not the same as mending it, and this release is careful about the difference. If a second copy of the archive exists, even a damaged one, tsugi can use it as a witness and take each block from whichever copy verifies. If the damage is a single flipped bit in a small entry, the CRC is enough to find it. Past that, tsugi can only tell you which bytes are wrong. It tells you.

```text
$ tsugi mend ledger-2018.zip --witness /mnt/offsite/ledger-2018.zip
verify   412 entries, 3 fail CRC-32
rot      q3/receipts.xlsx    0x00C41A20 – 0x00C41A2A   rebuilt from witness
rot      q4/summary.pdf      0x01F03C11                1 bit reversed by CRC search
rot      q4/scans/0417.tif   0x0220B000 – 0x0220BFFF   witness also damaged, not mended
wrote    ledger-2018.mended.zip   exit 3
```
