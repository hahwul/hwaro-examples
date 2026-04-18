+++
title = "Telemetry"
description = "Mission telemetry data and monitoring systems"
tags = ["telemetry", "data", "monitoring"]
+++

<div class="telemetry-page">

## Mission Telemetry

Real-time telemetry data streams from vehicle and ground systems. All parameters are monitored continuously from pre-launch through orbit insertion.

### Vehicle Telemetry Channels

<div class="telemetry-grid">
  <div class="telemetry-card">
    <div class="telemetry-label">PROPULSION</div>
    <div class="telemetry-value">NOMINAL</div>
    <div class="telemetry-detail">Chamber pressure, turbopump RPM, propellant flow rates, nozzle temperature, gimbal position</div>
  </div>
  <div class="telemetry-card">
    <div class="telemetry-label">GUIDANCE</div>
    <div class="telemetry-value">TRACKING</div>
    <div class="telemetry-detail">Inertial navigation, GPS cross-check, attitude quaternion, rate gyro outputs, star tracker</div>
  </div>
  <div class="telemetry-card">
    <div class="telemetry-label">STRUCTURAL</div>
    <div class="telemetry-value">NOMINAL</div>
    <div class="telemetry-detail">Airframe strain, vibration spectra, acoustic levels, thermal profiles, tank pressure</div>
  </div>
  <div class="telemetry-card">
    <div class="telemetry-label">ELECTRICAL</div>
    <div class="telemetry-value">NOMINAL</div>
    <div class="telemetry-detail">Bus voltage, battery state-of-charge, power distribution, avionics temperature, current draw</div>
  </div>
</div>

### Ground Station Network

Telemetry is received through a network of ground stations positioned along the flight azimuth. Handoff between stations occurs automatically as the vehicle moves downrange.

| Station | Range (km) | Status |
|---------|-----------|--------|
| PAD-01 | 0 | ACTIVE |
| DOWN-01 | 200 | STANDBY |
| DOWN-02 | 800 | STANDBY |
| DOWN-03 | 2400 | STANDBY |
| TDRS-EAST | GEO | STANDBY |
| TDRS-WEST | GEO | STANDBY |

### Data Rates

- S-band telemetry downlink: 2 Mbps
- C-band tracking beacon: continuous
- Flight termination system: encrypted, redundant
- Voice loop uplink: 16 kbps

### Monitoring Protocol

All telemetry parameters are compared against pre-defined limit sets. Three tiers of limits are defined for each parameter:

- **Green**: nominal operating range
- **Yellow**: approaching limit, requires attention
- **Red**: out-of-limit, immediate action required

Console operators monitor their assigned subsystems and call out any yellow or red conditions to the flight director. The flight director has authority to call a hold or initiate abort procedures based on telemetry indications.

</div>
