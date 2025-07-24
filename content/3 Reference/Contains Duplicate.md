---
{"publish":true,"created":"2025-07-24T11:50:56.284+07:00","modified":"2025-07-24T11:50:56.285+07:00","published":"2025-07-24T11:50:56.285+07:00","cssclasses":"","creation-time":"2025-03-11 07:33","status":"adult","tags":null,"parent":["[[dsa problems]]"]}
---


- Source: https://neetcode.io/problems/duplicate-integer

## My solution

```cpp
class Solution {
  public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_set<int> occurred;
        for (int n : nums) {
            if (occurred.count(n))
                return true;
            occurred.insert(n);
        }
        return false;
    }
};
```

- Time complexity: $O(n)$
- Space complexity: $O(n)$
