---
{"publish":true,"created":"2025-07-24T11:50:56.258+07:00","modified":"2025-07-24T11:50:56.259+07:00","published":"2025-07-24T11:50:56.259+07:00","cssclasses":"","creation-time":"2025-03-27 21:03","status":"baby","tags":null,"parent":["[[time series analysis]]"]}
---


![[Assets/Pasted image 20250327221126.png]]

---

## Part (a): Derive an equation similar to Equation (5.1.3)

Misal $|\phi| > 1$.

Mulai dengan $Y_t = \phi Y_{t-1} + e_t$ dan $Y_0 = 0$. Didapati,
- $Y_t = \phi Y_{t-1} + e_t$
- $Y_{t-1} = \phi Y_{t-2} + e_{t-1}$,
	jadi $$\begin{align}
	Y_t &= \phi (\phi Y_{t-2} + e_{t-1}) + e_t \\
	&= \phi^2 Y_{t-2} + \phi e_{t-1} + e_t
	\end{align}$$
- $Y_{t-2} = \phi Y_{t-3} + e_{t-2}$
	jadi $$\begin{align}
	Y_t &= \phi^2 (\phi Y_{t-3} + e_{t-2}) + \phi e_{t-1} + e_t \\
	&= \phi^3 Y_{t-3} + \phi^2 e_{t-2} + \phi e_{t-1} + e_t
	\end{align}$$

Selanjutnya saat $t = 1$ dengan $Y_1 = \phi Y_0 + e_1 = \phi \cdot 0 + e_1 = e_1$ dan $Y_0 = 0$. Didapati:
$$\begin{align}
Y_t &= e_t + \phi e_{t-1} + \phi^2 e_{t-2} + \cdots + \phi^{t-1} e_1 + \phi^t Y_0\\
&= e_t + \phi e_{t-1} + \phi^2 e_{t-2} + \cdots + \phi^{t-1} e_1 \\
&= \sum_{j=0}^{t-1} \phi^j e_{t-j}
\end{align}$$

## Part (b): Derive an equation similar to Equation (5.1.4)

Misal $|\phi| > 1$.

Dengan $Y_t = \sum_{j=0}^{t-1}\phi^j e_{t-j}$ dari (a), dan karena $\{e_t\}$ adalah white noise, didapati:

$$
\begin{align}
\operatorname{Var}(Y_t) &= \operatorname{Var}\left( \sum_{j=0}^{t-1} \phi^j e_{t-j} \right) \\
&= \sum_{j=0}^{t-1} \operatorname{Var}(\phi^j e_{t-j}) \\
&= \sum_{j=0}^{t-1} (\phi^j)^2 \operatorname{Var}(e_{t-j}) \\
&= \sum_{j=0}^{t-1} \phi^{2j} \sigma_e^2 \\
&= \frac{1 - \phi^{2t}}{1 - \phi^2} \quad \text{(Geometric Series)} \\
&= \frac{\phi^{2t} - 1}{\phi^2 - 1}
\end{align}
$$

## Part (c): Derive an equation similar to Equation (5.1.5)

Misal $|\phi| > 1$.

Untuk $k \geq 0$ berlaku:
- $Y_t = e_t + \phi e_{t-1} + \cdots + \phi^{t-1} e_1$
- $Y_{t-k} = e_{t-k} + \phi e_{t-k-1} + \cdots + \phi^{t-k-1} e_1$

Karena $E(Y_t) = 0$, maka $\operatorname{Cov}(Y_t, Y_{t-k}) = E(Y_t Y_{t-k})$. Sehingga didapati:  
$$\begin{align}
E(Y_t Y_{t-k}) &= E\left( \sum_{j=0}^{t-1} \phi^j e_{t-j} \sum_{i=0}^{t-k-1} \phi^i e_{t-k-i} \right) \\
\operatorname{Var}(Y_{t}, Y_{t-k})&= \sum_{j=k}^{t-1} \phi^j \phi^{j-k} \sigma_e^2 \\
&= \phi^k \sum_{j=k}^{t-1} \phi^{2(j-k)} \sigma_e^2 \\
&= \frac{\phi^{2(t-k) + k} - \phi^k}{\phi^2 - 1} \sigma_e^2 \\
&= \frac{\phi^{2t - k} - \phi^k}{\phi^2 - 1} \sigma_e^2
\end{align}$$

## Part (d): Is $\operatorname{Corr}(Y_t, Y_{t-k}) \approx 1$ for large $t$ and moderate $k$?

$$\begin{align}
\operatorname{Corr}(Y_t, Y_{t-k}) &= \frac{\operatorname{Cov}(Y_t, Y_{t-k})}{\sqrt{\operatorname{Var}(Y_t) \operatorname{Var}(Y_{t-k})}}  \\
&= \frac{\frac{\phi^{2t - k} - \phi^k}{\phi^2 - 1}}{\sqrt{\frac{\phi^{2t} - 1}{\phi^2 - 1} \cdot \frac{\phi^{2(t-k)} - 1}{\phi^2 - 1}}}  \\
&= \frac{\phi^{2t - k} - \phi^k}{\sqrt{(\phi^{2t} - 1)(\phi^{2(t-k)} - 1)}} 
\end{align}$$

Untuk $t$ besar dan $k$ moderate (tetap), karena $|\phi| > 1$, maka didapati:
- $\phi^{2t} \gg 1$, $\phi^{2t-k} \gg \phi^k$, dan $\phi^{2(t-k)} \gg 1$.
- Pembilang $\approx \phi^{2t-k}$
- Penyebut $\approx \sqrt{\phi^{2t} \phi^{2(t-k)}} = \phi^{2t - k}$.
- $\operatorname{Corr}(Y_t, Y_{t-k}) \approx \frac{\phi^{2t - k}}{\phi^{2t - k}} = 1$.
