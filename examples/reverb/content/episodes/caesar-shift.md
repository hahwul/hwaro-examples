+++
title = "The Caesar Shift"
date = "2025-01-14"
description = "The oldest trick in the codebook: shift every letter by a fixed amount and call it secret. We trace the Caesar cipher from Gallic War dispatches to the decoder ring in a cereal box."
tags = ["classical", "substitution", "history"]

[extra]
block = "0x01"
duration = "38 min"
guest = "Dr. Elin Voss, cryptohistorian"
cipher = "Caesar shift, mod 26"
preview = "A shift of three letters hid Caesar's messages from anyone who couldn't count. We trace the cipher from Gaul to your kid's decoder ring."
preview_rot13 = "N fuvsg bs guerr yrggref uvq Pnrfne'f zrffntrf sebz nalbar jub pbhyqa'g pbhag. Jr genpr gur pvcure sebz Tnhy gb lbhe xvq'f qrpbqre evat."
+++

Every cipher podcast has to start here, so we do. The Caesar shift is the smallest possible idea in cryptography: pick a number between one and twenty-five, slide the alphabet that far, and write down what lands under each letter of your message. Suetonius says the man himself used a shift of three. It didn't need to be clever — his couriers were the threat model, not mathematicians.

<!-- more -->

## Why it worked at all

A shift cipher isn't secure by modern standards; it has exactly twenty-five possible keys and a bored teenager can brute-force it by hand in an evening. What made it work for Caesar was scarcity of literacy, not strength of math. The attacker had to be able to read Latin *and* think to try shifting the alphabet — a combination rare enough in 50 BCE that "obviously scrambled text" was often protection enough.

## Frequency analysis kills it

The cipher's real death came centuries later, from Al-Kindi's ninth-century observation that letters don't occur with equal probability in natural language. Count the letter frequencies in ciphertext, match them against the known frequency of English or Latin, and the shift falls out in minutes:

```python
from collections import Counter

FREQ_ORDER = "etaoinshrdlcumwfgypbvkjxqz"

def guess_shift(ciphertext: str) -> int:
    letters = [c.lower() for c in ciphertext if c.isalpha()]
    common = Counter(letters).most_common(1)[0][0]
    return (ord(common) - ord(FREQ_ORDER[0])) % 26
```

Run that against any reasonably long shifted passage and the most frequent ciphertext letter almost always maps to "e". One guess, one cipher broken.

## Cited in this episode

- Suetonius, *The Twelve Caesars*, on Julius Caesar's correspondence habits
- Al-Kindi, *A Manuscript on Deciphering Cryptographic Messages* (c. 850 CE)
- The ROT13 convention still used to spoiler-mask forum posts today

Next block: [what happens when you use twenty-six different shifts instead of one](/episodes/vigenere-shadow/).
