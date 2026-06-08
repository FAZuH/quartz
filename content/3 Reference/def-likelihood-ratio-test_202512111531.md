---
publish: true
aliases:
  - Likelihood Ratio Test
  - Likelihood Ratio
created: 2026-04-09T23:07:39.190+07:00
modified: 2026-04-09T23:07:39.191+07:00
published: 2026-04-09T23:07:39.191+07:00
tags:
  - 
creation-time: 2025-12-11 15:31
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

> [!tip]
> **Likelihood Ratio Test** (LRT) can be thought of as a generalization of [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]] for [[def-types-of-statistical-hypotheses_202508051003|composite hypotheses]].
>
> The main difference is that the [[Def-likelihood-function|likelihood function]] which represents the [[def-types-of-statistical-hypotheses_202508051003|composite hypothesis]] uses an estimated value obtained using [[maximum likelihood estimation (MLE)]].

## Definition

Let

- $C$ : [[def-best-critical-region_202508052110|Best critical region]] for [[def-test_202508050827|testing]] $H_{0}$ vs $H_{1}$[^1]
- $L(\boldsymbol{\theta})$ : [[Def-likelihood-function|Likelihood function]]
- $\omega_0$ : Parameter space under $H_0$
- $\Omega$ : Complete parameter space (under $H_1$ or unrestricted)

Let

- $L(\hat{\boldsymbol{\theta}})_{0}$ : [[Def-maximum-likelihood-estimator-(mle)|Maximum likelihood]] under $H_{0}$
- $L(\hat{\boldsymbol{\theta}})_{1}$ : Maximum likelihood under $H_{1}$ (or over $\Omega$)

Define the **likelihood ratio** as:
$\lambda = \frac{L(\hat{\boldsymbol{\theta}}_0)}{L(\hat{\boldsymbol{\theta}}_1)} = \frac{\max_{\boldsymbol{\theta} \in \omega_0} L(\boldsymbol{\theta})}{\max_{\boldsymbol{\theta} \in \Omega} L(\boldsymbol{\theta})}$

Then the **likelihood ratio test** is defined as follows: reject $H_{0}$ if $\lambda \leq k$ where $k$ is a constant chosen such that the test has [[def-size-of-critical-region_202507291323|significance level]] $\alpha$.

## Properties

1. $0 \leq \lambda \leq 1$ (since $\omega_0 \subseteq \Omega$)
2. $\lambda$ close to 1 indicates data supports $H_0$
3. $\lambda$ close to 0 indicates data supports $H_1$
4. Under regularity conditions, $-2\ln\lambda \xrightarrow{D} \chi^2(r)$ where $r = \dim(\Omega) - \dim(\omega_0)$

## Procedure

1. Find the [[Def-likelihood-function|likelihood function]]  $L(\theta) = \prod_{i=1}^n f(x_i;\theta)$

2. Do [[Maximum Likelihood Estimation (MLE)]] under $H_{0}$
   - Identifikasi parameter yang dispesifikasikan dan yang tidak
   - Jika ada parameter yang tidak dispesifikasikan, maksimumkan $L(\theta)$ terhadap parameter tersebut
   - Substitusi nilai optimal ke dalam likelihood untuk mendapatkan $L(\hat{\theta}_0)$
   - Jika semua parameter dispesifikasikan, maka $L(\hat{\theta}_0) = L(\theta_0)$

3. Do MLE under $H_{1}$:
   - Maksimumkan $L(\theta)$ terhadap semua parameter yang tidak dispesifikasikan
   - Cari [[Def-maximum-likelihood-estimator-(mle)|MLE]] $\hat{\theta}_1$ dengan menyelesaikan: $\frac{\partial \ln L(\theta)}{\partial \theta} = 0$
   - Substitusi $\hat{\theta}_1$ ke dalam likelihood untuk mendapatkan $L(\hat{\theta}_1)$

4. Compute the [[def-likelihood-ratio-test_202512111531|likelihood ratio]]: $\lambda = \frac{L(\hat{\theta}_0)}{L(\hat{\theta}_1)}$

5. Determine the [[def-test_202508050827|critical region]]

- Test menolak $H_0$ ketika $\lambda \leq k$ untuk konstanta $k$ yang dipilih berdasarkan tingkat signifikansi $\alpha$
- Alternatif: gunakan $-2\ln\lambda$ yang berdistribusi asimtotik $\chi^2$ dengan derajat bebas = (jumlah parameter di $\Omega$) - (jumlah parameter di $\omega_0$)

> [!tip]
>
> - If one of the hypotheses is a [[def-types-of-statistical-hypotheses_202508051003|simple hypothesis]], then the likelihood function is simply $L(\theta')$, where $\theta'$ is the hypothesized value

**Catatan penting:**

- $0 \leq \lambda \leq 1$ karena $L(\hat{\theta}_1) \geq L(\hat{\theta}_0)$ (likelihood maksimum di ruang parameter lebih besar selalu $\geq$ likelihood maksimum di ruang parameter yang lebih kecil)
- Untuk distribusi dengan support yang bergantung pada parameter (seperti uniform), perhatikan batasan parameter saat memaksimumkan likelihood

[^1]: For [[def-types-of-statistical-hypotheses_202508051003|simple vs simple hypotheses]], this reduces to the [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson]] formulation
