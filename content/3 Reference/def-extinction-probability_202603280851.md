---
publish: true
aliases:
  - Extinction Probability
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:51
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $\mu = E\[\xi\_i]$ — the expected number of offspring per individual, i.e., the mean of the offspring distribution $P\_j$.

- If $\mu \leq 1$: $\pi\_0 = 1$ (certain extinction, unless $P\_1 = 1$)
- If $\mu > 1$: $\pi\_0$ is the **smallest positive solution** to:

$$\pi\_0 = \sum\_{j=0}^{\infty} \pi\_0^j P\_j$$

## Interpretation

- $\pi\_0$ (left side): the extinction probability we're solving for
- $j$: number of offspring a single individual produces
- $P\_j$: probability of producing exactly $j$ offspring
- $\pi\_0^j$ (right side): probability that **all** $j$ offspring lines eventually go extinct (each offspring independently has extinction probability $\pi\_0$, and there are $j$ of them)

The right side sums over all possible offspring counts: probability of having $j$ offspring × probability all $j$ lineages die out.

This is a self-consistency equation — $\pi\_0$ appears on both sides because extinction of the whole population requires extinction of every sub-lineage.

## Related

- [[def-branching-process_202603280850|Branching Process]]
