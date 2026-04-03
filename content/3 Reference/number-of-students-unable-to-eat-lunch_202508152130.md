---
publish: true
aliases:
  - Number of Students Unable to Eat Lunch
created: 2026-03-25T15:22:40.625+07:00
modified: 2026-03-25T15:22:40.625+07:00
published: 2026-03-25T15:22:40.625+07:00
cssclasses: ""
creation-time: 2025-08-15 21:30
status: in progress
tags:
parent:
  - "[[dsa-problems_202508172322|dsa problems]]"
---

## Solution
```python
from typing import List

class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        # NOTE: 
        # - The order of sandwiches matter
        # - students and sandwiches consists of 0 and 1
        while True:
            # CASE: students is empty
            if len(students) == 0:
                return 0
            # INVARIANT: students is not empty
            
            # CASE: sandwiches is empty
            if len(sandwiches) == 0:
                return len(students)
            # INVARIANT: sandwiches is not empty

            # COROLLARY: students is not empty and sandwiches is not empty

            student = students.pop(0)
            sandwich = sandwiches[0]

            if student == sandwich:
                _ = sandwiches.pop(0)
                continue
            # INVARIANT: student != sandwich

            students.append(student)

            # CASE: Preferences of remaining students does not exist in sandwiches
            if students.count(sandwich) == 0:
                return len(students)

```

