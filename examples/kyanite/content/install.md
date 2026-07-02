+++
title = "Install & Bootstrap"
description = "Get the control plane running and your first namespace meshed in under ten minutes."
toc = true
[extra]
section_id = "OPS.1"
status = "stable"
+++

Kyanite installs as a single Helm-free binary bundle: a controller Deployment, a mutating webhook, and a CLI. There is no external database — control-plane state lives in Kubernetes custom resources, and it starts from zero configuration.

<!-- more -->

## Prerequisites

- A Kubernetes cluster, 1.27 or newer, with cluster-admin access to install CRDs and a webhook.
- The `kyanitectl` CLI on your path — a single static binary, no runtime dependencies.
- Outbound access from the cluster's API server to admit webhook calls locally (no external network required after install).

## Bootstrap procedure

1. Download and install the CLI for your platform:

   ```text
   $ curl -fsSL https://get.kyanite.io/install.sh | sh
   $ kyanitectl version
   kyanitectl 1.3.2
   ```

2. Install the control plane, CRDs, and webhook into the `kyanite-system` namespace:

   ```text
   $ kyanitectl install
   installing CRDs .................... done
   installing controller ............... done
   installing webhook ................... done
   waiting for controller ready ......... done (18s)
   ```

3. Confirm the control plane is healthy and reachable from the webhook:

   ```text
   $ kyanitectl controller status
   CONTROLLER   READY   VERSION   CERT-AUTHORITY
   running      true    1.3.2     issuing
   ```

4. Apply a minimal mesh-wide config. `STRICT` mTLS is the recommended default even before any namespace is injected — it only takes effect for workloads that join the mesh:

   ```yaml
   apiVersion: mesh.kyanite.io/v1
   kind: MeshConfig
   metadata:
     name: default
   spec:
     mtls:
       mode: STRICT
     telemetry:
       exportInterval: 15s
   ```

   ```text
   $ kubectl apply -f mesh-config.yaml
   meshconfig.mesh.kyanite.io/default created
   ```

5. Label your first namespace to enable sidecar injection, then roll its deployments so existing pods pick up a sidecar:

   ```text
   $ kubectl label namespace checkout mesh.kyanite.io/inject=enabled
   $ kubectl rollout restart deployment -n checkout
   ```

6. Verify the sidecars came up and are handshaking:

   ```text
   $ kyanitectl proxy status -n checkout
   POD                          SIDECAR   READY   CERT EXPIRES
   checkout-7d9f8b6c5-4kxpl     injected  true    23h58m
   checkout-7d9f8b6c5-9zqwr     injected  true    23h58m
   ```

## Uninstalling

```text
$ kyanitectl uninstall
removing webhook ..................... done
removing controller ................... done
removing CRDs (leaves injected pods as-is) done
```

Uninstalling removes the control plane and webhook but does not touch already-injected sidecars — restart affected deployments afterward to drop the proxy containers.

From here, the mesh reference covers each resource in depth: start with [architecture](/mesh/architecture/) if you want the full picture, or jump straight to [sidecar injection](/mesh/sidecar-injection/) and [mTLS & identity](/mesh/mtls-identity/) if you already know what you are configuring.
