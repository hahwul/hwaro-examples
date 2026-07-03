+++
title = "The Clock Runs Backward"
date = "2025-07-14"
description = "Wall-clock time can be corrected mid-measurement, and correction can move it into the past."
weight = 4
toc = true
[extra]
n = "04"
lang = "python"
question = "If the clock can step backward while you are counting, what did you measure?"
+++

You timed a slow operation by reading the clock before and after and subtracting. In production, one request in ten thousand reported a negative duration. Nothing in your code subtracts a larger number from a smaller one. And yet.

<!-- more -->

```python
import time

start = time.time()
do_work()
elapsed = time.time() - start   # occasionally < 0
```

## What happens

`time.time()` returns wall-clock time: the machine's belief about what time it is in the world. That belief is edited from outside your program. When the system clock drifts, a time daemon corrects it, and correction can mean stepping the clock backward. If the step lands between your two readings, the second reading is *earlier* than the first, and your duration goes negative. You measured a distance using a ruler that someone was quietly re-labelling while you read it.

Measure elapsed time with a clock that is only allowed to move forward:

```python
start = time.monotonic()
do_work()
elapsed = time.monotonic() - start   # never negative
```

## The turn

There are two questions hiding inside "what time is it," and they are not the same question. *What o'clock is it in the world* is a fact about agreement, and agreements get amended. *How much time has passed here* is a fact about this machine's own heartbeat, and nothing outside may edit it. You reached for the first clock to answer the second question. The clock answered honestly. It simply was not answering you.
