+++
title = "Distributed Memory Cache"
date = "2023-11-15"
description = "A high-performance distributed caching system built with Rust and gRPC."
tags = ["rust", "grpc", "distributed-systems"]
template = "page.html"
+++

A distributed memory cache designed for low-latency retrieval and high throughput. The system utilizes a custom consensus protocol for node discovery and data replication.

## Architecture

The system is composed of several independent nodes that communicate over gRPC. Data partitioning is handled via consistent hashing, ensuring that cache hits are evenly distributed across the cluster.

```rust
pub struct CacheNode {
    id: String,
    peers: Vec<String>,
    store: Arc<RwLock<HashMap<String, Vec<u8>>>>,
}

impl CacheNode {
    pub fn new(id: String) -> Self {
        CacheNode {
            id,
            peers: Vec::new(),
            store: Arc::new(RwLock::new(HashMap::new())),
        }
    }
}
```

## Performance Metrics

- Sub-millisecond read latency (p99 < 0.8ms)
- Support for over 100k ops/sec per node
- Graceful degradation under network partitions
