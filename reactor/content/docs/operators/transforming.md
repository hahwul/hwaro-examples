+++
title = "Transforming Operators"
description = "Operators that transform emitted items in reactive streams"
tags = ["operators", "transforming", "reactor"]
+++

# Transforming Operators

Transforming operators change the value, shape, or timing of items flowing through a reactive stream. They consume items from upstream and emit modified items downstream.

## map

Applies a synchronous function to each item.

```
Source:   --1----2----3----4----|
              map(x => x * x)
Result:   --1----4----9----16---|
```

```java
Stream.of(1, 2, 3, 4)
    .map(x -> x * x)
    .subscribe(System.out::println);
// Output: 1, 4, 9, 16
```

```python
Stream.of(1, 2, 3, 4) \
    .map(lambda x: x * x) \
    .subscribe(on_next=print)
# Output: 1, 4, 9, 16
```

## flatMap

Maps each item to a stream, then flattens all inner streams into a single output stream. Inner streams are subscribed to concurrently.

```
Source:     --1--------2--------3--|
            flatMap(x => Stream.of(x, x*10))
Expanded:  --1,10-----2,20-----3,30--|
Result:    --1-10-----2-20-----3-30--|
```

```java
Stream.of("hello", "world")
    .flatMap(word -> Stream.fromArray(word.split("")))
    .subscribe(System.out::println);
// Output: h, e, l, l, o, w, o, r, l, d
```

```python
Stream.of("hello", "world") \
    .flat_map(lambda word: Stream.from_iterable(word)) \
    .subscribe(on_next=print)
# Output: h, e, l, l, o, w, o, r, l, d
```

## scan

Applies an accumulator function over the stream, emitting each intermediate result.

```
Source:   --1----2----3----4----|
           scan(0, (acc, x) => acc + x)
Result:   --1----3----6----10---|
```

```java
Stream.of(1, 2, 3, 4)
    .scan(0, Integer::sum)
    .subscribe(System.out::println);
// Output: 1, 3, 6, 10
```

```python
Stream.of(1, 2, 3, 4) \
    .scan(0, lambda acc, x: acc + x) \
    .subscribe(on_next=print)
# Output: 1, 3, 6, 10
```

## buffer

Collects emitted items into batches of a specified size, emitting each batch as a list.

```
Source:   --1--2--3--4--5--6--|
                buffer(3)
Result:   --------[1,2,3]--------[4,5,6]-|
```

```java
Stream.range(1, 6)
    .buffer(3)
    .subscribe(batch -> System.out.println(batch));
// Output: [1, 2, 3], [4, 5, 6]
```

```python
Stream.range(1, 7) \
    .buffer(3) \
    .subscribe(on_next=print)
# Output: [1, 2, 3], [4, 5, 6]
```

## window

Similar to buffer, but emits nested streams instead of lists. Each window is a live stream that receives items as they arrive.

```
Source:    --1--2--3--4--5--6--|
                window(3)
Window 1:  --1--2--3-|
Window 2:             --4--5--6-|
Result:   --W1--------W2--------|
```

```java
Stream.range(1, 6)
    .window(3)
    .flatMap(window -> window.reduce(0, Integer::sum))
    .subscribe(System.out::println);
// Output: 6, 15
```

## concatMap

Like flatMap, but subscribes to inner streams sequentially. The next inner stream is not subscribed to until the previous one completes.

```
Source:    --1--------2--------|
           concatMap(x => delay(x).then(Stream.of(x*10)))
Result:   ------10---------20-|
```

```java
Stream.of(1, 2, 3)
    .concatMap(x -> Stream.of(x * 10).delay(Duration.ofMillis(100)))
    .subscribe(System.out::println);
// Output: 10, 20, 30 (in order, each delayed)
```

## Operator Comparison

| Operator | Input | Output | Concurrency |
|----------|-------|--------|-------------|
| `map` | 1 item | 1 item | N/A |
| `flatMap` | 1 item | 0..N items | Concurrent |
| `concatMap` | 1 item | 0..N items | Sequential |
| `scan` | 1 item | 1 item (accumulated) | N/A |
| `buffer` | N items | 1 list | N/A |
| `window` | N items | 1 stream | N/A |
