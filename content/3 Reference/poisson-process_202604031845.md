---
publish: true
aliases:
  - Poisson Process
created: 2026-04-09T23:07:39.554+07:00
modified: 2026-05-18T18:30:47.785+07:00
published: 2026-05-18T18:30:47.785+07:00
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
> A Poisson process models events occurring randomly in <u>continuous time</u> (unlike [[3 Reference/poisson-distribution_202604092032\|Poisson Distribution]] which is discrete) at a constant average rate $\lambda$.
> 

> [!TIP] About 3rd and 4th condition
> The MAIN point of conditions 3 and 4 is to "concern" ourselves only with <u>modeling events occurring one at a time</u>, not two or more at a time (the probability of multiple simultaneous events is vanishingly small)
> 
>  Conditions 3 and 4 say: in a tiny interval $h$, the chance of exactly one event is proportional to $h$, and the chance of two or more is negligible.

## Equivalent Definition

> The [[3 Reference/counting-process_202604031839\|counting process]] $\{N(t), t \geq 0\}$ is a Poisson process of rate $\lambda > 0$ if:
> 1. $N(0) = 0$
> 2. The process has [[3 Reference/independent-and-stationary-increments_202604031839\|independent increments]]
> 3. $N(t+s) - N(s) \sim \text{Po}(\lambda t)$ for all $s, t \geq 0$

## Axioms

For infinitesimal $h$:
- $P(\text{0 events in } [t, t+h]) = 1 - \lambda h + o(h)$
- $P(\text{1 event in } [t, t+h]) = \lambda h + o(h)$
- $P(\geq 2 \text{ events in } [t, t+h]) = o(h)$

Where $f(h) = o(h)$ means $\lim_{h \to 0} \frac{f(h)}{h} = 0$.

## Properties

1. $N(t) \sim \text{Po}(\lambda t)$ with $E[N(t)] = \lambda t$
2. Time of first event $T_1 \sim \text{Exp}(\lambda)$
3. [[3 Reference/inter-arrival-times_202604031845\|Inter-arrival times]] $T_n \stackrel{\text{i.i.d.}}{\sim} \text{Exp}(\lambda)$
4. [[3 Reference/waiting-times-(poisson)_202604031845\|Waiting time]] $W_n \sim \text{Gamma}(n, \lambda)$

## Concrete Example

> **Scenario**: Customers arrive at a store according to a Poisson process with rate $\lambda = 5$ per hour.

### Axiom Interpretation

For a small time interval $h = 0.01$ hour (36 seconds):

| Axiom | Formula | Concrete Value |
|---|---|---|
| Exactly 1 arrival | $\lambda h + o(h)$ | $5 \times 0.01 + o(0.01) \approx 0.05$ |
| $\geq 2$ arrivals | $o(h)$ | Negligible (e.g., $h^2 = 0.0001$) |

**Why $o(h)$ matters**: The exact probability of one arrival isn't precisely $\lambda h$, but $\lambda h + o(h)$. The $o(h)$ term captures "noise that vanishes faster than linearly." When computing rates:

$$\frac{\lambda h + o(h)}{h} = \lambda + \frac{o(h)}{h} \xrightarrow{h \to 0} \lambda$$

### Numerical Computations

- Expected arrivals in 2 hours: $E[N(2)] = \lambda \cdot 2 = 10$
- Probability of exactly 3 arrivals in 1 hour:

$$P(N(1) = 3) = \frac{e^{-\lambda} \lambda^3}{3!} = \frac{e^{-5} \cdot 5^3}{6} = \frac{e^{-5} \cdot 125}{6} \approx 0.140$$

- Probability of at least 1 arrival in 30 minutes ($t = 0.5$):

$$P(N(0.5) \geq 1) = 1 - P(N(0.5) = 0) = 1 - e^{-\lambda \cdot 0.5} = 1 - e^{-2.5} \approx 0.918$$

### Intuition Check

The rate $\lambda = 5$ means we expect 5 customers per hour *on average*. But:
- In a tiny 36-second window, the chance of **exactly one** customer is ~5%
- In that same window, the chance of **two or more** is $o(h)$ — vanishingly small

This is why Poisson processes model "rare events in continuous time" — events occur one at a time, well-separated.

## Related

- [[3 Reference/counting-process_202604031839\|Counting Process]]
- [[3 Reference/inter-arrival-times_202604031845\|Inter-arrival Times]]
- [[3 Reference/waiting-times-(poisson)_202604031845\|Waiting Times]]
- [[3 Reference/thinning-(poisson)_202604031846\|Thinning]]
- [[3 Reference/nonhomogeneous-poisson-process_202604031847\|Nonhomogeneous Poisson Process]]
- [[3 Reference/compound-poisson-process_202604031847\|Compound Poisson Process]]
