---
{"publish":true,"created":"2025-09-13T18:58:59.367+07:00","modified":"2025-09-13T01:40:38.000+07:00","published":"2025-09-13T01:40:38.000+07:00","tags":["category/exercise"],"cssclasses":"","creation-time":"2025-03-27 20:22","status":"baby","parent":["[[Time Series Analysis With Applications in R]]"]}
---


![[assets/Pasted image 20250327201755.png]]

---

## (a): Is $\{Y_t\}$ stationary when $A$ and $B$ are constants?

Suatu time series $\{Y_t\}$ dikatakan stasioner, apabila mean, variansi, dan autokovariansi independen terhadap $t$.

Karena $\{X_t\}$ random walk, maka $E(X_t) = 0$.

Sehingga, $E(Y_{t}) = E(A + Bt + X_{t}) = A + Bt$.

Karena mean ($E(Y_t)$) bergantung kepada $t$, maka $\{Y_t\}$ tidak stasioner.

## (b): Is $\{\nabla Y_t\}$ stationary when $A$ and $B$ are constants?

Hitung $\Delta Y_t$:
$$
\begin{align}
\nabla Y_t &= Y_t - Y_{t-1} \\
&= (A + Bt + X_t) - (A + B(t-1) + X_{t-1})\\
&= A + Bt + X_t - A - Bt + B - X_{t-1} \\
&= B + (X_t - X_{t-1})\\
&= B + e_t \quad (\text{Karena }X_t = X_{t-1} + e_{t})
\end{align}$$

Didapati:
- $E(\nabla Y_t) = E(B + e_t) = B + 0 = B$.
- $\operatorname{Var}(\nabla Y_t) = \operatorname{Var}(B + e_t) = \operatorname{Var}(e_t) = \sigma_e^2$.
- $\operatorname{Cov}(\nabla Y_t, \nabla Y_{t-k}) = \operatorname{Cov}(B + e_t, B + e_{t-k}) = \operatorname{Cov}(e_t, e_{t-k})$.  

Karena $\{e_t\}$ adalah white noise, $\operatorname{Cov}(e_{t}, e_{t-k}) = 0$ saat $k\neq 0$, dan $\operatorname{Var}(e_{t}) = \sigma_{e}^2$ saat $k=0$.

Karena mean, variansi, dan autokovariansi konstan, maka $\{\Delta Y_{t}\}$ stasioner.

## (c): Is $\{Y_t\}$ stationary when $A$ and $B$ are random variables independent of $\{X_t\}$?

Misal $E(A) = \mu_A$, $E(B) = \mu_B$, $\operatorname{Var}(A) = \sigma_A^2$, $\operatorname{Var}(B) = \sigma_B^2$, dan $\operatorname{Cov}(A, B) = \sigma_{AB}$.

Didapati, $E(Y_t) = E(A + Bt + X_t) = E(A) + E(B)t + E(X_t) = \mu_A + \mu_B t + X_0$.  

Karena mean konstan, maka $\{Y_t\}$ stasioner.

## (d): Is $\{\nabla Y_t\}$ stationary when $A$ and $B$ are random variables independent of $\{X_t\}$?

$$\begin{align}
\nabla Y_t &= Y_t - Y_{t-1} \\
&= (A + Bt + X_t) - (A + B(t-1) + X_{t-1}) \\
&= A + Bt + X_t - A - Bt + B - X_{t-1} \\
&= B + (X_t - X_{t-1}) \\
&= B + e_t \\
\end{align}$$

Didapati:
- $E(\nabla Y_t) = E(B + e_t) = E(B) + E(e_t) = \mu_B$
- $\operatorname{Var}(\nabla Y_t) = \operatorname{Var}(B + e_t) = \operatorname{Var}(B) + \operatorname{Var}(e_t) = \sigma_B^2 + \sigma_e^2$.
- $\operatorname{Cov}(\nabla Y_t, \nabla Y_{t-k}) = \operatorname{Cov}(B + e_t, B + e_{t-k}) = \operatorname{Cov}(B, B) + \operatorname{Cov}(e_t, e_{t-k})$.  

Karena
$$\begin{align}
	\operatorname{Cov}(B, B) &= \sigma_B^2\\
	\operatorname{Cov}(e_t, e_{t-k}) &= \begin{cases}
		0 &, k \neq 0\\
		\sigma_e^2 &, k = 0
	\end{cases}
\end{align}$$
maka,
$$
\operatorname{Cov}(\nabla Y_t, \nabla Y_{t-k}) = \begin{cases}
	\sigma_B^2 &, k = 0\\
	0 &, k \neq 0
\end{cases}
$$

Karena mean, variansi, dan autokovariansi konstan, maka $\{\nabla Y_t\}$ stasioner.
