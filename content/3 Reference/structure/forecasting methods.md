---
publish: true
created: 2026-02-22T19:24:22.345+07:00
modified: 2026-04-20T12:29:44.248+07:00
published: 2026-04-20T12:29:44.248+07:00
tags:
  - type/category
cssclasses: ""
creation-time: 2025-03-06 20:32
parent:
  - "[[statistics]]"
PassFrontmatter: true
---


# Forecasting Methods

- *italic*: Definition / About
- **Bold**: Property / Theorem
- Standard: Procedure / Example / Cheatsheet

## Cheatsheets
- [[3 Reference/forecasting-methods-cheatsheet_202603292104\|Forecasting Methods Cheatsheet]]

## Basics
- *[[3 Reference/cross-section-data_202603161400\|Cross-section Data]]*
- *[[3 Reference/time-series-data_202603161400\|Time Series Data]]*
- *[[3 Reference/panel-pooled-data_202603161400\|Panel/Pooled Data]]*
- *[[3 Reference/stochastic-process_202603161400\|Stochastic Process]]*
- *[[3 Reference/time-series-components_202603161400\|Time Series Components]]*
- *[[3 Reference/lag-definition_202603161400\|Lag]]*
- [[3 Reference/univariate-vs-multivariate-models_202603161400\|Univariate vs Multivariate Models]]

