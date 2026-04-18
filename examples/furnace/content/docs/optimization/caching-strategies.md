+++
title = "Caching Strategies"
weight = 1
+++

# Caching Strategies

Caching reduces latency and backend load by serving precomputed or previously fetched data. This guide covers cache layers, TTL configuration, invalidation strategies, and monitoring.

## Cache Layers

| Layer | Latency | Capacity | Persistence | Use Case |
|-------|---------|----------|-------------|----------|
| L1: In-Process | ~100ns | 10-100MB | None | Hot data, computed values |
| L2: Local Redis/Memcached | ~0.5ms | 1-16GB | Optional | Session data, API responses |
| L3: Distributed Cache | ~1-5ms | 10-100GB+ | Yes | Shared state, database query results |
| CDN | ~10-50ms | Unlimited | Yes | Static assets, public API responses |

## In-Process Cache

### LRU Cache Implementation

```go
import (
    "sync"
    "time"
)

type CacheEntry struct {
    Value     interface{}
    ExpiresAt time.Time
}

type LRUCache struct {
    mu       sync.RWMutex
    items    map[string]*CacheEntry
    maxSize  int
    hits     int64
    misses   int64
}

func (c *LRUCache) Get(key string) (interface{}, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()

    entry, exists := c.items[key]
    if !exists || time.Now().After(entry.ExpiresAt) {
        c.misses++
        return nil, false
    }
    c.hits++
    return entry.Value, true
}

func (c *LRUCache) Set(key string, value interface{}, ttl time.Duration) {
    c.mu.Lock()
    defer c.mu.Unlock()

    if len(c.items) >= c.maxSize {
        c.evictOldest()
    }
    c.items[key] = &CacheEntry{
        Value:     value,
        ExpiresAt: time.Now().Add(ttl),
    }
}
```

## TTL Configuration

Choose TTL based on data volatility and tolerance for staleness:

| Data Type | Recommended TTL | Rationale |
|-----------|----------------|-----------|
| User session | 30m | Security requirement |
| API rate limit counters | 60s | Must be near-real-time |
| Product catalog | 5m | Updates infrequently |
| Search results | 60s | Moderate freshness needed |
| Static config | 10m | Changes via deployment |
| User profile | 2m | Moderate update frequency |
| Dashboard aggregations | 30s | Near-real-time display |

### TTL with Jitter

Prevent cache stampede by adding random jitter to TTL:

```go
func ttlWithJitter(base time.Duration, jitterPercent float64) time.Duration {
    jitter := time.Duration(float64(base) * jitterPercent * (rand.Float64()*2 - 1))
    return base + jitter
}

// Usage: 5m base TTL with +/- 10% jitter
ttl := ttlWithJitter(5*time.Minute, 0.10)
// Results in TTL between 4m30s and 5m30s
```

## Cache Invalidation Strategies

### Write-Through

Update cache immediately on every write:

```go
func UpdateUser(ctx context.Context, user *User) error {
    // Update database
    if err := db.UpdateUser(ctx, user); err != nil {
        return err
    }
    // Update cache
    cacheKey := fmt.Sprintf("user:%s", user.ID)
    cache.Set(cacheKey, user, 5*time.Minute)
    return nil
}
```

### Write-Behind (Write-Back)

Buffer writes and flush asynchronously:

```go
func UpdateUserAsync(ctx context.Context, user *User) error {
    cacheKey := fmt.Sprintf("user:%s", user.ID)
    cache.Set(cacheKey, user, 5*time.Minute)
    writeQueue <- WriteOp{Key: cacheKey, Value: user}
    return nil
}

// Background flusher
func flushWrites() {
    batch := make([]WriteOp, 0, 100)
    ticker := time.NewTicker(500 * time.Millisecond)
    for {
        select {
        case op := <-writeQueue:
            batch = append(batch, op)
            if len(batch) >= 100 {
                db.BatchUpdate(batch)
                batch = batch[:0]
            }
        case <-ticker.C:
            if len(batch) > 0 {
                db.BatchUpdate(batch)
                batch = batch[:0]
            }
        }
    }
}
```

### Event-Driven Invalidation

Invalidate cache entries based on change events:

```yaml
# Cache invalidation via event bus
events:
  - topic: "user.updated"
    action: "invalidate"
    pattern: "user:{event.user_id}"

  - topic: "product.price_changed"
    action: "invalidate"
    pattern: "product:{event.product_id}"
    also_invalidate:
      - "search:*"
      - "category:{event.category_id}"
```

## Before/After: Adding a Cache Layer

An API endpoint querying the database on every request was the primary latency bottleneck:

| Metric | Before (no cache) | After (Redis L2) | Change |
|--------|-------------------|-------------------|--------|
| p50 latency | 45ms | 3.2ms | -92.9% |
| p99 latency | 210ms | 12ms | -94.3% |
| Database queries/sec | 32,000 | 4,200 | -86.9% |
| Throughput (RPS) | 8,500 | 52,000 | +511.8% |
| Cache hit rate | N/A | 87.3% | -- |
| DB CPU utilization | 89% | 18% | -79.8% |

Redis configuration:

```bash
# redis.conf tuning for cache workload
maxmemory 4gb
maxmemory-policy alloc-lfu
lazyfree-lazy-eviction yes
tcp-backlog 511
timeout 300
```

## Cache Monitoring

Track these metrics to ensure cache health:

| Metric | Healthy Range | Action if Out of Range |
|--------|--------------|----------------------|
| Hit rate | > 80% | Increase TTL or cache more aggressively |
| Eviction rate | < 5%/min | Increase cache size |
| Memory usage | < 85% capacity | Scale or increase maxmemory |
| Latency (p99) | < 5ms | Check network, connections |
| Connection count | < 80% max | Tune pool size |

```bash
# Redis monitoring commands
redis-cli info stats | grep -E "keyspace_hits|keyspace_misses|evicted_keys"
redis-cli info memory | grep -E "used_memory_human|maxmemory_human"

# Calculate hit rate
redis-cli info stats | awk -F: '/keyspace_hits/{h=$2} /keyspace_misses/{m=$2} END{printf "Hit rate: %.1f%%\n", h/(h+m)*100}'
```

## Best Practices

- Start with the simplest cache layer (in-process) before adding distributed caches
- Set explicit TTLs on every cache entry -- never cache without expiration
- Add jitter to TTLs to prevent thundering herd on expiration
- Monitor hit rates and eviction rates; adjust sizing based on data
- Use cache-aside pattern as the default; write-through only when consistency is critical
- Test cache failure scenarios -- the application must degrade gracefully when cache is unavailable
