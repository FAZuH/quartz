---
publish: true
aliases:
  - Stochastic Process
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:00
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Let
- $X(t)$ : random variable indexed by parameter $t$
- $T$ : index set (typically time)

A **Stochastic Process** $\{X(t), t \in T\}$ is a collection of [[3 Reference/Def-random-variable\|random variables]] $X(t)$ indexed by $t$.

> [!TIP] Interpretation
> "Stochastic" means probabilistic, "Process" means depends on time. A stochastic process is a sequence (implies ordering) of random variables indexed by time.

## Classification

A stochastic process is classified by its **state space** ($S$) and **index set** ($T$):

| Type | Index Set $T$ | State Space $S$ | Example |
|------|---------------|-----------------|---------|
| Discrete-time, Discrete | $\{0,1,2,...\}$ | $\{0,1,2,...\}$ | [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov Chain]] |
| Continuous-time, Discrete | $[0, \infty)$ | $\{0,1,2,...\}$ | Poisson Process |
| Discrete-time, Continuous | $\{0,1,2,...\}$ | $\mathbb{R}$ | — |
| Continuous-time, Continuous | $[0, \infty)$ | $\mathbb{R}$ | Brownian Motion |

## Related

- [[3 Reference/def-state-stochastic_202603280801\|State]]
- [[3 Reference/def-markov-property_202603280803\|Markov Property]]
- [[3 Reference/def-markov-process_202603280804\|Markov Process]]
