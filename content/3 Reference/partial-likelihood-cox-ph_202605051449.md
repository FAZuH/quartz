---
publish: true
aliases:
  - Partial Likelihood Cox PH
created: 2026-05-05T14:49:51.385+07:00
modified: 2026-05-05T15:51:22.912+07:00
published: 2026-05-05T15:51:22.912+07:00
cssclasses: ""
creation-time: 2026-05-05 14:49
status: in progress
tags:
parent:
  - "[[survival-model]]"
---


## Definition

The **Partial Likelihood** is the component of the full likelihood used to estimate $\boldsymbol{\beta}$ in the Cox PH model, treating the baseline hazard $h_0(t)$ as a nuisance parameter.

## Full Likelihood Factorization

For $n$ independent observations $(t_i, \delta_i, \mathbf{x}_i)$:

$$L(\boldsymbol{\beta}, h_0(\cdot)) = \prod_{i=1}^n f(t_i|\mathbf{x}_i)^{\delta_i} S(t_i|\mathbf{x}_i)^{1-\delta_i}$$

Using $f(t|\mathbf{x}) = h(t|\mathbf{x}) S(t|\mathbf{x})$ and the Cox PH model:

$$L(\boldsymbol{\beta}, h_0(\cdot)) = \prod_{i=1}^n \left[h_0(t_i) e^{\boldsymbol{\beta}'\mathbf{x}_i}\right]^{\delta_i} \left[e^{-\int_0^{t_i} h_0(u)du}\right]^{e^{\boldsymbol{\beta}'\mathbf{x}_i}}$$

This factorizes into:

$$L(\boldsymbol{\beta}, h_0(\cdot)) = L_1(\boldsymbol{\beta}) \times L_2(\boldsymbol{\beta}, h_0)$$

where $L_1(\boldsymbol{\beta})$ is the **partial likelihood** — it depends only on $\boldsymbol{\beta}$ and the event ordering, not on $h_0(t)$.

## Partial Likelihood (No Ties)

Let there be $D$ distinct event times: $t_1 < t_2 < \ldots < t_D$. At each $t_j$, let $R_j$ be the **risk set** — all subjects still at risk just before $t_j$.

$$\boxed{L_1(\boldsymbol{\beta}) = \prod_{j=1}^D \frac{e^{\boldsymbol{\beta}'\mathbf{x}_{(j)}}}{\sum_{l \in R_j} e^{\boldsymbol{\beta}'\mathbf{x}_l}}}$$

where:
- $\mathbf{x}_{(j)}$ : covariate vector of the subject who experiences the event at $t_j$
- $R_j$ : set of indices of subjects at risk at $t_j$

## Intuition

At each event time $t_j$, the contribution to the likelihood is the ratio:

$$L(t_j) = \frac{\text{hazard of the subject who actually had the event}}{\text{sum of hazards of all subjects at risk}} = \frac{h_0(t_j) e^{\boldsymbol{\beta}'\mathbf{x}_{(j)}}}{\sum_{l \in R_j} h_0(t_j) e^{\boldsymbol{\beta}'\mathbf{x}_l}} = \frac{e^{\boldsymbol{\beta}'\mathbf{x}_{(j)}}}{\sum_{l \in R_j} e^{\boldsymbol{\beta}'\mathbf{x}_l}}$$

The $h_0(t_j)$ cancels because it appears in both numerator and denominator — this is why $h_0(t)$ does not need to be specified.

Since events are assumed independent, multiply across all event times.

## Estimation

Maximize $\log L_1(\boldsymbol{\beta})$ to obtain $\hat{\boldsymbol{\beta}}$ (MLE). The score function and information matrix give standard errors. This is done numerically (e.g., Newton-Raphson) in practice.

## Related

- [[3 Reference/cox-proportional-hazards-model_202605051448\|Cox Proportional Hazards Model]]
- [[3 Reference/def-likelihood-censored-data_202603281500\|Likelihood for Censored Data]]
