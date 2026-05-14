---
publish: true
aliases:
  - CTMC Transition Time Distribution
created: 2026-05-08T05:33:03.409+07:00
modified: 2026-05-08T05:33:03.410+07:00
published: 2026-05-08T05:33:03.410+07:00
cssclasses: ""
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Properties

Let $T_i$ denote the amount of time that a continuous-time Markov chain $\{X(t) : t \geq 0\}$ stays in state $i$ before making a transition to a different state.

$T_i$ satisfies the **memoryless property**:

$$\Pr\{T_i > t + s \mid T_i > s\} = \Pr\{T_i > t\}, \quad \forall s, t \geq 0$$

By the [[3 Reference/def-markov-property_202603280803\|Markov Property]] and the homogeneity of the CTMC:

$$
\begin{aligned}
\Pr\{T_i > t + s \mid T_i > s\}
&= \Pr\{X(0, t+s] = i \mid X[0, s] = i\} \\
&= \Pr\{X(s, t+s] = i \mid X[0, s] = i\} \\
&= \Pr\{X(s, t+s] = i \mid X(s) = i\} \\
&= \Pr\{X(0, t] = i \mid X(0) = i\} \\
&= \Pr\{T_i > t\}
\end{aligned}
$$

Since $T_i$ is memoryless, it must be **exponentially distributed**:

$$T_i \sim \text{Exp}(\nu_i)$$

where $\nu_i$ is the **transition rate** out of state $i$.

> [!TIP] Interpretation
> The exponential transition time is a **fundamental property** of CTMCs. It follows directly from the Markovian assumption: the probability that the process stays in state $i$ for at least $t$ more time units is independent of how long it has already been in that state.

## Implications

- The probability that the process leaves state $i$ in a small time interval $h$ is approximately $\nu_i h$.
- The mean sojourn time in state $i$ is $\mathbb{E}[T_i] = 1/\nu_i$.
- The exponential distribution's memoryless property is what makes CTMCs analytically tractable.

## Related

- [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]
- [[3 Reference/memoryless-property_202604031840\|Memoryless Property]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]