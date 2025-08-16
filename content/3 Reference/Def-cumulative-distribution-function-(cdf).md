---
{"publish":true,"aliases":["Cumulative Distribution Function (cdf)","Cumulative Distribution Function (cdf)"],"created":"2025-08-16T00:08:21.413+07:00","modified":"2025-08-16T00:08:21.414+07:00","published":"2025-08-16T00:08:21.414+07:00","cssclasses":"","creation-time":"2025-07-15 01:38","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
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