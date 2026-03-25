---
publish: true
aliases:
  - Model Selection
  - Data Splitting
created: 2026-03-25T15:22:40.599+07:00
modified: 2026-03-25T15:22:40.599+07:00
published: 2026-03-25T15:22:40.599+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

Selecting the best forecasting model involves testing its performance on data it hasn't seen before. This process helps <u>determine parameters like the smoothing constant $\alpha$ in SES or the window size $m$ in Moving Averages</u>.

1. Partition the historical dataset into two chronological segments: **Training** and **Testing**.
2. Use the **Training** segment to fit the model and estimate any unknown parameters.
3. Apply the fitted model to the **Testing** segment to generate forecasts for those periods.
4. Calculate accuracy measures (like MAPE or MAD) by comparing the forecasts against the actual values in the Testing segment.

**Expected Outcome**: A validated model with the lowest error on the testing set, providing confidence in its ability to generalize to future data.
