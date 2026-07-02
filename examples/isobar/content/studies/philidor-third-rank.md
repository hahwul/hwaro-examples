+++
title = "The Philidor Position: The Third-Rank Barricade"
date = "2025-03-02"
description = "The defending rook holds the sixth rank until the pawn forces the issue, then trades the barricade for a perpetual check."
tags = ["rook-endings", "technique", "philidor"]

[extra]
result = "Draw"
side_to_move = "White to move"
annotation = "A wall only needs to hold until the thing behind it stops moving. Then it becomes a fence, and the rook goes hunting."
board_svg = '''
<svg class="board-svg" viewBox="0 0 340 340" role="img" aria-labelledby="board-philidor" xmlns="http://www.w3.org/2000/svg">
<title id="board-philidor">White king d5, rook h1, pawn e5. Black king e8, rook a6, holding the sixth rank. White to move.</title>
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
<rect class="sq-key" x="172" y="92" width="36" height="36" rx="4"/>
<text class="piece-white" x="150.0" y="151.0">♔</text>
<text class="piece-white" x="310.0" y="311.0">♖</text>
<text class="piece-white" x="190.0" y="151.0">♙</text>
<text class="piece-black" x="190.0" y="31.0">♚</text>
<text class="piece-black" x="30.0" y="111.0">♜</text>
</svg>
'''
+++

If the Lucena position is the winning side's technique, the Philidor position is its mirror: how to draw when you are the one without the pawn. Black's rook sits on a6, patrolling the sixth rank — the third rank counted from Black's own baseline — and for as long as it stays there, White's king cannot cross to shepherd the pawn home. This is a fortress, not a blockade, and the distinction matters: a blockade can be worn down, a fortress cannot.

<!-- more -->

The position holds itself until the pawn actually reaches the barricade. That is the moment the defense has to change shape, and knowing when to change it is the entire study.

```
1. e6    Ra1
2. Kd6   Rd1+
3. Kc6   Rc1+
4. Kb6   Rb1+
```

**1...Ra1**, not a passive shuffle, is the second half of Philidor's idea. The sixth rank has stopped being useful — the pawn no longer needs to cross it, it has crossed already — so the rook abandons the wall and drops behind the king instead, ready to check from whichever side of the board is open. From here White's king can walk anywhere it likes; it will never outrun the checks, because every square that shelters it from one side exposes it to the next.

> *Marginalia — on timing.* Move the rook off the sixth rank one tempo early and you hand White a free move to organize; move it one tempo late and the pawn may cost you the rank you were defending. The switch happens on the push, not before and not after.

What makes Philidor's defense a genuine technique rather than a lucky drawing chance is that it needs almost nothing from the position around it — no particular files, no particular king placement, only the third-rank rook and the discipline to leave it there until the pawn forces the change. Practical players lose this ending far more often to impatience than to any flaw in the method itself.
