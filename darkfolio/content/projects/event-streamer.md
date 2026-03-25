+++
title = "Real-time Event Streamer"
date = "2024-02-10"
description = "A Kafka-backed event processing pipeline for high-volume telemetry data."
tags = ["go", "kafka", "telemetry"]
template = "page"
+++

An event streaming platform built to process millions of telemetry events per minute. Written in Go, it leverages Goroutines for concurrent processing and Kafka for durable event storage.

## Key Features

1. **Schema Validation**: All incoming events are validated against a central schema registry before processing.
2. **Dead Letter Queue**: Malformed events are routed to a separate topic for manual inspection.
3. **Aggregation**: Real-time aggregation of metrics based on rolling time windows.

```go
func processStream(events <-chan Event, results chan<- Result) {
    for event := range events {
        // Validate and process the event
        result, err := processEvent(event)
        if err != nil {
            handleError(event, err)
            continue
        }
        results <- result
    }
}
```
