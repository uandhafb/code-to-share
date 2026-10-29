---
title: Chaining images
tool: hydra
category: patterns
level: beginner
meetups: [1]
summary: Images inside other images can have their own transformations.
related: [arrays, arrow-functions, mult]
author: Uandha Fernandes Barbosa
---

## How it works

The second image of a blend or modulate function is a full chain too, so it can have its own transformations.

## Sketch

```hydra
osc(20, 0.1, 1).mult(shape(4, 0.3).repeat(7, 3)).out()
```

## Try this

```hydra
shape(4, 0.4).modulateRepeat(noise(17).rotate(3)).colorama(-10).out()
```
