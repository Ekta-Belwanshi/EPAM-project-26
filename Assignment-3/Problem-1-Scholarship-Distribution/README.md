# Problem 1: Scholarship Distribution

## Problem Statement

A college has a limited budget for scholarships. Each student has a minimum scholarship amount they are willing to accept. The goal is to maximize the number of students who receive scholarships without exceeding the total budget.

Each student can receive at most one scholarship.

## Approach

This problem is solved using a **Greedy Algorithm**.

The scholarship requirements are sorted in increasing order. We select students starting from the smallest scholarship requirement so that the available budget can accommodate the maximum possible number of students.

## Algorithm

1. Read the number of students and the total budget.
2. Store the minimum scholarship requirement of each student.
3. Sort the scholarship requirements in increasing order.
4. Traverse the sorted requirements.
5. If the current scholarship can be paid from the remaining budget, select the student and subtract the amount from the budget.
6. Stop when the budget is insufficient.
7. Print the number of selected students.

## Complexity

* **Time Complexity:** `O(N log N)`
* **Space Complexity:** `O(N)`

## Example

### Input

```text
5 20
4 8 2 6 5
```

### Output

```text
4
```

## File

`solution.cpp`
