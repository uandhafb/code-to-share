---
title: colorama
tool: hydra
category: color
level: beginner
meetups: [1]
summary: Shifts every color around the color wheel.
related: [color, osc, voronoi]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`colorama(amount)` · defaults: `colorama(0.005)`

## Parameters

- **amount**: how far to shift. Small = a gentle shift; bigger = wild rainbow bands.

## Negative values

- **amount**: shifts the other way.

## Sketch

```hydra
noise(4).repeat(10, 10, 0.5, 0.5).pixelate(60, 30).colorama(-0.5).out()
```

## Try this

```hydra
osc(20, 0.1, 1).colorama(0.2).out()
```

```hydra
voronoi(5).colorama(1).out()
```
