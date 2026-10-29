---
title: noise
tool: hydra
category: source
level: beginner
meetups: [1]
summary: A cloudy pattern.
related: [osc, voronoi, modulate]
author: Uandha Fernandes Barbosa
---

## Signature & defaults

`noise(scale, offset)` · defaults: `noise(10, 0.1)`

## Parameters

- **scale**: how zoomed in it is (higher = smaller, busier blobs).
- **offset**: how fast it changes (0 = frozen).

## Negative values

- **scale**: mirrored; it looks almost the same.
- **offset**: it morphs backwards in time. It changes shape; it doesn't slide.

## Sketch

```hydra
noise(10, -0.1).out()
```

## Try this

Big, slow clouds:

```hydra
noise(2, 0.05).out()
```

Fine, fast grain:

```hydra
noise(50, 0.5).out()
```
