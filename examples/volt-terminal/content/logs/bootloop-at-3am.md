+++
title = "Bootloop at 3am"
date = "2026-04-08"
description = "An embedded box refuses to boot. The cause is a single stale byte."
tags = ["systems", "debug"]
[extra]
kind = "SYSTEMS"
+++

# Bootloop at 3am

An embedded box started rebooting in a tight loop after a minor kernel patch. The patch was three lines. The reboot log was two screens of failed initrd unpacking.

## Isolating

Bisect. As always. Checkout each commit, build, flash, power cycle, log. The break was on a commit whose diff looked entirely unrelated — a refactor of a header guard in a file the initrd did not touch.

```c
#ifndef _BOOT_FLAGS_H
#define _BOOT_FLAGS_H
```

## The real cause

The refactor changed the guard name by one character, which changed the preprocessor output, which changed one struct's padding, which changed the location of a single flag byte in a read-only boot blob. The blob was cached on disk, not rebuilt. The loader read the new struct layout, pulled a stale value from the old blob, and tripped a panic.

## The fix

`make clean`. A full rebuild. Never a satisfying fix; always the right one.

## The lesson

If a small patch causes an inexplicable runtime failure, the first check is the build cache. Not the patch. The cache.
