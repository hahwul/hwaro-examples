+++
title = "CLI Operations"
date = "2025-01-24"
template = "page"
+++

The `dm_syst` command-line utility is the primary interface for system management and diagnostic reporting.

## Command Structure

All commands follow the standard industrial syntax:
`dm_syst [MODULE] [ACTION] --flags`

### Module Reference

| Module | Purpose | Access Level |
|--------|---------|--------------|
| `core` | Primary system control | ADMIN |
| `data` | Buffer and storage management | OPERATOR |
| `link` | Network and external protocols | OPERATOR |
| `sync` | Inter-node synchronization | SYSTEM |

## Common Operations

### System Status

Check the current operational state of all core modules.

```bash
dm_syst core status --verbose
```

### Buffer Flush

Clear volatile data buffers to reclaim memory blocks.

```bash
dm_syst data flush --force
```

{{ alert(type="warning", message="Data flush operations cannot be undone. Ensure all critical logs are archived before execution.") }}
