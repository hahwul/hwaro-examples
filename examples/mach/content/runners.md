+++
title = "Runners"
description = "Supported architectures, install steps, and cold-start figures for the Mach runner binary"
[extra]
elapsed = "1.14s"
+++

The runner is a single static binary with no runtime dependencies — no JVM, no Python interpreter, no Docker daemon required unless your pipeline itself needs containers. Install it, point it at a repository, and it starts scheduling jobs.

```bash
curl -fsSL get.mach.build/install.sh | sh
mach init --project acme/api
mach run --watch
```

{{ sh(text="Supported architectures", time="0.11s") }}

Mach ships prebuilt binaries for six targets. Cold start is measured from `mach run` invocation to the first pipeline step beginning execution, on unloaded reference hardware.

| Target | Cold start | Warm cache | Status |
|---|---|---|---|
| linux/amd64 | 3.8s | 0.41s | stable |
| linux/arm64 | 4.1s | 0.44s | stable |
| darwin/arm64 | 6.2s | 0.58s | stable |
| windows/amd64 | 9.4s | 0.97s | stable |
| linux/riscv64 | 11.7s | 1.30s | beta |
| wasm32-wasi | 0.9s | 0.12s | stable |

`linux/amd64` and `linux/arm64` are what most teams run in production, usually as a pair so pull requests build both targets before merge. `wasm32-wasi` runners exist mainly for teams testing WebAssembly build toolchains themselves — they start almost instantly because there is no OS process to boot, only a sandboxed module.

{{ sh(text="Registering a runner", time="0.06s") }}

A runner registers itself with a project the first time it executes `mach run` against that project's remote. No central control plane assigns work; runners poll their configured repositories directly and claim jobs with a lease that expires if the process dies mid-build, so a crashed runner never leaves a job stuck.

```yaml
runner: mach
arch: [amd64, arm64]
cache: incremental
concurrency: 4
steps:
  - run: pnpm install --frozen-lockfile
  - run: pnpm test -- --shard=1/4
  - run: pnpm build
bill:
  unit: build-second
  round: 1s
```

{{ sh(text="Fleet sizing", time="0.03s") }}

A single `linux/amd64` runner on a four-core box comfortably handles the CI load of a ten-to-fifteen-engineer team pushing the usual mix of pull-request and merge-queue builds. Teams past that size typically run two or three runners behind a shared cache volume rather than one large machine — Mach's lease-based scheduling spreads jobs across however many runners are online without any coordinator to configure.

Runners self-report health over a local Unix socket, which is what the `mach status` command reads; there is no dashboard service to keep patched, no separate database to back up, and no control-plane outage that can take your CI down while your actual build infrastructure stays healthy.
