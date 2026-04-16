---
publish: true
aliases:
  - Nonhomogeneous Poisson Process
created: 2026-04-09T23:07:39.524+07:00
modified: 2026-04-10T04:42:43.049+07:00
published: 2026-04-10T04:42:43.049+07:00
tags:
  - type/definition
cssclasses: ""
creation-time: 2026-04-03 18:47
status: in progress
parent:
  - "[[stochastic-model]]"
---

> Poisson Process with rate $\lambda(t)$ that depends on time

## Definition

A **Nonhomogeneous Poisson Process** is a [[3 Reference/counting-process_202604031839\|counting process]] $\{N(t), t \geq 0\}$ with **intensity function** $\lambda(t)$, $t \geq 0$, such that:

1. $N(0) = 0$
2. The process has [[3 Reference/independent-and-stationary-increments_202604031839\|independent increments]]
3. $P(N(t+h) - N(t) = 1) = \lambda(t) h + o(h)$
4. $P(N(t+h) - N(t) \geq 2) = o(h)$

> Then $N(t) \sim \text{Po}(m(t))$ where the **mean value function** is:
> $$m(t) = \int_0^t \lambda(s) \, ds$$

> [!TIP] Interpretation
> Unlike the standard [[3 Reference/poisson-process_202604031845\|Poisson process]] where the rate $\lambda$ is constant, here the rate varies with time.

> [!example]
> Think of customer arrivals at a store — more during lunch rush, fewer at 3 AM. The expected count is the area under the rate curve.

## Key Difference from Standard Poisson Process

The nonhomogeneous process does **not** have [[3 Reference/independent-and-stationary-increments_202604031839\|stationary increments]] — the distribution depends on when the interval starts, not just its length.

## Related

- [[3 Reference/poisson-process_202604031845\|Poisson Process]]
- [[3 Reference/counting-process_202604031839\|Counting Process]]
- [[3 Reference/compound-poisson-process_202604031847\|Compound Poisson Process]]
