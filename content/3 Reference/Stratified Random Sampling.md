---
{"publish":true,"created":"2025-08-15T13:53:58.728+07:00","modified":"2025-08-15T13:53:58.729+07:00","published":"2025-08-15T13:53:58.729+07:00","tags":["content-type/conceptual","content-type/referential"],"cssclasses":"","creation-time":"2025-03-05 14:10","status":"elder","parent":["[[sampling methods]]"]}
---


**Stratified random sampling** is a sampling method that splits popultaion into [strata](Strata.md) that is internally homogeneous, but not from each other. We would then take samples from each strata.

---

## About stratified random sampling

Simple or [[3 Reference/Systematic Random Sampling\|systematic random sampling]] is only suitable for homogeneous populations.

Homogeneous populations are rarely encountered.

Example:

- Suppose we want to estimate the income of private employees across fifty cities.
- Cities can be grouped into large, medium, and small cities.
- The number of private employees living in large cities is far greater than in small or medium cities.
- In other words, the distribution is not symmetric.
- A number of private employees are selected from each group, and the estimation is based on the combination of these samples.

The population is divided into several subpopulations called [[3 Reference/Strata\|strata]].

Stratified random sampling is the process of **grouping population into strata**, then **selecting samples from each stratum** and combining these samples to estimate population parameters.

## Advantages

1. Improves precision.
2. In addition to information about the population, information about each stratum is also obtained.
3. Information is easier to collect.

## Parameter estimation

A population of size $N$ is divided into $L$ strata with sizes $N_1, N_2, \dots, N_L$, with sample sizes $n_1, n_2, \dots, n_L$, where $n = n_1, n_2, \dots, n_L$.

**Stratum total**
$$\hat{X}_h = N_h \bar{X}_h$$

**Population total**
$$\hat{X}_{st} = \sum_{h=1}^L N_h \bar{x}_h$$

**Population mean**
$$\bar{x}_{st} = \frac{\hat{X}_{st}}{N}$$

Where:
- $X$: Total population
- $X_h$: Total value of sampling units in the $h$-th stratum
- $\bar{X}_h$: Mean of the $h$-th stratum
- $\bar{X}$: Population mean

These estimators are unbiased because simple random sampling is also used for each stratum.

## Variance analysis

**Population variance**

$$\sigma^2 = \frac{1}{N} \sum_{h=1}^L \sum_{i=1}^{N_h} (X_{hi} - \bar{X})^2$$
 
Can be decomposed into within-stratum variance ($\sigma_w^2$) and between-stratum variance ($\sigma_b^2$). $\sigma^2 = \sigma_w^2 + \sigma_b^2$.

**Estimator variance**

$$V(\bar{x}_{st}) = \frac{1}{N^2} \sum_{h=1}^L N_h^2 \frac{N_h - n_h}{N_h} \frac{S_h^2}{n_h}$$

Where:
- $S_h^2$ is the variance of the $h$-th stratum.

**Precision**

Homogeneous strata reduce the within-stratum variance ($\sigma_w^2$).

As a result, stratified sampling is more accurate than simple random sampling.

## Determining sample size

Suppose we desire:
- $d_0$: Precision
- $z_0$: Reliability level

Then, the variance estimator ( #TODO need link) is:
$$V(\bar{x}_{st}) = \frac{d_0^2}{z_0^2} = D^2$$

Solve for $n$ in the variance formula for each allocation method, yielding:

- **Equal allocation**

$$n = \frac{L \sum_{h=1}^L N_h^2 S_h^2}{D^2 N^2}$$

- **Proportional allocation**

$$n = \frac{\sum_{h=1}^L N_h S_h^2}{D^2 N + \frac{1}{N} \sum_{h=1}^L N_h S_h^2}$$

- **Optimum allocation**

$$n = \frac{\left( \sum_{h=1}^L N_h S_h \sqrt{C_h} \right) \left( \sum_{h=1}^L \frac{N_h S_h}{\sqrt{C_h}} \right)}{D^2 N^2 + \sum_{h=1}^L N_h S_h^2}$$

- **Neyman allocation**

$$n = \frac{\left( \sum_{h=1}^L N_h S_h \right)^2}{D^2 N^2 + \sum_{h=1}^L N_h S_h^2}$$

## Sample allocation methods

- **Equal allocation**
	$$n_h = \frac{n}{L}$$
	
	- The sample size is the same for each stratum.
	- Does not consider cost functions.
	
- **Proportional allocation**
	$$n_h = \frac{N_h}{N} \cdot n$$
	
	- The sample size is proportional to the stratum size.
	- **Most commonly** used.
	- Does not consider cost functions.
	
- **Optimum allocation**
	Suppose:
	- $C_0$: Fixed cost
	- $C_h$: Cost per sampling unit in the $h$-th stratum.
	
	$$n_h = \frac{N_h S_h / \sqrt{C_h}}{\sum_{h=1}^L N_h S_h / \sqrt{C_h}} \cdot n$$
	
	- Considers costs.
	- Costs vary across strata.
	
- **Neyman allocation**
	$$n_h = \frac{N_h S_h}{\sum_{h=1}^L N_h S_h} \cdot n$$
	
	- Considers costs.
	- Costs are the same across strata.
	
## Procedure

#TODO