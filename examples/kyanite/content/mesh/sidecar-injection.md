+++
title = "Sidecar Injection"
description = "Label a namespace once and every pod scheduled into it gets a proxy — no per-workload annotations."
date = "2025-03-02"
weight = 20
toc = true
[extra]
section_id = "MESH.2"
status = "stable"
+++

A sidecar is a single extra container in the pod: the Kyanite proxy, injected by a mutating admission webhook at pod creation. There is no per-deployment annotation to remember and no init container to wire up by hand — injection is a property of the namespace.

<!-- more -->

## Enable a namespace

Label the namespace and the webhook takes over from the next pod onward. Existing pods are untouched until they are rescheduled.

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: checkout
  labels:
    mesh.kyanite.io/inject: enabled
```

## What injection adds

1. The admission webhook intercepts the pod's creation request before the scheduler sees it.
2. It appends a `sidecar` container running `kyanite/sidecar`, sharing the pod's network namespace.
3. An init container installs `iptables` rules that redirect inbound and outbound TCP traffic through the sidecar's ports.
4. The pod starts with both containers; the application container blocks on nothing extra — the redirect is transparent at the kernel level.

## Opting a single workload out

Sometimes one deployment in an enabled namespace needs to skip the mesh — a batch job that only talks to object storage, for instance. One pod-template label overrides the namespace default:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nightly-export
  namespace: checkout
spec:
  template:
    metadata:
      labels:
        mesh.kyanite.io/inject: disabled
    spec:
      containers:
        - name: nightly-export
          image: registry.internal/nightly-export:2025.03
```

## Verifying injection

`kyanitectl` reports sidecar status per pod without you needing to read container lists:

```text
$ kyanitectl proxy status -n checkout
POD                          SIDECAR   READY   CERT EXPIRES
checkout-7d9f8b6c5-4kxpl     injected  true    23h12m
checkout-7d9f8b6c5-9zqwr     injected  true    23h9m
nightly-export-28941200-x    skipped   —       —
```

A pod stuck at `pending` here almost always means the webhook could not reach the control plane at admission time — check `kyanitectl controller status` next. Once a pod shows `injected`, it is ready to pick up [mTLS](/mesh/mtls-identity/) and any [traffic split](/mesh/traffic-splitting/) that targets its service.
