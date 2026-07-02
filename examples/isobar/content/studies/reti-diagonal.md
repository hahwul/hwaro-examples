+++
title = "Réti's Study: The King's Long Diagonal"
date = "2026-06-18"
description = "A king too slow to catch one pawn and too far to help its own turns out to be exactly fast enough, walking a diagonal that serves both errands at once."
tags = ["king-and-pawn", "studies", "reti"]

[extra]
result = "Draw"
side_to_move = "White to move and draw"
annotation = "The king does not choose between the two pawns. It walks the seam where both errands are the same errand."
board_svg = '''
<svg class="board-svg" viewBox="0 0 340 340" role="img" aria-labelledby="board-reti" xmlns="http://www.w3.org/2000/svg">
<title id="board-reti">White king h8, pawn c6. Black king a6, pawn h5. White to move and draw.</title>
<rect class="board-frame" x="0" y="0" width="340" height="340" rx="6"/>
<rect class="sq-light" x="10" y="10" width="40" height="40"/>
<text class="board-label" x="14" y="22">8</text>
<rect class="sq-dark" x="50" y="10" width="40" height="40"/>
<rect class="sq-light" x="90" y="10" width="40" height="40"/>
<rect class="sq-dark" x="130" y="10" width="40" height="40"/>
<rect class="sq-light" x="170" y="10" width="40" height="40"/>
<rect class="sq-dark" x="210" y="10" width="40" height="40"/>
<rect class="sq-light" x="250" y="10" width="40" height="40"/>
<rect class="sq-dark" x="290" y="10" width="40" height="40"/>
<rect class="sq-dark" x="10" y="50" width="40" height="40"/>
<text class="board-label" x="14" y="62">7</text>
<rect class="sq-light" x="50" y="50" width="40" height="40"/>
<rect class="sq-dark" x="90" y="50" width="40" height="40"/>
<rect class="sq-light" x="130" y="50" width="40" height="40"/>
<rect class="sq-dark" x="170" y="50" width="40" height="40"/>
<rect class="sq-light" x="210" y="50" width="40" height="40"/>
<rect class="sq-dark" x="250" y="50" width="40" height="40"/>
<rect class="sq-light" x="290" y="50" width="40" height="40"/>
<rect class="sq-light" x="10" y="90" width="40" height="40"/>
<text class="board-label" x="14" y="102">6</text>
<rect class="sq-dark" x="50" y="90" width="40" height="40"/>
<rect class="sq-light" x="90" y="90" width="40" height="40"/>
<rect class="sq-dark" x="130" y="90" width="40" height="40"/>
<rect class="sq-light" x="170" y="90" width="40" height="40"/>
<rect class="sq-dark" x="210" y="90" width="40" height="40"/>
<rect class="sq-light" x="250" y="90" width="40" height="40"/>
<rect class="sq-dark" x="290" y="90" width="40" height="40"/>
<rect class="sq-dark" x="10" y="130" width="40" height="40"/>
<text class="board-label" x="14" y="142">5</text>
<rect class="sq-light" x="50" y="130" width="40" height="40"/>
<rect class="sq-dark" x="90" y="130" width="40" height="40"/>
<rect class="sq-light" x="130" y="130" width="40" height="40"/>
<rect class="sq-dark" x="170" y="130" width="40" height="40"/>
<rect class="sq-light" x="210" y="130" width="40" height="40"/>
<rect class="sq-dark" x="250" y="130" width="40" height="40"/>
<rect class="sq-light" x="290" y="130" width="40" height="40"/>
<rect class="sq-light" x="10" y="170" width="40" height="40"/>
<text class="board-label" x="14" y="182">4</text>
<rect class="sq-dark" x="50" y="170" width="40" height="40"/>
<rect class="sq-light" x="90" y="170" width="40" height="40"/>
<rect class="sq-dark" x="130" y="170" width="40" height="40"/>
<rect class="sq-light" x="170" y="170" width="40" height="40"/>
<rect class="sq-dark" x="210" y="170" width="40" height="40"/>
<rect class="sq-light" x="250" y="170" width="40" height="40"/>
<rect class="sq-dark" x="290" y="170" width="40" height="40"/>
<rect class="sq-dark" x="10" y="210" width="40" height="40"/>
<text class="board-label" x="14" y="222">3</text>
<rect class="sq-light" x="50" y="210" width="40" height="40"/>
<rect class="sq-dark" x="90" y="210" width="40" height="40"/>
<rect class="sq-light" x="130" y="210" width="40" height="40"/>
<rect class="sq-dark" x="170" y="210" width="40" height="40"/>
<rect class="sq-light" x="210" y="210" width="40" height="40"/>
<rect class="sq-dark" x="250" y="210" width="40" height="40"/>
<rect class="sq-light" x="290" y="210" width="40" height="40"/>
<rect class="sq-light" x="10" y="250" width="40" height="40"/>
<text class="board-label" x="14" y="262">2</text>
<rect class="sq-dark" x="50" y="250" width="40" height="40"/>
<rect class="sq-light" x="90" y="250" width="40" height="40"/>
<rect class="sq-dark" x="130" y="250" width="40" height="40"/>
<rect class="sq-light" x="170" y="250" width="40" height="40"/>
<rect class="sq-dark" x="210" y="250" width="40" height="40"/>
<rect class="sq-light" x="250" y="250" width="40" height="40"/>
<rect class="sq-dark" x="290" y="250" width="40" height="40"/>
<rect class="sq-dark" x="10" y="290" width="40" height="40"/>
<text class="board-label" x="13" y="325">a</text>
<text class="board-label" x="14" y="302">1</text>
<rect class="sq-light" x="50" y="290" width="40" height="40"/>
<text class="board-label" x="53" y="325">b</text>
<rect class="sq-dark" x="90" y="290" width="40" height="40"/>
<text class="board-label" x="93" y="325">c</text>
<rect class="sq-light" x="130" y="290" width="40" height="40"/>
<text class="board-label" x="133" y="325">d</text>
<rect class="sq-dark" x="170" y="290" width="40" height="40"/>
<text class="board-label" x="173" y="325">e</text>
<rect class="sq-light" x="210" y="290" width="40" height="40"/>
<text class="board-label" x="213" y="325">f</text>
<rect class="sq-dark" x="250" y="290" width="40" height="40"/>
<text class="board-label" x="253" y="325">g</text>
<rect class="sq-light" x="290" y="290" width="40" height="40"/>
<text class="board-label" x="293" y="325">h</text>
<rect class="sq-key" x="92" y="92" width="36" height="36" rx="4"/>
<text class="piece-white" x="310.0" y="31.0">♔</text>
<text class="piece-white" x="110.0" y="111.0">♙</text>
<text class="piece-black" x="30.0" y="111.0">♚</text>
<text class="piece-black" x="310.0" y="151.0">♟</text>
</svg>
'''
+++

