---
publish: true
aliases:
  - Insertion Sort
created: 2026-04-09T23:07:39.417+07:00
modified: 2026-04-09T23:07:39.418+07:00
published: 2026-04-09T23:07:39.418+07:00
creation-time: 2025-08-17 17:30
status: in progress
tags:
parent:
  - "[[sorting-algorithms_202508172342|sorting algorithms]]"
---

## Implementation

```python
class InsertionSort(Sort[int]):
    def sort(self, array: list[int]):
        # CASE: array has less than 2 elements
        if len(array) < 2:
            return array
        # INVARIANT: array has at least 2 element

        # NOTE:
        # i: Highest index of sorted elements
        for i in range(len(array) - 1):
            j = i + 1
            # NOTE: At this moment, j is the index of value being 'inserted'
            while j > 0 and array[j-1] > array[j] and j != 0:
                array[j-1], array[j] = array[j], array[j-1]
                j -= 1
        return array
```
