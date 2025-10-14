---
{"publish":true,"aliases":["Selection Sort"],"created":"2025-10-14T04:15:27.043+07:00","modified":"2025-10-14T04:15:27.043+07:00","published":"2025-10-14T04:15:27.043+07:00","cssclasses":"","creation-time":"2025-08-17 23:50","status":"baby","tag":null,"parent":"[[sorting-algorithms_202508172342]]"}
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
