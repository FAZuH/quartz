---
publish: true
created: 2026-03-25T15:22:40.625+07:00
modified: 2026-03-25T15:22:40.626+07:00
published: 2026-03-25T15:22:40.626+07:00
tags:
  - category/exercise
creation-time: 2025-03-27 20:22
status: in progress
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

![[assets/Pasted image 20250327201755.png]]

---

## (a): Is ${Y\_t}$ stationary when $A$ and $B$ are constants?

Suatu time series ${Y\_t}$ dikatakan stasioner, apabila mean, variansi, dan autokovariansi independen terhadap $t$.

Karena ${X\_t}$ random walk, maka $E(X\_t) = 0$.

Sehingga, $E(Y\_{t}) = E(A + Bt + X\_{t}) = A + Bt$.

Karena mean ($E(Y\_t)$) bergantung kepada $t$, maka ${Y\_t}$ tidak stasioner.

## (b): Is ${\nabla Y\_t}$ stationary when $A$ and $B$ are constants?

Hitung $\Delta Y\_t$:
$$
\begin{align}
\nabla Y\_t &= Y\_t - Y\_{t-1} \\
&= (A + Bt + X\_t) - (A + B(t-1) + X\_{t-1})\\
&= A + Bt + X\_t - A - Bt + B - X\_{t-1} \\
&= B + (X\_t - X\_{t-1})\\
&= B + e\_t \quad (\text{Karena }X\_t = X\_{t-1} + e\_{t})
\end{align}$$

Didapati:

- $E(\nabla Y\_t) = E(B + e\_t) = B + 0 = B$.
- $\operatorname{Var}(\nabla Y\_t) = \operatorname{Var}(B + e\_t) = \operatorname{Var}(e\_t) = \sigma\_e^2$.
- $\operatorname{Cov}(\nabla Y\_t, \nabla Y\_{t-k}) = \operatorname{Cov}(B + e\_t, B + e\_{t-k}) = \operatorname{Cov}(e\_t, e\_{t-k})$.

Karena ${e\_t}$ adalah white noise, $\operatorname{Cov}(e\_{t}, e\_{t-k}) = 0$ saat $k\neq 0$, dan $\operatorname{Var}(e\_{t}) = \sigma\_{e}^2$ saat $k=0$.

Karena mean, variansi, dan autokovariansi konstan, maka ${\Delta Y\_{t}}$ stasioner.

## (c): Is ${Y\_t}$ stationary when $A$ and $B$ are random variables independent of ${X\_t}$?

Misal $E(A) = \mu\_A$, $E(B) = \mu\_B$, $\operatorname{Var}(A) = \sigma\_A^2$, $\operatorname{Var}(B) = \sigma\_B^2$, dan $\operatorname{Cov}(A, B) = \sigma\_{AB}$.

Didapati, $E(Y\_t) = E(A + Bt + X\_t) = E(A) + E(B)t + E(X\_t) = \mu\_A + \mu\_B t + X\_0$.

Karena mean konstan, maka ${Y\_t}$ stasioner.

## (d): Is ${\nabla Y\_t}$ stationary when $A$ and $B$ are random variables independent of ${X\_t}$?

$$\begin{align}
\nabla Y\_t &= Y\_t - Y\_{t-1} \\
&= (A + Bt + X\_t) - (A + B(t-1) + X\_{t-1}) \\
&= A + Bt + X\_t - A - Bt + B - X\_{t-1} \\
&= B + (X\_t - X\_{t-1}) \\
&= B + e\_t \\
\end{align}$$

Didapati:

- $E(\nabla Y\_t) = E(B + e\_t) = E(B) + E(e\_t) = \mu\_B$
- $\operatorname{Var}(\nabla Y\_t) = \operatorname{Var}(B + e\_t) = \operatorname{Var}(B) + \operatorname{Var}(e\_t) = \sigma\_B^2 + \sigma\_e^2$.
- $\operatorname{Cov}(\nabla Y\_t, \nabla Y\_{t-k}) = \operatorname{Cov}(B + e\_t, B + e\_{t-k}) = \operatorname{Cov}(B, B) + \operatorname{Cov}(e\_t, e\_{t-k})$.

Karena
$$\begin{align}
\operatorname{Cov}(B, B) &= \sigma\_B^2\\
\operatorname{Cov}(e\_t, e\_{t-k}) &= \begin{cases}
0 &, k \neq 0\\
\sigma\_e^2 &, k = 0
\end{cases}
\end{align}$$
maka,
$$
\operatorname{Cov}(\nabla Y\_t, \nabla Y\_{t-k}) = \begin{cases}
\sigma\_B^2 &, k = 0\\
0 &, k \neq 0
\end{cases}
$$

Karena mean, variansi, dan autokovariansi konstan, maka ${\nabla Y\_t}$ stasioner.
