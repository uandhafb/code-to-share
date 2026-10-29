---
title: scale
tool: hydra
category: geometry
level: beginner
meetups: [1]
summary: Zooms and stretches the image.
related: [shape, repeat, modulate-scale]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`scale(amount, xMult, yMult, offsetX, offsetY)` · defaults: `scale(1.5, 1, 1, 0.5, 0.5)`

## Parameters

- **amount**: more than 1 zooms in; less than 1 zooms out.
- **xMult** and **yMult**: stretch in one direction (sideways or up and down).
- **offsetX** and **offsetY**: the point it zooms from (0.5, 0.5 is the center).

## Negative values

- **amount**: flips the image both ways.
- **xMult**: mirrors left ↔ right.
- **yMult**: mirrors top ↔ bottom.

## Sketch

```hydra
shape(100, 0.5, 0.005).scale(1.5, 1, 2, 0.5, 0.5).out()
```

## Try this

Zoom out:

```hydra
osc(20, 0.1, 1).scale(0.5).out()
```

An upside-down triangle:

```hydra
shape(3).scale(1, 1, -1).out()
```
