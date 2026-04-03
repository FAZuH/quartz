---
publish: true
aliases:
  - Stochastic Model
created: 2026-03-29T12:54:01.179+07:00
modified: 2026-04-03T19:14:40.633+07:00
published: 2026-04-03T19:14:40.633+07:00
tags:
  - type/category
cssclasses: ""
creation-time: 2026-03-12 21:41
status: in progress
parent:
  - "[[statistics]]"
---


# Stochastic Model

- *italic*: Definition / About
- **Bold**: Theorem / Property
- Standard: Procedure / Example / Cheatsheet

## Stochastic Process Fundamentals

- *[[3 Reference/def-stochastic-process_202603280800\|Stochastic Process]]*
- *[[3 Reference/def-state-stochastic_202603280801\|State (Stochastic)]]*
	- *[[3 Reference/about-state-vs-sample_202603280802\|State vs Sample]]*
- *[[3 Reference/def-markov-property_202603280803\|Markov Property]]*
- *[[3 Reference/def-markov-process_202603280804\|Markov Process]]*

## Markov Chain Fundamentals

- *[[3 Reference/def-discrete-time-markov-chain_202603280806\|Discrete-time Markov Chain]]*
- *[[3 Reference/def-transition-probability_202603280807\|Transition Probability]]*
- *[[3 Reference/def-transition-probability-matrix_202603280810\|Transition Probability Matrix]]*
- *[[3 Reference/def-n-step-transition-matrix_202603280812\|n-step Transition Matrix]]*
- *[[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov Equation]]*
	- **[[3 Reference/theorem-n-step-transition-identity_202603280813\|n-step Transition Matrix Identity]]**

## State Properties

- *[[3 Reference/def-accessible-state_202603280820\|Accessible State]]*
- *[[3 Reference/def-communication_202603280821\|Communication]]*
- *[[3 Reference/def-communicating-classes_202603280822\|Communicating Classes]]*
- *[[3 Reference/def-irreducible_202603280823\|Irreducible]]*
- *[[3 Reference/def-recurrent-transient_202603280824\|Recurrent vs Transient]]*
- *[[3 Reference/def-period-stochastic_202603280825\|Period (Stochastic)]]*
	- *[[3 Reference/about-aperiodic-vs-periodic_202603280826\|Aperiodic vs Periodic State]]*
- *[[3 Reference/def-absorbing-state_202603280805\|Absorbing State]]*

- [[3 Reference/stochastic-state-classification-cheatsheet_202603280830\|State Classification Cheatsheet]]

## Limiting Behavior

- *[[3 Reference/def-limiting-probability_202603280831\|Limiting Probability]]*
- *[[3 Reference/def-regular-tpm_202603280832\|Regular Transition Probability Matrix]]*
	- **[[3 Reference/theorem-regular-irreducible-aperiodic_202603280901\|Regular Chain is Irreducible and Aperiodic]]**
- *[[3 Reference/def-stationary-distribution_202603280834\|Stationary Distribution]]*
- *[[3 Reference/def-ergodic-state_202603280835\|Ergodic State]]*
	- *[[3 Reference/about-positive-recurrent_202603280902\|Positive Recurrent State]]*
- **[[3 Reference/theorem-limiting-distribution_202603280833\|Limiting Distribution Theorem]]**

## Transient Analysis

- *[[3 Reference/def-mean-time-transient_202603280840\|Mean Time Spent in Transient States]]*
- *[[3 Reference/def-hitting-probability-transient_202603280841\|Hitting Probability (Transient)]]*
- [[3 Reference/procedure-first-step-analysis_202603280842\|First Step Analysis]]
	- [[3 Reference/comparison-limiting-vs-hitting_202603280836\|Limiting vs Hitting Probability]]

## Special Topics

- *[[3 Reference/def-random-walk-markov-chain_202603280814\|Random Walk Markov Chain]]*
- *[[3 Reference/def-branching-process_202603280850\|Branching Process]]*
- *[[3 Reference/def-extinction-probability_202603280851\|Extinction Probability]]*
- *[[3 Reference/def-time-reversible-markov_202603280852\|Time Reversible Markov Chain]]*
- *[[3 Reference/def-markov-chain-monte-carlo_202603280853\|Markov Chain Monte Carlo]]*

## Poisson Processes

- *[[3 Reference/counting-process_202604031839\|Counting Process]]*
	- *[[3 Reference/independent-and-stationary-increments_202604031839\|Independent and Stationary Increments]]*
- *[[3 Reference/poisson-process_202604031845\|Poisson Process]]*
	- **[[3 Reference/sum-of-poisson-random-variables_202604031845\|Sum of Poisson Random Variables]]**
	- **[[3 Reference/poisson-binomial-distribution_202604031845\|Poisson-Binomial Distribution]]**
- *[[3 Reference/inter-arrival-times_202604031845\|Inter-arrival Times]]*
- *[[3 Reference/waiting-times-(poisson)_202604031845\|Waiting Times]]*
- **[[3 Reference/conditional-distribution-of-arrival-times_202604031845\|Conditional Distribution of Arrival Times]]**
- *[[3 Reference/thinning-(poisson)_202604031846\|Thinning]]*
	- **[[3 Reference/independence-of-thinned-processes_202604031846\|Independence of Thinned Processes]]**
- *[[3 Reference/nonhomogeneous-poisson-process_202604031847\|Nonhomogeneous Poisson Process]]*
- *[[3 Reference/compound-poisson-process_202604031847\|Compound Poisson Process]]*

## Related Distributions

- *[[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]*
	- *[[3 Reference/memoryless-property_202604031840\|Memoryless Property]]*
	- *[[3 Reference/failure-rate-function_202604031840\|Failure Rate Function]]*
- *[[3 Reference/hyperexponential-distribution_202604031846\|Hyperexponential Distribution]]*
- *[[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential Distribution]]*
- *[[3 Reference/coxian-distribution_202604031846\|Coxian Distribution]]*

## Cheatsheets

- [[3 Reference/poisson-process-cheatsheet_202604031847\|Poisson Process Cheatsheet]]

## Examples

- [[3 Reference/example-transition-matrix_202603280854\|Transition Matrix Example]]
- [[3 Reference/example-n-step-transition_202603280855\|n-step Transition Matrix Example]]
- [[3 Reference/example-gambling-model_202603280856\|Gambling Model]]
- [[3 Reference/example-gambler-ruin-fsa_202603280843\|First Step Analysis - Gambler's Ruin]]
- [[3 Reference/example-social-class_202603280900\|Social Class Problem Example]]
- [[3 Reference/example-random-walk-model_202603280910\|Random Walk Model Example]]