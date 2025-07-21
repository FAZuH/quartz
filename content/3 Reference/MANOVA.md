---
{"publish":true,"tags":["content-type/conceptual","content-type/procedural","content-type/referential"],"cssclasses":""}
---


## About MANOVA

Multivariate Analysis of Variance (MANOVA) extends ANOVA to **analyze multiple dependent variables simultaneously**. It tests whether group means differ across several dependent variables, accounting for their intercorrelations.

MANOVA is used for multivariate data, where observations include multiple continuous dependent variables and one or more categorical independent variables (factors).

Examples include test scores across subjects (math, science) grouped by teaching method or physiological measures (heart rate, blood pressure) by treatment.

One-way MANOVA involves **one independent variable** (e.g., teaching method affecting math and science scores).

Two-way MANOVA includes **two independent variables** (e.g., teaching method and student gender), allowing analysis of main effects and interactions.

## Performing MANOVA

1. Define hypotheses: 
	- $H_0$ (Null hypothesis): No group differences across dependent variables.
	- $H_1$ (Alternative hypothesis): Differences exist.
2. Check assumptions: See [Assumptions for MANOVA](#Assumptions%20for%20MANOVA)
3. Prepare data: Organize data with categorical independent variables and continuous dependent variables.
4. Compute test statistics: Use statistical software (e.g., Python’s `statsmodels`, R’s `manova`) to calculate test statistics. See [MANOVA formulas](#MANOVA%20formulas) for manual computation, and [Differences between MANOVA test statistics](#Differences%20between%20MANOVA%20test%20statistics) to pick most suitable test statistic for your data.
5. Evaluate significance: Compare p-values to significance level. Optionally, use [MANOVA rejection rules](#MANOVA%20rejection%20rules).

Optional:

1. Post-hoc analysis: If significant, conduct univariate ANOVAs or discriminant analysis to identify specific group differences.
2. Interpret results: Report test statistics, p-values, and effect sizes (e.g., partial eta-squared). Discuss practical implications.

## Assumptions for MANOVA

- Dependent variables are **continuous and multivariate normally** distributed.
- **Homogeneity** of variance-covariance matrices across groups (use Box’s M test).
- **Linear relationships** among dependent variables.
- **No extreme outliers**.
- Adequate sample size (**more observations than dependent variables** per group).

## Formulas used for performing MANOVA

 - Wilks’ Lambda: $Λ=\frac{|\mathbf{E}|}{|\mathbf{E}+\mathbf{H}|}$
- Pillai’s Trace: $V^{(s)}=\operatorname{tr}[(\mathbf{E}+\mathbf{H})^{-1}\mathbf{H}]=\sum^s_{i=1}\frac{\lambda_i}{1+\lambda_i}$
- Lawley-Hotelling Trace: $U^{(s)}=\operatorname{tr}(\mathbf{E}^{-1}\mathbf{H})=\sum^s_{i=1}\lambda_i$
- Roy’s Largest Root: $\theta=\frac{\lambda_1}{1+\lambda_1}$

Base formulas

- $p$: Number of dependent variables
- $n$: Total number of observations across all groups
- $k$: Number of groups
- $\mathbf{y}_{ij}$ is the $p\times 1$ vector of observations for the $j$-th subject in the $i$-th group
- $\bar{\mathbf{y}}_{i\boldsymbol\cdot}$ is the $p\times 1$ mean vector for group $i$
- $\bar{\mathbf{y}}_{\boldsymbol\cdot\boldsymbol\cdot}$ is the $p\times 1$ overall mean vector

Derived formulas:

- $\mathbf{E}$: Error sum of squares
- $\mathbf{H}$: Hypothesis sum of squares
- $$\mathbf{E}=\sum^k_{i=1}\sum^n_{j=1}(\mathbf{y}_{ij}-\bar{\mathbf{y}}_{i\boldsymbol\cdot})(\mathbf{y}_{ij}-\bar{\mathbf{y}}_{i\boldsymbol\cdot})'$$
- $$\mathbf{H}=n\sum^k_{i=1}(\bar{\mathbf{y}}_{i\boldsymbol\cdot}-\bar{\mathbf{y}}_{\boldsymbol\cdot\boldsymbol\cdot})(\bar{\mathbf{y}}_{i\boldsymbol\cdot}-\bar{\mathbf{y}}_{\boldsymbol\cdot\boldsymbol\cdot})'$$
- $\lambda_i$: Eigenvalues of $\mathbf{E}^{-1}\mathbf{H}$, where $\lambda_1$ is the largest
- $\nu_H=k-1$: Hypothesis degrees of freedom
- $\nu_E=n-k$: Error degrees of freedom
- $s=\min(\nu_H, p)$

### F-transformation (when $\nu_H=1$, $s=1$):
- $F=\frac{\nu_E-p+1}{p}U^{(1)}$, where $U^{(1)}=\lambda_1=\frac{\theta}{1-\theta}$, follows $F_{p,\nu_E-p+1}$

## MANOVA rejection rules

- **Wilks’ Lambda**:  
$$Λ \leq \Phi^{-1}_{\Lambda}(\alpha)$$

- **Pillai’s Trace**:  

	$$V^{(s)} \geq \Phi^{-1}_{V}(1-\alpha)$$
	
	Where:
	
	- $m = \frac{1}{2}(|\nu_H - p| - 1)$
	- $n = \frac{1}{2}(\nu_E - p - 1)$
	
- **Lawley-Hotelling Trace**:  
$$\frac{U^{(s)}\nu_E}{\nu_H} > \Phi^{-1}_{U}(1-\alpha)$$

- **Roy’s Largest Root**:  
$$\theta \geq \Phi^{-1}_{\theta}(1-\alpha)$$

- **F-transformation** (when $\nu_H = 1$, $s = 1$):  
$$F > \Phi^{-1}_{F}(1-\alpha)$$

## Differences between MANOVA test statistics

- Wilks’ Lambda ($Λ$):  
    Measures ratio of error to total variance-covariance.
    Sensitive to group differences, **widely used**, but less robust to assumption violations (e.g., non-normality, unequal covariances).
    
- Pillai’s Trace ($V^{(s)}$):  
    Sums eigenvalues of $(\mathbf{E}+\mathbf{H})^{-1}\mathbf{H}$.
    Most **robust** to violations of assumptions (e.g., heterogeneity of variances), preferred for unequal sample sizes or non-normal data.
    
- Lawley-Hotelling Trace ($U^{(s)}$):  
    Sums eigenvalues of $\mathbf{E}^{-1}\mathbf{H}$.
    Powerful for detecting **group differences**, but sensitive to assumption violations, particularly **non-normality**.
    
- Roy’s Largest Root ($θ$):  
    Uses largest eigenvalue.
    Focuses on maximum group separation, powerful when differences are concentrated in one dimension, but less robust and **not ideal for multiple group differences**.
    

