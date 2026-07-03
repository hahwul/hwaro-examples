+++
title = "Live Shader Battle"
date = "2026-01-22"
description = "Two coders, one blank fragment shader each, forty minutes on stage, and the crowd decides."
weight = 50
[extra]
slot = "SAT 21:00 (main stage)"
limit = "live, from scratch"
deadline = "sign up by Sat 5 Apr, 16:00"
platform = "Bonzomatic · dual projector"
prize = "250 EUR + the belt"
duration = "40 min bracket, live"
+++

The loudest hour of the party. Two coders stand at machines, each with an empty
`main()` and a projector, and build a shader live in front of everyone while a
DJ runs the room. The crowd votes with a meter. This is not about the cleanest
code; it is about the best show.

<!-- more -->

## Format

- **Bonzomatic**, the standard live-coding tool, on identical machines. Both
  screens are projected side by side so the audience watches the code and the
  output at once.
- Single-elimination bracket. Rounds are **forty minutes**. Same starting
  template, same song, no pre-written snippets pasted in.
- The audience meter decides each round. Ties go to whoever the compo host says
  they go to, and that decision is final and probably unfair.

## Warming up

You start from nothing but the uniforms. Have the fundamentals in your fingers
so you are not thinking about syntax under the lights:

```glsl
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
  float d = length(uv) - 0.4 + 0.05 * sin(iTime * 3.0);
  vec3 col = vec3(smoothstep(0.01, 0.0, d));
  out_color = vec4(col, 1.0);
}
```

Know your palette moves, one raymarch loop, and a couple of domain-repeat
tricks cold. Then perform. Talk to the crowd, react to the music, and let the
mistakes ride; a shader that glitches into something beautiful is exactly the
kind of accident this compo exists to reward. Sign up at the desk by 16:00 on
Saturday. Brackets are drawn at 16:30 and the belt goes home with the winner.
