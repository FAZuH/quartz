---
{"publish":true,"aliases":"Definition of Cumulative Distribution Function (cdf) Cumulative Distribution Function (cdf)","cssclasses":""}
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