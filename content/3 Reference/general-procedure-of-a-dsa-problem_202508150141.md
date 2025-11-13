---
{"publish":true,"aliases":["General Procedure of a DSA Problem"],"created":"2025-10-14T04:15:27.067+07:00","modified":"2025-10-14T04:15:27.067+07:00","published":"2025-10-14T04:15:27.067+07:00","cssclasses":"","creation-time":"2025-08-15 01:41","status":"baby","tag":null,"parent":"[[data structures and algorithms]]"}
---

## Procedure
1. Identify input, output, assumptions
2. Create test cases: Try cover all edge cases
3. Repeat until sufficient:
	1. Hypothesize solution: State in plain english
	2. Implement solution, and test. Fix bugs if any
	3. Analyze solution's complexity. Identify inefficiencies
	4. Hypothesize new solution to eliminate the efficiency

## Comment Types
1. Prefix comments describing code that handles a specific case with "CASE: "
	- Usually written after a logic that singles out a specific case. e.g., `if val < min:  # CASE: val is new lowest`
	- A binary case DOES NOT require an opposite case to be implicitly written. For example, the opposite case is not written in the `else` line below:
	```python
	if val < min:  # CASE: val is new lowest
		...
	else:
		...
	```
2. Prefix comments describing [[3 Reference/Invariants\|invariants]] following a code that eliminates a case with "INVARIANT: "
   - Usually written in the same line or below the corresponding case comment.
   - Binary cases DOES NOT require an assert note. e.g.,  `CASE: List is empty` implies an `INVARIANT: List is not empty`
   ```python
	if linked_list.head is None:  # CASE: List is empty
		...
		return
	# INVARIANT: List has at least 1 element
	```
1. Prefix note comments with **"NOTE: "**

