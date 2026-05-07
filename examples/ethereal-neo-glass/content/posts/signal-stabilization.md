+++
title = "Signal Stabilization"
description = "Holding the neo-glass aesthetic across viewport changes."
date = 2024-05-15
+++

The transmission stabilized in three passes. The first pass corrected the backdrop blur, which was clamping at small viewports and producing a flat surface on mobile. The second pass corrected the border luminance, which had been calculated from a fixed reference rather than the live background. The third pass restored the inner highlight, which had been dropped in a previous refactor.

Backdrop blur now scales with viewport width. Below 480 pixels, the radius drops from twenty to twelve. The visual effect remains consistent because the surrounding type also reduces in size, so the perceived ratio between blur and content stays balanced. We tested this against six device sizes before committing.

Border luminance is now derived from the underlying surface at runtime. A small JavaScript module samples the area behind each glass panel on resize and calculates the appropriate border alpha. The default is twenty-eight percent. Bright backgrounds drop to eighteen. Dark backgrounds rise to thirty-eight. The transitions are debounced at 120 milliseconds to avoid flicker.

The inner highlight is a one-pixel inset on the top edge of every glass panel. It uses a soft white at eight percent alpha. Without it, panels lose their dimensional read on flat backgrounds. With it, the surface looks lifted by a consistent amount regardless of the surrounding context. We restored it after a quarter of complaints about flatness.

The void is no longer indistinguishable from the foreground. The panels hold their position. The signal is clean.
