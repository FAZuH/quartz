---
publish: true
aliases:
  - sorting algorithms
created: 2026-02-22T19:24:22.650+07:00
modified: 2026-02-22T19:24:22.653+07:00
published: 2026-02-22T19:24:22.653+07:00
tags:
  - type/index
cssclasses: ""
creation-time: 2025-08-17 23:42
status: baby
tag: type/index
parent: "[[algorithm]]"
---


> [!tip]
> Rather than memorizing the procedures, I find it more helpful to imagine myself sorting an object with my hand using a specific algorithm.
>
> I recommend https://visualgo.net/en/sorting for visualizing sorting algorithms.

- [[3 Reference/selection-sort_202508172350\|Selection Sort]]: Move <u>minimum of unsorted</u> subarray into correct position in the sorted subarray.
- [[3 Reference/insertion-sort_202508171730\|Insertion Sort]]: <u>Move unsorted</u> element into correct position in the sorted subarray.
- [[3 Reference/merge-sort_202508171845\|Merge Sort]]: 
	1. <u>Split array</u> into small (length<=2) subarrays.
	2. Sort all subarrays.
	3. Merge all subarrays into a sorted array.
- [[3 Reference/quick-sort_202508172353\|Quick Sort]]: 
	1. Pick a <u>pivot</u> element.
	2. Make array so elements "left" of pivot is smaller than pivot, and elements "right" of pivot is larger.
	3. Recursively call quicksort on "left" and "right".
- [[3 Reference/bucket-sort_202508180211\|Bucket Sort]]: Use "<u>buckets</u>" - An array of lists. Assign each element in to 1 bucket, usually by its value (or function of).
- [[3 Reference/counting-sort_202508181935\|Counting Sort]]: Get <u>counts</u> for all unique elements, then sort array using the counts.