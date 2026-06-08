---
publish: true
created: 2026-04-09T23:07:39.761+07:00
modified: 2026-04-09T23:07:39.762+07:00
published: 2026-04-09T23:07:39.762+07:00
creation-time: 2025-03-11 08:07
status: complete
tag:
parent:
  - "[[dsa problems]]"
---

- Source: https://neetcode.io/problems/is-anagram

## Solution

```cpp
class Solution2 {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;

        unordered_map<char, int> mapS;
        unordered_map<char, int> mapT;
        for (int i = 0; i < s.length(); i++) {
            mapS[s[i]]++;
            mapT[t[i]]++;
        }

        return mapS == mapT;
    }
};
```

- Time complexity: $O(n + m)$
- Space complexity: $O(1)$   (`s` and `t` has 26 possible values a-z)

## Optimal solution

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }

        vector<int> count(26, 0);
        for (int i = 0; i < s.length(); i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }

        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        return true;
    }
};
```

- Time complexity: $O(n + m)$
- Space complexity: $O(1)$   (`s` and `t` has 26 possible values a-z)

Faster than [[#My solution]].

Because `s` and `t` has 26 possible values, we can use a vector `count` with initial value 26 of `0` elements.

We use each element of `count` a counter of their corresponding character.

Characters from `s` increments the count, while characters from `t` decrements the count.

If at the end all elements of `count` goes back to `0`, then the characters "balanced" out each other, meaning `s` and `t` is an anagram.

Otherwise, `s` and `t` is not an anagram.
