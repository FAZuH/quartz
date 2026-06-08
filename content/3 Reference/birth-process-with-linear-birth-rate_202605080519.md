---
publish: true
aliases:
  - Birth Process with Linear Birth Rate
created: 2026-05-08T05:33:03.402+07:00
modified: 2026-06-05T03:02:08.407+07:00
published: 2026-06-05T03:02:08.407+07:00
creation-time: 2026-05-08 05:19
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Example

Consider a population whose members can give birth to new members but cannot die. Each member acts independently and takes an exponentially distributed amount of time with mean $1/\lambda$ to give birth.

Let $X(t)$ be the population size at time $t$. Then $\{X(t), t \geq 0\}$ is a [[pure-birth-process_202605080516|pure birth process]] with:

$\lambda_n = n\lambda, \quad n \geq 0$

This follows because if the population has $n$ persons and each gives birth at exponential rate $\lambda$, the **total birth rate** is $n\lambda$ (sum of $n$ independent exponentials).

This is known as a [[yule-process_202605080517|Yule Process]].

> [!NOTE]- Calculation
> Given a pure birth process with $X(0) = 0$ and birth parameters: $\lambda_0 = 1$, $\lambda_1 = 3$, $\lambda_2 = 2$, $\lambda_3 = 5$. Let $W_3$ be the time to reach state 3 and $T_i$ the sojourn time of the $i$-th birth.
>
> **(a)** $\mathbb{E}[W_3] = \mathbb{E}[T_1 + T_2 + T_3] = \frac{1}{\lambda_1} + \frac{1}{\lambda_2} + \frac{1}{\lambda_3} = 1 + \frac{1}{3} + \frac{1}{2} = \frac{11}{6}$
>
> **(b)** $\mathbb{E}[W_1 + W_2 + W_3] = 2\mathbb{E}[T_1] + \mathbb{E}[T_2] + \mathbb{E}[W_3] = \frac{2}{1} + \frac{1}{3} + \frac{11}{6} = \frac{25}{6}$
>
> **(c)** $\operatorname{Var}(W_3) = \operatorname{Var}(T_1 + T_2 + T_3) = \frac{1}{\lambda_1^2} + \frac{1}{\lambda_2^2} + \frac{1}{\lambda_3^2} = 1 + \frac{1}{9} + \frac{1}{4} = \frac{49}{36}$

## Related

- [[pure-birth-process_202605080516|Pure Birth Process]]
- [[yule-process_202605080517|Yule Process]]
