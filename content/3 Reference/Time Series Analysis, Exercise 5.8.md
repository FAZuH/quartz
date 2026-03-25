---
publish: true
created: 2026-03-25T15:22:40.603+07:00
modified: 2026-03-25T15:22:40.603+07:00
published: 2026-03-25T15:22:40.603+07:00
creation-time: 2025-03-27 21:03
status: in progress
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

![[assets/Pasted image 20250327221126.png]]

---

## Part (a): Derive an equation similar to Equation (5.1.3)

Misal $|\phi| > 1$.

Mulai dengan $Y\_t = \phi Y\_{t-1} + e\_t$ dan $Y\_0 = 0$. Didapati,

- $Y\_t = \phi Y\_{t-1} + e\_t$
- $Y\_{t-1} = \phi Y\_{t-2} + e\_{t-1}$,
  jadi $$\begin{align}
  Y\_t &= \phi (\phi Y\_{t-2} + e\_{t-1}) + e\_t \\
  &= \phi^2 Y\_{t-2} + \phi e\_{t-1} + e\_t
  \end{align}$$
- $Y\_{t-2} = \phi Y\_{t-3} + e\_{t-2}$
  jadi $$\begin{align}
  Y\_t &= \phi^2 (\phi Y\_{t-3} + e\_{t-2}) + \phi e\_{t-1} + e\_t \\
  &= \phi^3 Y\_{t-3} + \phi^2 e\_{t-2} + \phi e\_{t-1} + e\_t
  \end{align}$$

Selanjutnya saat $t = 1$ dengan $Y\_1 = \phi Y\_0 + e\_1 = \phi \cdot 0 + e\_1 = e\_1$ dan $Y\_0 = 0$. Didapati:
$$\begin{align}
Y\_t &= e\_t + \phi e\_{t-1} + \phi^2 e\_{t-2} + \cdots + \phi^{t-1} e\_1 + \phi^t Y\_0\\
&= e\_t + \phi e\_{t-1} + \phi^2 e\_{t-2} + \cdots + \phi^{t-1} e\_1 \\
&= \sum\_{j=0}^{t-1} \phi^j e\_{t-j}
\end{align}$$

## Part (b): Derive an equation similar to Equation (5.1.4)

Misal $|\phi| > 1$.

Dengan $Y\_t = \sum\_{j=0}^{t-1}\phi^j e\_{t-j}$ dari (a), dan karena ${e\_t}$ adalah white noise, didapati:

$$
\begin{align}
\operatorname{Var}(Y\_t) &= \operatorname{Var}\left( \sum\_{j=0}^{t-1} \phi^j e\_{t-j} \right) \\
&= \sum\_{j=0}^{t-1} \operatorname{Var}(\phi^j e\_{t-j}) \\
&= \sum\_{j=0}^{t-1} (\phi^j)^2 \operatorname{Var}(e\_{t-j}) \\
&= \sum\_{j=0}^{t-1} \phi^{2j} \sigma\_e^2 \\
&= \frac{1 - \phi^{2t}}{1 - \phi^2} \quad \text{(Geometric Series)} \\
&= \frac{\phi^{2t} - 1}{\phi^2 - 1}
\end{align}
$$

## Part (c): Derive an equation similar to Equation (5.1.5)

Misal $|\phi| > 1$.

Untuk $k \geq 0$ berlaku:

- $Y\_t = e\_t + \phi e\_{t-1} + \cdots + \phi^{t-1} e\_1$
- $Y\_{t-k} = e\_{t-k} + \phi e\_{t-k-1} + \cdots + \phi^{t-k-1} e\_1$

Karena $E(Y\_t) = 0$, maka $\operatorname{Cov}(Y\_t, Y\_{t-k}) = E(Y\_t Y\_{t-k})$. Sehingga didapati:\
$$\begin{align}
E(Y\_t Y\_{t-k}) &= E\left( \sum\_{j=0}^{t-1} \phi^j e\_{t-j} \sum\_{i=0}^{t-k-1} \phi^i e\_{t-k-i} \right) \\
\operatorname{Var}(Y\_{t}, Y\_{t-k})&= \sum\_{j=k}^{t-1} \phi^j \phi^{j-k} \sigma\_e^2 \\
&= \phi^k \sum\_{j=k}^{t-1} \phi^{2(j-k)} \sigma\_e^2 \\
&= \frac{\phi^{2(t-k) + k} - \phi^k}{\phi^2 - 1} \sigma\_e^2 \\
&= \frac{\phi^{2t - k} - \phi^k}{\phi^2 - 1} \sigma\_e^2
\end{align}$$

## Part (d): Is $\operatorname{Corr}(Y\_t, Y\_{t-k}) \approx 1$ for large $t$ and moderate $k$?

$$\begin{align}
\operatorname{Corr}(Y\_t, Y\_{t-k}) &= \frac{\operatorname{Cov}(Y\_t, Y\_{t-k})}{\sqrt{\operatorname{Var}(Y\_t) \operatorname{Var}(Y\_{t-k})}}  \\
&= \frac{\frac{\phi^{2t - k} - \phi^k}{\phi^2 - 1}}{\sqrt{\frac{\phi^{2t} - 1}{\phi^2 - 1} \cdot \frac{\phi^{2(t-k)} - 1}{\phi^2 - 1}}}  \\
&= \frac{\phi^{2t - k} - \phi^k}{\sqrt{(\phi^{2t} - 1)(\phi^{2(t-k)} - 1)}}
\end{align}$$

Untuk $t$ besar dan $k$ moderate (tetap), karena $|\phi| > 1$, maka didapati:

- $\phi^{2t} \gg 1$, $\phi^{2t-k} \gg \phi^k$, dan $\phi^{2(t-k)} \gg 1$.
- Pembilang $\approx \phi^{2t-k}$
- Penyebut $\approx \sqrt{\phi^{2t} \phi^{2(t-k)}} = \phi^{2t - k}$.
- $\operatorname{Corr}(Y\_t, Y\_{t-k}) \approx \frac{\phi^{2t - k}}{\phi^{2t - k}} = 1$.
