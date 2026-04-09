---
publish: true
aliases:
  - Model Selection
  - Data Splitting
created: 2026-04-09T23:07:39.580+07:00
modified: 2026-04-09T23:07:39.581+07:00
published: 2026-04-09T23:07:39.581+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Procedure

Selecting the best forecasting model involves testing its performance on data it hasn't seen before. This process helps <u>determine parameters like the smoothing constant $\alpha$ in SES or the window size $m$ in [[3 Reference/single-moving-average_202603161400\|Moving Averages]]</u>.

1.  Partition the historical dataset into two chronological segments: **Training** and **Testing**.
2.  Use the **Training** segment to fit the model and estimate any unknown parameters.
3.  Apply the fitted model to the **Testing** segment to generate forecasts for those periods.
4.  Calculate [[3 Reference/forecasting-model-accuracy-measures_202603161400\|accuracy measures]] (like MAPE or MAD) by comparing the forecasts against the actual values in the Testing segment.

**Expected Outcome**: A validated model with the lowest error on the testing set, providing confidence in its ability to generalize to future data.
