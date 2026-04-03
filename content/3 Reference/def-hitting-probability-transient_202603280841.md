---
publish: true
aliases:
  - Hitting Probability (Transient)
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
cssclasses: ""
creation-time: 2026-03-28 08:41
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

The probability that the [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]] ever enters [[3 Reference/def-recurrent-transient_202603280824\|transient state]] $j$ given that it starts in [[3 Reference/def-recurrent-transient_202603280824\|transient state]] $i$ is:

$$\pi_i(j) = \frac{\mu_{ij} - \delta_{ij}}{\mu_{jj}}$$

where $\delta_{ij} = 1$ if $i = j$ and $0$ otherwise.

## Notation

- $\mu_{ij}$: expected number of visits to state $j$ starting from $i$
- $\mu_{jj}$: expected number of visits to state $j$ starting from $j$

## Example

For $N=7, p=0.4$ (lose probability $0.6$), starting with 3 units:

- $\mu_{3,5} = 0.9228$ (Expected time at 5 units)
- $\mu_{3,2} = 2.3677$ (Expected time at 2 units)
- Probability of ever hitting 1: $\pi_3(1) = \mu_{3,1} / \mu_{1,1} = 1.4206 / 1.6149 = 0.8797$

## Related

- [[3 Reference/def-mean-time-transient_202603280840\|Mean Time Spent in Transient States]]
- [[3 Reference/comparison-limiting-vs-hitting_202603280836\|Limiting vs Hitting Probability]]
- [[3 Reference/procedure-first-step-analysis_202603280842\|First Step Analysis]]
