+++
title = "CV Dazzle: Camouflage Against Machine Vision"
date = "2024-09-08"
description = "Adam Harvey's CV Dazzle project extended Wilkinson's logic into the present: if the observer is an algorithm, what geometry breaks it?"
tags = ["cv-dazzle", "machine-vision", "adversarial-patterns"]
authors = ["The Observer"]
+++

## The Observer Has Changed

Norman Wilkinson's dazzle camouflage worked against a human observer looking through a monocular periscope. The weakness it exploited was specific: a person's difficulty in judging the speed and heading of a patterned object without stereoscopic depth cues, under time pressure, through a small aperture.

That observer is now frequently a machine. Surveillance cameras feed into face-detection pipelines. Autonomous vehicles classify pedestrians. Social media platforms scan faces in uploaded images against recognition databases. The periscope has been replaced by the neural network, and the question Wilkinson posed in 1917 — *what pattern breaks the observer's ability to calculate?* — has been posed again, this time by artists and researchers working at the intersection of fashion, computer vision, and civil liberties.

> "CV Dazzle explores how fashion can be used as camouflage from face-detection technology." — Adam Harvey, 2010

The answer Harvey arrived at looks, on first view, like aggressive avant-garde makeup. On second view, it looks like exactly what it is: **a precise exploitation of how convolutional neural networks locate faces**.

---

## How Face Detection Fails

Modern face detection systems — particularly those based on the Viola-Jones framework dominant in the 2000s, and later CNN-based detectors — depend on identifying a characteristic arrangement of contrasts: the darker regions of the eye sockets relative to the nose bridge, the light plane of the forehead, the overall oval symmetry of the frontal face.

CV Dazzle's countermeasures attack these features directly:

- **High-contrast asymmetric shapes** across the face break the expected oval boundary
- **Geometric blocks crossing the nose bridge** disrupt the key contrast signature the detector uses as a primary feature
- **Hair brought across the forehead** removes the expected light forehead plane
- **Asymmetric color placement** defeats the bilateral-symmetry assumption built into many detectors

The logic is identical to Wilkinson's. You are not trying to make the face invisible. You are trying to make it *unreadable as a face* by the specific mechanism the observer uses to read faces.

### The Training Data Problem

A secondary strategy Harvey identified was more conceptual: modern detectors are trained on datasets of *normal human faces*. They have learned what faces look like. If you present them with something that a human would recognize as a face but that departs sufficiently from the training distribution, the detector fails.

This is a vulnerability inherent to learned systems in a way it is not inherent to human vision. A person looking at a face painted with geometric shapes still recognizes it as a face. The neural network, which has never seen such a face, may not.

`Training distribution != world distribution.` That gap is the attack surface.

---

## The Art History Connection

Harvey is explicit about the Wilkinson connection, and the art historical resonance runs deeper than influence. Dazzle camouflage, Vorticism, op-art, and CV Dazzle are all instances of the same underlying project: the systematic exploitation of a *specific observer's perceptual mechanism* through designed pattern.

What changes across these instances is the observer:

1. **Dazzle (1917)** — human, monocular, periscope-constrained
2. **Op-art (1960s)** — human, binocular, gallery-context, exploiting temporal persistence in the visual cortex
3. **CV Dazzle (2010s)** — algorithmic, trained on specific datasets, exploiting overfitting

Each tradition had to understand *its observer* before it could design against it. Bridget Riley did not design for naval commanders. Norman Wilkinson did not design for gallery visitors. Harvey did not design for human guards — he designed for the cascade classifier.

---

## The Limits and the Stakes

CV Dazzle has limitations that Wilkinson's dazzle did not. A ship painted in bold chevrons was functionally identical to an undazzled ship: it still carried cargo, it still sailed the same route. A person wearing CV Dazzle makeup in a public space performs **conspicuousness** rather than concealment — and conspicuousness attracts human attention even as it defeats algorithmic detection.

This is not purely a design failure. It is also an argument. The person in CV Dazzle is making a visible claim about the surveillance infrastructure they are navigating. The disruptive pattern says: *this system exists, it can be broken, I am breaking it*.

The dazzle ship was not making an argument. It was trying to survive.

---

## What This History Teaches

The consistent thread from 1917 to the present is that **designed disruption is never general**. A pattern that confuses one class of observer has no guaranteed effect on another. Wilkinson's scheme would not have protected against radar. CV Dazzle that defeats Viola-Jones fails against more recent detectors. Each advance in detection technology requires a new analysis of the observer's specific mechanism.

This is, paradoxically, an argument for the continued relevance of artists and designers in these technical domains. The engineer building a detector is not optimized to think like someone trying to break it. The artist — trained in the manipulation of perception, experienced with the ways pattern can suggest and deny meaning simultaneously — is exactly that.

The hull is still out there. The observer keeps changing. The work of making it illegible continues.
