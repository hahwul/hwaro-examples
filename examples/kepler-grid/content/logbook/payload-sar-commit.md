+++
title = "Payload SAR · commit 0a91f3"
date = "2026-05-06"
description = "Synthetic-aperture radar firmware bump rolls out across the constellation in three orbital passes."
tags = ["payload", "firmware", "rollout"]
systems = ["payload"]
+++

The SAR firmware bump (`0a91f3`) lands on the constellation tonight. The change is small — a 38-line patch to the chirp generator that lowers transmit power during the calibration sweep — but the rollout still goes through the staged process.

| Pass | Window (UTC)    | Birds          | Result   |
|------|-----------------|----------------|----------|
| 1    | 22:14 → 22:31   | KEP-01, KEP-02 | nominal  |
| 2    | 23:48 → 00:04   | KEP-03 → KEP-06 | nominal  |
| 3    | 01:22 → 01:38   | KEP-07 → KEP-12 | nominal  |
| 4    | 02:54 → 03:11   | KEP-13 → KEP-17 | pending  |

If pass 4 reports green at 03:11, we will close the rollout and the calibration board will hand control back to the science team at 06:00.
