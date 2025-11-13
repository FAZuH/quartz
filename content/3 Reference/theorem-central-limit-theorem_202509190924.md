---
{"publish":true,"aliases":["Central Limit Theorem"],"created":"2025-10-14T04:15:27.046+07:00","modified":"2025-10-31T05:57:19.609+07:00","published":"2025-10-31T05:57:19.609+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-19 09:24","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
---


## Theorem

> Let
> - $X_{1}\dots X_{n}$ : Observations of a [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random sample]], with
> 	- Common mean $\mu$
> 	- Common variance $\sigma^2\in \mathbb{P}$
> 
> If
> $$ \begin{align}
> Y_{n} & = \frac{ \sum_{i=1}^n X_{i} - n\mu }{\sqrt{ n }\sigma} \\
>  & = \frac{\bar{X}_{n}-\mu}{\sigma/\sqrt{ n }}
> \end{align} $$
> 
> Then
> $$ Y_{n}\xrightarrow D N(0,1) $$

> [!note] 
> Recall that the notation $Y_{n}\xrightarrow D N(0,1)$ was introduced in [[3 Reference/mathstat5.2#^convergence-to-dist-notation\|convergence in distribution's remark]].
> 
> We often state the central limit theorem as:
> $$
> \sqrt{ n }(\bar{X}-\mu) \to N(0,\sigma^2)
> $$
> 
> One of the key applications of this theorem is for statistical inference, as shown in Example 5.3.1-5.3.6 in the source book.

## Proof

This is $e$
![[assets/image-20.png]]

## Example

> Let $\bar{X}$ denote the mean of a [[3 Reference/Def-random-sample\|random sample]] of size $128$ from a [[3 Reference/Continuous Distributions#Gamma distribution\|Gamma distribution]] with $\alpha=2$ and $\beta=4$. 
> 
> Approximate $P(7<\bar{X}<9)$

- $\mu = \alpha\beta=2\cdot4 = 8$
- $\sigma^{2} = \alpha\beta^{2}=2\cdot16 = 32$
- $\sigma/\sqrt{ n } = \sqrt{ \frac{32}{128} } = \frac{1}{2}$

By central limit theorem,
$$
\begin{align}
P(7<\bar{X}<9) & = P\left( \frac{7-\mu}{\sigma/\sqrt{ n }} < \frac{\bar{X}-\mu}{\sigma/\sqrt{ n }} < \frac{9-\mu}{\sigma/\sqrt{ n }} \right) \\
 & = P\left( \frac{7-8}{1/2} < Z < \frac{9-2}{1/2} \right) \\
 & = P\left( -2 < Z < 2 \right) \\
 & = \Phi(2) - \Phi(-2) \\
 & = \Phi(2) - [1-\Phi(2)] \\
 & = 2\cdot \Phi(2) - 1 \\
 & = 2\cdot 0.977 - 1 \\
 & = 0.954
\end{align}
$$