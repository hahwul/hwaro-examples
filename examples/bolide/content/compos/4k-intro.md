+++
title = "4K Intro"
date = "2026-01-14"
description = "A self-contained audiovisual program in 4096 bytes. No external files, no excuses."
weight = 10
[extra]
slot = "SAT 22:30"
limit = "4096 bytes"
deadline = "Sat 5 Apr, 18:00"
platform = "Windows / GL 4.3 · compo PC"
prize = "300 EUR + the good trophy"
duration = "max 4 minutes"
+++

The headline compo. You get 4096 bytes total: code, data, music, everything.
The executable must produce picture and sound with no files on disk beyond
itself and the system libraries already on the compo machine.

<!-- more -->

## The rules that actually matter

- **4096 bytes**, measured after packing, as the file sits on disk. The desk
  checks with `ls -l`, not with your build log.
- Runs on the compo PC: a mid-range GPU, GL 4.3, 60 Hz at 1920x1080. A spec
  sheet is pinned above the desk and posted in the party channel.
- One executable. Compressors like Crinkler or kkrunchy are expected and
  encouraged; that is where most of your 4K goes.
- Runtime four minutes or less. If it hangs, we cut the projector.

## What wins

Direction wins. A 4K with one strong idea, a clean camera, and music that
lands on the visuals beats a technical dump of every raymarched primitive you
know. Budget your bytes like a scene budget: decide the three shots you want,
then delete everything that is not one of them.

A typical byte breakdown people bring to the table:

```text
  synth + score .... ~900 bytes
  shader source .... ~2200 bytes
  loader + glue .... ~600 bytes
  header + slack ...  the rest, and there is never enough
```

Test on the actual compo configuration before Saturday. "It worked at home"
is the oldest sentence in the scene, and it has never once helped anyone at
18:01.
