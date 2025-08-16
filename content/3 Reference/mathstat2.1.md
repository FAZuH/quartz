---
{"publish":true,"aliases":["2.1 Distributions of Two Random Variables.md"],"created":"2025-08-15T13:53:58.457+07:00","modified":"2025-08-15T13:53:58.458+07:00","published":"2025-08-15T13:53:58.458+07:00","cssclasses":"","creation-time":"2025-07-02 23:50","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---


<< [[3 Reference/mathstat1.10\|1.10 Important Inequalities.md]] | [[3 Reference/2.2-transformations-bivariate-random-variables_202507240549\|2.2 Transformations: Bivariate Random Variables]] >>

#TODO: Marginal distributions

## Definition 2.1.1: Random vector
![[3 Reference/def-random-vector_202507171028#Definition]]

## Theorem 2.1.1
> Let 
> - $(X_{1},X_{2})$ : Random vector
> - $Y_{1}=g_{1}(X_{1},X_{2})$
> - $Y_{2}=g_{2}(X_{1},X_{2})$
> - $E(Y_{1}),E(Y_{2})$ exist
> 
> Then
> $$
> E(k_{1}Y_{1}+k_{2}Y_{2}) = k_{1}E(Y_{1}) + k_{2}E(Y_{2}), \quad \forall k_{1},k_{2}\in \mathbb{R}
> $$

## Definition 2.1.2: mgf of random vector of two random variables
> Let $\mathbf{X}=(X_{1},X_{2})'$ : Random vector
> 
> If
> $$
> M_{X_{1},X_{2}}(t_{1},t_{2}) = E(e^{ t_{1}X_{1}+t_{2}X_{2} })\text{ exists}, \quad |t_{1}|<h_{1},|t_{2}|<h_{2},h_{1}\in \mathbb{P}, h_{2}\in \mathbb{P}
> $$
> 
> Then we say $M_{X_{1},X_{2}}$ is the mgf of $\mathbf{X}$

## Definition 2.1.3: Expected value of random vector of two random variables
> Let $\mathbf{X}=(X,Y)'$ : Random vector
> 
> If $E(X),E(Y)$ exist
> 
> Then $E[\mathbf{X}]=E\left[\begin{matrix}E(X) \\ E(Y)\end{matrix}\right]$ exist
