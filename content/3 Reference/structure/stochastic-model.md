---
publish: true
aliases:
  - Stochastic Model
created: 2026-03-29T12:54:01.179+07:00
modified: 2026-06-05T03:12:18.225+07:00
published: 2026-06-05T03:12:18.225+07:00
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

## Prerequisites

- [[probability-and-random-variables-review_202604092032|Probability and Random Variables Review]]
- [[conditional-probability-and-expectation-review_202604092032|Conditional Probability and Expectation Review]]

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
  - **[[kolmogorovs-criterion_202604092032|Kolmogorov's Criterion]]**
- _[[def-markov-chain-monte-carlo_202603280853|Markov Chain Monte Carlo]]_

## Counting and Poisson Processes

- _[[counting-process_202604031839|Counting Process]]_
  - _[[independent-and-stationary-increments_202604031839|Independent and Stationary Increments]]_
- _[[poisson-process_202604031845|Poisson Process]]_
  - **[[sum-of-poisson-random-variables_202604031845|Sum of Poisson Random Variables]]**
  - **[[poisson-binomial-distribution_202604031845|Poisson-Binomial Distribution]]**
  - _[[compound-poisson-process_202604031847|Compound Poisson Process]]_
  - _[[nonhomogeneous-poisson-process_202604031847|Nonhomogeneous Poisson Process]]_
  - _[[mixed-poisson-process_202604092032|Mixed Poisson Process]]_
- _[[inter-arrival-times_202604031845|Inter-arrival Times]]_
- _[[waiting-times-(poisson)_202604031845|Waiting Times]]_
- **[[conditional-distribution-of-arrival-times_202604031845|Conditional Distribution of Arrival Times]]**
- _[[thinning-(poisson)_202604031846|Thinning]]_
  - **[[independence-of-thinned-processes_202604031846|Independence of Thinned Processes]]**

## Related Distributions

- _[[poisson-distribution_202604092032|Poisson Distribution]]_
- _[[def-exponential-distribution-survival_202603281500|Exponential Distribution]]_
  - _[[memoryless-property_202604031840|Memoryless Property]]_
  - _[[failure-rate-function_202604031840|Failure Rate Function]]_
- _[[hyperexponential-distribution_202604031846|Hyperexponential Distribution]]_
- _[[hypoexponential-distribution_202604031846|Hypoexponential Distribution]]_
- _[[coxian-distribution_202604031846|Coxian Distribution]]_

## Continuous-Time Markov Chains

- _[[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]_
  - **[[ctmc-transition-time-distribution_202605080516|CTMC Transition Time Distribution]]**
- _[[pure-birth-process_202605080516|Pure Birth Process]]_
  - _[[yule-process_202605080517|Yule Process]]_
- _[[birth-and-death-process_202605080517|Birth and Death Process]]_
  - [[solving-bd-process-balance-equations_202605080618|Solving BD Process Balance Equations]]
  - _[[probability-of-population-extinction_202605080618|Probability of Population Extinction]]_
    - _[[expected-time-to-extinction_202605080619|Expected Time to Extinction]]_
  - _[[stochastic-logistic-growth-process_202605080619|Stochastic Logistic Growth Process]]_
- _[[transition-rate-matrix_202605080516|Transition Rate Matrix]]_
- _[[embedded-markov-chain_202605080616|Embedded Markov Chain]]_
  - **[[class-properties-of-ctmc_202605080616|Class Properties of CTMC]]**
- _[[ctmc-transition-probability-function_202605080516|CTMC Transition Probability Function]]_
  - **[[ctmc-chapman-kolmogorov-equation_202605080516|CTMC Chapman-Kolmogorov Equation]]**
- _[[matrix-exponential_202605080518|Matrix Exponential]]_
  - **[[derivative-of-matrix-exponential_202605080518|Derivative of Matrix Exponential]]**
- **[[kolmogorov-differential-equations_202605080518|Kolmogorov Differential Equations]]**
- _[[ctmc-limit-probabilities_202605080616|CTMC Limit Probabilities]]_
  - **[[existence-of-ctmc-limit-probabilities_202605080617|Existence of CTMC Limit Probabilities]]**
- _[[ctmc-balance-equations_202605080617|CTMC Balance Equations]]_
- _[[time-reversible-ctmc_202605080617|Time Reversible CTMC]]_
  - **[[ergodic-birth-and-death-process-is-time-reversible_202605080617|Ergodic Birth and Death Process is Time Reversible]]**
  - **[[truncated-time-reversible-ctmc_202605080618|Truncated Time Reversible CTMC]]**
- _[[quasistationary-probability-distribution_202605080619|Quasistationary Probability Distribution]]_
- _[[uniformization-of-ctmc_202605181736|Uniformization of CTMC]]_

## Queueing Systems

- _[[queueing-system_202605080520|Queueing System]]_
  - **[[queueing-formula-l-=-λw_202605080520|Queueing Formula L = \lambda W]]**
- _[[m-m-1-queueing-system_202605080520|M/M/1 Queueing System]]_
- _[[m-m-s-queueing-system_202605080521|M/M/s Queueing System]]_
- _[[m-m-∞-queueing-system_202605080521|M/M/∞ Queueing System]]_
- _[[birth-and-death-queueing-models_202605080521|Birth and Death Queueing Models]]_
- _[[queueing-system-with-balking_202605080521|Queueing System with Balking]]_

## Biological Epidemic Models

- _[[stochastic-sis-epidemic-model_202605080620|Stochastic SIS Epidemic Model]]_
- _[[stochastic-sir-epidemic-model_202605080620|Stochastic SIR Epidemic Model]]_

## Cheatsheets

- [[poisson-process-cheatsheet_202604031847|Poisson Process Cheatsheet]]
- [[stochastic-state-relationships_202604100526|Stochastic State Relationships Cheatsheet]]
- [[ctmc-cheatsheet_202606050220|CTMC Cheatsheet]]
- [[queueing-systems-cheatsheet_202606050220|Queueing Systems Cheatsheet]]

## Examples

### Markov Chains

- [[example-transition-matrix_202603280854|Transition Matrix Example]]
- [[example-n-step-transition_202603280855|n-step Transition Matrix Example]]
- [[example-gambling-model_202603280856|Gambling Model]]
- [[example-gambler-ruin-fsa_202603280843|First Step Analysis - Gambler's Ruin]]
- [[example-social-class_202603280900|Social Class Problem Example]]
- [[example-random-walk-model_202603280910|Random Walk Model Example]]
- [[urn-ball-replacement-n-step-transition_202604092035|Urn Ball Replacement n-step Transition]]

### Poisson Process & Counting

- [[function-o(h)_202604092033|Function o(h)]]
- [[exponential-random-variables-and-expected-discounted-returns_202604092033|Exponential Random Variables and Expected Discounted Returns]]
- [[time-spent-in-a-bank_202604092033|Time Spent in a Bank]]
- [[automobile-accident-damage_202604092033|Automobile Accident Damage]]
- [[commodity-ordering_202604092033|Commodity Ordering]]
- [[analyzing-greedy-algorithms-for-the-assignment-problem_202604092033|Analyzing Greedy Algorithms for the Assignment Problem]]
- [[cells-in-the-body_202604092033|Cells in the Body]]
- [[customers-in-line_202604092033|Customers in Line]]
- [[immigrants-into-a-territory_202604092033|Immigrants into a Territory]]
- [[nonnegative-offers_202604092033|Nonnegative Offers]]
- [[system-with-classified-individuals_202604092033|System with Classified Individuals]]
- [[the-coupon-collecting-problem_202604092033|The Coupon Collecting Problem]]
- [[an-infinite-server-queue_202604092033|An Infinite Server Queue]]
- [[minimizing-the-number-of-encounters_202604092033|Minimizing the Number of Encounters]]
- [[tracking-the-number-of-hiv-infections_202604092033|Tracking the Number of HIV Infections]]
- [[insurance-claims_202604092033|Insurance Claims]]
- [[an-optimization-example_202604092033|An Optimization Example]]
- [[nonhomogeneous-poisson-process-demand-of-a-facility_202604092033|Nonhomogeneous Poisson Process Demand of a Facility]]
- [[bugs-in-operating-time_202604092033|Bugs in Operating Time]]
- [[siegbert-hot-dog-stand_202604092033|Siegbert Hot Dog Stand]]
- [[the-output-process-of-an-infinite-server-poisson-queue_202604092034|The Output Process of an Infinite Server Poisson Queue]]
- [[families-migrate-to-an-area_202604092034|Families Migrate to an Area]]
- [[busy-periods-in-single-server-poisson-arrival-queues_202604092034|Busy Periods in Single Server Poisson Arrival Queues]]
- [[gamma-density_202604092034|Gamma Density]]
- [[insurance-company-policyholders_202604092034|Insurance Company Policyholders]]

### Continuous-Time Markov Chains

- [[shoe-shine-shop_202605080518|Shoe Shine Shop]]
- [[birth-process-with-linear-birth-rate_202605080519|Birth Process with Linear Birth Rate]]
- [[linear-growth-model-with-immigration_202605080519|Linear Growth Model with Immigration]]
- [[machine-repair-model_202605080620|Machine Repair Model]]

### Queueing Systems

- [[m-m-1-queue-example_202605080522|M/M/1 Queue Example]]
- [[m-m-s-queue-example_202605080522|M/M/s Queue Example]]
- [[hospital-emergency-room-m-m-1_202606050312|Hospital Emergency Room M/M/1]]
