---
publish: true
aliases:
  - Gambler's Fallacy
created: 2026-04-09T23:07:39.397+07:00
modified: 2026-04-22T11:14:53.076+07:00
published: 2026-04-22T11:14:53.076+07:00
cssclasses: ""
creation-time: 2026-04-05 18:35
status: in progress
tags:
parent:
  - "[[logical-fallacies]]"
---


## Definition

Let:
- $E_1, E_2, \dots, E_n$ : A sequence of independent random events
- $P(E_{n+1})$ : The probability of the next event

Then an argument commits the **Gambler's Fallacy** if and only if it asserts:
$$
P(E_{n+1} \mid E_1, E_2, \dots, E_n) \neq P(E_{n+1})
$$

> [!TIP] Interpretation
> Past independent events do not affect future probabilities. Each event is independent.

## Examples

> [!EXAMPLE] Example 1: The Roulette Wheel
> **Scenario:** After seeing red come up 10 times in a row at roulette, a gambler bets heavily on black, believing it's "due" to come up.
>
> **Why it fails:** Each roulette spin is independent. The wheel has no memory of past spins. The probability of red or black remains approximately 50% (excluding the green zero) regardless of history.

> [!EXAMPLE] Example 2: The Coin Toss Streak
> **Scenario:** Someone flips a coin and gets heads 8 times in a row. They believe the next flip is much more likely to be tails to "balance out" the streak.
>
> **Why it fails:** A fair coin has a 50% chance of heads on every flip, regardless of previous outcomes. The coin doesn't know or care about the streak.

> [!EXAMPLE] Example 3: The Lottery Numbers
> **Scenario:** A lottery player avoids numbers that won recently, believing those numbers are "used up" and less likely to win again.
>
> **Why it fails:** Lottery drawings are independent events. Each number has the same probability of being drawn every time, regardless of when it last appeared.

> [!EXAMPLE] Example 4: The Slot Machine
> **Scenario:** A casino patron plays a slot machine for hours without winning, believing they're "building up" to a big payout that must come soon.
>
> **Why it fails:** Modern slot machines use random number generators that make each spin independent. Previous losses don't increase future winning probabilities.

> [!EXAMPLE] Example 5: The Sports Slump
> **Scenario:** A basketball player has made 15 free throws in a row. Commentators say they're "due for a miss" because the streak can't continue forever.
>
> **Why it fails:** If the player's skill is consistent, each free throw has the same probability of success. The streak doesn't create an opposing force—unless the pressure affects performance, which is a separate issue.