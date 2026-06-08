---
publish: true
aliases:
  - Expected Time to Extinction
created: 2026-05-08T06:23:06.532+07:00
modified: 2026-06-05T03:11:37.061+07:00
published: 2026-06-05T03:11:37.061+07:00
creation-time: 2026-05-08 06:19
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

The **expected time to extinction** $\tau_m = \mathbb{E}[T_{0,m}]$ is the expected time for a [[birth-and-death-process_202605080517|birth and death process]] to reach state $0$ starting from state $m$.

> **Theorem 6.3 (Allen).** Suppose $\lambda_0 = \mu_0 = 0$ and $\lambda_i, \mu_i > 0$ for $i \geq 1$, with $\lim_{t \to \infty} p_0(t) = 1$ (certain extinction). Then:

$\tau_m = \begin{cases} \displaystyle\frac{1}{\mu_1} + \sum_{i=2}^{\infty} \frac{\lambda_1\cdots\lambda_{i-1}}{\mu_1\cdots\mu_i}, & m = 1 \\[1.5em] \displaystyle\tau_1 + \sum_{s=1}^{m-1} \left[ \frac{\mu_1\cdots\mu_s}{\lambda_1\cdots\lambda_s} \sum_{i=s+1}^{\infty} \frac{\lambda_1\cdots\lambda_{i-1}}{\mu_1\cdots\mu_i} \right], & m = 2, 3, \ldots \end{cases}$

> [!TIP] Interpretation
> The expected extinction time decomposes as: time to go from 1 to 0, plus the time to regress from each higher state. The double sum accounts for the possibility of moving up before moving down.

## For Finite State Space $\{0, 1, \ldots, N\}$

Replace $\infty$ with $N$ in the formulas above, or solve the linear system:

$D\boldsymbol{\tau} = \mathbf{d}$

where $D$ is the $N \times N$ tridiagonal matrix of birth-death rates and $\mathbf{d} = (-1, -1, \ldots, -1)^T$.

## Recursive Formula for First Passage Times

For moving upward ($i \to i+1$):

$\mathbb{E}[T_{i+1,i}] = \frac{1}{\lambda_i} + \frac{\mu_i}{\lambda_i} \mathbb{E}[T_{i,i-1}]$

For moving downward ($i \to i-1$):

$\mathbb{E}[T_{i-1,i}] = \frac{1}{\mu_i} + \frac{\lambda_i}{\mu_i} \mathbb{E}[T_{i,i+1}]$

> [!NOTE]- Example: Simple Birth and Death Process
> For $\lambda_i = \lambda i$, $\mu_i = \mu i$ with $\lambda < \mu$ (certain extinction):
>
> $\tau_1 = -\frac{1}{\lambda} \ln\left(1 - \frac{\lambda}{\mu}\right)$

## Related

- [[probability-of-population-extinction_202605080618|Probability of Population Extinction]]
- [[birth-and-death-process_202605080517|Birth and Death Process]]
- [[stochastic-logistic-growth-process_202605080619|Stochastic Logistic Growth Process]]
