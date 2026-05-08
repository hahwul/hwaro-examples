+++
title = "Cipher Fragment Resolved"
description = "Decoding progress on the artificial signal received last month."
tags = ["logs", "decoding"]
categories = ["transmissions"]
date = "2024-07-19"
+++

# Partial Decode of the May Transmission

The signal logged on twelve May has yielded its first decoded fragment. After thirty-eight days of analysis we have recovered a self-consistent prefix that behaves like a synchronisation header.

## Method

The bitstream was split into candidate frames at every reasonable symbol rate between two hundred bits per second and ninety-six kilobits per second. A spectral autocorrelation pass identified a strong period at 4096 symbols, which we adopted as the working frame size. Within each frame, an outer block of 32 symbols repeats with a Hamming distance consistent with a parity-protected preamble.

## What the Fragment Looks Like

The decoded prefix encodes a counter that increments by one between consecutive frames. There is no payload entropy yet, only the counter and a checksum field. This is consistent with a carrier handshake that has not yet been answered.

The implication is that the source is expecting a reply on a matching channel. We are preparing a coherent return transmission at half the original symbol rate, with the same preamble structure echoed back. The lower rate provides margin for path loss and any unknown propagation delay that exceeds our current estimate.

## Next Steps

Transmission will be queued for the next conjunction window. In the meantime we are extending the buffer length on the receiver in case the source switches into payload mode without warning.

**End of Line.**
