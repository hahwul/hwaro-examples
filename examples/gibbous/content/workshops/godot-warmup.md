+++
title = "Godot 4: from empty scene to moving thing"
date = "2026-05-12"
description = "Nodes, scenes, and a player you can steer with the arrow keys, built live in ninety minutes."
[extra]
engine = "Godot 4"
+++

Godot is the workhorse of the modern jam: free, tiny to download, and forgiving of the strange decisions you make at hour forty. This first session assumes you have never opened it. By the end you will have a character that moves, collides, and respawns, which is roughly ninety percent of what most jam games need on Friday night.

<!-- more -->

## What we build

A top-down room with one player node, one wall, and a pickup that plays a sound and vanishes. We do it in a single scene so the mental model stays small, then split it into reusable scenes once it works.

## The one script

Everything hangs off a `CharacterBody2D` and eight lines of movement. We type this together, slowly:

```gdscript
extends CharacterBody2D

@export var speed := 220.0

func _physics_process(delta: float) -> void:
    var dir := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
    velocity = dir * speed
    move_and_slide()
```

That is the whole controller. We spend the rest of the time on feel: acceleration, a little screen shake, and why `move_and_slide` saves you from writing collision math at midnight.

## Bring

Godot 4.2 or later installed and launched at least once. A mouse helps. No prior code needed, but if you have never seen a `for` loop, skim any beginner tutorial the night before so the syntax is not brand new. We keep the pace gentle and the chat open the whole time.

## After the session

You will leave with the project file and a short list of "next ten minutes" ideas: add a second room, make the pickup count, put a number on screen. Those are exactly the muscles you will use during the jam itself.
