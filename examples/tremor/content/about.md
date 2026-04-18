+++
title = "About"
tags = ["about", "observatory"]
categories = ["pages"]
+++

<div class="content-page">

# About Tremor Observatory

Tremor is a seismic monitoring and data visualization platform operated as a demonstration of real-time geophysical data presentation. The dashboard provides simulated earthquake detection data, waveform analysis, and intensity classification for educational and design exploration purposes.

## Mission

The goal of this project is to demonstrate how seismic observatory data can be presented in a clear, accessible, and visually compelling format. Tremor draws inspiration from real-world seismological monitoring systems used by geological survey organizations around the world.

## Monitoring Capabilities

<div class="feature-grid">
  <div class="feature-item">
    <h3>Wave Detection</h3>
    <p>Broadband seismometer data processing with P-wave and S-wave arrival time analysis across multiple channels.</p>
  </div>
  <div class="feature-item">
    <h3>Magnitude Estimation</h3>
    <p>Local magnitude (ML) and moment magnitude (Mw) calculations derived from calibrated sensor arrays.</p>
  </div>
  <div class="feature-item">
    <h3>Depth Analysis</h3>
    <p>Hypocentral depth determination using multi-station triangulation and velocity model inversion.</p>
  </div>
  <div class="feature-item">
    <h3>Intensity Mapping</h3>
    <p>Modified Mercalli Intensity scale classification with geographic distribution and impact estimation.</p>
  </div>
</div>

## Station Network

The Tremor demonstration network simulates 12 broadband seismometer stations distributed across the southeastern Korean Peninsula. Each station operates a three-component sensor suite (BHZ, BHN, BHE) sampling at 40 Hz with continuous telemetry to the central processing hub.

Station identifiers follow the format TRM-XX where XX represents the sequential station number. The primary reference station, TRM-01, is located at the network centroid and serves as the timing reference for all relative measurements.

## Data Standards

All seismic data follows international standards:

- **Waveform format**: miniSEED (FDSN standard)
- **Metadata**: StationXML with full response information
- **Event catalogs**: QuakeML with origin, magnitude, and focal mechanism parameters
- **Time reference**: GPS-synchronized UTC with sub-millisecond precision

## Technology

This site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast and flexible static site generator. The seismic visualizations are rendered entirely with CSS animations -- no JavaScript charting libraries are required for the waveform displays.

</div>
