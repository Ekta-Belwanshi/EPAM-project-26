# Problem 2: Maximum Learning Points

## Problem Statement

A student has a sequence of topics, each providing a certain number of learning points. The student cannot select two consecutive topics.

The goal is to determine the maximum learning points that can be obtained without selecting two consecutive topics.

## Approach

This problem is solved using **Dynamic Programming**.

For each topic, there are two choices:

* Skip the current topic.
* Select the current topic and add its points to the best result obtained two positions earlier.

Only the results from the previous two positions are required, so the DP array is optimized to constant extra space.

## Algorithm

1. Read the number of topics and their learning points.
2. Initialize the maximum points for the first topic.
3. For each remaining topic:

   * Calculate the maximum points by either skipping or selecting the current topic.
   * Update the previous two DP values.
4. Print the maximum learning points.

## Complexity

* **Time Complexity:** `O(N)`
* **Space Complexity:** `O(1)`

## Example

### Input

```text
6
5 1 2 10 6 2
```

### Output

```text
17
```

## File

`solution.cpp`
