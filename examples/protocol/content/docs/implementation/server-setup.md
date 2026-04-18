+++
title = "Server Setup"
weight = 2
description = "Deploying and configuring a NexusWire server endpoint"
+++

## 1. Overview

This guide covers the deployment and configuration of a NexusWire server. The reference server implementation (`nwserver`) is a standalone binary that accepts NexusWire connections and dispatches messages to application handlers.

## 2. Installation

### 2.1 Binary Release

```bash
curl -fsSL https://releases.nexuswire.dev/nwserver/v1.2.0/install.sh | bash
nwserver --version
# nwserver 1.2.0 (NW/1.2)
```

### 2.2 From Source

```bash
git clone https://github.com/nexuswire/nwserver.git
cd nwserver
cargo build --release
sudo cp target/release/nwserver /usr/local/bin/
```

## 3. Configuration File

The server reads its configuration from `/etc/nexuswire/server.toml` by default. Use the `--config` flag to specify an alternative path.

```toml
# /etc/nexuswire/server.toml

[server]
bind_address = "0.0.0.0:9470"
max_connections = 10000
max_streams_per_connection = 256
idle_timeout = "300s"
handshake_timeout = "10s"

[flow_control]
initial_window_size = 131072
max_frame_size = 16777215

[keepalive]
enabled = true
interval = "30s"
timeout = "10s"

[tls]
enabled = false
cert_file = "/etc/nexuswire/tls/server.crt"
key_file = "/etc/nexuswire/tls/server.key"
ca_file = "/etc/nexuswire/tls/ca.crt"
min_version = "1.2"

[logging]
level = "info"
format = "json"
output = "stdout"

[metrics]
enabled = true
bind_address = "127.0.0.1:9471"
path = "/metrics"
```

## 4. Configuration Reference

### 4.1 Server Section

| Parameter                    | Type     | Default        | Description                              |
|------------------------------|----------|----------------|------------------------------------------|
| `bind_address`               | String   | `0.0.0.0:9470` | Address and port to listen on            |
| `max_connections`            | u32      | 10000          | Maximum concurrent connections           |
| `max_streams_per_connection` | u16      | 256            | Maximum streams per connection           |
| `idle_timeout`               | Duration | 300s           | Close idle connections after this period |
| `handshake_timeout`          | Duration | 10s            | Maximum time to complete handshake       |
| `worker_threads`             | u32      | CPU count      | Number of I/O worker threads             |

### 4.2 Flow Control Section

| Parameter              | Type | Default    | Description                           |
|------------------------|------|------------|---------------------------------------|
| `initial_window_size`  | u32  | 131072     | Default window size for new streams   |
| `max_frame_size`       | u32  | 16777215   | Maximum allowed frame payload size    |

### 4.3 TLS Section

| Parameter     | Type   | Default | Description                          |
|---------------|--------|---------|--------------------------------------|
| `enabled`     | bool   | false   | Enable TLS termination               |
| `cert_file`   | Path   | None    | Path to PEM-encoded server certificate |
| `key_file`    | Path   | None    | Path to PEM-encoded private key      |
| `ca_file`     | Path   | None    | Path to CA certificate for client auth |
| `min_version` | String | "1.2"   | Minimum TLS version (1.2 or 1.3)    |

## 5. Running the Server

### 5.1 Foreground

```bash
nwserver --config /etc/nexuswire/server.toml
```

### 5.2 Systemd Service

```ini
# /etc/systemd/system/nwserver.service
[Unit]
Description=NexusWire Protocol Server
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/nwserver --config /etc/nexuswire/server.toml
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
User=nexuswire
Group=nexuswire

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now nwserver
sudo systemctl status nwserver
```

## 6. Operational Procedures

### 6.1 Health Check

The metrics endpoint exposes a `/health` path that returns HTTP 200 when the server is accepting connections:

```bash
curl -s http://127.0.0.1:9471/health
# {"status":"ok","connections":42,"uptime_seconds":86400}
```

### 6.2 Graceful Shutdown

Sending SIGTERM initiates a graceful shutdown sequence:

```
    Admin                    nwserver                   Clients
      |                         |                          |
      |  SIGTERM                |                          |
      |------------------------>|                          |
      |                         |  GOAWAY (all conns)      |
      |                         |------------------------->|
      |                         |                          |
      |                         |  [drain: 5s max]         |
      |                         |                          |
      |                         |  TCP FIN (all conns)     |
      |                         |------------------------->|
      |                         |                          |
      |                         |  [exit 0]                |
      |                         |                          |
```

The server waits up to 5 seconds for in-flight requests to complete. Connections still active after the drain period are forcefully closed.

### 6.3 Connection Draining

For rolling deployments, remove the server from the load balancer, then send SIGTERM. This ensures no new connections arrive during shutdown:

```bash
# Step 1: Remove from load balancer
lb-ctl remove nwserver-01

# Step 2: Wait for LB health check to propagate
sleep 10

# Step 3: Initiate graceful shutdown
sudo systemctl stop nwserver
```

## 7. Performance Tuning

### 7.1 OS-Level Settings

```bash
# Increase file descriptor limit
ulimit -n 65536

# TCP tuning for high-throughput
sysctl -w net.core.somaxconn=65535
sysctl -w net.ipv4.tcp_max_syn_backlog=65535
sysctl -w net.core.rmem_max=16777216
sysctl -w net.core.wmem_max=16777216
sysctl -w net.ipv4.tcp_rmem="4096 87380 16777216"
sysctl -w net.ipv4.tcp_wmem="4096 65536 16777216"
```

### 7.2 Server-Level Settings

For maximum throughput, set `worker_threads` to match the number of CPU cores and increase the initial window size:

```toml
[server]
worker_threads = 16

[flow_control]
initial_window_size = 1048576   # 1 MB
```

### 7.3 Benchmarking

The `nwbench` tool measures throughput and latency:

```bash
nwbench --target 10.0.1.50:9470 \
        --streams 64 \
        --message-size 1024 \
        --duration 60s \
        --report-interval 5s
```

Sample output:

```
Interval   Throughput     p50      p99      p99.9    Errors
0-5s       124,301 msg/s  0.12ms   0.45ms   1.23ms   0
5-10s      128,445 msg/s  0.11ms   0.42ms   1.18ms   0
10-15s     127,892 msg/s  0.11ms   0.44ms   1.21ms   0
...
Summary    126,879 msg/s  0.11ms   0.44ms   1.20ms   0
```

## 8. Monitoring

The server exposes Prometheus-compatible metrics at the configured metrics endpoint:

| Metric                              | Type      | Description                            |
|-------------------------------------|-----------|----------------------------------------|
| `nw_connections_active`             | Gauge     | Current active connections             |
| `nw_connections_total`              | Counter   | Total connections since startup        |
| `nw_streams_active`                 | Gauge     | Current active streams                 |
| `nw_frames_received_total`          | Counter   | Total frames received                  |
| `nw_frames_sent_total`              | Counter   | Total frames sent                      |
| `nw_bytes_received_total`           | Counter   | Total payload bytes received           |
| `nw_bytes_sent_total`               | Counter   | Total payload bytes sent               |
| `nw_handshake_duration_seconds`     | Histogram | Handshake completion time              |
| `nw_request_duration_seconds`       | Histogram | End-to-end request processing time     |
