+++
title = "Appendix"
description = "Errata, the bibliography, and a colophon."
date = "2026-01-22"
weight = 4
tags = ["reference"]
+++

## Errata

The first printing of this manual contained two errors of substance.
Both have been corrected in subsequent printings, but are recorded
here for the benefit of readers consulting older copies.

1. In chapter two, the diagram of the three processes initially showed
   the journal communicating with egress by means of a socket. This
   has been corrected to a named pipe, in line with the prose.
2. In chapter three, the monitoring section listed the metric
   `press.egress.error_total` in the singular. The metric is, and has
   always been, `errors_total` — plural.

## Bibliography

The following works informed the design of the Press, and are
recommended further reading.

- Lampson, B. (1983). *Hints for Computer System Design.* Operating
  Systems Review, 17(5).
- Liskov, B. (1988). *Distributed Programming in Argus.*
  Communications of the ACM, 31(3).
- Stevens, W. R. (1992). *Advanced Programming in the UNIX Environment.*
  Addison-Wesley.

## Colophon

This manual is set in *Spectral* for the body, *Inter* for the heading
hierarchy, and *JetBrains Mono* for the displayed code. The page colour
is a warm cream. The accent ink is a brick red, chosen for legibility
on the chosen ground and used only for the chapter rule and the heading
ornaments.

The manual was written in plain text, rendered with Hwaro, and intended
to be readable both on screen and in print without modification.
