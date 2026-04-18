+++
title = "Installation"
weight = 1
+++

# Installation

This guide covers installing and configuring a graph database instance for local development. The examples in this documentation use Neo4j, but the modeling concepts apply to any property graph database.

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 4+ cores |
| Memory | 2 GB | 8 GB |
| Disk | 10 GB | 50 GB SSD |
| Java | JDK 17 | JDK 21 |
| OS | Linux, macOS, Windows | Linux (production) |

## Install via Package Manager

**macOS (Homebrew):**

```bash
brew install neo4j
```

**Ubuntu/Debian:**

```bash
wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
echo 'deb https://debian.neo4j.com stable latest' | sudo tee /etc/apt/sources.list.d/neo4j.list
sudo apt-get update
sudo apt-get install neo4j
```

**Docker:**

```bash
docker run \
  --name lattice-db \
  -p 7474:7474 \
  -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/password \
  -v $HOME/neo4j/data:/data \
  neo4j:5-community
```

## Configuration

The primary configuration file is located at `conf/neo4j.conf`. Key settings for development:

```properties
# Memory configuration
server.memory.heap.initial_size=512m
server.memory.heap.max_size=1G
server.memory.pagecache.size=512m

# Network
server.default_listen_address=0.0.0.0
server.bolt.listen_address=:7687
server.http.listen_address=:7474

# Authentication
dbms.security.auth_enabled=true
```

## Verify Installation

Start the database and connect using the Cypher shell:

```bash
# Start the service
neo4j start

# Connect via Cypher shell
cypher-shell -u neo4j -p password
```

Run a test query to verify:

```cypher
RETURN "Lattice is ready" AS message
```

If you see the message returned, your graph database is configured and ready. Proceed to the [Quick Start](../quickstart/) guide to create your first graph.
