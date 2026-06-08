---
publish: true
aliases:
  - Seasonal ARIMA Model
  - SARIMA
created: 2026-04-27T13:14:15.842+07:00
modified: 2026-06-02T12:31:03.245+07:00
published: 2026-06-02T12:31:03.245+07:00
creation-time: 2026-04-27 13:14
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

A **Multiplicative Seasonal ARIMA Model**, denoted as $\text{ARIMA}(p,d,q) \times (P,D,Q)_s$, applies both non-seasonal differencing (order $d$) and seasonal differencing (order $D$) to achieve stationarity.

If the differenced series:

$$
W_t = \nabla^d \nabla_s^D Y_t
$$

satisfies an $\text{ARMA}(p,q) \times (P,Q)_s$ model, then the original series $Y_t$ is called a Seasonal ARIMA model.

> [!TIP] Interpretation
> This is a comprehensive model handling non-stationarity in mean (both trend and seasonality) and modeling the remaining stationary component with AR and MA terms at both seasonal and non-seasonal lags.

Great question. Let me walk you through the systematic method step by step.

## Step-by-Step: How to Identify a SARIMA Model

Given:

$$
Y_t = Y_{t-1} + Y_{t-12} - Y_{t-13} + e_t - \theta e_{t-1} - \Theta e_{t-12} + \theta\Theta e_{t-13}
$$

### Step 1: Move everything to standard form

Put all $Y$ terms on the **left**, all $e$ terms on the **right**:

$$
Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13} = e_t - \theta e_{t-1} - \Theta e_{t-12} + \theta\Theta e_{t-13}
$$

### Step 2: Convert to backshift $B$ notation

Replace $Y_{t-k}$ with $B^k Y_t$ and $e_{t-k}$ with $B^k e_t$:

**Left:**

$$
\begin{align}
& Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13} \\
 & Y_t - BY_t - B^{12}Y_t + B^{13}Y_t \\
 =  & (1 - B - B^{12} + B^{13})Y_t
\end{align}
$$

**Right:**

$$$
\begin{align}
  & e_t - \theta e_{t-1} - \Theta e_{t-12} + \theta\Theta e_{t-13} \\
 & e_t - \theta B e_t - \Theta B^{12} e_t + \theta\Theta B^{13} e_t  \\
= & (1 - \theta B - \Theta B^{12} + \theta\Theta B^{13})e_t
\end{align}$$

$$$

\boxed{(1 - B - B^{12} + B^{13})Y\_t = (1 - \theta B - \Theta B^{12} + \theta\Theta B^{13})e\_t}

$$

### Step 3: Factor the polynomials (the key skill)

Look for the **pattern** $(1 - \cdot B)(1 - \cdot B^{s})$.

**Left side:** Try $(1 - B)(1 - B^{12})$:
$$

(1 - B)(1 - B^{12}) = 1 - B^{12} - B + B^{13} = 1 - B - B^{12} + B^{13} \quad \checkmark

$$

**Right side:** Try $(1 - \theta B)(1 - \Theta B^{12})$:
$$

(1 - \theta B)(1 - \Theta B^{12}) = 1 - \Theta B^{12} - \theta B + \theta\Theta B^{13} = 1 - \theta B - \Theta B^{12} + \theta\Theta B^{13} \quad \checkmark

$$

### Step 4: Read off the SARIMA components

$$

\underbrace{(1 - B)^{\color{red}{1}}}_{d};\underbrace{(1 - B^{12})^{\color{blue}{1}}}_{D}; Y\_t
\= \underbrace{(1 - \theta B)^{\color{green}{1}}}_{q};\underbrace{(1 - \Theta B^{12})^{\color{purple}{1}}}_{Q}; e\_t

$$$

| Component | What to look for | Order |
|---|---|---|
| $d$ | Power of $(1 - B)$ | $1$ |
| $D$ | Power of $(1 - B^{s})$ | $1$ |
| $q$ | Highest $B$ power in $(1 - \theta B)$ | $1$ |
| $Q$ | Number of seasonal MA terms | $1$ |
| $s$ | The subscript on $B^{12}$ | $12$ |
| $p$ | Any $(1 - \phi B)$? No | $0$ |
| $P$ | Any $(1 - \Phi B^{12})$? No | $0$ |

**Result:** $\boxed{\text{SARIMA}(0,1,1)(0,1,1)_{12}}$

## The Pattern Recognition System

Here's the **generic framework** for any expanded SARIMA equation:

### A) What to look for on the LEFT side ($Y$ terms)

