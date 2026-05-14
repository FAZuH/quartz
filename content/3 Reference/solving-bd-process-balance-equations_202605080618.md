---
publish: true
aliases:
  - Solving BD Process Balance Equations
created: 2026-05-08T06:23:06.543+07:00
modified: 2026-05-08T06:23:06.544+07:00
published: 2026-05-08T06:23:06.544+07:00
cssclasses: ""
creation-time: 2026-05-08 06:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Procedure

For a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] with birth rates $\lambda_n$ and death rates $\mu_n$, the [[3 Reference/ctmc-balance-equations_202605080617\|balance equations]] simplify to a recursive solution.

## Balance Equations for B/D Process

| State | Balance Equation |
|-------|------------------|
| 0 | $\lambda_0 \pi_0 = \mu_1 \pi_1$ |
| $n \geq 1$ | $(\lambda_n + \mu_n)\pi_n = \mu_{n+1}\pi_{n+1} + \lambda_{n-1}\pi_{n-1}$ |

By adding each equation to the preceding one, we obtain the simplified form:

$$\lambda_n \pi_n = \mu_{n+1} \pi_{n+1}, \quad n \geq 0$$

## Recursive Solution

### Step 1: Express in terms of $\pi_0$

$$\begin{aligned} \pi_0 &= \pi_0 \\ \pi_1 &= \frac{\lambda_0}{\mu_1}\pi_0 \\ \pi_2 &= \frac{\lambda_1}{\mu_2}\pi_1 = \frac{\lambda_1\lambda_0}{\mu_2\mu_1}\pi_0 \\ \pi_n &= \frac{\lambda_{n-1}}{\mu_n}\pi_{n-1} = \frac{\lambda_0\lambda_1 \cdots \lambda_{n-1}}{\mu_1\mu_2 \cdots \mu_n}\pi_0 \end{aligned}$$

### Step 2: Normalize

Using $\sum_{n=0}^{\infty} \pi_n = 1$:

$$\pi_0 = \frac{1}{1 + \sum_{n=1}^{\infty} \frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}}$$

### Step 3: Final Solution

$$\pi_n = \frac{\frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}}{1 + \sum_{k=1}^{\infty} \frac{\lambda_0\lambda_1\cdots\lambda_{k-1}}{\mu_1\mu_2\cdots\mu_k}}, \quad n \geq 1$$

## Existence Condition

Limit probabilities exist if and only if:

$$\sum_{n=1}^{\infty} \frac{\lambda_0\lambda_1 \cdots \lambda_{n-1}}{\mu_1\mu_2 \cdots \mu_n} < \infty$$

> [!NOTE]
> For irreducible B/D processes, the embedded MC can be argued to be positive recurrent. However, in practice, we solve the balance equations directly and determine the convergence condition.

## Related

- [[3 Reference/ctmc-balance-equations_202605080617\|CTMC Balance Equations]]
- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/birth-and-death-queueing-models_202605080521\|Birth and Death Queueing Models]]