---
publish: true
aliases:
  - Stochastic Model
created: 2026-03-29T12:54:01.179+07:00
modified: 2026-04-03T19:14:40.633+07:00
published: 2026-04-03T19:14:40.633+07:00
tags:
  - type/category
creation-time: 2026-03-12 21:41
status: in progress
parent:
  - "[[statistics]]"
---

# Stochastic Model

- _italic_: Definition / About
- **Bold**: Theorem / Property
- Standard: Procedure / Example / Cheatsheet

## Stochastic Process Fundamentals

- _[[def-stochastic-process_202603280800|Stochastic Process]]_
- _[[def-state-stochastic_202603280801|State (Stochastic)]]_
  - _[[about-state-vs-sample_202603280802|State vs Sample]]_
- _[[def-markov-property_202603280803|Markov Property]]_
- _[[def-markov-process_202603280804|Markov Process]]_

## Markov Chain Fundamentals

- _[[def-discrete-time-markov-chain_202603280806|Discrete-time Markov Chain]]_
- _[[def-transition-probability_202603280807|Transition Probability]]_
- _[[def-transition-probability-matrix_202603280810|Transition Probability Matrix]]_
- _[[def-n-step-transition-matrix_202603280812|n-step Transition Matrix]]_
- _[[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov Equation]]_
  - **[[theorem-n-step-transition-identity_202603280813|n-step Transition Matrix Identity]]**

## State Properties

- _[[def-accessible-state_202603280820|Accessible State]]_

- _[[def-communication_202603280821|Communication]]_

- _[[def-communicating-classes_202603280822|Communicating Classes]]_

- _[[def-irreducible_202603280823|Irreducible]]_

- _[[def-recurrent-transient_202603280824|Recurrent vs Transient]]_

- _[[def-period-stochastic_202603280825|Period (Stochastic)]]_
  - _[[about-aperiodic-vs-periodic_202603280826|Aperiodic vs Periodic State]]_

- _[[def-absorbing-state_202603280805|Absorbing State]]_

- [[stochastic-state-classification-cheatsheet_202603280830|State Classification Cheatsheet]]

## Limiting Behavior

- _[[def-limiting-probability_202603280831|Limiting Probability]]_
- _[[def-regular-tpm_202603280832|Regular Transition Probability Matrix]]_
  - **[[theorem-regular-irreducible-aperiodic_202603280901|Regular Chain is Irreducible and Aperiodic]]**
- _[[def-stationary-distribution_202603280834|Stationary Distribution]]_
- _[[def-ergodic-state_202603280835|Ergodic State]]_
  - _[[about-positive-recurrent_202603280902|Positive Recurrent State]]_
- **[[theorem-limiting-distribution_202603280833|Limiting Distribution Theorem]]**

## Transient Analysis

- _[[def-mean-time-transient_202603280840|Mean Time Spent in Transient States]]_
- _[[def-hitting-probability-transient_202603280841|Hitting Probability (Transient)]]_
- [[procedure-first-step-analysis_202603280842|First Step Analysis]]
  - [[comparison-limiting-vs-hitting_202603280836|Limiting vs Hitting Probability]]

## Special Topics

- _[[def-random-walk-markov-chain_202603280814|Random Walk Markov Chain]]_
- _[[def-branching-process_202603280850|Branching Process]]_
- _[[def-extinction-probability_202603280851|Extinction Probability]]_
- _[[def-time-reversible-markov_202603280852|Time Reversible Markov Chain]]_
- _[[def-markov-chain-monte-carlo_202603280853|Markov Chain Monte Carlo]]_

## Poisson Processes

- _[[counting-process_202604031839|Counting Process]]_
  - _[[independent-and-stationary-increments_202604031839|Independent and Stationary Increments]]_
- _[[poisson-process_202604031845|Poisson Process]]_
  - **[[sum-of-poisson-random-variables_202604031845|Sum of Poisson Random Variables]]**
  - **[[poisson-binomial-distribution_202604031845|Poisson-Binomial Distribution]]**
- _[[inter-arrival-times_202604031845|Inter-arrival Times]]_
- _[[waiting-times-(poisson)_202604031845|Waiting Times]]_
- **[[conditional-distribution-of-arrival-times_202604031845|Conditional Distribution of Arrival Times]]**
- _[[thinning-(poisson)_202604031846|Thinning]]_
  - **[[independence-of-thinned-processes_202604031846|Independence of Thinned Processes]]**
- _[[nonhomogeneous-poisson-process_202604031847|Nonhomogeneous Poisson Process]]_
- _[[compound-poisson-process_202604031847|Compound Poisson Process]]_

## Related Distributions

- _[[def-exponential-distribution-survival_202603281500|Exponential Distribution]]_
  - _[[memoryless-property_202604031840|Memoryless Property]]_
  - _[[failure-rate-function_202604031840|Failure Rate Function]]_
- _[[hyperexponential-distribution_202604031846|Hyperexponential Distribution]]_
- _[[hypoexponential-distribution_202604031846|Hypoexponential Distribution]]_
- _[[coxian-distribution_202604031846|Coxian Distribution]]_

## Cheatsheets

- [[poisson-process-cheatsheet_202604031847|Poisson Process Cheatsheet]]

## Examples

- [[example-transition-matrix_202603280854|Transition Matrix Example]]
- [[example-n-step-transition_202603280855|n-step Transition Matrix Example]]
- [[example-gambling-model_202603280856|Gambling Model]]
- [[example-gambler-ruin-fsa_202603280843|First Step Analysis - Gambler's Ruin]]
- [[example-social-class_202603280900|Social Class Problem Example]]
- [[example-random-walk-model_202603280910|Random Walk Model Example]]
