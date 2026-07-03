+++
title = "Why we dropped Kubernetes for our own scheduler"
date = "2025-10-02"
description = "The lease-based job scheduler that replaced our Kubernetes-backed prototype, and the outage that convinced us to build it"
[extra]
elapsed = "2.19s"
+++

The pre-release prototype of Mach scheduled jobs onto a small Kubernetes cluster, because Kubernetes already solves bin-packing and we did not want to write a scheduler from scratch. Then, three weeks before our first outside pilot customer, the control plane's etcd instance ran out of disk during a routine build spike and every runner sat idle for eleven minutes while jobs queued behind a scheduler that could no longer schedule anything.

<!-- more -->

Eleven minutes does not sound catastrophic until you remember the entire pitch of the product is that it never has an outage a customer's own infrastructure didn't cause. A control-plane dependency meant our uptime was capped by Kubernetes' uptime, on top of the runner's own, and every additional moving part was another thing a self-hosting customer would have to operate correctly just to run their tests.

We replaced it with a lease-based scheduler with no control plane at all. Runners poll their configured repository directly on a short interval, claim available jobs by writing a time-bound lease, and release the lease if the job finishes or the runner process dies:

```text
runner-a  poll -> job#4118 available -> claim lease (ttl 90s)
runner-a  execute job#4118 ............ complete, lease released
runner-b  poll -> job#4119 available -> claim lease (ttl 90s)
runner-b  crash mid-job -> lease expires at ttl -> job#4119 reclaimable
runner-a  poll -> job#4119 reclaimable -> claim lease (ttl 90s)
```

No coordinator decides which runner gets which job — the first runner to successfully write the lease wins, and a crashed runner's work becomes available again automatically once its lease expires. It is a smaller idea than Kubernetes, on purpose. Fewer moving parts means fewer three-in-the-morning pages, for us and for everyone who self-hosts it.
