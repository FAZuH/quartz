---
publish: true
aliases:
  - Selection Sort
created: 2026-04-09T23:07:39.581+07:00
modified: 2026-04-09T23:07:39.582+07:00
published: 2026-04-09T23:07:39.582+07:00
creation-time: 2025-08-17 23:50
status: in progress
tag:
parent: "[[sorting-algorithms_202508172342]]"
---

## Implementation

```python
class SelectionSort(Sort[int]):
    def sort(self, array: list[int]) -> list[int]:
        size = len(array)
        for i in range(size - 1):
            min_idx = min(range(i, size), key=lambda j: array[j])
            array[i], array[min_idx] = array[min_idx], array[i]
        return array
```
