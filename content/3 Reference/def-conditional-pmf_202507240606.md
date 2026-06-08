---
publish: true
aliases:
  - Conditional pmf
created: 2026-04-09T23:07:39.112+07:00
modified: 2026-04-09T23:07:39.113+07:00
published: 2026-04-09T23:07:39.113+07:00
creation-time: 2025-07-24 06:06
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X_{1},X_{2}$ : [[Def-discrete-random-variable|Discrete random variables]], with
  - $S_{X_{1}}$ : [[Def-support-of-discrete-random-variable|Support]] of $X_{1}$
  - $S_{X_{2}}$ : [[Def-support-of-discrete-random-variable|Support]] of $X_{2}$
  - [[def-random-vector_202507171028#Joint probability mass function (pmf)|Joint pmf]] $p_{X_{1}},p_{X_{2}}(x_{1},x_{2})$, positive on support $\mathcal{S}$, zero elsewhere
- $p_{X_{1}}(x_{1})$ : Marginal pmf of $X_{1}$
- $p_{X_{2}}(x_{2})$ : Marginal pmf of $X_{2}$

Suppose $x_{1}\in S_{X_{1}}$; hence, $p_{X_{1}}(x_{1})>0$

Then by [[def-conditional-probability|conditional probability]],

$$
\begin{align}
p(X_{2}=x_{2}|X_{1}=x_{1}) & = \frac{P(X_{1}=x_{1},X_{2}=x_{2})}{P(X_{1}=x_{1})} \\
 & = \frac{p_{X_{1},X_{2}}(x_{1},x_{2})}{p_{X_{1}}(x_{1})},\quad \forall x_{2}\in S_{X_{2}} \\
\end{align}
$$

And

- We denote \$\$
  p\_{X\_{2}|X\_{1}}(x\_{2}|x\_{1}) = \frac{p\_{X\_{1},X\_{2}}(x\_{1},x\_{2})}{p\_{X\_{1}}(x\_{1})}, \quad x\_{2}\in S\_{X\_{2}}

$$$
- We call $p_{X_{2}|X_{1}}(x_{2}|x_{2})$ the **conditional pmf** of $X_{2}$ given that $X_{1}=x_{1}$

## Remark
Notice that $\forall x_{1}\in S_{X_{1}}$, 
1. $p_{X_{2}|X_{1}}(x_{2}|x_{1})$ is nonnegative
2. $$
\begin{align}
\sum_{x_{2}}p_{X_{2}|X_{1}}(x_{2}|x_{1}) & = \sum_{x_{2}} \frac{p_{X_{1},X_{2}}(x_{1},x_{2})}{p_{X_{1}}(x_{1})} \\
 & = \frac{1}{p_{X_{1}}(x_{1})} \sum_{x_{2}} p_{X_{1},X_{2}}(x_{1},x_{2}) \\
 & = \frac{p_{X_{1}}(x_{1})}{p_{X_{1}}(x_{2})} \\
 & = 1
\end{align}
$$$

Therefore, $p_{X_{2}|X_{1}}(x_{2},x_{1})$ is satisfies [[Def-probability-mass-function-(pmf)#Properties of pmfs|properties of pmfs]]
