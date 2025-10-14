---
{"publish":true,"aliases":["Merge Two Sorted Linked Lists"],"created":"2025-10-14T04:15:27.041+07:00","modified":"2025-10-14T04:15:27.041+07:00","published":"2025-10-14T04:15:27.041+07:00","cssclasses":"","creation-time":"2025-08-15 14:17","status":"baby","tags":null,"parent":["[[dsa-problems_202508172322|dsa problems]]"]}
---

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from `list1` and `list2`.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/51adfea9-493a-4abb-ece7-fbb359d1c800/public)

**Constraints:**

- `0 <= The length of the each list <= 100`.
- `-100 <= Node.val <= 100`

## Solution

```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # CASE: list1 or list2 is None
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        # INVARIANT: list1 and list2 is not None

        # NOTE: 
        # `head`: Head of the merged list
        # `prev`: Previously processed node
        # `list1`: Remaining nodes of list1
        # `list2`: Remaining nodes of list2

        # NOTE: The idea is we pop head nodes one by one in `list1` and `list2`,
        # and arrange them using `prev`.

        # NOTE: 
        # 1. Determine the `head` of merged node. For return
        # 2. Set `prev`. We need to keep setting the `prev.next` until `list` and `list2` is empty
        # 3. Pop head of `list1` or `list2` to process next node
        if list1.val < list2.val:
            head = prev = list1
            list1 = list1.next
        else:
            head = prev = list2
            list2 = list2.next

        while not (list1 is None or list2 is None):
            if list1.val < list2.val:
                prev.next = list1
                prev = list1
                list1 = list1.next
            else:
                prev.next = list2
                prev = list2
                list2 = list2.next
        # INVARIANT: list1 xor list2 is None

        prev.next = list1 if list1 is not None else list2

        return head
```