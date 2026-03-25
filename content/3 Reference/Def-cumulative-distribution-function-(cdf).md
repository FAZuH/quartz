---
publish: true
aliases:
  - Cumulative Distribution Function (cdf)
  - cdf
created: 2026-03-25T15:22:40.599+07:00
modified: 2026-03-25T15:22:40.599+07:00
published: 2026-03-25T15:22:40.599+07:00
creation-time: 2025-07-15 01:38
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let $X$ : [[Def-random-variable|Random variable]]

If
$$
\begin{align}
F\_X(x)
&= P\_X\big((-\infty,x]\big)\\
&= P(\set{c \in \mathcal C : X(c) \leq x})\\
&= P(X\leq x)\\
&= \int\_{-\infty}^x f\_X(t)\ dt
\end{align}
$$

Then we say $F\_{X}(x)$ is the **cumulative distribution function** (cdf) of $X$.

## Remark

We often shorten

- $P({ c\in \mathcal{C}:X(c)\leq x })$ to $P(X\leq x)$
- "Cumulative distribution function" to "**distribution function**" or "**cdf**"
