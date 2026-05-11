+++
title = "Concurrency Patterns"
weight = 30
+++

Concurrency is essential for writing high-performance, non-blocking applications. In this guide, we will explore core concurrency patterns to help structure robust multi-threaded systems safely and effectively.

## Thread Pools

Instead of instantiating a new thread for every incoming task, utilizing a thread pool allows you to recycle a fixed number of threads. This avoids the overhead of context switching and thread creation while maintaining predictable resource usage. When the pool is at capacity, tasks are queued until a thread becomes available.

## Actor Model

The Actor Model encapsulates state within isolated components called "actors". Actors do not share memory. Instead, they communicate exclusively by passing messages to each other asynchronously. This paradigm prevents race conditions and makes reasoning about distributed state much easier.

## Promises and Futures

For operations that might block, such as network requests or filesystem access, Promises and Futures offer a way to represent a value that will be available later. By chaining these objects, you can handle sequences of asynchronous tasks without deep nesting, keeping the execution flow clean and manageable.
