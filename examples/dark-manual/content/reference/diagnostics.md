+++
title = "Diagnostics Reference"
date = "2025-08-14"
template = "page"
+++

Diagnostic procedures for verifying core module health and tracing fault conditions across the `dm_syst` runtime.

## Diagnostic Tiers

The runtime exposes three diagnostic tiers, each with progressively deeper instrumentation. Tier selection is controlled by the `--probe` flag on any module command.

| Tier | Flag | Scope |
|------|------|-------|
| Surface | `--probe=light` | Module ping and uptime check |
| Deep | `--probe=deep` | Memory residency, queue depth, latency |
| Forensic | `--probe=forensic` | Full state capture and crash signature dump |

## Probing the Core

```bash
dm_syst core diag --probe=deep
```

Returns a structured report covering thread saturation, lock contention, and clock drift between primary and redundant cores. Reports older than 90 seconds are discarded by the supervisor.

## Reading Fault Codes

Each fault code follows the `MODULE-CLASS-NUMBER` pattern. The class identifies the failure domain.

| Class | Domain | Severity |
|-------|--------|----------|
| `SIG` | Signal integrity | warning |
| `MEM` | Memory subsystem | critical |
| `NET` | Network bridge | recoverable |
| `THR` | Thermal envelope | critical |

## Capturing a Trace

When a critical fault is detected, attach a forensic trace before requesting a restart. The trace is written to `/var/dm_syst/traces/` and is required for any escalation.

```bash
dm_syst core trace --capture --tag="incident-2026-q1-014"
```

{{ alert(type="note", message="Forensic captures retain volatile memory contents for 24 hours and should be archived to cold storage if longer retention is needed.") }}

## Related Procedures

For routine restart sequences, see [CLI Operations]({{ base_url }}/reference/cli/). For configuration of probe defaults, see [Configuration Reference]({{ base_url }}/reference/config/).
