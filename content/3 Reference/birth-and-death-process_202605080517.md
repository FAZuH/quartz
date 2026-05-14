---
publish: true
aliases:
  - Birth and Death Process
created: 2026-05-08T05:33:03.398+07:00
modified: 2026-05-08T05:33:03.399+07:00
published: 2026-05-08T05:33:03.399+07:00
cssclasses: ""
creation-time: 2026-05-08 05:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

Consider a system whose state at any time is the number of people in the system. A **Birth and Death Process** is a [[3 Reference/continuous-time-markov-chain_202605080515\|CTMC]] with states $\{0, 1, 2, \ldots\}$ where:

- When $n$ people are in the system, new arrivals enter at exponential rate $\lambda_n$ (birth rate)
- People leave at exponential rate $\mu_n$ (death rate)
- Birth and death occur **independently**

Transitions can only go from state $n$ to $n+1$ (birth) or $n-1$ (death):

$$\Pr\{X(t+h) = n+1 \mid X(t) = n\} = \lambda_n h + o(h)$$
$$\Pr\{X(t+h) = n-1 \mid X(t) = n\} = \mu_n h + o(h)$$
$$\Pr\{X(t+h) = n \mid X(t) = n\} = 1 - (\lambda_n + \mu_n)h + o(h)$$

> [!TIP] Interpretation
> Think of a population: births increase the count, deaths decrease it. The time between events is exponential, and the next event is either a birth or a death, depending on competing exponentials.

## Transition Parameters

The state transition rates and probabilities:

$$\begin{aligned}
\nu_0 &= \lambda_0, & \nu_i &= \lambda_i + \mu_i \quad (i > 0) \\
P_{0,1} &= 1 \\
P_{i,i+1} &= \frac{\lambda_i}{\lambda_i + \mu_i}, & P_{i,i-1} &= \frac{\mu_i}{\lambda_i + \mu_i} \quad (i > 0)
\end{aligned}$$

The probability of birth before death at state $i$ follows from the minimum of independent exponentials: $\Pr\{T_i^{(b)} < T_i^{(d)}\} = \lambda_i / (\lambda_i + \mu_i)$.

## Special Cases
- **Pure Birth Process**: $\mu_n = 0$ for all $n$
- **Pure Death Process**: $\lambda_n = 0$ for all $n$
- **Poisson Process**: $\lambda_n = \lambda$, $\mu_n = 0$
- **Yule Process**: $\lambda_n = n\lambda$, $\mu_n = 0$

## Related

- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/pure-birth-process_202605080516\|Pure Birth Process]]
- [[3 Reference/yule-process_202605080517\|Yule Process]]
- [[3 Reference/birth-and-death-queueing-models_202605080521\|Birth and Death Queueing Models]]