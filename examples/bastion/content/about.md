+++
title = "About"
description = "About the Bastion zero-trust access control platform"
+++

# About Bastion

Bastion is a zero-trust access control platform designed for organizations that require strict identity verification and policy enforcement across all network boundaries.

## Project Goals

- Provide a unified policy engine for identity, network, and device trust decisions
- Enforce least-privilege access with granular, auditable controls
- Support modern authentication methods including mutual TLS, OIDC, and certificate-based auth
- Deliver comprehensive audit logging for compliance and incident response

## Architecture

Bastion operates as a policy decision point (PDP) and policy enforcement point (PEP) that sits between users and protected resources. All access requests are evaluated against the configured policy set before being allowed or denied.

## License

Bastion is released under the Apache 2.0 license. See the project repository for full license terms.
