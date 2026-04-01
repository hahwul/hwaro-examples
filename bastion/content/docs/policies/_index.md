+++
title = "Policies"
description = "Access control policies for identity, network, and device trust"
weight = 2
sort_by = "weight"
+++

Bastion policies define who can access what, from where, and under what conditions. Policies are evaluated on every request with no implicit trust.

## Policy Types

| Type | Purpose | Scope |
|------|---------|-------|
| Identity | Verify user and service identities | Authentication methods, group membership, MFA |
| Network | Control network-level access | CIDR ranges, service ports, micro-segmentation |
| Device | Enforce device posture requirements | OS version, disk encryption, endpoint agent status |

## Policy Evaluation Order

1. **Identity verification** -- Is the subject authenticated with a valid credential?
2. **Device trust** -- Does the connecting device meet compliance requirements?
3. **Network policy** -- Is the connection allowed from the source network to the target resource?
4. **Conditional checks** -- Are time, location, and risk-score constraints satisfied?

If any step fails, the request is denied and the decision is logged.
