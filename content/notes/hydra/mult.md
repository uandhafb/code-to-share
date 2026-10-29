---
title: mult
tool: hydra
category: blend
level: beginner
meetups: [1]
summary: Multiplies two images: darker, like a stencil.
related: [add, blend, shape]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`mult(texture, amount)` · default amount: `1`

## Parameters

- **texture**: the second image: a source, a chain, or an output like `o1`.
- **amount**: how strong the effect is (1 = full).

The result gets darker, and the black areas of the second image hide the first one, like a stencil.

## Negative values

- **amount**: the effect flips: the first image gets brighter where the second one is dark.

## Sketch

```hydra
osc(20, 0.1, 1).mult(shape(100, 0.4)).out()
```

## Try this

Stripes seen through a grid of squares:

```hydra
osc(20, 0.1, 1).mult(shape(4, 0.3).repeat(7, 3)).out()
```
