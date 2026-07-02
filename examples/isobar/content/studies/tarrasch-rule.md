+++
title = "The Tarrasch Rule in Practice"
date = "2026-01-08"
description = "Rooks belong behind passed pawns — your own to push them, the opponent's to make every advance a step toward capture."
tags = ["rook-endings", "technique", "tarrasch"]

[extra]
result = "White wins"
side_to_move = "White to move"
annotation = "A rook in front of a passed pawn is a doorstop. A rook behind it is a lever. The piece never changes; the leverage does."
board_svg = '''
<svg class="board-svg" viewBox="0 0 340 340" role="img" aria-labelledby="board-tarrasch" xmlns="http://www.w3.org/2000/svg">
<title id="board-tarrasch">White king f3, rook h3, pawn a5. Black king f6, rook d8, blockading in front of the passed pawn. White to move.</title>
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
<rect class="sq-key" x="12" y="292" width="36" height="36" rx="4"/>
<text class="piece-white" x="230.0" y="231.0">♔</text>
<text class="piece-white" x="310.0" y="231.0">♖</text>
<text class="piece-white" x="30.0" y="151.0">♙</text>
<text class="piece-black" x="230.0" y="111.0">♚</text>
<text class="piece-black" x="150.0" y="31.0">♜</text>
</svg>
'''
+++

Siegbert Tarrasch's most quoted line of advice is easy to state and slower to internalize: rooks belong behind passed pawns. Behind your own, so every advance comes with the rook's full support already attached. Behind the opponent's, so every advance drags the pawn further from home and closer to a rook that is watching it the entire way. White's rook sits on h3 here, doing nothing in particular, while the a-pawn runs alone.

<!-- more -->

Black's rook, by contrast, is doing the correct thing in the wrong place — d8 blockades nothing on the queenside, where the actual passed pawn lives. The position rewards whichever side notices the mismatch first.

```
1. Ra3!   Rd1
2. a6     Ke5
3. a7     Kd5
4. a8=Q
```

**1. Ra3** looks slow next to a direct pawn push, but it is the move that decides the game. From behind, the rook supports every step the pawn takes without needing to move again; from in front or beside, it would have to relocate at each advance, losing tempo Black could use to organize a blockade of his own. Once the pawn starts moving with full-time support, nothing short of the enemy king reaching its path can stop it, and Black's king is two ranks too far away.

> *Marginalia — on the exception.* The rule bends when the pawn is already unstoppable without help — then keep the rook active elsewhere. Tarrasch's guidance is a habit for the ninety percent of positions where the pawn still needs an escort, not a law for the ten percent where it doesn't.

The deeper reason the rule works is about squares, not sentiment: a rook behind a pawn never runs out of files to stand on as the pawn advances, while a rook in front is eventually forced to move out of the pawn's way, surrendering the file at the worst possible moment. Learn to see that geometry before the position asks you to, and rook endings stop feeling like arithmetic and start feeling like architecture.
