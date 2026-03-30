---
publish: true
aliases:
  - Dickey-Fuller Test
created: 2026-03-30T02:23:03.085+07:00
modified: 2026-03-30T02:23:03.085+07:00
published: 2026-03-30T02:23:03.085+07:00
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

---

creation-time: 2026-03-30 14:00
status: in progress
parent:

- "[[forecasting methods]]"
  publish: true
  aliases:
- Dickey-Fuller Test
- DF Test

---

## Definition

The **Dickey-Fuller (DF) test** tests for the presence of a unit root in an AR(1) process, determining whether a time series is non-stationary.

### Model

$$Y\_t = \theta Y\_{t-1} + u\_t$$

If $\theta = 1$, the model becomes a random walk (non-stationary).

### Reformulation

$$\nabla Y\_t = \pi Y\_{t-1} + u\_t \quad \text{where } \pi = \theta - 1$$

### Hypotheses

$$H\_0: \pi = 0 \quad \text{(unit root present, non-stationary)}$$

$$H\_1: \pi < 0 \quad \text{(stationary)}$$

### Test Statistic

$$\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})} = \frac{\hat{\theta} - 1}{\text{se}(\hat{\theta})}$$

### Distribution

The test statistic $\tau$ follows the **Dickey-Fuller distribution** (not standard t-distribution).

### Decision Rule

Reject $H\_0$ if $|\tau| > |\tau\_{\text{critical}}|$

> [!WARNING] Critical ValuesUse DF critical values, not standard t-distribution tables. The DF distribution has fatter tails.

## Model Variants

| Model | Equation |
|-------|----------|
| No constant | $\nabla Y\_t = \pi Y\_{t-1} + u\_t$ |
| With constant | $\nabla Y\_t = \beta\_1 + \pi Y\_{t-1} + u\_t$ |
| With constant & trend | $\nabla Y\_t = \beta\_1 + \beta\_2 t + \pi Y\_{t-1} + u\_t$ |

## Related

- [[definition-augmented-dickey-fuller-test_202603301400|Augmented Dickey-Fuller Test]]
- [[random-walk_202603161400|Random Walk]]
- [[weakly-stationary_202603161400|Weakly Stationary]]
