+++
title = "Translucent Typography"
description = "Keeping type legible against shifting nebula backgrounds."
date = "2025-03-05"
tags = ["typography", "legibility"]
+++

Type set against a translucent panel inherits whatever passes through that panel. When the underlying background is uniform, the inheritance is harmless. When the background carries variation, the type can break legibility at certain scroll positions.

The shimmer system handles this through three rules. The first is that body text is never set directly on a translucent panel without an opaque type backplate. The backplate is a one-pixel inset rectangle at thirty-six percent alpha of the panel surface color. It is invisible to the eye but enough to stabilize the type.

The second rule covers font weight. Body weight is fixed at four hundred. We tested three hundred and three-fifty during the early phase and found that both produced legibility issues against bright nebula regions. The four-hundred weight passes against every tested background.

The third rule covers letter spacing. Default letter spacing is increased by one percent for body copy. The shift is small but it improves the reading experience on panels where the backplate is partially obscured by underlying motion. We confirmed the change against three readability tests with a mix of font sizes.

Headlines do not require these rules. They are set at large sizes and high weight, which provides their own resilience against background variation. The body copy is the constraint, because it is set at small sizes and is the surface against which legibility is measured.

The rules live in the typography section of the design system. Each rule includes the test data that justified it, so future contributors can reproduce or challenge the decision.
