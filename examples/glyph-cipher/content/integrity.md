+++
title = "Integrity Log"
description = "SHA-256 hashes of every transmission, recorded at publication. Signed with the channel's PGP key (0x47A1 ⌬ 9D03)."
+++

This page is the canonical record of every transmission posted to glyph_cipher. Each entry records the transmission ID, the publication timestamp, the operator handle, and the SHA-256 hash of the source markdown at the moment of publication.

The log itself is signed with the channel's PGP key (0x47A1 ⌬ 9D03). The signature is published as a detached file alongside this page — verify against the public key on any keyserver that mirrors the SKS pool.

## current log

| ID | Date | Operator | SHA-256 |
|---|---|---|---|
| 0042 | 2026-05-20 | @dial | `a31c4f0d 8b22e601 14cd2cb1 …` |
| 0041 | 2026-05-13 | @relic | `2bac7f99 5d40e218 7eaa1042 …` |
| 0040 | 2026-05-06 | @harken | `a31c0440 c01b9d3e 28ff8810 …` |
| 0039 | 2026-04-28 | @kestral | `beef1107 9a02f0c4 8b1144cd …` |
| 0038 | 2026-04-21 | @dial | `47a19d03 ef228801 c0de4f02 …` |
| 0037 | 2026-04-14 | @relic | `2bacff22 90b13344 5a01ce20 …` |
| 0036 | 2026-04-07 | @harken | `a31c4f0d 7711cd09 2e8804b3 …` |
| 0035 | 2026-03-31 | @kestral | `beef1107 04129e3f 79b8e002 …` |

The full hash for each transmission is available on the transmission's page in the page header. We truncate to the first 24 hex characters in this summary table to keep the table readable.

## how to verify

To verify a transmission's integrity, hash the published markdown source of the transmission and compare against the recorded value. The source can be fetched from the public repository:

```bash
curl -s https://raw.githubusercontent.com/.../transmissions/observation-0042-noise-replay.md | sha256sum
# expected: a31c4f0d 8b22e601 14cd2cb1 ...
```

If the hash does not match, please report the discrepancy to *relay@glyph-cipher.example*. We will investigate and update this log within forty-eight hours.

## corrections

Corrections to a published transmission are appended, never overwritten. A transmission that has been corrected since publication will show two entries here — the original hash and the corrected hash, with a one-line note describing the correction.

We have not yet had a tamper event. We have issued three voluntary corrections, all factual. The corrections are recorded in their respective transmissions and in this log.

— *the operators*