| If you see this term pattern... | It means... |
|---|---|
| $Y_t - Y_{t-1}$ | $(1 - B)$ → $d=1$ |
| $Y_t - Y_{t-1} - Y_{t-2} + Y_{t-3}$ | $(1 - B)(1 - B)$ or $(1-B)^2$ → $d=2$ |
| $Y_t - Y_{t-s}$ | $(1 - B^{s})$ → $D=1$, seasonal |
| $Y_t - Y_{t-1} - Y_{t-s} + Y_{t-s-1}$ | $(1-B)(1-B^{s})$ → $d=1, D=1$ |
| $Y_t - \phi Y_{t-1}$ | $(1 - \phi B)$ → $p=1$ |
| $Y_t - \phi Y_{t-1} - \Phi Y_{t-s} + \phi\Phi Y_{t-s-1}$ | $(1-\phi B)(1-\Phi B^{s})$ → $p=1, P=1$ |
| $Y_t - \phi_1 Y_{t-1} - \phi_2 Y_{t-2}$ | $(1 - \phi_1 B - \phi_2 B^2)$ → $p=2$ |

### B) What to look for on the RIGHT side ($e$ terms)

| If you see this term pattern... | It means... |
|---|---|
| $e_t - \theta e_{t-1}$ | $(1 - \theta B)$ → $q=1$ |
| $e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2}$ | $(1 - \theta_1 B - \theta_2 B^2)$ → $q=2$ |
| $e_t - \Theta e_{t-s}$ | $(1 - \Theta B^{s})$ → $Q=1$, seasonal |
| $e_t - \theta e_{t-1} - \Theta e_{t-s} + \theta\Theta e_{t-s-1}$ | $(1-\theta B)(1-\Theta B^{s})$ → $q=1, Q=1$ |
| $e_t$ only (no e terms on RHS) | $q=0, Q=0$ (pure AR) |

### C) The "Interaction Term" Clue

The presence of **cross-product terms** like $\phi\Phi Y_{t-s-1}$ or $\theta\Theta e_{t-s-1}$ is a dead giveaway that the model is **multiplicative** — i.e., both seasonal AND non-seasonal components exist.

No cross-term → either purely seasonal or purely non-seasonal.

## More Examples to Practice

| Expanded equation (key pattern) | Backshift form | Model |
|---|---|---|
| $Y_t = \phi Y_{t-1} + e_t$ | $(1-\phi B)Y_t = e_t$ | AR(1) |
| $Y_t = Y_{t-1} + e_t - \theta e_{t-1}$ | $(1-B)Y_t = (1-\theta B)e_t$ | ARIMA(0,1,1) |
| $Y_t = \phi Y_{t-1} + \Phi Y_{t-4} - \phi\Phi Y_{t-5} + e_t$ | $(1-\phi B)(1-\Phi B^4)Y_t = e_t$ | SARIMA$(1,0,0)(1,0,0)_4$ |
| $Y_t = Y_{t-1} + Y_{t-4} - Y_{t-5} + e_t$ | $(1-B)(1-B^4)Y_t = e_t$ | SARIMA$(0,1,0)(0,1,0)_4$ |
| $Y_t = Y_{t-1} + e_t - \theta e_{t-1} - \Theta e_{t-4} + \theta\Theta e_{t-5}$ | $(1-B)Y_t = (1-\theta B)(1-\Theta B^4)e_t$ | SARIMA$(0,1,1)(0,0,1)_4$ |

## Workflow Summary

When given an expanded SARIMA equation:

1. **Move all $Y$ terms left, all $e$ terms right**
2. **Convert to $B$ notation** (replace each $Y_{t-k}$ with $B^k Y_t$)
3. **Look for difference operators**: $(1-B)$, $(1-B^s)$, or higher powers
4. **Look for AR/MA polynomials**: $(1 - \phi B - \phi_2 B^2 - \ldots)$, $(1 - \theta B - \ldots)$
5. **Factor by grouping** — try splitting into seasonal × non-seasonal using the cross-term pattern
6. **Read off** $p, d, q, P, D, Q, s$

The interaction term (like $\theta\Theta e_{t-13}$ where $13 = 1 + 12$) is your biggest hint — it only appears when you multiply a non-seasonal and a seasonal polynomial together.

Want me to walk through another example with different orders?

## Examples

> [!EXAMPLE] 10 SARIMA Model Specifications
> Each example defines $W_t = \nabla^d \nabla_s^D Y_t$, then shows the model for the stationary $W_t$, then expands back to $Y_t$.

1. **SARIMA$(0,1,1)(0,1,1)_{12}$** *(Airline Model)*
   $$\begin{aligned}
   W_t &= (1-B)(1-B^{12})Y_t = Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13} \\[4pt]
   W_t &= (1-\theta_1 B)(1-\Theta_1 B^{12})e_t = e_t - \theta_1 e_{t-1} - \Theta_1 e_{t-12} + \theta_1\Theta_1 e_{t-13} \\[4pt]
   Y_t &= Y_{t-1} + Y_{t-12} - Y_{t-13} + e_t - \theta_1 e_{t-1} - \Theta_1 e_{t-12} + \theta_1\Theta_1 e_{t-13}
   \end{aligned}$$

