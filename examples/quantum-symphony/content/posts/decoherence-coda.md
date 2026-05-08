+++
title = "Third Movement: The Decoherence Coda"
date = "2024-05-22"
description = "How superposition collapses into a single classical reading, and what that collapse looks like through frosted glass."
[taxonomies]
tags = ["decoherence", "measurement", "design"]
+++

## When the Wavefunction Settles

A quantum system in superposition holds every possible outcome simultaneously. The moment it interacts with its environment, that ambiguity collapses. We call this decoherence. It is not a magical event but a statistical one: phase information leaks into the surrounding degrees of freedom until interference between branches becomes undetectable.

In the symphony, decoherence is the resolution. The chord that has been hovering between major and minor finally chooses, and the listener hears only the result.

### Modeling the Collapse

The density matrix of a coherent system has off-diagonal terms representing the superposition. Decoherence drives those terms toward zero.

```python
import numpy as np

def decohere(rho, gamma, dt):
    diag = np.diag(np.diag(rho))
    off = rho - diag
    return diag + off * np.exp(-gamma * dt)
```

After enough time steps, the matrix becomes effectively diagonal. The system has chosen a basis. The branch we did not observe still exists in the joint wavefunction of the universe, but it is no longer accessible to us.

### Translating to the Surface

Frosted glass panels in this theme behave the same way. Sharp highlights bleed across the diffuser until they read as a single soft glow. The original signal is preserved in principle, but the eye cannot reconstruct it from the blurred output. That irrecoverable smearing is the visual analog of decoherence.

> A measured system is not a smaller system. It is a system entangled with the rest of the world, viewed from a vantage point that has lost track of the rest.

We use this property deliberately. Headers sit close to the viewer, sharp and unblurred. Background noise sits far behind the glass, smeared into ambient color. The hierarchy between them is the same hierarchy between observed and unobserved variables in a quantum measurement.
