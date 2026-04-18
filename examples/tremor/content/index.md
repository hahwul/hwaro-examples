+++
title = "Seismic Monitoring Dashboard"
tags = ["dashboard", "seismic", "monitoring"]
+++

<div class="hero">
  <h1 class="tremor-text">Seismic Monitoring Dashboard</h1>
  <p class="hero-subtitle">Real-time earthquake detection and wave analysis</p>
  <div class="hero-status">
    <span class="status-dot status-active"></span>
    Station TRM-01 Online -- Last sync: 2026-04-03T08:42:17Z
  </div>
</div>

## Current Readings

<div class="dashboard-grid">
  <div class="card">
    <div class="card-label">Latest Magnitude</div>
    <div class="card-value val-red">4.7</div>
    <div class="card-sub">Richter Scale (ML)</div>
  </div>
  <div class="card">
    <div class="card-label">Focal Depth</div>
    <div class="card-value val-yellow">12.3 km</div>
    <div class="card-sub">Below sea level</div>
  </div>
  <div class="card">
    <div class="card-label">Epicenter</div>
    <div class="card-value val-brown">36.02N</div>
    <div class="card-sub">129.87E -- SE Coast Region</div>
  </div>
  <div class="card">
    <div class="card-label">Station Status</div>
    <div class="card-value val-green">OK</div>
    <div class="card-sub">All 12 sensors active</div>
  </div>
</div>

## Live Seismograph -- Channel BHZ

<div class="seismograph">
  <div class="seismograph-title">Broadband Vertical Component -- 40 Hz Sampling</div>
  <div class="seismograph-wave">
    <div class="seismograph-scan"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
  </div>
  <div class="seismograph-label">
    <span>-20s</span>
    <span>-15s</span>
    <span>-10s</span>
    <span>-5s</span>
    <span>NOW</span>
  </div>
</div>

<div class="warning-banner">
  <span class="warning-banner-icon">[!]</span>
  <span>ADVISORY: Elevated seismic activity detected in sector 7-B. Monitoring stations on heightened alert.</span>
</div>

## Recent Seismic Events

<div class="activity-log">
  <div class="activity-entry">
    <div class="activity-mag mag-severe">4.7</div>
    <div class="activity-details">
      <div class="activity-location">Gyeongju Offshore Basin</div>
      <div class="activity-meta">Depth: 12.3 km | Intensity: V (Moderate-Strong)</div>
    </div>
    <div class="activity-time">08:41 UTC</div>
  </div>
  <div class="activity-entry">
    <div class="activity-mag mag-moderate">3.2</div>
    <div class="activity-details">
      <div class="activity-location">Pohang Subsurface Fault</div>
      <div class="activity-meta">Depth: 8.1 km | Intensity: III (Weak)</div>
    </div>
    <div class="activity-time">06:17 UTC</div>
  </div>
  <div class="activity-entry">
    <div class="activity-mag mag-low">1.8</div>
    <div class="activity-details">
      <div class="activity-location">Ulsan Metropolitan Periphery</div>
      <div class="activity-meta">Depth: 5.4 km | Intensity: I (Micro)</div>
    </div>
    <div class="activity-time">03:52 UTC</div>
  </div>
  <div class="activity-entry">
    <div class="activity-mag mag-high">4.1</div>
    <div class="activity-details">
      <div class="activity-location">East Sea Continental Shelf</div>
      <div class="activity-meta">Depth: 22.7 km | Intensity: IV (Light-Moderate)</div>
    </div>
    <div class="activity-time">01:09 UTC</div>
  </div>
  <div class="activity-entry">
    <div class="activity-mag mag-moderate">2.5</div>
    <div class="activity-details">
      <div class="activity-location">Yangsan Fault Zone</div>
      <div class="activity-meta">Depth: 14.0 km | Intensity: II (Minor)</div>
    </div>
    <div class="activity-time">Yesterday 22:33 UTC</div>
  </div>
</div>

## Warning Level Classification

<div class="intensity-panel">
  <div class="intensity-panel-title">Earthquake Intensity Scale</div>
  <div class="intensity-row">
    <span class="intensity-dot level-low"></span>
    <span class="intensity-label">Low</span>
    <span class="intensity-range">M 0.0 -- 2.9</span>
    <span class="intensity-desc">Micro to minor. Rarely felt by people.</span>
  </div>
  <div class="intensity-row">
    <span class="intensity-dot level-moderate"></span>
    <span class="intensity-label">Moderate</span>
    <span class="intensity-range">M 3.0 -- 4.4</span>
    <span class="intensity-desc">Noticeable shaking. Minor damage possible.</span>
  </div>
  <div class="intensity-row">
    <span class="intensity-dot level-high"></span>
    <span class="intensity-label">High</span>
    <span class="intensity-range">M 4.5 -- 5.9</span>
    <span class="intensity-desc">Significant shaking. Moderate structural damage.</span>
  </div>
  <div class="intensity-row">
    <span class="intensity-dot level-severe"></span>
    <span class="intensity-label">Severe</span>
    <span class="intensity-range">M 6.0+</span>
    <span class="intensity-desc">Violent shaking. Major damage. Immediate response.</span>
  </div>
</div>

## System Overview

<div class="dashboard-grid">
  <div class="card">
    <div class="card-label">Events (24h)</div>
    <div class="card-value">37</div>
    <div class="card-sub">+8 from previous day</div>
  </div>
  <div class="card">
    <div class="card-label">Active Sensors</div>
    <div class="card-value val-green">12/12</div>
    <div class="card-sub">All stations reporting</div>
  </div>
  <div class="card">
    <div class="card-label">Avg Depth</div>
    <div class="card-value">14.2 km</div>
    <div class="card-sub">Crustal layer activity</div>
  </div>
  <div class="card">
    <div class="card-label">P-Wave Velocity</div>
    <div class="card-value val-yellow">6.1 km/s</div>
    <div class="card-sub">Upper mantle estimate</div>
  </div>
</div>
