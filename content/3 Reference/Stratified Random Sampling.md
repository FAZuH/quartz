---
publish: true
created: 2026-03-25T15:22:40.662+07:00
modified: 2026-03-25T15:22:40.662+07:00
published: 2026-03-25T15:22:40.662+07:00
tags:
  - content-type/conceptual
  - content-type/referential
creation-time: 2025-03-05 14:10
status: complete
parent:
  - "[[sampling methods]]"
---

**Stratified random sampling** is a sampling method that splits popultaion into [strata](Strata.md) that is internally homogeneous, but not from each other. We would then take samples from each strata.

---

## About stratified random sampling

Simple or [[Systematic Random Sampling|systematic random sampling]] is only suitable for homogeneous populations.

Homogeneous populations are rarely encountered.

Example:

- Suppose we want to estimate the income of private employees across fifty cities.
- Cities can be grouped into large, medium, and small cities.
- The number of private employees living in large cities is far greater than in small or medium cities.
- In other words, the distribution is not symmetric.
- A number of private employees are selected from each group, and the estimation is based on the combination of these samples.

The population is divided into several subpopulations called [[Strata|strata]].

Stratified random sampling is the process of **grouping population into strata**, then **selecting samples from each stratum** and combining these samples to estimate population parameters.

## Advantages

1. Improves precision.
2. In addition to information about the population, information about each stratum is also obtained.
3. Information is easier to collect.

## Parameter estimation

A population of size $N$ is divided into $L$ strata with sizes $N\_1, N\_2, \dots, N\_L$, with sample sizes $n\_1, n\_2, \dots, n\_L$, where $n = n\_1, n\_2, \dots, n\_L$.

**Stratum total**
$$\hat{X}\_h = N\_h \bar{X}\_h$$

**Population total**
$$\hat{X}_{st} = \sum_{h=1}^L N\_h \bar{x}\_h$$

**Population mean**
$$\bar{x}_{st} = \frac{\hat{X}_{st}}{N}$$

Where:

- $X$: Total population
- $X\_h$: Total value of sampling units in the $h$-th stratum
- $\bar{X}\_h$: Mean of the $h$-th stratum
- $\bar{X}$: Population mean

These estimators are unbiased because simple random sampling is also used for each stratum.

## Variance analysis

**Population variance**

$$\sigma^2 = \frac{1}{N} \sum\_{h=1}^L \sum\_{i=1}^{N\_h} (X\_{hi} - \bar{X})^2$$

Can be decomposed into within-stratum variance ($\sigma\_w^2$) and between-stratum variance ($\sigma\_b^2$). $\sigma^2 = \sigma\_w^2 + \sigma\_b^2$.

**Estimator variance**

$$V(\bar{x}_{st}) = \frac{1}{N^2} \sum_{h=1}^L N\_h^2 \frac{N\_h - n\_h}{N\_h} \frac{S\_h^2}{n\_h}$$

Where:

- $S\_h^2$ is the variance of the $h$-th stratum.

**Precision**

Homogeneous strata reduce the within-stratum variance ($\sigma\_w^2$).

As a result, stratified sampling is more accurate than simple random sampling.

## Determining sample size

Suppose we desire:

- $d\_0$: Precision
- $z\_0$: Reliability level

Then, the variance estimator ( #TODO need link) is:
$$V(\bar{x}\_{st}) = \frac{d\_0^2}{z\_0^2} = D^2$$

Solve for $n$ in the variance formula for each allocation method, yielding:

- **Equal allocation**

$$n = \frac{L \sum\_{h=1}^L N\_h^2 S\_h^2}{D^2 N^2}$$

- **Proportional allocation**

$$n = \frac{\sum\_{h=1}^L N\_h S\_h^2}{D^2 N + \frac{1}{N} \sum\_{h=1}^L N\_h S\_h^2}$$

- **Optimum allocation**

$$n = \frac{\left( \sum\_{h=1}^L N\_h S\_h \sqrt{C\_h} \right) \left( \sum\_{h=1}^L \frac{N\_h S\_h}{\sqrt{C\_h}} \right)}{D^2 N^2 + \sum\_{h=1}^L N\_h S\_h^2}$$

- **Neyman allocation**

$$n = \frac{\left( \sum\_{h=1}^L N\_h S\_h \right)^2}{D^2 N^2 + \sum\_{h=1}^L N\_h S\_h^2}$$

## Sample allocation methods

- **Equal allocation**
  $$n\_h = \frac{n}{L}$$

  - The sample size is the same for each stratum.
  - Does not consider cost functions.

- **Proportional allocation**
  $$n\_h = \frac{N\_h}{N} \cdot n$$

  - The sample size is proportional to the stratum size.
  - **Most commonly** used.
  - Does not consider cost functions.

- **Optimum allocation**
  Suppose:

  - $C\_0$: Fixed cost
  - $C\_h$: Cost per sampling unit in the $h$-th stratum.

  $$n\_h = \frac{N\_h S\_h / \sqrt{C\_h}}{\sum\_{h=1}^L N\_h S\_h / \sqrt{C\_h}} \cdot n$$

  - Considers costs.
  - Costs vary across strata.

- **Neyman allocation**
  $$n\_h = \frac{N\_h S\_h}{\sum\_{h=1}^L N\_h S\_h} \cdot n$$

  - Considers costs.
  - Costs are the same across strata.

## Procedure

#TODO
