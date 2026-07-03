+++
title = "Install and your first pipeline"
description = "Get Olivine running and move records from a generator source to a console sink in under five minutes."
date = "2025-02-11"
weight = 1
toc = true
[extra]
minutes = 5
stage = "Source to sink"
+++

Olivine is a single Python package with an embedded async runtime. There is no
cluster to stand up and no coordinator to babysit — a pipeline is a normal
process you can run on a laptop, in a container, or under systemd.

<!-- more -->

## Install

Olivine targets Python 3.11 and later. Install it from PyPI into a fresh
virtual environment:

```bash
python -m venv .venv && source .venv/bin/activate
pip install olivine
olivine --version
```

The `olivine` command line ships with the library. Scaffold a project to get a
runnable file and a sensible config:

```bash
olivine new orders-demo
cd orders-demo
```

## The three stages

Every pipeline is a source, zero or more transforms, and a sink. Here is the
smallest useful one — a generator that emits synthetic orders, a transform that
keeps only the large ones, and a console sink:

```python
from olivine import Pipeline, sources, sinks

pipe = Pipeline("orders-demo")

(
    pipe.source(sources.generate(schema="order", rate="200/s"))
        .filter(lambda o: o.total_cents >= 5000)
        .map(lambda o: {"id": o.id, "usd": o.total_cents / 100})
        .sink(sinks.console(pretty=True))
)

if __name__ == "__main__":
    pipe.run()
```

## Run it

```bash
olivine run pipeline.py
```

You will see records stream past at the source's requested rate. Press
`Ctrl+C` and the runtime drains in flight records, commits the sink, and exits
cleanly — no half-written output. That graceful drain is the same machinery that
powers checkpointing later on.

## What just happened

The `.source()` call returns a builder; each `.filter`, `.map`, and `.sink`
appends a stage and returns the builder again, so the pipeline reads
top-to-bottom like the flow it describes. Nothing runs until `pipe.run()`
starts the runtime, connects the stages with bounded channels, and lets the
sink pull the first record. From here, the [backpressure guide](/guides/backpressure/)
explains how those channels decide the pace.
