---
publish: true
aliases:
  - One-Sample Log-Rank Test
created: 2026-05-05T14:07:05.060+07:00
modified: 2026-05-05T14:09:38.765+07:00
published: 2026-05-05T14:09:38.765+07:00
cssclasses: ""
creation-time: 2026-05-05 14:07
status: in progress
tags:
parent:
  - "[[survival-model]]"
---


## Definition

Let:
- $n$ : sample size (with censored observations) from a population
- $h(t)$ : true hazard function
- $h_0(t)$ : known/hypothesized hazard function (reference population)
- $\tau$ : maximum follow-up time
- $t_1 < t_2 < \ldots < t_D$ : ordered distinct event times

**Test Hypotheses:**
$$H_0 : h(t) = h_0(t) \quad \forall t \leq \tau \quad \text{vs} \quad H_1 : h(t) \neq h_0(t) \; \text{for some } t \leq \tau$$

**Test Statistic:**
$$Z(\tau) = O(\tau) - E(\tau) = \sum_{i=1}^D W(t_i) \frac{d_i}{Y(t_i)} - \int_0^\tau W(s)\, h_0(s)\, ds$$

where:
- $d_i$ : number of events at time $t_i$
- $Y(t_i)$ : number at risk just before $t_i$
- $W(t)$ : weight function, with $W(t) = 0$ when $Y(t) = 0$

Under $H_0$:
$$\operatorname{Var}[Z(\tau)] = \int_0^\tau W^2(s)\,\frac{h_0(s)}{Y(s)}\, ds$$

For large $n$: $\displaystyle \frac{Z(\tau)^2}{\operatorname{Var}[Z(\tau)]} \sim \chi^2_1$

For one-sided alternative $h(t) > h_0(t)$: $\displaystyle \frac{Z(\tau)}{\sqrt{\operatorname{Var}[Z(\tau)]}} \sim N(0,1)$

**1-Sample Log-Rank Test** ($W(t) = Y(t)$):
- $O(\tau) = \sum_{i=1}^D d_i$ : total observed events up to $\tau$
- $E(\tau) = \operatorname{Var}[Z(\tau)] = \sum_{j=1}^n \left[H_0(T_j) - H_0(L_j)\right]$
- $L_j$ : entry time of subject $j$ into the study
- $T_j$ : exit time (event or censoring) of subject $j$

> [!TIP] Interpretation
> Compare whether the observed number of events $O(\tau)$ matches what is expected under a known hazard $h_0(t)$. If $Z(\tau)$ is large (positive), the sample hazard exceeds the reference hazard.

## Related

- [[3 Reference/log-rank-test_202605051407\|Log-Rank Test]]
- [[3 Reference/def-nelson-aalen-estimator_202603281500\|Nelson-Aalen Estimator]]
- [[3 Reference/def-cumulative-hazard_202603281500\|Cumulative Hazard]]
