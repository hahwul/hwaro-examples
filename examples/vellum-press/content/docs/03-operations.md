+++
title = "Operations"
description = "Provisioning, monitoring, and the discipline of running the system in production."
date = "2026-01-15"
weight = 3
tags = ["ops"]
+++

## Provisioning

A reference deployment of the Press is a single host, provisioned with
four cores, sixteen gibibytes of memory, and a hundred gibibytes of
NVMe-class storage allocated to the journal. The cores need not be
fast; the storage must be local and must be NVMe-class. Both
constraints are bounded by the journal's behaviour on the synchronous
write path.

## Monitoring

Three metrics are sufficient for ordinary alerting. They are listed
here in declining order of importance.

1. **`press.journal.fsync_p99`.** Sustained excursion above twenty-five
   milliseconds is the leading indicator of disk degradation.
2. **`press.ingest.queue_depth`.** A healthy depth is bounded; an
   unbounded depth means the journal cannot keep pace with ingress.
3. **`press.egress.errors_total`.** The derivative should be zero. Any
   non-zero value warrants reading the structured log.

A fourth metric, `press.host.load_avg`, is sometimes useful but is
prone to noise; it should not be used for alerting without a window
of at least five minutes.

## The discipline of operating

The Press is a system that punishes carelessness. Two practices, taken
together, have eliminated most of the incidents seen in production
over the last three years.

- **Always read the journal tail before restarting the service.** A
  restart that loses the last write is a worse outcome than a five-minute
  outage.
- **Never disable the fsync policy.** It is tempting to do so during
  bulk-loads; the temptation should be resisted. The bulk-load path is
  the path where a crash hurts most.

> **Note** — Operators new to the Press are encouraged to read chapter
> two before touching production. The architecture chapter is short and
> the architecture is, in part, the operational interface.
