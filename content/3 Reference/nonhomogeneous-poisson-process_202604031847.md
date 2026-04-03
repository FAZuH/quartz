---
publish: true
aliases:
  - Nonhomogeneous Poisson Process
created: 2026-04-03T18:47:17.497+07:00
modified: 2026-04-03T19:14:13.807+07:00
published: 2026-04-03T19:14:13.807+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:47
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A **Nonhomogeneous Poisson Process** is a [[counting-process_202604031839|counting process]] ${N(t), t \geq 0}$ with **intensity function** $\lambda(t)$, $t \geq 0$, such that:

1. $N(0) = 0$
2. The process has [[independent-and-stationary-increments_202604031839|independent increments]]
3. $P(N(t+h) - N(t) = 1) = \lambda(t) h + o(h)$
4. $P(N(t+h) - N(t) \geq 2) = o(h)$

> Then $N(t) \sim \text{Po}(m(t))$ where the **mean value function** is:
> $$m(t) = \int\_0^t \lambda(s) , ds$$

> [!TIP] Interpretation
> Unlike the standard [[poisson-process_202604031845|Poisson process]] where the rate $\lambda$ is constant, here the rate varies with time. Think of customer arrivals at a store — more during lunch rush, fewer at 3 AM. The expected count is the area under the rate curve.

## Key Difference from Standard Poisson Process

The nonhomogeneous process does **not** have stationary increments — the distribution depends on when the interval starts, not just its length.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[counting-process_202604031839|Counting Process]]
- [[compound-poisson-process_202604031847|Compound Poisson Process]]
