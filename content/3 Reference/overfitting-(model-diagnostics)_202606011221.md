---
publish: true
aliases:
  - Overfitting (Model Diagnostics)
created: 2026-06-01T12:21:41.974+07:00
modified: 2026-06-01T12:21:41.974+07:00
published: 2026-06-01T12:21:41.974+07:00
creation-time: 2026-06-01 12:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Fitting a slightly more general model to confirm the adequacy of a simpler proposed model.

## Procedure

A complementary approach to residual analysis for [[building-models-with-the-box-jenkins-strategy_202603161400|model diagnostics]]. After specifying and fitting what is believed to be an adequate model, a slightly more general model (one that contains the original as a special case) is fit.

### Procedure

**Step 1:** Fit the proposed model (e.g., [[arp-process-model_202603161400|AR(2)]]).

**Step 2:** Fit a more general model (e.g., AR(3)) that contains the proposed model as a special case.

**Step 3:** Check two criteria:

1. The estimate of the **additional parameter** ($\phi_3$ in the AR(3) case) is **not significantly different from zero**.
2. The estimates for the **parameters in common** ($\phi_1$ and $\phi_2$) do **not change significantly** from their original estimates.

If both criteria are satisfied, the original simpler model is confirmed.

> [!WARNING] Guidelines for Overfitting
>
> 1. Specify the original model carefully. Check simpler models before trying more complicated ones.
> 2. **Do not increase the orders of both AR and MA parts simultaneously** — extend in one direction at a time.
> 3. Let **residual analysis** guide the direction of overfitting. If after fitting an MA(1), substantial correlation remains at [[lag-definition_202603161400|lag]] 2, try MA(2), not ARMA(1,1).

## Related

- [[Parameter Redundancy]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
- [[arp-process-model_202603161400|AR(p) Process Model]]
- [[moving-average-process-maq_202603161400|MA(q) Process Model]]
