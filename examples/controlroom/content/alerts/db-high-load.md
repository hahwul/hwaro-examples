+++
title = "High CPU Load: eu-west-db-01"
date = "2024-11-14T21:12:00Z"
tags = ["warning", "database", "ireland"]
+++

## Alert Details
The database server `eu-west-db-01` has been operating at elevated CPU usage (85-92%) for the past 4 hours. RAM usage is also nearing capacity at 60GB out of 64GB available.

## Impact Analysis
Queries taking longer than usual to execute. Latency increased by 15ms on average for read operations in the European region.

## Investigation
A rogue reporting query was identified locking several key tables and performing unoptimized table scans.

## Resolution Steps
1. Killed the blocking process ID `12934`.
2. Analyzing query execution plan to add missing indexes.
3. Will monitor metrics for the next 24 hours.
