---
publish: true
aliases:
  - Valid Parantheses
created: 2026-04-09T23:07:39.762+07:00
modified: 2026-04-09T23:07:39.763+07:00
published: 2026-04-09T23:07:39.763+07:00
cssclasses: ""
creation-time: 2025-08-15 02:52
status: in progress
tags:
parent:
  - "[[dsa-problems_202508172322|dsa problems]]"
---

https://neetcode.io/problems/validate-parentheses?list=neetcode150

You are given a string `s` consisting of the following characters: `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`.

The input string `s` is valid if and only if:

C1. Every open bracket is closed by the same type of close bracket.
C2. Open brackets are closed in the correct order.
C3. Every close bracket has a corresponding open bracket of the same type.

Return `true` if `s` is a valid string, and `false` otherwise.

## Solution

```python
class Solution:
	CLOSING_TO_OPENING = {
		")": "(",
		"}": "{",
		"]": "["
	}
	
	def isValid(self, s: str) -> bool:
		# INVARIANT: `s` consists of ( ) { } [ and ].
		if len(s) == 0:  # CASE: Empty string
			return False
			
		stack: list[str] = []
		for ch in s:
			if ch in self.CLOSING_TO_OPENING:  # CASE: `ch` is closing
				opening = self.CLOSING_TO_OPENING[closing := ch]
				if len(stack) != 0 and stack[-1] != opening:  # CASE: C2, C3
					return False
				stack.pop()
			else:  # CASE: `ch` is opening
				stack.append(ch)
				
		return len(stack) != 0  # CASE: C1
```

