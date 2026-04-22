---
publish: true
aliases:
  - Volatility Clustering
created: 2026-04-20T12:22:26.736+07:00
modified: 2026-04-20T13:10:56.347+07:00
published: 2026-04-20T13:10:56.347+07:00
cssclasses: ""
creation-time: 2026-04-20 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

> periods of high volatility cluster together, as do periods of low volatility.

## About

A stylized fact about financial markets where <u>volatile periods tend to be followed by other volatile periods</u>.

This phenomenon is commonly observed in [[3 Reference/time-series-data_202603161400\|financial time series]] data.

Statistically, volatility clustering implies <u>time-varying conditional variance</u>: big volatility (variance) today may lead to big volatility tomorrow. This is why standard [[3 Reference/arima-pdq-model-definition_202603161400\|ARIMA]] models fail for financial returns—they assume constant variance.

The [[3 Reference/definition-arch(m)-model_202604201223\|ARCH]]/[[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH]] family of models was specifically designed to capture this volatility clustering behavior by modeling the conditional variance as a function of past squared returns.

> [!TIP] Interpretation
> Intuitively, the market becomes volatile whenever big news arrives, and it may take several periods for the market to fully digest the news. This creates the observed clustering pattern where a shock today leads to higher uncertainty tomorrow.

## Related
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]]
- [[3 Reference/definition-conditional-variance_202604201223\|Conditional Variance]]