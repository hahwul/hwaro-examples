+++
title = "The Vančura Position: Drawing from the Side"
date = "2025-05-20"
description = "A pawn on the sixth rank looks decisive until the defending rook attacks it from the flank instead of blocking in front of it."
tags = ["rook-endings", "technique", "vancura"]

[extra]
result = "Draw"
side_to_move = "White to move"
annotation = "The rook that stands in front of the pawn is playing the attacker's game. The rook that stands beside it is playing its own."
board_svg = '''
<svg class="board-svg" viewBox="0 0 340 340" role="img" aria-labelledby="board-vancura" xmlns="http://www.w3.org/2000/svg">
<title id="board-vancura">White king e5, rook b1, pawn g6. Black king h8, rook a6, attacking the pawn from the side. White to move.</title>
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
<rect class="sq-key" x="252" y="92" width="36" height="36" rx="4"/>
<text class="piece-white" x="190.0" y="151.0">♔</text>
<text class="piece-white" x="70.0" y="311.0">♖</text>
<text class="piece-white" x="270.0" y="111.0">♙</text>
<text class="piece-black" x="310.0" y="31.0">♚</text>
<text class="piece-black" x="30.0" y="111.0">♜</text>
</svg>
'''
+++

By the textbook rule of thumb, a pawn on the sixth rank supported by its king should be winning against a lone rook. Jaroslav Vančura found the exception in 1924, and it is one of the few named positions in this genre that still surprises strong players when they meet it for the first time. Black's rook is not blocking the pawn from in front, and it is not checking from behind. It is doing something that looks almost careless: sitting on the sixth rank itself, on the far side of the board, attacking the pawn along the rank while staying just out of the king's reach.

<!-- more -->

The defense works because it gives Black two threats that White cannot answer with one move. The rook simultaneously eyes the pawn and keeps a checking distance from the king, so any attempt to shepherd the pawn forward runs straight into a fork of ideas.

```
1. Rb6    Rxb6
2. ... (pawn falls, drawn rook ending)
1. g7?!   Rg6+!
2. Kf5    Rxg7
```

If White tries to shield the pawn with **Rb6**, the trade **Rxb6** simply removes the defender and the pawn is lost outright — a rook and pawn cannot hold the extra pawn once its only protection is gone. Pushing instead, **g7**, meets **Rg6+**, and after the king moves off the file the rook scoops the pawn regardless. There is no square where White's rook can both defend the pawn and stay safe from the check.

> *Marginalia — on which pawns qualify.* The technique depends on the pawn not being a rook pawn. On the a- or h-file, there is no "side" to attack from — the board runs out — and the defense fails outright. Vančura only rescues the six central files.

The instructive habit to take from this position is a suspicion of the instinct to block. A rook planted directly in a pawn's path feels safe and is often the losing move; a rook working the pawn from an open rank, with an escape route, is doing two jobs with one piece. That trade-off — coverage versus safety — recurs throughout the whole literature of rook endings.
