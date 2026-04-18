+++
title = "Configuration"
description = "Configure Reactor runtime behavior"
tags = ["configuration", "getting-started", "reactor"]
+++

# Configuration

Reactor uses a layered configuration system. Settings can be provided through configuration files, environment variables, or programmatic API calls. Programmatic settings take precedence over file-based settings.

## Configuration File

Create a `reactor.yaml` in your project root:

```yaml
reactor:
  schedulers:
    default: parallel
    parallel:
      threads: 4
    io:
      threads: 16
      queue_size: 1024

  backpressure:
    default_strategy: buffer
    buffer_size: 256
    overflow: drop_oldest

  metrics:
    enabled: true
    prefix: reactor
    export_interval: 10s

  logging:
    level: info
    format: structured
```

## Environment Variables

Override any configuration value with environment variables using the `REACTOR_` prefix:

```bash
export REACTOR_SCHEDULERS_PARALLEL_THREADS=8
export REACTOR_BACKPRESSURE_BUFFER_SIZE=512
export REACTOR_METRICS_ENABLED=true
```

## Programmatic Configuration

### Java

```java
import io.reactor.core.ReactorConfig;

ReactorConfig config = ReactorConfig.builder()
    .parallelThreads(8)
    .ioThreads(32)
    .defaultBufferSize(512)
    .metricsEnabled(true)
    .build();

Reactor.initialize(config);
```

### Python

```python
from reactor import ReactorConfig, Reactor

config = ReactorConfig(
    parallel_threads=8,
    io_threads=32,
    default_buffer_size=512,
    metrics_enabled=True,
)

Reactor.initialize(config)
```

## Scheduler Configuration

Reactor provides three built-in scheduler types:

| Scheduler | Use Case | Default Threads |
|-----------|----------|-----------------|
| `immediate` | Same-thread execution for testing | 1 (caller thread) |
| `parallel` | CPU-bound computation | Number of CPU cores |
| `io` | Blocking I/O operations | 16 (expandable) |

## Buffer Configuration

Control the default buffer sizes for backpressure:

| Setting | Default | Description |
|---------|---------|-------------|
| `buffer_size` | 256 | Default internal buffer capacity |
| `overflow` | `error` | Strategy when buffer is full: `error`, `drop_oldest`, `drop_latest` |
| `prefetch` | 32 | Number of items to request ahead from upstream |

## Metrics

When metrics are enabled, Reactor exposes the following counters:

- `reactor.stream.items_emitted` -- Total items published
- `reactor.stream.items_consumed` -- Total items delivered to subscribers
- `reactor.stream.errors` -- Total errors signaled
- `reactor.stream.backpressure_drops` -- Items dropped due to backpressure overflow
- `reactor.scheduler.tasks_submitted` -- Tasks submitted to schedulers
- `reactor.scheduler.tasks_completed` -- Tasks completed by schedulers

> Metrics are exported in Prometheus format by default. Use the `metrics.exporter` setting to switch to StatsD or OpenTelemetry exporters.
