+++
title = "Communications System"
date = "2026-02-17"
weight = 3
template = "post"
description = "Telemetry and command uplink systems documentation"
tags = ["communications", "telemetry"]
[extra]
system_status = "NOMINAL"
+++

## System Overview

The communications system provides high-bandwidth telemetry downlink and secure command uplink capabilities. It utilizes S-band for primary vehicle telemetry and X-band for high-rate payload data transmission.

## Transceiver Specifications

| Specification | Value |
|---------------|-------|
| Primary Band | S-Band |
| Payload Band | X-Band |
| Telemetry Rate | 5 Mbps |
| Payload Data Rate | 150 Mbps |
| Encryption | AES-256 |
| Antenna Count | 4 Omni-directional |
| Backup Systems | UHF Secondary |

## Redundancy

The vehicle utilizes four flush-mounted phased array antennas positioned at 90-degree intervals to ensure continuous ground station coverage regardless of vehicle attitude. The system automatically switches between antennas based on signal strength.

## Ground Station Network

Coverage is maintained via a global network of ground stations, ensuring continuous contact during ascent, orbital insertion, and payload deployment. Loss of signal (LOS) periods are minimized to less than 30 seconds per orbit.
