+++
title = "Working with Data"
weight = 1
description = "Connect to databases and manage data"
+++

Acme provides built-in database connectors for common databases.

## Supported Databases

| Database | Status |
|----------|--------|
| PostgreSQL | Stable |
| SQLite | Stable |
| MySQL | Beta |

## Connection Setup

Add a database section to your `acme.toml`:

```toml
[database]
adapter = "postgresql"
host = "localhost"
port = 5432
name = "mydb"
```

## Running Queries

```python
db = Acme.connect()
users = db.query("SELECT * FROM users WHERE active = ?", true)

for user in users:
    print(user.name)
```

## Migrations

```bash
acme db migrate
acme db rollback
acme db status
```
