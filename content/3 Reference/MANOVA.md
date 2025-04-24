---
{"creation-time":"2025-04-25 03:10","status":"baby","tags":["content-type/conceptual","content-type/procedural","content-type/referential"],"parent":["[[multivariate analysis]]"],"publish":true,"PassFrontmatter":true}
---


## About MANOVA

Multivariate Analysis of Variance (MANOVA) extends ANOVA to **analyze multiple dependent variables simultaneously**. It tests whether group means differ across several dependent variables, accounting for their intercorrelations.

MANOVA is used for multivariate data, where observations include multiple continuous dependent variables and one or more categorical independent variables (factors).

Examples include test scores across subjects (math, science) grouped by teaching method or physiological measures (heart rate, blood pressure) by treatment.

One-way MANOVA involves **one independent variable** (e.g., teaching method affecting math and science scores).

Two-way MANOVA includes **two independent variables** (e.g., teaching method and student gender), allowing analysis of main effects and interactions.

## Performing MANOVA

1. Define hypotheses: Null hypothesis ($H_0$) states no group differences across dependent variables; alternative ($H_1$) states differences exist.
2. Check assumptions:
    - Dependent variables are **continuous and multivariate normally** distributed.
    - Homogeneity of variance-covariance matrices across groups (use Box’s M test).
    - Linear relationships among dependent variables.
    - No extreme outliers.
    - Adequate sample size (more observations than dependent variables per group).
3. Prepare data: Organize data with categorical independent variables and continuous dependent variables.
4. Compute test statistics: Use statistical software (e.g., Python’s `statsmodels`, R’s `manova`) to calculate test statistics. See [MANOVA formulas](#MANOVA%20formulas) for details.
5. Evaluate significance: Compare p-values to significance level (e.g., $α=0.05$). If significant, reject $H_0$. Optionally, use [MANOVA rejection rules](#MANOVA%20rejection%20rules).
6. Post-hoc analysis: If significant, conduct univariate ANOVAs or discriminant analysis to identify specific group differences.
7. Interpret results: Report test statistics, p-values, and effect sizes (e.g., partial eta-squared). Discuss practical implications.

## MANOVA formulas

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
- $s=\min(\nu_H, p)$
- $\nu_H=k-1$: Hypothesis degrees of freedom
- $\nu_E=n-k$: Error degrees of freedom

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