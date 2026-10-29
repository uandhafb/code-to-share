---
title: Arrow functions
tool: hydra
category: patterns
level: beginner
meetups: [1]
summary: Signals: numbers that never stop changing.
related: [arrays, chaining, rotate]
author: Uandha Fernandes Barbosa
---

## How it works

`() =>` means "recalculate this every frame". What you get is a **signal**: a number that never stops changing.

`time` is the number of seconds since Hydra started, so it keeps growing. JavaScript's `Math` helps shape it: `Math.sin(time)` swings between -1 and 1.

## Sketch

```hydra
shape(4, () => Math.sin(time) * 0.2 + 0.3).out()
```

## Try this

The color offset counts from 0 to 3, then starts again (`%` is the remainder):

```hydra
osc(20, 0.1, () => time % 3).out()
```

A circle swinging left and right:

```hydra
shape(100).scrollX(() => Math.sin(time) * 0.3).out()
```
