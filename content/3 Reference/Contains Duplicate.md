---
{"creation-time":"2025-03-11 07:33","status":"adult","tags":null,"parent":["[[dsa problems]]"],"publish":true,"PassFrontmatter":true}
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
