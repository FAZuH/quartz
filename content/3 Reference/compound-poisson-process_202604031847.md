---
publish: true
aliases:
  - Compound Poisson Process
created: 2026-04-09T23:07:39.057+07:00
modified: 2026-04-10T04:12:16.803+07:00
published: 2026-04-10T04:12:16.803+07:00
tags:
  - type/definition
cssclasses: ""
creation-time: 2026-04-03 18:47
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Compound Poisson Process** is defined as:

$$X(t) = \sum_{i=1}^{N(t)} Y_i$$

where:
- $\{N(t), t \geq 0\}$ is a [[3 Reference/poisson-process_202604031845\|Poisson process]] with rate $\lambda$
- $Y_1, Y_2, \dots$ are i.i.d. [[3 Reference/Def-random-variable\|random variables]], [[3 Reference/def-statistically-independent_202509151103\|independent]] of $N(t)$

> [!TIP] Interpretation
> Events arrive according to a Poisson process, and each event carries a random "payload" $Y_i$. The compound process tracks the cumulative total. Example: insurance claims arrive as Poisson, each with a random claim amount $Y_i$; $X(t)$ is the total payout by time $t$.

## Moments

$$E[X(t)] = \lambda t \cdot E[Y_i]$$

$$\text{Var}(X(t)) = \lambda t \cdot E[Y_i^2]$$

Derived via conditional expectation: $E[X(t)] = E[E[X(t) \mid N(t)]] = E[N(t) \cdot E[Y]] = \lambda t \cdot E[Y]$.

## Example

> **Scenario**: Customers arrive at a store according to a Poisson process with rate $\lambda = 5$ per hour. Each customer spends a random amount $Y_i$ with $E[Y] = \$20$ and $E[Y^2] = 600$.

**What $X(t)$ tracks**: Total revenue by time $t$ (not customer count).

| Process | Formula | Tracks |
|---|---|---|
| $N(t)$ | Poisson count | Number of customers |
| $X(t)$ | $\sum_{i=1}^{N(t)} Y_i$ | Total revenue |

**Expected revenue in 2 hours**:

$$E[X(2)] = \lambda t \cdot E[Y] = 5 \times 2 \times 20 = \$200$$

**Variance**:

$$\text{Var}(X(2)) = \lambda t \cdot E[Y^2] = 5 \times 2 \times 600 = \$6000$$

**Relation to Poisson**: When every customer spends exactly $1$ (i.e., $Y_i \equiv 1$), the compound process reduces to the regular Poisson process: $X(t) = N(t)$.

## Related

- [[3 Reference/poisson-process_202604031845\|Poisson Process]]
- [[3 Reference/nonhomogeneous-poisson-process_202604031847\|Nonhomogeneous Poisson Process]]
