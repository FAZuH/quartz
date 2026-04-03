---
publish: true
aliases:
  - Thinning (Poisson)
created: 2026-04-03T18:46:00.813+07:00
modified: 2026-04-03T19:13:14.105+07:00
published: 2026-04-03T19:13:14.105+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let ${N(t), t \geq 0}$ be a [[poisson-process_202604031845|Poisson process]] of rate $\lambda$.

Suppose each event is independently classified as either **type I** with probability $p$ or **type II** with probability $1 - p$. Let $N\_1(t)$ and $N\_2(t)$ denote the number of type I and type II events by time $t$.

> This process of splitting the original process into sub-processes is called **Thinning**.

> [!TIP] Interpretation
> Imagine a Poisson stream of customers arriving at a store, and each customer is independently male (prob $p$) or female (prob $1-p$). Thinning separates the stream into two independent Poisson streams — one for males, one for females.

## Result

By [[independence-of-thinned-processes_202604031846|Thinning Theorem]]:

- $N\_1(t) \sim \text{Po}(\lambda p t)$ — Poisson process with rate $\lambda p$
- $N\_2(t) \sim \text{Po}(\lambda(1-p) t)$ — Poisson process with rate $\lambda(1-p)$
- $N\_1$ and $N\_2$ are **independent**

Generalizes to $k$ types: if events are classified into $k$ types with probabilities $p\_1, \dots, p\_k$, then the $k$ resulting processes are independent Poisson processes with rates $\lambda p\_i$.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[independence-of-thinned-processes_202604031846|Independence of Thinned Processes]]
