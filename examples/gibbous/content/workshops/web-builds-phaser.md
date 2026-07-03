+++
title = "Phaser: ship to the web, no download needed"
date = "2026-06-02"
description = "A JavaScript framework for browser games, so players click a link and are playing in seconds."
[extra]
engine = "Phaser 3"
+++

The last workshop before the theme drops is about reach. A build that runs in the browser gets played more, judged more, and shared more than one behind a download button. Phaser is a mature JavaScript framework for exactly that, and if you have written any web code at all you will feel at home fast.

<!-- more -->

## Why web-first for a jam

No installer, no platform builds, no "it does not run on my machine" in the comments. You upload a folder, players click a link. For a 48-hour game that lives or dies on how many people actually try it, that is a real advantage.

## The scene skeleton

Phaser organises a game into scenes with three familiar hooks. We start from this and grow it:

```js
class Play extends Phaser.Scene {
  preload() {
    this.load.image('moon', 'assets/moon.png');
  }
  create() {
    this.moon = this.add.sprite(200, 150, 'moon');
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.cursors.left.isDown) this.moon.x -= 3;
    if (this.cursors.right.isDown) this.moon.x += 3;
  }
}
```

`preload` loads assets, `create` builds the scene once, `update` runs every frame. If the Godot and PICO-8 sessions felt familiar by now, that is on purpose: almost every engine is a version of these three steps.

## What we build

A single-scene arcade toy with a sprite you steer, a score, and a restart key, then we package it into a folder that runs from any static host. We finish by uploading a test build together so you know the submission pipeline before it matters.

## Bring

Node installed, a code editor you like, and a browser. Basic JavaScript helps but is not required; we explain each line as we go. Come to this one even if you plan to jam in another engine, because the "how do I actually put this online" part applies to everyone.
