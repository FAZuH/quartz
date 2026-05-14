---
publish: true
aliases:
  - Linear Growth Model with Immigration
created: 2026-05-08T05:33:03.417+07:00
modified: 2026-05-08T05:33:03.417+07:00
published: 2026-05-08T05:33:03.417+07:00
cssclasses: ""
creation-time: 2026-05-08 05:19
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Example

Consider a population model with the following rates:

$$\mu_n = n\mu, \quad n \geq 1$$
$$\lambda_n = n\lambda + \theta, \quad n \geq 0$$

This is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] where:
- Each individual gives birth at rate $\lambda$ (total: $n\lambda$)
- There is an external immigration source at rate $\theta$
- Each individual dies at rate $\mu$ (total: $n\mu$)

## Expected Population Size

Let $X(t)$ be the population size at time $t$ with $X(0) = i$, and $M(t) = \mathbb{E}[X(t)]$.

Given $X(t)$, the population at $t + h$ behaves as:

$$X(t+h) = \begin{cases} X(t) + 1, & \text{w.p. } [\theta + X(t)\lambda]h + o(h) \\ X(t) - 1, & \text{w.p. } X(t)\mu h + o(h) \\ X(t), & \text{w.p. } 1 - [\theta + X(t)(\lambda + \mu)]h + o(h) \end{cases}$$

Taking expectations yields the differential equation:

$$M'(t) = (\lambda - \mu)M(t) + \theta$$

## Solution (when $\lambda \neq \mu$)

$$M(t) = \frac{\theta}{\lambda - \mu}\left[e^{(\lambda-\mu)t} - 1\right] + i e^{(\lambda-\mu)t}$$

## Solution (when $\lambda = \mu$)

$$M(t) = \theta t + i$$

> [!TIP] Interpretation
> When $\lambda > \mu$, the population grows exponentially. When $\lambda = \mu$, growth is linear (driven only by immigration). When $\lambda < \mu$, the population eventually stabilizes around $\theta/(\mu - \lambda)$.

## Related

- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]