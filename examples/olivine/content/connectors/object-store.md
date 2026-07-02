+++
title = "Object store sink"
description = "Write partitioned files to any S3-compatible bucket with idempotent, checkpoint-aligned commits."
date = "2025-06-09"
weight = 3
toc = true
[extra]
minutes = 6
role = "Idempotent sink"
+++

The object store sink writes partitioned files to any S3-compatible bucket —
AWS S3, MinIO, Cloudflare R2, Backblaze B2. Object stores cannot hold a
transaction open, so this sink reaches exactly-once through idempotent,
checkpoint-aligned commits instead.

<!-- more -->

## Writing partitioned files

Records buffer into part files keyed by a partition expression, and each file is
finalized on a checkpoint barrier:

```python
from olivine import sinks

pipe.sink(
    sinks.object_store(
        bucket="s3://reports",
        partition=lambda r: f"dt={r.date}/region={r.region}",
        format="parquet",
        delivery="idempotent",
    )
)
```

Between barriers the sink writes to a staging prefix. When the barrier lands, it
performs a single atomic rename into the final path named after the checkpoint
id. A replay after a crash writes the same object name, so the rename is
idempotent — the correct file simply reappears, and no duplicate part survives.

## Rolling policy

Control how often files roll independent of the checkpoint interval:

```python
sinks.object_store(
    bucket="s3://reports",
    roll_mb=128,        # roll at 128 MiB
    roll_ms=60000,      # or every 60s, whichever comes first
)
```

Small, frequent files are cheap to write but slow to query later; large files
are the reverse. For a query-heavy lake, target files in the 128–512 MiB range.

## Formats and compression

Parquet and newline-delimited JSON are built in, with `snappy`, `zstd`, or
`gzip` compression:

```python
sinks.object_store(bucket="s3://reports", format="parquet", compression="zstd")
```

## Credentials

The sink reads standard `AWS_*` environment variables, or takes an explicit
`endpoint` for self-hosted MinIO and R2. Nothing about the credentials touches
the checkpoint path, so you can move a bucket between providers without
rewriting your pipeline — only the endpoint changes.
