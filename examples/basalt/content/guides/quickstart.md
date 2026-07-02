+++
title = "Quickstart"
description = "Install the broker, create a topic, and send your first at-least-once message in under five minutes."
date = "2025-02-03"
toc = true
weight = 1

[extra]
topic = "guides/quickstart"
+++

Basalt ships as a single static binary with an embedded storage engine, so there is nothing to provision before your first message. This guide takes you from an empty directory to a produced-and-consumed message on one node.

<!-- more -->

## Start a broker

```shell
$ basalt broker init --data-dir ./data
$ basalt broker start --config basalt.toml
broker/0  listening on 127.0.0.1:9092  log-dir=./data
```

`basalt.toml` holds the broker identity, listener address, and default replication settings. On a single node the replication factor is pinned to 1 — there is nothing to replicate to yet.

## Create a topic

```shell
$ basalt topic create orders.created --partitions 4 --replication 1
topic "orders.created" created: 4 partitions, replication 1
```

Partition count is the ceiling on how many consumers within one group can work a topic in parallel. Four partitions means at most four consumers in a group make progress simultaneously; a fifth sits idle until one drops out.

## Produce and consume

```shell
$ basalt produce orders.created --key "ord_9182" --value '{"total":4200}'
$ basalt consume orders.created --group billing-svc --from earliest
partition=2 offset=0 key=ord_9182 value={"total":4200}
```

The consumer's `--group` flag matters more than it looks: every consumer sharing a group name divides the topic's partitions between them and tracks one shared set of committed offsets. Run the same command again from a second terminal with the same group and Basalt will not redeliver — the offset is already committed. Change the group name and it delivers again from `earliest`, because a new group has no committed offsets yet.

From here, [Producing Messages](/guides/producing/) covers partition keys and acknowledgment levels, and [Consuming with Groups](/guides/consuming-groups/) covers what happens when a consumer in the group crashes mid-batch.
