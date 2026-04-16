---
publish: true
aliases:
  - Analyzing Greedy Algorithms for the Assignment Problem
created: 2026-04-09T23:29:02.773+07:00
modified: 2026-04-09T23:29:02.774+07:00
published: 2026-04-09T23:29:02.774+07:00
cssclasses: ""
creation-time: 2026-04-09 20:33
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---


## Example

Example 5.7 (Analyzing Greedy Algorithms for the Assignment Problem)
A group of n people is to be assigned to a set of n jobs, with one person assigned to
each job. For a given set of n2 values Cij , i, j = 1, . . . , n, a cost Cij is incurred when
person i is assigned to job j. The classical assignment problem is to determine the
set of assignments that minimizes the sum of the n costs incurred.
Rather than trying to determine the optimal assignment, let us consider two
heuristic algorithms for solving this problem. The ﬁrst heuristic is as follows.
Assign person 1 to the job that results in the least cost. That is, person 1 is
assigned to job j1 where C(1, j1 ) = minimumj C(1, j). Now eliminate that job
from consideration and assign person 2 to the job that results in the least cost.
That is, person 2 is assigned to job j2 where C(2, j2 ) = minimumj=j1 C(2, j). This
procedure is then continued until all n persons are assigned. Since this procedure
always selects the best job for the person under consideration, we will call it
Greedy Algorithm A.
The second algorithm, which we call Greedy Algorithm B, is a more “global”
version of the ﬁrst greedy algorithm. It considers all n2 cost values and chooses
the pair i1 , j1 for which C(i, j) is minimal. It then assigns person i1 to job j1 . It
then eliminates all cost values involving either person i1 or job j1 (so that (n − 1)2
values remain) and continues in the same fashion. That is, at each stage it chooses
