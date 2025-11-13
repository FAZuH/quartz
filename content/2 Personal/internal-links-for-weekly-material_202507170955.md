---
{"publish":true,"aliases":["Internal Links for Weekly Material","Materi Statmat 2"],"created":"2025-10-22T05:58:34.930+07:00","modified":"2025-12-12T07:48:22.900+07:00","published":"2025-12-12T07:48:22.900+07:00","cssclasses":"","creation-time":"2025-07-17 09:55","status":"baby","tags":null,"parent":["[[Statistika Matematika 2]]"]}
---


**1_1.10**
- [[3 Reference/mathstat1.10#Theorem 1.10.2 Markov’s inequality\|Markov's inequality]] : If $u(X)$ positive function
$$ P[u(X)\geq c] \leq \frac{E[u(X)]}{c} $$

- [[3 Reference/mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality\|Chebyshev's inequality]]
$$
\begin{align}
P(|X - \mu| \geq k\sigma) & \leq \frac{1}{k^2} \\
P(|X - \mu| < k\sigma) & \geq 1 - \frac{1}{k^2}
\end{align}
$$


**1_4.6**
- [[3 Reference/mathstat4.4#Theorem 4.4.1 Joint pdf of order statistics\|Joint pdf of order statistics]]
- [[3 Reference/mathstat4.4#Marginal pdf of order statistics\|Marginal pdf of order statistics]]

$$
\begin{align}
g_1\left(y_1\right) & = \begin{cases}  n\left[1-F\left(y_1\right)\right]^{n-1} f\left(y_1\right), & a<y_1<b \\ 0, & \text {elsewhere}  \end{cases}  \\

g_k\left(y_k\right) & =  \begin{cases} \frac{n!}{(n-k)!(k-1)!}\left[1-F\left(y_k\right)\right]^{n-k}\left[F\left(y_k\right)\right]^{k-1} f\left(y_k\right) & a<y_k<b \\ 0 & \text {elsewhere} \end{cases}  \\

g_n\left(y_n\right) & = \begin{cases} n\left[F\left(y_n\right)\right]^{n-1} f\left(y_n\right), & a<y_n<b \\ 0, & \text{elsewhere}\end {cases} 
\end{align}
$$
	
- [[3 Reference/mathstat4.4#CDF of order statistics\|CDF of order statistics]]

$$
\begin{align}
F_{Y_{1}}(x) &= 1-[1-F_{X}(x)]^n \\
F_{Y_{k}}(x) &= \sum_{j=k}^n \binom n j [F_{X}(x)]^j[1-F_{X}(x)]^{n-j} \\
F_{Y_{n}}(x) &= [F_{X}(x)]^n \\
\end{align}
$$


**1_5.1**
- [[3 Reference/mathstat5.2#Definition 5.2.1 Converges in distribution\|Convergence in distribution]] : $X_{n}\xrightarrow D X$
- [[3 Reference/Def-degenerate-distribution]]

**1_LIMITING DISTRIBUTIONS**

**2_5.2**
- [[3 Reference/mathstat5.1#Definition 5.1.1 Convergence in probability\|Convergence in probability]] : For all $\varepsilon>0$
	- $\lim_{ n \to \infty }P[|X_{n}-X\geq \epsilon]=0$
	- $\lim_{ n \to \infty }P[|X_{n}-X< \epsilon]=1$
- [[3 Reference/mathstat5.1#Theorem 5.1.1 Weak law of large numbers\|Weak law of large numbers]] : $\bar{X}_{n}\xrightarrow P\mu$
- [[3 Reference/mathstat5.1#Theorem Law of large numbers for sample variance\|Weak law of large numbers for sample variance]] : $S_{n}^2\xrightarrow P\sigma^2$
- [[3 Reference/mathstat5.1#Theorem Strong law of large numbers\|Strong law of large numbers]]
- [[3 Reference/mathstat5.2#Theorem 0\|Theorem 0]] : $X_{n}\xrightarrow Pc\iff X_{n}\xrightarrow Dc$

**2_5.3**
- [[3 Reference/mathstat5.2#Theorem 5.2.10 MGF technique\|MGF Technique]] : $\lim_{ n \to \infty }M_n(x)=M(x)\implies X_{n}\xrightarrow DX$

**3_5.4**
- [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|Central limit theorem]] : 
	- $Y_{n}=\frac{\sqrt{ n }(\bar{X}_{n}-\mu)^2}{\sigma}\implies Y_{n}\xrightarrow D N(0,1)$
	- $\sqrt{ n }(\bar{X}_{n}-\mu)^2\implies Y_{n}\xrightarrow DN(0,\sigma^2)$

**3_5.5**
- [[3 Reference/mathstat5.2#Theorem 1\|Theorem 1]] : $U_{n}\xrightarrow P c\implies \frac{U_{n}}{c}\xrightarrow P 1$
- [[3 Reference/mathstat5.2#Theorem 2\|Theorem 2]] : $U_{n}\xrightarrow P c \implies \sqrt{ U_{n} }\xrightarrow P \sqrt{ c }$
- [[3 Reference/mathstat5.2#Theorem 2.5\|Theorem 2.5]] : $U_{n}\xrightarrow P c\land V_{n}\xrightarrow Pd\implies U_{n}V_{n}\xrightarrow Pcd,\quad \text{also,} \quad \frac{U_{n}}{V_{n}}\xrightarrow P \frac{c}{d}$
- [[3 Reference/mathstat5.2#Theorem 3\|Theorem 3]] : $U_{n}\xrightarrow D F(u) \land V_{n}\xrightarrow P 1\implies \frac{U_{n}}{V_{n}}\xrightarrow P F(u)$

**3_6.1**
 - [[3 Reference/mathstat4.1#Definition Likelihood function\|Likelihood function]] : $L(\theta) = \prod_{i=1}^nf(x_{i};\theta)$
 - [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|Unbiased estimator]] : $E(T)=\theta$
 - [[3 Reference/mathstat5.1#Definition 5.1.2 Consistent estimator\|Consistent estimator]] : $T_{n}\xrightarrow P \theta$

**3_6.1a_1**
- [[3 Reference/mathstat6.1#MLE on normal distribution with multiple parameters]]

**3_6.1a_2**
- [[3 Reference/Method of Moments]] : $\mu'_{k}=m'_{k}$

**3_7.2**
- [[3 Reference/mathstat7.2#Definition 7.2.1 Sufficient statistic\|Sufficient statistic]] : $\dfrac{f}{f_{Y_{1}}}$ does not depend on $\theta$

**3_7.2**
- [[3 Reference/mathstat7.2#Theorem 7.2.1 Neyman theorem\|Neyman theorem]] : $\prod_{i=1}^n f(x_{i};\theta)= k_{1} k_{2}$, where
	- $k_{1},k_{2}$ nonnegative
	- $k_{1}$ function of $Y_{1}$
	- $k_{2}$ does not depend on $\theta$

**4_7.4**
- [[3 Reference/mathstat7.4#Definition 7.4.1 Complete family of pdf/pmf\|Complete family of pdf/pmf]]: $E[u(Z)] = 0$ for all $\theta$ implies $u(Z) = 0$
- [[3 Reference/mathstat7.4#Definition 7.4.1 Unique unbiased minimum variance estimator (UMVUE)\|UMVUE]]: $Y$ complete sufficient, $\delta(Y)$ exist unbiased

**4_7.5**
- [[3 Reference/mathstat7.5#Definition 7.5.1 Regular exponential class\|Regular exponential class]]
	$$ f(x;\theta)=\begin{cases}  \exp[p(\theta)K(x)+H(x)+q(\theta)] & x\in \mathcal{S} \\  0 & \text{elsewhere} \end{cases} $$
	- $\mathcal{S}$ independent on $\theta$
	- $p(\theta)$ nontrivial continuous
	- $X$ continuous -> $K'(x)\not\equiv 0$, $H(x)$ continuous
	- $X$ discrete -> $K(x)$ nontrivial
- [[3 Reference/mathstat7.5#Theorem 7.5.2\|Theorem 7.5.2]]
	$X$ regular exponential class, $Y_{1}=\sum K(X_{i})$ $\implies$ $Y_{1}$ complete sufficient 

**5_7.6**
- [[3 Reference/mathstat7.6_202507171008\|7.6 Functions of Parameter]]

**5_7.7**
- [[3 Reference/def-jointly-sufficient-statistic_202507171021\|Jointly Sufficient Statistic]] $\dfrac{\prod_{i=1}^nf(x;\boldsymbol{\theta})}{f_{\mathbf{Y}}(\mathbf{y};\boldsymbol{\theta})}$ does not depend on $\boldsymbol{\theta}$
- [[3 Reference/def-regular-exponential-class-on-random-vectors_202507171021\|Regular Exponential Class on Random Vectors]]
	$$
	f(x;\boldsymbol{\theta}) = \begin{cases}
	\exp\left[ \sum_{j=1}^m p_{j}(\boldsymbol{\theta})K_{j}(x) + H(x) + q(\theta_{1},\dots,\theta_{m}) \right] & \forall x\in \mathcal{S} \\
	0 & \text{elsewhere}
	\end{cases}
	$$
	1. $\mathcal{S}$ independent of $\boldsymbol{\theta}$
	2. [[3 Reference/def-space_202507171031\|Space]] $\Omega$ contains a nonempty, $m$-dimensional open rectangle
	3. $p_{j}(\boldsymbol{\theta})$ are all nontrivial, functionally independent, continuous functions of $\boldsymbol{\theta}$
	4. If $X$ [[3 Reference/Def-continuous-random-variable\|continuous random variable]], then
		1. $K'_{j}(x)$ are all [[3 Reference/structure/continuous functions\|continuous]] for $a<x<b$, not [[3 Reference/Def-homogeneous-linear-equation\|homogeneous linear function]] of the others.
		2. $H(x)$ : Continuous function of $x\in \mathcal{S}$
	5. If $X$ [[3 Reference/Def-discrete-random-variable\|discrete random variable]], then
		1. $K'_{j}(x)$ are all nontrivial functions of $x\in \mathcal{S}$, not homogeneous linear function of the others

< Before UTS

---

\> After UTS

**6_8.2**
- [[3 Reference/def-fisher-information_202507170919\|Fisher Information]]
$$
\begin{align}
I(\theta) & = E\left[S(X;\theta)^2\right] \\
 & = E\left[\left(\frac{\partial}{\partial \theta} \ln f(X;\theta)\right)^2\right] \\
 & = -E\left[\frac{\partial^2}{\partial \theta^2} \ln f(X;\theta)\right]
\end{align}
$$

**7_8.2**
- [[3 Reference/mathstat6.2#Theorem 6.2.1 Rao-Cramér lower bound\|Rao-Cramer Lower Bound]]: $\operatorname{Var}(Y)\geq \boxed{\frac{[k'(\theta)]^2}{nI(\theta)}}$
- [[3 Reference/mathstat6.2#Corollary 6.2.1 Rao-Cramér bound for unbiased estimators\|Rao-Cramer Lower Bound for Unbiased Estimators]]
	- [[3 Reference/mathstat6.2#^def-efficiency\|def-efficiency]]
- [[3 Reference/def-efficient-estimator_202507170919\|Efficient Estimator]] 
	- $Y$ unbiased 
	- $nI(\theta)\cdot \operatorname{Var}(Y)=1$

**8_6.2**
- [[3 Reference/4.2-confidence-intervals_202507220822\|4.2 Confidence Intervals]]

**8_6.3**
- [[3 Reference/4.2.1-confidence-intervals-for-difference-in-means_202507220835\|4.2.1 Confidence Intervals for Difference in Means]]
- [[3 Reference/4.2.2-confidence-interval-for-difference-in-proportion_202507220849\|4.2.2 Confidence Interval for Difference in Proportion]]

**9_6.4**
- [[3 Reference/def-hypothesis_202508050806\|Hypothesis]]: [[3 Reference/def-hypothesis_202508050806\|Null hypothesis]], [[3 Reference/def-hypothesis_202508050806\|Alternative hypothesis]]
- [[3 Reference/def-test_202508050827\|Test]]
- [[3 Reference/def-test_202508050827\|Critical region]] / [[3 Reference/def-test_202508050827\|Rejection region]]
- [[3 Reference/def-power-of-a-test_202508050833\|Power]] : $P_{\theta}(\mathbf{X}\in C)$
- [[3 Reference/def-power-function_202508050833\|Power Function]] : $\gamma_{C}(\theta)=P_{\theta}(\mathbf{X}\in C), \theta\in \omega_{1}$
- [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|Types of Statistical Hypotheses]]: [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|Simple statistical hypothesis]], [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|Composite statistical hypothesis]]
	- Simple: $H_{0}: \theta=10$
	- Composite: $H_{0}: \theta\leq 10$
- [[3 Reference/def-size-of-critical-region_202507291323\|Significance level]] / [[3 Reference/def-size-of-critical-region_202507291323\|Size]] : $\alpha=\max_{\theta\in \omega_{0}}P(\mathbf{X}\in C)$

![[assets/Pasted image 20250808000634.png|400]]

**11_9.1**
- [[3 Reference/def-best-critical-region_202508052110\|Best Critical Region]], [[3 Reference/def-best-critical-region_202508052110\|Best Test]]
- [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]] : $C$ best critical region of size $\alpha$ for test $H_{0}: \theta=\theta'$ vs $H_{1}: \theta=\theta''$
	- $k>0$
	- $\alpha=P_{H_{0}}[\mathbf{X}\in C]$
	- $$ \frac{L(\theta';\mathbf{x})}{L(\theta'';\mathbf{x})} \leq k, \quad \forall \mathbf{x}\in C $$

**12_9.2**
- [[3 Reference/def-uniformly-most-powerful-critical-region_202508052119\|UMPCR]], [[3 Reference/def-uniformly-most-powerful-test_202508052119\|UMPT]] : $C$ from test simple $H_{0}$ vs composite $H_{1}$. If $C$ BCR from test simple $H_{0}$ vs all simple $H_{1}$, then $C$ UMPCR. Its test is called UMPT
- [[3 Reference/def-monotone-likelihood-ration-(mlr)_202508071604\|Monotone Likelihood Ration (mlr)]] : If $\frac{L(\theta_{1},\mathbf{x})}{L(\theta_{2},\mathbf{x})},\forall \theta_{1}<\theta_{2}$ monotonic function of $y=u(\mathbf{x})$, then $L(\theta,\mathbf{x})$ has MLR in $y=u(\mathbf{x})$

**14_9.3**
- [[3 Reference/def-likelihood-ratio-test_202512111531\|Likelihood Ratio Test]]: Generalization of [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]] for composite hypotheses

### Also,
- [[3 Reference/Discrete Distributions]]
- [[3 Reference/Continuous Distributions]]
