---
publish: true
aliases:
  - Likelihood for Censored Data
created: 2026-03-30T13:58:25.260+07:00
modified: 2026-04-07T08:30:51.873+07:00
published: 2026-04-07T08:30:51.873+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Likelihood for right-censored data**:

$$L = \prod_{i=1}^n [f(t_i)]^{\delta_i} [S(t_i)]^{1-\delta_i}$$

where $\delta_i$ is the event indicator:
- $\delta_i = 1$ if event observed at time $t_i$
- $\delta_i = 0$ if censored at time $t_i$

## Likelihood for Left-Truncated Data

For left-truncated data with entry time $L_i$:

$$L = \prod_{i=1}^n \frac{f(t_i)}{S(L_i)}$$

> [!NOTE]
> Subjects must survive until $L_i$ toenter the study. The likelihood uses conditional probabilities.

## Likelihood for Combined Left-Truncated & Right-Censored

For subject entering at $L_i$ with event/censoring at $t_i$:

$$L_i = \left[\frac{f(t_i)}{S(L_i)}\right]^{\delta_i} \left[\frac{S(t_i)}{S(L_i)}\right]^{1-\delta_i}$$

## Example: Right-Censored Data

**Scenario**: 5 patients in a clinical trial. 3 die at times 2, 5, 8; 2 are censored at times 3, 6.

**Construction**:
1. Event times ($\delta_i = 1$): contribute $f(t_i)$
2. Censored times ($\delta_i = 0$): contribute $S(t_i)$

$$L = f(2) \cdot f(5) \cdot f(8) \cdot S(3) \cdot S(6)$$

**For exponential model** with hazard $\lambda$:

$$L = \lambda e^{-\lambda \cdot 2} \cdot \lambda e^{-\lambda \cdot 5} \cdot \lambda e^{-\lambda \cdot 8} \cdot e^{-\lambda \cdot 3} \cdot e^{-\lambda \cdot 6} = \lambda^3 e^{-\lambda \cdot 24}$$

Log-likelihood: $\ln L = 3\ln\lambda - 24\lambda$

MLE: $\frac{d}{d\lambda}\ln L = \frac{3}{\lambda} - 24 = 0 \Rightarrow \hat{\lambda} = \frac{3}{24} = 0.125$

## Example: Left-Truncated Data

**Scenario**: Nursing home study. Subject enters at age 70, dies at age 85.

The subject must survive until age 70 to be observed. Contribution to likelihood:

$$L_i = \frac{f(85)}{S(70)}$$

This is the conditional density given survival until entry.

## Related

- [[3 Reference/def-censored-data_202603281500\|Censored Data]]
- [[3 Reference/def-truncated-data_202603281500\|Truncated Data]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]