+++
title = "Your first build"
description = "Declare a task with explicit inputs and outputs, then watch maru skip it when nothing changed."
date = "2025-03-19"
weight = 2
toc = true

[extra]
node = "build:compile"
+++

A maru build is a set of tasks. Each task declares the files it reads, the files
it writes, and the command that turns one into the other. maru reads those
declarations, builds a graph, and runs only what it must.

<!-- more -->

## Declare a task

Tasks live in `maru.toml` under a `[task.<name>]` table. Here is a task that
compiles a small C program:

```toml
[task.compile]
inputs  = ["src/*.c", "include/*.h"]
outputs = ["build/app"]
cmd     = "cc src/*.c -Iinclude -o build/app"
```

The `inputs` and `outputs` fields are not documentation — they are the contract.
maru will make exactly the files in `inputs` visible to the command and will
treat anything the command writes outside `outputs` as an error. This is what
lets the cache be trustworthy: a task cannot secretly depend on a file it did
not name.

## Run it

```sh
maru build compile
# ▸ compile        run     412ms
```

Run it again without changing anything:

```sh
maru build compile
# ▸ compile        cached    2ms
```

The second run does no compilation. maru hashed the inputs, the command, and the
toolchain, found a matching entry in the cache, and restored the output. The
`2ms` is the time to check the key and materialize the result.

## Connect tasks

Tasks depend on other tasks through their outputs. A test task that runs the
compiled binary simply lists it as an input:

```toml
[task.test]
inputs  = ["build/app", "tests/*.txt"]
outputs = ["build/report.txt"]
cmd     = "./build/app --check tests > build/report.txt"
```

maru sees that `build/app` is produced by `compile`, adds the edge, and orders
the two tasks automatically. You never write "run compile before test" — the
data dependency *is* the ordering. To see the graph maru inferred, run
`maru graph`; to understand why a particular task ran, run
`maru explain test`, which prints the cache key and the first input whose digest
changed.
