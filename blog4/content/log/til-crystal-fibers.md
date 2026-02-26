+++
title = "TIL: Crystal Fibers for Concurrency"
date = "2025-06-12"
tags = ["crystal", "concurrency", "til"]
description = "How to use Crystal's Fiber and Channel for lightweight concurrency"
+++

Today I learned how Crystal handles concurrency with **Fibers** — lightweight green threads managed by the runtime.

## The basics

Crystal uses `spawn` to create a fiber and `Channel` to communicate between them:

```crystal
ch = Channel(Int32).new

spawn do
  result = expensive_computation()
  ch.send(result)
end

# Do other work while fiber runs
value = ch.receive
puts "Got: #{value}"
```

## Key takeaways

- Fibers are **cooperative**, not preemptive — they yield at IO boundaries
- A `Channel` is typed and can be buffered or unbuffered
- Use `select` for waiting on multiple channels

> Fibers are incredibly cheap to create. Spawning 100k fibers is totally fine.

## Gotchas

Be careful with shared mutable state. Crystal doesn't have a borrow checker — it's up to you to avoid data races:

```crystal
# BAD: shared mutable array
results = [] of Int32
10.times do |i|
  spawn { results << i }
end
sleep 0.1

# GOOD: use a channel instead
ch = Channel(Int32).new
10.times do |i|
  spawn { ch.send(i) }
end
10.times { results << ch.receive }
```

{{< alert type="tip" message="Always prefer channels over shared state for inter-fiber communication." >}}
