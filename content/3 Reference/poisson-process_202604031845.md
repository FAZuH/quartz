---
publish: true
aliases:
  - Poisson Process
created: 2026-04-09T23:07:39.554+07:00
modified: 2026-04-09T23:07:39.555+07:00
published: 2026-04-09T23:07:39.555+07:00
tags:
  - type/definition
cssclasses: ""
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Let $\{N(t), t \geq 0\}$ be a [[3 Reference/counting-process_202604031839\|counting process]].

If
1. $N(0) = 0$
2. The process has [[3 Reference/independent-and-stationary-increments_202604031839\|independent increments]]
3. $P(N(t+h) - N(t) = 1) = \lambda h + o(h)$
4. $P(N(t+h) - N(t) \geq 2) = o(h)$

Then $\{N(t), t \geq 0\}$ is a **Poisson Process** of rate $\lambda > 0$ 

> [!TIP] Interpretation
> A Poisson process models events occurring randomly in continuous time at a constant average rate $\lambda$.
> 
>  Conditions 3 and 4 say: in a tiny interval $h$, the chance of exactly one event is proportional to $h$, and the chance of two or more is negligible.

## Equivalent Definition

> The [[3 Reference/counting-process_202604031839\|counting process]] $\{N(t), t \geq 0\}$ is a Poisson process of rate $\lambda > 0$ if:
> 1. $N(0) = 0$
> 2. The process has [[3 Reference/independent-and-stationary-increments_202604031839\|independent increments]]
> 3. $N(t+s) - N(s) \sim \text{Po}(\lambda t)$ for all $s, t \geq 0$

## Axioms

For infinitesimal $h$:
- $P(\text{1 event in } [t, t+h]) = \lambda h + o(h)$
- $P(\text{0 events in } [t, t+h]) = 1 - \lambda h + o(h)$
- $P(\geq 2 \text{ events in } [t, t+h]) = o(h)$

Where $f(h) = o(h)$ means $\lim_{h \to 0} \frac{f(h)}{h} = 0$.

## Properties

1. $N(t) \sim \text{Po}(\lambda t)$ with $E[N(t)] = \lambda t$
2. Time of first event $T_1 \sim \text{Exp}(\lambda)$
3. [[3 Reference/inter-arrival-times_202604031845\|Inter-arrival times]] $T_n \stackrel{\text{i.i.d.}}{\sim} \text{Exp}(\lambda)$
4. [[3 Reference/waiting-times-(poisson)_202604031845\|Waiting time]] $W_n \sim \text{Gamma}(n, \lambda)$

## Related

- [[3 Reference/counting-process_202604031839\|Counting Process]]
- [[3 Reference/inter-arrival-times_202604031845\|Inter-arrival Times]]
- [[3 Reference/waiting-times-(poisson)_202604031845\|Waiting Times]]
- [[3 Reference/thinning-(poisson)_202604031846\|Thinning]]
- [[3 Reference/nonhomogeneous-poisson-process_202604031847\|Nonhomogeneous Poisson Process]]
- [[3 Reference/compound-poisson-process_202604031847\|Compound Poisson Process]]