Every so often a study earns its fame by being wrong on first glance. Set a clock on this position and the arithmetic looks settled before you have finished reading it: Black's h-pawn is two moves from queening and White's king is nowhere close enough to catch it; White's own c-pawn needs an escort it cannot possibly receive in time. Richard Réti published this in 1921 and it has been unsettling that arithmetic ever since.

<!-- more -->

The resolution is not a trick of calculation. It is a trick of geometry — the king does not have to choose between catching the black pawn and escorting the white one, because for several moves the two errands share the same road.

```
1. Kg7   h4
2. Kf6   Kb6
3. Ke5   h3
4. Kd6!  h2
5. c7    Kb7
6. Kd7   h1=Q
7. c8=Q+
```

**1. Kg7** does not obviously chase anything — it steps toward the h-pawn's queening square, and also onto the long diagonal that leads back to c6. That double meaning is the entire study: every square the king visits over the next several moves is simultaneously "closer to stopping the pawn" and "closer to supporting my own." **4. Kd6!** is the move that would look like abandoning the chase to anyone tracking squares instead of diagonals, and it is in fact the moment the king locks in both outcomes — near enough to shepherd the c-pawn home, and, had Black tried to run rather than defend, still within the queening pawn's square.

> *Marginalia — on why this is a study and not a game.* No opponent hands you this exact geometry by accident; Réti built it. That is the difference between an endgame technique, which recurring games teach you, and a study, which exists purely to show a technique in its cleanest possible form.

The takeaway generalizes further than king-and-pawn endings. Any time a plan seems to demand choosing between two objectives, it is worth checking whether some path serves both at once — not through cleverness so much as through noticing that "toward A" and "toward B" can, for a few critical squares, describe exactly the same direction.
