---
{"publish":true,"aliases":["Vector Space Axioms","Vector Space"],"created":"2025-10-14T04:15:27.064+07:00","modified":"2025-10-14T04:15:27.064+07:00","published":"2025-10-14T04:15:27.064+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-24 07:15","status":"adult","parent":["[[Elementary Linear Algebra]]"]}
---


## Definition

Let $V$ be an arbitrary nonempty [[3 Reference/def-set_202510022014\|set]] of objects on which the following operations are defined:
- Addition: $\mathbf{u}+\mathbf{v},\forall \mathbf{u},\mathbf{v}\in V$ (sum of $\mathbf{u}$ and $\mathbf{v}$)
- Scalar multiplication: $k\mathbf{u},\forall \mathbf{u}\in V,k\text{ scalar}$ (scalar multiple of $\mathbf{u}$ by $k$)

If $\forall\mathbf{u},\mathbf{v},\mathbf{w}\in V;\forall k,m\text{ scalar}$
1. $\mathbf{u},\mathbf{v}\in V\implies \mathbf{u}+\mathbf{v}\in V$
2. $\mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u}$
3. $(\mathbf{u}+\mathbf{v})+\mathbf{w}=\mathbf{v}+(\mathbf{u}+\mathbf{w})$
4. $\exists \mathbf{0}\in V\;\ni\;(\mathbf{0}+\mathbf{v})=(\mathbf{v}+\mathbf{0})=\mathbf{v},\;\forall \mathbf{v}\in V$
5. $\forall \mathbf{v}\in V\;\exists(-\mathbf{v})\ni(-\mathbf{v})+\mathbf{v}=\mathbf{v}+(-\mathbf{v})=\mathbf{0}\in V$
6. $k\text{ scalar},\mathbf{u}\in V\implies k\mathbf{u}\in V$
7. $k(\mathbf{u}+\mathbf{v})=k\mathbf{u}+k\mathbf{v}$
8. $(k+m)\mathbf{u}=k\mathbf{u}+m\mathbf{u}$
9. $k(m\mathbf{u})=(km)\mathbf{u}$
10. $1\mathbf{u}=\mathbf{u}$

Then 
- $V$ is a **vector space**
- All objects in $V$ are **vectors**

