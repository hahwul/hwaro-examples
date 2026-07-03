+++
title = "Install"
description = "Get the breccia binary onto your machine and pointed at a database in under five minutes."
date = "2025-01-20"
tags = ["install", "cli"]
toc = true
+++

Breccia ships as a single static binary with no runtime dependencies. It talks to Postgres and MySQL over the same drivers your application already uses, and it keeps its own state in one ledger table it creates on first run.

<!-- more -->

## Get the binary

```bash
curl -fsSL https://get.breccia.dev | sh
```

Or pull it from a package manager:

```bash
brew install breccia
# or
apt-get install breccia
```

Verify the install and check that Breccia can reach your database:

```bash
breccia doctor --database-url postgres://app:app@localhost:5432/app
```

`doctor` checks connection permissions, confirms the account can run `ALTER TABLE ... ADD COLUMN` and build indexes `CONCURRENTLY`, and warns if `lock_timeout` and `statement_timeout` are not set on the connection Breccia will use.

## Configure the project

Every Breccia project has one `breccia.toml` at its root:

```toml
[database]
url = "postgres://app:app@localhost:5432/app"
dialect = "postgres"

[migrations]
dir = "migrations/"
ledger_table = "breccia_ledger"

[safety]
lock_timeout_ms = 2000
require_verify = true
```

`require_verify = true` is the important line. It means Breccia will refuse to run a contract step until the matching verify step has reported a clean parity window — see [Verify Parity Before Cutover](/migrations/verify-parity/).

## Initialize the ledger

```bash
breccia init
```

This creates `breccia_ledger`, a small table Breccia uses to record which steps have run, when, and against what schema hash. It is the only table Breccia writes to outside of the migration you have explicitly asked it to run. Once `init` finishes, you are ready to write your first plan — start with [Plan the Cutover Window](/migrations/plan-the-cutover/).
