+++
title = "About Gnomon"
description = "Discover Gnomon: a dependency-aware distributed job scheduler designed for calendar-precision cron and resilient cluster execution."
tags = ["about", "architecture"]
+++

Gnomon is a dependency-aware distributed job scheduler designed to execute complex job graphs with calendar-precision cron scheduling. It was born from the need to manage thousands of interdependent daily tasks across a fleet of virtual machines without introducing single points of failure. In astronomical terms, a gnomon is the part of a sundial that casts a shadow, pointing precisely to the hour. Similarly, Gnomon the scheduler acts as the central timekeeper and coordinator, projecting order across clusters of computing nodes.

Developed as a modern alternative to legacy systems, Gnomon is written in a statically compiled, type-safe language to ensure minimal memory overhead and maximum throughput. Our scheduler is built around a decentralized architecture where individual worker nodes poll a shared state store, using lease renewals and distributed locking to guarantee that no task is run concurrently or lost during network partitions. We believe in providing operators with clean instrumentation, detailed failure metrics, and complete control over execution pipelines. Learn about our active updates in the [Releases](../releases/) section.