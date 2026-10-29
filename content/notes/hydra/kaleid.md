---
title: kaleid
tool: hydra
category: geometry
level: beginner
meetups: [1]
summary: Mirrored slices, like a kaleidoscope.
related: [rotate, modulate-kaleid, osc]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`kaleid(nSides)` · defaults: `kaleid(4)`

## Parameters

- **nSides**: how many mirrored slices.

## Negative values

- Use positive numbers.

## Sketch

```hydra
osc(-100, 0.05, 2).kaleid(3).kaleid(4).out()
```

## Try this

Eight slices of stripes:

```hydra
osc(20, 0.1, 1).kaleid(8).out()
```

Many slices of noise:

```hydra
noise(3).kaleid(50).out()
```
