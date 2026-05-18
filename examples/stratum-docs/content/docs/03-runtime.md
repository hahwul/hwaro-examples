+++
title = "Runtime"
description = "The execution model in detail."
date = "2026-05-09"
weight = 3
tags = ["spec"]
+++

## Phases of a call

Every call passes through five phases. They are linear: a phase may not
start until the previous phase has fully resolved.

1. **Resolve.** Names are bound to objects in the catalogue.
2. **Plan.** A plan is constructed from the bound objects.
3. **Cost.** The plan is annotated with cost estimates.
4. **Execute.** The plan is run.
5. **Commit.** The journal is fsynced and the working set is updated.

If any phase fails, no later phase runs and the call returns the error
from the failing phase.

## Concurrency

The runtime is single-writer, multi-reader. Reads are wait-free with
respect to writes. A writer holds an exclusive lock for the duration
of its execute phase only — resolve, plan, cost, and commit are
performed without holding the lock.

```rust
let plan = stage.plan(&query)?;        // no lock held
{
    let guard = stage.write()?;        // exclusive
    guard.execute(plan)?;
}                                       // released
stage.commit()?;                       // no lock held
```

## Scheduling

By default the runtime spawns one worker per available core, less one
for the journal flush thread. The worker count is tunable but the
journal flush thread is not optional.
