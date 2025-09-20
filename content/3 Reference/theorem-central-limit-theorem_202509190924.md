---
{"publish":true,"aliases":["Central Limit Theorem"],"created":"2025-09-19T09:24:51.091+07:00","modified":"2025-09-19T09:47:54.577+07:00","published":"2025-09-19T09:47:54.577+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-19 09:24","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
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
>  & = \frac{(\bar{X}_{n}-\mu)}{\sigma/\sqrt{ n }}
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