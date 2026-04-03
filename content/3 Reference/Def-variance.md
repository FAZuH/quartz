---
publish: true
aliases:
  - Variance
  - Variance
created: 2026-03-25T15:22:40.613+07:00
modified: 2026-03-25T15:22:40.613+07:00
published: 2026-03-25T15:22:40.613+07:00
cssclasses: ""
creation-time: 2025-07-15 06:54
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition
Let
- $X$ : [[3 Reference/Def-random-variable\|Random variable]], with
	- Finite [[3 Reference/Def-mean\|mean]] $\mu$
	- Finite $E[(X-\mu)^2]$

If
$$
\sigma^2=\operatorname{Var}(X) = E[(X-\mu)^2]
$$

Then we say $\sigma^2$ is the **variance** of $X$

## Remark
The variance is often referred to as the **second [[3 Reference/Def-moments\|moment]]** (about $\mu$) of a random variable.

An important equation on the second moment (about 0) can be obtained from the variance and mean of $X$.

$$
\begin{align}
\operatorname{Var}(X)  & = E[(X - \mu)^2] \\
& = E[X^2 - 2\mu X + \mu^2] \\
& = E(X^2) - 2\mu E(X) + \mu^2 \\
& = E(X^2) - 2\mu^2 + \mu^2 = E(X^2) - \mu^2 \\ \\

E(X^2) & = \operatorname{Var}(X) + \mu^2  \\
& = \operatorname{Var}(X) + [E(X)]^2
\end{align}
$$

## Related theorems
- [[3 Reference/mathstat1.9#Theorem 1.9.1 Constant multiplication and addition with variance\|Constant multiplication and addition with vairance]]