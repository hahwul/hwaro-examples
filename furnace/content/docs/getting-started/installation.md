+++
title = "Installation"
weight = 1
+++

# Installing Profiling Tools

This guide covers installation of the core profiling and benchmarking tools used throughout Furnace documentation.

## Prerequisites

- Linux kernel 4.9+ or macOS 12+ (for perf/DTrace support)
- Go 1.21+ (for pprof and Go benchmarks)
- Python 3.10+ (for analysis scripts)

## CPU Profiling Tools

### pprof (Go)

pprof ships with the Go toolchain. Verify it is available:

```bash
go tool pprof -h
```

For standalone use, install the CLI:

```bash
go install github.com/google/pprof@latest
```

### Linux perf

Install perf on Debian/Ubuntu:

```bash
sudo apt-get install linux-tools-common linux-tools-$(uname -r)
perf --version
```

On RHEL/CentOS:

```bash
sudo yum install perf
```

### async-profiler (JVM)

Download the latest release for JVM profiling:

```bash
wget https://github.com/async-profiler/async-profiler/releases/download/v3.0/async-profiler-3.0-linux-x64.tar.gz
tar xzf async-profiler-3.0-linux-x64.tar.gz
export PATH=$PATH:$(pwd)/async-profiler-3.0-linux-x64/bin
asprof --version
```

## Memory Profiling Tools

### heaptrack

```bash
sudo apt-get install heaptrack heaptrack-gui
```

### Valgrind (Massif)

```bash
sudo apt-get install valgrind
valgrind --version
```

## Load Testing Tools

### wrk

```bash
git clone https://github.com/wg/wrk.git
cd wrk
make
sudo cp wrk /usr/local/bin/
wrk --version
```

### hey

```bash
go install github.com/rakyll/hey@latest
hey -h
```

### k6

```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg \
  --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D68
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" \
  | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update && sudo apt-get install k6
k6 version
```

## Visualization

### Grafana + Prometheus

```bash
docker compose up -d prometheus grafana
```

Example `docker-compose.yml` snippet:

```yaml
services:
  prometheus:
    image: prom/prometheus:v2.50.0
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:10.3.0
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
```

## Verifying the Installation

Run the following to confirm all tools are accessible:

```bash
echo "=== Profiling Tools ==="
go tool pprof -h 2>&1 | head -1
perf --version 2>/dev/null || echo "perf: not installed"
valgrind --version 2>/dev/null || echo "valgrind: not installed"

echo "=== Load Testing ==="
wrk --version 2>/dev/null || echo "wrk: not installed"
hey -h 2>&1 | head -1 || echo "hey: not installed"
k6 version 2>/dev/null || echo "k6: not installed"
```

Once all tools report their versions, proceed to the [Quick Start](../quickstart/) guide.
