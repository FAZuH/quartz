---
{"publish":true,"aliases":["Common Expectation and Variance Operations"],"created":"2025-08-15T13:53:58.601+07:00","modified":"2025-08-15T13:53:58.602+07:00","published":"2025-08-15T13:53:58.602+07:00","cssclasses":"","creation-time":"2025-07-22 08:54","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---


## Notation

- $X, Y, X_i$: [[3 Reference/Def-random-variable\|Random variables]]
- $a, b, c, c_i, a_i$: Constants/scalars
- $X \perp Y$: $X$ and $Y$ are [[3 Reference/Def-independent-events\|independent]]
- $\text{Cov}(X,Y)$: Covariance between $X$ and $Y$  #TODO: Create def note on covariance

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
\text{Var}(X \pm Y) &= \text{Var}(X) + \text{Var}(Y) \pm 2\text{Cov}(X,Y)\\
\text{Var}(X + Y) &= \text{Var}(X) + \text{Var}(Y) \quad \text{when } X \perp Y\\
\text{Var}(aX + bY) &= a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\text{Cov}(X,Y)\\
\end{align}
$$

## Sum of Independent Variables


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
\text{Var}(X) &= E[X^2] - (E[X])^2\\
\text{Var}(X) &= E[(X - E[X])^2]\\
\end{align}
$$

