+++
title = "Least Significant Bit (LSB) Steganography"
description = "Hiding data in the lowest bits of image pixel channels"
date = "2025-01-20"
tags = ["digital", "image", "stego"]
+++

Least Significant Bit (LSB) steganography is one of the most common techniques used to hide secret information within digital cover images. In a standard 24-bit bitmap image, each pixel contains three color channels: Red, Green, and Blue (RGB), with each channel represented by 8 bits (values from 0 to 255). By replacing the lowest-order bit—the least significant bit—of these channels with the bits of our secret message, we can encode data directly into the pixel array. Because the value of the LSB changes the color channel's intensity by at most 1 unit out of 256, the visual difference is completely imperceptible to the human eye.

<!-- more -->

For example, if a pixel has an RGB value of (140, 201, 80), its binary representation is:
- Red: `10001100`
- Green: `11001001`
- Blue: `01010000`

If we wish to embed the binary sequence `101` into this pixel, we change the last bit of each channel to match the sequence, resulting in:
- Red: `10001101` (141)
- Green: `11001000` (200)
- Blue: `01010001` (81)

The pixel color shifts minutely, but the carrier image remains visually identical to the original. This method is highly efficient for hiding large payloads, but it is extremely vulnerable to statistical detection methods such as the [Chi-Square Attack](/steganalysis/chi-square/).

Below is a simple Python function illustrating how to embed a single bit into a pixel channel:

```python
def embed_lsb(pixel_val, message_bit):
    """
    Clears the least significant bit of a color value 
    and sets it to the message_bit (0 or 1).
    """
    return (pixel_val & ~1) | message_bit
```