## Stationarity and Moments
- *[[3 Reference/autocovariance-and-autocorrelation_202603161400\|Autocovariance and Autocorrelation]]*
- *[[3 Reference/weakly-stationary_202603161400\|Weakly Stationary]]*
	- **[[3 Reference/weakly-stationary_202603161400#Relationship with Strict Stationarity\|Theorem: Strict Stationary implies Weakly Stationary]]**
- *[[3 Reference/strictly-stationary_202603161400\|Strictly Stationary]]*
	- **[[3 Reference/strictly-stationary_202603161400#Relationship with Weak Stationarity\|Theorem: Strict Stationary implies Weakly Stationary]]**
- *[[3 Reference/sample-autocorrelation_202603161400\|Sample Autocorrelation (ACF)]]*
- [[3 Reference/correlogram_202603161400\|Correlogram]]

## Parametric Models
- *[[3 Reference/general-linear-process_202603161400\|General Linear Process]]*
	- **[[3 Reference/general-linear-process_202603161400#Stationarity Condition\|Property: Stationarity Condition for General Linear Process]]**
### Autoregressive (AR) Processes
- *[[3 Reference/arp-process-model_202603161400\|AR(p) Process Model]]*
	- **[[3 Reference/arp-process-model_202603161400#Stationarity Condition\|Property: Stationarity Condition for AR(p)]]**
	- **[[3 Reference/arp-process-model_202603161400#Yule-Walker Equations\|Property: Yule-Walker Equations for AR(p)]]**
	- **[[3 Reference/arp-process-model_202603161400#Properties\|Property: Variance of AR(p)]]**
	- *[[3 Reference/ar1-process-model_202603161400\|AR(1) Process Model]]*
		- **[[3 Reference/ar1-process-model_202603161400#Stationarity Condition\|Property: Stationarity Condition for AR(1)]]**
		- **[[3 Reference/ar1-process-model_202603161400#Autocorrelation Function\|Property: ACF of AR(1)]]**
		- [[3 Reference/ar1-process-model_202603161400#Example: Explosive AR(1) Process\|Example: Explosive AR(1) Process]]
	- *[[3 Reference/ar-characteristic-equation_202603161400\|AR Characteristic Equation]]*
- *[[3 Reference/random-walk_202603161400\|Random Walk]]*
- *[[3 Reference/backshift-operator_202603161400\|Backshift Operator (B)]]*
	
### Moving Average (MA) Processes
- *[[3 Reference/white-noise_202603161400\|White Noise]]*

- *[[3 Reference/invertible-ma(q)-process_202603311948\|Invertible MA(q) Process]]*
- *[[3 Reference/moving-average-process-maq_202603161400\|MA(q) Process Model]]*
	- *[[3 Reference/ma1-process-model_202603161400\|MA(1) Process Model]]*
		- **[[3 Reference/ma1-process-model_202603161400#Autocorrelation Bounds\|Property: Bounds of MA(1) Autocorrelation]]**
		- **[[3 Reference/ma1-process-model_202603161400#Model Non-Uniqueness\|Property: Non-uniqueness of MA(1) Model]]**
		- **[[3 Reference/ma1-process-model_202603161400#Invertibility Condition\|Property: Invertibility Condition for MA(1)]]**
	- *[[3 Reference/ma2-process-model_202603161400\|MA(2) Process Model]]*

### Mixed and Integrated Models (ARMA/ARIMA)
- [[3 Reference/rationale-for-non-stationary-models_202603161400\|Rationale for Non-Stationary Models]]
- *[[3 Reference/armapq-process-model_202603161400\|ARMA(p,q) Process Model]]*
	- *[[3 Reference/arma11-process-model_202603161400\|ARMA(1,1) Process Model]]*
		- **[[3 Reference/arma11-process-model_202603161400#Properties\|Property: Variance and ACF of ARMA(1,1)]]**
- *[[3 Reference/arima-pdq-model-definition_202603161400\|ARIMA(p,d,q) Model]]*
	- [[3 Reference/arima-pdq-model-definition_202603161400#ARIMA(p,1,q)\|ARIMA(p,1,q) Formulation]]
	- **[[3 Reference/arima-pdq-model-definition_202603161400#Property: Characteristic Polynomial of ARIMA(p,1,q)\|Property: Characteristic Polynomial of ARIMA(p,1,q)]]**
	- [[3 Reference/arima-pdq-model-definition_202603161400#Constant Term\|Constant Term in ARIMA]]
	- *[[3 Reference/arima-pdq-model-definition_202603161400#Integrated Moving Average (IMA)\|IMA(d,q) Model]]*
		- *[[3 Reference/arima-pdq-model-definition_202603161400#IMA(1,1)\|IMA(1,1) Model]]*
		- *[[3 Reference/arima-pdq-model-definition_202603161400#IMA(2,2)\|IMA(2,2) Model]]*
	- *[[3 Reference/arima-pdq-model-definition_202603161400#Autoregressive Integrated (ARI)\|ARI(p,d) Model]]*
		- *[[3 Reference/arima-pdq-model-definition_202603161400#ARI(1,1)\|ARI(1,1) Model]]*
		- [[3 Reference/arima-pdq-model-definition_202603161400#Procedure: Determining Weights for ARI(1,1)\|Procedure: Determining Weights for ARI(1,1)]]

## Smoothing Methods
- [[3 Reference/smoothing-methods_202603161400\|Smoothing Methods Overview]]
- [[3 Reference/naive-method_202603161400\|Naive Method]]
- [[3 Reference/averaging-method_202603161400\|Averaging Method]]
- *[[3 Reference/moving-average-process_202603161400\|Moving Average Process (Stochastic)]]*
- [[3 Reference/single-moving-average_202603161400\|Single Moving Average (SMA)]]
- [[3 Reference/double-moving-average_202603161400\|Double Moving Average (DMA)]]
- [[3 Reference/single-exponential-smoothing_202603161400\|Single Exponential Smoothing (SES)]]
- [[3 Reference/double-exponential-smoothing_202603161400\|Double Exponential Smoothing (Holt's Linear Trend)]]
- [[3 Reference/holt-winter-seasonal-method_202603161400\|Holt-Winter Seasonal Method]]

## Strategy and Estimation
- [[3 Reference/forecasting-model-accuracy-measures_202603161400\|Forecasting Model Accuracy Measures]]
- [[3 Reference/selecting-a-model-using-data-splitting_202603161400\|Model Selection via Data Splitting]]
- [[3 Reference/building-models-with-the-box-jenkins-strategy_202603161400\|Box-Jenkins Strategy]]
- [[3 Reference/estimating-constant-mean_202603161400\|Estimating Constant Mean]]
- [[3 Reference/least-squares-for-linear-trend-estimation_202603161400\|Least Squares for Linear Trend Estimation]]
- [[3 Reference/least-squares-for-quadratic-trend-estimation_202603161400\|Least Squares for Quadratic Trend Estimation]]

## Trends and Transformations
- *[[3 Reference/stochastic-vs-deterministic-trend_202603161400\|Stochastic vs Deterministic Trend]]*
- *[[3 Reference/linear-and-quadratic-deterministic-trends_202603161400\|Linear and Quadratic Deterministic Trends]]*
- [[3 Reference/seasonal-average-model_202603161400\|Seasonal Average Model]]
- [[3 Reference/differencing-to-achieve-stationarity_202603161400\|Procedure: Differencing to Achieve Stationarity]]
- [[3 Reference/log-transformation-for-variance-stabilization_202603161400\|Procedure: Log Transformation for Variance Stabilization]]
- [[3 Reference/percentage-changes-transformation_202603161400\|Procedure: Percentage Changes Transformation]]

## Examples
- [[3 Reference/economic-and-natural-time-series-examples_202603161400\|Economic and Natural Time Series Examples]]

## Stationarity Tests
- [[3 Reference/procedure-visual-stationarity-test_202603300225\|Procedure: Visual Stationarity Test]]
- *[[3 Reference/bartlett's-test-for-acf_202603300222\|Bartlett's Test for ACF]]*
- *[[3 Reference/box-pierce-test_202603300222\|Box-Pierce Test]]*
- *[[3 Reference/ljung-box-test_202603300222\|Ljung-Box Test]]*
- [[3 Reference/about-box-pierce-vs-ljung-box-comparison_202603300226\|Box-Pierce vs Ljung-Box Comparison]]
- *[[3 Reference/dickey-fuller-test_202603300223\|Dickey-Fuller Test]]*
- *[[3 Reference/augmented-dickey-fuller-test_202603300223\|Augmented Dickey-Fuller Test]]*

## Model Specification
- *[[3 Reference/partial-autocorrelation-(pacf)_202603300223\|Partial Autocorrelation (PACF)]]*
- [[3 Reference/procedure-model-identification-via-acf-pacf_202603300227\|Procedure: Model Identification via ACF/PACF]]
- *[[3 Reference/extended-autocorrelation-function-(eacf)_202603300224\|Extended Autocorrelation Function (EACF)]]*
- *[[3 Reference/aic-criterion_202603300224\|AIC Criterion]]*
- *[[3 Reference/bic-criterion_202603300224\|BIC Criterion]]*

## Parameter Estimation
- *[[3 Reference/method-of-moments_202604052126\|Method of Moments]]*
- [[3 Reference/parameter-estimation-by-method-of-moments_202604052127\|Parameter Estimation by Method of Moments]]
- *[[3 Reference/noise-variance-estimation_202604052127\|Noise Variance Estimation]]*
- *[[3 Reference/conditional-sum-of-squares-function_202604052127\|Conditional Sum of Squares Function]]*
- [[3 Reference/conditional-least-squares_202604052128\|Conditional Least Squares]]
- [[3 Reference/least-square-method_202604052128\|Least Square Method]]
- *[[3 Reference/unconditional-sum-of-squares-function_202604052128\|Unconditional Sum-of-Squares Function]]*
- [[3 Reference/unconditional-least-squares_202604052128\|Unconditional Least Squares]]
- *[[3 Reference/maximum-likelihood-method_202604052129\|Maximum Likelihood Method]]*
- **[[3 Reference/large-sample-properties-of-parameter-estimates_202604052129\|Property: Large Sample Properties of Parameter Estimates]]**
- [[3 Reference/canadian-hare-abundance-series_202604052129\|Canadian Hare Abundance Series]]

## Volatility Models (ARCH/GARCH)
- *[[3 Reference/about-volatility-clustering_202604201222\|Volatility Clustering]]*
- *[[3 Reference/about-leverage-effect_202604201222\|Leverage Effect]]*
- *[[3 Reference/about-principle-of-parsimony-in-econometric-modeling_202604201222\|Principle of Parsimony in Econometric Modeling]]*
- *[[3 Reference/about-arma-vs-arch-garch-relationship_202604201222\|ARMA vs ARCH/GARCH Relationship]]*
- *[[3 Reference/definition-log-returns_202604201223\|Log-Returns]]*
- *[[3 Reference/definition-continuously-compounded-return_202604201223\|Continuously Compounded Return]]*
- *[[3 Reference/definition-conditional-variance_202604201223\|Conditional Variance]]*
- *[[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]*
	- **[[3 Reference/definition-arch(m)-model_202604201223#Unconditional Mean\|Property: Unconditional Mean of ARCH]]**
	- **[[3 Reference/definition-arch(m)-model_202604201223#Unconditional Variance\|Property: Unconditional Variance of ARCH]]**
	- **[[3 Reference/definition-arch(m)-model_202604201223#Kurtosis\|Property: Kurtosis of ARCH (Heavy Tails)]]**
- *[[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]]*
	- **[[3 Reference/definition-garch(m,s)-model_202604201224#Unconditional Variance\|Property: Unconditional Variance of GARCH]]**
	- **[[3 Reference/definition-garch(m,s)-model_202604201224#Kurtosis\|Property: Kurtosis of GARCH (Heavy Tails)]]**
	- **[[3 Reference/definition-garch(m,s)-model_202604201224#Volatility Persistence\|Property: Volatility Persistence]]**
- *[[3 Reference/definition-standardized-residuals_202604201223\|Standardized Residuals]]*
- [[3 Reference/procedure-building-a-volatility-model_202604201224\|Building a Volatility Model]]
- [[3 Reference/procedure-testing-for-arch-effects_202604201225\|Testing for ARCH Effects]]
- [[3 Reference/procedure-maximum-likelihood-estimation-for-arch-garch_202604201225\|Maximum Likelihood Estimation for ARCH/GARCH]]
- [[3 Reference/procedure-model-checking-for-arch-garch_202604201225\|Model Checking for ARCH/GARCH]]
- [[3 Reference/procedure-forecasting-with-arch(m)_202604201226\|Forecasting with ARCH(m)]]
- [[3 Reference/procedure-forecasting-with-garch(m,s)_202604201226\|Forecasting with GARCH(m,s)]]
