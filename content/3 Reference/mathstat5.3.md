---
{"publish":true,"aliases":"5.3 Central Limit Theorem.md","cssclasses":""}
---

<< [[3 Reference/mathstat5.2\|5.2 Convergence in Distribution.md]] | [[3 Reference/mathstat5.4\|5.4 Extensions to Multivariate Distributions.md]] >>

## Theorem 5.3.1: Central limit theorem
> Let
> - $X_{1}\dots X_{n}$ : Observations of a [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random sample]], with
> 	- Common mean $\mu$
> 	- Common variance $\sigma^2\in \mathbb{P}$
> 
> If
> $$
> \begin{align}
> Y_{n} & = \frac{ \sum_{i=1}^n X_{i} - n\mu }{\sqrt{ n }\sigma} \\
>  & = \frac{\sqrt{ n }(\bar{X}_{n}-\mu)}{\sigma}
> \end{align}
> $$
> 
> Then
> $$
> Y_{n}\xrightarrow D N(0,1)
> $$

> [!note] 
> Recall that the notation $Y_{n}\xrightarrow D N(0,1)$ was introduced in [[3 Reference/mathstat5.2#^convergence-to-dist-notation\|convergence in distribution's remark]].
> 
> We often state the central limit theorem as:
> $$
> \sqrt{ n }(\bar{X}-\mu) \to N(0,\sigma^2)
> $$
> 
> One of the key applications of this theorem is for statistical inference, as shown in Example 5.3.1-5.3.6 in the source book.


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

