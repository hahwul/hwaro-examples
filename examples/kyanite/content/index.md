+++
title = "Kyanite"
description = "Service mesh documentation: mTLS, traffic splits, and sidecars without the ceremony"
template = "home"
+++

Kyanite runs as a control plane and a fleet of sidecar proxies, one per workload. You do not write YAML to get encryption, and you do not redeploy to shift traffic — both are properties of the mesh, not tasks you perform on top of it.

This manual documents the parts you actually configure: how a namespace joins the mesh, how a route splits between revisions, and how to read what the sidecars are telling you. Everything else — certificate rotation, retry budgets, proxy lifecycle — happens without an incident ticket.
