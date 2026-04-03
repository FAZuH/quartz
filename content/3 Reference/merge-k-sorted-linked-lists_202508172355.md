---
publish: true
aliases:
  - Merge K Sorted Linked Lists
created: 2026-03-25T15:22:40.592+07:00
modified: 2026-03-25T15:22:40.592+07:00
published: 2026-03-25T15:22:40.592+07:00
cssclasses: ""
creation-time: 2025-08-17 23:55
status: in progress
tag:
parent: "[[dsa-problems_202508172322]]"
---

https://leetcode.com/problems/merge-k-sorted-lists/description/

## Solution 1

 You can copy the algorithm in [[3 Reference/merge-two-sorted-linked-lists_202508151417\|Merge Two Sorted Linked Lists]]:

```python
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:  # pyright: ignore[reportRedeclaration]
        lists: List[ListNode] = list(filter(lambda l: l is not None, lists))  # pyright: ignore[reportAssignmentType,reportDeprecated]
        # INVARIANT: There is no empty list in `lists`
        # INVARIANT: Each list in 'lists' is sorted

        # CASE: 'lists' is empty or has 1 list
        if len(lists) <= 1:
            return None
        # INVARIANT: 'lists' has at least 2 lists

        head = lists[0]
        for l in lists[1:]:
            head = self.mergeSortedLists(head, l)

        return head


    def mergeSortedLists(self, l_head: Optional[ListNode], r_head: Optional[ListNode]) -> Optional[ListNode]:
        if l_head is None:
            return r_head
        if r_head is None:
            return l_head
        # INVARIANT: l_head and r_head is not None
        # INVARIANT: Each list is sorted

        # NOTE: First, choose which node will be head of the merged list
        if l_head.val < r_head.val:
            head = l_head
            l_head = l_head.next
        else:
            head = r_head
            r_head = r_head.next
        # NOTE: tail is tail of the merged list
        tail = head

        while l_head is not None and r_head is not None:
            if l_head.val < r_head.val:
                # NOTE: 'attach' left list to merged list
                tail.next = l_head
                # NOTE: Set new tail
                tail = tail.next
                # NOTE: 'pop' left list
                l_head = l_head.next
            else:
                tail.next = r_head
                tail = tail.next
                r_head = r_head.next
        # INVARIANT: left xor right is None

        if l_head is not None:
            tail.next = l_head
        else:
            tail.next = r_head

        return head 
```

## Solution 2

Rather than merging two lists at a time, you may merge all at once using a similar algorithm as [[3 Reference/merge-k-sorted-linked-lists_202508172355#Solution 1]]:

> [!note] [[3 Reference/merge-k-sorted-linked-lists_202508172355#Solution 1]] is generally faster than this solution

```python
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:  # pyright: ignore[reportRedeclaration]
        lists: List[ListNode] = list(filter(lambda l: l is not None, lists))  # pyright: ignore[reportAssignmentType,reportDeprecated]
        # INVARIANT: There is no empty list in `lists`
        # INVARIANT: Each list in `lists` is sorted

        # CASE: `lists` is empty or has 1 list
        if len(lists) == 1:
            return lists[0]
        if len(lists) == 0:
            return None
        # INVARIANT: `lists` has at least 2 lists

        # NOTE: Pick head that has the smallest value
        head_idx = min(range(len(lists)), key=lambda i: lists[i].val)
        tail = head = lists[head_idx]

        if tail.next is not None:
            lists[head_idx] = tail.next
        else:
            lists.pop(head_idx)

		# NOTE: Keep beheading `lists` that has smallest value, and attach its head into tail of the new merged list
        while len(lists) > 0:
			# NOTE: Pick list that has the smallest head value
            curr_idx = min(range(len(lists)), key=lambda i: lists[i].val)
            tail.next = lists[curr_idx]
            tail = tail.next
			
            if tail.next is not None:
                lists[curr_idx] = tail.next
            else:
                lists.pop(curr_idx)

        return head
```