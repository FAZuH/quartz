---
publish: true
aliases:
  - Pure Birth Process
created: 2026-05-08T05:33:03.430+07:00
modified: 2026-05-21T20:59:46.584+07:00
published: 2026-05-21T20:59:46.584+07:00
cssclasses: ""
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Pure Birth Process** is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] where $\mu_n = 0$ for all $n$ (no deaths occur).

The process only moves from state $n$ to state $n+1$ with birth rate $\lambda_n$. The transition rates are:

$$\Pr\{X(t+h) = n+1 \mid X(t) = n\} = \lambda_n h + o(h)$$
$$\Pr\{X(t+h) = n \mid X(t) = n\} = 1 - \lambda_n h + o(h)$$

> [!TIP] Interpretation
> A pure birth process models a population or system that only grows over time—members can be added but never removed. The Poisson process is the simplest case where $\lambda_n = \lambda$ (constant birth rate).

## Special Cases

- **Poisson Process**: $\lambda_n = \lambda$ for all $n$ (constant rate)
- **Yule Process**: $\lambda_n = n\lambda$ (linear rate, each member gives birth independently)

## Related

- [[3 Reference/poisson-process_202604031845\|Poisson Process]]
- [[3 Reference/yule-process_202605080517\|Yule Process]]
- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2024 No. 2.** Pure birth process dari $X(0)=0$ dengan $\lambda_0 = 1$, $\lambda_1 = 3$, $\lambda_2 = 2$, $\lambda_3 = 5$.

(a) Tentukan $\mathbb{E}[W_3]$ dan $\text{Var}(W_3)$.

> **Jawaban:** $W_3 = T_0 + T_1 + T_2$ dengan $T_i \sim \text{Exp}(\lambda_i)$. $\mathbb{E}[W_3] = \frac{1}{1} + \frac{1}{3} + \frac{1}{2} = \frac{11}{6}$. $\text{Var}(W_3) = \frac{1}{1^2} + \frac{1}{3^2} + \frac{1}{2^2} = \frac{49}{36}$.

(b) Tentukan mean dari $W_1 + W_2 + W_3$.

> **Jawaban:** $\mathbb{E}[W_1 + W_2 + W_3] = (\frac{1}{1}) + (\frac{1}{1} + \frac{1}{3}) + (\frac{1}{1} + \frac{1}{3} + \frac{1}{2}) = 1 + \frac{4}{3} + \frac{11}{6} = \frac{6+8+11}{6} = \frac{25}{6}$.