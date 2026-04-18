+++
title = "Anomaly Report: March 2026"
date = "2026-03-21"
description = "Monthly anomaly detection summary and incident correlation"
tags = ["anomaly", "operations"]
+++

## Summary

37 anomalies were detected across all datasets in March 2026. This represents a higher-than-usual rate, primarily driven by the onboarding of new IoT data sources and a single infrastructure event.

## Anomaly Breakdown by Dataset

| Dataset | Anomalies | Critical | Warning |
|---|---|---|---|
| sensor_readings | 15 | 3 | 12 |
| user_events | 8 | 0 | 8 |
| transactions | 6 | 2 | 4 |
| page_views | 5 | 0 | 5 |
| error_logs | 3 | 0 | 3 |

## Notable Incidents

### March 8 -- Kafka Partition Rebalance

A broker node restart triggered a consumer group rebalance, causing a 4-minute gap in `user_events` and `page_views` ingestion. No data was lost; events were replayed from the Kafka topic after rebalance completion.

- Duration: 4 minutes
- Impact: 2 data gap anomalies
- Resolution: Automated replay from Kafka offset

### March 14 -- Transaction Timeout Spike

The payment gateway experienced elevated response times between 09:12 and 09:28 UTC, causing 847 transaction records to arrive with >10s latency. The anomaly detector correctly flagged this as a critical latency deviation.

- Duration: 16 minutes
- Impact: 2 critical anomalies (latency + volume)
- Root cause: Upstream payment provider maintenance window

### March 19 -- Sensor Data Gap

A firmware update deployment to 34 temperature sensors caused a 22-minute gap in readings. The update was rolled out without coordinating with the data team's maintenance calendar.

- Duration: 22 minutes
- Impact: 3 critical anomalies (data gaps)
- Action item: Add sensor firmware deployments to shared maintenance calendar

## Detection Accuracy

| Metric | Value |
|---|---|
| True Positives | 34 |
| False Positives | 3 |
| Precision | 91.9% |
| Mean Time to Detect | 47 seconds |
| Mean Time to Resolve | 8.2 minutes |
