+++
title = "About"
description = "Why Risograph looks like a two-ink zine, the choices behind it, and where to send fixes."
date = "2026-04-01"
+++

Risograph is a documentation theme that pretends your docs came off a Riso duplicator. A Riso lays down one flat spot ink per drum, and the sheet feeds through twice — once for pink, once for blue. The drums never line up perfectly, so every print has a faint off-register shadow. That accident is the whole aesthetic here, used on purpose.

## The choices we have made

- Two spot inks only: fluorescent pink (`#ff5277`) and riso blue (`#355cff`), printed on warm uncoated paper.
- The mis-registration is real CSS, not decoration: headings and panels carry a solid second-ink shadow offset by a few pixels.
- Flat color blocks with knockout (paper-colored) type. No gloss, no soft shadows, no blended fills.
- Printer's furniture is part of the page: crop marks in the corners, a registration target up top, a colophon in the footer.

## How the overprint works

There are no halftone dots and no blurred shadows anywhere in the stylesheet. The riso look comes entirely from two tricks: a solid `text-shadow` in the opposite ink for type, and a solid `box-shadow` offset for panels. Move the offset and the whole print shifts register — exactly like a real two-pass run.

## What this is not

This is not a marketing theme. There is no carousel, no testimonial wall, and nothing that animates as you scroll. It is built to make long technical documents pleasant to read and easy to skim.

## License

MIT. Print it, fork it, send a better registration.
