+++
title = "Systems Track"
description = "TRK.01 &#183; Kernel bypass, async runtimes, observability under load. Deep into the box."
weight = 10
tags = ["tech", "developer", "sessions"]
+++

## What this track covers

The Systems Track is for engineers who write code that runs close to the kernel, under load, and in production. Seven sessions and two workshops across three days.

Expected background: comfortable with C or Rust, familiar with a Unix shell, and has shipped at least one thing that was debugged with `strace`, `perf`, or a core dump.

## Sessions

1. **Day 01 &#183; 10:00 &#183; Kernel Bypass for the Pragmatic: io_uring in 60 minutes.** Hands-on introduction to the `io_uring` interface, with live code against a Linux 6.x kernel.
2. **Day 01 &#183; 14:00 &#183; Tracing production: eBPF for the engineer who already has metrics.** When and how to reach for eBPF instead of a trace SDK.
3. **Day 01 &#183; 16:30 &#183; The cost of a syscall in 2026.** Measured, across four architectures, with the measurements performed live.
4. **Day 02 &#183; 14:00 &#183; Writing an Async Runtime in 90 Minutes.** Live-coded Rust runtime, from blank crate to working executor.
5. **Day 02 &#183; 17:00 &#183; Reading strace Output Like a Detective.** A real incident, walked through live.
6. **Day 03 &#183; 10:30 &#183; Garbage collection in low-latency services.** Techniques for bounding pause time in GC&rsquo;d runtimes.
7. **Day 03 &#183; 15:00 &#183; Closing session: When to reach for a custom allocator.** Moderated discussion.

## Workshops

- **Workshop 01.1** &mdash; eBPF hands-on, four hours, Day 01 afternoon. Laptops with recent kernels required.
- **Workshop 01.2** &mdash; Async Rust deep dive, six hours, Day 03. Continuation of the live-coded runtime session.

## Speakers

Alex Rovner, Beto Karras, Mira Chandrasekhar, Samira Okoye, and two additional speakers still being finalised as of last programme update. Full speaker bios in the printed programme.
