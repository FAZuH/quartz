---
publish: true
aliases:
  - Stochastic Process
created: 2026-04-09T23:07:39.321+07:00
modified: 2026-04-09T23:07:39.322+07:00
published: 2026-04-09T23:07:39.322+07:00
creation-time: 2026-03-28 08:00
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let

- $X(t)$ : random variable indexed by parameter $t$
- $T$ : index set (typically time)

A **Stochastic Process** $\{X(t), t \in T\}$ is a collection of [[Def-random-variable|random variables]] $X(t)$ indexed by $t$.

> [!TIP] Interpretation
> "Stochastic" means probabilistic, "Process" means it depends on time. A stochastic process is a sequence (implies ordering) of random variables indexed by time.
>
> "Process" refers to the entire evolving random system, not just one observation at one time.

## Classification

A stochastic process is classified by its **state space** ($S$) and **index set** ($T$):

| Type | Index Set $T$ | State Space $S$ | Example |
|------|---------------|-----------------|---------|
| Discrete-time, Discrete | $\{0,1,2,...\}$ | $\{0,1,2,...\}$ | [[def-discrete-time-markov-chain_202603280806\|Markov Chain]] |
| Continuous-time, Discrete | $[0, \infty)$ | $\{0,1,2,...\}$ | Poisson Process |
| Discrete-time, Continuous | $\{0,1,2,...\}$ | $\mathbb{R}$ | — |
| Continuous-time, Continuous | $[0, \infty)$ | $\mathbb{R}$ | Brownian Motion |

## Related

- [[def-state-stochastic_202603280801|State]]
- [[def-markov-property_202603280803|Markov Property]]
- [[def-markov-process_202603280804|Markov Process]]
