+++
title = "Filtering Operators"
description = "Operators that selectively emit items from reactive streams"
tags = ["operators", "filtering", "reactor"]
+++

# Filtering Operators

Filtering operators control which items pass through a reactive pipeline. They evaluate items against predicates, timing constraints, or uniqueness criteria and emit only those that satisfy the condition.

## filter

Emits only items that satisfy a predicate function.

```
Source:   --1--2--3--4--5--6--7--8--|
            filter(x => x > 4)
Result:   ---------------5--6--7--8-|
```

```java
Stream.range(1, 8)
    .filter(x -> x > 4)
    .subscribe(System.out::println);
// Output: 5, 6, 7, 8
```

```python
Stream.range(1, 9) \
    .filter(lambda x: x > 4) \
    .subscribe(on_next=print)
# Output: 5, 6, 7, 8
```

## distinct

Suppresses duplicate items. By default, uses equality comparison. An optional key selector function can be provided.

```
Source:   --a--b--a--c--b--d--|
               distinct()
Result:   --a--b-----c-----d--|
```

```java
Stream.of("a", "b", "a", "c", "b", "d")
    .distinct()
    .subscribe(System.out::println);
// Output: a, b, c, d
```

```python
Stream.of("a", "b", "a", "c", "b", "d") \
    .distinct() \
    .subscribe(on_next=print)
# Output: a, b, c, d
```

## distinctUntilChanged

Suppresses consecutive duplicate items. Only emits when the current item differs from the previous one.

```
Source:   --1--1--2--2--2--3--1--|
         distinct_until_changed()
Result:   --1-----2--------3--1--|
```

```java
Stream.of(1, 1, 2, 2, 2, 3, 1)
    .distinctUntilChanged()
    .subscribe(System.out::println);
// Output: 1, 2, 3, 1
```

## take

Emits only the first N items, then completes the stream.

```
Source:   --a--b--c--d--e--f--|
                take(3)
Result:   --a--b--c-|
```

```java
Stream.of("a", "b", "c", "d", "e", "f")
    .take(3)
    .subscribe(System.out::println);
// Output: a, b, c
```

## skip

Suppresses the first N items and emits the rest.

```
Source:   --a--b--c--d--e--f--|
                skip(3)
Result:   -----------d--e--f--|
```

```python
Stream.of("a", "b", "c", "d", "e", "f") \
    .skip(3) \
    .subscribe(on_next=print)
# Output: d, e, f
```

## debounce

Emits an item only after a specified duration has passed without another item being emitted. Useful for rate-limiting noisy sources.

```
Source:   --a-b-c--------d---e----|
             debounce(200ms)
Result:   ----------c--------e----|
```

```java
eventSource
    .debounce(Duration.ofMillis(200))
    .subscribe(event -> processEvent(event));
```

## throttleFirst

Emits the first item in each time window, suppressing subsequent items until the window expires.

```
Source:   --a-b-c-----d-e-f-----g--|
           throttleFirst(300ms)
Result:   --a---------d---------g--|
```

```python
event_source \
    .throttle_first(timedelta(milliseconds=300)) \
    .subscribe(on_next=process_event)
```

## takeWhile

Emits items as long as a predicate is true, then completes the stream.

```
Source:   --1--2--3--4--5--6--|
          take_while(x => x < 4)
Result:   --1--2--3-|
```

```java
Stream.range(1, 6)
    .takeWhile(x -> x < 4)
    .subscribe(System.out::println);
// Output: 1, 2, 3
```

## Operator Comparison

| Operator | Criteria | Emits |
|----------|----------|-------|
| `filter` | Predicate | All matching items |
| `distinct` | Uniqueness | First occurrence of each item |
| `distinctUntilChanged` | Consecutive equality | Non-repeating items |
| `take` | Count | First N items |
| `skip` | Count | All items after N |
| `debounce` | Time gap | Last item in quiet period |
| `throttleFirst` | Time window | First item in each window |
| `takeWhile` | Predicate | Items until predicate fails |
