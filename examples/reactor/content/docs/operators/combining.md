+++
title = "Combining Operators"
description = "Operators that merge, zip, and combine multiple reactive streams"
tags = ["operators", "combining", "reactor"]
+++

# Combining Operators

Combining operators merge items from multiple source streams into a single output stream. Each operator defines a different strategy for interleaving, pairing, or selecting items from the input sources.

## merge

Interleaves items from multiple streams as they arrive. The output stream emits items from all sources in their original emission order.

```
Source A:  --a-----b-----c--|
Source B:  ----1-----2-----3--|
              merge(A, B)
Result:   --a-1---b-2---c-3--|
```

```java
Stream<String> letters = Stream.of("a", "b", "c").delay(Duration.ofMillis(100));
Stream<Integer> numbers = Stream.of(1, 2, 3).delay(Duration.ofMillis(150));

Stream.merge(letters, numbers)
    .subscribe(System.out::println);
```

```python
letters = Stream.of("a", "b", "c").delay(timedelta(milliseconds=100))
numbers = Stream.of(1, 2, 3).delay(timedelta(milliseconds=150))

Stream.merge(letters, numbers) \
    .subscribe(on_next=print)
```

## zip

Pairs items from multiple streams by index. Emits a combined result only when all sources have produced an item at the same position.

```
Source A:  --a-------b-------c--|
Source B:  ----1-------2-------3--|
                zip(A, B)
Result:   ----(a,1)---(b,2)---(c,3)-|
```

```java
Stream<String> names = Stream.of("Alice", "Bob", "Carol");
Stream<Integer> scores = Stream.of(95, 87, 92);

Stream.zip(names, scores, (name, score) -> name + ": " + score)
    .subscribe(System.out::println);
// Output: Alice: 95, Bob: 87, Carol: 92
```

```python
names = Stream.of("Alice", "Bob", "Carol")
scores = Stream.of(95, 87, 92)

Stream.zip(names, scores, lambda n, s: f"{n}: {s}") \
    .subscribe(on_next=print)
# Output: Alice: 95, Bob: 87, Carol: 92
```

## combineLatest

Emits a combined result whenever any source emits, using the latest value from each source.

```
Source A:  --a---------b-------c----|
Source B:  ------1--------2---------|
            combineLatest(A, B)
Result:   ------(a,1)---(b,1)-(b,2)-(c,2)-|
```

```java
Stream<Double> temperature = sensorA.map(SensorReading::temperature);
Stream<Double> humidity = sensorB.map(SensorReading::humidity);

Stream.combineLatest(temperature, humidity,
    (temp, hum) -> new ClimateReport(temp, hum))
    .subscribe(report -> dashboard.update(report));
```

## concat

Subscribes to sources sequentially. The second source is not subscribed to until the first completes.

```
Source A:  --a--b--c-|
Source B:  --1--2--3-|
              concat(A, B)
Result:   --a--b--c--1--2--3-|
```

```java
Stream<String> cached = Stream.fromIterable(cache.getAll());
Stream<String> fresh = Stream.fromCallable(() -> api.fetchAll());

Stream.concat(cached, fresh)
    .distinctUntilChanged()
    .subscribe(item -> display(item));
```

```python
cached = Stream.from_iterable(cache.get_all())
fresh = Stream.from_callable(api.fetch_all)

Stream.concat(cached, fresh) \
    .distinct_until_changed() \
    .subscribe(on_next=display)
```

## switchMap

Maps each item to an inner stream, but cancels the previous inner stream whenever a new item arrives. Only the most recent inner stream is active.

```
Source:    --a--------b--------c--|
           switchMap(x => fetchData(x))
Inner a:   ---a1--a2--X (cancelled)
Inner b:              ---b1--b2--X (cancelled)
Inner c:                         ---c1--c2--|
Result:   ---a1--a2----b1--b2----c1--c2--|
```

```java
searchInput
    .debounce(Duration.ofMillis(300))
    .switchMap(query -> searchService.search(query))
    .subscribe(results -> updateUI(results));
```

## amb (ambiguous)

Given multiple sources, subscribes to all of them and emits items only from the source that emits first. All other sources are cancelled.

```
Source A:  ------a--b--c--|
Source B:  --1--2--3--|
              amb(A, B)
Result:   --1--2--3--|      (B emitted first)
```

```python
primary = Stream.from_callable(primary_api.fetch)
fallback = Stream.from_callable(fallback_api.fetch)

Stream.amb(primary, fallback) \
    .subscribe(on_next=process)
```

## Operator Comparison

| Operator | Sources | Strategy | Completes When |
|----------|---------|----------|----------------|
| `merge` | N | Interleave all | All sources complete |
| `zip` | N | Pair by index | Any source completes |
| `combineLatest` | N | Latest from each | All sources complete |
| `concat` | N | Sequential | Last source completes |
| `switchMap` | 1 -> N | Cancel previous | Outer and last inner complete |
| `amb` | N | First wins | Winning source completes |
