---
publish: true
aliases:
  - 5.3 Central Limit Theorem.md
created: 2026-03-25T15:22:40.620+07:00
modified: 2026-03-25T15:22:40.621+07:00
published: 2026-03-25T15:22:40.621+07:00
creation-time: 2025-07-02 12:15
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat5.2|5.2 Convergence in Distribution.md]] | [[mathstat5.4|5.4 Extensions to Multivariate Distributions.md]] >>

## Theorem 5.3.1: Central limit theorem

![[theorem-central-limit-theorem_202509190924#Theorem]]

## Exercise

### Hogg & Craig 5th ed. 5.33.

Let

- $X\_{n}$ : Random sample of size $n$
- $\bar{X}_{n}$ : Mean of $X_{n}$
- $X\_{n}\sim \text{Gamma}(\alpha,\beta)$
- $\alpha=\mu>0$
- $\beta=1$

Show that $\sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \bar{X}_{n} }\xrightarrow D N(0,1)$

**Answer**

Diketahui $X\_{n}$ memiliki mean $\mu=\alpha \beta$ dan variansi $\sigma^2=\alpha \beta^2$. Perhatikan bahwa $\alpha \beta=\alpha \cdot 1 = \alpha$ dan $\alpha \beta^2=\alpha \cdot 1^2=\alpha$ sehingga $\mu=\sigma^2=\alpha$.

Berdasarkan [[mathstat5.1#Theorem 5.1.1 Weak law of large numbers|law of large numbers]], $\bar{X}_{n}\xrightarrow P \mu$. Sehingga berdasarkan [[mathstat5.2#Theorem 1]],
$$
\begin{align}
& \sqrt{ \bar{X}_{n} }\xrightarrow P \sqrt{ \mu } \\
\implies & \frac{\sqrt{ \bar{X}\_{n} }}{\sqrt{ \mu }} \xrightarrow{P} 1
\end{align}
$$

Berdasarkan [[mathstat5.3#Theorem 5.3.1 Central limit theorem|central limit theorem]], $\sqrt{ n }(\bar{X}-\mu)/\sigma \xrightarrow{D} N(0,1)$. Sehingga berdasarkan [[mathstat5.2#Theorem 3]],
$$
\begin{align}
& \sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \bar{X}_{n} } \\
\implies & \frac{\sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \mu }}{\sqrt{ \bar{X}_{n} }/\sqrt{ \mu }} \xrightarrow{D} N(0,1)
\end{align}
$$

$\therefore$ $\sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \bar{X}_{n} }\xrightarrow D N(0,1)$

### Hogg & Craig 5th ed. 5.34.

Let

- $X\_{n}$ : Random sample of size $n$
- $X\_{n}\sim N(\mu,\sigma^2)$
- $\bar{X}_n$ : Mean of $X_{n}$
- $S\_{n}^2$ : Variance of $X\_{n}$
- $T\_{n}=(\bar{X}_{n}-\mu)/\sqrt{ S_{n}^2/(n-1) }$

Prove that $T\_{n}\xrightarrow D N(0,1)$

**Answer**

Karena $X\_i \sim N(\mu, \sigma^2)$, berdasarkan [[mathstat5.3#Theorem 5.3.1 Central limit theorem|central limit theorem]]:
$$\textcolor{yellow}{\frac{\sqrt{n}(\bar{X}\_n - \mu)}{\sigma} \xrightarrow{D} N(0, 1)}$$

Berdasarkan [[mathstat5.1#Theorem Law of large numbers for sample variance|law of large numbers]], $S\_{n}^2\xrightarrow P \sigma^2$, sehingga berdasarkan [[mathstat5.2#Theorem 2]], $\sqrt{S\_n^2} \xrightarrow{P} \sigma$, dan berdasarkan [[mathstat5.2#Theorem 1]], $\textcolor{lime}{\frac{\sqrt{ S\_{n}^2 }}{\sigma}\xrightarrow P 1}$.

Perhatikan bahwa
$$
\begin{align}
T\_n & = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sqrt{S\_n^2}} \\
& = \frac{\textcolor{yellow}{\sqrt{ n }(\bar{X}_{n}-\mu)/\sigma}}{\textcolor{lime}{\sqrt{ S\_{n}^2 }/\sigma}}
\end{align}
$$
sehingga berdasarkan [[mathstat5.2#Theorem 3]], diperoleh
$$
T\_{n}\xrightarrow D N(0,1)
$$
