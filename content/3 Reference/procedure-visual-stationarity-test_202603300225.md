---
publish: true
aliases:
  - Testing Stationarity Visually
created: 2026-04-09T23:07:39.563+07:00
modified: 2026-04-09T23:07:39.564+07:00
published: 2026-04-09T23:07:39.564+07:00
creation-time: 2026-03-30 02:25
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Visual/graphical analysis is the simplest way to check stationarity.

### Step 1: Plot Time Series

Create a time series plot of $Y_t$ vs $t$

### Step 2: Examine Mean

Look for:

- Constant horizontal band around zero → stationary mean possible
- Upward/downward trend → non-stationary mean

### Step 3: Examine Variance

Look for:

- Constant spread over time → stationary variance possible
- Increasing/decreasing spread → non-stationary variance

### Step 4: Check for Seasonality

Look for:

- Regular patterns at fixed intervals → seasonal component present

> [!WARNING] Subjective
> Visual analysis is subjective. Always confirm with formal tests (ADF, Ljung-Box).

## Decision

| Observation | Assessment |
|-------------|-------------|
| Constant mean & variance | Possibly stationary → confirm with tests |
| Trend present | Non-stationary → consider differencing |
| Changing variance | Non-stationary → consider transformation |
| Regular patterns | Seasonal → consider seasonal model |

## Related

- [[weakly-stationary_202603161400|Weakly Stationary]]
- [[differencing-to-achieve-stationarity_202603161400|Differencing to Achieve Stationarity]]
- [[log-transformation-for-variance-stabilization_202603161400|Log Transformation]]
