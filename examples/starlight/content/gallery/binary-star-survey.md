+++
title = "Binary Star Survey"
date = "2023-12-08"
description = "Photometric monitoring of eclipsing binary systems across the Kepler field."
tags = ["photometry", "binary", "observation"]
+++

The survey targets short-period eclipsing binaries with orbital separations under 0.05 astronomical units. Each system contributes a light curve assembled from continuous photometric monitoring across multiple observing runs at the campus observatory.

Detector calibration follows a standard sequence. Bias frames are taken at the start of each session, followed by a series of dark frames matched to the science exposure times. Sky flats acquired at twilight remove pixel-to-pixel sensitivity variations. The reduction pipeline applies these calibrations before extracting differential photometry against three nearby comparison stars selected for stability over previous nights.

### Observing Cadence

Targets are revisited every 90 seconds during predicted primary eclipses. This cadence resolves the ingress and egress of contact systems whose total eclipse duration runs as short as fifteen minutes. Outside of eclipse windows, the cadence relaxes to one frame every five minutes to extend coverage of out-of-eclipse modulation.

### Modeling

The fitting routine uses the PHOEBE library to derive mass ratios, inclinations, and surface temperatures. Initial parameters come from the Kepler eclipsing binary catalog. Markov chain Monte Carlo sampling explores the posterior distribution and reports uncertainties for each derived quantity.

```python
import phoebe
b = phoebe.default_binary()
b.set_value('period@orbit', 0.41)
b.set_value('q', 0.62)
b.set_value('incl', 87.4)
b.run_compute(model='preliminary')
```

Out-of-eclipse residuals reveal additional structure in roughly a fifth of the sample. Most cases trace back to spot modulation on one component, identifiable by phase drift over consecutive nights. A smaller fraction shows pulsations consistent with delta Scuti behavior, raising the prospect of asteroseismic constraints on stellar interiors. Follow-up spectroscopy is scheduled for the brightest systems.
