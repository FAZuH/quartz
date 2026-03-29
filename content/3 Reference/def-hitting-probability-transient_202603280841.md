---
publish: true
aliases:
  - Hitting Probability (Transient)
created: 2026-03-28T17:51:47.380+07:00
modified: 2026-03-28T17:51:47.382+07:00
published: 2026-03-28T17:51:47.382+07:00
creation-time: 2026-03-28 08:41
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

The probability that the [[def-discrete-time-markov-chain_202603280806|Markov chain]] ever enters [[def-recurrent-transient_202603280824|transient state]] $j$ given that it starts in [[def-recurrent-transient_202603280824|transient state]] $i$ is:

$$\pi\_i(j) = \frac{\mu\_{ij} - \delta\_{ij}}{\mu\_{jj}}$$

where $\delta\_{ij} = 1$ if $i = j$ and $0$ otherwise.

## Notation

- $\mu\_{ij}$: expected number of visits to state $j$ starting from $i$
- $\mu\_{jj}$: expected number of visits to state $j$ starting from $j$

## Example

For $N=7, p=0.4$ (lose probability $0.6$), starting with 3 units:

- $\mu\_{3,5} = 0.9228$ (Expected time at 5 units)
- $\mu\_{3,2} = 2.3677$ (Expected time at 2 units)
- Probability of ever hitting 1: $\pi\_3(1) = \mu\_{3,1} / \mu\_{1,1} = 1.4206 / 1.6149 = 0.8797$

## Related

- [[def-mean-time-transient_202603280840|Mean Time Spent in Transient States]]
- [[comparison-limiting-vs-hitting_202603280836|Limiting vs Hitting Probability]]
- [[procedure-first-step-analysis_202603280842|First Step Analysis]]
