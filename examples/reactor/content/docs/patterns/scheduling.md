+++
title = "Scheduling"
description = "Thread scheduling and concurrency patterns for reactive streams"
tags = ["patterns", "scheduling", "reactor"]
+++

# Scheduling

Reactive streams are synchronous by default. All operators in a chain execute on the thread that triggers the subscription. Schedulers allow you to control which threads execute specific parts of the pipeline, enabling concurrent processing without manual thread management.

## Scheduler Types

Reactor provides three built-in scheduler implementations:

| Scheduler | Thread Pool | Use Case |
|-----------|-------------|----------|
| `Schedulers.immediate()` | Caller thread | Testing, synchronous execution |
| `Schedulers.parallel()` | Fixed pool (CPU cores) | CPU-bound computation |
| `Schedulers.io()` | Elastic pool (expandable) | Blocking I/O, network calls, file access |

## subscribeOn

Controls which scheduler runs the subscription and source emission. Affects the entire upstream chain.

```
Source:        [main thread]
                  |
             subscribeOn(io)
                  |
               [io thread]
                  |
map:           [io thread]
filter:        [io thread]
subscribe:     [io thread]
```

```java
Stream.fromCallable(() -> blockingHttpCall())
    .subscribeOn(Schedulers.io())
    .map(response -> parseResponse(response))
    .subscribe(result -> updateState(result));
```

```python
Stream.from_callable(blocking_http_call) \
    .subscribe_on(Schedulers.io()) \
    .map(parse_response) \
    .subscribe(on_next=update_state)
```

## observeOn

Switches the execution context for all downstream operators. Does not affect upstream.

```
Source:        [io thread]
map:           [io thread]
                  |
             observeOn(parallel)
                  |
filter:        [parallel thread]
subscribe:     [parallel thread]
```

```java
databaseQuery
    .subscribeOn(Schedulers.io())
    .observeOn(Schedulers.parallel())
    .map(row -> transformRow(row))
    .subscribe(result -> cache.put(result));
```

## Combining subscribeOn and observeOn

Use `subscribeOn` to place the source on an appropriate scheduler, and `observeOn` to switch downstream processing to a different scheduler:

```
blockingSource     -->  subscribeOn(io)     -->  [io thread]
                                                     |
parseResponse      -->  map(parse)          -->  [io thread]
                                                     |
                   -->  observeOn(parallel)  -->  switch
                                                     |
heavyComputation   -->  map(compute)        -->  [parallel thread]
                                                     |
subscriber         -->  subscribe()         -->  [parallel thread]
```

```java
Stream.fromCallable(() -> database.queryAll())
    .subscribeOn(Schedulers.io())
    .map(rows -> parseRows(rows))
    .observeOn(Schedulers.parallel())
    .flatMap(parsed -> computeAnalytics(parsed))
    .subscribe(result -> reportService.send(result));
```

```python
Stream.from_callable(database.query_all) \
    .subscribe_on(Schedulers.io()) \
    .map(parse_rows) \
    .observe_on(Schedulers.parallel()) \
    .flat_map(compute_analytics) \
    .subscribe(on_next=report_service.send)
```

## Parallel Processing

The `parallel` operator splits a stream into multiple rails for concurrent processing, then merges the results:

```java
Stream.range(1, 1000)
    .parallel(4)
    .runOn(Schedulers.parallel())
    .map(item -> expensiveComputation(item))
    .sequential()
    .subscribe(result -> collect(result));
```

```python
Stream.range(1, 1001) \
    .parallel(4) \
    .run_on(Schedulers.parallel()) \
    .map(expensive_computation) \
    .sequential() \
    .subscribe(on_next=collect)
```

Processing flow with 4 rails:

```
Source:   --1--2--3--4--5--6--7--8--|
                parallel(4)
Rail 0:   --1--------5--------|
Rail 1:   -----2--------6-----|
Rail 2:   --------3--------7--|
Rail 3:   -----------4--------8--|
               sequential()
Result:   --r1-r2-r3-r4-r5-r6-r7-r8--|
```

## Custom Schedulers

Create custom schedulers for specialized threading requirements:

```java
Scheduler customScheduler = Schedulers.newParallel(
    "analytics-pool",
    8,
    true  // daemon threads
);

analyticsStream
    .observeOn(customScheduler)
    .subscribe(item -> process(item));

// Clean up when done
customScheduler.dispose();
```

```python
custom_scheduler = Schedulers.new_parallel(
    name="analytics-pool",
    thread_count=8,
    daemon=True,
)

analytics_stream \
    .observe_on(custom_scheduler) \
    .subscribe(on_next=process)

# Clean up when done
custom_scheduler.dispose()
```

## Virtual Time (Testing)

Use a virtual time scheduler to test time-dependent operators without waiting for real time to pass:

```java
VirtualTimeScheduler scheduler = VirtualTimeScheduler.create();

Stream.interval(Duration.ofSeconds(1), scheduler)
    .take(5)
    .subscribe(tick -> results.add(tick));

// No time has passed yet
assertEquals(0, results.size());

// Advance virtual time by 5 seconds
scheduler.advanceTimeBy(Duration.ofSeconds(5));
assertEquals(5, results.size());
```

## Best Practices

- Use `Schedulers.io()` for blocking operations (database queries, HTTP calls, file I/O). Never block the parallel scheduler.
- Use `Schedulers.parallel()` for CPU-bound transformations. The fixed thread pool prevents over-subscription.
- Place `subscribeOn` once, near the source. Multiple `subscribeOn` calls in a chain have no additional effect.
- Place `observeOn` at the boundary where the execution context needs to change. Each `observeOn` in a chain takes effect for all downstream operators.
- Dispose custom schedulers when they are no longer needed to prevent thread leaks.

> Avoid using `Schedulers.immediate()` in production code. It exists primarily for testing and debugging. In production, always specify an explicit scheduler for blocking or CPU-intensive operations.
