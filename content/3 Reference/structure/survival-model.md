---
publish: true
aliases:
  - survival model
created: 2026-03-28T14:48:55.804+07:00
modified: 2026-05-05T15:51:40.731+07:00
published: 2026-05-05T15:51:40.731+07:00
tags:
  - type/category
cssclasses: ""
creation-time: 2026-03-28 14:48
status: in progress
parent:
  - "[[statistics]]"
---


- *italic*: Definition / About
- **Bold**: Property / Theorem
- Standard: Procedure / Example / Cheatsheet

## Fundamentals
- *[[3 Reference/def-survival-time_202603281500\|Survival Time]]*
- *[[3 Reference/def-censored-data_202603281500\|Censored Data]]*
- *[[3 Reference/def-truncated-data_202603281500\|Truncated Data]]*

## Survival Distribution Quantities
- *[[3 Reference/def-survival-function_202603281500\|Survival Function]]*
- *[[3 Reference/def-hazard-function_202603281500\|Hazard Function]]*
	- *[[3 Reference/def-cumulative-hazard_202603281500\|Cumulative Hazard]]*
- *[[3 Reference/def-mean-residual-life_202603281500\|Mean Residual Life]]*
- *[[def-mean-life_202604071010\|Mean Life]]*
- *[[3 Reference/def-median-life_202603281500\|Median Life]]*
- *[[def-total-time-test_202604070830\|Total Time on Test]]*
- **[[3 Reference/theorem-hazard-function-derivation_202603281500\|Theorem: Hazard Function Derivation]]**
- **[[3 Reference/theorem-mean-residual-life-formula_202603281500\|Theorem: Mean Residual Life Formula]]**
- [[3 Reference/survival-quantities-cheatsheet_202603281500\|Survival Quantities Cheatsheet]]

## Parametric Models
- *[[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution (Survival)]]*
- *[[3 Reference/def-weibull-distribution-survival_202603281500\|Weibull Distribution (Survival)]]*
- *[[3 Reference/def-gamma-distribution-survival_202603281500\|Gamma Distribution (Survival)]]*
- [[3 Reference/parametric-survival-distributions-cheatsheet_202603281500\|Parametric Survival Distributions Cheatsheet]]

## Censoring and Truncation
- *[[3 Reference/def-censored-data_202603281500\|Censored Data]]*
- *[[3 Reference/def-truncated-data_202603281500\|Truncated Data]]*
- [[3 Reference/about-censoring-types_202603281500\|Types of Censoring]]
- [[3 Reference/about-truncation-types_202603281500\|Types of Truncation]]
- *[[3 Reference/def-likelihood-censored-data_202603281500\|Likelihood for Censored Data]]*
	- *[[3 Reference/def-likelihood-censored-data_202603281500#Likelihood for Left-Truncated Data\|Left-Truncated Likelihood]]*
	- *[[3 Reference/def-likelihood-censored-data_202603281500#Example Right-Censored Data\|Example: Right-Censored]]*

## Non-Parametric Estimation
- *[[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier Estimator]]*
	- *[[3 Reference/def-greenwood-formula_202603281600\|Greenwood's Formula]]*
	- *[[3 Reference/confidence-interval-for-survival_202604070830\|Confidence Interval for Survival]]*
- *[[3 Reference/def-nelson-aalen-estimator_202603281500\|Nelson-Aalen Estimator]]*
- [[3 Reference/non-parametric-estimation-cheatsheet_202604071108\|Non-Parametric Estimation Cheatsheet]]

## Hypothesis Testing
- *[[3 Reference/one-sample-log-rank-test_202605051407\|One-Sample Log-Rank Test]]*
- *[[3 Reference/log-rank-test_202605051407\|Log-Rank Test]]*
	- [[3 Reference/k-sample-test-procedure-survival_202605051443\|K-Sample Test Procedure]]
	- *[[3 Reference/trend-test-survival_202605051407\|Trend Test]]*
	- *[[3 Reference/stratified-test-survival_202605051408\|Stratified Test]]*
	- [[3 Reference/larynx-data-trend-test-example_202605051443\|Example: Larynx Trend Test]]
- [[3 Reference/hypothesis-testing-survival-cheatsheet_202605051408\|Hypothesis Testing Cheatsheet]]

## Semiparametric Cox PH
- *[[3 Reference/cox-proportional-hazards-model_202605051448\|Cox Proportional Hazards Model]]*
	- *[[3 Reference/hazard-ratio_202605051449\|Hazard Ratio]]*
	- [[3 Reference/checking-proportional-hazards-assumption_202605051449\|Checking PH Assumption]]
	- *[[3 Reference/partial-likelihood-cox-ph_202605051449\|Partial Likelihood]]*
	- *[[3 Reference/likelihood-with-ties-cox-ph_202605051450\|Likelihood with Ties]]*
- [[3 Reference/cox-ph-cheatsheet_202605051550\|Cox PH Cheatsheet]]