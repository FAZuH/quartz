---
publish: true
created: 2026-04-09T23:07:39.041+07:00
modified: 2026-04-09T23:07:39.042+07:00
published: 2026-04-09T23:07:39.042+07:00
creation-time: 2025-03-21 08:57
status: in progress
tags:
parent:
  - "[[Classification Analysis]]"
---

For classifying $k > 2$ groups, classification extends to finding the "closest" group mean, adapting to equal or unequal covariance assumptions.

## Equal covariance case

Measures how far $\mathbf{y}$ is from each group mean, adjusted by a common covariance, and picks the nearest group.

**Assumption**: $\mathbf{\Sigma}_1 = \mathbf{\Sigma}_2 = \cdots = \mathbf{\Sigma}_k$

**Linear Function** (9.11)

$$
L_i(\mathbf{y}) = \overline{\mathbf{y}}_i^\prime \mathbf{S}_{\text{pl}}^{-1} \mathbf{y} - \frac{1}{2} \overline{\mathbf{y}}_i^\prime \mathbf{S}_{\text{pl}}^{-1} \overline{\mathbf{y}}_i
$$

where $\mathbf{S}_{\text{pl}}$ is the pooled covariance matrix..

**Assign $\mathbf{y}$ to the group with the maximum $L_i(\mathbf{y})$**.

## Unequal covariance case

Adjusts for group-specific spreads, avoiding bias toward groups with smaller variances (unlike linear).

**Requirement**: $n_i > p$ per group for $\mathbf{S}_i^{-1}$ to exist.

**Quadratic Function** (9.15)

$$
Q_i(\mathbf{y}) = \ln p_i - \frac{1}{2} \ln |\mathbf{S}_i| - \frac{1}{2} (\mathbf{y} - \overline{\mathbf{y}}_i)^\prime \mathbf{S}_i^{-1} (\mathbf{y} - \overline{\mathbf{y}}_i)
$$

**Assign $\mathbf{y}$ to the group with the maximum $Q_i(\mathbf{y})$**.
