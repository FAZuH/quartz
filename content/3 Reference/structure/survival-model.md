---
publish: true
aliases:
  - survival model
created: 2026-03-28T14:48:55.804+07:00
modified: 2026-05-19T11:57:38.564+07:00
published: 2026-05-19T11:57:38.564+07:00
tags:
  - type/category
creation-time: 2026-03-28 14:48
status: in progress
parent:
  - "[[statistics]]"
---

- _italic_: Definition / About
- **Bold**: Property / Theorem
- Standard: Procedure / Example / Cheatsheet

## Fundamentals

- _[[def-survival-time_202603281500|Survival Time]]_
- _[[def-censored-data_202603281500|Censored Data]]_
- _[[def-truncated-data_202603281500|Truncated Data]]_

## Survival Distribution Quantities

- _[[def-survival-function_202603281500|Survival Function]]_
- _[[def-hazard-function_202603281500|Hazard Function]]_
  - _[[def-cumulative-hazard_202603281500|Cumulative Hazard]]_
- _[[def-mean-residual-life_202603281500|Mean Residual Life]]_
- _[[mean-life_202604071010|Mean Life]]_
- _[[def-median-life_202603281500|Median Life]]_
- _[[total-time-on-test_202604070830|Total Time on Test]]_
- **[[theorem-hazard-function-derivation_202603281500|Theorem: Hazard Function Derivation]]**
- **[[theorem-mean-residual-life-formula_202603281500|Theorem: Mean Residual Life Formula]]**
- [[survival-quantities-cheatsheet_202603281500|Survival Quantities Cheatsheet]]

## Parametric Models

- _[[def-exponential-distribution-survival_202603281500|Exponential Distribution (Survival)]]_
- _[[def-weibull-distribution-survival_202603281500|Weibull Distribution (Survival)]]_
- _[[def-gamma-distribution-survival_202603281500|Gamma Distribution (Survival)]]_
- [[parametric-survival-distributions-cheatsheet_202603281500|Parametric Survival Distributions Cheatsheet]]

## Censoring and Truncation

- _[[def-censored-data_202603281500|Censored Data]]_
- _[[def-truncated-data_202603281500|Truncated Data]]_
- [[about-censoring-types_202603281500|Types of Censoring]]
- [[about-truncation-types_202603281500|Types of Truncation]]
- _[[def-likelihood-censored-data_202603281500|Likelihood for Censored Data]]_
  - _[[def-likelihood-censored-data_202603281500#Likelihood for Left-Truncated Data|Left-Truncated Likelihood]]_
  - _[[def-likelihood-censored-data_202603281500#Example Right-Censored Data|Example: Right-Censored]]_

## Non-Parametric Estimation

- _[[def-kaplan-meier-estimator_202603281500|Kaplan-Meier Estimator]]_
  - _[[def-greenwood-formula_202603281600|Greenwood's Formula]]_
  - _[[confidence-interval-for-survival_202604070830|Confidence Interval for Survival]]_
- _[[def-nelson-aalen-estimator_202603281500|Nelson-Aalen Estimator]]_
- [[non-parametric-estimation-cheatsheet_202604071108|Non-Parametric Estimation Cheatsheet]]

## Hypothesis Testing

- _[[one-sample-log-rank-test_202605051407|One-Sample Log-Rank Test]]_
- _[[log-rank-test_202605051407|Log-Rank Test]]_
  - [[k-sample-test-procedure-survival_202605051443|K-Sample Test Procedure]]
  - _[[trend-test-survival_202605051407|Trend Test]]_
  - _[[stratified-test-survival_202605051408|Stratified Test]]_
  - [[larynx-data-trend-test-example_202605051443|Example: Larynx Trend Test]]
- [[hypothesis-testing-survival-cheatsheet_202605051408|Hypothesis Testing Cheatsheet]]

## Semiparametric Cox PH

- _[[cox-proportional-hazards-model_202605051448|Cox Proportional Hazards Model]]_
  - [[cox-proportional-hazards-model_202605051448#Dependency Graph|Dependency Graph]]
  - _[[hazard-ratio_202605051449|Hazard Ratio]]_
  - [[checking-proportional-hazards-assumption_202605051449|Checking PH Assumption]]
  - _[[partial-likelihood-cox-ph_202605051449|Partial Likelihood]]_
  - _[[likelihood-with-ties-cox-ph_202605051450|Likelihood with Ties]]_
  - [[cox-ph-cheatsheet_202605051550|Cox PH Cheatsheet]]
