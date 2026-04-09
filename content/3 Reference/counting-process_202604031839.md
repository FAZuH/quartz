---
publish: true
aliases:
  - Counting Process
created: 2026-04-09T23:07:39.074+07:00
modified: 2026-04-09T23:07:39.074+07:00
published: 2026-04-09T23:07:39.074+07:00
tags:
  - type/definition
cssclasses: ""
creation-time: 2026-04-03 18:39
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Counting Process** is a [[3 Reference/def-stochastic-process_202603280800\|stochastic process]] $\{N(t), t \geq 0\}$ where $N(t)$ represents the total number of "events" that occur by time $t$.

The process must satisfy:
1. $N(t) \geq 0$
2. $N(t)$ is integer valued
3. If $s < t$, then $N(s) \leq N(t)$ ([[3 Reference/def-monotone-sequence_202510030252\|Monotonically]] increasing)
4. For $s < t$, $N(t) - N(s)$ equals the number of events that occur in the interval $(s, t]$

## Examples

- **Customers in a store**: $N(t)$ = number of persons who enter by time $t$
- **Births**: $N(t)$ = total number of babies born by time $t$
- **Soccer scores**: $N(t)$ = number of goals a player makes by time $t$

## Related

- [[3 Reference/poisson-process_202604031845\|Poisson Process]] — the most important counting process
- [[3 Reference/independent-and-stationary-increments_202604031839\|Independent and Stationary Increments]] — properties many counting processes possess
