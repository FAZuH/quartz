---
{"publish":true,"created":"2025-08-15T13:53:58.548+07:00","modified":"2025-08-16T01:22:20.022+07:00","published":"2025-08-16T01:22:20.022+07:00","cssclasses":"","creation-time":"2025-03-11 07:33","status":"adult","tags":null,"parent":["[[data structures and algorithms]]"]}
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
