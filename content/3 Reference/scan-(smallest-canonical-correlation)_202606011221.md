---
publish: true
aliases:
  - SCAN (Smallest Canonical Correlation)
created: 2026-06-01T12:21:59.329+07:00
modified: 2026-06-01T12:21:59.329+07:00
published: 2026-06-01T12:21:59.329+07:00
creation-time: 2026-06-01 12:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Alternative method to EACF for determining the orders (p,q) of an ARMA model using smallest canonical correlations.

## Procedure

An alternative to the [[extended-autocorrelation-function-(eacf)_202603300224|Extended Autocorrelation Function (EACF)]] for determining the orders of an [[armapq-process-model_202603161400|ARMA(p,q)]] model. Both SCAN and EACF are used when the [[sample-autocorrelation_202603161400|ACF]] and [[partial-autocorrelation-(pacf)_202603300223|PACF]] alone are insufficient to identify the model orders.

SCAN uses a table (similar to the EACF table) where rows correspond to AR orders $p$ and columns correspond to MA orders $q$. The method examines the smallest canonical correlation between $Y_t$ and $Y_{t-p-q-1}$ after controlling for intermediate variables.

> [!NOTE]
> SCAN is less commonly discussed than EACF in the literature but serves the same purpose — providing a systematic way to search for the ARMA order when ACF and PACF patterns are ambiguous.

## Related

- [[extended-autocorrelation-function-(eacf)_202603300224|Extended Autocorrelation Function (EACF)]]
- [[procedure-model-identification-via-acf-pacf_202603300227|Model Identification via ACF/PACF]]
- [[aic-criterion_202603300224|AIC Criterion]]
- [[bic-criterion_202603300224|BIC Criterion]]
