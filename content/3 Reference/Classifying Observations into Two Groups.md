---
{"creation-time":"2025-03-21 08:58","status":"baby","tags":null,"parent":["[[Classification Analysis]]"],"publish":true,"PassFrontmatter":true}
---


For classifying into two groups ($G_1$, $G_2$), Fisher’s method compares $\mathbf{y}$ to group means, assuming equal covariance matrices.

## 1: Compute the Discriminant Function

Projects $\mathbf{y}$ onto a line maximizing group separation.

**Formula (9.1)**

$$
z = \mathbf{a}^\prime \mathbf{y} = (\overline{\mathbf{y}}_1 - \overline{\mathbf{y}}_2)^\prime \mathbf{S}_{\text{pl}}^{-1} \mathbf{y}
$$

where $\mathbf{S}_{\text{pl}}$ is the pooled covariance matrix.

See [[3 Reference/Two-Group Discriminant Analysis\|Two-Group Discriminant Analysis]] or [[3 Reference/Multiple Group Discriminant Analysis\|Multiple Group Discriminant Analysis]] to read further.

## 2: Determine the Cutoff

**Midpoint (9.5)**

Assign to $G_1$ if $z > \frac{1}{2}(\bar{z}_1 + \bar{z}_2)$,
where $\bar{z}_1 = \mathbf{a}^\prime \overline{\mathbf{y}}_1$, $\bar{z}_2 = \mathbf{a}^\prime \overline{\mathbf{y}}_2$;
otherwise, to $G_2$.

**Proof**

Since $\bar{z}_1 - \bar{z}_2 = (\overline{\mathbf{y}}_1 - \overline{\mathbf{y}}_2)^\prime \mathbf{S}_{\text{pl}}^{-1} (\overline{\mathbf{y}}_1 - \overline{\mathbf{y}}_2) > 0$ (positive definite $\mathbf{S}_{\text{pl}}^{-1}$), $\bar{z}_1 > \bar{z}_2$, making the midpoint a logical split.

## 3: Classify the observation
Compare $z$ to the cutoff and assign accordingly.

Here’s a new section for "Classification into Several Groups" to add to your current notes on Chapter 9. It follows your style, focusing on intuition, key formulas, and structure, while covering the multi-group case from Section 9.3 of the PDF.
