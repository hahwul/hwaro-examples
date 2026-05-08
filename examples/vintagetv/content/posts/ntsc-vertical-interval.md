+++
title = "The NTSC Vertical Interval"
date = "2023-11-09"
description = "A short reference on the lines reserved between fields in 525-line analog broadcasts."
tags = ["ntsc", "broadcast"]
+++

In a 525-line interlaced NTSC signal, twenty-one lines at the top of each field carry no active picture. This vertical blanking interval gives the receiver time to retrace the electron beam from the bottom of the screen to the top, and over the years it accumulated a number of secondary functions.

<!-- more -->

### Synchronization Pulses

Lines one through nine carry the equalizing and vertical sync pulse train. Six equalizing pulses precede a serrated vertical sync block, after which a further six equalizing pulses condition the receiver oscillators before active scan resumes. The sequence is identical for both fields apart from a half-line offset that distinguishes odd from even.

### Test and Reference Signals

Lines seventeen through twenty became the conventional home for vertical interval test signals. The multiburst, modulated staircase, and FCC composite waveforms inserted on these lines allowed broadcasters and cable operators to monitor amplitude response, differential gain, and chroma-luma delay without removing the program from air. Vertical interval reference signals on line nineteen carried color burst phase data used to calibrate downstream equipment.

### Closed Captioning

In 1980 the FCC reserved line twenty-one, field one, for closed caption data. The encoding placed two seven-bit ASCII characters per field at a clock rate of approximately 503 kHz. A second data channel was later defined on line twenty-one of field two for extended services, including a secondary language track and program rating descriptors.

### Teletext and VBI Data

European 625-line systems used a wider vertical interval and developed teletext as a parallel data service. North American broadcasters experimented with similar systems but never reached comparable adoption.
