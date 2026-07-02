+++
title = "The Lucena Position: Building the Bridge"
date = "2025-01-14"
description = "A single rook move on the fourth rank turns a losing race against checks into a forced promotion."
tags = ["rook-endings", "technique", "lucena"]

[extra]
result = "White wins"
side_to_move = "White to move"
annotation = "The bridge is not a rescue. It is a toll paid once, in tempo, so the pawn can walk the rest of the way alone."
board_svg = '''
<svg class="board-svg" viewBox="0 0 340 340" role="img" aria-labelledby="board-lucena" xmlns="http://www.w3.org/2000/svg">
<title id="board-lucena">White king e4, rook d1, pawn e7. Black king g7, rook a4, checking along the fourth rank. White to move.</title>
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
<rect class="sq-key" x="132" y="172" width="36" height="36" rx="4"/>
<text class="piece-white" x="190.0" y="191.0">♔</text>
<text class="piece-white" x="150.0" y="311.0">♖</text>
<text class="piece-white" x="190.0" y="71.0">♙</text>
<text class="piece-black" x="270.0" y="71.0">♚</text>
<text class="piece-black" x="30.0" y="191.0">♜</text>
</svg>
'''
+++

White's pawn stands one square from queening. Black's king has been herded to g7, a full two moves from the promotion square — too far to matter. The only piece still fighting is the rook on a4, and it has just given check along the fourth rank. This is the position every rook-and-pawn player eventually has to solve, and it has a name: the Lucena position, first written down centuries before anyone called endgame study a discipline.

<!-- more -->

The naive move loses the thread. Step the king off the fourth rank and Black's rook simply follows it, rank by rank, forever one square out of reach — a stalemate of technique that never quite becomes a stalemate on the board, just a draw by repetition of checks. The winning idea is not to run. It is to interpose.

```
1. Rd4!    Ra8
2. e8=Q
```

**Rd4** is the whole study. The rook does not block on b4 or c4, where it would sit within a rook's-length of the checking piece and simply be captured. It goes to d4 — adjacent to its own king, three files clear of Black's rook — and in doing so builds what generations of annotators have called a bridge: a shelter on the checking rank itself, immune to capture and immune to further checks along that rank.

> *Marginalia — on the name.* Writers reach for "bridge" because the rook does not block a single check, it closes the whole rank permanently. Once it is built, nothing on that road reaches the king again. Black's rook has nowhere useful left to stand; **1...Ra8** is essentially a resignation of the checking plan, and **2. e8=Q** ends the technical argument outright.

The lesson generalizes past this exact diagram. Any time your king is being run off a rank by a lone rook and you have a rook of your own free to interpose, ask first whether it can land *next to the king* rather than merely *between the two rooks*. Distance from the enemy rook is what keeps the bridge from being captured. Get that detail wrong and the whole technique collapses into the position you were trying to avoid.
