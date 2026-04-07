---
publish: true
aliases:
  - Common Expectation and Variance Operations
created: 2026-03-25T15:22:40.615+07:00
modified: 2026-04-05T21:15:17.478+07:00
published: 2026-04-05T21:15:17.478+07:00
cssclasses: ""
creation-time: 2025-07-22 08:54
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Notation

- $X, Y, Z, X_i$: [[3 Reference/Def-random-variable\|Random variables]]
- $a, b, c, c_i, a_i$: Constants/scalars
- $X \perp Y$: $X$ and $Y$ are [[3 Reference/Def-independent-events\|independent]]
- $\text{Cov}(X,Y)$: [[3 Reference/2.5-the-correlation-coefficient_202603291924\|Covariance]] between $X$ and $Y$
- $\text{Corr}(X,Y)$: [[3 Reference/2.5-the-correlation-coefficient_202603291924\|Correlation]] between $X$ and $Y$

## Basic Operations

$$
\begin{align}
E[c] &= c \\
E[X \pm c] &= E[X] \pm c \\
E[cX] &= cE[X] \\ \\
\text{Var}(X \pm c) &= \text{Var}(X) \\
\text{Var}(cX) &= c^2\text{Var}(X) \\
\end{align}
$$

## Multiple Random Variables

$$
\begin{align}
E[X \pm Y] &= E[X] \pm E[Y] \\
E[aX + bY] &= aE[X] + bE[Y] \\ \\

E[XY]  & = E[X]E[Y] \quad \text{when } X \perp Y  \\ \\

\text{Var}(X \pm Y) &= \text{Var}(X) + \text{Var}(Y) \pm 2\text{Cov}(X,Y)\\
\text{Var}(aX + bY) &= a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\text{Cov}(X,Y)\\
\end{align}
$$

> [!tip]
> Recall $\text{Cov}(X,Y)=0$ if $X \perp Y$

## Sum of Variables


$$
\begin{align}
E\left[\sum_{i=1}^n X_i\right] &= \sum_{i=1}^n E[X_i] \\
E\left[\sum_{i=1}^n c_iX_i\right] &= \sum_{i=1}^n c_iE[X_i] \\ \\
\text{Var}\left(\sum_{i=1}^n a_iX_i\right) &= \sum_{i=1}^n a_i^2\text{Var}(X_i) + 2\sum_{i<j} a_ia_j\text{Cov}(X_i,X_j)\\
\text{Var}\left(\sum_{i=1}^n c_iX_i\right) &= \sum_{i=1}^n c_i^2\text{Var}(X_i) \quad \text{when all } X_i \text{ are independent} 
\end{align}
$$

## Special Formulas

$$
\begin{align}
\boxed{\text{Var}(X)} &= E[X^2] - E[X]^2\\
&= E[(X - E[X])^2]\\
\end{align}
$$


## Covariance

$$
\begin{align}
\boxed{\text{Cov}(X,Y)} &= E[(X - E[X])(Y - E[Y])] \\
&= E[XY] - E[X]E[Y] 
\end{align}
$$

$$
\begin{align}
\text{Cov}(X,X) &= \text{Var}(X) \\
\text{Cov}(X,Y) &= \text{Cov}(Y,X) \\
\text{Cov}(X,Y) &= 0 \quad \text{when } X \perp Y \\ \\

\text{Cov}(X\pm Y, Z) & = \text{Cov}(X,Z) \pm \text{Cov}(Y,Z) \\
\text{Cov}(aX, bY) &= ab\,\text{Cov}(X,Y) \\
\text{Cov}(X+a, Y+b) &= \text{Cov}(X,Y) \\
\end{align}
$$

## Correlation Coefficient

$$
\text{Corr}(X,Y) = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)}\sqrt{\text{Var}(Y)}}
$$

**Properties**
$$
\begin{align}
-1 \leq \text{Corr}(X,Y) &\leq 1 \\
\text{Corr}(X,Y) &= 0 \quad \text{when } X \perp Y \\
\text{Corr}(X,Y) &= \pm 1 \implies Y = a \pm bX \text{ (linear relationship)}
\end{align}
$$