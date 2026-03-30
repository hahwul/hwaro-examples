+++
title = "Reactor"
description = "Reactive and streaming framework for building event-driven data pipelines"
tags = ["reactor", "reactive", "streaming"]
+++

# Reactor

Reactor is a reactive streaming framework for building composable, event-driven data pipelines. It provides a rich set of operators for transforming, filtering, and combining asynchronous data streams with built-in support for backpressure, error recovery, and multi-threaded scheduling.

## Core Capabilities

- **Reactive Streams** -- Compose asynchronous data flows using a declarative operator chain API
- **Backpressure Control** -- Built-in flow control mechanisms prevent fast producers from overwhelming slow consumers
- **Operator Composition** -- Chain transforming, filtering, and combining operators to build complex processing pipelines
- **Scheduler Abstraction** -- Control thread execution and concurrency through pluggable scheduler implementations

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](/docs/getting-started/) | Install, configure, and run your first reactive stream |
| [Operators](/docs/operators/) | Transform, filter, and combine data streams with composable operators |
| [Patterns](/docs/patterns/) | Backpressure strategies, error handling, and scheduling patterns |

## Reactive Pipeline Architecture

Reactor models data flow as a directed pipeline from publishers through operators to subscribers:

```
  Publisher (Source)
       |
       v
  +------------+     +------------+     +-------------+
  |   filter   | --> |    map     | --> |  flatMap    |
  +------------+     +------------+     +-------------+
       |                   |                  |
       v                   v                  v
  Predicate Test      Transform fn      Async Expansion
                                              |
                                              v
                                       +-----------+
                                       | Subscriber |
                                       +-----------+
```

Each operator in the chain subscribes to its upstream source and publishes transformed items to its downstream consumer. Backpressure signals propagate upstream from the subscriber to the publisher.

## Marble Diagram -- map Operator

The `map` operator applies a transformation function to each item emitted by the source stream:

```
Source:   --1----2----3----4----5--|
              map(x => x * 10)
Result:   --10---20---30---40---50-|
```

## Marble Diagram -- filter Operator

The `filter` operator emits only items that satisfy a given predicate:

```
Source:   --1--2--3--4--5--6--7--8--|
            filter(x => x % 2 == 0)
Result:   -----2-----4-----6-----8-|
```

## Marble Diagram -- merge Operator

The `merge` operator interleaves items from multiple source streams:

```
Source A:  --a-----b-----c--|
Source B:  ----1-----2-----3--|
              merge(A, B)
Result:   --a-1---b-2---c-3--|
```

## Operator Chain Example

Build a processing pipeline by chaining operators together:

```java
Reactor.from(sensorReadings)
    .filter(reading -> reading.isValid())
    .map(reading -> reading.toCelsius())
    .buffer(10)
    .flatMap(batch -> repository.storeBatch(batch))
    .retry(3)
    .subscribe(
        result -> log.info("Stored batch: {}", result.id()),
        error  -> log.error("Pipeline failed", error),
        ()     -> log.info("Stream completed")
    );
```

```python
from reactor import Stream

(Stream.from_iterable(sensor_readings)
    .filter(lambda r: r.is_valid())
    .map(lambda r: r.to_celsius())
    .buffer(10)
    .flat_map(lambda batch: repository.store_batch(batch))
    .retry(3)
    .subscribe(
        on_next=lambda result: print(f"Stored: {result.id}"),
        on_error=lambda err: print(f"Failed: {err}"),
        on_complete=lambda: print("Done")
    ))
```

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Runtime | JDK 11 / Python 3.8 | JDK 17 / Python 3.11 |
| Memory | 256 MB | 1 GB |
| CPU | 1 core | 4 cores |

> Reactor supports both JVM and Python runtimes. The operator API is consistent across both platforms, with language-idiomatic adaptations where appropriate.