2. **SARIMA$(1,0,0)(1,0,0)_{12}$** *(No differencing)*
   $$\begin{aligned}
   W_t &= Y_t \\[4pt]
   (1-\phi_1 B)(1-\Phi_1 B^{12})W_t &= e_t \\[4pt]
   Y_t &= \phi_1 Y_{t-1} + \Phi_1 Y_{t-12} - \phi_1\Phi_1 Y_{t-13} + e_t
   \end{aligned}$$

3. **SARIMA$(0,1,1)(1,0,0)_{12}$**
   $$\begin{aligned}
   W_t &= (1-B)Y_t = Y_t - Y_{t-1} \\[4pt]
   (1-\Phi_1 B^{12})W_t &= (1-\theta_1 B)e_t \\[4pt]
   W_t &= \Phi_1 W_{t-12} + e_t - \theta_1 e_{t-1} \\[4pt]
   Y_t &= Y_{t-1} + \Phi_1(Y_{t-12} - Y_{t-13}) + e_t - \theta_1 e_{t-1}
   \end{aligned}$$

4. **SARIMA$(1,1,1)(0,1,1)_{12}$**
   $$\begin{aligned}
   W_t &= (1-B)(1-B^{12})Y_t = Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13} \\[4pt]
   (1-\phi_1 B)W_t &= (1-\theta_1 B)(1-\Theta_1 B^{12})e_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + e_t - \theta_1 e_{t-1} - \Theta_1 e_{t-12} + \theta_1\Theta_1 e_{t-13}
   \end{aligned}$$

5. **SARIMA$(2,1,0)(0,1,1)_4$** *(Quarterly)*
   $$\begin{aligned}
   W_t &= (1-B)(1-B^{4})Y_t = Y_t - Y_{t-1} - Y_{t-4} + Y_{t-5} \\[4pt]
   (1-\phi_1 B -\phi_2 B^2)W_t &= (1-\Theta_1 B^{4})e_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + \phi_2 W_{t-2} + e_t - \Theta_1 e_{t-4}
   \end{aligned}$$

6. **SARIMA$(0,1,2)(1,1,0)_{12}$**
   $$\begin{aligned}
   W_t &= (1-B)(1-B^{12})Y_t = Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13} \\[4pt]
   (1-\Phi_1 B^{12})W_t &= (1-\theta_1 B -\theta_2 B^2)e_t \\[4pt]
   W_t &= \Phi_1 W_{t-12} + e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2}
   \end{aligned}$$

7. **SARIMA$(1,0,1)(0,0,1)_4$** *(No differencing, quarterly MA)*
   $$\begin{aligned}
   W_t &= Y_t \\[4pt]
   (1-\phi_1 B)W_t &= (1-\theta_1 B)(1-\Theta_1 B^{4})e_t \\[4pt]
   Y_t &= \phi_1 Y_{t-1} + e_t - \theta_1 e_{t-1} - \Theta_1 e_{t-4} + \theta_1\Theta_1 e_{t-5}
   \end{aligned}$$

8. **SARIMA$(0,0,0)(1,1,0)_{12}$** *(Pure seasonal AR + seasonal diff)*
   $$\begin{aligned}
   W_t &= (1-B^{12})Y_t = Y_t - Y_{t-12} \\[4pt]
   (1-\Phi_1 B^{12})W_t &= e_t \\[4pt]
   W_t &= \Phi_1 W_{t-12} + e_t \\[4pt]
   Y_t &= Y_{t-12} + \Phi_1(Y_{t-12} - Y_{t-24}) + e_t
   \end{aligned}$$

9. **SARIMA$(2,0,1)(1,0,1)_{12}$** *(No differencing, fully stationary)*
   $$\begin{aligned}
   W_t &= Y_t \\[4pt]
   (1-\phi_1 B -\phi_2 B^2)(1-\Phi_1 B^{12})W_t &= (1-\theta_1 B)(1-\Theta_1 B^{12})e_t
   \end{aligned}$$

10. **SARIMA$(1,1,0)(1,1,0)_4$** *(Seasonal + non-seasonal AR with differencing)*
    $$\begin{aligned}
    W_t &= (1-B)(1-B^{4})Y_t = Y_t - Y_{t-1} - Y_{t-4} + Y_{t-5} \\[4pt]
    (1-\phi_1 B)(1-\Phi_1 B^{4})W_t &= e_t \\[4pt]
    W_t &= \phi_1 W_{t-1} + \Phi_1 W_{t-4} - \phi_1\Phi_1 W_{t-5} + e_t
    \end{aligned}$$

> [!TIP] Identifying SARIMA Orders
> From an expanded equation, match terms at lags $1,2,\ldots,p$ for non-seasonal AR terms, lags $s,2s,\ldots,Ps$ for seasonal AR terms, and similarly for MA. The interaction terms (e.g., $-\theta_1\Theta_1 e_{t-s-1}$) arise from the multiplicative structure.

## Specification, Fitting, and Checking
The procedures for specification, fitting, and diagnostic checking for seasonal models follow the same general techniques as non-seasonal models.
$$$
