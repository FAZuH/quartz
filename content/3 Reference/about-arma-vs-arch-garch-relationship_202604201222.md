---
publish: true
aliases:
  - ARMA vs ARCH/GARCH Relationship
created: 2026-04-20T12:22:54.388+07:00
modified: 2026-05-17T17:35:46.164+07:00
published: 2026-05-17T17:35:46.164+07:00
cssclasses: ""
creation-time: 2026-04-20 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---



| Linear Model      | Squared Series       | Volatility Model |
| ----------------- | -------------------- | ---------------- |
| AR(p) process     | $a_t^2$ follows AR   | ARCH(p)          |
| ARMA(p,q) process | $a_t^2$ follows ARMA | GARCH(p,q)       |

## ARCH as AR Process

An [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]] can be viewed as an [[3 Reference/arp-process-model_202603161400\|AR(m) Process Model]] applied to the squared series $a_t^2$:

$$
a_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2 + ... + \alpha_m a_{t-m}^2 + \eta_t
$$

where $\eta_t = a_t^2 - \sigma_t^2$ is a martingale difference sequence.

## GARCH as ARMA Process

A [[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]] model can be written as an [[3 Reference/armapq-process-model_202603161400\|ARMA(max(m,s),s) Process Model]] for $a_t^2$:

$$
a_t^2 = \alpha_0 + \sum_{i=1}^{\max(m,s)} (\alpha_i + \beta_i) a_{t-i}^2 + \eta_t - \sum_{j=1}^{s} \beta_j \eta_{t-j}
$$

This representation explains why:
- GARCH is more parsimonious than high-order ARCH (just like ARMA vs AR)
- The stationarity condition for GARCH mirrors that of ARMA: $\sum(\alpha_i + \beta_i) < 1$

## Why This Matters

This relationship means we can use familiar tools from ARMA modeling:
- **PACF of $a_t^2$** -> determine ARCH order
- **ACF/PACF of $a_t^2$** -> identify GARCH structure
- **Stationarity conditions** -> ensure finite unconditional variance

## Related
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]]
- [[3 Reference/arp-process-model_202603161400\|AR(p) Process Model]]
- [[3 Reference/armapq-process-model_202603161400\|ARMA(p,q) Process Model]]