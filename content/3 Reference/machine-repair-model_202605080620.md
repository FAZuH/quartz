---
publish: true
aliases:
  - Machine Repair Model
created: 2026-05-08T06:23:06.535+07:00
modified: 2026-05-08T06:23:06.536+07:00
published: 2026-05-08T06:23:06.536+07:00
cssclasses: ""
creation-time: 2026-05-08 06:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Example

Consider $M$ machines and one serviceman. Each machine runs for an $\text{Exp}(\lambda)$ time before breaking down, and repair takes $\text{Exp}(\mu)$ time.

Let $X(t)$ be the number of machines **not in use** (down). This is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] with:

$$\lambda_n = \begin{cases} (M - n)\lambda, & n \leq M \\ 0, & n > M \end{cases}$$
$$\mu_n = \mu, \quad n \geq 1$$

A machine failing is a "birth" (increases down count), and a repaired machine is a "death" (decreases down count).

## Limiting Probabilities

From the [[3 Reference/solving-bd-process-balance-equations_202605080618\|B/D balance equation solution]]:

$$P_0 = \frac{1}{1 + \sum_{n=1}^{M} (\lambda/\mu)^n \frac{M!}{(M-n)!}}$$
$$P_n = \frac{(\lambda/\mu)^n \frac{M!}{(M-n)!}}{1 + \sum_{k=1}^{M} (\lambda/\mu)^k \frac{M!}{(M-k)!}}, \quad n = 0, 1, \ldots, M$$

## Key Quantities

**Average number of machines not in use:**

$$\sum_{n=0}^{M} n P_n = \frac{\sum_{n=0}^{M} n (\lambda/\mu)^n \frac{M!}{(M-n)!}}{1 + \sum_{n=1}^{M} (\lambda/\mu)^n \frac{M!}{(M-n)!}}$$

**Proportion of time a machine is working:**

$$P\{\text{machine working}\} = \sum_{n=0}^{M} \frac{M-n}{M} P_n = 1 - \frac{\sum_{n=0}^{M} n P_n}{M}$$

> [!TIP] Interpretation
> The machine repair model is the prototypical finite-source queue. Instead of customers arriving from an infinite population, jobs (machine failures) come from a finite set of $M$ sources. The arrival rate decreases as more machines are already down.

## Special Case: $M = N = R$

When every machine's operator is also the repairman ($M = N = R$, equivalent to $M$ independent two-state Markov chains), the stationary distribution is binomial:

$$P_n = \binom{M}{n} \left(\frac{\lambda}{\lambda + \mu}\right)^n \left(\frac{\mu}{\lambda + \mu}\right)^{M-n}$$

## Related

- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/solving-bd-process-balance-equations_202605080618\|Solving BD Process Balance Equations]]
- [[3 Reference/machine-repair-model_202605080620\|Machine Repair Model]]