---
title: repeat
tool: hydra
category: geometry
level: beginner
meetups: [1]
summary: A grid of copies.
related: [scale, pixelate, modulate-repeat]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`repeat(repeatX, repeatY, offsetX, offsetY)` · defaults: `repeat(3, 3, 0, 0)`

## Parameters

- **repeatX** and **repeatY**: how many copies across and down.
- **offsetX** and **offsetY**: shift every other row or column, like a brick wall.

## Negative values

- **repeatX** and **repeatY**: each copy is mirrored.

## Sketch

```hydra
shape().scale(1.5, 1, -1, -0.3, 0.5).repeat(7, 4, 0.3, 0.5).out()
```

## Try this

A simple grid:

```hydra
shape(4, 0.3).repeat(5, 5).out()
```

A brick wall:

```hydra
shape(4, 0.3).repeat(5, 5, 0.5, 0).out()
```
