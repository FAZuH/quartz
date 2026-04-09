---
publish: true
aliases:
  - Cumulative Distribution Function (cdf)
  - cdf
created: 2026-04-09T23:07:39.124+07:00
modified: 2026-04-09T23:07:39.125+07:00
published: 2026-04-09T23:07:39.125+07:00
cssclasses: ""
creation-time: 2025-07-15 01:38
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Definition
Let $X$ : [[3 Reference/Def-random-variable\|Random variable]]

If
$$
\begin{align}
F_X(x)
&= P_X\big((-\infty,x]\big)\\
&= P(\set{c \in \mathcal C : X(c) \leq x})\\
&= P(X\leq x)\\
&= \int_{-\infty}^x f_X(t)\ dt
\end{align}
$$

Then we say $F_{X}(x)$ is the **cumulative distribution function** (cdf) of $X$.

## Remark
We often shorten
- $P(\{ c\in \mathcal{C}:X(c)\leq x \})$ to $P(X\leq x)$
- "Cumulative distribution function" to "**distribution function**" or "**cdf**"