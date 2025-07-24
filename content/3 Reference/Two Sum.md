---
{"publish":true,"created":"2025-07-24T11:50:56.276+07:00","modified":"2025-07-24T11:50:56.277+07:00","published":"2025-07-24T11:50:56.277+07:00","cssclasses":"","creation-time":"2025-03-11 08:48","status":"adult","tags":null,"parent":["[[dsa problems]]"]}
---


- Source: https://neetcode.io/problems/two-integer-sum

## My solution

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            for (int j = 0; j < nums.size(); j++) {
                if (i == j) continue;
                if (nums[j] == complement) return {i, j};
            }
        }
        return {0, 0};  // Shouldn't happen
    }
};
```

- Time complexity: $O(n^2)$
- Space complexity: $O(1)$

## Optimal solution

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        unordered_map<int, int> prevMap; 

        for (int i = 0; i < n; i++) {
            int diff = target - nums[i];
            if (prevMap.find(diff) != prevMap.end()) {
                return {prevMap[diff], i};
            }
            prevMap.insert({nums[i], i});
        }
        return {};
    }
};
```

- See: https://youtu.be/KLlXCFG5TnA
