+++
title = "Short-Side Defense: Checking Distance"
date = "2025-09-10"
description = "When the third-rank fortress is unavailable, the defending king retreats to the short side so its rook can check from the longest distance the board allows."
tags = ["rook-endings", "technique", "defense"]

[extra]
result = "Draw"
side_to_move = "White to move"
annotation = "Give up the side with more squares. Keep the side with more air. The rook only needs room to breathe, not room to hide."
board_svg = '''
<svg class="board-svg" viewBox="0 0 340 340" role="img" aria-labelledby="board-shortside" xmlns="http://www.w3.org/2000/svg">
<title id="board-shortside">White king d6, rook a1, pawn c6. Black king b8 on the short side, rook h6 checking from the long side. White to move.</title>
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
<rect class="sq-key" x="52" y="12" width="36" height="36" rx="4"/>
<text class="piece-white" x="150.0" y="111.0">♔</text>
<text class="piece-white" x="30.0" y="311.0">♖</text>
<text class="piece-white" x="110.0" y="111.0">♙</text>
<text class="piece-black" x="70.0" y="31.0">♚</text>
<text class="piece-black" x="310.0" y="111.0">♜</text>
</svg>
'''
+++

Not every rook ending offers the defender a tidy Philidor fortress — sometimes the attacking king has already crossed the third rank before the defense can set up, and the position in front of you is what you actually have to hold, not what you wish you had. This is the second line of defense every rook-ending player needs, and it depends on a single piece of geography: which side of the pawn has fewer files.

<!-- more -->

The c-pawn splits the board unevenly — two files to the queenside (a, b), five to the kingside (d through h). Black's king has gone to the short side, tucked at b8, conceding almost the entire board. That concession is deliberate.

```
1. Kc7?   Rh7+
2. Kb6    Rh6+
3. Kb5    Rh5+
```

The point of sending the king to the short side is that it frees the long side entirely for the rook, which checks from as far away as the board allows — from h-file distance rather than d-file distance. White's king cannot approach to shelter the checks because every square close enough to block one check is still a full rank or file short of blocking the next. **1. Kc7 Rh7+** already shows the shape: the king cannot step toward the rook without losing the pawn to a fork of ideas, and it cannot step toward the corner without running out of squares.

> *Marginalia — on the tradeoff.* Short-side defense is a weaker fortress than Philidor's — it depends on exact king placement and the pawn's file, and gets harder to hold the closer the pawn sits to the center, where "short" stops being short. Reach for it only when the third rank is already lost.

Practical players sometimes discover this defense by accident, retreating their king toward the nearest edge out of simple caution, and are relieved to learn afterward that instinct happened to be correct. It is worth knowing on purpose: the short side is not a hiding place, it is where the rook's checking distance is longest.
