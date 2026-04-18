+++
title = "Error Handling"
description = "Error handling patterns for reactive streams"
tags = ["patterns", "error-handling", "reactor"]
+++

# Error Handling

Errors in reactive streams terminate the pipeline by default. When an operator throws an exception, the error signal propagates downstream to the subscriber's `onError` handler, and no further items are emitted. Reactor provides operators to intercept, recover from, and retry failed operations without terminating the entire pipeline.

## Error Propagation

By default, an error at any point in the chain terminates the stream:

```
Source:   --1--2--X (error)
Result:   --1--2--X (subscriber.onError called)
```

```java
Stream.of(1, 2, 3)
    .map(x -> {
        if (x == 3) throw new RuntimeException("bad value");
        return x * 10;
    })
    .subscribe(
        item  -> System.out.println(item),
        error -> System.err.println("Error: " + error.getMessage())
    );
// Output: 10, 20, Error: bad value
```

## onErrorReturn

Replace the error with a fallback value and complete normally.

```
Source:   --1--2--X (error)
         onErrorReturn(-1)
Result:   --1--2--(-1)-|
```

```java
riskyOperation
    .onErrorReturn(error -> defaultValue)
    .subscribe(item -> process(item));
```

```python
risky_operation \
    .on_error_return(lambda err: default_value) \
    .subscribe(on_next=process)
```

## onErrorResume

Switch to a fallback stream when an error occurs. The original stream is abandoned and the fallback stream takes over.

```
Source:     --1--2--X (error)
Fallback:           --a--b--c-|
           onErrorResume(fallback)
Result:    --1--2----a--b--c-|
```

```java
primarySource
    .onErrorResume(error -> {
        log.warn("Primary failed, switching to fallback", error);
        return fallbackSource;
    })
    .subscribe(item -> process(item));
```

```python
primary_source \
    .on_error_resume(lambda err: fallback_source) \
    .subscribe(on_next=process)
```

## retry

Resubscribe to the source stream when an error occurs. The entire pipeline is restarted from the beginning.

```
Attempt 1:  --1--2--X (error)
Attempt 2:  --1--2--3--| (success)
               retry(3)
Result:     --1--2--1--2--3--|
```

```java
unreliableSource
    .retry(3)
    .subscribe(
        item  -> process(item),
        error -> log.error("Failed after 3 retries", error)
    );
```

## retryWhen

Provides fine-grained control over retry behavior using a companion stream that controls retry timing.

```java
unreliableSource
    .retryWhen(errors -> errors
        .scan(0, (count, err) -> count + 1)
        .flatMap(attempt -> {
            if (attempt > 5) {
                return Stream.error(new MaxRetriesExceededException());
            }
            long delay = (long) Math.pow(2, attempt) * 100;
            return Stream.timer(Duration.ofMillis(delay));
        })
    )
    .subscribe(item -> process(item));
```

```python
def retry_with_backoff(errors):
    return errors.scan(0, lambda count, err: count + 1).flat_map(
        lambda attempt: (
            Stream.error(MaxRetriesExceeded())
            if attempt > 5
            else Stream.timer(timedelta(milliseconds=2**attempt * 100))
        )
    )

unreliable_source \
    .retry_when(retry_with_backoff) \
    .subscribe(on_next=process)
```

## Error Isolation with flatMap

When processing items concurrently with `flatMap`, errors in one inner stream can be isolated to prevent them from terminating the entire pipeline:

```java
inputStream
    .flatMap(item ->
        processItem(item)
            .onErrorResume(error -> {
                log.warn("Skipping item {}: {}", item, error.getMessage());
                return Stream.empty();
            })
    )
    .subscribe(result -> store(result));
```

This pattern ensures that a failure processing one item does not affect other items in the pipeline. The failed item is skipped and processing continues.

## Error Handling Strategy Comparison

| Operator | Behavior | Use Case |
|----------|----------|----------|
| `onErrorReturn` | Emit fallback value, complete | Default values for failed lookups |
| `onErrorResume` | Switch to fallback stream | Failover to secondary data source |
| `retry` | Resubscribe N times | Transient failures (network, timeout) |
| `retryWhen` | Custom retry logic | Exponential backoff, conditional retry |

## Best Practices

- Always provide an `onError` handler in your subscriber. Unhandled errors terminate the pipeline silently in some runtimes.
- Use `onErrorResume` with `Stream.empty()` inside `flatMap` to skip failed items without terminating the outer stream.
- Apply retry logic close to the failing operation, not at the end of a long pipeline. This avoids repeating expensive upstream work.
- Log errors before recovering from them. Silent error recovery makes debugging difficult.

> Never catch exceptions inside operator functions and swallow them. Use the error handling operators to make error recovery visible in the pipeline structure.
