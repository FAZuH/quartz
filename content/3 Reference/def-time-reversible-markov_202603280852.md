---
publish: true
aliases:
  - Time Reversible Markov Chain
created: 2026-03-28T17:53:06.238+07:00
modified: 2026-03-28T17:53:06.239+07:00
published: 2026-03-28T17:53:06.239+07:00
creation-time: 2026-03-28 08:52
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A stationary [[def-discrete-time-markov-chain_202603280806|Markov chain]] is **time reversible** if it satisfies the detailed balance equation:

$$\pi\_i P\_{ij} = \pi\_j P\_{ji}, \quad \forall i, j$$

> [!TIP] Interpretation
> $\pi\_i$ is the long-run/"overall" proportion of time spent in state $i$. $P\_{ij}$ is the [[def-transition-probability_202603280807|transition probability]] from $i$ to $j$ in one time step.
>
> - $P\_{ij}$ alone = probability of going $i \to j$ given you're already in $i$
> - $\pi\_i P\_{ij}$ = probability of going $i \to j$ unconditionally, accounting for how often you're even in $i$ to begin with
>
> Essentially, the rate at which the process goes from $i \to j$ is equal to the rate from $j \to i$.

## Theorem: Kolmogorov's Criterion

A chain is time reversible iff for any cycle of [[def-state-stochastic_202603280801|states]] $i \to i\_1 \to \dots \to i\_k \to i$, the product of [[def-transition-probability_202603280807|transition probabilities]] is the same in both directions:

$$P\_{i,i\_1} P\_{i\_1,i\_2} \dots P\_{i\_k,i} = P\_{i,i\_k} P\_{i\_k,i\_{k-1}} \dots P\_{i\_1,i}$$

## Examples

- **Random Walk on Graphs** (with symmetric weights $w\_{ij} = w\_{ji}$): $P\_{ij} = \frac{w\_{ij}}{\sum w\_{ik}}$ is time reversible
- **Ehrenfest Urn**: [[def-state-stochastic_202603280801|State]] $i$ (number of balls in Urn 1) is time reversible with $\pi\_i = \binom{M}{i} (\frac{1}{2})^M$
- **One-closer rule**: Reordering rule that is time reversible, unlike move-to-front

## Related

- [[def-markov-chain-monte-carlo_202603280853|Markov Chain Monte Carlo]]
