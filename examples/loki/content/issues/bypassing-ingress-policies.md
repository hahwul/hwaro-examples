+++
title = "Bypassing Ingress Security Policies"
date = "2025-05-18"
description = "Investigating header forwarding vulnerabilities and HTTP request smuggling in Kubernetes Ingress controllers."
tags = ["kubernetes", "ingress", "bypass"]
[extra]
file_size = "6.1K"
+++

In cloud-native architectures, Kubernetes Ingress controllers serve as the primary entry point for external traffic, enforcing routing rules and security policies. Many organizations rely on Ingress annotations or web application firewall (WAF) integration at the controller level to block unauthorized headers, SQL injection patterns, or restricted paths. However, misconfigurations in backend routing or controller-to-pod communications can lead to policy bypasses.

<!-- more -->

This dispatch examines how internal header forwarding anomalies and HTTP request smuggling can be used to circumvent Ingress-level access controls.

During our testing of a standard ingress setup, we observed that the controller forwarded incoming requests to backend pods using a reverse proxy configuration that did not strip external headers starting with `X-Forwarded-`. An operator had configured backend applications to trust these headers for client IP identification and authentication. By injecting malformed headers that bypassed the Ingress regex filters but were normalized by the backend Go and Node.js servers, we succeeded in spoofing administrative credentials.

Securing this pipeline requires configuring the controller to sanitize all incoming forwarding headers and using TLS-based client certificates (mTLS) to authenticate traffic between the controller and the backend services, preventing direct backend access. Here is an Nginx snippet showing ingress configuration to strip client-controlled headers:

```nginx
# Ingress Controller ConfigMap configuration
proxy-set-header: "X-Forwarded-For $proxy_add_x_forwarded_for"
proxy-set-header-custom-value:
  X-Forwarded-User: ""
  X-Forwarded-Groups: ""
  X-Forwarded-Roles: ""
```
