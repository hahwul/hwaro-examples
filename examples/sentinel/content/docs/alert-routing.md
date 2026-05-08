+++
title = "Alert Routing"
date = 2024-07-02
description = "Routing rules, severity levels, and suppression windows."
+++

The Sentinel routing layer determines which destinations receive a given alert and at what cadence. Routing decisions are made on the collector after a signal has been classified and enriched.

## Severity Model

Sentinel uses four severity levels: informational, warning, critical, and emergency. A level is assigned by the classifier based on the matching rule, and may be raised or lowered by an enrichment plugin before the routing stage receives the alert.

Severity is not strictly ordered with respect to delivery. An informational alert tagged for an audit channel may be delivered on a schedule that emergencies do not use. Routing rules treat severity as one input among several.

## Rule Evaluation

Routing rules are evaluated in declaration order. The first rule that matches the alert is applied, and remaining rules are skipped unless the rule sets the `continue` flag. This allows a single alert to be delivered to multiple destinations when explicitly configured.

A rule consists of a predicate over alert fields, a destination set, and an optional suppression window. The predicate language supports equality, set membership, and regular expression matching on string fields.

## Suppression

Suppression prevents repeated alerts for the same condition from saturating a destination. The window is keyed on a configurable subset of alert fields, defaulting to the alert source and the rule identifier.

When a suppression window is active, subsequent matching alerts are recorded in the collector store but not forwarded. At the end of the window, a summary alert is emitted containing the count of suppressed events and any field changes observed across them.

## Failure Modes

If a destination is unreachable, the routing layer retries with exponential backoff up to a configured maximum. After the maximum, the alert is moved to a dead letter queue and a meta-alert is generated against the destination itself. The dead letter queue is inspectable through the administrative interface.
