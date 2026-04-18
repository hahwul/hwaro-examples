+++
title = "Concepts"
weight = 2
sort_by = "weight"
+++

# Concepts

This section explains the core concepts behind Dispatch. Understanding these building blocks is essential for designing reliable event-driven systems.

## Core Components

The Dispatch architecture consists of three primary components.

```
+------------+      +---------+      +------------+
| Producers  | ---> | Topics  | ---> | Consumers  |
+------------+      +---------+      +------------+
                        |
                   +---------+
                   | Storage |
                   +---------+
```

- **Events** -- The fundamental unit of data flowing through the system
- **Producers** -- Services or processes that publish events to topics
- **Consumers** -- Services or processes that subscribe to topics and process events

Each concept is covered in detail on its own page. Start with [Events](events/) to learn about the message format and lifecycle.
