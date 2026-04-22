---
publish: true
aliases:
  - Leverage Effect
created: 2026-04-20T12:22:34.132+07:00
modified: 2026-04-20T13:13:41.826+07:00
published: 2026-04-20T13:13:41.826+07:00
cssclasses: ""
creation-time: 2026-04-20 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

> The market responds differently to "good" news (positive returns) versus "bad" news (negative returns).

## About

A phenomenon in financial markets where the [[3 Reference/time-series-data_202603161400\|series of returns]] responds differently to its own positive and negative movements.

In other words, the conditional distribution of $|r_t|$ given $\{r_{t-1} > 0\}$ is different from that given $\{r_{t-1} < 0\}$.


> [!TIP] Interpretation
> The market responds differently to "good" news (positive returns) versus "bad" news (negative returns). Typically, negative shocks increase volatility more than positive shocks of the same magnitude. This asymmetry is called the leverage effect because a drop in stock price increases the debt-to-equity ratio, making the stock riskier.

This is one of the "stylized facts" of financial time series that ARCH/GARCH models attempt to capture, though standard ARCH/GARCH models don't fully account for the asymmetry—extensions like EGARCH or GJR-GARCH were developed for this purpose.

## Key characteristics 

- Financial [[3 Reference/definition-log-returns_202604201223\|Log-Returns]] series are typically heavily tailed (leptokurtic)
- The Q-Q plot of returns against normal distribution shows this heavy-tailed behavior
- The sample quantiles of the two conditional distributions (positive vs negative [[3 Reference/lag-definition_202603161400\|lagged]] returns) plotted against each other reveal this asymmetry

## Related
- [[3 Reference/about-volatility-clustering_202604201222\|Volatility Clustering]]
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]