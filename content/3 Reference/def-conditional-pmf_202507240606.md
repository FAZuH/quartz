---
publish: true
aliases:
  - Conditional pmf
created: 2026-03-25T15:22:40.594+07:00
modified: 2026-03-25T15:22:40.594+07:00
published: 2026-03-25T15:22:40.594+07:00
creation-time: 2025-07-24 06:06
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X\_{1},X\_{2}$ : [[Def-discrete-random-variable|Discrete random variables]], with
  - $S\_{X\_{1}}$ : [[Def-support-of-discrete-random-variable|Support]] of $X\_{1}$
  - $S\_{X\_{2}}$ : [[Def-support-of-discrete-random-variable|Support]] of $X\_{2}$
  - [[def-random-vector_202507171028#Joint probability mass function (pmf)|Joint pmf]] $p\_{X\_{1}},p\_{X\_{2}}(x\_{1},x\_{2})$, positive on support $\mathcal{S}$, zero elsewhere
- $p\_{X\_{1}}(x\_{1})$ : Marginal pmf of $X\_{1}$
- $p\_{X\_{2}}(x\_{2})$ : Marginal pmf of $X\_{2}$

Suppose $x\_{1}\in S\_{X\_{1}}$; hence, $p\_{X\_{1}}(x\_{1})>0$

Then by [[def-conditional-probability|conditional probability]],
$$
\begin{align}
p(X\_{2}=x\_{2}|X\_{1}=x\_{1}) & = \frac{P(X\_{1}=x\_{1},X\_{2}=x\_{2})}{P(X\_{1}=x\_{1})} \\
& = \frac{p\_{X\_{1},X\_{2}}(x\_{1},x\_{2})}{p\_{X\_{1}}(x\_{1})},\quad \forall x\_{2}\in S\_{X\_{2}} \\
\end{align}
$$

And

- We denote $$
  p\_{X\_{2}|X\_{1}}(x\_{2}|x\_{1}) = \frac{p\_{X\_{1},X\_{2}}(x\_{1},x\_{2})}{p\_{X\_{1}}(x\_{1})}, \quad x\_{2}\in S\_{X\_{2}}
  $$
- We call $p\_{X\_{2}|X\_{1}}(x\_{2}|x\_{2})$ the **conditional pmf** of $X\_{2}$ given that $X\_{1}=x\_{1}$

## Remark

Notice that $\forall x\_{1}\in S\_{X\_{1}}$,

1. $p\_{X\_{2}|X\_{1}}(x\_{2}|x\_{1})$ is nonnegative
2. $$
   \begin{align}
   \sum\_{x\_{2}}p\_{X\_{2}|X\_{1}}(x\_{2}|x\_{1}) & = \sum\_{x\_{2}} \frac{p\_{X\_{1},X\_{2}}(x\_{1},x\_{2})}{p\_{X\_{1}}(x\_{1})} \\
   & = \frac{1}{p\_{X\_{1}}(x\_{1})} \sum\_{x\_{2}} p\_{X\_{1},X\_{2}}(x\_{1},x\_{2}) \\
   & = \frac{p\_{X\_{1}}(x\_{1})}{p\_{X\_{1}}(x\_{2})} \\
   & = 1
   \end{align}
   $$

Therefore, $p\_{X\_{2}|X\_{1}}(x\_{2},x\_{1})$ is satisfies [[Def-probability-mass-function-(pmf)#Properties of pmfs|properties of pmfs]]
