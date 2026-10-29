---
title: Source
order: 1
summary: Generates the signal. Every chain starts with a source.
notes: [osc, noise, voronoi, shape]
---

## Rules for every function

- If you leave parameters out, Hydra uses defaults: `osc()` is `osc(60, 0.1, 0)`, `noise()` is `noise(10, 0.1)`, `voronoi()` is `voronoi(5, 0.3, 0.3)` and `shape()` is `shape(3, 0.3, 0.01)`.
- Parameters are read from left to right, so you can only leave values out **from the end**. `osc(30, , 1)` is an error.
- Functions that **combine two images** (`add`, `blend`, `mult`, `layer` and all the `modulate…` functions) take the second image first: a source, a chain, or an output like `o1`. A number alone is not an image.
- In the [Hydra editor](https://hydra.ojack.xyz), **Ctrl+Enter** runs the current line, **Alt+Enter** runs a block, **Ctrl+Shift+Enter** runs everything and `hush()` clears the screen. In this garden, **Ctrl/⌘ + Enter** runs the code box you're typing in.

## Try the defaults

Each source with no parameters at all:

```hydra
osc().out()
```

```hydra
noise().out()
```

```hydra
voronoi().out()
```

```hydra
shape().out()
```
