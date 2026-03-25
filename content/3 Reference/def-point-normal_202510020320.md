---
publish: true
aliases:
  - Point-Normal
created: 2026-03-25T15:22:40.640+07:00
modified: 2026-03-25T15:22:40.640+07:00
published: 2026-03-25T15:22:40.640+07:00
tags:
  - 
creation-time: 2025-10-02 03:20
status: complete
parent:
  - "[[Elementary Linear Algebra]]"
---

## Definition

**Point-normal** is a form of an equation used to uniquely determine a line in $R^{2}$ or a plane in $R^{3}$ and so forth. It is represented by the vector equation
$$
\mathbf{n}\cdot \overrightarrow{P\_{0}P} =0
$$

## Remark: Geometry

One learns in analytic geometric that a line in $R^{2}$ is determined uniquley by its slope and one of its points, and that a plane in $R^{3}$ is determined uniquely by its "inclination" and one of its points.

One way of specifying scope and inclination using this fact is to use a nonzero vector $\mathbf{n}$, called a [[def-normal_202510011645|normal]], that is [[def-orthogonal_202510011638|orthogonal]] to the plane line or plane in question.

For a line through point $P\_{0}(x\_{0},y\_{0})$ that has normal $\mathbf{n}=(a,b)$,
$$
a(x-x\_{0}) + b(y-y\_{0})=0
$$

For a plane through point $P\_{0}(x\_{0},y\_{0},z\_{0})$ that has normal $\mathbf{n}=(a,b,c)$,
$$
a(x-x\_{0}) + b(y-y\_{0}) + c(z-z\_{0})=0
$$

![[assets/image-33.png]]
