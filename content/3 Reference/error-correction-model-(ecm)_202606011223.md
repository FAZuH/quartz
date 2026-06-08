---
publish: true
aliases:
  - Error Correction Model (ECM)
created: 2026-06-01T12:23:10.818+07:00
modified: 2026-06-01T12:23:10.818+07:00
published: 2026-06-01T12:23:10.818+07:00
creation-time: 2026-06-01 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

A model incorporating short-run dynamics and an error correction term that adjusts disequilibrium toward long-run equilibrium.

## Definition

When variables are [[Cointegration|cointegrated]], there exists a long-run equilibrium relationship. In the short run, however, there may be **disequilibrium**. The **Error Correction Model (ECM)** incorporates an adjustment mechanism to correct for this disequilibrium.

The term "error correction" refers to the fact that the **deviation from long-run equilibrium** (the "error") feeds back into the short-run dynamics to gradually restore equilibrium.

> [!TIP] Intuition
> What economic agents want (equilibrium) does not always equal what actually happens (disequilibrium). The ECM captures the **adjustment process** that brings the system back toward equilibrium over time.

### General Structure

An ECM model includes:

- **Short-run dynamics**: Changes in variables ($\Delta Y_t$, $\Delta X_t$)
- **Error correction term**: The lagged residual from the long-run equilibrium regression

### Types of ECM

1. **[[ECM Engle-Granger]]** — Two-step approach using residuals from long-run regression
2. **ECM Domowitz-El Badawi** — Alternative ECM specification

### Modeling Steps

1. Test for [[augmented-dickey-fuller-test_202603300223|stationarity]] of all variables
2. Test for [[Cointegration]] using [[Engle-Granger Cointegration Test|Engle-Granger]], [[Durbin-Watson Cointegration Test|DW]], or [[Johansen Cointegration Test|Johansen]]
3. If cointegrated, estimate the ECM parameters

### Related

- [[Cointegration]]
- [[ECM Engle-Granger]]
- [[ARDL Model]]
- [[Vector Autoregression (VAR)]]
- [[Spurious Regression]]
