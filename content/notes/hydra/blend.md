---
title: blend
tool: hydra
category: blend
level: beginner
meetups: [1]
summary: A crossfade between two images.
related: [add, mult, chaining]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`blend(texture, amount)` · default amount: `0.5`

## Parameters

- **texture**: the second image: a source, a chain, or an output like `o1`.
- **amount**: 0 shows only the first image, 1 only the second.

## Negative values

- **amount**: below 0 goes past the crossfade: more of the first image, minus some of the second (above 1 does the opposite).

## Sketch

```hydra
osc(20, 0.1, 1).blend(shape(4, 0.4), 0.5).out()
```

## Try this

Blend three images. Each `blend(…, 0.5)` keeps half of what came before, so the stripes fade the most:

```hydra
osc(20, 0.1, 1).blend(noise(3)).blend(voronoi(5)).out()
```
