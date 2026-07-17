+++
title = "A staircase proof that the odd numbers make squares"
date = "2025-09-11"
description = "Why 1 + 3 + 5 + 7 + 9 lands exactly on a square, shown with nested gnomons."
tags = ["number", "proof-without-words", "squares"]
[extra]
fig = 4
claim = "The sum of the first n odd numbers equals n squared."
+++

<figure class="fig fig-plate">
<svg viewBox="0 0 300 260" fill="none" role="img" aria-label="Five squares nested at a shared corner; the L-shaped gnomons between them are the odd numbers one, three, five, seven and nine">
<rect class="c-guide" x="50" y="20" width="40" height="40"/>
<rect class="c-guide" x="50" y="20" width="80" height="80"/>
<rect class="c-guide" x="50" y="20" width="120" height="120"/>
<rect class="c-guide" x="50" y="20" width="160" height="160"/>
<rect class="c-line" x="50" y="20" width="200" height="200"/>
<text class="f-label-a" x="70" y="45" text-anchor="middle">1</text>
<text class="f-label-a" x="110" y="85" text-anchor="middle">3</text>
<text class="f-label-a" x="150" y="125" text-anchor="middle">5</text>
<text class="f-label-a" x="190" y="165" text-anchor="middle">7</text>
<text class="f-label-a" x="230" y="205" text-anchor="middle">9</text>
<text class="f-label" x="255" y="236" text-anchor="end">5 &times; 5 = 25</text>
</svg>
<figcaption>Each odd number is a gnomon, the L-shaped strip that grows a k&times;k square into the next size up. Nested at one corner, <b>1 + 3 + 5 + 7 + 9</b> closes into a 5&times;5 square of 25.</figcaption>
</figure>

Line up the odd numbers and something suspicious happens. One is one. One plus three is four. Add five and you have nine, add seven and you have sixteen. Every partial sum is a perfect square, and it never misses.

<!-- more -->

The reason is a shape the Greeks called a gnomon, the L-shaped border you add to a square to make the next square up. Start with a single dot, a one by one square. To turn it into a two by two square, wrap it in an L of three dots along the top and the right. To reach three by three, add an L of five. Each new border is longer than the last by two, because it gains one dot on the top edge and one on the side. So the borders are exactly the odd numbers: 1, then 3, then 5, then 7, and onward.

Stacking the gnomons rebuilds a square one shell at a time. After adding the first n odd numbers you have laid down an n by n square, so their sum is n². In the figure five shells close up into a five by five square of twenty five.

It is a proof you can carry out with coins on a table. Nothing hides in the algebra, because there is no algebra. The squares do the counting themselves.
