+++
title = "Backpressure"
description = "Backpressure strategies for managing flow control in reactive streams"
tags = ["patterns", "backpressure", "reactor"]
+++

# Backpressure

Backpressure is the mechanism by which a slow consumer signals a fast producer to reduce its emission rate. Without backpressure, unbounded buffering leads to memory exhaustion and pipeline failure. Reactor enforces backpressure at every stage of the operator chain.

## How Backpressure Works

The Reactive Streams protocol defines a request-based flow control model:

```
Subscriber              Publisher
    |                      |
    |--- subscribe() ----->|
    |<-- onSubscribe(s) ---|
    |                      |
    |--- s.request(3) ---->|
    |<-- onNext(item1) ----|
    |<-- onNext(item2) ----|
    |<-- onNext(item3) ----|
    |                      |
    |--- s.request(2) ---->|
    |<-- onNext(item4) ----|
    |<-- onNext(item5) ----|
    |<-- onComplete() -----|
```

The subscriber declares how many items it can accept via `request(n)`. The publisher must not emit more than the requested count. This protocol propagates through the entire operator chain, ensuring end-to-end flow control.

## Backpressure Strategies

Reactor provides several strategies for handling situations where the producer outruns the consumer.

### Buffer

Buffer excess items in memory until the consumer catches up. This is the default strategy.

```java
fastSource
    .onBackpressureBuffer(256)
    .observeOn(Schedulers.io())
    .subscribe(item -> slowProcess(item));
```

```python
fast_source \
    .on_backpressure_buffer(256) \
    .observe_on(Schedulers.io()) \
    .subscribe(on_next=slow_process)
```

Buffer overflow behavior can be configured:

| Overflow Mode | Behavior |
|---------------|----------|
| `ERROR` | Signal an error when buffer is full (default) |
| `DROP_OLDEST` | Drop the oldest buffered item to make room |
| `DROP_LATEST` | Drop the newest incoming item |

### Drop

Discard items that arrive when the consumer has no pending demand. No buffering occurs.

```
Producer:   --1--2--3--4--5--6--7--8--|
Consumer:   (demand=1)   (demand=1)
               drop()
Result:     --1-----------5-----------|
```

```java
fastSource
    .onBackpressureDrop(dropped -> metrics.increment("dropped"))
    .subscribe(item -> process(item));
```

### Latest

Keep only the most recent item. When the consumer requests, deliver the latest available item, discarding all intermediate values.

```
Producer:   --1--2--3--4--5--6--7--8--|
Consumer:   (demand=1)      (demand=1)
               latest()
Result:     --1--------------6--------|
```

```python
fast_source \
    .on_backpressure_latest() \
    .subscribe(on_next=process)
```

## Choosing a Strategy

| Strategy | Use When | Trade-off |
|----------|----------|-----------|
| Buffer | All items must be processed, temporary bursts expected | Memory usage during bursts |
| Drop | Losing items is acceptable, consistent throughput needed | Data loss |
| Latest | Only the most recent value matters (sensor readings, UI updates) | Skips intermediate values |
| Error | Overflow indicates a bug that must be fixed | Pipeline terminates on overflow |

## Diagnosing Backpressure Issues

Common symptoms of backpressure problems:

- **OutOfMemoryError** -- Unbounded buffers growing without limit
- **Increasing latency** -- Items waiting in buffers before processing
- **Dropped items** -- Items silently discarded without logging

Enable metrics to monitor backpressure health:

```java
fastSource
    .onBackpressureBuffer(256, BufferOverflowStrategy.DROP_OLDEST)
    .metrics("pipeline.sensor")
    .subscribe(item -> process(item));
```

Key metrics to watch:

- `reactor.stream.backpressure_drops` -- Items dropped due to overflow
- `reactor.stream.buffer_size` -- Current buffer occupancy
- `reactor.stream.request_count` -- Demand signals from downstream

## Rate Limiting

For sources that do not support backpressure natively (e.g., push-based event streams), use rate limiting operators to enforce bounded throughput:

```java
pushBasedSource
    .onBackpressureBuffer(1024, BufferOverflowStrategy.DROP_OLDEST)
    .limitRate(100)
    .observeOn(Schedulers.parallel())
    .subscribe(item -> process(item));
```

The `limitRate` operator intercepts downstream demand and splits large requests into smaller batches, preventing the producer from emitting too many items at once.

> Always prefer cooperative backpressure (request-based) over rate limiting. Rate limiting should be reserved for integration with non-reactive sources that do not support demand signaling.
