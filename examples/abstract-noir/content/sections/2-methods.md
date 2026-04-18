+++
title = "2. Methods"
description = "Participants, experimental paradigm, fMRI acquisition parameters, and analysis pipeline."
weight = 2
template = "post"
tags = ["methods", "fmri", "paradigm"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## Participants

48 healthy right-handed adults (24 female, 24 male; age range 22-35 years, mean 27.4, SD 3.8) were recruited from the CNRS participant pool. Exclusion criteria included neurological or psychiatric history, psychoactive medication use, MRI contraindications, and prior participation in directed forgetting experiments.

## Stimuli

160 word-image pairs were constructed from the International Affective Picture System (IAPS) and a matched word database:

| Category | Count | Valence (mean) | Arousal (mean) |
|---|---|---|---|
| Neutral | 80 | 5.1 (SD 0.4) | 3.2 (SD 0.8) |
| Negative | 80 | 2.3 (SD 0.6) | 6.1 (SD 0.9) |

Words were concrete nouns (4-8 letters, frequency-matched) paired with semantically related images. Assignment of stimuli to Remember/Forget conditions was counterbalanced across participants.

## fMRI Acquisition

Imaging was performed on a Siemens Magnetom Prisma 3T scanner with a 64-channel head coil:

- **Functional:** T2*-weighted EPI, TR = 800ms, TE = 30ms, flip angle = 52, multiband factor = 8, 2mm isotropic voxels, 72 slices, whole-brain coverage
- **Structural:** T1-weighted MPRAGE, 0.8mm isotropic, TR = 2400ms, TE = 2.2ms, TI = 1000ms
- **Fieldmap:** Dual-echo gradient echo for B0 distortion correction

## Analysis Pipeline

Preprocessing was performed using fMRIPrep 23.2.0 with default parameters. First-level analysis used SPM12 with the following regressors:

1. Remember-cue onset (parametrically modulated by subsequent memory)
2. Forget-cue onset (parametrically modulated by subsequent forgetting)
3. Encoding onset
4. Motor response
5. Six motion parameters and their temporal derivatives

Psychophysiological interaction (PPI) analysis used the right dlPFC as seed region (6mm sphere at peak activation) to assess task-dependent connectivity with hippocampus during forget vs. remember trials.
