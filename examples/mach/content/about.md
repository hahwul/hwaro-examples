+++
title = "About"
description = "Mach is built by a three-person team who got tired of CI invoices that grew faster than the codebase"
[extra]
elapsed = "0.28s"
+++

Mach is maintained by a small team — three engineers, no separate sales or support org — who spent the better part of a decade running infrastructure at companies where the CI bill was a running joke in the budget meeting. Every vendor's answer to a bill that had crept past the cloud spend it was supposed to be adjacent to was the same: buy the next tier, add more included minutes, negotiate an enterprise contract. Nobody offered the option we actually wanted, which was to run the thing ourselves and pay for what it used.

{{ sh(text="Why self-hosted", time="0.07s") }}

Self-hosting CI has a reputation for being a chore: patch the runner, babysit the queue, debug flaky networking between the control plane and the workers. Mach's answer is to remove the control plane. There is no central service to keep online — runners poll your repository directly, schedule against a lease, and report their own health locally. Upgrading a fleet means replacing a binary, not migrating a database.

{{ sh(text="Where the project is going", time="0.05s") }}

The `riscv64` target is still in beta, cold starts on Windows runners are the next thing we want to shave down, and we owe the community a proper plugin API for custom cache backends beyond the built-in local and S3-compatible options. All three are tracked openly in the [devlog](../devlog/), where we write about what shipped, what broke, and what we changed our minds about — including the two times we rewrote the scheduler from scratch before settling on the lease-based design that ships today.

{{ sh(text="Getting in touch", time="0.04s") }}

Questions about self-hosting, air-gapped licensing, or the billing model are welcome. We read everything that comes in and we are the same three people who wrote the scheduler, so you will not be routed through a support queue before someone who understands the code sees your message.
