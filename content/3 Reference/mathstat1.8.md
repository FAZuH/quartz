---
{"publish":true,"aliases":"1.8 Expectation of Random Variable","cssclasses":""}
---

<< [[3 Reference/mathstat1.7\|1.7 Continuous Random Variables]] | [[3 Reference/mathstat1.9\|1.9 Some Special Expectations.md]] >>

## Definition 1.8.1: Expectation
## Definition

### Continuous random variable
Let
- $X$ : [[3 Reference/mathstat1.7#Definition 1.7.1 Continuous random variable\|Continuous random variable]]
- $f(x)$ : [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] of $X$
- $\int_{-\infty}^\infty |x|\ f(x)\ dx < \infty$

If
$E(X) = \int_{-\infty}^\infty x\ f(x)\ dx$$

Then we say $E(X)$ is the **expectation** of $X$

### Discrete random variable
 Let
- $X$ : [[3 Reference/mathstat1.6\|Discrete random variable]]
- $p(x)$ : [[3 Reference/mathstat1.6#Definition 1.6.2 Probability mass function (pmf)\|pmf]] of $X$
- $\sum_{x}|x|p(x)<\infty$

If
$E(X) = \sum_{x}xp(x)$$

Then we say $E(X)$ is the **expectation** of $X$


## Theorem 1.8.1: Expectation of a function
> Let
> - $X$ : [[3 Reference/Def-random-variable\|Random variable]]
> - $Y=g(X)$
> 
> > Let $X$ is a [[3 Reference/Def-continuous-random-variable\|Continuous random variable]] with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f_{X}(x)$
> > 
> > If $$\int_{-\infty}^\infty|g(x)|f_{X}(x)dx<\infty$$
> > 
> > Then $E(Y)$ exists, given by
> > $$ E(Y) = \int_{-\infty}^\infty g(x)f_{X}(x)dx $$
> 
> > Let
> > - $X$ is a [[3 Reference/Def-discrete-random-variable\|Discrete random variable]], with 
> > 	- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $p_{X}(x)$
> > 	- [[3 Reference/Def-support-of-discrete-random-variable\|Support]] $\mathcal{S}_{X}$
> > 
> > If $$\sum_{x\in \mathcal{S}_{X}}|g(x)|p_{X}(x)<\infty$$
> > 
> > Then $E(Y)$ exists, given by
> > $$ E(Y)=\sum_{x\in \mathcal{S}_{X}} g(x)p_{X}(x)  $$

## Theorem 1.8.2: Linearity of expectation
> Let
> - $X$ : [[3 Reference/Def-random-variable\|Random Variable]]
> - $g_{1}(X),g_{2}(X)$ : Functions of $X$
> 
> If $E(g_{1}(X)),E(g_{2}(X))$ exists
> 
> Then for any constants $k_{1},k_{2}$, the following [[3 Reference/mathstat1.8#Definition 1.8.1 Expectation\|expectation]] exists
> $$
> E[k_{1}g_{1}(X)+k_{2}g_{2}(X)]=k_{1}E[g_{1}(X)]+k_{2}E[g_{2}(X)]
> $$

This theorem proves that expectation is a linear operator. This allows us to easily do simple linear operations with expectations.