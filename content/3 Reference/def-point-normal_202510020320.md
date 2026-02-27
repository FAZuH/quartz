---
publish: true
aliases:
  - Point-Normal
created: 2026-02-22T19:23:58.403+07:00
modified: 2026-02-22T19:23:58.403+07:00
published: 2026-02-22T19:23:58.403+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-02 03:20
status: adult
parent:
  - "[[Elementary Linear Algebra]]"
---


## Definition

**Point-normal** is a form of an equation used to uniquely determine a line in $R^{2}$ or a plane in $R^{3}$ and so forth. It is represented by the vector equation
$$
\mathbf{n}\cdot \overrightarrow{P_{0}P} =0
$$

## Remark: Geometry

One learns in analytic geometric that a line in $R^{2}$ is determined uniquley by its slope and one of its points, and that a plane in $R^{3}$ is determined uniquely by its "inclination" and one of its points.

One way of specifying scope and inclination using this fact is to use a nonzero vector $\mathbf{n}$, called a [[3 Reference/def-normal_202510011645\|normal]], that is [[3 Reference/def-orthogonal_202510011638\|orthogonal]] to the plane line or plane in question.

For a line through point $P_{0}(x_{0},y_{0})$ that has normal $\mathbf{n}=(a,b)$,
$$
a(x-x_{0}) + b(y-y_{0})=0
$$

For a plane through point $P_{0}(x_{0},y_{0},z_{0})$ that has normal $\mathbf{n}=(a,b,c)$,
$$
a(x-x_{0}) + b(y-y_{0}) + c(z-z_{0})=0 
$$

![[assets/image-33.png]]