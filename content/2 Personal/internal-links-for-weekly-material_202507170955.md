---
publish: true
aliases:
  - Internal Links for Weekly Material
  - Materi Statmat 2
created: 2026-03-25T15:22:40.569+07:00
modified: 2026-03-25T15:22:40.569+07:00
published: 2026-03-25T15:22:40.569+07:00
creation-time: 2025-07-17 09:55
status: in progress
tags:
parent:
  - "[[Statistika Matematika 2]]"
---

**1\_1.10**

- [[mathstat1.10#Theorem 1.10.2 Markov’s inequality|Markov's inequality]] : If $u(X)$ positive function
  $$ P\[u(X)\geq c] \leq \frac{E\[u(X)]}{c} $$

- [[mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality|Chebyshev's inequality]]
  $$
  \begin{align}
  P(|X - \mu| \geq k\sigma) & \leq \frac{1}{k^2} \\
  P(|X - \mu| < k\sigma) & \geq 1 - \frac{1}{k^2}
  \end{align}
  $$

**1\_4.6**

- [[mathstat4.4#Theorem 4.4.1 Joint pdf of order statistics|Joint pdf of order statistics]]
- [[mathstat4.4#Marginal pdf of order statistics|Marginal pdf of order statistics]]

$$
\begin{align}
g\_1\left(y\_1\right) & = \begin{cases}  n\left\[1-F\left(y\_1\right)\right]^{n-1} f\left(y\_1\right), & a\<y\_1\<b \ 0, & \text {elsewhere}  \end{cases}  \\

g\_k\left(y\_k\right) & =  \begin{cases} \frac{n!}{(n-k)!(k-1)!}\left\[1-F\left(y\_k\right)\right]^{n-k}\left\[F\left(y\_k\right)\right]^{k-1} f\left(y\_k\right) & a\<y\_k\<b \ 0 & \text {elsewhere} \end{cases}  \\

g\_n\left(y\_n\right) & = \begin{cases} n\left\[F\left(y\_n\right)\right]^{n-1} f\left(y\_n\right), & a\<y\_n\<b \ 0, & \text{elsewhere}\end {cases}
\end{align}
$$

- [[mathstat4.4#CDF of order statistics|CDF of order statistics]]

$$
\begin{align}
F\_{Y\_{1}}(x) &= 1-\[1-F\_{X}(x)]^n \\
F\_{Y\_{k}}(x) &= \sum\_{j=k}^n \binom n j \[F\_{X}(x)]^j\[1-F\_{X}(x)]^{n-j} \\
F\_{Y\_{n}}(x) &= \[F\_{X}(x)]^n \\
\end{align}
$$

**1\_5.1**

- [[mathstat5.2#Definition 5.2.1 Converges in distribution|Convergence in distribution]] : $X\_{n}\xrightarrow D X$
- [[Def-degenerate-distribution]]

**1\_LIMITING DISTRIBUTIONS**

**2\_5.2**

- [[mathstat5.1#Definition 5.1.1 Convergence in probability|Convergence in probability]] : For all $\varepsilon>0$
  - $\lim\_{ n \to \infty }P\[|X\_{n}-X\geq \epsilon]=0$
  - $\lim\_{ n \to \infty }P\[|X\_{n}-X< \epsilon]=1$
- [[mathstat5.1#Theorem 5.1.1 Weak law of large numbers|Weak law of large numbers]] : $\bar{X}\_{n}\xrightarrow P\mu$
- [[mathstat5.1#Theorem Law of large numbers for sample variance|Weak law of large numbers for sample variance]] : $S\_{n}^2\xrightarrow P\sigma^2$
- [[mathstat5.1#Theorem Strong law of large numbers|Strong law of large numbers]]
- [[mathstat5.2#Theorem 0|Theorem 0]] : $X\_{n}\xrightarrow Pc\iff X\_{n}\xrightarrow Dc$

**2\_5.3**

- [[mathstat5.2#Theorem 5.2.10 MGF technique|MGF Technique]] : $\lim\_{ n \to \infty }M\_n(x)=M(x)\implies X\_{n}\xrightarrow DX$

**3\_5.4**

- [[mathstat5.3#Theorem 5.3.1 Central limit theorem|Central limit theorem]] :
  - $Y\_{n}=\frac{\sqrt{ n }(\bar{X}_{n}-\mu)^2}{\sigma}\implies Y_{n}\xrightarrow D N(0,1)$
  - $\sqrt{ n }(\bar{X}_{n}-\mu)^2\implies Y_{n}\xrightarrow DN(0,\sigma^2)$

**3\_5.5**

- [[mathstat5.2#Theorem 1|Theorem 1]] : $U\_{n}\xrightarrow P c\implies \frac{U\_{n}}{c}\xrightarrow P 1$
- [[mathstat5.2#Theorem 2|Theorem 2]] : $U\_{n}\xrightarrow P c \implies \sqrt{ U\_{n} }\xrightarrow P \sqrt{ c }$
- [[mathstat5.2#Theorem 2.5|Theorem 2.5]] : $U\_{n}\xrightarrow P c\land V\_{n}\xrightarrow Pd\implies U\_{n}V\_{n}\xrightarrow Pcd,\quad \text{also,} \quad \frac{U\_{n}}{V\_{n}}\xrightarrow P \frac{c}{d}$
- [[mathstat5.2#Theorem 3|Theorem 3]] : $U\_{n}\xrightarrow D F(u) \land V\_{n}\xrightarrow P 1\implies \frac{U\_{n}}{V\_{n}}\xrightarrow P F(u)$

**3\_6.1**

- [[mathstat4.1#Definition Likelihood function|Likelihood function]] : $L(\theta) = \prod\_{i=1}^nf(x\_{i};\theta)$
- [[mathstat4.1#Definition 4.1.3 Unbiased estimator|Unbiased estimator]] : $E(T)=\theta$
- [[mathstat5.1#Definition 5.1.2 Consistent estimator|Consistent estimator]] : $T\_{n}\xrightarrow P \theta$

**3\_6.1a\_1**

- [[mathstat6.1#MLE on normal distribution with multiple parameters]]

**3\_6.1a\_2**

- [[Method of Moments]] : $\mu'_{k}=m'_{k}$

**3\_7.2**

- [[mathstat7.2#Definition 7.2.1 Sufficient statistic|Sufficient statistic]] : $\dfrac{f}{f\_{Y\_{1}}}$ does not depend on $\theta$

**3\_7.2**

- [[mathstat7.2#Theorem 7.2.1 Neyman theorem|Neyman theorem]] : $\prod\_{i=1}^n f(x\_{i};\theta)= k\_{1} k\_{2}$, where
  - $k\_{1},k\_{2}$ nonnegative
  - $k\_{1}$ function of $Y\_{1}$
  - $k\_{2}$ does not depend on $\theta$

**4\_7.4**

- [[mathstat7.4#Definition 7.4.1 Complete family of pdf/pmf|Complete family of pdf/pmf]]: $E\[u(Z)] = 0$ for all $\theta$ implies $u(Z) = 0$
- [[mathstat7.4#Definition 7.4.1 Unique unbiased minimum variance estimator (UMVUE)|UMVUE]]: $Y$ complete sufficient, $\delta(Y)$ exist unbiased

**4\_7.5**

- [[mathstat7.5#Definition 7.5.1 Regular exponential class|Regular exponential class]]
  $$ f(x;\theta)=\begin{cases}  \exp\[p(\theta)K(x)+H(x)+q(\theta)] & x\in \mathcal{S} \  0 & \text{elsewhere} \end{cases} $$
  - $\mathcal{S}$ independent on $\theta$
  - $p(\theta)$ nontrivial continuous
  - $X$ continuous -> $K'(x)\not\equiv 0$, $H(x)$ continuous
  - $X$ discrete -> $K(x)$ nontrivial
- [[mathstat7.5#Theorem 7.5.2|Theorem 7.5.2]]
  $X$ regular exponential class, $Y\_{1}=\sum K(X\_{i})$ $\implies$ $Y\_{1}$ complete sufficient

**5\_7.6**

- [[mathstat7.6_202507171008|7.6 Functions of Parameter]]

**5\_7.7**

- [[def-jointly-sufficient-statistic_202507171021|Jointly Sufficient Statistic]] $\dfrac{\prod\_{i=1}^nf(x;\boldsymbol{\theta})}{f\_{\mathbf{Y}}(\mathbf{y};\boldsymbol{\theta})}$ does not depend on $\boldsymbol{\theta}$
- [[def-regular-exponential-class-on-random-vectors_202507171021|Regular Exponential Class on Random Vectors]]
  $$
  f(x;\boldsymbol{\theta}) = \begin{cases}
  \exp\left\[ \sum\_{j=1}^m p\_{j}(\boldsymbol{\theta})K\_{j}(x) + H(x) + q(\theta\_{1},\dots,\theta\_{m}) \right] & \forall x\in \mathcal{S} \\
  0 & \text{elsewhere}
  \end{cases}
  $$
  1. $\mathcal{S}$ independent of $\boldsymbol{\theta}$
  2. [[def-space_202507171031|Space]] $\Omega$ contains a nonempty, $m$-dimensional open rectangle
  3. $p\_{j}(\boldsymbol{\theta})$ are all nontrivial, functionally independent, continuous functions of $\boldsymbol{\theta}$
  4. If $X$ [[Def-continuous-random-variable|continuous random variable]], then
     1. $K'\_{j}(x)$ are all [[continuous functions|continuous]] for $a\<x\<b$, not [[Def-homogeneous-linear-equation|homogeneous linear function]] of the others.
     2. $H(x)$ : Continuous function of $x\in \mathcal{S}$
  5. If $X$ [[Def-discrete-random-variable|discrete random variable]], then
     1. $K'\_{j}(x)$ are all nontrivial functions of $x\in \mathcal{S}$, not homogeneous linear function of the others

< Before UTS

---

\> After UTS

**6\_8.2**

- [[def-fisher-information_202507170919|Fisher Information]]
  $$
  \begin{align}
  I(\theta) & = E\left\[S(X;\theta)^2\right] \\
  & = E\left\[\left(\frac{\partial}{\partial \theta} \ln f(X;\theta)\right)^2\right] \\
  & = -E\left\[\frac{\partial^2}{\partial \theta^2} \ln f(X;\theta)\right]
  \end{align}
  $$

**7\_8.2**

- [[mathstat6.2#Theorem 6.2.1 Rao-Cramér lower bound|Rao-Cramer Lower Bound]]: $\operatorname{Var}(Y)\geq \boxed{\frac{\[k'(\theta)]^2}{nI(\theta)}}$
- [[mathstat6.2#Corollary 6.2.1 Rao-Cramér bound for unbiased estimators|Rao-Cramer Lower Bound for Unbiased Estimators]]
  - [[mathstat6.2#^def-efficiency|def-efficiency]]
- [[def-efficient-estimator_202507170919|Efficient Estimator]]
  - $Y$ unbiased
  - $nI(\theta)\cdot \operatorname{Var}(Y)=1$

**8\_6.2**

- [[4.2-confidence-intervals_202507220822|4.2 Confidence Intervals]]

**8\_6.3**

- [[4.2.1-confidence-intervals-for-difference-in-means_202507220835|4.2.1 Confidence Intervals for Difference in Means]]
- [[4.2.2-confidence-interval-for-difference-in-proportion_202507220849|4.2.2 Confidence Interval for Difference in Proportion]]

**9\_6.4**

- [[def-hypothesis_202508050806|Hypothesis]]: [[def-hypothesis_202508050806|Null hypothesis]], [[def-hypothesis_202508050806|Alternative hypothesis]]
- [[def-test_202508050827|Test]]
- [[def-test_202508050827|Critical region]] / [[def-test_202508050827|Rejection region]]
- [[def-power-of-a-test_202508050833|Power]] : $P\_{\theta}(\mathbf{X}\in C)$
- [[def-power-function_202508050833|Power Function]] : $\gamma\_{C}(\theta)=P\_{\theta}(\mathbf{X}\in C), \theta\in \omega\_{1}$
- [[def-types-of-statistical-hypotheses_202508051003|Types of Statistical Hypotheses]]: [[def-types-of-statistical-hypotheses_202508051003|Simple statistical hypothesis]], [[def-types-of-statistical-hypotheses_202508051003|Composite statistical hypothesis]]
  - Simple: $H\_{0}: \theta=10$
  - Composite: $H\_{0}: \theta\leq 10$
- [[def-size-of-critical-region_202507291323|Significance level]] / [[def-size-of-critical-region_202507291323|Size]] : $\alpha=\max\_{\theta\in \omega\_{0}}P(\mathbf{X}\in C)$

![[assets/Pasted image 20250808000634.png|400]]

**11\_9.1**

- [[def-best-critical-region_202508052110|Best Critical Region]], [[def-best-critical-region_202508052110|Best Test]]
- [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]] : $C$ best critical region of size $\alpha$ for test $H\_{0}: \theta=\theta'$ vs $H\_{1}: \theta=\theta''$
  - $k>0$
  - $\alpha=P\_{H\_{0}}\[\mathbf{X}\in C]$
  - $$ \frac{L(\theta';\mathbf{x})}{L(\theta'';\mathbf{x})} \leq k, \quad \forall \mathbf{x}\in C $$

**12\_9.2**

- [[def-uniformly-most-powerful-critical-region_202508052119|UMPCR]], [[def-uniformly-most-powerful-test_202508052119|UMPT]] : $C$ from test simple $H\_{0}$ vs composite $H\_{1}$. If $C$ BCR from test simple $H\_{0}$ vs all simple $H\_{1}$, then $C$ UMPCR. Its test is called UMPT
- [[def-monotone-likelihood-ration-(mlr)_202508071604|Monotone Likelihood Ration (mlr)]] : If $\frac{L(\theta\_{1},\mathbf{x})}{L(\theta\_{2},\mathbf{x})},\forall \theta\_{1}<\theta\_{2}$ monotonic function of $y=u(\mathbf{x})$, then $L(\theta,\mathbf{x})$ has MLR in $y=u(\mathbf{x})$

**14\_9.3**

- [[def-likelihood-ratio-test_202512111531|Likelihood Ratio Test]]: Generalization of [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]] for composite hypotheses

### Also,

- [[Discrete Distributions]]
- [[Continuous Distributions]]
