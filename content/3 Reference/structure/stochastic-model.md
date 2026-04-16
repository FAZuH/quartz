---
publish: true
aliases:
  - Stochastic Model
created: 2026-03-29T12:54:01.179+07:00
modified: 2026-04-10T05:26:50.987+07:00
published: 2026-04-10T05:26:50.987+07:00
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

## Prerequisites

- [[3 Reference/probability-and-random-variables-review_202604092032\|Probability and Random Variables Review]]
- [[3 Reference/conditional-probability-and-expectation-review_202604092032\|Conditional Probability and Expectation Review]]

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
	- **[[3 Reference/kolmogorovs-criterion_202604092032\|Kolmogorov's Criterion]]**
- *[[3 Reference/def-markov-chain-monte-carlo_202603280853\|Markov Chain Monte Carlo]]*

## Counting and Poisson Processes

- *[[3 Reference/counting-process_202604031839\|Counting Process]]*
	- *[[3 Reference/independent-and-stationary-increments_202604031839\|Independent and Stationary Increments]]*
- *[[3 Reference/poisson-process_202604031845\|Poisson Process]]*
	- **[[3 Reference/sum-of-poisson-random-variables_202604031845\|Sum of Poisson Random Variables]]**
	- **[[3 Reference/poisson-binomial-distribution_202604031845\|Poisson-Binomial Distribution]]**
	- *[[3 Reference/compound-poisson-process_202604031847\|Compound Poisson Process]]*
	- *[[3 Reference/nonhomogeneous-poisson-process_202604031847\|Nonhomogeneous Poisson Process]]*
	- *[[3 Reference/mixed-poisson-process_202604092032\|Mixed Poisson Process]]*
- *[[3 Reference/inter-arrival-times_202604031845\|Inter-arrival Times]]*
- *[[3 Reference/waiting-times-(poisson)_202604031845\|Waiting Times]]*
- **[[3 Reference/conditional-distribution-of-arrival-times_202604031845\|Conditional Distribution of Arrival Times]]**
- *[[3 Reference/thinning-(poisson)_202604031846\|Thinning]]*
	- **[[3 Reference/independence-of-thinned-processes_202604031846\|Independence of Thinned Processes]]**

## Related Distributions

- *[[3 Reference/poisson-distribution_202604092032\|Poisson Distribution]]*
- *[[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]*
	- *[[3 Reference/memoryless-property_202604031840\|Memoryless Property]]*
	- *[[3 Reference/failure-rate-function_202604031840\|Failure Rate Function]]*
- *[[3 Reference/hyperexponential-distribution_202604031846\|Hyperexponential Distribution]]*
- *[[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential Distribution]]*
- *[[3 Reference/coxian-distribution_202604031846\|Coxian Distribution]]*

## Cheatsheets

- [[3 Reference/poisson-process-cheatsheet_202604031847\|Poisson Process Cheatsheet]]
- [[3 Reference/stochastic-state-relationships_202604100526\|Stochastic State Relationships Cheatsheet]]

## Examples

- [[3 Reference/urn-ball-replacement-n-step-transition_202604092035\|Urn Ball Replacement n-step Transition]]
- [[3 Reference/exponential-random-variables-and-expected-discounted-returns_202604092033\|Exponential Random Variables and Expected Discounted Returns]]
- [[3 Reference/time-spent-in-a-bank_202604092033\|Time Spent in a Bank]]
- [[3 Reference/automobile-accident-damage_202604092033\|Automobile Accident Damage]]
- [[3 Reference/commodity-ordering_202604092033\|Commodity Ordering]]
- [[3 Reference/analyzing-greedy-algorithms-for-the-assignment-problem_202604092033\|Analyzing Greedy Algorithms for the Assignment Problem]]
- [[3 Reference/cells-in-the-body_202604092033\|Cells in the Body]]
- [[3 Reference/customers-in-line_202604092033\|Customers in Line]]
- [[3 Reference/function-o(h)_202604092033\|Function o(h)]]
- [[3 Reference/immigrants-into-a-territory_202604092033\|Immigrants into a Territory]]
- [[3 Reference/nonnegative-offers_202604092033\|Nonnegative Offers]]
- [[3 Reference/system-with-classified-individuals_202604092033\|System with Classified Individuals]]
- [[3 Reference/the-coupon-collecting-problem_202604092033\|The Coupon Collecting Problem]]
- [[3 Reference/an-infinite-server-queue_202604092033\|An Infinite Server Queue]]
- [[3 Reference/minimizing-the-number-of-encounters_202604092033\|Minimizing the Number of Encounters]]
- [[3 Reference/tracking-the-number-of-hiv-infections_202604092033\|Tracking the Number of HIV Infections]]
- [[3 Reference/insurance-claims_202604092033\|Insurance Claims]]
- [[3 Reference/an-optimization-example_202604092033\|An Optimization Example]]
- [[3 Reference/nonhomogeneous-poisson-process-demand-of-a-facility_202604092033\|Nonhomogeneous Poisson Process Demand of a Facility]]
- [[3 Reference/bugs-in-operating-time_202604092033\|Bugs in Operating Time]]
- [[3 Reference/siegbert-hot-dog-stand_202604092033\|Siegbert Hot Dog Stand]]
- [[3 Reference/the-output-process-of-an-infinite-server-poisson-queue_202604092034\|The Output Process of an Infinite Server Poisson Queue]]
- [[3 Reference/families-migrate-to-an-area_202604092034\|Families Migrate to an Area]]
- [[3 Reference/busy-periods-in-single-server-poisson-arrival-queues_202604092034\|Busy Periods in Single Server Poisson Arrival Queues]]
- [[3 Reference/gamma-density_202604092034\|Gamma Density]]
- [[3 Reference/insurance-company-policyholders_202604092034\|Insurance Company Policyholders]]
- [[3 Reference/example-transition-matrix_202603280854\|Transition Matrix Example]]
- [[3 Reference/example-n-step-transition_202603280855\|n-step Transition Matrix Example]]
- [[3 Reference/example-gambling-model_202603280856\|Gambling Model]]
- [[3 Reference/example-gambler-ruin-fsa_202603280843\|First Step Analysis - Gambler's Ruin]]
- [[3 Reference/example-social-class_202603280900\|Social Class Problem Example]]
- [[3 Reference/example-random-walk-model_202603280910\|Random Walk Model Example]]