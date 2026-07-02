+++
title = "Vigenère's Long Shadow"
date = "2025-03-04"
description = "For three hundred years it was called le chiffre indéchiffrable. We explain how repeating a keyword across the alphabet defeated frequency analysis — and how Friedrich Kasiski quietly undid it."
tags = ["classical", "polyalphabetic", "cryptanalysis"]

[extra]
block = "0x02"
duration = "44 min"
guest = "Tomasz Rein, cipher collector"
cipher = "Vigenère, keyword-driven polyalphabetic"
preview = "Four centuries of mathematicians called it unbreakable. Then Kasiski counted the gaps between repeats and the whole cathedral came down."
preview_rot13 = "Sbhe praghevrf bs zngurzngvpvnaf pnyyrq vg haoernxnoyr. Gura Xnfvfxv pbhagrq gur tncf orgjrra ercrngf naq gur jubyr pngurqeny pnzr qbja."
+++

The fix for a Caesar shift is embarrassingly simple: don't use just one shift. Pick a keyword, repeat it under your message letter by letter, and use each letter of the keyword to choose a different shift for that position. "LEMON" against "ATTACKATDAWN" gives you a different Caesar cipher for nearly every letter, and single-letter frequency analysis stops working because "E" no longer maps to one ciphertext letter — it maps to several, depending on where it falls under the repeating key.

<!-- more -->

## Why it earned the name

Blaise de Vigenère described the technique in 1586, though — as we get into on the show — a stronger claim to invention probably belongs to Giovan Battista Bellaso a few decades earlier. Either way, the cipher spent close to three hundred years with a reputation as unbreakable, showing up in the Confederacy's field communications and countless amateur cryptographers' personal diaries.

## Kasiski's insight

The break, when it came in 1863, was almost anticlimactic. Friedrich Kasiski noticed that if the same plaintext fragment happened to line up with the same part of the repeating key more than once, it produced the same ciphertext fragment twice. Measure the distance between repeated ciphertext sequences, factor those distances, and the common factors point straight at the key length:

```python
def find_repeats(ciphertext: str, min_len: int = 3) -> dict[str, list[int]]:
    positions: dict[str, list[int]] = {}
    for i in range(len(ciphertext) - min_len):
        chunk = ciphertext[i:i + min_len]
        positions.setdefault(chunk, []).append(i)
    return {k: v for k, v in positions.items() if len(v) > 1}
```

Once you know the key length, the polyalphabetic cipher decomposes into that many independent Caesar shifts — and Caesar shifts fall to Al-Kindi's four-hundred-year-old technique from our first episode.

## Cited in this episode

- Friedrich Kasiski, *Die Geheimschriften und die Dechiffrir-Kunst* (1863)
- David Kahn, *The Codebreakers*, chapter on the "indecipherable cipher"
- Charles Babbage's earlier, unpublished break of Vigenère in the 1850s

We come back to Kasiski's counting trick in [block 0x04](/episodes/enigma-wiring/), applied to a machine instead of a keyword.
