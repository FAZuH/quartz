---
publish: true
created: 2026-02-22T19:24:22.345+07:00
modified: 2026-06-01T12:25:52.118+07:00
published: 2026-06-01T12:25:52.118+07:00
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

## Cheatsheets

- [[forecasting-methods-cheatsheet_202603292104|Forecasting Methods Cheatsheet]]

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

## Parametric Models

- _[[general-linear-process_202603161400|General Linear Process]]_
  - **[[general-linear-process_202603161400#Stationarity Condition|Property: Stationarity Condition for General Linear Process]]**

### Autoregressive (AR) Processes

- _[[arp-process-model_202603161400|AR(p) Process Model]]_
  - **[[arp-process-model_202603161400#Stationarity Condition|Property: Stationarity Condition for AR(p)]]**
  - **[[arp-process-model_202603161400#Yule-Walker Equations|Property: Yule-Walker Equations for AR(p)]]**
  - **[[arp-process-model_202603161400#Properties|Property: Variance of AR(p)]]**
  - _[[ar1-process-model_202603161400|AR(1) Process Model]]_
    - **[[ar1-process-model_202603161400#Stationarity Condition|Property: Stationarity Condition for AR(1)]]**
    - **[[ar1-process-model_202603161400#Autocorrelation Function|Property: ACF of AR(1)]]**
    - [[ar1-process-model_202603161400#Example: Explosive AR(1) Process|Example: Explosive AR(1) Process]]
  - _[[ar-characteristic-equation_202603161400|AR Characteristic Equation]]_
- _[[random-walk_202603161400|Random Walk]]_
- _[[backshift-operator_202603161400|Backshift Operator (B)]]_

### Moving Average (MA) Processes

- _[[white-noise_202603161400|White Noise]]_

- _[[invertible-ma(q)-process_202603311948|Invertible MA(q) Process]]_

- _[[moving-average-process-maq_202603161400|MA(q) Process Model]]_
  - _[[ma1-process-model_202603161400|MA(1) Process Model]]_
    - **[[ma1-process-model_202603161400#Autocorrelation Bounds|Property: Bounds of MA(1) Autocorrelation]]**
    - **[[ma1-process-model_202603161400#Model Non-Uniqueness|Property: Non-uniqueness of MA(1) Model]]**
    - **[[ma1-process-model_202603161400#Invertibility Condition|Property: Invertibility Condition for MA(1)]]**
  - _[[ma2-process-model_202603161400|MA(2) Process Model]]_

### Mixed and Integrated Models (ARMA/ARIMA)

- [[rationale-for-non-stationary-models_202603161400|Rationale for Non-Stationary Models]]
- _[[armapq-process-model_202603161400|ARMA(p,q) Process Model]]_
  - _[[arma11-process-model_202603161400|ARMA(1,1) Process Model]]_
    - **[[arma11-process-model_202603161400#Properties|Property: Variance and ACF of ARMA(1,1)]]**
- _[[arima-pdq-model-definition_202603161400|ARIMA(p,d,q) Model]]_
  - [[arima-pdq-model-definition_202603161400#ARIMA(p,1,q)|ARIMA(p,1,q) Formulation]]
  - **[[arima-pdq-model-definition_202603161400#Property: Characteristic Polynomial of ARIMA(p,1,q)|Property: Characteristic Polynomial of ARIMA(p,1,q)]]**
  - [[arima-pdq-model-definition_202603161400#Constant Term|Constant Term in ARIMA]]
  - _[[arima-pdq-model-definition_202603161400#Integrated Moving Average (IMA)|IMA(d,q) Model]]_
    - _[[arima-pdq-model-definition_202603161400#IMA(1,1)|IMA(1,1) Model]]_
    - _[[arima-pdq-model-definition_202603161400#IMA(2,2)|IMA(2,2) Model]]_
  - _[[arima-pdq-model-definition_202603161400#Autoregressive Integrated (ARI)|ARI(p,d) Model]]_
    - _[[arima-pdq-model-definition_202603161400#ARI(1,1)|ARI(1,1) Model]]_
    - [[arima-pdq-model-definition_202603161400#Procedure: Determining Weights for ARI(1,1)|Procedure: Determining Weights for ARI(1,1)]]

## Smoothing Methods

- [[smoothing-methods_202603161400|Smoothing Methods Overview]]
- [[naive-method_202603161400|Naive Method]]
- [[averaging-method_202603161400|Averaging Method]]
- _[[moving-average-process_202603161400|Moving Average Process (Stochastic)]]_
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

## Forecasting

- _[[minimum-mean-square-error-forecast_202604271321|Minimum Mean Square Error Forecast]]_
- **[[deterministic-trends-forecast_202604271321|Deterministic Trends Forecast]]**
- [[arima-forecasting_202604271321|ARIMA Forecasting]]
- **[[prediction-limits_202604271321|Prediction Limits]]**
- [[updating-arima-forecasts_202604271321|Updating ARIMA Forecasts]]
- [[forecasting-transformed-series_202604271321|Forecasting Transformed Series]]
- [[random-walk-with-drift-(forecasting)_202606011222|Random Walk with Drift (Forecasting)]]

## Examples

- [[economic-and-natural-time-series-examples_202603161400|Economic and Natural Time Series Examples]]

## Stationarity Tests

- [[procedure-visual-stationarity-test_202603300225|Procedure: Visual Stationarity Test]]
- _[[bartlett's-test-for-acf_202603300222|Bartlett's Test for ACF]]_
- _[[box-pierce-test_202603300222|Box-Pierce Test]]_
- _[[ljung-box-test_202603300222|Ljung-Box Test]]_
- [[about-box-pierce-vs-ljung-box-comparison_202603300226|Box-Pierce vs Ljung-Box Comparison]]
- _[[dickey-fuller-test_202603300223|Dickey-Fuller Test]]_
- _[[augmented-dickey-fuller-test_202603300223|Augmented Dickey-Fuller Test]]_

## Model Specification

- _[[partial-autocorrelation-(pacf)_202603300223|Partial Autocorrelation (PACF)]]_
- [[procedure-model-identification-via-acf-pacf_202603300227|Procedure: Model Identification via ACF/PACF]]
- _[[extended-autocorrelation-function-(eacf)_202603300224|Extended Autocorrelation Function (EACF)]]_
- [[scan-(smallest-canonical-correlation)_202606011221|SCAN (Smallest Canonical Correlation)]]
- _[[aic-criterion_202603300224|AIC Criterion]]_
- _[[bic-criterion_202603300224|BIC Criterion]]_

## Parameter Estimation

- _[[method-of-moments_202604052126|Method of Moments]]_
- [[parameter-estimation-by-method-of-moments_202604052127|Parameter Estimation by Method of Moments]]
- _[[noise-variance-estimation_202604052127|Noise Variance Estimation]]_
- _[[conditional-sum-of-squares-function_202604052127|Conditional Sum of Squares Function]]_
- [[conditional-least-squares_202604052128|Conditional Least Squares]]
- [[least-square-method_202604052128|Least Square Method]]
- _[[unconditional-sum-of-squares-function_202604052128|Unconditional Sum-of-Squares Function]]_
- [[unconditional-least-squares_202604052128|Unconditional Least Squares]]
- _[[maximum-likelihood-method_202604052129|Maximum Likelihood Method]]_
- **[[large-sample-properties-of-parameter-estimates_202604052129|Property: Large Sample Properties of Parameter Estimates]]**
- [[canadian-hare-abundance-series_202604052129|Canadian Hare Abundance Series]]

## Model Diagnostics

- [[durbin-watson-test_202606011221|Durbin-Watson Test]]
- [[breusch-godfrey-lm-test_202606011221|Breusch-Godfrey LM Test]]
- [[jarque-bera-test_202606011221|Jarque-Bera Test]]
- [[overfitting-(model-diagnostics)_202606011221|Overfitting (Model Diagnostics)]]
- **[[parameter-redundancy_202606011221|Parameter Redundancy]]**

## Volatility Models (ARCH/GARCH)

- _[[about-volatility-clustering_202604201222|Volatility Clustering]]_
- _[[about-leverage-effect_202604201222|Leverage Effect]]_
- _[[about-principle-of-parsimony-in-econometric-modeling_202604201222|Principle of Parsimony in Econometric Modeling]]_
- _[[about-arma-vs-arch-garch-relationship_202604201222|ARMA vs ARCH/GARCH Relationship]]_
- _[[definition-log-returns_202604201223|Log-Returns]]_
- _[[definition-continuously-compounded-return_202604201223|Continuously Compounded Return]]_
- _[[definition-conditional-variance_202604201223|Conditional Variance]]_
- _[[definition-arch(m)-model_202604201223|ARCH(m) Model]]_
  - **[[definition-arch(m)-model_202604201223#Unconditional Mean|Property: Unconditional Mean of ARCH]]**
  - **[[definition-arch(m)-model_202604201223#Unconditional Variance|Property: Unconditional Variance of ARCH]]**
  - **[[definition-arch(m)-model_202604201223#Kurtosis|Property: Kurtosis of ARCH (Heavy Tails)]]**
- _[[definition-garch(m,s)-model_202604201224|GARCH(m,s) Model]]_
  - **[[definition-garch(m,s)-model_202604201224#Unconditional Variance|Property: Unconditional Variance of GARCH]]**
  - **[[definition-garch(m,s)-model_202604201224#Kurtosis|Property: Kurtosis of GARCH (Heavy Tails)]]**
  - **[[definition-garch(m,s)-model_202604201224#Volatility Persistence|Property: Volatility Persistence]]**
- _[[definition-standardized-residuals_202604201223|Standardized Residuals]]_
- [[procedure-building-a-volatility-model_202604201224|Building a Volatility Model]]
- [[procedure-testing-for-arch-effects_202604201225|Testing for ARCH Effects]]
- [[procedure-maximum-likelihood-estimation-for-arch-garch_202604201225|Maximum Likelihood Estimation for ARCH/GARCH]]
- [[procedure-model-checking-for-arch-garch_202604201225|Model Checking for ARCH/GARCH]]
- [[procedure-forecasting-with-arch(m)_202604201226|Forecasting with ARCH(m)]]
- [[procedure-forecasting-with-garch(m,s)_202604201226|Forecasting with GARCH(m,s)]]

## Seasonal Models (SARIMA)

- _[[seasonal-ma(q)-model_202604271314|Seasonal MA(Q) Model]]_
- _[[seasonal-ar(p)-model_202604271314|Seasonal AR(P) Model]]_
- _[[multiplicative-seasonal-arma-model_202604271314|Multiplicative Seasonal ARMA Model]]_
- _[[seasonal-differencing_202604271314|Seasonal Differencing]]_
- _[[seasonal-arima-model_202604271314|Seasonal ARIMA Model]]_
- [[sarima-modeling-for-co2-levels_202604271314|SARIMA Modeling for CO2 Levels]]

## Cointegration and ECM

- _[[spurious-regression_202606011222|Spurious Regression]]_
- _[[cointegration_202606011222|Cointegration]]_
- [[engle-granger-cointegration-test_202606011222|Engle-Granger Cointegration Test]]
- [[durbin-watson-cointegration-test_202606011222|Durbin-Watson Cointegration Test]]
- [[johansen-cointegration-test_202606011223|Johansen Cointegration Test]]
- _[[error-correction-model-(ecm)_202606011223|Error Correction Model (ECM)]]_
- [[ecm-engle-granger_202606011223|ECM Engle-Granger]]
- _[[ardl-model_202606011223|ARDL Model]]_

## Vector Autoregression (VAR)

- _[[vector-autoregression-(var)_202606011224|Vector Autoregression (VAR)]]_
  - **[[vector-autoregression-(var)_202606011224#Primitive vs Standard Form|Property: Primitive vs Standard Form VAR]]**
- [[granger-causality-test_202606011224|Granger Causality Test]]
- [[impulse-response-function-(irf)_202606011224|Impulse Response Function (IRF)]]
- [[variance-decomposition_202606011224|Variance Decomposition]]
- _[[vecm_202606011224|VECM]]_
