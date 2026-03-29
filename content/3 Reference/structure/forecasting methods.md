---
publish: true
created: 2026-02-22T19:24:22.345+07:00
modified: 2026-03-29T17:37:17.496+07:00
published: 2026-03-29T17:37:17.496+07:00
tags:
  - type/category
creation-time: 2025-03-06 20:32
parent:
  - "[[statistics]]"
PassFrontmatter: true
---

# Forecasting Methods

- _italic_: Definition / About
- **Bold**: Property / Theorem
- Standard: Procedure / Example / Cheatsheet

## Basics

- _[[cross-section-data_202603161400|Cross-section Data]]_
- _[[time-series-data_202603161400|Time Series Data]]_
- _[[panel-pooled-data_202603161400|Panel/Pooled Data]]_
- _[[stochastic-process_202603161400|Stochastic Process]]_
- _[[time-series-components_202603161400|Time Series Components]]_
- _[[lag-definition_202603161400|Lag]]_
- [[univariate-vs-multivariate-models_202603161400|Univariate vs Multivariate Models]]

## Stationarity and Moments

- _[[autocovariance-and-autocorrelation_202603161400|Autocovariance and Autocorrelation]]_
- _[[weakly-stationary_202603161400|Weakly Stationary]]_
  - **[[weakly-stationary_202603161400#Relationship with Strict Stationarity|Theorem: Strict Stationary implies Weakly Stationary]]**
- _[[strictly-stationary_202603161400|Strictly Stationary]]_
  - **[[strictly-stationary_202603161400#Relationship with Weak Stationarity|Theorem: Strict Stationary implies Weakly Stationary]]**
- _[[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]_
- [[correlogram_202603161400|Correlogram]]
- _[[random-walk_202603161400|Random Walk]]_

## Parametric Models

- _[[general-linear-process_202603161400|General Linear Process]]_
  - **[[general-linear-process_202603161400#Stationarity Condition|Property: Stationarity Condition for General Linear Process]]**

### Autoregressive (AR) Processes

- _[[autoregressive-process_202603161400|Autoregressive (AR) Process]]_
- _[[ar1-process-model_202603161400|AR(1) Process Model]]_
  - **[[ar1-process-model_202603161400#Stationarity Condition|Property: Stationarity Condition for AR(1)]]**
  - **[[ar1-process-model_202603161400#Autocorrelation Function|Property: ACF of AR(1)]]**
  - [[ar1-process-model_202603161400#Example: Explosive AR(1) Process|Example: Explosive AR(1) Process]]
- _[[backshift-operator_202603161400|Backshift Operator (B)]]_
- _[[ar-characteristic-equation_202603161400|AR Characteristic Equation]]_
- _[[arp-process-model_202603161400|AR(p) Process Model]]_
  - **[[arp-process-model_202603161400#Stationarity Condition|Property: Stationarity Condition for AR(p)]]**
  - **[[arp-process-model_202603161400#Yule-Walker Equations|Property: Yule-Walker Equations for AR(p)]]**
  - **[[arp-process-model_202603161400#Variance|Property: Variance of AR(p)]]**

### Moving Average (MA) Processes

- _[[white-noise_202603161400|White Noise]]_
- _[[moving-average-process_202603161400|Moving Average Process (Stochastic)]]_
- _[[moving-average-process-maq_202603161400|Moving Average Process (MA(q))]]_
  - **[[moving-average-process-maq_202603161400#Autocorrelation Function|Property: ACF of MA(q)]]**
- _[[ma1-process-model_202603161400|MA(1) Process Model]]_
  - **[[ma1-process-model_202603161400#Autocorrelation Bounds|Property: Bounds of MA(1) Autocorrelation]]**
  - **[[ma1-process-model_202603161400#Model Non-Uniqueness|Property: Non-uniqueness of MA(1) Model]]**
  - **[[ma1-process-model_202603161400#Invertibility Condition|Property: Invertibility Condition for MA(1)]]**
- _[[ma2-process-model_202603161400|MA(2) Process Model]]_

### Mixed and Integrated Models (ARMA/ARIMA)

- _[[armapq-process-model_202603161400|ARMA(p,q) Process Model]]_
- _[[arma11-process-model_202603161400|ARMA(1,1) Process Model]]_
  - **[[arma11-process-model_202603161400#Properties|Property: Variance and ACF of ARMA(1,1)]]**
- [[rationale-for-non-stationary-models_202603161400|Rationale for Non-Stationary Models]]
- _[[arima-pdq-model-definition_202603161400|ARIMA(p,d,q) Model]]_
  - [[arima-pdq-model-definition_202603161400#ARIMA(p,1,q)|ARIMA(p,1,q) Formulation]]
  - **[[arima-pdq-model-definition_202603161400#Property: Characteristic Polynomial of ARIMA(p,1,q)|Property: Characteristic Polynomial of ARIMA(p,1,q)]]**
  - [[arima-pdq-model-definition_202603161400#Constant Term|Constant Term in ARIMA]]
  - _[[arima-pdq-model-definition_202603161400#Integrated Moving Average (IMA)|IMA(d,q) Model]]_
  - _[[arima-pdq-model-definition_202603161400#Autoregressive Integrated (ARI)|ARI(p,d) Model]]_
  - _[[arima-pdq-model-definition_202603161400#IMA(1,1)|IMA(1,1) Model]]_
  - _[[arima-pdq-model-definition_202603161400#IMA(2,2)|IMA(2,2) Model]]_
  - _[[arima-pdq-model-definition_202603161400#ARI(1,1)|ARI(1,1) Model]]_
  - [[arima-pdq-model-definition_202603161400#Procedure: Determining Weights for ARI(1,1)|Procedure: Determining Weights for ARI(1,1)]]

## Smoothing Methods

- [[smoothing-methods_202603161400|Smoothing Methods Overview]]
- [[naive-method_202603161400|Naive Method]]
- [[averaging-method_202603161400|Averaging Method]]
- [[single-moving-average_202603161400|Single Moving Average (SMA)]]
- [[double-moving-average_202603161400|Double Moving Average (DMA)]]
- [[single-exponential-smoothing_202603161400|Single Exponential Smoothing (SES)]]
- [[double-exponential-smoothing_202603161400|Double Exponential Smoothing (Holt's Linear Trend)]]
- [[holt-winter-seasonal-method_202603161400|Holt-Winter Seasonal Method]]

## Strategy and Estimation

- [[forecasting-model-accuracy-measures_202603161400|Forecasting Model Accuracy Measures]]
- [[selecting-a-model-using-data-splitting_202603161400|Model Selection via Data Splitting]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
- [[estimating-constant-mean_202603161400|Estimating Constant Mean]]
- [[least-squares-for-linear-trend-estimation_202603161400|Least Squares for Linear Trend Estimation]]
- [[least-squares-for-quadratic-trend-estimation_202603161400|Least Squares for Quadratic Trend Estimation]]

## Trends and Transformations

- _[[stochastic-vs-deterministic-trend_202603161400|Stochastic vs Deterministic Trend]]_
- _[[linear-and-quadratic-deterministic-trends_202603161400|Linear and Quadratic Deterministic Trends]]_
- [[seasonal-average-model_202603161400|Seasonal Average Model]]
- [[differencing-to-achieve-stationarity_202603161400|Procedure: Differencing to Achieve Stationarity]]
- [[log-transformation-for-variance-stabilization_202603161400|Procedure: Log Transformation for Variance Stabilization]]
- [[percentage-changes-transformation_202603161400|Procedure: Percentage Changes Transformation]]

## Examples

- [[economic-and-natural-time-series-examples_202603161400|Economic and Natural Time Series Examples]]
