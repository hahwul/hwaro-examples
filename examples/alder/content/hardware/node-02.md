+++
title = "node-02"
date = "2025-06-22"
description = "k3s worker on a fanless N100 mini PC — the node that is allowed to fail."
tags = ["kubernetes", "k3s", "compute"]
toc = true

[extra]
host = "node-02"
kind = "node"
role = "k3s worker"
cpu = "Intel N100 (4c/4t)"
ram = "16 GB DDR5"
watts = "9W"
+++

node-02 exists because I wanted to run Kubernetes without paying the power bill Kubernetes usually implies. It is a single-node k3s "cluster" — really just a container scheduler with better manifests than Compose — running on a mini PC that costs less to run for a year than node-01 costs to run for two months.

<!-- more -->

## Why k3s and not full Kubernetes

A single-node control plane has no business running the full kube-apiserver stack; k3s trims the parts a home lab never needs (in-tree cloud provider integrations, several admission controllers) and still speaks the same API everything else expects. Workloads that later need to move to a real cluster can be redeployed without a rewrite.

## Current workloads

```
$ kubectl get deploy -A --no-headers | wc -l
7
```

Seven deployments, mostly small: a Gitea mirror, an uptime dashboard, a couple of scheduled CronJobs that ping external services and write results to a shared volume on node-03. Nothing here has a resource request above 512Mi.

## Join configuration

The install is a single curl-to-shell invocation, kept boringly standard so the node can be reimaged from scratch in under ten minutes if the SD-card-adjacent eMMC storage ever gives out — the one real weakness of this hardware class.

```bash
curl -sfL https://get.k3s.io | \
  K3S_TOKEN=redacted \
  INSTALL_K3S_EXEC="--disable traefik --disable servicelb" \
  sh -
```

`traefik` and `servicelb` are disabled because gw-edge already terminates TLS and does load balancing at the network layer — running two reverse proxies in front of the same handful of services was solving a problem this rack does not have.
