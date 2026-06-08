---
publish: true
created: 2026-04-09T23:07:39.042+07:00
modified: 2026-04-09T23:07:39.043+07:00
published: 2026-04-09T23:07:39.043+07:00
creation-time: 2025-03-21 08:58
status: in progress
tags:
parent:
  - "[[Classification Analysis]]"
---

## Procedure

For classifying into two groups ($G_1$, $G_2$), **Fisher’s method** compares $\mathbf{y}$ to group means, assuming equal covariance matrices.

### 1: Compute the Discriminant Function

Projects $\mathbf{y}$ onto a line maximizing group separation.

**Equation (9.1)**

$$
z = \mathbf{a}^\prime \mathbf{y} = (\overline{\mathbf{y}}_1 - \overline{\mathbf{y}}_2)^\prime \mathbf{S}_{\text{pl}}^{-1} \mathbf{y}
$$

where $\mathbf{S}_{\text{pl}}$ is the pooled covariance matrix #TODO how to compute spl.

See [[Two-Group Discriminant Analysis]] or [[Multiple Group Discriminant Analysis]] to read further.

### 2: Determine the Cutoff

**Equation (9.5)**

Assign to $G_1$ (group 1) if the following inequality applies:
$z > \frac{1}{2}(\bar{z}_1 + \bar{z}_2)$
where:

- $\bar{z}_1 = \mathbf{a}^\prime \overline{\mathbf{y}}_1$
- $\bar{z}_2 = \mathbf{a}^\prime \overline{\mathbf{y}}_2$
- $z$: Discriminant score of new observation

Otherwise, assign to $G_2$.

### 3: Classify the observation

Compare $z$ to the cutoff and assign accordingly.

Here’s a new section for "Classification into Several Groups" to add to your current notes on Chapter 9. It follows your style, focusing on intuition, key formulas, and structure, while covering the multi-group case from Section 9.3 of the PDF.
