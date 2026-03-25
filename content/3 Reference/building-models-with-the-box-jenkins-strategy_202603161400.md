---
publish: true
aliases:
  - Box-Jenkins Strategy
created: 2026-03-25T15:22:40.602+07:00
modified: 2026-03-25T15:22:40.602+07:00
published: 2026-03-25T15:22:40.602+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

The Box-Jenkins strategy is a systematic, iterative approach used to find the <u>most appropriate ARIMA model for a specific time series</u>.

1. **Model Specification (Identification)**: Analyze time series plots and statistical properties (like the ACF) to select a candidate model. Follow the **principle of parsimony** by choosing the simplest model that fits the data.
2. **Model Fitting**: Estimate the unknown parameters of the candidate model. Common estimation methods include Least Squares, Maximum Likelihood, and the Method of Moments.
3. **Model Diagnostics**: Evaluate the quality of the fitted model. Check if the model assumptions are satisfied and verify that the residuals behave like white noise.
4. **Iteration**: If the diagnostics reveal deficiencies in the model, return to Step 1 to specify a different candidate.

**Expected Outcome**: A statistically sound and parsimonious model ready for high-quality forecasting.

> [!tip]
> **Troubleshooting**: If a model is overly complex with too many parameters, it may "overfit" the training data, leading to poor performance on new data. Always prioritize the simplest model if accuracy remains comparable.
