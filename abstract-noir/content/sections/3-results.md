+++
title = "3. Results"
description = "Behavioural directed forgetting effect, whole-brain fMRI contrasts, and psychophysiological interaction analysis."
weight = 3
template = "post"
tags = ["results", "fmri", "connectivity"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## Behavioural Results

The directed forgetting effect was significant for both valence conditions:

| Measure | Remember Items | Forget Items | DF Effect | p |
|---|---|---|---|---|
| Recognition (neutral) | 81.0% | 35.5% | 45.5% | < .001 |
| Recognition (negative) | 87.0% | 56.5% | 30.5% | < .001 |
| Reaction time (neutral) | 842ms | 1,124ms | 282ms | < .001 |
| Reaction time (negative) | 798ms | 1,048ms | 250ms | < .001 |

The DF effect was significantly larger for neutral than negative items (interaction: F(1,47) = 18.4, p < .001, partial eta-squared = 0.28), confirming that emotional content resists directed forgetting.

## Whole-Brain Contrasts

### Forget > Remember (cue phase)

The Forget > Remember contrast revealed significant clusters (p < .05, FWE-corrected) in:

| Region | Hemisphere | Peak MNI (x,y,z) | Cluster Size | Peak t |
|---|---|---|---|---|
| dlPFC (BA 9/46) | Right | 42, 38, 28 | 428 | 6.82 |
| ACC (BA 32) | Bilateral | 4, 28, 34 | 312 | 5.94 |
| Inferior frontal gyrus | Right | 48, 18, 8 | 186 | 5.21 |
| Supramarginal gyrus | Right | 56, -42, 36 | 142 | 4.88 |

### Remember > Forget (cue phase)

| Region | Hemisphere | Peak MNI (x,y,z) | Cluster Size | Peak t |
|---|---|---|---|---|
| Hippocampus | Bilateral | -28, -16, -18 | 384 | 7.14 |
| Parahippocampal gyrus | Left | -32, -34, -12 | 248 | 6.28 |
| vmPFC (BA 10/11) | Medial | 2, 48, -8 | 198 | 5.64 |
| Posterior cingulate | Medial | -4, -52, 28 | 164 | 5.12 |

## PPI Analysis: dlPFC-Hippocampal Connectivity

The critical PPI analysis revealed that right dlPFC showed **negative functional connectivity** with bilateral hippocampus during successful forget trials (beta = -0.34, t(47) = -4.82, p < .001), but **positive connectivity** during successful remember trials (beta = 0.21, t(47) = 3.14, p = .003).

This inverse connectivity pattern was moderated by emotional valence: the negative PPI coupling was weaker for negative items (beta = -0.18, t(47) = -2.64, p = .011) than neutral items (beta = -0.48, t(47) = -5.91, p < .001), suggesting that amygdala engagement partially buffers hippocampal traces from prefrontal suppression.
