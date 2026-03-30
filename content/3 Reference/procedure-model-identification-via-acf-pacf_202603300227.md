---
publish: true
aliases:
  - Identifying model via ACF/PACF
  - Model Identification
  - ACF PACF Identification
created: 2026-03-30T02:27:32.900+07:00
modified: 2026-03-30T03:53:43.114+07:00
published: 2026-03-30T03:53:43.114+07:00
creation-time: 2026-03-30 02:27
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

| Model           | ACF                                                  | PACF                                                       |
| --------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| AR(1)           | $\rho\_k = \phi^k$ (exponential decay)                | $\phi\_{11} = \phi$, $\phi\_{kk} = 0$ for $k > 1$ (cuts off) |
| **AR($p$)**     | Decays exponentially/oscillates                      | <u>Cuts off after lag $p$</u>                              |
| MA(1)           | $\rho\_1 \neq 0$, $\rho\_k = 0$ for $k > 1$ (cuts off) | Decays exponentially                                       |
| **MA($q$)**     | <u>Cuts off after lag $q$</u>                        | Decays exponentially                                       |
| **ARMA($p,q$)** | <u>Decays exponentially</u>                          | <u>Decays exponentially</u>                                |

## Procedure

Use ACF and PACF patterns to identify the order of AR, MA, and ARMA models.

### Step 1: Examine ACF

1. Plot sample ACF $r\_k$ vs lag $k$
2. Check for significance: $|r\_k| > \frac{1.96}{\sqrt{n}}$
3. Identify pattern:
   - **Cuts off sharply** after lag $q$ → suggests MA($q$)
   - **Decays exponentially** → suggests AR or ARMA

### Step 2: Examine PACF

1. Plot sample PACF $\phi\_{kk}$ vs lag $k$
2. Check for significance: $|\phi\_{kk}| > \frac{1.96}{\sqrt{n}}$
3. Identify pattern:
   - **Cuts off sharply** after lag $p$ → suggests AR($p$)
   - **Decays exponentially** → suggests MA or ARMA

### Step 3: Combine Information

| ACF Pattern | PACF Pattern | Suggested Model |
|-------------|---------------|-----------------|
| Cuts off after lag $q$ | Decays exponentially | MA($q$) |
| Decays exponentially | Cuts off after lag $p$ | AR($p$) |
| Decays exponentially | Decays exponentially | ARMA($p,q$) |

### Step 4: Use EACF or Information Criteria

For ARMA models where ACF/PACF both decay:

- Use EACF to find approximate $(p, q)$
- Compare AIC/BIC across candidate models

> [!NOTE] Sample Size
> Need at least $n = 50$ observations for reliable ACF/PACF estimates. Calculate up to lag $K \approx n/4$.

## Related

- [[autocovariance-and-autocorrelation_202603161400|ACF]]
- [[partial-autocorrelation-(pacf)_202603300223|PACF]]
- [[extended-autocorrelation-function-(eacf)_202603300224|EACF]]
- [[aic-criterion_202603300224|AIC]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
