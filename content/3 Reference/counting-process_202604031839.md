---
publish: true
aliases:
  - Counting Process
created: 2026-04-03T18:39:54.970+07:00
modified: 2026-04-03T19:12:20.860+07:00
published: 2026-04-03T19:12:20.860+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:39
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A **Counting Process** is a [[def-stochastic-process_202603280800|stochastic process]] ${N(t), t \geq 0}$ where $N(t)$ represents the total number of "events" that occur by time $t$.

The process must satisfy:

1. $N(t) \geq 0$
2. $N(t)$ is integer valued
3. If $s < t$, then $N(s) \leq N(t)$ (non-decreasing)
4. For $s < t$, $N(t) - N(s)$ equals the number of events that occur in the interval $(s, t]$

> [!TIP] Interpretation
> Think of a counter that clicks up each time an event happens. It never goes down, only counts upward in whole numbers. Examples: number of customers entering a store, number of goals scored by a player, number of births in a population.

## Examples

- **Customers in a store**: $N(t)$ = number of persons who enter by time $t$
- **Births**: $N(t)$ = total number of babies born by time $t$
- **Soccer scores**: $N(t)$ = number of goals a player makes by time $t$

## Related

- [[poisson-process_202604031845|Poisson Process]] — the most important counting process
- [[independent-and-stationary-increments_202604031839|Independent and Stationary Increments]] — properties many counting processes possess
