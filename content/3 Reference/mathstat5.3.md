---
{"publish":true,"aliases":["5.3 Central Limit Theorem.md"],"created":"2025-09-13T18:59:05.180+07:00","modified":"2025-09-19T09:46:07.513+07:00","published":"2025-09-19T09:46:07.513+07:00","cssclasses":"","creation-time":"2025-07-02 12:15","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---

<< [[3 Reference/mathstat5.2\|5.2 Convergence in Distribution.md]] | [[3 Reference/mathstat5.4\|5.4 Extensions to Multivariate Distributions.md]] >>

## Theorem 5.3.1: Central limit theorem
![[3 Reference/theorem-central-limit-theorem_202509190924#Theorem]]

## Exercise

### Hogg & Craig 5th ed. 5.33.
Let
- $X_{n}$ : Random sample of size $n$
- $\bar{X}_{n}$ : Mean of $X_{n}$
- $X_{n}\sim \text{Gamma}(\alpha,\beta)$
- $\alpha=\mu>0$
- $\beta=1$

Show that $\sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \bar{X}_{n} }\xrightarrow D N(0,1)$

**Answer**

Diketahui $X_{n}$ memiliki mean $\mu=\alpha \beta$ dan variansi $\sigma^2=\alpha \beta^2$. Perhatikan bahwa $\alpha \beta=\alpha \cdot 1 = \alpha$ dan $\alpha \beta^2=\alpha \cdot 1^2=\alpha$ sehingga $\mu=\sigma^2=\alpha$.

Berdasarkan [[3 Reference/mathstat5.1#Theorem 5.1.1 Weak law of large numbers\|law of large numbers]], $\bar{X}_{n}\xrightarrow P \mu$. Sehingga berdasarkan [[3 Reference/mathstat5.2#Theorem 1]],
$$
\begin{align}
& \sqrt{ \bar{X}_{n} }\xrightarrow P \sqrt{ \mu } \\
\implies & \frac{\sqrt{ \bar{X}_{n} }}{\sqrt{ \mu }} \xrightarrow{P} 1
\end{align}
$$

Berdasarkan [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|central limit theorem]], $\sqrt{ n }(\bar{X}-\mu)/\sigma \xrightarrow{D} N(0,1)$. Sehingga berdasarkan [[3 Reference/mathstat5.2#Theorem 3]], 
$$
\begin{align}
 & \sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \bar{X}_{n} } \\
\implies & \frac{\sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \mu }}{\sqrt{ \bar{X}_{n} }/\sqrt{ \mu }} \xrightarrow{D} N(0,1)
\end{align}
$$

$\therefore$ $\sqrt{ n }(\bar{X}_{n}-\mu)/\sqrt{ \bar{X}_{n} }\xrightarrow D N(0,1)$

### Hogg & Craig 5th ed. 5.34.

Let
- $X_{n}$ : Random sample of size $n$
- $X_{n}\sim N(\mu,\sigma^2)$ 
- $\bar{X}_n$ : Mean of $X_{n}$
- $S_{n}^2$ : Variance of $X_{n}$
- $T_{n}=(\bar{X}_{n}-\mu)/\sqrt{ S_{n}^2/(n-1) }$

Prove that $T_{n}\xrightarrow D N(0,1)$

**Answer**

Karena $X_i \sim N(\mu, \sigma^2)$, berdasarkan [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|central limit theorem]]:
$$\textcolor{yellow}{\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{D} N(0, 1)}$$

Berdasarkan [[3 Reference/mathstat5.1#Theorem Law of large numbers for sample variance\|law of large numbers]], $S_{n}^2\xrightarrow P \sigma^2$, sehingga berdasarkan [[3 Reference/mathstat5.2#Theorem 2]], $\sqrt{S_n^2} \xrightarrow{P} \sigma$, dan berdasarkan [[3 Reference/mathstat5.2#Theorem 1]], $\textcolor{lime}{\frac{\sqrt{ S_{n}^2 }}{\sigma}\xrightarrow P 1}$.

Perhatikan bahwa
 $$
\begin{align}
 T_n & = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sqrt{S_n^2}} \\
 & = \frac{\textcolor{yellow}{\sqrt{ n }(\bar{X}_{n}-\mu)/\sigma}}{\textcolor{lime}{\sqrt{ S_{n}^2 }/\sigma}}
\end{align} 
 $$
 sehingga berdasarkan [[3 Reference/mathstat5.2#Theorem 3]], diperoleh
$$
T_{n}\xrightarrow D N(0,1)
$$

