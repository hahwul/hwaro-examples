+++
title = "File Signatures Worth Memorizing"
date = "2026-04-30"
tags = ["binary", "magic"]
categories = ["analysis"]
description = "A small set of leading bytes covers most files you will encounter."
+++

Every well-formed file format reserves its first few bytes as a signature. Memorizing a handful of these signatures lets you identify a file from a hex dump without consulting a reference, which is useful when working on systems that lack the usual tooling.

## Archives

A ZIP archive begins with `50 4b 03 04`, the ASCII letters `PK` followed by two bytes that identify the local file header. Empty archives use `50 4b 05 06`. A gzip stream opens with `1f 8b 08`; the third byte is the compression method, and only deflate is in common use. A bzip2 stream begins with `42 5a 68`, the ASCII `BZh` followed by a single digit indicating block size.

## Images

PNG begins with the eight-byte sequence `89 50 4e 47 0d 0a 1a 0a`. The first byte is non-printable to discourage misidentification as text; the next three are `PNG`; the trailing four bytes detect line-ending conversion errors. JPEG begins with `ff d8 ff` and ends with `ff d9`, with no length field, so the closing bytes are the only reliable terminator. GIF begins with `47 49 46 38 37 61` or `47 49 46 38 39 61`, the literal strings `GIF87a` and `GIF89a`.

## Executables

An ELF binary starts with `7f 45 4c 46`. A Mach-O binary starts with `cf fa ed fe` for sixty-four bit little-endian or `ce fa ed fe` for thirty-two bit. A Windows PE file starts with `4d 5a`, the ASCII `MZ`, followed by a stub that points to the actual PE header further into the file. Java class files begin with `ca fe ba be`.

## Misidentification

A signature match is necessary but not sufficient. Random data produces a four-byte match approximately once every four billion files; longer signatures fail less often, but the only definitive check is to parse the structure that follows the signature and verify the internal offsets. A file whose magic is correct but whose length field exceeds the file size is either corrupt or deliberately crafted.
