+++
title = "riscv64 runners are in public beta"
date = "2026-03-19"
description = "linux/riscv64 joins the runner matrix in beta, with an 11.7-second cold start we intend to earn down over the next two quarters"
[extra]
elapsed = "0.63s"
+++

`linux/riscv64` is now a supported runner target, in beta. If your team has SiFive or StarFive hardware sitting around from firmware work, or you are building for a RISC-V embedded target and want native builds instead of cross-compilation, you can register one today.

<!-- more -->

Beta means two honest caveats. First, cold start is 11.7 seconds against 3.8 seconds on `linux/amd64` — the toolchain warm-up cost on current RISC-V silicon is real, and we have not yet done the optimization pass we ran on the x86 path last summer. Second, our own dogfooding of this target is three weeks old, which is not long enough for us to call it battle-tested, even though nothing has broken in that window.

```yaml
runner: mach
arch: [riscv64]
cache: incremental
steps:
  - run: cargo build --release --target riscv64gc-unknown-linux-gnu
  - run: cargo test --target riscv64gc-unknown-linux-gnu
```

What is not beta is the billing model — `riscv64` build-seconds cost the same as any other architecture's, because the meter counts wall-clock time regardless of what silicon it ran on, and we are not going to charge an architecture tax on top of a genuinely slower cold start you are already paying for in build-seconds. We expect to pull the cold-start number down over the next two quarters the same way we did for `linux/amd64`, and we will publish the before-and-after numbers here when it happens rather than quietly editing the runners page.
