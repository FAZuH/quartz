---
publish: true
aliases:
  - Extinction Probability
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
cssclasses: ""
creation-time: 2026-03-28 08:51
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Let $\mu = E[\xi_i]$ — the expected number of offspring per individual, i.e., the mean of the offspring distribution $P_j$.

- If $\mu \leq 1$: $\pi_0 = 1$ (certain extinction, unless $P_1 = 1$)
- If $\mu > 1$: $\pi_0$ is the **smallest positive solution** to:

$$\pi_0 = \sum_{j=0}^{\infty} \pi_0^j P_j$$

## Interpretation

- $\pi_0$ (left side): the extinction probability we're solving for
- $j$: number of offspring a single individual produces
- $P_j$: probability of producing exactly $j$ offspring
- $\pi_0^j$ (right side): probability that **all** $j$ offspring lines eventually go extinct (each offspring independently has extinction probability $\pi_0$, and there are $j$ of them)

The right side sums over all possible offspring counts: probability of having $j$ offspring × probability all $j$ lineages die out.

This is a self-consistency equation — $\pi_0$ appears on both sides because extinction of the whole population requires extinction of every sub-lineage.

## Related

- [[3 Reference/def-branching-process_202603280850\|Branching Process]]
