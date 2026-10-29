---
title: rotate
tool: hydra
category: geometry
level: beginner
meetups: [1]
summary: Turns the image, or keeps it spinning.
related: [scroll, kaleid, modulate-rotate]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`rotate(angle, speed)` · defaults: `rotate(10, 0)`

## Parameters

- **angle**: how far to turn, in radians: 3.14 is half a turn, 6.28 a full turn. The default, 10, is more than a full turn, so start with small numbers.
- **speed**: keeps it spinning (0 = still).

## Negative values

- **angle** and **speed**: turn the other way.

## Sketch

```hydra
shape(4).scale(1.5, 1, -1, -0.3, 0.5).repeat(15, 1, 0.3, 0.5).rotate(1, 6).out()
```

## Try this

A square turned into a diamond (an eighth of a turn):

```hydra
shape(4, 0.4).rotate(0.785).out()
```

Stripes spinning slowly:

```hydra
osc(20, 0, 1).rotate(0, 0.2).out()
```
