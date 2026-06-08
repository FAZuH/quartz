---
publish: true
aliases:
  - Parameter Redundancy
created: 2026-06-01T12:21:52.299+07:00
modified: 2026-06-01T12:21:52.299+07:00
published: 2026-06-01T12:21:52.299+07:00
creation-time: 2026-06-01 12:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

A problem of non-identifiability in ARMA models caused by common factors shared between AR and MA characteristic polynomials.

## Properties

Any [[armapq-process-model_202603161400|ARMA(p,q)]] model can be considered as a special case of a more general ARMA model with additional parameters equal to zero. However, when generalizing ARMA models, one must be aware of **parameter redundancy** or **lack of identifiability**.

When the [[ar-characteristic-equation_202603161400|AR]] and [[moving-average-process-maq_202603161400|MA]] characteristic polynomials share a common factor, the parameters in the model are not unique — the model is **not identifiable**.

### Example

Consider an ARMA(1,2) model:

$$
Y_t = \phi Y_{t-1} + e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2} \tag{1}
$$

Lagging by 1 period:

$$
Y_{t-1} = \phi Y_{t-2} + e_{t-1} - \theta_1 e_{t-2} - \theta_2 e_{t-3} \tag{2}
$$

Multiply (2) by an arbitrary constant $c$ and subtract from (1):

$$
Y_t - (\phi + c)Y_{t-1} + \phi c Y_{t-2} = e_t - (\theta_1 + c)e_{t-1} - (\theta_2 - \theta_1 c)e_{t-2} - c\theta_2 e_{t-3}
$$

This defines an ARMA(2,3) process. However, the characteristic polynomials factor as:

$$
\begin{align}
1 - (\phi + c)x + \phi c x^2 &= (1 - \phi x)(1 - c x) \\
1 - (\theta_1 + c)x - (\theta_2 - \theta_1 c)x^2 - c\theta_2 x^3 &= (1 - \theta_1 x - \theta_2 x^2)(1 - c x)
\end{align}
$$

The common factor $(1 - c x)$ means the parameters are **not unique** — the constant $c$ is completely arbitrary. We say there is **parameter redundancy** in the ARMA(2,3) model.

### Implications for [[Overfitting (Model Diagnostics)|Overfitting]]

- When overfitting, do **not** increase the orders of both AR and MA parts simultaneously.
- If a simple model seems promising, check it before trying a more complicated model.
- Extend the model in directions suggested by residual analysis.

## Related

- [[Overfitting (Model Diagnostics)]]
- [[armapq-process-model_202603161400|ARMA(p,q) Process Model]]
- [[ar-characteristic-equation_202603161400|AR Characteristic Equation]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
