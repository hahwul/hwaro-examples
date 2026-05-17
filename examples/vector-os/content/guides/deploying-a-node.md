+++
title = "02.01 — Deploying a node"
description = "Join a single worker to an existing cluster."
weight = 1

[extra]
section_label = "02 · Guides"
section_number = "02.01"
+++

This guide walks through joining a single worker to an existing cluster. The
guide assumes a control plane is already running and reachable on the
network. If you do not have one yet, see the cluster bootstrap guide first.

## Prerequisites

You will need root or sudo on the new machine, network connectivity to the
control plane on TCP port 7700, and a join token. Tokens are short-lived; ask
the operator who runs the control plane to generate one, or run:

```shell
vector-os admin token create --role worker --ttl 1h
```

The command prints a token of the form `vot_…`. Treat it as a secret.

## Install and register

Install the binary using the script from the installation chapter, then run
the join command on the new node:

```shell
vector-os worker join \
  --upstream https://control.vector.internal:7700 \
  --token vot_8f3a2c19b04e \
  --zone us-east-1a \
  --label gpu=h100,storage=nvme
```

The command exchanges the token for a long-lived worker certificate, writes it
to `/etc/vector-os/worker.crt`, and registers the node's capabilities with the
control plane.

## Verify

From any client with admin credentials, list the nodes and confirm the new one
is `ready`:

```shell
vector-os nodes list
# NAME    ZONE         STATUS  CPU  MEM  GPU  AGE
# a01     us-east-1a   ready   96   768  8    14d
# a02     us-east-1a   ready   96   768  8    14d
# a03     us-east-1a   ready   96   768  8    7s
```

A node that fails to reach `ready` within five minutes is almost always a
firewall or DNS problem. Run `vector-os doctor --remote control.vector.internal`
on the worker to diagnose.
