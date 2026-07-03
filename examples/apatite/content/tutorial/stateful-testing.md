+++
title = "Stateful Model Testing"
description = "Generate whole command sequences against a model, and shrink the sequence itself."
weight = 4
date = "2025-04-22"
toc = true
tags = ["stateful", "shrinking"]
[extra]
minutes = 9
+++

Not every bug lives in a pure function. This lesson tests a small stateful
object — a fixed-capacity ring buffer — by generating sequences of commands
and comparing the buffer's behavior against a plain, unbounded reference
queue at every step.

<!-- more -->

## The subject

```js
class RingBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.slots = new Array(capacity);
    this.writeIndex = 0;
    this.readIndex = 0;
    this.size = 0;
  }
  push(value) {
    if (this.size <= this.capacity) {          // should be <
      this.slots[this.writeIndex] = value;
      this.writeIndex = (this.writeIndex + 1) % this.capacity;
      this.size++;
    }
  }
  pop() {
    if (this.size === 0) return undefined;
    const value = this.slots[this.readIndex];
    this.readIndex = (this.readIndex + 1) % this.capacity;
    this.size--;
    return value;
  }
}
```

`size <= this.capacity` lets one extra push through before the guard kicks
in. That push wraps `writeIndex` back to a slot that has not been read yet
and silently overwrites it — no error, no thrown exception, just a value
that quietly stops existing.

## The property

<div class="property-card">
  <p class="property-kicker">Property under test</p>
  <p class="property-law">Values popped from a <code>RingBuffer</code> match the values a reference model would pop, in the same order.</p>
</div>

Apatite's `commands` generator produces a random sequence of operations —
here, `push(v)` and `pop()` — and runs each one against both the real
`RingBuffer` and a plain array standing in as the model:

```js
import { forAll, commands, int, oneOfWeighted } from "apatite";

const cmd = () =>
  oneOfWeighted(
    [3, () => ({ op: "push", value: int() })],
    [1, () => ({ op: "pop" })]
  );

forAll("RingBuffer(2) matches the reference queue", commands(cmd()), (ops) => {
  const buf = new RingBuffer(2);
  const model = [];
  const popped = [];
  const expected = [];
  for (const c of ops) {
    if (c.op === "push") { buf.push(c.value); model.push(c.value); }
    else { popped.push(buf.pop()); expected.push(model.shift()); }
  }
  return JSON.stringify(popped) === JSON.stringify(expected);
});
```

## Running it

<pre class="run-plate"><code class="nohighlight">$ apatite test
✕ RingBuffer(2) matches the reference queue
  FAIL after 54 cases (seed 0xc27e15af)
  counterexample  8 commands
  shrinking…</code></pre>

## Shrinking a command sequence

The shrinker treats the command list the same way it treats any list: it
tries deleting commands, keeping the ones that still lead to a mismatch,
then shrinks the values inside the survivors. Dropping a `pop()` that never
observed the corrupted slot loses nothing; dropping any of the first three
`push` calls loses the overflow entirely, so those three are load-bearing:

<div class="shrink" role="group" aria-label="Shrink trace over command sequences, ending at the minimal counterexample">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>shrink trace — 2 steps to minimal</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>push(58), push(-13), pop(), push(91), push(4), push(0), pop(), pop()</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>push(58), push(-13), push(91), pop()</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3 is-minimal"><code>push(0), push(1), push(2), pop()</code><span class="minimal-tag">minimal</span></span>
  </div>
</div>

Four commands is as short as the counterexample gets — three pushes to force
the third one past capacity, one pop to observe the corrupted slot. The
values shrink toward `0`, `1`, `2` rather than all the way to `0, 0, 0`,
because if every pushed value were identical, overwriting one `0` with
another `0` would be unobservable and the property would stop failing. The
model expects `pop()` to return `0`, the value pushed first; the real
buffer, having silently overwritten slot zero, returns `2` instead.

## The fix

```js
push(value) {
  if (this.size < this.capacity) {
    this.slots[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.capacity;
    this.size++;
  }
}
```

With the guard corrected, a third push while the buffer is already full is
simply dropped rather than silently accepted, and the model and the real
buffer agree again across every sequence Apatite can generate.

{{ alert(type="tip", body="Weighting push at 3-to-1 against pop keeps most generated sequences long enough to actually fill the buffer — a fair coin flip between the two commands would need far more cases to hit the same bug.") }}
