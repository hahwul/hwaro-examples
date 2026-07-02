+++
title = "Guides"
description = "Task-oriented guides for installing, producing to, consuming from, and operating a Basalt cluster."
sort_by = "weight"
template = "section"

[extra]
topic = "guides/*"
+++

These guides walk through Basalt the way an operator actually meets it: install a broker, create a topic, write a producer, read it back with a consumer group, and then keep the cluster healthy once real traffic shows up. Each guide stands on its own, but read in order they build a complete mental model — from a single binary on your laptop to a replicated cluster serving multiple consumer groups in production.

Basalt's guarantees only hold if producers and consumers use them correctly. Acks levels, partition keys, offset commit strategy, and rebalance behavior are all choices with real tradeoffs, and these guides spend more time on *why* a default exists than on flag syntax. If you are looking for the exact bytes on the wire instead, see the [Protocol](/protocol/) section.

Start with Quickstart if you have never run a broker before. If you already have a cluster and are wiring up a service, jump straight to Producing Messages or Consuming with Groups.
