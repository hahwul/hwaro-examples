+++
title = "4. Western Blot Analysis"
description = "Protein transfer, primary and secondary antibody incubation, ECL detection, and densitometric quantification of phospho-Rb levels."
weight = 4
template = "post"
tags = ["laboratory", "western-blot", "immunodetection"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 Protein transfer

Proteins were transferred from SDS-PAGE gels to PVDF membranes (0.45 um pore size, Immobilon-P) using the Bio-Rad wet transfer system. Transfer was performed in Tris-glycine transfer buffer containing 20 pct methanol at 100 V for 90 minutes at 4 C. Successful transfer was confirmed by Ponceau S staining of the membrane.

## 4.2 Blocking and primary antibody

Membranes were blocked in 5 pct BSA in TBS-T (20 mM Tris pH 7.4, 150 mM NaCl, 0.1 pct Tween-20) for 1 hour at room temperature. Primary antibodies were diluted in 5 pct BSA in TBS-T and incubated overnight at 4 C with gentle rocking:

- **Anti-phospho-Rb (Ser780):** Cell Signaling Technology #9307, rabbit monoclonal, 1:1000
- **Anti-phospho-Rb (Ser795):** Cell Signaling Technology #9301, rabbit polyclonal, 1:1000
- **Anti-Rb (total):** Cell Signaling Technology #9309, mouse monoclonal, 1:2000
- **Anti-beta-actin:** Sigma-Aldrich #A5316, mouse monoclonal, 1:5000

## 4.3 Secondary antibody and detection

After three 10-minute washes in TBS-T, membranes were incubated with HRP-conjugated secondary antibodies (1:5000, anti-rabbit or anti-mouse IgG, Cell Signaling Technology) for 1 hour at room temperature. Detection was performed using Pierce ECL Western Blotting Substrate. Images were acquired on a Bio-Rad ChemiDoc MP system with automatic exposure optimisation.

## 4.4 Densitometric quantification

Band intensities were quantified using ImageJ (NIH, version 1.54). Background was subtracted using the rolling-ball method (radius = 50 pixels). Each phospho-Rb signal was normalised to the corresponding beta-actin band in the same lane. Values were then expressed as a fraction of the DMSO control lane.

For dose-response curves, normalised intensities were plotted against log-concentration and fitted with a four-parameter logistic model (Hill equation) using GraphPad Prism 10. IC50 values and Hill slopes were extracted from the fitted curves.

## 4.5 Stripping and reprobing

For membranes probed with phospho-specific antibodies, stripping was performed with Restore Western Blot Stripping Buffer (Thermo Fisher) for 15 minutes at room temperature, followed by re-blocking and reprobing with total-Rb or beta-actin antibodies. Effective stripping was confirmed by the absence of signal after ECL exposure prior to reprobing.
