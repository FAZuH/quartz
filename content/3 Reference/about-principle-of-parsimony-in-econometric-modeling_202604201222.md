---
publish: true
aliases:
  - Principle of Parsimony in Econometric Modeling
created: 2026-04-20T12:22:42.384+07:00
modified: 2026-04-20T12:45:32.211+07:00
published: 2026-04-20T12:45:32.211+07:00
cssclasses: ""
creation-time: 2026-04-20 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## About

A fundamental principle in statistical and econometric modeling that advocates for concise [[3 Reference/forecasting-methods-cheatsheet_202603292104\|model]] specification and objects to overparameterization.

> **Parsimony** (Merriam-Webster):
> 1. The quality of being careful with money or resources
> 2. The quality or state of being stingy

In econometric modeling, parsimony means:
- Use the simplest model that adequately captures the data-generating process
- Avoid including unnecessary parameters
- Prefer models with fewer parameters when they fit equally well

## The Problem with ARCH Models

[[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m)]] models require estimating many [[3 Reference/parameter-estimation-by-method-of-moments_202604052127\|parameters]] to fully capture higher-order autoregressive relationships in $a_t^2$. An ARCH(m) model has $m+1$ parameters ($\alpha_0, \alpha_1, ..., \alpha_m$).

For example, if you need an ARCH(5) to capture the volatility dynamics, that's 6 parameters just for the volatility equation—quite a lot!

## The GARCH Solution

This is exactly why **GARCH** models were developed. A high-order ARCH model may have a more parsimonious GARCH representation:
- A GARCH(1,1) with only 3 parameters can often replace a high-order ARCH(m)
- This is analogous to how an ARMA(1,1) can replace a high-order AR process

## Related
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]]