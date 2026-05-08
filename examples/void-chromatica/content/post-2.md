+++
title = "Calibrating Neon on a Black Field"
description = "Notes on saturation, contrast, and the perceptual limits of bright accents against deep backgrounds."
date = "2025-02-04"
+++

A bright accent on a near-black field reads as luminous regardless of the underlying hex value. The eye adapts to the dominant tone, and once adapted, anything above middle gray begins to feel emissive. That makes deep backgrounds forgiving, but also dangerous: poorly chosen accents quickly turn into eye strain.

The first rule is to keep saturation off the maximum. A pure cyan at full chroma vibrates against pure black. Pulling chroma down by ten to fifteen percent removes the buzz without dimming the color. Most CSS accent palettes ship at full saturation by default, so this is the first place to audit.

The second rule is to keep more than one bright color on the page. A single accent in isolation looks like an alert. Two or three accents, used with consistent intent, register as a system. Cyan for primary actions, magenta for emphasis, soft amber for warnings reads as designed. Cyan alone reads as broken.

The third rule concerns gradients. Long gradients between saturated accents on dark fields produce muddy midpoints. The transition through gray is unavoidable in RGB space. If a gradient is needed, keep the endpoints close in hue, or use solid blocks separated by negative space.

Background luminance also matters. True black at zero luminance is harsh under most viewing conditions. A near-black around five percent luminance preserves the depth while reducing the contrast ratio just enough to keep accents from punching holes in the layout. The Void Chromatica base sits there deliberately.
