---
publish: true
aliases:
  - Common Expectation and Variance Operations
created: 2026-03-25T15:22:40.615+07:00
modified: 2026-03-25T15:22:40.615+07:00
published: 2026-03-25T15:22:40.615+07:00
creation-time: 2025-07-22 08:54
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Notation

- $X, Y, Z, X\_i$: [[Def-random-variable|Random variables]]
- $a, b, c, c\_i, a\_i$: Constants/scalars
- $X \perp Y$: $X$ and $Y$ are [[Def-independent-events|independent]]
- $\text{Cov}(X,Y)$: Covariance between $X$ and $Y$  #TODO: Create def note on covariance

## Basic Operations

$$
\begin{align}
E\[c] &= c \\
E\[X \pm c] &= E\[X] \pm c \\
E\[cX] &= cE\[X] \ \\
\text{Var}(X \pm c) &= \text{Var}(X) \\
\text{Var}(cX) &= c^2\text{Var}(X) \\
\end{align}
$$

## Multiple Random Variables

$$
\begin{align}
E\[X \pm Y] &= E\[X] \pm E\[Y] \\
E\[aX + bY] &= aE\[X] + bE\[Y] \ \\

E\[XY]  & = E\[X]E\[Y] \ \\

\text{Var}(X \pm Y) &= \text{Var}(X) + \text{Var}(Y) \pm 2\text{Cov}(X,Y)\\
\text{Var}(X + Y) &= \text{Var}(X) + \text{Var}(Y) \quad \text{when } X \perp Y\\
\text{Var}(aX + bY) &= a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\text{Cov}(X,Y)\\
\end{align}
$$

## Sum of Variables

$$
\begin{align}
E\left\[\sum\_{i=1}^n X\_i\right] &= \sum\_{i=1}^n E\[X\_i] \\
E\left\[\sum\_{i=1}^n c\_iX\_i\right] &= \sum\_{i=1}^n c\_iE\[X\_i] \ \\
\text{Var}\left(\sum\_{i=1}^n a\_iX\_i\right) &= \sum\_{i=1}^n a\_i^2\text{Var}(X\_i) + 2\sum\_{i\<j} a\_ia\_j\text{Cov}(X\_i,X\_j)\\
\text{Var}\left(\sum\_{i=1}^n c\_iX\_i\right) &= \sum\_{i=1}^n c\_i^2\text{Var}(X\_i) \quad \text{when all } X\_i \text{ are independent}
\end{align}
$$

## Special Formulas

$$
\begin{align}
\text{Var}(X) &= E\[X^2] - (E\[X])^2\\
\text{Var}(X) &= E\[(X - E\[X])^2]\\
\end{align}
$$

## Covariance

$$
\begin{align}
\text{Cov}(X,Y) &= E\[(X - E\[X])(Y - E\[Y])] \\
\text{Cov}(X,Y) &= E\[XY] - E\[X]E\[Y] \\
\text{Cov}(X+Y, Z) & = \text{Cov}(X,Z) + \text{Cov}(Y,Z) \\
\text{Cov}(X,X) &= \text{Var}(X) \\
\text{Cov}(X,Y) &= 0 \quad \text{when } X \perp Y \\
\text{Cov}(aX, bY) &= ab,\text{Cov}(X,Y) \\
\text{Cov}(X+a, Y+b) &= \text{Cov}(X,Y) \\
\text{Cov}(X,Y) &= \text{Cov}(Y,X)
\end{align}
$$
