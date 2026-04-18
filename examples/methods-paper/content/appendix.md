+++
title = "Appendix"
description = "Supplementary materials including software availability, author contributions, funding, and references."
tags = ["paper", "light", "methods", "protocol", "technical"]
template = "page"
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">SUPPLEMENTARY MATERIALS</p>
  <h1 class="paper-section-title">Appendix</h1>
</header>

## Software Availability

The ACAP protocol is implemented as an open-source ImageJ/FIJI macro suite. All source code, validation datasets, and documentation are publicly available:

- **ImageJ macro suite:** ACAP v1.0 (ImageJ 1.54f+, FIJI distribution recommended)
- **Source repository:** GitHub (github.com/okonkwo-lab/acap-protocol)
- **Validation dataset:** 480 annotated fluorescence micrographs (Zenodo, doi:10.5281/zenodo.acap2026)
- **Ground-truth annotations:** Expert-labeled cell centroids in CSV format
- **Flat-field reference images:** Per-platform calibration frames

All software is released under the BSD 3-Clause License. The validation dataset is released under CC BY 4.0.

## Hardware Requirements

The protocol has been validated on the following minimum specifications:

- **CPU:** Intel i5 or Apple M1 equivalent (4 cores minimum)
- **RAM:** 16 GB (32 GB recommended for batch processing)
- **Storage:** 2 GB for software; 50 GB recommended for dataset storage
- **GPU:** Not required (CPU-only processing)
- **OS:** Windows 10/11, macOS 12+, or Ubuntu 20.04+

## CRediT Author Contributions

- **Adaeze Okonkwo:** Conceptualization, Methodology, Software, Writing -- Original Draft, Supervision
- **Kenji Fujimoto:** Methodology, Validation, Software, Formal Analysis
- **Sigrid Lindgren:** Resources, Data Curation, Writing -- Review and Editing
- **Diego Ramirez-Torres:** Investigation, Validation, Visualization
- **Thanh-Hoa Nguyen:** Investigation, Data Curation, Writing -- Review and Editing

## Funding

This work was supported by the Swiss National Science Foundation (grant 205320_200001, to A. Okonkwo), the Japan Society for the Promotion of Science KAKENHI (grant JP26K15020, to K. Fujimoto), and the Swedish Research Council (grant 2025-03190, to S. Lindgren). The funders had no role in study design, data collection, analysis, decision to publish, or manuscript preparation.

## Conflicts of Interest

The authors declare no competing interests. A. Okonkwo serves on the advisory board of the BioImaging North America network (unpaid). No financial relationships with any commercial entity relevant to this work.

## Acknowledgments

The authors thank the ETH Zurich Center for Microscopy and Image Analysis (ScopeM), the University of Tokyo Bio-Imaging Core, the Uppsala BioVis facility, and the UNAM Microscopy Unit for providing access to microscope platforms used in cross-platform validation. We thank Dr. Miriam Schulz for independent verification of the ground-truth annotations.

## References

<ol class="references-list">
  <li>Schindelin J, Arganda-Carreras I, Frise E, et al. Fiji: an open-source platform for biological-image analysis. <em>Nat Methods.</em> 2012;9(7):676-682.</li>
  <li>Otsu N. A threshold selection method from gray-level histograms. <em>IEEE Trans Syst Man Cybern.</em> 1979;9(1):62-66.</li>
  <li>Meyer F. Topographic distance and watershed lines. <em>Signal Process.</em> 1994;38(1):113-125.</li>
  <li>Ljosa V, Sokolnicki KL, Carpenter AE. Annotated high-throughput microscopy image sets for validation. <em>Nat Methods.</em> 2012;9(7):637.</li>
  <li>Caicedo JC, Goodman A, Karber KW, et al. Nucleus segmentation across imaging experiments: the 2018 Data Science Bowl. <em>Nat Methods.</em> 2019;16(12):1247-1253.</li>
  <li>Bankhead P, Loughrey MB, Fernandez JA, et al. QuPath: open source software for digital pathology image analysis. <em>Sci Rep.</em> 2017;7(1):16878.</li>
  <li>Sternberg SR. Biomedical image processing. <em>Computer.</em> 1983;16(1):22-34.</li>
  <li>Falk T, Mai D, Bensch R, et al. U-Net: deep learning for cell counting, detection, and morphometry. <em>Nat Methods.</em> 2019;16(1):67-70.</li>
  <li>Haralick RM, Sternberg SR, Zhuang X. Image analysis using mathematical morphology. <em>IEEE Trans Pattern Anal Mach Intell.</em> 1987;9(4):532-550.</li>
  <li>Soille P. <em>Morphological Image Analysis: Principles and Applications.</em> 2nd ed. Berlin: Springer; 2004.</li>
</ol>
