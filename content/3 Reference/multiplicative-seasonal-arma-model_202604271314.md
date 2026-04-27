---
publish: true
aliases:
  - Multiplicative Seasonal ARMA Model
created: 2026-04-27T13:14:06.381+07:00
modified: 2026-04-27T13:14:06.381+07:00
published: 2026-04-27T13:14:06.381+07:00
cssclasses: ""
creation-time: 2026-04-27 13:14
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

A **Multiplicative Seasonal ARMA Model**, denoted as $\text{ARMA}(p,q) \times (P,Q)_s$, is a model that combines non-seasonal and seasonal components. It has a seasonal period $s$, AR characteristic polynomials $\phi(x)$ (non-seasonal) and $\Phi(x)$ (seasonal), and MA characteristic polynomials $\theta(x)$ (non-seasonal) and $\Theta(x)$ (seasonal).

The model is defined by:
$$
\Phi(B^s)\phi(B)Y_t = \Theta(B^s)\theta(B)e_t
$$

> [!TIP] Interpretation
> Sometimes a time series exhibits both short-term (non-seasonal) and long-term (seasonal) autocorrelation. This model captures both by multiplying the operators. It's more parsimonious than a general ARMA model with many parameters.