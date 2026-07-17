+++
title = "The square that hides the golden ratio"
date = "2025-06-20"
description = "One midpoint, one compass swing, and a square becomes a golden rectangle."
tags = ["golden-ratio", "squares", "constructions"]
[extra]
fig = 3
claim = "Swinging the compass from a side's midpoint to the far corner extends a square into a golden rectangle."
+++

<figure class="fig fig-plate">
<svg viewBox="0 0 420 260" fill="none" role="img" aria-label="A square with midpoint M on its base; an arc from M through the far corner D meets the extended base at E, forming a golden rectangle">
<line class="c-guide" x1="260" y1="20" x2="384" y2="20"/>
<line class="c-guide" x1="384" y1="20" x2="384" y2="220"/>
<line class="c-guide" x1="260" y1="220" x2="384" y2="220" stroke-dasharray="5 6"/>
<path class="c-guide" d="M260 20 A223.6 223.6 0 0 1 384 220"/>
<line class="c-guide" x1="160" y1="220" x2="260" y2="20" stroke-dasharray="4 5"/>
<line class="c-line" x1="60" y1="20" x2="260" y2="20"/>
<line class="c-line" x1="260" y1="20" x2="260" y2="220"/>
<line class="c-line" x1="60" y1="220" x2="260" y2="220"/>
<line class="c-line" x1="60" y1="20" x2="60" y2="220"/>
<circle class="f-pt" cx="60" cy="20" r="4"/>
<circle class="f-pt" cx="260" cy="20" r="4"/>
<circle class="f-pt" cx="60" cy="220" r="4"/>
<circle class="f-pt" cx="260" cy="220" r="4"/>
<circle class="f-pt" cx="160" cy="220" r="4"/>
<circle class="f-pt-h" cx="384" cy="220" r="4.4"/>
<text class="f-label" x="50" y="16" text-anchor="middle">A</text>
<text class="f-label" x="270" y="16" text-anchor="middle">D</text>
<text class="f-label" x="50" y="234" text-anchor="middle">B</text>
<text class="f-label" x="258" y="236" text-anchor="middle">C</text>
<text class="f-label" x="160" y="236" text-anchor="middle">M</text>
<text class="f-label-a" x="392" y="236" text-anchor="middle">E</text>
</svg>
<figcaption>Start with square <b>ABCD</b>. Mark the midpoint <b>M</b> of the base, open the compass from <b>M</b> to the far top corner <b>D</b>, and swing it down to the extended base at <b>E</b>. The rectangle from <b>B</b> to <b>E</b> is golden.</figcaption>
</figure>

The golden ratio has a reputation for turning up mystically in seashells and paintings. Most of that is wishful. What is true, and prettier than the myths, is that it drops straight out of a square with one honest compass swing.

<!-- more -->

Take a square and call its side one unit. Mark M, the midpoint of the base, so BM is one half. Look at the segment MD from that midpoint to the opposite top corner. It is the hypotenuse of a right triangle with legs one half and one, so its length is the square root of one quarter plus one, which is the square root of five over two.

Now open the compass to exactly that length, MD, and swing it down until it lands on the base line extended, at the point E. Because the compass preserves length, ME equals MD, which is the square root of five over two. The whole base BE is therefore BM plus ME, one half plus the square root of five over two, which is the square root of five plus one, all over two. That number is the golden ratio, usually written φ.

So the rectangle standing on BE, one unit tall and φ units wide, is a golden rectangle. No mysticism entered the argument. Just a midpoint, the Pythagorean theorem, and a compass that refuses to change its mind about a length.
