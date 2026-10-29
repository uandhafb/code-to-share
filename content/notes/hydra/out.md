---
title: .out()
tool: hydra
category: output
level: beginner
meetups: [1]
summary: Sends the image to an output, so it shows on the screen.
related: [osc, shape, chaining]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`.out(output)` · default output: `o0`

## Parameters

- **output**: where to send the image. `o0` is the output on the screen.

Hydra has four outputs, `o0` to `o3`. Using several outputs (and `render()`) is a note for a later meetup.

## Sketch

```hydra
osc(20, 0.1, 1).out(o0)
```
