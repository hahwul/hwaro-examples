+++
title = "Reading a Title Block"
date = "2024-12-02"
draft = false
description = "A short field guide to the corner title block: drawing number, scale, sheet, and revision, and why each field earns its space."
tags = ["conventions", "revisions", "notes"]
categories = ["meta"]
reading_time = 2
+++

The title block in the corner of a sheet is the smallest, most-read table on the whole drawing. Before anyone studies the geometry they check the corner to confirm they are holding the right sheet at the right revision. Get the block wrong and the most beautiful detail in the world is unusable.

## the fields that matter

Every field is there because someone, once, lost time without it.

1. **Drawing No** &mdash; the unique handle. Everything else references it.
2. **Scale** &mdash; so a dimension scaled off the sheet means something.
3. **Sheet** &mdash; position in the set, written as `01 / 04`.
4. **Rev** &mdash; the single character that tells you whether your copy is current.

## why revision wins

If only one field survived, it would be the revision letter.

> An old drawing is worse than no drawing, because it looks authoritative while being wrong.

A clean revision discipline pairs the block letter with a rev table that records the date, the description, and the initials of who issued it:

```text
REV  DATE        BY
A    2024-11-08  JB
B    2025-07-19  MK
C    2026-05-31  JB
```

Read the corner first. The rest of the sheet is only as trustworthy as that single letter.
