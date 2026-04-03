---
publish: true
aliases:
  - Time Reversible Markov Chain
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:52
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A stationary [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]] is **time reversible** if it satisfies the detailed balance equation:

$$\pi_i P_{ij} = \pi_j P_{ji}, \quad \forall i, j$$

> [!TIP] Interpretation
> $\pi_i$ is the long-run/"overall" proportion of time spent in state $i$. $P_{ij}$ is the [[3 Reference/def-transition-probability_202603280807\|transition probability]] from $i$ to $j$ in one time step.
>
> - $P_{ij}$ alone = probability of going $i \to j$ given you're already in $i$
> - $\pi_i P_{ij}$ = probability of going $i \to j$ unconditionally, accounting for how often you're even in $i$ to begin with
>
> Essentially, the rate at which the process goes from $i \to j$ is equal to the rate from $j \to i$.

## Theorem: Kolmogorov's Criterion

A chain is time reversible iff for any cycle of [[3 Reference/def-state-stochastic_202603280801\|states]] $i \to i_1 \to \dots \to i_k \to i$, the product of [[3 Reference/def-transition-probability_202603280807\|transition probabilities]] is the same in both directions:

$$P_{i,i_1} P_{i_1,i_2} \dots P_{i_k,i} = P_{i,i_k} P_{i_k,i_{k-1}} \dots P_{i_1,i}$$

## Examples

- **Random Walk on Graphs** (with symmetric weights $w_{ij} = w_{ji}$): $P_{ij} = \frac{w_{ij}}{\sum w_{ik}}$ is time reversible
- **Ehrenfest Urn**: [[3 Reference/def-state-stochastic_202603280801\|State]] $i$ (number of balls in Urn 1) is time reversible with $\pi_i = \binom{M}{i} (\frac{1}{2})^M$
- **One-closer rule**: Reordering rule that is time reversible, unlike move-to-front

## Related

- [[3 Reference/def-markov-chain-monte-carlo_202603280853\|Markov Chain Monte Carlo]]
