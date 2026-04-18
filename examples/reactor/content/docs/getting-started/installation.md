+++
title = "Installation"
description = "Install Reactor in your project"
tags = ["installation", "getting-started", "reactor"]
+++

# Installation

Reactor supports both JVM and Python environments. Choose the installation method that matches your runtime.

## JVM (Maven)

Add the Reactor dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>io.reactor</groupId>
    <artifactId>reactor-core</artifactId>
    <version>3.6.0</version>
</dependency>
```

## JVM (Gradle)

Add to your `build.gradle`:

```groovy
dependencies {
    implementation 'io.reactor:reactor-core:3.6.0'
}
```

## Python (pip)

Install from PyPI:

```bash
pip install reactor-streams
```

Or with optional async support:

```bash
pip install reactor-streams[async]
```

## Python (Poetry)

```bash
poetry add reactor-streams
```

## Verify Installation

### Java

```java
import io.reactor.core.Stream;

public class VerifyInstall {
    public static void main(String[] args) {
        Stream.of(1, 2, 3)
            .map(x -> x * 2)
            .subscribe(System.out::println);
    }
}
```

Expected output:

```
2
4
6
```

### Python

```python
from reactor import Stream

Stream.of(1, 2, 3) \
    .map(lambda x: x * 2) \
    .subscribe(on_next=print)
```

Expected output:

```
2
4
6
```

## Optional Dependencies

| Package | Purpose |
|---------|---------|
| `reactor-net` | TCP/UDP stream sources and sinks |
| `reactor-kafka` | Kafka consumer and producer adapters |
| `reactor-grpc` | gRPC streaming integration |
| `reactor-test` | Virtual time schedulers and test subscribers |

Install optional packages as needed:

```bash
# JVM
implementation 'io.reactor:reactor-kafka:3.6.0'

# Python
pip install reactor-streams[kafka]
```

> Reactor has no required external dependencies beyond the standard library of each runtime. Optional packages add integration with specific messaging and networking systems.
