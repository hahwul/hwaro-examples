+++
title = "About"
description = "About the Hangar flight log system"
+++

## About Hangar

Hangar is a personal flight log and aviation journal. It tracks flights, aircraft, and routes in a format inspired by classic airline timetables and pilot logbooks.

### Log Format

Each flight entry records the following metadata:

| Field | Description |
|-------|-------------|
| Flight No. | Unique callsign for the journey |
| Departure | Origin airport IATA code |
| Arrival | Destination airport IATA code |
| Aircraft | Aircraft type designation |
| Flight Time | Duration of the flight |
| Altitude | Cruising altitude |
| Status | Current flight status |

### Status Codes

- **COMPLETED** -- Flight has landed and log is finalized
- **SCHEDULED** -- Flight is planned but not yet departed
- **CANCELLED** -- Flight was cancelled before departure

### System

This flight log is built with [Hwaro](https://hwaro.hahwul.com), a fast static site generator. The design draws from departure boards, cockpit instrumentation, and the clean lines of mid-century airline branding.
