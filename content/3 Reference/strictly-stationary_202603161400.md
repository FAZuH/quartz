---
publish: true
aliases:
  - Strictly Stationary
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:10:50.229+07:00
published: 2026-03-29T21:10:50.229+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

A [[3 Reference/stochastic-process_202603161400\|stochastic process]] $\{ Y_{t} \}$ is **strictly stationary**

If for any $n\in \mathbb{Z}^+$, any set of time points $\{ t_{1},t_{2},\dots,t_{n} \}$, [[3 Reference/lag-definition_202603161400\|lag]] $k$ the joint cumulative distribution function of $(Y_{t_1}, Y_{t_2}, \dots, Y_{t_n})$ is identical to that of $(Y_{t_1+k}, Y_{t_2+k}, \dots, Y_{t_n+k})$

## Relationship with Weak Stationarity

Let $\{ Y_{t} \}$ be **strictly stationary** process.

If $\text{Var}(Y_{t})$ is finite for all $t$

The $\{ Y_{t} \}$ is also [[3 Reference/weakly-stationary_202603161400\|weakly stationary]]

> [!NOTE] Converse is Not True
> Weak stationarity does NOT imply strict stationarity. A process can have constant mean and covariance without having identical distributions at different times.

## Procedure: Proving Strict Stationarity

The standard approach uses the **i.i.d. white noise representation**:

1. **Express** $Y_t$ as a measurable function of i.i.d. random variables
   - e.g., $Y_t = f(a_t, a_{t-1}, a_{t-2}, \dots)$

2. **Write** the shifted version $Y_{t+k}$ in terms of the same i.i.d. variables with shifted indices
   - e.g., $Y_{t+k} = f(a_{t+k}, a_{t+k-1}, a_{t+k-2}, \dots)$

3. **Argue** that the joint distribution of $(Y_{t_1+k}, \dots, Y_{t_n+k})$ equals $(Y_{t_1}, \dots, Y_{t_n})$ because:
   - i.i.d. variables are exchangeable under index shifts
   - The transformation $f$ is the same for all time points

4. **Conclude**: All finite-dimensional distributions are time-invariant $\implies$ strictly stationary

> [!TIP] Key Requirement
> Strict stationarity requires:
> - The process depends on **i.i.d.** (not just uncorrelated) variables
> - Time enters **only through indices** of these i.i.d. variables
> - No explicit time dependence (like $t \cdot a_t$ or $t + Y_{t-1}$)

## Example: MA(1) Process

**Process**: $Y_t = a_t - \theta a_{t-1}$ where $\{a_t\}$ are i.i.d. white noise.

**Claim**: $\{Y_t\}$ is strictly stationary.

**Proof**:

1. $Y_t$ depends on $(a_t, a_{t-1})$
2. Shifted version: $Y_{t+k} = a_{t+k} - \theta a_{t+k-1}$
3. For any $(t_1, \dots, t_n)$:
   $$(Y_{t_1+k}, \dots, Y_{t_n+k}) = (a_{t_1+k} - \theta a_{t_1+k-1}, \dots, a_{t_n+k} - \theta a_{t_n+k-1})$$
4. Since $\{a_t\}$ are i.i.d., the joint distribution of $(a_{t_1+k}, a_{t_1+k-1}, \dots)$ equals that of $(a_{t_1}, a_{t_1-1}, \dots)$
5. Therefore $(Y_{t_1+k}, \dots, Y_{t_n+k}) \stackrel{d}{=} (Y_{t_1}, \dots, Y_{t_n})$

$\blacksquare$

## Example: AR(1) Process with $|\phi| < 1$

**Process**: $Y_t = \phi Y_{t-1} + a_t$ where $\{a_t\}$ are i.i.d. and $|\phi| < 1$.

**Claim**: $\{Y_t\}$ is strictly stationary.

**Proof**:

1. Solve recursively: $Y_t = \sum_{j=0}^{\infty} \phi^j a_{t-j}$ (converges since $|\phi| < 1$)
2. Shifted version: $Y_{t+k} = \sum_{j=0}^{\infty} \phi^j a_{t+k-j}$
3. For any $(t_1, \dots, t_n)$ and lag $k$:
   - $(Y_{t_1+k}, \dots, Y_{t_n+k})$ depends on $(a_{t_1+k}, a_{t_1+k-1}, \dots)$
   - This has the same joint distribution as $(a_{t_1}, a_{t_1-1}, \dots)$ by i.i.d.
4. Therefore $(Y_{t_1+k}, \dots, Y_{t_n+k}) \stackrel{d}{=} (Y_{t_1}, \dots, Y_{t_n})$

$\blacksquare$

## Example: Random Walk (NOT Strictly Stationary)

**Process**: $Y_t = Y_{t-1} + a_t = \sum_{i=1}^t a_i$ where $\{a_t\}$ are i.i.d.

**Claim**: $\{Y_t\}$ is **NOT** strictly stationary.

**Proof by Counterexample**:

Consider the joint distribution of $(Y_1, Y_2)$:
$$Y_1 = a_1 \qquad Y_2 = a_1 + a_2$$

Shifted by $k=1$: $(Y_2, Y_3)$:
$$Y_2 = a_1 + a_2 \qquad Y_3 = a_1 + a_2 + a_3$$

The two distributions are different:
- $(Y_1, Y_2)$ depends on 2 random variables
- $(Y_2, Y_3)$ depends on 3 random variables

Joint distributions change with time $\implies$ **not strictly stationary**.

$\blacksquare$

## Related

- [[3 Reference/weakly-stationary_202603161400\|Weakly Stationary]] — requires only constant mean and covariance
- [[3 Reference/white-noise_202603161400\|White Noise]] — i.i.d. white noise is strictly stationary
- [[3 Reference/random-walk_202603161400\|Random Walk]] — example of non-stationary process

