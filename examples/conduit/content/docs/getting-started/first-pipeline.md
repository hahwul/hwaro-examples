+++
title = "First Pipeline"
weight = 3
tags = ["setup", "tutorial"]
+++

# First Pipeline

This guide walks through building a minimal Conduit pipeline that reads JSON events from a file and writes them to standard output. The exercise covers source declaration, transform application, and sink configuration.

## Prepare a Sample File

Create `events.jsonl` in your working directory:

```
{"id": 1, "user": "alice", "action": "login"}
{"id": 2, "user": "bob", "action": "purchase"}
{"id": 3, "user": "alice", "action": "logout"}
```

Each line represents a single event encoded as JSON. Conduit treats each line as a discrete record.

## Define the Pipeline

Add the following section to `conduit.toml`:

```toml
[pipelines.local-demo]
source = { type = "file", path = "events.jsonl", format = "jsonl" }

[[pipelines.local-demo.transforms]]
type = "filter"
field = "action"
op = "in"
values = ["login", "purchase"]

[pipelines.local-demo.sink]
type = "stdout"
format = "json"
```

The pipeline reads from a local file, drops `logout` events, and prints surviving records as JSON.

## Run the Pipeline

```bash
conduit run --pipeline local-demo
```

Conduit prints a startup banner with the loaded pipeline name, then begins reading the file. Records that pass the filter appear on standard output as compact JSON. The process exits when the source is exhausted.

## Inspect Metrics

While the pipeline runs, Conduit exposes a metrics endpoint on `localhost:9100/metrics`. The relevant counters are `conduit_records_in_total`, `conduit_records_out_total`, and `conduit_records_dropped_total`.

```bash
curl -s localhost:9100/metrics | grep conduit_records
```

For the sample file the input count is 3, the output count is 2, and the dropped count is 1.

## Next Steps

Pipelines compose by chaining transforms. The next chapter covers stateful transforms, including windowing and joins.
