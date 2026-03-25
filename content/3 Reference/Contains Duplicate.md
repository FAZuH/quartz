---
publish: true
created: 2026-03-25T15:22:40.640+07:00
modified: 2026-03-25T15:22:40.640+07:00
published: 2026-03-25T15:22:40.640+07:00
creation-time: 2025-03-11 07:33
status: complete
tags:
parent:
  - "[[data structures and algorithms]]"
---

- Source: https://neetcode.io/problems/duplicate-integer

## Solution

```python
class Solution:
	def hasDuplicate(nums: list[int]):
		occurred: set[int] = set()
		for n in nums:
			if n in occurred:
				return True
			occurred.insert(n)
		return False
```

- Time complexity: $O(n)$
- Space complexity: $O(n)$
