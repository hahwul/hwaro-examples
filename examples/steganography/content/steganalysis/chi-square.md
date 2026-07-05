+++
title = "Chi-Square Attack on LSB Images"
description = "Using statistical distribution tests to detect LSB steganography"
date = "2025-08-05"
tags = ["steganalysis", "math", "image"]
+++

The Chi-Square attack is a powerful statistical steganalysis method used to detect the presence of hidden messages embedded via [LSB Steganography](/methods/lsb-image/). When data is embedded into the least significant bits of an image, the distribution of colors changes in a predictable way. Specifically, LSB replacement causes the frequencies of adjacent color values (such as 0 and 1, 2 and 3, or 2n and 2n+1) to become equalized. These pairs are known as Pairs of Values (PoVs). 

In a natural, unmodified image, these PoVs have independent frequencies. However, after random LSB embedding, the frequencies of each value in a PoV tend to converge toward their average value.

<!-- more -->

By applying the Chi-Square goodness-of-fit test, a steganalyst can compare the observed distribution of PoVs in a suspect image against the expected theoretical distribution of an unmodified image. If the probability (p-value) that the observed distribution matches a natural distribution is very close to zero, it indicates that the image contains embedded data. The test is highly sensitive and can detect payloads even when they occupy as little as 5% of the available LSB capacity.

Here is a Python function illustrating how to compute the Chi-Square statistic for a set of observed frequencies of pixel values:

```python
def chi_square_test(observed_freqs):
    """
    Computes the Chi-Square statistic for PoVs.
    observed_freqs is a list of counts for each pixel value (0-255).
    """
    chi_stat = 0.0
    for i in range(0, len(observed_freqs), 2):
        y1, y2 = observed_freqs[i], observed_freqs[i+1]
        mean = (y1 + y2) / 2.0
        if mean > 0:
            chi_stat += ((y1 - mean) ** 2) / mean
            chi_stat += ((y2 - mean) ** 2) / mean
    return chi_stat
```
