---
publish: true
aliases:
  - Likelihood with Ties Cox PH
created: 2026-05-05T14:50:23.058+07:00
modified: 2026-05-19T14:40:52.045+07:00
published: 2026-05-19T14:40:52.045+07:00
cssclasses: ""
creation-time: 2026-05-05 14:50
status: in progress
tags:
parent:
  - "[[survival-model]]"
---


When multiple events occur at the same time $t_i$ (**ties**), the partial likelihood must account for the possible event orderings. Three methods exist: [[3 Reference/likelihood-with-ties-cox-ph_202605051450#Method 1 Breslow (Approximation)\|breslow]], [[3 Reference/likelihood-with-ties-cox-ph_202605051450#Method 2 Efron (Improved Approximation)\|efron]] and [[3 Reference/likelihood-with-ties-cox-ph_202605051450#Method 3 Discrete (Exact)\|discrete]]

## Notation

- $D$ : total distinct event times
- $d_i$ : number of events at time $t_i$
- $\mathcal{D}_i$ : set of $d_i$ subjects experiencing event at $t_i$
- $R_i$ : risk set at $t_i$
- $\mathbf{Z}_i = \sum_{k \in \mathcal{D}_i} \mathbf{x}_k$ : sum of covariate vectors of event subjects
- $\mathbf{x}_{qj}$ : covariate vector of a possible selection of $d_i$ subjects from $R_i$

## Method 1: Breslow (Approximation)

Treats ties as sequential events, but does not update the risk set between them.

$$L_{\text{Breslow}}(\boldsymbol{\beta}) = \prod_{i=1}^D \frac{\exp(\boldsymbol{\beta}'\mathbf{Z}_i)}{\left[\sum_{l \in R_i} \exp(\boldsymbol{\beta}'\mathbf{x}_l)\right]^{d_i}}$$

The denominator uses the full risk set $d_i$ times.

**Example** (Burn data, $t=4$, $Y=145$ with 31 women [W] and 114 men [M], 5 events: 1W + 4M):

$$L_{\text{Breslow}}(t=4) = \frac{e^{\beta_1}}{[114 + 31 e^{\beta_1}]^5}$$

## Method 2: Efron (Improved Approximation)

Similar to Breslow but adds a correction factor to the denominator as each successive event occurs.

$$L_{\text{Efron}}(\boldsymbol{\beta}) = \prod_{i=1}^D \frac{\exp(\boldsymbol{\beta}'\mathbf{Z}_i)}{\prod_{j=1}^{d_i} \left[\sum_{l \in R_i} \exp(\boldsymbol{\beta}'\mathbf{x}_l) - \frac{j-1}{d_i}\sum_{k \in \mathcal{D}_i} \exp(\boldsymbol{\beta}'\mathbf{x}_k)\right]}$$

At the $j$-th event, the denominator is reduced by $\frac{j-1}{d_i}$ of the total hazard from the $d_i$ event subjects.

**Example** (Burn data, $t=4$):

The total hazard of 5 event subjects: $h_0(4)[4 + e^{\beta_1}]$

$$L_{\text{Efron}}(t=4) = \frac{e^{\beta_1}}{\prod_{j=1}^5 \left[31 e^{\beta_1} + 114 - \frac{j-1}{5}(4 + e^{\beta_1})\right]}$$

## Method 3: Discrete (Exact)

Enumerates all possible ways $d_i$ subjects could be selected from $R_i$ as the event set.

$$L_{\text{Discrete}}(\boldsymbol{\beta}) = \prod_{i=1}^D \frac{\exp(\boldsymbol{\beta}'\mathbf{Z}_i)}{\sum_{q \in Q_i} \exp(\boldsymbol{\beta}'\mathbf{Z}_q^*)}$$

where $Q_i$ enumerates all $\binom{Y_i}{d_i}$ possible selections of $d_i$ subjects from $R_i$.

**Example** (Burn data, $t=4$): 6 possibilities for 5 events by gender (5W, 4W+1M, 3W+2M, ..., 5M):

$$\sum_{l=0}^5 \binom{114}{l} \binom{31}{5-l} e^{(5-l)\beta_1}$$

## Comparison

| Method | Accuracy | Computation | When to Use |
|--------|----------|-------------|-------------|
| **Breslow** | Good for few ties | Fastest | Default in most software |
| **Efron** | Better than Breslow | Moderate | Moderate ties; R default |
| **Discrete** | Exact | Slow (combinatorial) | Many ties, small $Y_i$ |

> [!NOTE]
> R's `coxph()` uses **Efron** by default. The `method` argument accepts `"efron"`, `"breslow"`, or `"exact"`.

## Related

- [[3 Reference/partial-likelihood-cox-ph_202605051449\|Partial Likelihood Cox PH]]
- [[3 Reference/cox-proportional-hazards-model_202605051448\|Cox Proportional Hazards Model]]
