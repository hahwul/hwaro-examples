+++
title = "Release notes, version 1.0"
date = "2026-06-02"
description = "The scheme is frozen: eight colors, every one measured, none of them moving again without a note in this log."
tags = ["release"]
+++

Version 1.0 is the freeze. After eighteen months of tuning, the eight colors are now fixed, and any future change must land with a note in this log explaining what was measured and why the old value lost. A color scheme is a dependency like any other; people build muscle memory against it, and silent drift is a breaking change even when no API moved.

<!-- more -->

What shipped: the blue-ink background documented in the first note, the desaturated sign magenta for keywords, and a contrast floor of 4.5 to 1 that every color in the set now clears against the base. The quietest change since the last beta is also the one most people will feel: comment fog was lifted two steps after readers reported that block comments were disappearing entirely at low brightness. Comments should whisper, not vanish.

Installation stays a one-line affair in the fictional editor this scheme pretends to target:

```json
{
  "editor.colorScheme": "seoulnight",
  "editor.background": "dim"
}
```

{% alert() %}
Upgrading from a 0.x build: the comment color changed value in this release. If you pinned individual hex codes instead of the scheme name, repin `angae` before updating.
{% end %}

What did not ship: a light variant. Daylight asks different questions, and answering them halfway would cheapen both halves. If a companion ever appears it will be its own scheme with its own name, measured against morning instead of borrowed from midnight.
